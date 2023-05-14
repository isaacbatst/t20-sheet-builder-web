import React from 'react'
import { SerializedSheetAbility } from 't20-sheet-builder'
import SheetPreviewBoxItem from './SheetPreviewBoxItem'

type Props = {
  ability: SerializedSheetAbility,
  translatedName: string
}

const SheetPreviewAbility = ({ability, translatedName}: Props) => {
  return (
    <SheetPreviewBoxItem title={translatedName}>
      {ability.effects.map((effect, index) => (
        <p key={index} className='text-sm mb-1'>{effect.description}</p>
      ))}
    </SheetPreviewBoxItem>
  )
}

export default SheetPreviewAbility