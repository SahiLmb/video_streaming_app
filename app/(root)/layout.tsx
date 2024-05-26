

import StreamVideoApi from '@/provider/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Vmeet",
  description: "A real time video facing app",
  icons: {
    icon: '/icons/logo1.svg'
  }
};


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (

    <main>
      <StreamVideoApi>
      {children}
      </StreamVideoApi>
  
        </main>
  )
}

export default RootLayout
