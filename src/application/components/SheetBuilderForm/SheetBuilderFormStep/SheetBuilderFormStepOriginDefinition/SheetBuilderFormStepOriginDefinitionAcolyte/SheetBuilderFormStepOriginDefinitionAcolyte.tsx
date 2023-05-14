import { Acolyte, GeneralPowerFactory, OriginBenefitGeneralPower, OriginBenefitOriginPower, OriginBenefitSkill, OriginPowerFactory } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { OriginComponentType } from '../SheetBuilderFormStepOriginDefinition'

const SheetBuilderFormStepOriginDefinitionAcolyte: OriginComponentType = ({
  benefitsSelect, 
  // confirmOrigin,
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
    })

    return new Acolyte(originBenefits)
  }

  // createSubmit

  const confirmAcolyte = () => {
    console.log('todo', makeAcolyte())
    // confirmOrigin(makeAcolyte, createSubmit) 
  }
  
  return (
    <div>
      {benefitsSelect}
      <ConfirmButton confirm={confirmAcolyte} />
    </div>
  )
}

export default SheetBuilderFormStepOriginDefinitionAcolyte