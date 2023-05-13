import { useAppDispatch, useAppSelector } from '@/application/store/hooks'
import { resetFormAlert } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceForm'
import { selectAttributes } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceInitialAttributes'
import { resetRace } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRaceDefinition'
import React, { useMemo } from 'react'
import { Attribute, Attributes, RaceName, Races } from 't20-sheet-builder'
import { Race } from 't20-sheet-builder/build/domain/entities/Race/Race'
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
  const {confirm} = useSheetBuilderConfirm<Race>()
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
    dispatch(resetFormAlert())
    dispatch(resetRace())
    setAttributeModifiers({})
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
    </section>
  )
}

export default SheetBuilderFormStepRaceDefinition