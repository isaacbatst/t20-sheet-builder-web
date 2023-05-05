import React, { useEffect } from 'react'
import { Attribute, Attributes } from 't20-sheet-builder'
import AttributeCheckbox from '../AttributeCheckbox'

type AttributeCheckboxes = Record<Attribute, boolean>

type Props = {
  setAttributeModifiers: (attributeModifiers: Partial<Attributes>) => void
}

const SheetBuilderFormStepRaceDefinitionHumanAttributeCheckboxes = ({setAttributeModifiers}: Props) => {
  const [attributeCheckboxes, setAttributeCheckboxes] = React.useState<AttributeCheckboxes>({
    charisma: false,
    constitution: false,
    dexterity: false,
    intelligence: false,
    strength: false,
    wisdom: false 
  })

  useEffect(() => {
    const attributeModifiers = Object.entries(attributeCheckboxes)
      .reduce<Partial<Attributes>>((acc, [attribute, checked]) => {
        if (checked) {
          acc[attribute as Attribute] = 1
        }
        return acc
      }, {})
    setAttributeModifiers(attributeModifiers)
  }, [attributeCheckboxes, setAttributeModifiers])

  const toggleAttribute = (attribute: Attribute) => {
    setAttributeCheckboxes((prev) => ({...prev, [attribute]: !prev[attribute]}))
  }
  
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