import React from 'react'
import SheetPreviewPointItem from './SheetPreviewPointItem'
import { useSelector } from 'react-redux'
import { selectMaxLifePoints, selectMaxManaPoints } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'

const SheetPreviewPoints = () => {
  const lifePoints = useSelector(selectMaxLifePoints)
  const manaPoints = useSelector(selectMaxManaPoints)

  return (
    <div className='mb-6 flex justify-center gap-3'>
      <SheetPreviewPointItem label='Pontos de vida' value={lifePoints} />
      <SheetPreviewPointItem label='Pontos de mana' value={manaPoints} />
    </div>
  )
}

export default SheetPreviewPoints