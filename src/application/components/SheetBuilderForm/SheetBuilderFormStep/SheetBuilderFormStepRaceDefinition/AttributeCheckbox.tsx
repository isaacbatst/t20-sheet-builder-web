
type Props = {
  attributePreviewItem: JSX.Element
  toggle(): void
}

const AttributeCheckbox = ({attributePreviewItem, toggle}: Props) => {
  return (
    <button onClick={toggle} className="hover:opacity-90 active:scale-105">
      {attributePreviewItem}
    </button>
  )
}

export default AttributeCheckbox