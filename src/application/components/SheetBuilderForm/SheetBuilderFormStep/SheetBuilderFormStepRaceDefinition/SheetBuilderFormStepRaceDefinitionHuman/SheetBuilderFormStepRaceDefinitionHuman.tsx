import { submitRace } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRaceDefinition'
import { SheetBuilderStateRaceHumanVersatileChoice } from '@/application/store/slices/sheetBuilder/types'
import React, { useCallback } from 'react'
import { Attribute, Attributes, GeneralPowerName, Human, RaceName, SkillName, VersatileChoiceFactory, VersatileChoiceType } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { RaceComponentProps } from '../SheetBuilderFormStepRaceDefinition'
import SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes from './SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes'
import SheetBuilderFormStepRaceDefinitionHumanVersatile from './SheetBuilderFormStepRaceDefinitionHumanVersatile'

export type AttributeCheckboxes = Record<Attribute, boolean>

const SheetBuilderFormStepRaceDefinitionHuman: React.FC<RaceComponentProps> = ({
  attributesPreview,
  setAttributeModifiers,
  confirmRace
}) => {
  const [firstVersatileOption, setFirstVersatileOption] = React.useState<SkillName>()
  const [secondVersatileOption, setSecondVersatileOption] = React.useState<GeneralPowerName | SkillName>()
  const [secondVersatileOptionType, setSecondVersatileOptionType] = React.useState<VersatileChoiceType>()
  const [attributeCheckboxes, setAttributeCheckboxes] = React.useState<AttributeCheckboxes>({
    charisma: false,
    constitution: false,
    dexterity: false,
    intelligence: false,
    strength: false,
    wisdom: false 
  })

  const selectedAttributes = Object.entries(attributeCheckboxes)
    .filter(([_attribute, checked]) => checked)
    .map(([attribute]) => attribute as Attribute)

  const toggleAttribute = useCallback((attribute: Attribute) => {
    const updated = ({...attributeCheckboxes, [attribute]: !attributeCheckboxes[attribute]})
    const attributeModifiers = Object.entries(updated)
      .reduce<Partial<Attributes>>((acc, [attribute, checked]) => {
        if (checked) {
          acc[attribute as Attribute] = 1
        }
        return acc
      }, {})
    setAttributeCheckboxes(updated)
    setAttributeModifiers(attributeModifiers)
  }, [setAttributeModifiers, attributeCheckboxes])

  const makeHuman = () => {
    if(!firstVersatileOption) {
      throw new Error('MISSING_VERSATILE_FIRST_OPTION')
    }

    if(!secondVersatileOptionType) {
      throw new Error('MISSING_VERSATILE_SECOND_OPTION_TYPE')
    }

    if(!secondVersatileOption) {
      throw new Error('MISSING_VERSATILE_SECOND_OPTION')
    }

    const firstOption = VersatileChoiceFactory.make('skill', firstVersatileOption)
    const secondOption = VersatileChoiceFactory.make(secondVersatileOptionType, secondVersatileOption)

    return new Human(selectedAttributes, [firstOption, secondOption])
  }

  const createSubmitAction = (human: Human) => {
    const choices = human.versatileChoices.map(choice => ({type: choice.type, name: choice.name}))
    return submitRace({
      name: RaceName.human,
      selectedAttributes,
      versatileChoices: choices as SheetBuilderStateRaceHumanVersatileChoice[],
      attributeModifiers: human.attributeModifiers
    })
  }

  return (
    <div className='flex flex-col'>
      <SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes 
        attributesPreview={attributesPreview}
        toggleAttribute={toggleAttribute}
      />
      <SheetBuilderFormStepRaceDefinitionHumanVersatile 
        secondVersatileOptionType={secondVersatileOptionType}
        setFirstVersatileOption={setFirstVersatileOption}
        setSecondVersatileOption={setSecondVersatileOption}
        setSecondVersatileOptionType={setSecondVersatileOptionType}
      />
      <ConfirmButton confirm={() => confirmRace(makeHuman, createSubmitAction)} />
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionHuman