import AttributeInput from './AttributeInput'
import { SheetBuilderFormStepAttributesDefinitionProvider } from './SheetBuilderFormStepAttributesDefinitionContext'

type Props = {}

const SheetBuilderFormStepAttributesDefinition = (props: Props) => {

  return (
    <SheetBuilderFormStepAttributesDefinitionProvider>
      <form>
        <AttributeInput attribute='strength' />
        <AttributeInput attribute='dexterity' />
        <AttributeInput attribute='constitution' />
        <AttributeInput attribute='intelligence' />
        <AttributeInput attribute='wisdom' />
        <AttributeInput attribute='charisma' />
      </form>
    </SheetBuilderFormStepAttributesDefinitionProvider>
  )
}

export default SheetBuilderFormStepAttributesDefinition