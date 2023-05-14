import { useAppDispatch, useAppSelector } from '@/application/store/hooks'
import { decrementAttribute, incrementAttribute, selectAttribute } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceInitialAttributes'
import { Attribute, Translator } from 't20-sheet-builder'
import AttributeInputButton from './AttributeInputButton'

type Props = {
  attribute: Attribute
}

const AttributeInput = ({attribute}: Props) => {
  const dispatch = useAppDispatch();
  const attributeValue = useAppSelector(selectAttribute(attribute))
  return (
    <div className='flex flex-col items-center mb-6'>
      <label className='text-sm mb-2'>{Translator.getAttributeTranslation(attribute)}</label>
      <div className="flex flex-row">
        <AttributeInputButton 
          side='left'
          onClick={() => dispatch(decrementAttribute(attribute))}>
          -
        </AttributeInputButton>
        <input disabled type="number" value={attributeValue} 
          className='text-slate-900 w-8 text-center bg-white' 
        />
        <AttributeInputButton 
          side='right'
          onClick={() => dispatch(incrementAttribute(attribute))}>
          +
        </AttributeInputButton>
      </div>
    </div>
  )
}

export default AttributeInput