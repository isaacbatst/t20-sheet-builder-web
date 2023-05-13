import { selectDefense, selectLevel, selectPreviewAttributes, selectPreviewBuildSteps, selectRaceName, selectRoleName } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import SheetPreviewAttributes from './SheetPreviewAttributes'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewPoints from './SheetPreviewPoints'
import SheetPreviewDefense from './SheetPreviewDefense'
import { Translator } from 't20-sheet-builder'

const SheetPreview = () => {
  const attributes = useSelector(selectPreviewAttributes)
  const buildSteps = useSelector(selectPreviewBuildSteps)
  const defense = useSelector(selectDefense)
  const raceName = useSelector(selectRaceName)
  const roleName = useSelector(selectRoleName)
  const level = useSelector(selectLevel)
  
  const getTitle = () => {
    if(raceName && roleName) {
      return `${Translator.getRaceTranslation(raceName)} - ${Translator.getRoleTranslation(roleName)}`
    }

    if(raceName) {
      return Translator.getRaceTranslation(raceName)
    }

    if(roleName) {
      return Translator.getRoleTranslation(roleName)
    }
  }

  return (
    <div className='flex flex-col md:flex-row py-8'>
      <div  className='flex-1'>
        <h2 className='mb-6 font-medium'>{getTitle()} Nível {level}</h2>
        <SheetPreviewPoints />
        <SheetPreviewAttributes attributes={attributes} />
        <SheetPreviewDefense defense={defense} attributes={attributes} />
      </div>
      {buildSteps.length > 0 && (
        <div className='flex-1 py-8'>
          <h3 className='mb-3'>Passo a passo</h3>
          <SheetPreviewBuildSteps buildSteps={buildSteps} />
        </div>
      )}
    </div>
  )
}

export default SheetPreview