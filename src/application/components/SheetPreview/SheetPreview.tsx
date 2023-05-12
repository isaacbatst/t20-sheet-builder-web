import { selectPreviewAttributes, selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import SheetPreviewAttributes from './SheetPreviewAttributes'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewPoints from './SheetPreviewPoints'

const SheetPreview = () => {
  const attributes = useSelector(selectPreviewAttributes)
  const buildSteps = useSelector(selectPreviewBuildSteps)
  
  return (
    <div>
      <SheetPreviewPoints />
      <SheetPreviewAttributes attributes={attributes} />
      {buildSteps.length > 0 && <SheetPreviewBuildSteps buildSteps={buildSteps} />}
    </div>
  )
}

export default SheetPreview