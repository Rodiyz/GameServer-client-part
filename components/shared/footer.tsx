import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('bg-slate-800', className)}>
      <div className='flex items-center justify-between py-4 px-10'>
        <h1 className='text-white'>hhhh</h1>
      </div>
    </footer>
  );
};