import { BuildingSheet } from 't20-sheet-builder'

type Props = {
  sheet: BuildingSheet
}

const SheetPreview = ({sheet}: Props) => {
  return (
    <div>
    <div>{sheet.getMoney()}</div>
    </div>
  )
}

export default SheetPreview