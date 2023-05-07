import SheetBuilderFormSelect from '@/application/components/SheetBuilderForm/SheetBuilderFormSelect'
import { Option } from '@/domain/entities/Option'
import { SpellCircle, SpellName, SpellSchool, Spells, Translator } from 't20-sheet-builder'
import { selectSorcererLineageFaerieExtraSpell, useArcanistContextDispatch } from '../SheetBuilderFormRoleDefinitionArcanistContext'

const spellOptions: Option<SpellName>[] = Spells.getAll()
  .filter(spell => spell.circle === SpellCircle.first
    && (spell.school === SpellSchool.illusion || spell.school === SpellSchool.enchantment))
  .map<Option<SpellName>>(Spell => ({
    label: Translator.getSpellTranslation(Spell.spellName),
    value: Spell.spellName
  }))

const SheetBuilderFormRoleDefinitionArcanistSorcererFaerie = () => {
  const dispatch = useArcanistContextDispatch()

  return (
    <div className='mb-3'>
      <p>Você se torna treinado em enganação</p>
      <p className='mb-3'>Você aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha</p>
      <SheetBuilderFormSelect 
        id='arcanist-sorcerer-faerie-extra-spell'
        options={spellOptions}
        placeholder='Escolha a magia'
        onChange={(option) => dispatch(selectSorcererLineageFaerieExtraSpell(option?.value))}
      />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistSorcererFaerie