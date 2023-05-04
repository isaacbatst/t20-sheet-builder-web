import SheetBuilderFormStepAttributesDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepAttributesDefinition/SheetBuilderFormStepAttributesDefinition"
import SheetBuilderFormStepEquipmentDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepEquipmentDefinition/SheetBuilderFormStepEquipmentDefinition"
import SheetBuilderFormStepIntelligenceSkillsTraining from "./SheetBuilderFormStep/SheetBuilderFormStepIntelligenceSkillsTraining/SheetBuilderFormStepIntelligenceSkillsTraining"
import SheetBuilderFormStepOriginDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepOriginDefinition/SheetBuilderFormStepOriginDefinition"
import SheetBuilderFormStepRaceDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRaceDefinition/SheetBuilderFormStepRaceDefinition"
import SheetBuilderFormStepRoleDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRoleDefinition/SheetBuilderFormStepRoleDefinition"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const SheetBuilderForm = () => {
  return (
    <Tabs forceRenderTabPanel>
      <TabList>
        <Tab>Atributos</Tab>
        <Tab>Raça</Tab>
        <Tab>Classe</Tab>
        <Tab>Origem</Tab>
        <Tab>Perícias de inteligência</Tab>
        <Tab>Equipamento</Tab>
      </TabList>

      <section className="container mx-auto">
        <TabPanel>
          <SheetBuilderFormStepAttributesDefinition />
        </TabPanel>
        <TabPanel>
          <SheetBuilderFormStepRaceDefinition />
        </TabPanel>
        <TabPanel>
          <SheetBuilderFormStepRoleDefinition />
        </TabPanel>
        <TabPanel>
          <SheetBuilderFormStepOriginDefinition />
        </TabPanel>
        <TabPanel>
          <SheetBuilderFormStepIntelligenceSkillsTraining />
        </TabPanel>
        <TabPanel>
          <SheetBuilderFormStepEquipmentDefinition />
        </TabPanel>
      </section>

    </Tabs>
  )
}

export default SheetBuilderForm