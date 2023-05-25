import { submitOrigin } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceOriginDefinition'
import { Acolyte, OriginBenefitFactoryAcolyte, SerializedOriginBenefitsAcolyte } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { OriginComponentType } from '../SheetBuilderFormStepOriginDefinition'

const SheetBuilderFormStepOriginDefinitionAcolyte: OriginComponentType = ({
  benefitsSelect, 
  confirmOrigin,
  selectedBenefits
}) => {
  const makeAcolyte = () => {
    const benefitFactory = new OriginBenefitFactoryAcolyte()
    const benefits = selectedBenefits.map((benefit) => {
      return benefitFactory.makeFromSerialized(benefit as SerializedOriginBenefitsAcolyte)
    })

    return new Acolyte(benefits)
  }

  const createSubmitAction = (acolyte: Acolyte) => {
    return submitOrigin(acolyte.serialize())
  }

  const confirmAcolyte = () => {
    confirmOrigin(makeAcolyte, createSubmitAction) 
  }
  
  return (
    <div>
      {benefitsSelect}
      <ConfirmButton confirm={confirmAcolyte} />
    </div>
  )
}

export default SheetBuilderFormStepOriginDefinitionAcolyte