'use client'

import React from 'react';
import { Title } from '../shared/title';
import { Rule } from './ruleslist';
import { cn } from '@/lib/utils';
import { Container } from '../shared/container';


interface Props {
  rules: Rule[];
}


export const Rulespage: React.FC<Props> = ({ rules }) => {
  return (
    <Container className="mt-65 pb-5">
    <div className="relative">
        {rules.map((rule) => (
        <div key={rule.id}  className="mb-1">
        <div id={rule.id} className="scroll-mt-63">
        <Title text={rule.title} size="sm" className="font-medium pt-5 pb-3 snap-center" />
        </div>
        <ul className="list-disc list-outside flex flex-col gap-1 marker:text-red-500">
            {rule.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
        </ul>
      </div>
      ))}
    </div>
    </Container>
  );
};