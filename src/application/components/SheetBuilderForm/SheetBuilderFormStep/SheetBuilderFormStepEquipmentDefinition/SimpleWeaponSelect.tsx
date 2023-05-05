import { EquipmentName, SimpleWeapons, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'

type Props = {
  setSelected: (selected?: EquipmentName) => void
}

const simpleWeapons = SimpleWeapons.getAll().map(Weapon => ({
  label: Translator.getEquipmentTranslation(Weapon.equipmentName),
  value: Weapon.equipmentName
}))

const SimpleWeaponSelect = ({setSelected}: Props) => {

  return (
    <div>
      <h3>Escolha uma arma simples</h3>
      <SheetBuilderFormSelect 
        options={simpleWeapons}
        onChange={(option) => setSelected(option?.value)}
        className='mb-3'
      />
    </div>
  )
}

export default SimpleWeaponSelect