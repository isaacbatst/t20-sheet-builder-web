import { selectStyles } from '@/common/SelectStyles'
import { Option } from '@/domain/entities/Option'
import React, { ComponentProps } from 'react'
import Select from 'react-select'

type Props<T> = {
  options: Option<T>[]
  placeholder?: string
  className?: ComponentProps<'div'>['className']
  onChange: (option: Option<T> | null) => void
}

const SheetBuilderFormSelect = <T,>(props: Props<T>) => {
  return (
    <Select 
      options={props.options} 
      styles={selectStyles} 
      onChange={(newValue) => props.onChange(newValue as Option<T> | null)} 
      placeholder={props.placeholder}
      className={props.className}
    />
  )
}

export default SheetBuilderFormSelect