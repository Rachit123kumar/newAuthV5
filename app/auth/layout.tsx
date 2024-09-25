import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({children}:LayoutProps) {
  return (
    <div className='h-full flex flex-col items-center justify-center bg-sky-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      {children}
    </div>
  )
}
