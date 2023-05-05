import React from 'react'
import { ArcanistPathWizardFocuses, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../../SheetBuilderFormSelect'

const SheetBuilderFormRoleDefinitionArcanistWizard = () => {
  return (
    <div>
      <p>Você lança magias através de uma foco</p>
      <SheetBuilderFormSelect 
        options={ArcanistPathWizardFocuses.getAll().map(focus => ({
          value: focus.equipmentName,
          label: Translator.getEquipmentTranslation(focus.equipmentName)
        }))}
        onChange={(option) => console.log(option)}
        className='mb-3'
        placeholder='Escolha um foco'
        id='arcanist-wizard-focus-select'
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistWizard