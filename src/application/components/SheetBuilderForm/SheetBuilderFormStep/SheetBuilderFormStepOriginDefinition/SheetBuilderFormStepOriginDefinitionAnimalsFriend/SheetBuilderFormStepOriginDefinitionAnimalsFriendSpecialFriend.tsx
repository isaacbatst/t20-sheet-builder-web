import React from 'react'
import SheetBuilderFormSelect from '../../../SheetBuilderFormSelect'
import { skillsOptions } from '@/application/common/Options'
import { SkillName } from 't20-sheet-builder'

type Props = {
  selectSkill: (skill?: SkillName) => void
}

const options = skillsOptions
  .filter((option) => option.value !== SkillName.aim && option.value !== SkillName.fight)

const SheetBuilderFormStepOriginDefinitionAnimalsFriendSpecialFriend: React.FC<Props> = ({
  selectSkill
}) => {
 
  return (
    <div>
      <p className='mb-2'>Seu amigo especial fornece +2 em uma perícia</p>
      <SheetBuilderFormSelect 
        options={options}
        onChange={(option) => selectSkill(option?.value)}
        id='special-friend-skills'
        placeholder='Escolha uma perícia'
        className='mb-3'
      />
    </div>
  )
}

export default SheetBuilderFormStepOriginDefinitionAnimalsFriendSpecialFriend