import React from 'react'
import { Attribute, Translator } from 't20-sheet-builder'

type Props = {
  attribute: Attribute
}

const AttributeCheckbox = ({attribute}: Props) => {
  return (
    <div className='flex items-center mx-3 mb-2'>
      <label>
        {Translator.getAttributeTranslation(attribute)}
        <input type="checkbox" name={attribute} id="" className='align-middle ml-2' />
      </label>
    </div>
  )
}

export default AttributeCheckbox