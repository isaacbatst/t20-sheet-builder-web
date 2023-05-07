import { Attributes, GeneralPowerName, RaceName, RoleName, SkillName } from "t20-sheet-builder"
import { UnknownObject } from "t20-sheet-builder/build/common/types/UnknownObject"

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
}

export interface SheetBuilderStateRaceDwarf {
  name: RaceName.dwarf
}

export type SheetBuilderStateRace = {
  attributeModifiers: Partial<Attributes>
} &  (SheetBuilderStateRaceHuman | SheetBuilderStateRaceDwarf)

export type SubmitRacePayload<T extends UnknownObject = UnknownObject> = {
  attributeModifiers: Partial<Attributes>
} & T

export type SubmitRaceHumanPayload = SubmitRacePayload<{
  versatileChoices: SheetBuilderStateRaceHumanVersatileChoice[]
}>

export type SheetBuilderStateRole = {
  chosenSkills: SkillName[]
  name: RoleName
}

export type SubmitRolePayload = SheetBuilderStateRole