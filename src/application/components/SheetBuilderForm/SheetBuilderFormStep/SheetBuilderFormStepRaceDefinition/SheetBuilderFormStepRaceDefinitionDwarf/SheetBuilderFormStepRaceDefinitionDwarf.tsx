import React from 'react'
import { Dwarf } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { RaceComponentProps } from '../SheetBuilderFormStepRaceDefinition'
import { submitRaceDwarf } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRaceDefinition'

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
      <ConfirmButton confirm={confirmDwarf} />
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionDwarf