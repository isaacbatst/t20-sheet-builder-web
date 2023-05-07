import React from 'react'
import ConfirmButton from '../../../ConfirmButton'
import { ConfirmFunction } from '../../../useSheetBuilderSubmit'
import { Role } from 't20-sheet-builder/build/domain/entities/Role/Role'
import { useConfirmArcanist } from './useArcanistForm'

type Props = {
  confirmRole: ConfirmFunction<Role>
}

const SheetBuilderFormRoleDefinitionArcanistConfirm = (props: Props) => {
  const {confirmArcanist} = useConfirmArcanist(props.confirmRole)
  return (
    <ConfirmButton confirm={confirmArcanist} />

  )
}

export default SheetBuilderFormRoleDefinitionArcanistConfirm