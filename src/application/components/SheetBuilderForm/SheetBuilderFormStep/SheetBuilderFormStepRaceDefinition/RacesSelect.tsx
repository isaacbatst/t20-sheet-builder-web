import { Option } from '@/domain/entities/Option'
import { RaceName } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'

type Props = {
  changeRace: (race?: RaceName) => void
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

const RacesSelect = ({changeRace: setRace}: Props) => {
  return (
    <SheetBuilderFormSelect 
      options={Object.values(raceOptions)}  
      className='mb-6'
      onChange={(option) => setRace(option?.value)}
      placeholder='Escolha uma raça'
      id='race-select'
    />
  )
}

export default RacesSelect