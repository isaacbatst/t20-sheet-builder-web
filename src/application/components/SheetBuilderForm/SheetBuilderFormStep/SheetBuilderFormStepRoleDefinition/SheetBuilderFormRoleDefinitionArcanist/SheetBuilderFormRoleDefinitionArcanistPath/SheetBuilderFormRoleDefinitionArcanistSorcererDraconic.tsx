import SheetBuilderFormSelect from '@/application/components/SheetBuilderForm/SheetBuilderFormSelect'
import { useAppSelector } from '@/application/store/hooks'
import { selectAttribute } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceInitialAttributes'
import { Option } from '@/domain/entities/Option'
import { ArcanistLineageDraconicDamageType, DamageType, Translator } from 't20-sheet-builder'
import { selectSorcererLineageDraconicDamageType, useArcanistContextDispatch } from '../SheetBuilderFormRoleDefinitionArcanistContext'

const damageOptions: Option<ArcanistLineageDraconicDamageType>[] = [
  {
    value: DamageType.acid,
    label: Translator.getDamageTypeTranslation(DamageType.acid),
  },
  {
    value: DamageType.eletricity,
    label: Translator.getDamageTypeTranslation(DamageType.eletricity),
  },
  {
    value: DamageType.fire,
    label: Translator.getDamageTypeTranslation(DamageType.fire),
  },
  {
    value: DamageType.cold,
    label: Translator.getDamageTypeTranslation(DamageType.cold),
  }
]
const SheetBuilderFormRoleDefinitionArcanistSorcererDraconic = () => {
  const charisma = useAppSelector(selectAttribute('charisma'))
  const dispatch = useArcanistContextDispatch()
  return (
    <div className='mb-3'>
      <p>Você soma seu carisma ({charisma}) em seus pontos de vida</p>
      <p>Você recebe redução de dano 5 ao tipo escolhido</p>
      <SheetBuilderFormSelect 
        id='arcanist-sorcerer-draconic-damage-type'
        options={damageOptions}
        placeholder='Escolha um tipo de dano'
        onChange={(option) => dispatch(selectSorcererLineageDraconicDamageType(option?.value))}
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistSorcererDraconic