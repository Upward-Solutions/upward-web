import React from 'react';
import { type ValueCard } from '../models/ValueCard';
import BulletPointsCard from './BulletPointsCard';

const valuesCards: ValueCard[] = [
  {
    title: 'Values',
    bulletPoints: [
      'Creemos en la inclusión y la diversidad como motores de la resolución de problemas.',
      'Entendemos a la capacitación como el mejor aliado para gener la autonomía de nuestros clientes.',
      'Trabajamos en equipo para jerarquizar nuestros servicios.',
      'Estamos en mejora continua.',
      'Llevamos la agilidad como bandera.',
    ],
  },
  {
    title: 'Practices',
    bulletPoints: [
      'TDD.',
      'Agilidad.',
      'No estimates.',
      'Excelencia técnica.',
      'Partnership.',
    ],
  },
];

const OurValues: React.FunctionComponent = () => {
  return (
    <div className='grid gap-5 grid-cols-1 tablet:grid-cols-2'>
      {valuesCards.map((valueCard, index) => (
        <BulletPointsCard
          title={valueCard.title}
          bulletPoints={valueCard.bulletPoints}
          background='bg-background'
          key={`${valueCard.title}-${index}`}
        />
      ))}
    </div>
  );
};

export default OurValues;
