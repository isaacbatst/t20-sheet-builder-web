import React from 'react'
import Select from 'react-select'
import { RaceName } from 't20-sheet-builder'
import {Option} from '@/domain/entities/Option'
import { selectStyles } from '@/common/SelectStyles'

type Props = {
  setRace: (race?: RaceName) => void
}

const raceOptions: Record<RaceName, Option<RaceName>> = {
  dwarf: {
    label: 'Anão',
    value: RaceName.dwarf,
  },
  human: {
    label: 'Humano',
    value: RaceName.human,
  }
} 

const RacesSelect = ({setRace}: Props) => {
  return (
    <Select options={Object.values(raceOptions)}  className='mb-3'
      onChange={(e) => setRace(e.value)}
      styles={selectStyles}/>
  )
}

export default RacesSelect