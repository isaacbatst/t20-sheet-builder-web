import { selectDefense, selectPreviewAttributes, selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import SheetPreviewAttributes from './SheetPreviewAttributes'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewPoints from './SheetPreviewPoints'
import SheetPreviewDefense from './SheetPreviewDefense'

const SheetPreview = () => {
  const attributes = useSelector(selectPreviewAttributes)
  const buildSteps = useSelector(selectPreviewBuildSteps)
  const defense = useSelector(selectDefense)
  
  return (
    <div className='flex flex-col md:flex-row'>
      <div  className='flex-1'>
        <h2 className='mb-3'>Ficha</h2>
        <SheetPreviewPoints />
        <SheetPreviewAttributes attributes={attributes} />
        <SheetPreviewDefense defense={defense} attributes={attributes} />
      </div>
      {buildSteps.length > 0 && <div  className='flex-1'>
        <h3 className='mb-3'>Passo a passo</h3>
        <SheetPreviewBuildSteps buildSteps={buildSteps} />
      </div>}
    </div>
  )
}

export default SheetPreview