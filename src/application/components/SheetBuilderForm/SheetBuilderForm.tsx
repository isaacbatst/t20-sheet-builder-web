import { resetFormAlert, selectFormAlert } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceForm'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import SheetBuilderFormAlertError from './SheetBuilderFormAlertError'
import SheetBuilderFormAlertSuccess from './SheetBuilderFormAlertSuccess'
import SheetBuilderFormStepAttributesDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepAttributesDefinition/SheetBuilderFormStepAttributesDefinition"
import SheetBuilderFormStepEquipmentDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepEquipmentDefinition/SheetBuilderFormStepEquipmentDefinition"
import SheetBuilderFormStepIntelligenceSkillsTraining from "./SheetBuilderFormStep/SheetBuilderFormStepIntelligenceSkillsTraining/SheetBuilderFormStepIntelligenceSkillsTraining"
import SheetBuilderFormStepOriginDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepOriginDefinition/SheetBuilderFormStepOriginDefinition"
import SheetBuilderFormStepRaceDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRaceDefinition/SheetBuilderFormStepRaceDefinition"
import SheetBuilderFormStepRoleDefinition from "./SheetBuilderFormStep/SheetBuilderFormStepRoleDefinition/SheetBuilderFormStepRoleDefinition"


const SheetBuilderForm = () => {
  const alert = useSelector(selectFormAlert)
  const dispatch = useDispatch()
  const onChangeTab = () => {
    dispatch(resetFormAlert())
  }

  return (
    <div>
      <Tabs forceRenderTabPanel onSelect={onChangeTab}>
        <TabList>
          <Tab>1 - Atributos Iniciais</Tab>
          <Tab>2 - Raça</Tab>
          <Tab>3 - Classe</Tab>
          <Tab>4 - Origem</Tab>
          <Tab>5 - Perícias de inteligência</Tab>
          <Tab>6 - Equipamento</Tab>
        </TabList>

        <section className="container mx-auto pt-5">
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
      <div className="container mx-auto">
        {alert?.type === 'error' && <SheetBuilderFormAlertError message={alert.message} />}
        {alert?.type === 'success' && <SheetBuilderFormAlertSuccess message={alert.message} />}
      </div>
    </div>
  )
}

export default SheetBuilderForm