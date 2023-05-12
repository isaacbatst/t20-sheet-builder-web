import { Arcanist } from 't20-sheet-builder'
import SkillGroupSelect from '../SkillGroupSelect'
import { useArcanistFormContext } from './SheetBuilderFormRoleDefinitionArcanistContext'

const SheetBuilderFormRoleDefinitionArcanistSkillSelect = () => {
  const {updateSkillGroup} = useArcanistFormContext()
  return (
    <div>
      {Arcanist.selectSkillGroups.map((skillGroup, index) => (
        <SkillGroupSelect 
          setGroupSelectedSkills={(groupSelectedSkills) => 
            updateSkillGroup(groupSelectedSkills, index)}
          skillGroup={skillGroup} key={index} 
        />
      ))}
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistSkillSelect