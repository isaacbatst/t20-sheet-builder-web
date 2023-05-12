import React from "react"
import SheetBuilderFormSelect from "../../../../SheetBuilderFormSelect"
import { selectSorcererLineage, useArcanistFormContext, useArcanistContextDispatch } from "../SheetBuilderFormRoleDefinitionArcanistContext"
import { ArcanistLineageType } from "t20-sheet-builder"
import SheetBuilderFormRoleDefinitionArcanistSorcererDraconic from "./SheetBuilderFormRoleDefinitionArcanistSorcererDraconic"
import SheetBuilderFormRoleDefinitionArcanistSorcererFaerie from "./SheetBuilderFormRoleDefinitionArcanistSorcererFaerie"
import SheetBuilderFormRoleDefinitionArcanistSorcererRed from "./SheetBuilderFormRoleDefinitionArcanistSorcererRed"

const lineageTranslations: Record<ArcanistLineageType, string> = {
  draconic: 'Dracônica',
  faerie: 'Feérica',
  red: 'Rubra'
}

const lineageComponents: Record<ArcanistLineageType, React.FC> = {
  draconic: SheetBuilderFormRoleDefinitionArcanistSorcererDraconic,
  faerie: SheetBuilderFormRoleDefinitionArcanistSorcererFaerie,
  red: SheetBuilderFormRoleDefinitionArcanistSorcererRed
}

const SheetBuilderFormRoleDefinitionArcanistSorcerer = () => {
  const dispatch = useArcanistContextDispatch()
  const {sorcererLineage} = useArcanistFormContext()
  const LineageComponent = sorcererLineage ? lineageComponents[sorcererLineage] : null
  return <div>
    <p>Você possui uma linhagem sobrenatural</p>
    <SheetBuilderFormSelect 
      options={Object.values(ArcanistLineageType).map(lineage => ({
        value: lineage,
        label: lineageTranslations[lineage]
      }))}
      onChange={(option) => dispatch(selectSorcererLineage(option?.value))}
      className='mb-3'
      placeholder='Escolha uma linhagem'
      id="arcanist-sorcerer-lineage-select"
    />
    {LineageComponent && <LineageComponent />}
  </div>
}

export default SheetBuilderFormRoleDefinitionArcanistSorcerer