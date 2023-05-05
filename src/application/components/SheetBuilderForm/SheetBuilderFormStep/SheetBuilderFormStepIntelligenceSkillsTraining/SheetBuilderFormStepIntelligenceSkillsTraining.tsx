import React from 'react'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import { SkillName, Translator } from 't20-sheet-builder'

const SheetBuilderFormStepIntelligenceSkillsTraining = () => {
  const [selectedSkills, setSelectedSkills] = React.useState<SkillName[]>([])
  const options = Object.values(SkillName).map(skillName => ({
    label: Translator.getSkillTranslation(skillName),
    value: skillName
  }))
  return (
    <div>
      <p>Escolha perícias de acordo com sua inteligência</p>
      <SheetBuilderFormSelect
        isMulti
        isSearcheable
        options={options}
        onChange={(options) => setSelectedSkills(options.map(option => option.value))}
      />
    </div>
  )
}

export default SheetBuilderFormStepIntelligenceSkillsTraining