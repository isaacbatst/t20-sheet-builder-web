import React from 'react'
import { Attributes, SerializedSheetSkills, SkillName, Translator } from 't20-sheet-builder'
import SheetPreviewItem from './SheetPreviewItem'

type Props = {
  skills: SerializedSheetSkills
  attributes: Attributes
}

const SheetPreviewSkills = ({skills, attributes}: Props) => {
  return (
    <div className="mb-6 flex flex-col items-center">
      <p className='mb-3'>Perícias</p>
      <ul className='flex flex-col gap-2'>
        {Object.entries(skills)
          .sort(([skill], [skill2]) => {
            const skillNameTranslation = Translator.getSkillTranslation(skill as SkillName);
            const skillNameTranslation2 = Translator.getSkillTranslation(skill2 as SkillName);
            return skillNameTranslation.localeCompare(skillNameTranslation2);
          })
          .map(([key, skill]) => {
            const skillName = key as SkillName;
            const skillNameTranslation = Translator.getSkillTranslation(skillName);
            const attributeTranslation = Translator.getAttributeTranslation(skill.attribute)
            return <li key={skillName} className='flex items-center gap-2'>
              <div className='w-24 flex flex-col'>
                <SheetPreviewItem  
                  label={skillNameTranslation}
                  value={skill.total}
                />
              </div> 
              + 
              <div className="flex flex-col w-20">
                <SheetPreviewItem  
                  label={attributeTranslation}
                  value={attributes[skill.attribute]}
                />
              </div>
              +
              <div className="flex flex-col">
                <SheetPreviewItem  
                  label='Treino'
                  value={skill.trainingPoints}
                />
              </div>
            </li>
          })}
      </ul>
    </div>
  )
}

export default SheetPreviewSkills