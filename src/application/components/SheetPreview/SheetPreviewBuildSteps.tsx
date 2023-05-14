import { selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'

const SheetPreviewBuildSteps = () => {
  const buildSteps = useSelector(selectPreviewBuildSteps)

  return (
    <div className='flex-1 py-8 md:py-0'>
      <ol className='mx-4'>
        {buildSteps.map((step, index) => {
          return <li 
            key={index}
            className='mb-2 p-5 text-sm opacity-95 bg-stone-950 rounded-2xl'>
            {index+1} - {step.action.description}
          </li>
        })}
      </ol>
    </div>
  )
}

export default SheetPreviewBuildSteps