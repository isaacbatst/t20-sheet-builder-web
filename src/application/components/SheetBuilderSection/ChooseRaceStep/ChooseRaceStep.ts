import { RaceInterface, RaceName } from "t20-sheet-builder";
import { RaceStepInterface } from "./RaceStep";
import { RaceStepFactory } from "./RaceStepFactory";

export type ChooseRaceStepInterface = {
  getRaceStep(): RaceStepInterface | undefined
  getRace(): RaceInterface | undefined
  selectRace(raceStep: RaceStepInterface): void
  makeRaceStep(raceName: RaceName): RaceStepInterface 
  confirm(): void
}

export class ChooseRaceStep implements ChooseRaceStepInterface {
  private raceStep?: RaceStepInterface;
  private race?: RaceInterface

  confirm(): void {
    if(!this.raceStep) throw new Error('UNDEFINED_RACE')
    this.race = this.raceStep.build()
  }

  getRace(): RaceInterface | undefined {
    return this.race
  }

  getRaceStep(): RaceStepInterface | undefined {
    return this.raceStep
  }

  selectRace(raceStep: RaceStepInterface) {
    this.raceStep = raceStep
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    return new RaceStepFactory().make(raceName)
  }
}