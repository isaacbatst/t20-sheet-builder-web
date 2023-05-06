import { useAppDispatch } from '@/application/store/hooks'
import React from 'react'
import { Attributes, RaceName, Races } from 't20-sheet-builder'
import SheetBuilderFormAlertError from '../../SheetBuilderFormAlertError'
import SheetBuilderFormAlertSuccess from '../../SheetBuilderFormAlertSuccess'
import { useSheetBuilderConfirm } from '../../useSheetBuilderSubmit'
import AtrributesPreview from './AtrributesPreview'
import RacesSelect from './RacesSelect'
import SheetBuilderFormStepRaceDefinitionDwarf from './SheetBuilderFormStepRaceDefinitionDwarf/SheetBuilderFormStepRaceDefinitionDwarf'
import SheetBuilderFormStepRaceDefinitionHuman from './SheetBuilderFormStepRaceDefinitionHuman/SheetBuilderFormStepRaceDefinitionHuman'
import { ConfirmFunction } from '../../useSheetBuilderSubmit'
import { Race } from 't20-sheet-builder/build/domain/entities/Race/Race'
import { resetRace } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRaceDefinition'

export type RaceComponentProps = {
  attributesPreview: JSX.Element
  confirmRace: ConfirmFunction<Race>
  setAttributeModifiers: (attributeModifiers: Partial<Attributes>) => void
}

const raceComponents: Record<RaceName, React.FC<RaceComponentProps>> = {
  [RaceName.dwarf]: SheetBuilderFormStepRaceDefinitionDwarf,
  [RaceName.human]: SheetBuilderFormStepRaceDefinitionHuman,
}


const SheetBuilderFormStepRaceDefinition = () => {
  const [race, setRace] = React.useState<RaceName>()
  const [attributeModifiers, setAttributeModifiers] = React.useState<Partial<Attributes>>({})
  const {confirm, reset, error,success} = useSheetBuilderConfirm<Race>()
  const dispatch = useAppDispatch()

  const resetState = () => {
    reset();
    setAttributeModifiers({})
    dispatch(resetRace())
  }

  const changeRace = (race?: RaceName) => {
    setRace(race)
    resetState()

    if(race) {
      const RaceClass = Races.getByName(race)
      setAttributeModifiers(RaceClass.attributeModifiers)
    }

  }  
  const RaceComponent = race ? raceComponents[race] : null
  return (
    <section className='py-6'>
      <RacesSelect changeRace={changeRace} />
      {RaceComponent && <RaceComponent 
        setAttributeModifiers={setAttributeModifiers} 
        confirmRace={confirm}
        attributesPreview={<AtrributesPreview attributeModifiers={attributeModifiers} />}
      />}
      {error && <SheetBuilderFormAlertError error={error} />}
      {success && <SheetBuilderFormAlertSuccess message='Raça salva com sucesso' />}
    </section>
  )
}

export default SheetBuilderFormStepRaceDefinition