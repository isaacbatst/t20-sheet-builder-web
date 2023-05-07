import { Arcanist } from 't20-sheet-builder'
import SkillGroupSelect from '../SkillGroupSelect'
import { updateSkillGroup, useArcanistContextDispatch } from './SheetBuilderFormRoleDefinitionArcanistContext'

const SheetBuilderFormRoleDefinitionArcanistSkillSelect = () => {
  const dispatch = useArcanistContextDispatch()
  return (
    <div>
      {Arcanist.selectSkillGroups.map((skillGroup, index) => (
        <SkillGroupSelect 
          setGroupSelectedSkills={(groupSelectedSkills) => dispatch(updateSkillGroup({
            groupIndex: index,
            skillGroup: groupSelectedSkills
          }))}
          skillGroup={skillGroup} key={index} 
        />
      ))}
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanistSkillSelect