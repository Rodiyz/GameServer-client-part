import React from 'react';
import { Container } from '../shared/container';
import { Title } from '../shared/title';

interface Props {
  className?: string;
}

export const First: React.FC<Props> = ({ className }) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-26 border-b border-black shadow-lg">
      <div className="absolute inset-0 -z-10 size-full bg-cover bg-center object-fill sepia-80" style={{ backgroundImage: "url('/image/main.jpg')" }}>
      </div>
      <div className="absolute inset-0 -z-10 bg-black opacity-40"></div> 
      <Container className=''>
        <div className="text-center">
        <Title text="Добро пожаловать!" size="lg" className="font-bold mx-auto pt-25 text-white" />
        <Title text="Вас приветствует команда сервера Arkand!" size="xl" className="font-bold text-white" />
        </div>
      </Container>
    </div>
  );
};