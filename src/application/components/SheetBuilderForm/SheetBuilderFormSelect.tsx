import { selectStyles } from '@/application/common/SelectStyles'
import { Option } from '@/domain/entities/Option'
import React, { ComponentProps } from 'react'
import Select, { MultiValue, SingleValue } from 'react-select'

type Value<T, IsMulti extends boolean> = IsMulti extends true ? MultiValue<Option<T>> : SingleValue<Option<T>>

type Props<T, IsMulti extends boolean, V = Value<T, IsMulti>> = {
  options: Option<T>[]
  placeholder?: string
  className?: ComponentProps<'div'>['className']
  isSearcheable?: boolean
  isMulti?: IsMulti
  id: string
  defaultValue?: T
  isClearable?: boolean
  onChange: (option: V) => void
}

const SheetBuilderFormSelect = <T, isMulti extends boolean = false, V extends Value<T, isMulti> = Value<T, isMulti>>
  (props: Props<T, isMulti>) => {
  return (
    <Select 
      options={props.options} 
      styles={selectStyles} 
      onChange={(newValue) => props.onChange(newValue as V)} 
      placeholder={props.placeholder}
      className={props.className}
      isSearchable={props.isSearcheable ?? false}
      isMulti={props.isMulti}
      instanceId={props.id}
      isClearable={props.isClearable}
      defaultValue={props.defaultValue}
    />
  )
}

export default SheetBuilderFormSelect