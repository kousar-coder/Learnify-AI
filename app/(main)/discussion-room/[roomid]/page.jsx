"use client"
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { coachingExpert } from '@/services/Options';
import { UserButton } from '@stackframe/stack';
import { useQuery } from 'convex/react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function DiscussionRoom() {
    const {roomid}=useParams();
    const DiscussionRoomData=useQuery(api.DiscussionRoom.GetDiscussionRoom,{id:roomid});
    console.log(DiscussionRoomData);
    const [expert,setExpert]=useState();

    useEffect(()=>{
        if(DiscussionRoomData){
            const Expert=coachingExpert.find(item=>item.name==DiscussionRoomData.expertName);
            console.log(Expert);
            setExpert(Expert);
        }
    },[DiscussionRoomData])

  return (
    <div className='-mt-12'>
        <h2 className='text-lg font-bold'>{DiscussionRoomData?.coachingOptions}</h2>
        <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            
            <div className='lg:col-span-2'>
            <div className='h-[60vh] bg-secondary border rounded-4xl
            flex flex-col items-center justify-center relative
            '>
                <Image src={expert?.avatar || "/default-avatar.png"} alt='Avatar' width={200} height={200}
                className='h-[80px] w-[80px] rounded-full object-cover animate-pulse'
                />
                <h2 className='text-gray-500'>{expert?.name}</h2>
                <div className='p-5 bg-gray-200 px-10 rounded-lg absolute bottom-10 right-10'>
                    <UserButton/>
                </div>
            </div>
            <div className='mt-5 flex items-center justify-center'>
                <Button>
                    Connect
                </Button>
            </div>
            </div>
             <div>
            <div className='h-[60vh] bg-secondary border rounded-4xl
            flex flex-col items-center justify-center relative
            '>
                <h2>Chat Section</h2>
            </div>
            <h2 className='mt-4 text-grey-400 text-sm'>
                At the end of youe conversation we will automatically generate feedback/notes from your conversation
            </h2>
             </div>
        </div>
    </div>
  )
}

export default DiscussionRoom