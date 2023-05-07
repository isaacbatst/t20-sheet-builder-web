import { ArcanistPathWizardFocuses, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../../../SheetBuilderFormSelect'
import { selectWizardFocus, useArcanistContextDispatch } from '../SheetBuilderFormRoleDefinitionArcanistContext'

const SheetBuilderFormRoleDefinitionArcanistWizard = () => {
  const dispatch = useArcanistContextDispatch()
  return (
    <div>
      <p>Você lança magias através de uma foco</p>
      <SheetBuilderFormSelect 
        options={ArcanistPathWizardFocuses.getAll().map(focus => ({
          value: focus.equipmentName,
          label: Translator.getEquipmentTranslation(focus.equipmentName)
        }))}
        onChange={(option) => dispatch(selectWizardFocus(option?.value))}
        className='mb-3'
        placeholder='Escolha um foco'
        id='arcanist-wizard-focus-select'
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistWizard