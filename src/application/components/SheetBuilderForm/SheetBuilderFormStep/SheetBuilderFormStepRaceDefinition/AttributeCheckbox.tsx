import React from 'react'
import { Attribute, Translator } from 't20-sheet-builder'

type Props = {
  attribute: Attribute
  isChecked: boolean
  toggle(): void
}

const AttributeCheckbox = ({attribute,isChecked, toggle}: Props) => {
  return (
    <div className='flex items-center mx-3 mb-2'>
      <label>
        {Translator.getAttributeTranslation(attribute)}
        <input 
          type="checkbox" 
          name={attribute} 
          id="" 
          checked={isChecked} 
          onChange={toggle}
          className='align-middle ml-2' />
      </label>
    </div>
  )
}

export default AttributeCheckbox