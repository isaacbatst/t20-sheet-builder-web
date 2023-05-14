import React, { PropsWithChildren } from 'react'

const SheetPreviewTab = (props: PropsWithChildren) => {
  return (
    <div className='py-2 px-5'>
      {props.children}
    </div>
  )
}

export default SheetPreviewTab