import React, { useEffect } from 'react'
import { RaceComponentProps } from './SheetBuilderFormStepRaceDefinition'
import { Dwarf } from 't20-sheet-builder'

const SheetBuilderFormStepRaceDefinitionDwarf: React.FC<RaceComponentProps> = ({
  setAttributeModifiers,
  attributesPreview
}) => {
  useEffect(() => {
    setAttributeModifiers(Dwarf.attributeModifiers)
  }, [setAttributeModifiers])

  return (
    <div>
      <p className='mb-6'>Duro como pedra!</p>
      {attributesPreview}
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionDwarf