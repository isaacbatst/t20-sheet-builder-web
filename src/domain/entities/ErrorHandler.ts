import { CommonErrors } from "./CommonErrors"

export class ErrorHandler {
  static tryTo(execute: () => void, setError: (error?: string) => void): void {
    try {
      setError(undefined)
      execute()
    } catch(error) {
      if(error instanceof Error) {
        return setError(error.message)
      }

      setError(CommonErrors.UNKNOWN_ERROR)
    }
  }
}