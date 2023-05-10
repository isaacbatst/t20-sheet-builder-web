import { submitRole } from "@/application/store/slices/sheetBuilder/sheetBuilderSliceRoleDefinition";
import { ArcanisPathWizardFocusName, Arcanist, ArcanistBuilder, ArcanistLineage, ArcanistLineageDraconic, ArcanistLineageFaerie, ArcanistLineageRed, ArcanistLineageType, ArcanistPath, ArcanistPathMage, ArcanistPathName, ArcanistPathSorcerer, ArcanistPathWizard, ArcanistPathWizardFocusFactory, GeneralPowerFactory, Level, SpellFactory } from "t20-sheet-builder";
import { Role } from "t20-sheet-builder/build/domain/entities/Role/Role";
import { ConfirmFunction } from "../../../useSheetBuilderSubmit";
import { useArcanistContext } from "./SheetBuilderFormRoleDefinitionArcanistContext";

export const useConfirmArcanist = (confirmRole: ConfirmFunction<Role>) => {
  const {
    initialSpells, 
    selectedSkillsByGroup, 
    mageSpell,
    selectedPath,
    sorcererLineage, 
    wizardFocus,
    sorcererLineageDraconicDamageType,
    sorcererLineageFaerieExtraSpell, 
    sorcererLineageRedAttribute,
    sorcererLineageRedExtraPower
  } = useArcanistContext()

  const makeArcanist = (): Arcanist => {
    if(!selectedPath) {
      throw new Error('MISSING_ARCANIST_PATH')
    }

    let path: ArcanistPath | undefined;
    if(selectedPath === 'mage'){
      if(!mageSpell) throw new Error('MISSING_MAGE_SPELL')
      const spell = SpellFactory.make(mageSpell)
      path = new ArcanistPathMage(spell)
    }

    if(selectedPath === 'wizard'){
      if(!wizardFocus) throw new Error('MISSING_WIZARD_FOCUS')
      const focus = ArcanistPathWizardFocusFactory.make(wizardFocus as ArcanisPathWizardFocusName)
      path = new ArcanistPathWizard(focus)
    }

    if(selectedPath === 'sorcerer'){
      let lineage: ArcanistLineage | undefined = undefined
      if(!sorcererLineage) throw new Error('MISSING_SORCERER_LINEAGE')
      if(sorcererLineage === ArcanistLineageType.draconic) {
        if(!sorcererLineageDraconicDamageType) throw new Error('MISSING_DRACONIC_DAMAGE_TYPE')
        lineage = new ArcanistLineageDraconic(sorcererLineageDraconicDamageType)
      }

      if(sorcererLineage === ArcanistLineageType.faerie) {
        if(!sorcererLineageFaerieExtraSpell) throw new Error('MISSING_FAERIE_EXTRA_SPELL')
        const spell = SpellFactory.make(sorcererLineageFaerieExtraSpell)
        lineage = new ArcanistLineageFaerie(spell)
      }

      if(sorcererLineage === ArcanistLineageType.red) {
        if(!sorcererLineageRedExtraPower) throw new Error('MISSING_RED_EXTRA_POWER')
        const power = GeneralPowerFactory.make({name: sorcererLineageRedExtraPower})
        lineage = new ArcanistLineageRed(power, sorcererLineageRedAttribute)
      }

      if(!lineage) throw new Error('UNKNOWN_LINEAGE_ERROR')
      path = new ArcanistPathSorcerer(lineage)
    }
    
    if(!path) throw new Error('UNKNOWN_PATH_ERROR')
    return ArcanistBuilder
      .chooseSkills(selectedSkillsByGroup.flat())
      .choosePath(path)
      .chooseSpells(initialSpells.map(spellName => SpellFactory.make(spellName)))
  }

  const createSubmitAction = (arcanist: Arcanist) => {
    const path = arcanist.abilitiesPerLevel[Level.one].arcanistPath
    if(path instanceof ArcanistPathMage) {
      return submitRole({
        name: arcanist.name,
        path: ArcanistPathName.mage,
        chosenSkills: arcanist.chosenSkills,
        spells: arcanist.abilitiesPerLevel[Level.one].arcanistSpells.effects.passive.default.spells.map(spell => spell.name),
        extraSpell: path.additionalSpell.name
      })
    }

    if(path instanceof ArcanistPathWizard) {
      return submitRole({
        path: ArcanistPathName.wizard,
        name: arcanist.name,
        chosenSkills: arcanist.chosenSkills,
        spells: arcanist.abilitiesPerLevel[Level.one].arcanistSpells.effects.passive.default.spells.map(spell => spell.name),
        focus: path.focus.equipment.name as ArcanisPathWizardFocusName
      })
    }

    if(path instanceof ArcanistPathSorcerer) {
      if(path.lineage instanceof ArcanistLineageDraconic) {
        return submitRole({
          path: ArcanistPathName.sorcerer,
          name: arcanist.name,
          chosenSkills: arcanist.chosenSkills,
          spells: arcanist.abilitiesPerLevel[Level.one].arcanistSpells.effects.passive.default.spells.map(spell => spell.name),
          lineage: ArcanistLineageType.draconic,
          damageType: path.lineage.effects.basic.passive.damageReduction.damageType
        })
      }

      if(path.lineage instanceof ArcanistLineageFaerie) {
        return submitRole({
          path: ArcanistPathName.sorcerer,
          name: arcanist.name,
          chosenSkills: arcanist.chosenSkills,
          spells: arcanist.abilitiesPerLevel[Level.one].arcanistSpells.effects.passive.default.spells.map(spell => spell.name),
          lineage: ArcanistLineageType.faerie,
          extraSpell: path.lineage.effects.basic.passive.extraSpell.spell.name
        })
      }

      if(path.lineage instanceof ArcanistLineageRed) {
        return submitRole({
          path: ArcanistPathName.sorcerer,
          name: arcanist.name,
          chosenSkills: arcanist.chosenSkills,
          spells: arcanist.abilitiesPerLevel[Level.one].arcanistSpells.effects.passive.default.spells.map(spell => spell.name),
          lineage: ArcanistLineageType.red,
          extraPower: path.lineage.effects.basic.passive.extraTormentaPower.power.name,
          customTormentaAttribute: path.lineage.effects.basic.passive.customTormentaPowersAttribute.attribute
        })
      }
    }
    
    throw new Error('UNKNOWN_PATH_ERROR')
  }

  const confirmArcanist = () => {
    confirmRole(makeArcanist, createSubmitAction)
  } 

  return {
    confirmArcanist,
  }
};