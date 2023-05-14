import { selectPreviewSpells } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import { SpellCircle, Translator } from 't20-sheet-builder'

const circleToNumber: Record<SpellCircle, number> = {
  [SpellCircle.first]: 1,
  [SpellCircle.second]: 2,
}

const SheetPreviewSpells = () => {
  const spells = useSelector(selectPreviewSpells)


  return (
    <div>
      <ul className='flex flex-col justify-center gap-3'>
        {spells?.map(spell => {
          const translatedName = Translator.getSpellTranslation(spell.name)
          const circleNumber = circleToNumber[spell.circle]
          const translatedType = Translator.getSpellTypeTranslation(spell.type)
          const translatedSchool = Translator.getSpellSchoolTranslation(spell.school)

          return (
            <li key={spell.name} className='bg-white rounded-md text-slate-950 px-5 py-3 text-left'>
              <h4 className='font-semibold text-lg text-rose-600'>{translatedName}</h4>
              <h5 className='text-sm font-medium text-slate-500 mb-1'>
                {translatedType} {circleNumber} ({translatedSchool})
              </h5>
              <ul className='text-sm'>
                {spell.effects.map((effect, index) => (
                  <li key={index}>{effect.description}</li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SheetPreviewSpells