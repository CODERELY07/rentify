import React from 'react'
import Footer from './_components/Footer'
import MobileBottomMenu from '@/components/MobileBottomMenu'

const Provider = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='max-w-[1860px] mx-auto'>
      <div>
          <main>{children}</main>
      </div>
      <MobileBottomMenu/>
    </div>
  )
}

export default Provider
