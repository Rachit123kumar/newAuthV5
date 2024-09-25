import React from 'react'

export default function Layout({children}:any) {
  return (
    <div className='h-full flex flex-col items-center justify-center bg-sky-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      {children}
    </div>
  )
}
