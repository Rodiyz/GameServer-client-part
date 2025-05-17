'use client'

import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import { Rule } from './ruleslist';
import { Container } from '../shared/container';
import { Title } from '../shared/title';

interface Props {
    rules: Rule[];
    className?: string;
    activeRuleId: string;
    onMenuClick: (id: string) => void;
}

export const Categories: React.FC<Props> = ({ rules, className, activeRuleId, onMenuClick }) => {
    return (
        <div className={cn('fixed top-18 w-full bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="pb-5">
                <Title text="Правила сервера" size="md" className="font-bold pb-5" />
            
                <div className='flex items-center justify-between'>
                <div className={cn('inline-flex gap-1 bg-gray-50 p-2 rounded-2xl', className)}>
                    {
                        rules.map((rule) => (
                        <Link key={rule.id} onClick={() => onMenuClick(rule.id)} href={`#${rule.id}`}>
                            <div className={cn('flex items-center font-bold h-11 rounded-2xl px-5', activeRuleId === rule.id && 'bg-white shadow-md shadow-gray-200 text-red-600')}>
                                {rule.name}
                            </div>
                        </Link>
                        ))
                    }
                </div>
                </div>
                </Container>
            </div>
    );
};