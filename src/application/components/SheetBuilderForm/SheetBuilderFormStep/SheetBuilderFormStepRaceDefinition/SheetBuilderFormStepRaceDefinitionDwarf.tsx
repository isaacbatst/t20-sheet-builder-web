import { useAppDispatch } from '@/application/store/hooks'
import { submitRaceDwarf } from '@/application/store/slices/sheetBuilder/sheetBuilderSlice'
import React from 'react'
import { Dwarf } from 't20-sheet-builder'
import RaceDefinitionConfirmButton from './RaceDefinitionConfirmButton'
import { RaceComponentProps } from './SheetBuilderFormStepRaceDefinition'

const SheetBuilderFormStepRaceDefinitionDwarf: React.FC<RaceComponentProps> = ({
  attributesPreview,
  confirmRace,
}) => {
  const makeDwarf = () => {
    return new Dwarf()
  }
  const createSubmitAction = (dwarf: Dwarf) => {
    return submitRaceDwarf({attributeModifiers: dwarf.attributeModifiers})
  }

  const confirmDwarf = () => {
    confirmRace(makeDwarf, createSubmitAction)
  }

  return (
    <div>
      <p className='mb-6'>Duro como pedra!</p>
      {attributesPreview}
      <RaceDefinitionConfirmButton confirmRace={confirmDwarf} />
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionDwarf