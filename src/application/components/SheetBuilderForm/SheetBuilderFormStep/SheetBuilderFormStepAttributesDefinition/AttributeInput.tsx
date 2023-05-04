import React from 'react'
import { Attribute, Translator } from 't20-sheet-builder'
import { useSheetBuilderFormStepAttributesDefinitionContext } from './SheetBuilderFormStepAttributesDefinitionContext'

type Props = {
  attribute: Attribute
}



const AttributeInput = ({attribute}: Props) => {
  const {attributes, decrement, increment} = useSheetBuilderFormStepAttributesDefinitionContext()
  return (
    <div>
      <label>{Translator.getAttributeTranslation(attribute)}</label>
      <button type="button" onClick={() => increment(attribute)}>+</button>
      <input disabled type="number" value={attributes[attribute]} className='text-slate-900' />
      <button type="button" onClick={() => decrement(attribute)}>-</button>
    </div>
  )
}

export default AttributeInput