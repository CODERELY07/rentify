import React from 'react'
import Header from './_components/Header'

const Provider = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='max-w-[1860px] mx-auto'>
      <Header/>
      <div>
          <main>{children}</main>
      </div>
    
    </div>
  )
}

export default Provider
