import React from 'react'
import AttributeCheckbox from './AttributeCheckbox'
import Select from 'react-select'
import { GeneralPowerName, SkillName, Translator, VersatileChoiceType } from 't20-sheet-builder'
import { selectStyles } from '@/common/SelectStyles'
import SheetBuilderForm from '../../SheetBuilderForm'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import { Option } from '@/domain/entities/Option'

const skillsOptions = Object.values(SkillName).map(key => ({ 
  value: key, 
  label: Translator.getSkillTranslation(key) 
}))

const generalPowerOptions = Object.values(GeneralPowerName).map(key => ({
  value: key,
  label: Translator.getPowerTranslation(key)
}))

const secondVersatilOptionTypeOptions: Option<VersatileChoiceType>[] = [
  {label: 'Poder', value: 'power'},
  {label: 'Perícia', value: 'skill'},
]


const SheetBuilderFormStepRaceDefinitionHuman = () => {
  const [secondVersatileOptionType, setSecondVersatileOptionType] = React.useState<VersatileChoiceType>()
  const [firstVersatileOption, setFirstVersatileOption] = React.useState<SkillName>()
  const [secondVersatileOption, setSecondVersatileOption] = React.useState<GeneralPowerName | SkillName>()

  return (
    <div>
      <div className='mb-6'>
        <h3 className='mb-3'>+1 em três atributos diferentes</h3>
        <div className='flex flex-row flex-wrap justify-center'>
          <AttributeCheckbox attribute='strength' />
          <AttributeCheckbox attribute='dexterity' />
          <AttributeCheckbox attribute='constitution' />
          <AttributeCheckbox attribute='intelligence' />
          <AttributeCheckbox attribute='wisdom' />
          <AttributeCheckbox attribute='charisma' />
        </div>
      </div>
      <div>
        <h3 className='mb-3'>Versátil</h3>
        <div>
          <SheetBuilderFormSelect 
            placeholder='1 - Escolha uma perícia'
            className='mb-3'
            options={skillsOptions} 
            onChange={(option) => setFirstVersatileOption(option?.value)} 
          />
          <SheetBuilderFormSelect
            options={secondVersatilOptionTypeOptions} 
            onChange={(option) => {
              setSecondVersatileOptionType(option?.value)
              setSecondVersatileOption(undefined)
            }}
            className='mb-3' 
            placeholder='2 - Escolha perícia ou poder'
          />
          {secondVersatileOptionType === 'power' && (
            <SheetBuilderFormSelect 
              options={generalPowerOptions} 
              placeholder="2 - Escolha um poder" 
              onChange={(option) => setSecondVersatileOption(option?.value)}
            />
          )}
          {secondVersatileOptionType === 'skill' && (
            <SheetBuilderFormSelect 
              options={skillsOptions} 
              placeholder="2 - Escolha uma perícia" 
              onChange={(option) => setSecondVersatileOption(option?.value)}
            />
          )
          }
        </div>
      </div>
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionHuman