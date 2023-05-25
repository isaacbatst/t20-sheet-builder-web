import { selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'

const SheetPreviewBuildSteps = () => {
  const buildSteps = useSelector(selectPreviewBuildSteps)

  return (
    <ol>
      {buildSteps.map((step, index) => {
        const [title, ...text] = step.action.description.split(':');

        return <li 
          key={index}
          className='mb-2 p-3 opacity-95 rounded-2xl bg-stone-50 text-stone-950'>
          <span className='font-medium text-rose-600'>{index+1} - {title}: </span>{text.join('')}
        </li>
      })}
    </ol>
  )
}

export default SheetPreviewBuildSteps