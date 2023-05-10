import { useAppDispatch, useAppSelector } from '@/application/store/hooks'
import { selectAttributes } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceInitialAttributes'
import { resetRace } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRaceDefinition'
import React, { useMemo } from 'react'
import { Attribute, Attributes, RaceName, Races } from 't20-sheet-builder'
import { Race } from 't20-sheet-builder/build/domain/entities/Race/Race'
import SheetBuilderFormAlertError from '../../SheetBuilderFormAlertError'
import SheetBuilderFormAlertSuccess from '../../SheetBuilderFormAlertSuccess'
import { ConfirmFunction, useSheetBuilderConfirm } from '../../useSheetBuilderSubmit'
import { AttributePreview } from './AttributePreview'
import RacesSelect from './RacesSelect'
import SheetBuilderFormStepRaceDefinitionDwarf from './SheetBuilderFormStepRaceDefinitionDwarf/SheetBuilderFormStepRaceDefinitionDwarf'
import SheetBuilderFormStepRaceDefinitionHuman from './SheetBuilderFormStepRaceDefinitionHuman/SheetBuilderFormStepRaceDefinitionHuman'

export type RaceComponentProps = {
  attributesPreview: AttributePreview[]
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

  const attributes = useAppSelector(selectAttributes)

  const attributesPreview = useMemo(() => {
    return Object.entries(attributes)
      .map<AttributePreview>(([key, value]) => {
        const attribute = key as Attribute;
        const modifier = attributeModifiers[attribute];
        return {
          attribute,
          modifier,
          value: value + (modifier ?? 0)
        }
      })
  }, [attributes, attributeModifiers]);

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
        attributesPreview={attributesPreview}
      />}
      {error && <SheetBuilderFormAlertError error={error} />}
      {success && <SheetBuilderFormAlertSuccess message='Raça salva com sucesso' />}
    </section>
  )
}

export default SheetBuilderFormStepRaceDefinition