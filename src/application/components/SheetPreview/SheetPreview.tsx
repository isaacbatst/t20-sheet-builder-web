import { selectPreview } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import React from 'react'
import { useSelector } from 'react-redux'
import { Attribute, Translator } from 't20-sheet-builder'

const SheetPreview = () => {
  const preview = useSelector(selectPreview)
  
  return (
    <div>
      {preview.buildSteps.length > 0 && (
        <div>
          <h2 className='mb-6'>Ficha</h2>
          <div className="mb-6">
            <h3 className='mb-3'>Atributos</h3>
            <ul className='flex gap-2 flex-wrap justify-center'>
              {Object.entries(preview.attributes).map(([attribute, value]) => (
                <li key={attribute}
                  className='bg-white text-slate-900 rounded-2xl px-3 py-2 mb-1'
                >
                  {Translator.getAttributeTranslation(attribute as Attribute)}: {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className='mb-3'>Passo a passo</h3>
            <ol>
              {preview.buildSteps.map((step, index) => {
                return <li 
                  key={index} 
                  className='mb-2 border border-white rounded-2xl py-2 px-3'
                >{index+1} - {step.action.description}</li>
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}

export default SheetPreview