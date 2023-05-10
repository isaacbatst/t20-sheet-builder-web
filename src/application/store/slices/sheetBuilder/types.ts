import { ArcanisPathWizardFocusName, ArcanistLineageDraconicDamageType, ArcanistLineageType, ArcanistPathName, Attribute, Attributes, GeneralPowerName, RaceName, RoleName, SkillName, SpellName } from "t20-sheet-builder"

export interface SheetBuilderStateRaceHumanVersatileChoiceSkill {
  type: 'skill',
  name: SkillName
}

export interface SheetBuilderStateRaceHumanVersatileChoicePower {
  type: 'power',
  name: GeneralPowerName
}

export type SheetBuilderStateRaceHumanVersatileChoice = SheetBuilderStateRaceHumanVersatileChoiceSkill | SheetBuilderStateRaceHumanVersatileChoicePower

export interface SheetBuilderStateRaceHuman {
  name: RaceName.human,
  versatileChoices: SheetBuilderStateRaceHumanVersatileChoice[]
  selectedAttributes: Attribute[]
}

export interface SheetBuilderStateRaceDwarf {
  name: RaceName.dwarf
}

export type SheetBuilderStateRace<T = SheetBuilderStateRaceHuman | SheetBuilderStateRaceDwarf> = {
  attributeModifiers: Partial<Attributes>
} & T


export type SheetBuilderStateRole<T = SheetBuilderStateRoleWarrior | SheetBuilderStateRoleArcanist>  = {
  chosenSkills: SkillName[]
  name: RoleName
} & T

export type SheetBuilderStateRoleWarrior = {
  name: RoleName.warrior
}

export type SheetBuilderStateRoleArcanist<
  T = (SheetBuilderStateRoleArcanistWizard | SheetBuilderStateRoleArcanistSorcerer | SheetBuilderStateRoleArcanistMage)> = T & {
  name: RoleName.arcanist
  path: ArcanistPathName
  spells: SpellName[]
}

export type SheetBuilderStateRoleArcanistMage = {
  path: ArcanistPathName.mage,
  extraSpell: SpellName
}

export type SheetBuilderStateRoleArcanistWizard = {
  path: ArcanistPathName.wizard
  focus: ArcanisPathWizardFocusName
}

export type SheetBuilderStateRoleArcanistSorcerer<T = (SheetBuilderStateRoleArcanistSorcererDraconic | SheetBuilderStateRoleArcanistSorcererFaerie | SheetBuilderStateRoleArcanistSorcererRed)> = {
  path: ArcanistPathName.sorcerer
  lineage: ArcanistLineageType
} & T

export type SheetBuilderStateRoleArcanistSorcererDraconic = {
  lineage: ArcanistLineageType.draconic
  damageType: ArcanistLineageDraconicDamageType
}

export type SheetBuilderStateRoleArcanistSorcererFaerie = {
  lineage: ArcanistLineageType.faerie
  extraSpell: SpellName
}

export type SheetBuilderStateRoleArcanistSorcererRed = {
  lineage: ArcanistLineageType.red
  extraPower: GeneralPowerName
  customTormentaAttribute: Attribute
}
