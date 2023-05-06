import React from 'react'
import { RoleName } from 't20-sheet-builder'
import RoleSelect from './RoleSelect'
import SheetBuilderFormRoleDefinitionArcanist from './SheetBuilderFormRoleDefinitionArcanist/SheetBuilderFormRoleDefinitionArcanist'
import SheetBuilderFormRoleDefinitionWarrior from './SheetBuilderFormRoleDefinitionWarrior'
import { ConfirmFunction, useSheetBuilderConfirm } from '../../useSheetBuilderSubmit'
import SheetBuilderFormAlertError from '../../SheetBuilderFormAlertError'
import SheetBuilderFormAlertSuccess from '../../SheetBuilderFormAlertSuccess'
import { Role } from 't20-sheet-builder/build/domain/entities/Role/Role'

export type RoleComponentProps = {
  confirmRole: ConfirmFunction<Role>
}

const roleComponents: Record<RoleName, React.FC<RoleComponentProps>> = {
  arcanist: SheetBuilderFormRoleDefinitionArcanist,
  warrior: SheetBuilderFormRoleDefinitionWarrior
}

const SheetBuilderFormStepRoleDefinition = () => {
  const {confirm, reset, success, error} = useSheetBuilderConfirm<Role>()
  const [role, setRole] = React.useState<RoleName>()
  const RoleComponent = role ? roleComponents[role] : null;
  return (
    <div>
      <RoleSelect setRole={setRole} />
      {RoleComponent && <RoleComponent 
        confirmRole={confirm}
      />}
      {error && <SheetBuilderFormAlertError error={error} />}
      {success && <SheetBuilderFormAlertSuccess message='Classe salva com sucesso' />}
    </div>
  )
}

export default SheetBuilderFormStepRoleDefinition