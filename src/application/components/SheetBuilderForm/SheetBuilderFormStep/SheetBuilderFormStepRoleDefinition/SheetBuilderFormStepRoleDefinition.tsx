import React from 'react'
import { RoleName } from 't20-sheet-builder'
import RoleSelect from './RoleSelect'
import SheetBuilderFormRoleDefinitionArcanist from './SheetBuilderFormRoleDefinitionArcanist/SheetBuilderFormRoleDefinitionArcanist'
import SheetBuilderFormRoleDefinitionWarrior from './SheetBuilderFormRoleDefinitionWarrior'

const roleComponents: Record<RoleName, React.FC> = {
  arcanist: SheetBuilderFormRoleDefinitionArcanist,
  warrior: SheetBuilderFormRoleDefinitionWarrior
}

const SheetBuilderFormStepRoleDefinition = () => {
  const [role, setRole] = React.useState<RoleName>()
  const RoleComponent = role ? roleComponents[role] : null
  return (
    <div>
      <RoleSelect setRole={setRole} />
      {RoleComponent && <RoleComponent />}
    </div>
  )
}

export default SheetBuilderFormStepRoleDefinition