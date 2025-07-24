"use client";
import { Button } from '@/components/ui/button';
import { ExpertsList } from '@/services/Options';
import { useUser } from '@stackframe/stack';
import React from 'react';
import Image from 'next/image'; // ✅ Import Image
import { BlurFade } from '@/components/magicui/blur-fade';

function FeatureAssistants() {
  const user = useUser();

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-medium text-gray-500">My Workspace</h2>
          <h2 className="text-3xl font-bold">
            Welcome back, {user?.displayName}
          </h2>
        </div>
        <Button>Profile</Button>
      </div>

      {/* Experts List Section */}
      <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-10 mt-10'>
        {ExpertsList.map((option, index) => (
            <BlurFade key={option.icon} delay={0.25+index*0.05} inView>
          <div key={index} className='p-3 bg-secondary rounded-3xl flex flex-col justify-center items-center'>
            <Image
              src={option.icon}
              alt={option.name}
              width={70}
              height={70}
              className="h-[70px] w-[70px] hover:rotate-12 cursor-pointer transition-all"
            />
            <h2 className='mt-2'>{option.name}</h2>
          </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default FeatureAssistants;
