import { SheetBuilderFormError } from "@/application/common/SheetBuilderFormError"
import { submitOrigin } from "@/application/store/slices/sheetBuilder/sheetBuilderSliceOriginDefinition"
import React from "react"
import { AnimalsFriend, AnimalsFriendEquipments, Origin, OriginBenefitFactoryAnimalsFriend, OriginPowerName, SerializedOriginBenefitsAnimalsFriend, SkillName } from "t20-sheet-builder"
import { ConfirmFunction } from "../../../useSheetBuilderSubmit"
import { OriginBenefitOption } from "../OriginBenefitsSelect"

export const useAnimalsFriendForm = (
  selectedBenefits: OriginBenefitOption[],
  confirmOrigin: ConfirmFunction<Origin>
) => {
  const [selectedAnimal, setSelectedAnimal] = React.useState<AnimalsFriendEquipments>()
  const [selectedSpecialFriendSkill, setSelectedSpecialFriendSkill] = React.useState<SkillName>()
  const makeAnimalsFriend = () => {
    const benefitFactory = new OriginBenefitFactoryAnimalsFriend()
    const benefits = selectedBenefits.map((benefit) => {
      if(benefit.name === OriginPowerName.specialFriend) {
        if(!selectedSpecialFriendSkill) {
          throw new SheetBuilderFormError('MISSING_SPECIAL_FRIEND_SKILL')
        }

        return benefitFactory.makeFromSerialized({
          name: OriginPowerName.specialFriend,
          skill: selectedSpecialFriendSkill,
          type: 'originPower'
        })
      }

      return benefitFactory.makeFromSerialized(benefit as SerializedOriginBenefitsAnimalsFriend)
    })

    if(!selectedAnimal) {
      throw new SheetBuilderFormError('MISSING_SELECTED_ANIMAL')
    }

    return new AnimalsFriend(benefits, selectedAnimal)
  }

  const createSubmitAction = (animalsFriend: AnimalsFriend)  => {
    return submitOrigin(animalsFriend.serialize())
  }
  const confirmAnimalsFriend = () => {
    confirmOrigin(makeAnimalsFriend, createSubmitAction)
  }

  return {
    setSelectedAnimal,
    setSelectedSpecialFriendSkill,
    confirmAnimalsFriend,
  }
}