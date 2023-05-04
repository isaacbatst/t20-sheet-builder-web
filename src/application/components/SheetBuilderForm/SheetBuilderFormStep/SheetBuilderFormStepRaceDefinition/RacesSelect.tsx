import { Option } from '@/domain/entities/Option'
import { RaceName } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'

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
    <SheetBuilderFormSelect 
      options={Object.values(raceOptions)}  
      className='mb-3'
      onChange={(option) => setRace(option?.value)}
      placeholder='Escolha uma raça'
    />
  )
}

export default RacesSelect