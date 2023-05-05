import React from "react"
import SheetBuilderFormSelect from "../../../SheetBuilderFormSelect"

enum Lineages {
  'draconic' = 'draconic',
  'faerie' = 'faerie',
  'red' = 'red'
} 

const lineageTranslations: Record<Lineages, string> = {
  draconic: 'Dracônica',
  faerie: 'Feérica',
  red: 'Rubra'
}

const SheetBuilderFormRoleDefinitionArcanistSorcerer = () => {
  const [lineage, setLineage] = React.useState<Lineages>()
  return <div>
    <p>Você possui uma linhagem sobrenatural</p>
    <SheetBuilderFormSelect 
      options={Object.values(Lineages).map(lineage => ({
        value: lineage,
        label: lineageTranslations[lineage]
      }))}
      onChange={(option) => setLineage(option?.value)}
      className='mb-3'
      placeholder='Escolha uma linhagem'
      id="arcanist-sorcerer-lineage-select"
    />
  </div>
}

export default SheetBuilderFormRoleDefinitionArcanistSorcerer