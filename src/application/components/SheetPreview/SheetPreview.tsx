import { selectPreview } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import React from 'react'
import { useSelector } from 'react-redux'
import { Attribute, Translator } from 't20-sheet-builder'

const numberWithSign = (n: number) => {
  return n > 0 ? `+${n}` : n
}

const SheetPreview = () => {
  const preview = useSelector(selectPreview)
  
  return (
    <div>
      {preview.buildSteps.length > 0 && (
        <div>
          <h2 className='mb-3'>Ficha</h2>
          <div className="mb-6">
            <ul className='flex gap-3 flex-wrap justify-center'>
              {Object.entries(preview.attributes).map(([attribute, value]) => (
                <li key={attribute} className='flex flex-col w-20'>
                  <p className='text-xs mb-2'>
                    {Translator.getAttributeTranslation(attribute as Attribute)}
                  </p>
                  <p className='bg-white text-slate-900 rounded-2xl px-3 py-2 mb-1'>{numberWithSign(value)}</p>
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