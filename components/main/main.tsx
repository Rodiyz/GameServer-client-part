import React from 'react';
import { Container } from '../shared/container';
import { Title } from '../shared/title';
import { First } from './first';
import { Section } from './section';


interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <>
    <First className='' />
    <Section />
    </>

    
  );
};

