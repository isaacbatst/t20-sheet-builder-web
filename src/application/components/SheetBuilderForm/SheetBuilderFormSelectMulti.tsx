import { selectStyles } from '@/common/SelectStyles'
import { Option } from '@/domain/entities/Option'
import React, { ComponentProps } from 'react'
import Select from 'react-select'

type Props<T> = {
  options: Option<T>[]
  placeholder?: string
  className?: ComponentProps<'div'>['className']
  isSearcheable?: boolean
  onChange: (option: Option<T>[]) => void
}

const SheetBuilderFormSelectMulti = <T,>(props: Props<T>) => {
  return (
    <Select 
      options={props.options} 
      styles={selectStyles} 
      onChange={(newValue) => props.onChange(newValue as Option<T>[])} 
      placeholder={props.placeholder}
      className={props.className}
      isMulti
      isSearchable={props.isSearcheable ?? false}
    />
  )
}

export default SheetBuilderFormSelectMulti