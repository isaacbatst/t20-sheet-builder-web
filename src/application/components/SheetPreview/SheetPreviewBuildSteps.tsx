import React from 'react'
import { SerializedSheetBuildStep } from 't20-sheet-builder'

type Props = {
  buildSteps: SerializedSheetBuildStep[]
}

const SheetPreviewBuildSteps = ({buildSteps}: Props) => {
  return (
    <ol className='mx-4'>
      {buildSteps.map((step, index) => {
        return <li 
          key={index}
          className='mb-2 p-5 text-sm opacity-95 bg-stone-950 rounded-2xl'>
          {index+1} - {step.action.description}
        </li>
      })}
    </ol>
  )
}

export default SheetPreviewBuildSteps