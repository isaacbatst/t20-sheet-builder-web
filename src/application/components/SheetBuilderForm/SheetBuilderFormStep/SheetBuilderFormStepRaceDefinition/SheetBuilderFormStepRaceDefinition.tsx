import { useAppDispatch } from '@/application/store/hooks'
import { resetRace } from '@/application/store/slices/sheetBuilder/sheetBuilderSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import React, { useCallback } from 'react'
import { Attributes, RaceName, Races } from 't20-sheet-builder'
import { Race } from 't20-sheet-builder/build/domain/entities/Race/Race'
import SheetBuilderFormAlertError from '../../SheetBuilderFormAlertError'
import SheetBuilderFormAlertSuccess from '../../SheetBuilderFormAlertSuccess'
import AtrributesPreview from './AtrributesPreview'
import RacesSelect from './RacesSelect'
import SheetBuilderFormStepRaceDefinitionDwarf from './SheetBuilderFormStepRaceDefinitionDwarf/SheetBuilderFormStepRaceDefinitionDwarf'
import SheetBuilderFormStepRaceDefinitionHuman from './SheetBuilderFormStepRaceDefinitionHuman/SheetBuilderFormStepRaceDefinitionHuman'

export type RaceComponentProps = {
  attributesPreview: JSX.Element
  confirmRace: ConfirmRace
  setAttributeModifiers: (attributeModifiers: Partial<Attributes>) => void
}

const raceComponents: Record<RaceName, React.FC<RaceComponentProps>> = {
  [RaceName.dwarf]: SheetBuilderFormStepRaceDefinitionDwarf,
  [RaceName.human]: SheetBuilderFormStepRaceDefinitionHuman,
}

export type ConfirmRace = <
  R extends Race, 
  P, 
  Action extends PayloadAction<P> = PayloadAction<P>
>(makeRace: () => R, createAction: (race: R) => Action) => void

const SheetBuilderFormStepRaceDefinition = () => {
  const [race, setRace] = React.useState<RaceName>()
  const [attributeModifiers, setAttributeModifiers] = React.useState<Partial<Attributes>>({})
  const [error, setError] = React.useState<string>()
  const [success, setSuccess] = React.useState<boolean>(false)
  const dispatch = useAppDispatch()

  const resetState = () => {
    setAttributeModifiers({})
    setSuccess(false)
    setError(undefined)
    dispatch(resetRace())
  }

  const confirmRace: ConfirmRace = useCallback((makeRace, createSubmitAction) => {
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
        confirmRace={confirmRace}
        attributesPreview={<AtrributesPreview attributeModifiers={attributeModifiers} />}
      />}
      {error && <SheetBuilderFormAlertError error={error} />}
      {success && <SheetBuilderFormAlertSuccess message='Raça salva com sucesso' />}
    </section>
  )
}

export default SheetBuilderFormStepRaceDefinition