import { SheetBuilderFormError } from "@/application/common/SheetBuilderFormError"
import { useAppDispatch } from "@/application/store/hooks"
import { setFormError } from "@/application/store/slices/sheetBuilder/sheetBuilderSliceForm"
import { PayloadAction } from "@reduxjs/toolkit"
import { useCallback } from "react"
import { SheetBuilderError } from "t20-sheet-builder"

export type ConfirmFunction<Type> = <
  Entity extends Type, 
  Payload, 
  Action extends PayloadAction<Payload> = PayloadAction<Payload>
>(make: () => Entity, createAction: (entity: Entity) => Action) => void


export const useSheetBuilderConfirm = <Type, >() => {
  const dispatch = useAppDispatch()

  const confirm: ConfirmFunction<Type> = useCallback((make, createSubmitAction) => {
    try {
      const entity = make();
      const action = createSubmitAction(entity)
      dispatch(action)
    } catch (err) {
      if(err instanceof SheetBuilderError || err instanceof SheetBuilderFormError) {
        return dispatch(setFormError(err.message))  
      }

      dispatch(setFormError('UNKNOWN_ERROR'))
    }
  }, [dispatch])

  return {
    confirm
  }
}