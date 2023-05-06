import { useAppDispatch } from "@/application/store/hooks"
import { PayloadAction } from "@reduxjs/toolkit"
import { useCallback, useState } from "react"

export type ConfirmFunction<Type> = <
  Entity extends Type, 
  Payload, 
  Action extends PayloadAction<Payload> = PayloadAction<Payload>
>(make: () => Entity, createAction: (entity: Entity) => Action) => void


export const useSheetBuilderConfirm = <Type, >() => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<boolean>(false)

  const reset = () => {
    setError(undefined)
    setSuccess(false)
  }

  const confirm: ConfirmFunction<Type> = useCallback((makeRace, createSubmitAction) => {
    try {
      setSuccess(false)
      setError(undefined)
      const race = makeRace();
      const action = createSubmitAction(race)
      dispatch(action)
      setSuccess(true)
    } catch (err) {
      if(err instanceof Error) {
        return setError(err.message)
      }

      setError('UNKNOWN_ERROR')
    }
  }, [dispatch])

  return {
    error,
    success,
    reset,
    confirm
  }
}