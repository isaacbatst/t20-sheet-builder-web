import { useAppSelector } from '@/application/store/hooks'
import { selectAttributes } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceInitialAttributes'
import { useMemo } from 'react'
import { Attribute, Attributes } from 't20-sheet-builder'
import AttributePreviewItem from './AttributePreviewItem'

type Props = {
  attributeModifiers: Partial<Attributes>
}

type AttributePreview = {
  attribute: Attribute,
  value: number
  modifier?: number
}

const AtrributesPreview = ({attributeModifiers}: Props) => {
  const attributes = useAppSelector(selectAttributes)
  const attributesPreview = useMemo(() => {
    return Object.entries(attributes)
      .map<AttributePreview>(([key, value]) => {
        const attribute = key as Attribute;
        const modifier = attributeModifiers[attribute];
        return {
          attribute,
          modifier,
          value: value + (modifier ?? 0)
        }
      })
  }, [attributes, attributeModifiers]);

  return (
    <div className='mb-6'>
      <h3 className='mb-3'>Atributos</h3>
      <ul className='flex gap-2 justify-center flex-wrap'>
        {attributesPreview.map(({attribute, modifier, value}) => 
          <AttributePreviewItem 
            key={attribute} 
            attribute={attribute}
            value={value}
            modifier={modifier}
          />
        )}
      </ul>
    </div>
  )
}

export default AtrributesPreview