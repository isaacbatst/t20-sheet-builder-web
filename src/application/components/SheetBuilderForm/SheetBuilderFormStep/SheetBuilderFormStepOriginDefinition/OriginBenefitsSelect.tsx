import { Option } from '@/domain/entities/Option'
import { OriginBenefits, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import { SelectedBenefit } from './SheetBuilderFormStepOriginDefinition'

type Props = {
  benefits: OriginBenefits
  setBenefits(benefits: SelectedBenefit[]): void
}

const OriginBenefitsSelect = ({benefits, setBenefits}: Props) => {
  const options: Option<SelectedBenefit>[] = []

  benefits.generalPowers.forEach(power => {
    options.push({
      label: Translator.getPowerTranslation(power),
      value: {type: 'generalPowers', name: power}
    })
  })

  benefits.skills.forEach(skill => {
    options.push({
      label: Translator.getSkillTranslation(skill),
      value: {type: 'skills', name: skill}
    })
  })

  options.push({
    label: Translator.getPowerTranslation(benefits.originPower),
    value: {type: 'originPower', name: benefits.originPower}
  })

  return (
    <div>
      <p className='mb-2'>Escolha dois benefícios</p>
      <SheetBuilderFormSelect 
        options={options}
        isMulti
        onChange={(options) => setBenefits(options.map(option => option.value))}
        className='mb-3'
        placeholder='Escolha entre perícias e poderes'
        id='origin-benefits-select'
      />
    </div>
  )
}

export default OriginBenefitsSelect