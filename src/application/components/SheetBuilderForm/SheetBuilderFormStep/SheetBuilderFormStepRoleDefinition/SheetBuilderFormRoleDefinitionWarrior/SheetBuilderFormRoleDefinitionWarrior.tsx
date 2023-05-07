import { submitRole } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceRoleDefinition'
import React, { useState } from 'react'
import { SkillName, Warrior } from 't20-sheet-builder'
import ConfirmButton from '../../../ConfirmButton'
import { RoleComponentProps } from '../SheetBuilderFormStepRoleDefinition'
import SkillGroupSelect from '../SkillGroupSelect'
import { updateItemByIndex } from '@/application/common/Imutable'

const SheetBuilderFormRoleDefinitionWarrior: React.FC<RoleComponentProps> = ({
  confirmRole
}) => {
  const skillGroupsLength = Warrior.selectSkillGroups.length
  const initialSelectedSkillsByGroup = Array.from({length: skillGroupsLength}, () => [])
  const [selectedSkillsByGroup, setSelectedSkillsByGroup] = useState<SkillName[][]>(initialSelectedSkillsByGroup)
  const makeWarrior = () => new Warrior(selectedSkillsByGroup.flat())
  const createSubmitAction = (warrior: Warrior) => submitRole({
    chosenSkills: warrior.chosenSkills,
    name: warrior.name
  })
  const confirmWarrior = () => {
    confirmRole(makeWarrior, createSubmitAction)
  }

  const setGroupSelectedSkills = (selected: SkillName[], groupIndex: number) => {
    const updated = updateItemByIndex(selectedSkillsByGroup, selected, groupIndex);
    setSelectedSkillsByGroup(updated)
  }

  return (
    <div>
      {Warrior.selectSkillGroups.map((skillGroup, index) => (
        <SkillGroupSelect skillGroup={skillGroup} key={index} 
          setGroupSelectedSkills={(selected) => setGroupSelectedSkills(selected, index)} 
        />
      ))}
      <ConfirmButton confirm={confirmWarrior} />
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionWarrior