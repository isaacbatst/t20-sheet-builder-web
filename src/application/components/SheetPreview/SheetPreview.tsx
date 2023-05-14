import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import SheetPreviewAbilities from './SheetPreviewAbilities'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewSkills from './SheetPreviewSkills'
import SheetPreviewStats from './SheetPreviewStats'

const SheetPreview = () => {

  return (
    <div className='flex flex-col md:flex-row justify-center py-2'>
      <Tabs className='flex-1'>
        <TabList>
          <Tab>Básico</Tab>
          <Tab>Perícias</Tab>
          <Tab>Habilidades</Tab>
          <Tab>Passo a passo</Tab>
        </TabList>
        <TabPanel>
          <SheetPreviewStats />
        </TabPanel>
        <div className="container mx-auto">
          <TabPanel>
            <SheetPreviewSkills />
          </TabPanel>
          <TabPanel>
            <SheetPreviewAbilities />
          </TabPanel>
          <TabPanel>
            <SheetPreviewBuildSteps />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}

export default SheetPreview