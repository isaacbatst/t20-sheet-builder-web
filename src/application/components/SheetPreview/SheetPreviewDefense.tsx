import React from 'react'
import { Attributes, SerializedSheetDefense, Translator } from 't20-sheet-builder'
import SheetPreviewItem from './SheetPreviewItem'

type Props = {
  defense: SerializedSheetDefense,
  attributes: Attributes
}

const SheetPreviewDefense = ({defense, attributes}: Props) => {
  return (
    <div className='flex flex-wrap gap-3 justify-center'>
      <SheetPreviewItem label='Defesa' value={defense.total} />
      <div className='flex gap-2 items-center'>
        <p>= 10 +</p>
        <SheetPreviewItem 
          label={`Mod. de ${Translator.getAttributeTranslation(defense.attribute)}`} 
          value={attributes[defense.attribute]}
        />
        {defense.fixedModifiers.modifiers.map((modifier, index) => (
          <React.Fragment key={index}>
            <span>+</span>
            <SheetPreviewItem 
              label={Translator.getTranslation(modifier.source)} 
              value={modifier.baseValue} 
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SheetPreviewDefense