import SheetBuilderFormStepAttributesDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepAttributesDefinition"
import SheetBuilderFormStepEquipmentDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepEquipmentDefinition"
import SheetBuilderFormStepIntelligenceSkillsTraining from "./SheetBuilderFormStep/SheetBuilderFormStepIntelligenceSkillsTraining"
import SheetBuilderFormStepOriginDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepOriginDefinition"
import SheetBuilderFormStepRaceDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRaceDefinition"
import SheetBuilderFormStepRoleDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRoleDefinition"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

type Props = {}

const SheetBuilderForm = (props: Props) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Atributos</Tab>
        <Tab>Raça</Tab>
        <Tab>Classe</Tab>
        <Tab>Origem</Tab>
        <Tab>Perícias de inteligência</Tab>
        <Tab>Equipamento</Tab>
      </TabList>

      <TabPanel>
        <SheetBuilderFormStepAttributesDefinition />
      </TabPanel>
      <TabPanel>
        <SheetBuilderFormStepRaceDefinition />
      </TabPanel>
      <TabPanel>
        <SheetBuilderFormStepOriginDefinition />
      </TabPanel>
      <TabPanel>
        <SheetBuilderFormStepRoleDefinition />
      </TabPanel>
      <TabPanel>
        <SheetBuilderFormStepIntelligenceSkillsTraining />
      </TabPanel>
      <TabPanel>
        <SheetBuilderFormStepEquipmentDefinition />
      </TabPanel>
    </Tabs>
  )
}

export default SheetBuilderForm