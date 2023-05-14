import { selectPreviewRaceAbilities, selectPreviewRoleAbilities } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import React from 'react'
import { useSelector } from 'react-redux'
import { Translator } from 't20-sheet-builder'
import SheetPreviewAbility from './SheetPreviewAbility'

const SheetPreviewAbilities = () => {
  const raceAbilities = useSelector(selectPreviewRaceAbilities)
  const roleAbilities = useSelector(selectPreviewRoleAbilities)

  return (
    <div className='py-2'>
      <div className='flex flex-col md:flex-row gap-12'>
        <div className='flex-1'>
          <h3 className='font-semibold mb-6'>Habilidades de Raça</h3>
          <ul>
            {raceAbilities?.map(ability => (
              <SheetPreviewAbility 
                ability={ability}
                translatedName={Translator.getRaceAbilityTranslation(ability.name)}
                key={ability.name}
              />
            ))}
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='font-semibold mb-6'>Habilidades de Classe</h3>
          <ul>
            {roleAbilities?.map(ability => (
              <SheetPreviewAbility 
                ability={ability}
                translatedName={Translator.getRoleAbilityTranslation(ability.name)}
                key={ability.name}
              />
            ))}   
          </ul>   
        </div>
      </div>
    </div>
  )
}

export default SheetPreviewAbilities