import React from 'react'
import { Arcanist, ArcanistPathName } from 't20-sheet-builder'
import SkillGroupSelect from '../SkillGroupSelect'
import ArcanistPathSelect from './ArcanistPathSelect'
import SheetBuilderFormRoleDefinitionArcanistInitialSpells from './SheetBuilderFormRoleDefinitionArcanistInitialSpells'
import SheetBuilderFormRoleDefinitionArcanistMage from './SheetBuilderFormRoleDefinitionArcanistMage'
import SheetBuilderFormRoleDefinitionArcanistSorcerer from './SheetBuilderFormRoleDefinitionArcanistSorcerer'
import SheetBuilderFormRoleDefinitionArcanistWizard from './SheetBuilderFormRoleDefinitionArcanistWizard'

const pathComponents: Record<ArcanistPathName, React.FC> = {
  mage: SheetBuilderFormRoleDefinitionArcanistMage,
  sorcerer: SheetBuilderFormRoleDefinitionArcanistSorcerer,
  wizard: SheetBuilderFormRoleDefinitionArcanistWizard
}

const SheetBuilderFormRoleDefinitionArcanist = () => {
  const [path, setPath] = React.useState<ArcanistPathName>()
  const PathComponent = path ? pathComponents[path] : null
  return (
    <div>
      <div>
        {Arcanist.selectSkillGroups.map((skillGroup, index) => (
          <SkillGroupSelect skillGroup={skillGroup} key={index} />
        ))}
      </div>
      <div>
        <SheetBuilderFormRoleDefinitionArcanistInitialSpells />
        <h3>Caminho do arcanista</h3>
        <ArcanistPathSelect setPath={setPath} />
        {PathComponent && <PathComponent />}
      </div>
    </div>
  )
}

export default SheetBuilderFormRoleDefinitionArcanist