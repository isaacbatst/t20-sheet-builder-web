import React from 'react'

type Props = {
  label: string;
  value: number;
}

const SheetPreviewItem = ({label, value}: Props) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="" className='text-xs mb-2'>{label}</label>
      <div className='border border-white rounded-2xl font-bold px-5 py-1'>{value}</div>
    </div>
  )
}

export default SheetPreviewItem