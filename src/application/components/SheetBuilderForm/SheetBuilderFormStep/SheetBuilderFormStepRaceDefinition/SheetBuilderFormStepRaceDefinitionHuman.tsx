import React from 'react'
import AttributeCheckbox from './AttributeCheckbox'
import Select from 'react-select'
import { GeneralPowerName, SkillName, Translator } from 't20-sheet-builder'
import { selectStyles } from '@/common/SelectStyles'

type Props = {}

const skillsOptions = Object.values(SkillName).map(key => ({ 
  value: key, 
  label: Translator.getSkillTranslation(key) 
}))

const generalPowerOptions = Object.values(GeneralPowerName).map(key => ({
  value: key,
  label: Translator.getPowerTranslation(key)
}))

const SheetBuilderFormStepRaceDefinitionHuman = (props: Props) => {
  const [secondOptionType, setSecondOptionType] = React.useState<'skill' | 'power'>()

  return (
    <div>
      <div className='mb-5'>
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
        <h3>Versátil</h3>
        <div>
          <p>1 - Primeira opção: perícia</p>
          <Select options={skillsOptions} styles={selectStyles} />
          <p>2 - Segunda opção: poder ou perícia</p>
          <Select 
            options={[{label: 'Perícia', value: 'skill'}, {label: 'Poder', value: 'power'}]} 
            styles={selectStyles}
            onChange={(option) => setSecondOptionType(option.value)}
            className='mb-3' 
          />
          {secondOptionType === 'power' && (
            <Select options={generalPowerOptions} styles={selectStyles} placeholder="Escolha um poder" />
          )}
          {secondOptionType === 'skill' && (
            <Select options={skillsOptions} styles={selectStyles} placeholder="Escolha uma perícia" />
          )
          }
        </div>
      </div>
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionHuman