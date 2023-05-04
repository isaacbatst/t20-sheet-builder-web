import { Warrior } from 't20-sheet-builder'
import SkillGroupSelect from './SkillGroupSelect'

const SheetBuilderFormRoleDefinitionWarrior = () => {
  return (
    <div>
      {Warrior.selectSkillGroups.map((skillGroup, index) => (
        <SkillGroupSelect skillGroup={skillGroup} key={index} />
      ))}
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionWarrior