import { generalPowerOptions, skillsOptions } from '@/application/common/Options'
import { Option } from '@/domain/entities/Option'
import React from 'react'
import { GeneralPowerName, SkillName, VersatileChoiceType } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../../SheetBuilderFormSelect'

const secondVersatilOptionTypeOptions: Option<VersatileChoiceType>[] = [
  {label: 'Poder', value: 'power'},
  {label: 'Perícia', value: 'skill'},
]

const SheetBuilderFormStepRaceDefinitionHumanVersatil = () => {
  const [secondVersatileOptionType, setSecondVersatileOptionType] = React.useState<VersatileChoiceType>()
  const [firstVersatileOption, setFirstVersatileOption] = React.useState<SkillName>()
  const [secondVersatileOption, setSecondVersatileOption] = React.useState<GeneralPowerName | SkillName>()
  
  return (
    <div className='mb-6'>
      <h3 className='mb-3'>Versátil</h3>
      <div>
        <SheetBuilderFormSelect 
          placeholder='1 - Escolha uma perícia'
          className='mb-3'
          options={skillsOptions} 
          onChange={(option) => setFirstVersatileOption(option?.value)} 
          id='first-versatile-option-select'
        />
        <SheetBuilderFormSelect
          options={secondVersatilOptionTypeOptions} 
          onChange={(option) => {
            setSecondVersatileOptionType(option?.value)
            setSecondVersatileOption(undefined)
          }}
          className='mb-3' 
          placeholder='2 - Escolha perícia ou poder'
          id='second-versatile-option-type-select'
        />
        {secondVersatileOptionType === 'power' && (
          <SheetBuilderFormSelect 
            options={generalPowerOptions} 
            placeholder="2 - Escolha um poder" 
            onChange={(option) => setSecondVersatileOption(option?.value)}
            isSearcheable
            id='second-versatile-option-power-select'
          />
        )}
        {secondVersatileOptionType === 'skill' && (
          <SheetBuilderFormSelect 
            options={skillsOptions} 
            placeholder="2 - Escolha uma perícia" 
            onChange={(option) => setSecondVersatileOption(option?.value)}
            isSearcheable
            id='second-versatile-option-skill-select'
          />
        )
        }
      </div>
    </div>
  )
}

export default React.memo(SheetBuilderFormStepRaceDefinitionHumanVersatil)