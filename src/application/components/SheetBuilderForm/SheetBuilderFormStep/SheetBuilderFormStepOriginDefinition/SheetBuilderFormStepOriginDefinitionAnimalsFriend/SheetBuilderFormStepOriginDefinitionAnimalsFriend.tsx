import { OriginPowerName } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { OriginComponentType } from '../SheetBuilderFormStepOriginDefinition'
import AnimalEquipmentSelect from './AnimalEquipmentSelect'
import SheetBuilderFormStepOriginDefinitionAnimalsFriendSpecialFriend from './SheetBuilderFormStepOriginDefinitionAnimalsFriendSpecialFriend'
import { useAnimalsFriendForm } from './useAnimalsFriendForm'

const SheetBuilderFormStepOriginDefinitionAnimalsFriend: OriginComponentType = ({
  benefitsSelect,
  confirmOrigin,
  selectedBenefits
}) => {
  const { 
    confirmAnimalsFriend,
    setSelectedAnimal,
    setSelectedSpecialFriendSkill,
  } = useAnimalsFriendForm(selectedBenefits, confirmOrigin)

  const isSpecialFriendSelected = selectedBenefits.some((benefit) => {
    return benefit.name === OriginPowerName.specialFriend
  })
 
  return (
    <div>
      <AnimalEquipmentSelect selectAnimal={setSelectedAnimal} />
      {benefitsSelect}
      {isSpecialFriendSelected && 
        <SheetBuilderFormStepOriginDefinitionAnimalsFriendSpecialFriend 
          selectSkill={setSelectedSpecialFriendSkill}
        />
      }
      <ConfirmButton confirm={confirmAnimalsFriend} />
    </div>
  )
}

export default SheetBuilderFormStepOriginDefinitionAnimalsFriend