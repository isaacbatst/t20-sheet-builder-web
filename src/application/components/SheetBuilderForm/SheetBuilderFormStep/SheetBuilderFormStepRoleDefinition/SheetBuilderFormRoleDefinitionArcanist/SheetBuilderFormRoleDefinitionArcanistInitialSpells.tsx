import { SpellCircle, Spells, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../../SheetBuilderFormSelect'
import { updateInitialSpells, useArcanistContextDispatch } from './SheetBuilderFormRoleDefinitionArcanistContext'

const SheetBuilderFormRoleDefinitionArcanistInitialSpells = () => {
  const dispatch = useArcanistContextDispatch()
  return (
    <div>
      <p>Você começa com 3 magias de primeiro círculo</p>
      <SheetBuilderFormSelect 
        options={Object.values(Spells.getAll()).filter(spell => spell.circle === SpellCircle.first).map(({spellName}) => ({
          value: spellName,
          label: Translator.getSpellTranslation(spellName)
        }))}
        isMulti
        onChange={(options) => dispatch(updateInitialSpells(options.map(({value}) => value)))}
        className='mb-3'
        placeholder='Escolha as magias'
        id='arcanist-initial-spells-select'
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistInitialSpells