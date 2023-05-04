import React from 'react'
import { SelectSkillGroup, SkillName, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import SheetBuilderFormSelectMulti from '../../SheetBuilderFormSelectMulti'

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
      {skillGroup.amount === 1 ? (
        <SheetBuilderFormSelect 
          options={options} 
          className='mb-3'
          onChange={(newValue) => newValue ? setSelectedSkills([newValue.value]) : setSelectedSkills([])} 
          placeholder={`Escolha 1 perícia`}
          isSearcheable
        />) :
        (     
          <SheetBuilderFormSelectMulti 
            onChange={(newValues) => setSelectedSkills(newValues.map(option => option.value))}
            options={options}
            placeholder={`Escolha ${skillGroup.amount} perícias`}
            className='mb-3'
            isSearcheable
          />
        )
      }
    </div>
  )
}

export default SkillGroupSelect