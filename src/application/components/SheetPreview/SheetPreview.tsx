import { selectPreviewAttributes, selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import SheetPreviewAttributes from './SheetPreviewAttributes'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewPoints from './SheetPreviewPoints'

const SheetPreview = () => {
  const attributes = useSelector(selectPreviewAttributes)
  const buildSteps = useSelector(selectPreviewBuildSteps)
  
  return (
    <div className='flex flex-col md:flex-row'>
      <div  className='flex-1'>
        <h2 className='mb-3'>Ficha</h2>
        <SheetPreviewPoints />
        <SheetPreviewAttributes attributes={attributes} />
      </div>
      <div  className='flex-1'>
        <h3 className='mb-3'>Passo a passo</h3>
        {buildSteps.length > 0 && <SheetPreviewBuildSteps buildSteps={buildSteps} />}
      </div>
    </div>
  )
}

export default SheetPreview