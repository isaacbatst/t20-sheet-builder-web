import React from 'react'

type Props = {
  confirm(): void
}

const ConfirmButton = ({confirm}: Props) => {
  return (
    <button 
      onClick={() => confirm()}
      type='button' className='
          bg-white px-8 py-3 mb-3 rounded-2xl 
          text-slate-900 font-bold 
          transition-colors
          active:opacity-80
          hover:scale-105'
    >
      Confirmar
    </button>  )
}

export default ConfirmButton