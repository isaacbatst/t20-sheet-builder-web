import { immerable } from "immer";
import { RoleInterface, SkillName, Warrior } from "t20-sheet-builder";
import { RoleFactory } from "./RoleFactory";

export class RoleFactoryWarrior implements RoleFactory {
  [immerable] = true;
  constructor(readonly chosenSkills: SkillName[]){}

  make(): RoleInterface {
    return new Warrior(this.chosenSkills)
  }
}