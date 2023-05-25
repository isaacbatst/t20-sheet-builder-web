import React from 'react'
import SheetBuilderFormSelect from '../../../SheetBuilderFormSelect'
import { Option } from '@/domain/entities/Option'
import { AnimalsFriendEquipments, EquipmentName, Translator } from 't20-sheet-builder'

type Props = {
  selectAnimal: (animal?: AnimalsFriendEquipments) => void
}

const options: Option<AnimalsFriendEquipments>[] = [
  { label: Translator.getEquipmentTranslation(EquipmentName.hound), value: EquipmentName.hound },
  { label: Translator.getEquipmentTranslation(EquipmentName.horse), value: EquipmentName.horse },
  { label: Translator.getEquipmentTranslation(EquipmentName.pony), value: EquipmentName.pony },
  { label: Translator.getEquipmentTranslation(EquipmentName.trobo), value: EquipmentName.trobo },
] 

const AnimalEquipmentSelect = ({selectAnimal}: Props) => {
  return (
    <SheetBuilderFormSelect 
      options={options}
      id='animals-friend-equipment'
      placeholder='Escolha um animal'
      onChange={(option) => selectAnimal(option?.value)}
    />
  )
}

export default AnimalEquipmentSelect