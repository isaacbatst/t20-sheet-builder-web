import React from 'react'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import { SkillName, Translator } from 't20-sheet-builder'
import { useAppSelector } from '@/application/store/hooks'
import { selectAttribute, selectAttributes } from '@/application/store/slices/sheetBuilder/sheetBuilderSlice'

const SheetBuilderFormStepIntelligenceSkillsTraining = () => {
  const intelligence = useAppSelector(selectAttribute('intelligence'))
  const [selectedSkills, setSelectedSkills] = React.useState<SkillName[]>([])
  const options = Object.values(SkillName).map(skillName => ({
    label: Translator.getSkillTranslation(skillName),
    value: skillName
  }))
  return (
    <div>
      <p>Você recebe um número de perícias treinadas igual à sua inteligência: {intelligence}</p>
      {
        intelligence > 0 && (
          <SheetBuilderFormSelect
            isMulti
            isSearcheable
            options={options}
            onChange={(options) => setSelectedSkills(options.map(option => option.value))}
          />
        )
      }
    </div>
  )
}

export default SheetBuilderFormStepIntelligenceSkillsTraining