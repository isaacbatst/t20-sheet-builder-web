import { Acolyte, GeneralPowerFactory, OriginBenefit, OriginBenefitGeneralPower, OriginBenefitOriginPower, OriginBenefitSkill, OriginPowerFactory } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { OriginComponentType } from '../SheetBuilderFormStepOriginDefinition'
import { SerializedOriginBenefitsAcolyte } from 't20-sheet-builder/build/domain/entities/Origin/OriginBenefit/SerializedOriginBenefit'
import { submitOrigin } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceOriginDefinition'

const SheetBuilderFormStepOriginDefinitionAcolyte: OriginComponentType = ({
  benefitsSelect, 
  confirmOrigin,
  selectedBenefits
}) => {
  const makeAcolyte = () => {
    const originBenefits = selectedBenefits.map(benefit => {
      if(benefit.type === 'generalPowers'){
        const power = GeneralPowerFactory.make({name: benefit.name})
        return new OriginBenefitGeneralPower(power)
      }

      if(benefit.type === 'skills') {
        return new OriginBenefitSkill(benefit.name)
      }

      return new OriginBenefitOriginPower(OriginPowerFactory.make({power: benefit.name}))
    }) as OriginBenefit<SerializedOriginBenefitsAcolyte>[]

    return new Acolyte(originBenefits)
  }

  const createSubmitAction = (acolyte: Acolyte) => {
    return submitOrigin(acolyte.serialize())
  }

  const confirmAcolyte = () => {
    // console.log('todo', makeAcolyte())
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