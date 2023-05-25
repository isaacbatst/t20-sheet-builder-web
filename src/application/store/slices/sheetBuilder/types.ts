import { Attribute, Attributes, GeneralPowerName, OriginName, RaceName, RoleName, SerializedAcolyte, SerializedAnimalsFriend, SerializedArcanist, SkillName } from "t20-sheet-builder"
import { SerializedOriginBenefit } from "t20-sheet-builder/build/domain/entities/Origin/OriginBenefit/SerializedOriginBenefit"

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


export type SheetBuilderStateRole<T = SheetBuilderStateRoleWarrior | SerializedArcanist>  = {
  chosenSkills: SkillName[]
  name: RoleName
} & T

export type SheetBuilderStateRoleWarrior = {
  name: RoleName.warrior
}

export type SheetBuilderStateOrigin<T = SerializedAnimalsFriend | SerializedAcolyte> = {
  name: OriginName,
  choosenBenefits: SerializedOriginBenefit[]
} & T