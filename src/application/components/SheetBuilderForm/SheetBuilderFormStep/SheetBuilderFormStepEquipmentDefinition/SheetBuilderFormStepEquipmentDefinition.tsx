import React from 'react'
import { EquipmentName, Translator } from 't20-sheet-builder'
import SimpleWeaponSelect from './SimpleWeaponSelect'

const defaultEquipment = [
  EquipmentName.backpack,
  EquipmentName.sleepingBag,
  EquipmentName.travelerCostume
]

const SheetBuilderFormStepEquipmentDefinition = () => {
  const [, setSelectedSimpleWeapon] = React.useState<EquipmentName>()

  return (
    <div>
      <div className='mb-6'>
        <h3 className='mb-3'>Equipamento Padrão</h3>
        <ul>
          {defaultEquipment.map(equipment => (
            <li key={equipment}>{Translator.getEquipmentTranslation(equipment)}</li>
          ))}
        </ul>
      </div>
      <div>
        <SimpleWeaponSelect setSelected={setSelectedSimpleWeapon}/>
      </div>
    </div>
  )
}

export default SheetBuilderFormStepEquipmentDefinition