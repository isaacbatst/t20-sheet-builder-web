import React from 'react'
import { Attributes, RaceName } from 't20-sheet-builder'
import RacesSelect from './RacesSelect'
import SheetBuilderFormStepRaceDefinitionDwarf from './SheetBuilderFormStepRaceDefinitionDwarf'
import SheetBuilderFormStepRaceDefinitionHuman from './SheetBuilderFormStepRaceDefinitionHuman/SheetBuilderFormStepRaceDefinitionHuman'
import AtrributesPreview from './AtrributesPreview'

export type RaceComponentProps = {
  setAttributeModifiers: (attributeModifiers: Partial<Attributes>) => void
  attributesPreview: JSX.Element
}

const raceComponents: Record<RaceName, React.FC<RaceComponentProps>> = {
  [RaceName.dwarf]: SheetBuilderFormStepRaceDefinitionDwarf,
  [RaceName.human]: SheetBuilderFormStepRaceDefinitionHuman,
}

const SheetBuilderFormStepRaceDefinition = () => {
  const [race, setRace] = React.useState<RaceName>()
  const [attributeModifiers, setAttributeModifiers] = React.useState<Partial<Attributes>>({})
  const changeRace = (race?: RaceName) => {
    setRace(race)
    setAttributeModifiers({})
  }  
  const RaceComponent = race ? raceComponents[race] : null
  return (
    <section className='py-6'>
      <RacesSelect changeRace={changeRace} />
      {RaceComponent && <RaceComponent 
        setAttributeModifiers={setAttributeModifiers} 
        attributesPreview={<AtrributesPreview attributeModifiers={attributeModifiers} />}
      />}
    </section>
  )
}

export default SheetBuilderFormStepRaceDefinition