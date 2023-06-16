import React from 'react'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import { SkillName, Translator } from 't20-sheet-builder'
import { useAppSelector } from '@/application/store/hooks'
import { selectAttribute } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceInitialAttributes'

const SheetBuilderFormStepIntelligenceSkillsTraining = () => {
  const intelligence = useAppSelector(selectAttribute('intelligence'))
  const [, setSelectedSkills] = React.useState<SkillName[]>([])
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
            id='intelligence-skills-select'
            placeholder='Escolha a(s) perícia(s)'
          />
        )
      }
    </div>
  )
}

export default SheetBuilderFormStepIntelligenceSkillsTraining