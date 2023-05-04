import React from 'react'
import { SpellCircle, SpellName, Spells, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelectMulti from '../../../SheetBuilderFormSelectMulti'

const SheetBuilderFormRoleDefinitionArcanistInitialSpells = () => {
  const [spells, setSpells] = React.useState<SpellName[]>([])
  return (
    <div>
      <p>Você começa com 3 magias de primeiro círculo</p>
      <SheetBuilderFormSelectMulti 
        options={Object.values(Spells.getAll()).filter(spell => spell.circle === SpellCircle.first).map(({spellName}) => ({
          value: spellName,
          label: Translator.getSpellTranslation(spellName)
        }))}
        onChange={(options) => setSpells(options.map(option => option.value))}
        className='mb-3'
        placeholder='Escolha as magias'
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistInitialSpells