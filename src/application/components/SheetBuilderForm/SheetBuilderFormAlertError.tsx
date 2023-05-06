import React from 'react'

type Props = {
  error: string
}

const SheetBuilderFormAlertError = ({error}: Props) => {
  return (
    <div 
      className='bg-red-100 border border-red-400 text-red-700 
      px-4 py-3 rounded relative'>{error}</div>
  )
}

export default SheetBuilderFormAlertError