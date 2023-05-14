import { selectPreviewBuildSteps } from '@/application/store/slices/sheetBuilder/sheetBuilderSliceSheetPreview'
import { useSelector } from 'react-redux'
import SheetPreviewBuildSteps from './SheetPreviewBuildSteps'
import SheetPreviewStats from './SheetPreviewStats'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import SheetPreviewSkills from './SheetPreviewSkills'

const SheetPreview = () => {
  const buildSteps = useSelector(selectPreviewBuildSteps)

  return (
    <div className='flex flex-col md:flex-row justify-center py-2'>
      <Tabs className='flex-1'>
        <TabList>
          <Tab>Básico</Tab>
          <Tab>Perícias</Tab>
          <Tab>Passo a passo</Tab>
        </TabList>
        <TabPanel>
          <SheetPreviewStats />
        </TabPanel>
        <TabPanel>
          <SheetPreviewSkills />
        </TabPanel>
        <TabPanel>
          <SheetPreviewBuildSteps buildSteps={buildSteps} />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SheetPreview