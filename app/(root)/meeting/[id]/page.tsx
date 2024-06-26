// Video Streaming setup

'use client'

import Loader from '@/components/Loader';
import VmeetRoom from '@/components/VmeetRoom';
import VmeetSetup from '@/components/VmeetSetup';
import { useGetCallById } from '@/hooks/useGetCallByID';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

const Meeting = ({ params: { id } }: { params: { id: string } }) => {

  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)

  const { call, isCallLoading } = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <VmeetSetup setIsSetupComplete = {setIsSetupComplete}/>
          ): (  
            <VmeetRoom />
          )}
          </StreamTheme>
      </StreamCall>

    </main>
  )
}

export default Meeting