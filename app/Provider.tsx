import React from 'react'
import Header from './_components/Header'

const Provider = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Header/>
      <div className='py-30'>
        {children}
      </div>
    
    </div>
  )
}

export default Provider
