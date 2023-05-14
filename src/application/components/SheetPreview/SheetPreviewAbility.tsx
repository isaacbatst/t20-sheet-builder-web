import React from 'react'
import { SerializedSheetAbility } from 't20-sheet-builder'

type Props = {
  ability: SerializedSheetAbility,
  translatedName: string
}

const SheetPreviewAbility = ({ability, translatedName}: Props) => {
  return (
    <li key={ability.name} className='mb-6'>
      <p className='font-semibold mb-1'>{translatedName}</p>
      {ability.effects.map((effect, index) => (
        <p key={index} className='text-sm mb-1'>{effect.description}</p>
      ))}
    </li>
  )
}

export default SheetPreviewAbility