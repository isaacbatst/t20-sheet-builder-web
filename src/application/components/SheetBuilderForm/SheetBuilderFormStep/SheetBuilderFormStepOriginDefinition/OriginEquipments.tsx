import { Equipment, Translator } from 't20-sheet-builder'

type Props = {
  originEquipments: Equipment[]
}

const OriginEquipments = ({originEquipments}: Props) => {
  return (
    <>
      <p className='mb-3'>Equipamentos</p>
      <ul>
        {originEquipments.map((equipment) => (
          <li key={equipment.name}>{Translator.getEquipmentTranslation(equipment.name)}</li>
        ))}
      </ul>
    </>
  )
}

export default OriginEquipments