import React from 'react'
import { SelectSkillGroup, SkillName, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'

type Props = {
  skillGroup: SelectSkillGroup
}

const SkillGroupSelect = ({skillGroup}: Props) => {
  const [selectedSkills, setSelectedSkills] = React.useState<SkillName[]>([])
  const options = skillGroup.skills.map(skill => ({
    value: skill,
    label: Translator.getSkillTranslation(skill)
  }))

  return (
    <div>
      <p>Escolha {skillGroup.amount} {skillGroup.amount > 1 ? 'perícias' : 'perícia'}</p>
      {skillGroup.amount === 1 ? (
        <SheetBuilderFormSelect 
          options={options} 
          className='mb-3'
          onChange={(newValue) => newValue ? setSelectedSkills([newValue.value]) : setSelectedSkills([])} 
          placeholder={`Opções: ${skillGroup.skills.map(skill => Translator.getSkillTranslation(skill)).join(', ')}`}
          isSearcheable
        />) :
        (     
          <SheetBuilderFormSelect
            isMulti
            onChange={(newValues) => setSelectedSkills(newValues.map(option => option.value))}
            options={options}
            placeholder={`Opções: ${skillGroup.skills.map(skill => Translator.getSkillTranslation(skill)).join(', ')}`}
            className='mb-3'
            isSearcheable
          />
        )
      }
    </div>
  )
}

export default SkillGroupSelect