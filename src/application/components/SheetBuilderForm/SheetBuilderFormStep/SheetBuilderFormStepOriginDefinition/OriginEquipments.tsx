type Props = {
  equipments: string
}

const OriginEquipments = ({equipments: originEquipments}: Props) => {
  return (
    <p className='mb-3 font-bold text-lg'>Itens: <span className='font-normal text-base'>{originEquipments}</span></p>
  )
}

export default OriginEquipments