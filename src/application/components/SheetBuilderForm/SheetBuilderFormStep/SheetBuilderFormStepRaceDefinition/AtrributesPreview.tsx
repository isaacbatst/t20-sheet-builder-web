import { useAppSelector } from '@/application/store/hooks'
import { selectAttributes } from '@/application/store/slices/sheetBuilder/sheetBuilderSlice'
import { useMemo } from 'react'
import { Attribute, Attributes, Translator } from 't20-sheet-builder'

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
        {attributesPreview.map(({attribute, modifier, value}) => {
          const modifierWithSign = modifier && modifier > 0 ? `+${modifier}` : modifier
          return (
            <li key={attribute} className='border border-white rounded-2xl px-5 py-1'>
              {Translator.getAttributeTranslation(attribute as Attribute)}: {value} 
              {' '}
              {modifier && <span>({modifierWithSign})</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AtrributesPreview