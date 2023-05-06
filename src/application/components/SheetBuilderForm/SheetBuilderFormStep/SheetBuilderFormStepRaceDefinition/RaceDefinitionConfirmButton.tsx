import React from 'react'

type Props = {
  confirmRace(): void
}

const RaceDefinitionConfirmButton = ({confirmRace}: Props) => {
  return (
    <button 
      onClick={() => confirmRace()}
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

export default RaceDefinitionConfirmButton