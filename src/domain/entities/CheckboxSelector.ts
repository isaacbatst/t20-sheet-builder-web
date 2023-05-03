export class CheckboxSelector<T> {
  amountLimit: number
  items: Map<T, boolean>

  constructor(choosable: { items: T[], amount: number }) {
    const map: Map<T, boolean> = new Map()

    choosable.items.forEach(item => {
      map.set(item, false)
    })

    this.items = map;
    this.amountLimit = choosable.amount 
  }

  toggle(item: T) {
    const isChecked = this.items.get(item)
    if(typeof isChecked === 'undefined') return
    if(!isChecked && this.getAmountChecked() >= this.amountLimit) return
    this.items.set(item, !isChecked)
  }

  getChosenItems(): T[] {
    const chosenItems: T[] = []

    this.items.forEach((checked, item) => {
      if(checked) chosenItems.push(item)
    })

    return chosenItems
  }

  private getAmountChecked() {
    let amount = 0;
    this.items.forEach(item => {
      if(item) amount += 1
    })
    return amount
  }
}
