import React from 'react'
import { RoleName } from 't20-sheet-builder'
import RoleSelect from './RoleSelect'
import SheetBuilderFormRoleDefinitionArcanist from './SheetBuilderFormRoleDefinitionArcanist/SheetBuilderFormRoleDefinitionArcanist'
import SheetBuilderFormRoleDefinitionWarrior from './SheetBuilderFormRoleDefinitionWarrior/SheetBuilderFormRoleDefinitionWarrior'
import { ConfirmFunction, useSheetBuilderConfirm } from '../../useSheetBuilderSubmit'
import SheetBuilderFormAlertError from '../../SheetBuilderFormAlertError'
import SheetBuilderFormAlertSuccess from '../../SheetBuilderFormAlertSuccess'
import { Role } from 't20-sheet-builder/build/domain/entities/Role/Role'
import { useAppDispatch } from '@/application/store/hooks'
import { resetRole } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRoleDefinition'

export type RoleComponentProps = {
  confirmRole: ConfirmFunction<Role>
}

const roleComponents: Record<RoleName, React.FC<RoleComponentProps>> = {
  arcanist: SheetBuilderFormRoleDefinitionArcanist,
  warrior: SheetBuilderFormRoleDefinitionWarrior
}

const SheetBuilderFormStepRoleDefinition = () => {
  const {confirm, reset, success, error} = useSheetBuilderConfirm<Role>()
  const dispatch = useAppDispatch()
  const [role, setRole] = React.useState<RoleName>()
  const RoleComponent = role ? roleComponents[role] : null;

  const selectRole = (selected: RoleName) => {
    reset()
    dispatch(resetRole())
    setRole(selected)
  }

  return (
    <div>
      <RoleSelect setRole={selectRole} />
      {RoleComponent && <RoleComponent 
        confirmRole={confirm}
      />}
      {error && <SheetBuilderFormAlertError error={error} />}
      {success && <SheetBuilderFormAlertSuccess message='Classe salva com sucesso' />}
    </div>
  )
}

export default SheetBuilderFormStepRoleDefinition