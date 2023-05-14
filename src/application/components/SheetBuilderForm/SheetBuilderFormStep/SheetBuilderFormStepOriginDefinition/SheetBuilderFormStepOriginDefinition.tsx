import React from 'react'
import { GeneralPowerName, Origin, OriginBenefits, OriginName, OriginPowerName, Origins, SkillName } from 't20-sheet-builder'
import { ConfirmFunction, useSheetBuilderConfirm } from '../../useSheetBuilderSubmit'
import OriginBenefitsSelect from './OriginBenefitsSelect'
import OriginEquipments from './OriginEquipments'
import OriginSelect from './OriginSelect'
import SheetBuilderFormStepOriginDefinitionAcolyte from './SheetBuilderFormStepOriginDefinitionAcolyte/SheetBuilderFormStepOriginDefinitionAcolyte'
import SheetBuilderFormStepOriginDefinitionAnimalsFriend from './SheetBuilderFormStepOriginDefinitionAnimalsFriend/SheetBuilderFormStepOriginDefinitionAnimalsFriend'

export type OriginBenefitName = OriginPowerName | SkillName | GeneralPowerName
export type SelectedBenefit = {
  type: 'skills';
  name: SkillName
} | {
  type: 'generalPowers';
  name: GeneralPowerName
} | {
  type: 'originPower';
  name: OriginPowerName
}

export type OriginComponentType = React.FC<{
  selectedBenefits: SelectedBenefit[]
  benefitsSelect: JSX.Element
  confirmOrigin: ConfirmFunction<Origin>
}>

const originComponents: Record<OriginName, OriginComponentType> = {
  [OriginName.acolyte]: SheetBuilderFormStepOriginDefinitionAcolyte,
  [OriginName.animalsFriend]: SheetBuilderFormStepOriginDefinitionAnimalsFriend
}

const SheetBuilderFormStepOriginDefinition = () => {
  const {confirm} = useSheetBuilderConfirm<Origin>()
  const [origin, setOrigin] = React.useState<OriginName>()
  const [selectedBenefits, setSelectedBenefits] = React.useState<SelectedBenefit[]>([])
  
  const OriginComponent = origin ? originComponents[origin] : null
  const OriginClass = origin ? Origins.getByName(origin) : null
  const originEquipments = OriginClass ? OriginClass.equipments : null
  const originBenefits: OriginBenefits | null = OriginClass ? {
    generalPowers: OriginClass.generalPowers,
    skills: OriginClass.skills,
    originPower: OriginClass.originPower
  } : null

  return (
    <div>
      <OriginSelect setOrigin={setOrigin} />
      {originEquipments && <OriginEquipments equipments={originEquipments} />}
      {OriginComponent && originBenefits && 
        <OriginComponent 
          selectedBenefits={selectedBenefits}
          confirmOrigin={confirm}
          benefitsSelect={<OriginBenefitsSelect 
            benefits={originBenefits} 
            setBenefits={setSelectedBenefits} 
          />} 
        />
      }
    </div>
  )
}

export default SheetBuilderFormStepOriginDefinition