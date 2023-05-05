import { useAppDispatch, useAppSelector } from '@/application/store/hooks'
import { decrementAttribute, incrementAttribute, selectAttribute } from '@/application/store/slices/sheetBuilder/sheetBuilderSlice'
import { Attribute, Translator } from 't20-sheet-builder'

type Props = {
  attribute: Attribute
}

const AttributeInput = ({attribute}: Props) => {
  const dispatch = useAppDispatch();
  const attributeValue = useAppSelector(selectAttribute(attribute))
  return (
    <div>
      <label>{Translator.getAttributeTranslation(attribute)}</label>
      <button type="button" onClick={() => dispatch(incrementAttribute(attribute))}>+</button>
      <input disabled type="number" value={attributeValue} className='text-slate-900' />
      <button type="button" onClick={() => dispatch(decrementAttribute(attribute))}>-</button>
    </div>
  )
}

export default AttributeInput