import React from 'react'
import SheetBuilderFormSelect from '../../SheetBuilderFormSelect'
import { OriginName, Translator } from 't20-sheet-builder'
import { Option } from '@/domain/entities/Option'

type Props = {
  setOrigin: (origin?: OriginName) => void
}

const originOptions: Option<OriginName>[] = Object.values(OriginName).map(originName => ({
  label: Translator.getOriginTranslation(originName),
  value: originName
}))

const OriginSelect = (props: Props) => {
  return (
    <SheetBuilderFormSelect 
      options={originOptions}
      onChange={(option) => props.setOrigin(option?.value)}
      className='mb-3'
    />
  )
}

export default OriginSelect