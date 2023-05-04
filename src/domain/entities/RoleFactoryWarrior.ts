import { RoleInterface, SkillName, Warrior } from "t20-sheet-builder";
import { RoleFactory } from "./RoleFactory";

export class RoleFactoryWarrior implements RoleFactory {
  constructor(readonly chosenSkills: SkillName[]){}

  make(): RoleInterface {
    return new Warrior(this.chosenSkills)
  }
}