import { selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewStats from './SheetPreviewStats'

const SheetPreview = () => {
  const buildSteps = useSelector(selectPreviewBuildSteps)

  return (
    <div className='flex flex-col md:flex-row py-8'>
      <SheetPreviewStats />
      {buildSteps.length > 0 && <SheetPreviewBuildSteps buildSteps={buildSteps} />}
    </div>
  )
}

export default SheetPreview