import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import SheetBuilderFormStepAttributesDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepAttributesDefinition/SheetBuilderFormStepAttributesDefinition"
import SheetBuilderFormStepEquipmentDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepEquipmentDefinition/SheetBuilderFormStepEquipmentDefinition"
import SheetBuilderFormStepIntelligenceSkillsTraining from "./SheetBuilderFormStep/SheetBuilderFormStepIntelligenceSkillsTraining/SheetBuilderFormStepIntelligenceSkillsTraining"
import SheetBuilderFormStepOriginDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepOriginDefinition/SheetBuilderFormStepOriginDefinition"
import SheetBuilderFormStepRaceDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRaceDefinition/SheetBuilderFormStepRaceDefinition"
import SheetBuilderFormStepRoleDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRoleDefinition/SheetBuilderFormStepRoleDefinition"


const SheetBuilderForm = () => {
  return (
    <Tabs forceRenderTabPanel className='py-8'>
      <TabList>
        <Tab>1 - Atributos Iniciais</Tab>
        <Tab>2 - Raça</Tab>
        <Tab>3 - Classe</Tab>
        <Tab>4 - Origem</Tab>
        <Tab>5 - Perícias de inteligência</Tab>
        <Tab>6 - Equipamento</Tab>
      </TabList>

      <section className="container mx-auto py-8">
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