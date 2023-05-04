import {StylesConfig} from 'react-select'

export const selectStyles: StylesConfig  = {
  option: (base, state) => {
    return {
      ...base,
      color: state.isSelected ? '#FFFFFF' : '#000000'
    }
  }
}