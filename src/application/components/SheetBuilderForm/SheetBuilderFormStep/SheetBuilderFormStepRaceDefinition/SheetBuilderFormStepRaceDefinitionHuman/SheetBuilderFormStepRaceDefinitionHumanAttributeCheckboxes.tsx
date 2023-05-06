import { Attribute } from 't20-sheet-builder'
import AttributeCheckbox from '../AttributeCheckbox'
import { AttributeCheckboxes } from './SheetBuilderFormStepRaceDefinitionHuman'


type Props = {
  attributeCheckboxes: AttributeCheckboxes
  toggleAttribute: (attribute: Attribute) => void
}

const SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes = ({
  attributeCheckboxes,
  toggleAttribute,
}: Props) => {
  
  
  return (
    <div className=''>
      <h3 className='mb-3'>+1 em três atributos diferentes</h3>
      <div className='flex flex-row flex-wrap justify-center mb-6'>
        {Object.entries(attributeCheckboxes).map(([attribute, checked]) => (
          <AttributeCheckbox 
            key={attribute} attribute={attribute as Attribute} isChecked={checked} 
            toggle={() => toggleAttribute(attribute as Attribute)}
          />
        ))}
      </div>
    </div>
  )
}

export default SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes