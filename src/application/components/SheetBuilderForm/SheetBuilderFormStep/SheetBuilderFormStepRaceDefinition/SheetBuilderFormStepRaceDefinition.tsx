import React from 'react'
import { RaceName } from 't20-sheet-builder'
import RacesSelect from './RacesSelect'
import SheetBuilderFormStepRaceDefinitionDwarf from './SheetBuilderFormStepRaceDefinitionDwarf'
import SheetBuilderFormStepRaceDefinitionHuman from './SheetBuilderFormStepRaceDefinitionHuman'


const raceComponents: Record<RaceName, React.FC> = {
  [RaceName.dwarf]: SheetBuilderFormStepRaceDefinitionDwarf,
  [RaceName.human]: SheetBuilderFormStepRaceDefinitionHuman,
}

const SheetBuilderFormStepRaceDefinition = () => {
  const [race, setRace] = React.useState<RaceName>()
  const RaceComponent = race ? raceComponents[race] : null
  return (
    <div className='container mx-auto'>
      <RacesSelect setRace={setRace} />
      {RaceComponent && <RaceComponent />}
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinition