
type Props = {
  attributePreviewItem: JSX.Element
  toggle(): void
}

const AttributeCheckbox = ({attributePreviewItem, toggle}: Props) => {
  return (
    <button onClick={toggle}>
      {attributePreviewItem}
    </button>
  )
}

export default AttributeCheckbox