import { ArcanistContextType } from "@/application/components/SheetBuilderForm/SheetBuilderFormStep/SheetBuilderFormStepRoleDefinition/SheetBuilderFormRoleDefinitionArcanist/SheetBuilderFormRoleDefinitionArcanistContext";
import { Arcanist, ArcanistFactory, ArcanistLineageFactory, ArcanistLineageFactoryDraconic, ArcanistLineageFactoryFaerie, ArcanistLineageFactoryRed, ArcanistLineageType, ArcanistPathFactory, ArcanistPathFactoryMage, ArcanistPathFactorySorcerer, ArcanistPathFactoryWizard, ArcanistPathName, SerializedArcanist, SerializedArcanistLineage, SerializedArcanistPath, SerializedRole } from "t20-sheet-builder";


export const getLineageFactoryFromContext = ({
  sorcererLineage: lineage,
  sorcererLineageDraconicDamageType,
  sorcererLineageFaerieExtraSpell,
  sorcererLineageRedAttribute,
  sorcererLineageRedExtraPower
}: Pick<ArcanistContextType, 
  'sorcererLineage' 
  | 'sorcererLineageDraconicDamageType' 
  | 'sorcererLineageFaerieExtraSpell' 
  | 'sorcererLineageRedExtraPower'
  | 'sorcererLineageRedAttribute'>): ArcanistLineageFactory => {
  if(lineage === ArcanistLineageType.draconic && !sorcererLineageDraconicDamageType) {
    throw new Error('MISSING_SORCERER_LINEAGE_DRACONIC_DAMAGE_TYPE')
  }

  if(lineage === ArcanistLineageType.faerie && !sorcererLineageFaerieExtraSpell) {
    throw new Error('MISSING_SORCERER_LINEAGE_FAERIE_EXTRA_SPELL')
  }

  if(lineage === ArcanistLineageType.red && !sorcererLineageRedAttribute) {
    throw new Error('MISSING_SORCERER_LINEAGE_RED_ATTRIBUTE')
  }

  if(lineage === ArcanistLineageType.red && !sorcererLineageRedExtraPower) {
    throw new Error('MISSING_SORCERER_LINEAGE_RED_EXTRA_POWER')
  }

  if(lineage === ArcanistLineageType.draconic && sorcererLineageDraconicDamageType) {
    return new ArcanistLineageFactoryDraconic(sorcererLineageDraconicDamageType)
  }

  if(lineage === ArcanistLineageType.faerie && sorcererLineageFaerieExtraSpell) {
    return new ArcanistLineageFactoryFaerie(sorcererLineageFaerieExtraSpell)
  }

  if(lineage === ArcanistLineageType.red && sorcererLineageRedAttribute && sorcererLineageRedExtraPower) {
    return new ArcanistLineageFactoryRed({
      sorcererLineageRedAttribute,
      sorcererLineageRedExtraPower
    })
  }

  throw new Error('INVALID_ARCANIST_LINEAGE')
}

export const getPathFactoryFromContext = ({
  mageSpell,
  selectedPath,
  sorcererLineage,
  sorcererLineageDraconicDamageType,
  sorcererLineageFaerieExtraSpell,
  sorcererLineageRedAttribute,
  sorcererLineageRedExtraPower,
  wizardFocus,
}: ArcanistContextType): ArcanistPathFactory => {
  if(selectedPath === ArcanistPathName.mage && !mageSpell) throw new Error('MISSING_MAGE_SPELL')
  if(selectedPath === ArcanistPathName.wizard && !wizardFocus)  throw new Error('MISSING_WIZARD_FOCUS')
  if(selectedPath === ArcanistPathName.sorcerer && !sorcererLineage) throw new Error('MISSING_SORCERER_LINEAGE')

  if(selectedPath === ArcanistPathName.mage && mageSpell) {
    return new ArcanistPathFactoryMage(mageSpell)
  }

  if(selectedPath === ArcanistPathName.sorcerer && sorcererLineage) {
    const lineageFactory = getLineageFactoryFromContext({
      sorcererLineage,
      sorcererLineageDraconicDamageType,
      sorcererLineageFaerieExtraSpell,
      sorcererLineageRedAttribute,
      sorcererLineageRedExtraPower,
    })
    return new ArcanistPathFactorySorcerer(lineageFactory)
  }

  if(selectedPath === ArcanistPathName.wizard && wizardFocus) {
    return new ArcanistPathFactoryWizard(wizardFocus)
  }

  throw new Error('INVALID_ARCANIST_PATH')
}

export const getArcanistFactoryFromContext = (context: ArcanistContextType) => {
  if(!context.selectedPath) throw new Error('MISSING_ARCANIST_PATH')
  const arcanistPathFactory = getPathFactoryFromContext(context)
  return new ArcanistFactory(arcanistPathFactory, {
    chosenSkills: context.selectedSkillsByGroup.flat(),
    initialSpells: context.initialSpells
  })
}


export function makeArcanistFromSerialized(serializedRole: SerializedRole<SerializedArcanist>): Arcanist {
  const pathFactory = makePathFactoryFromSerialized(serializedRole.path)
  const arcanistFactory = new ArcanistFactory(pathFactory, {
    chosenSkills: serializedRole.chosenSkills,
    initialSpells: serializedRole.spells
  })
  return arcanistFactory.make()
}

function makePathFactoryFromSerialized(path: SerializedArcanistPath): ArcanistPathFactory {
  if(path.name === ArcanistPathName.mage){
    return  new ArcanistPathFactoryMage(path.extraSpell)
  }

  if(path.name === ArcanistPathName.wizard){
    return  new ArcanistPathFactoryWizard(path.focus)
  }

  if(path.name === ArcanistPathName.sorcerer){
    const lineageFactory = makeLineageFactoryFromSerialized(path.lineage)
    return  new ArcanistPathFactorySorcerer(lineageFactory)
  }

  throw new Error('UNKNOWN_PATH')
}

function makeLineageFactoryFromSerialized(lineage: SerializedArcanistLineage): ArcanistLineageFactory {
  if(lineage.type === ArcanistLineageType.draconic){
    return new ArcanistLineageFactoryDraconic(lineage.damageType)
  }

  if(lineage.type === ArcanistLineageType.faerie){
    return new ArcanistLineageFactoryFaerie(lineage.extraSpell)
  }

  if(lineage.type === ArcanistLineageType.red){
    return new ArcanistLineageFactoryRed({
      sorcererLineageRedAttribute: lineage.customTormentaAttribute,
      sorcererLineageRedExtraPower: lineage.extraPower
    })
  }

  throw new Error('UNKNOWN_LINEAGE')
}