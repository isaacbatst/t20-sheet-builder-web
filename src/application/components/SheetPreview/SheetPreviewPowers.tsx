import { selectPreviewGeneralPowers } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import { Translator } from 't20-sheet-builder'
import SheetPreviewAbility from './SheetPreviewAbility'
import SheetPreviewList from './SheetPreviewList'

const SheetPreviewPowers = () => {
  const generalPowers = useSelector(selectPreviewGeneralPowers)

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
      <div className='flex-1'>
        <h3 className='font-semibold mb-6'>Poderes gerais</h3>
        <SheetPreviewList
          emptyText='Nenhum poder geral.'
          isEmpty={generalPowers.length === 0}
          list={
            <ul className='flex flex-col gap-6'>
              {generalPowers.map(power => (
                <SheetPreviewAbility 
                  ability={power}
                  translatedName={Translator.getPowerTranslation(power.name)}
                  key={power.name}
                />
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}

export default SheetPreviewPowers