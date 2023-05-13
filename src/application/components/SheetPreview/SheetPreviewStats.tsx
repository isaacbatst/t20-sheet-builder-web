import React from 'react'
import SheetPreviewAttributes from './SheetPreviewAttributes'
import SheetPreviewDefense from './SheetPreviewDefense'
import SheetPreviewPoints from './SheetPreviewPoints'
import { selectPreviewAttributes, selectPreviewDefense, selectPreviewRaceName, selectPreviewRoleName, selectPreviewLevel, selectPreviewProficiencies } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import { Translator } from 't20-sheet-builder'

const SheetPreviewStats = () => {
  const attributes = useSelector(selectPreviewAttributes)
  const defense = useSelector(selectPreviewDefense)
  const raceName = useSelector(selectPreviewRaceName)
  const roleName = useSelector(selectPreviewRoleName)
  const level = useSelector(selectPreviewLevel)
  const proficiencies = useSelector(selectPreviewProficiencies)
  
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
    <div className='flex-1 px-5'>
      <h2 className='mb-6 font-medium'>{getTitle()} Nível {level}</h2>
      <SheetPreviewPoints />
      <SheetPreviewAttributes attributes={attributes} />
      <SheetPreviewDefense defense={defense} attributes={attributes} />
      <div>
        <p>Proficiências: {proficiencies.map(Translator.getProficiencyTranslation).join(', ')}.</p>
      </div>
    </div>
  )
}

export default SheetPreviewStats