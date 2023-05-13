import React from 'react'
import SheetPreviewAttributes from './SheetPreviewAttributes'
import SheetPreviewDefense from './SheetPreviewDefense'
import SheetPreviewPoints from './SheetPreviewPoints'
import { selectPreviewAttributes, selectDefense, selectRaceName, selectRoleName, selectLevel } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import { Translator } from 't20-sheet-builder'

const SheetPreviewStats = () => {
  const attributes = useSelector(selectPreviewAttributes)
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
    <div  className='flex-1'>
      <h2 className='mb-6 font-medium'>{getTitle()} Nível {level}</h2>
      <SheetPreviewPoints />
      <SheetPreviewAttributes attributes={attributes} />
      <SheetPreviewDefense defense={defense} attributes={attributes} />
    </div>
  )
}

export default SheetPreviewStats