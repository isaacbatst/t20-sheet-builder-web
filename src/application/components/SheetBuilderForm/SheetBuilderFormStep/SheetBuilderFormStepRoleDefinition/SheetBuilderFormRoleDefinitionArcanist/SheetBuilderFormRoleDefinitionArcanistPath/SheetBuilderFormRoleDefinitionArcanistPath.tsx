import React from 'react'
import { ArcanistPathName } from 't20-sheet-builder'
import ArcanistPathSelect from '../ArcanistPathSelect'
import { selectPath, useArcanistContext, useArcanistContextDispatch } from '../SheetBuilderFormRoleDefinitionArcanistContext'
import SheetBuilderFormRoleDefinitionArcanistMage from './SheetBuilderFormRoleDefinitionArcanistMage'
import SheetBuilderFormRoleDefinitionArcanistSorcerer from './SheetBuilderFormRoleDefinitionArcanistSorcerer'
import SheetBuilderFormRoleDefinitionArcanistWizard from './SheetBuilderFormRoleDefinitionArcanistWizard'

const pathComponents: Record<ArcanistPathName, React.FC> = {
  mage: SheetBuilderFormRoleDefinitionArcanistMage,
  sorcerer: SheetBuilderFormRoleDefinitionArcanistSorcerer,
  wizard: SheetBuilderFormRoleDefinitionArcanistWizard
}


const SheetBuilderFormRoleDefinitionArcanistPath = () => {
  const {selectedPath} = useArcanistContext()
  const dispatch = useArcanistContextDispatch()

  const PathComponent = selectedPath ? pathComponents[selectedPath] : null;
  return (
    <div>
      <h3>Caminho do arcanista</h3>
      <ArcanistPathSelect setPath={(path) => dispatch(selectPath(path))}  />
      {PathComponent && <PathComponent />}
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistPath