import React from 'react'
import { RaceComponentProps } from '../SheetBuilderFormStepRaceDefinition'
import SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes from './SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes'
import SheetBuilderFormStepRaceDefinitionHumanVersatil from './SheetBuilderFormStepRaceDefinitionHumanVersatil'


const SheetBuilderFormStepRaceDefinitionHuman: React.FC<RaceComponentProps> = ({
  setAttributeModifiers,
  attributesPreview
}) => {
  

  return (
    <div>
      <SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes setAttributeModifiers={setAttributeModifiers} />
      {attributesPreview}
      <SheetBuilderFormStepRaceDefinitionHumanVersatil />
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionHuman