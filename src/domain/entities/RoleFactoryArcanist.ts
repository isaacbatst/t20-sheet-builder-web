import { ArcanistBuilder, ArcanistPath, RoleInterface, SkillName } from "t20-sheet-builder";
import { Spell } from "t20-sheet-builder/build/domain/entities/Spell/Spell";
import { RoleFactory } from "./RoleFactory";

export class RoleFactoryArcanist implements RoleFactory {
  constructor(
    readonly chosenSkills: SkillName[],
    readonly chosenPath: ArcanistPath,
    readonly chosenSpells: Spell[]
  ){}

  make(): RoleInterface {
    return ArcanistBuilder
      .chooseSkills(this.chosenSkills)
      .choosePath(this.chosenPath)
      .chooseSpells(this.chosenSpells)
  }
}