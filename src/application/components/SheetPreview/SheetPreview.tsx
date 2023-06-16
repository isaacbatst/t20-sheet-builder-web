import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import SheetPreviewAbilities from './SheetPreviewAbilities'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewSkills from './SheetPreviewSkills'
import SheetPreviewStats from './SheetPreviewStats'
import SheetPreviewSpells from './SheetPreviewSpells'
import SheetPreviewTab from './SheetPreviewTab'
import SheetPreviewPowers from './SheetPreviewPowers'
import SheetPreviewInventory from './SheetPreviewInventory'

const SheetPreview = () => {

  return (
    <div className='flex flex-col md:flex-row justify-center py-2'>
      <Tabs className='flex-1'>
        <TabList>
          <Tab>Básico</Tab>
          <Tab>Perícias</Tab>
          <Tab>Habilidades</Tab>
          <Tab>Poderes</Tab>
          <Tab>Magias</Tab>
          <Tab>Inventário</Tab>
          <Tab>Passo a passo</Tab>
        </TabList>
        <div className="container mx-auto">
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewStats />
            </SheetPreviewTab>
          </TabPanel>
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewSkills />
            </SheetPreviewTab>
          </TabPanel>
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewAbilities />
            </SheetPreviewTab>
          </TabPanel>
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewPowers />
            </SheetPreviewTab>
          </TabPanel>
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewSpells />
            </SheetPreviewTab>
          </TabPanel>
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewInventory />
            </SheetPreviewTab>
          </TabPanel>
          <TabPanel>
            <SheetPreviewTab>
              <SheetPreviewBuildSteps />
            </SheetPreviewTab>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}

export default SheetPreview