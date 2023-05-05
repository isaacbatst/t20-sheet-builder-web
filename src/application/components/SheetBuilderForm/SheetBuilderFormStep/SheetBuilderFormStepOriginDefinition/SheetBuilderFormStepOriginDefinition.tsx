import React from 'react'
import { Acolyte, AnimalsFriend, GeneralPowerName, OriginName, OriginPowerName, OriginStatic, SkillName } from 't20-sheet-builder'
import OriginEquipments from './OriginEquipments'
import OriginSelect from './OriginSelect'
import SheetBuilderFormStepOriginDefinitionAcolyte from './SheetBuilderFormStepOriginDefinitionAcolyte/SheetBuilderFormStepOriginDefinitionAcolyte'
import SheetBuilderFormStepOriginDefinitionAnimalsFriend from './SheetBuilderFormStepOriginDefinitionAnimalsFriend/SheetBuilderFormStepOriginDefinitionAnimalsFriend'
import OriginBenefitsSelect from './OriginBenefitsSelect'

type OriginComponentType = React.FC<{
  benefits: JSX.Element
}>

const originComponents: Record<OriginName, OriginComponentType> = {
  [OriginName.acolyte]: SheetBuilderFormStepOriginDefinitionAcolyte,
  [OriginName.animalsFriend]: SheetBuilderFormStepOriginDefinitionAnimalsFriend
}

const originClasses: Record<OriginName, OriginStatic<any[]>> = {
  [OriginName.acolyte]: Acolyte,
  [OriginName.animalsFriend]: AnimalsFriend
} 

export type OriginBenefitName = OriginPowerName | SkillName | GeneralPowerName

const SheetBuilderFormStepOriginDefinition = () => {
  const [origin, setOrigin] = React.useState<OriginName>()
  const [selectedBenefits, setSelectedBenefits] = React.useState<OriginBenefitName[]>([])
  
  const OriginComponent = origin ? originComponents[origin] : null
  const OriginClass = origin ? originClasses[origin] : null
  const originEquipments = OriginClass ? OriginClass.equipments : []
  const originBenefits = OriginClass ? [
    ...OriginClass.generalPowers, ...OriginClass.skills, OriginClass.originPower
  ] : []
  return (
    <div>
      <h3>Escolha uma origem</h3>
      <OriginSelect setOrigin={setOrigin} />
      {OriginClass && OriginComponent && 
        <OriginComponent benefits={<OriginBenefitsSelect benefits={originBenefits} setBenefits={setSelectedBenefits} />} />
      }
      {originEquipments.length > 0 && <OriginEquipments originEquipments={originEquipments} />}
    </div>
  )
}

export default SheetBuilderFormStepOriginDefinition