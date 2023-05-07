import React from 'react'
import { RoleComponentProps } from '../SheetBuilderFormStepRoleDefinition'
import SheetBuilderFormRoleDefinitionArcanistConfirm from './SheetBuilderFormRoleDefinitionArcanistConfirm'
import { ArcanistContextProvider } from './SheetBuilderFormRoleDefinitionArcanistContext'
import SheetBuilderFormRoleDefinitionArcanistInitialSpells from './SheetBuilderFormRoleDefinitionArcanistInitialSpells'
import SheetBuilderFormRoleDefinitionArcanistPath from './SheetBuilderFormRoleDefinitionArcanistPath/SheetBuilderFormRoleDefinitionArcanistPath'
import SheetBuilderFormRoleDefinitionArcanistSkillSelect from './SheetBuilderFormRoleDefinitionArcanistSkillSelect'

const SheetBuilderFormRoleDefinitionArcanist: React.FC<RoleComponentProps> = ({
  confirmRole
}) => {
  return (
    <ArcanistContextProvider>
      <div>
        <SheetBuilderFormRoleDefinitionArcanistSkillSelect />
        <SheetBuilderFormRoleDefinitionArcanistInitialSpells />
        <SheetBuilderFormRoleDefinitionArcanistPath />
        <SheetBuilderFormRoleDefinitionArcanistConfirm confirmRole={confirmRole}/>
      </div>
    </ArcanistContextProvider>
  )
}

export default SheetBuilderFormRoleDefinitionArcanist