import SheetBuilderFormSelect from '@/application/components/SheetBuilderForm/SheetBuilderFormSelect'
import { Option } from '@/domain/entities/Option'
import { Attribute, GeneralPowerName, TormentaPowers, Translator } from 't20-sheet-builder'
import { selectSorcererLineageRedAttribute, selectSorcererLineageRedExtraPower, useArcanistContextDispatch } from '../SheetBuilderFormRoleDefinitionArcanistContext'
import { attributesOptions } from '@/application/common/Options'

const tormentaPowersOptions: Option<GeneralPowerName>[] = TormentaPowers.getAll()
  .map(Power => ({
    label: Translator.getTranslation(Power.powerName),
    value: Power.powerName
  }))

const SheetBuilderFormRoleDefinitionArcanistSorcererRed = () => {
  const dispatch = useArcanistContextDispatch()
  return (
    <div className='mb-3'>
      <p>Você recebe um poder da tormenta</p>
      <SheetBuilderFormSelect 
        id='arcanist-sorcerer-red-extra-power'
        options={tormentaPowersOptions}
        onChange={(option) => dispatch(selectSorcererLineageRedExtraPower(option?.value))}
        placeholder='Escolha um poder da tormenta'
      />
      <p>Além disso pode perder outro atributo em vez de Carisma por poderes de tormenta</p>
      <SheetBuilderFormSelect 
        id='arcanist-sorcerer-red-custom-attribute'
        options={attributesOptions.filter(option => option.value !== 'charisma')}
        onChange={(option) => dispatch(selectSorcererLineageRedAttribute(option?.value as Attribute))}
        defaultValue='charisma'
        placeholder='Escolha um atributo (opcional)'
        isClearable 
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistSorcererRed