import { submitRole } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRoleDefinition'
import React, { useState } from 'react'
import { SkillName, Warrior } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { RoleComponentProps } from '../SheetBuilderFormStepRoleDefinition'
import SkillGroupSelect from '../SkillGroupSelect'

const SheetBuilderFormRoleDefinitionWarrior: React.FC<RoleComponentProps> = ({
  confirmRole
}) => {
  const [selectedSkillsByGroup, setSelectedSkillsByGroup] = useState<SkillName[][]>(Array.from({length: Warrior.selectSkillGroups.length}, () => []))
  const makeWarrior = () => new Warrior(selectedSkillsByGroup.flat())
  const createSubmitAction = (warrior: Warrior) => submitRole({
    chosenSkills: warrior.chosenSkills,
    name: warrior.name
  })
  const confirmWarrior = () => {
    confirmRole(makeWarrior, createSubmitAction)
  }

  const updateGroupByIndex = (prevSelectedSkillsByGroup: SkillName[][], updatedGroup: SkillName[], indexToUpdate: number) => {
    const updatedGroups = prevSelectedSkillsByGroup.map((group, index) => {
      if(index === indexToUpdate) {
        return updatedGroup
      }
      return group
    })
    return updatedGroups
  }

  return (
    <div>
      {Warrior.selectSkillGroups.map((skillGroup, index) => (
        <SkillGroupSelect skillGroup={skillGroup} key={index} 
          setGroupSelectedSkills={(group) => setSelectedSkillsByGroup((selected) => updateGroupByIndex(selected, group, index))} 
        />
      ))}
      <ConfirmButton confirm={confirmWarrior} />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionWarrior