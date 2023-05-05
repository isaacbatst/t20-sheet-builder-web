import { Translator } from 't20-sheet-builder'
import SheetBuilderFormSelectMulti from '../../SheetBuilderFormSelectMulti'
import { OriginBenefitName } from './SheetBuilderFormStepOriginDefinition'

type Props = {
  benefits: OriginBenefitName[]
  setBenefits(benefits: OriginBenefitName[]): void
}

const OriginBenefitsSelect = ({benefits, setBenefits}: Props) => {
  const options = benefits.map(benefit => ({
    label: Translator.getTranslation(benefit),
    value: benefit
  }))
  return (
    <div>
      <p>Escolha dois benefícios de origem</p>
      <SheetBuilderFormSelectMulti 
        options={options}
        onChange={(options) => setBenefits(options.map(option => option.value))}
        className='mb-3'
        placeholder='Escolha entre perícias e poderes'
      />
    </div>
  )
}

export default OriginBenefitsSelect