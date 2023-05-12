import React from 'react'
import SheetPreviewItem from './SheetPreviewItem'
import { useSelector } from 'react-redux'
import { selectMaxLifePoints, selectMaxManaPoints } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'

const SheetPreviewPoints = () => {
  const lifePoints = useSelector(selectMaxLifePoints)
  const manaPoints = useSelector(selectMaxManaPoints)

  return (
    <div className='mb-6 flex justify-center gap-3'>
      <SheetPreviewItem label='Pontos de vida' value={lifePoints} />
      <SheetPreviewItem label='Pontos de mana' value={manaPoints} />
    </div>
  )
}

export default SheetPreviewPoints