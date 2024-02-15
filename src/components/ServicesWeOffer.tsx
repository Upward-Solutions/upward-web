import React from 'react';
import BulletPointsCard from './BulletPointsCard';

const services = [
  {
    title: 'Automatización',
    bulletPoints: [
      'Desarrollamos aplicaciones a tu medida para automatizar tus procesos de negocio. Incluyendo tanto flujos críticos de gestión como la interacción con tus clientes. Decile adiós a tus viejos excels.',
    ],
  },
  {
    title: 'Modernización',
    bulletPoints: [
      'Si ya tenés alguna aplicación funcionando que fue hecha hace mucho tiempo y te resulta costoso agregarle nuevas funcionalidades, anda lenta, tiene muchos errores o perdiste contacto con quien te la desarrolló, nosotros la podemos modernizar.',
    ],
  },
  {
    title: 'Consultoría',
    bulletPoints: [
      'Si necesitás contratar personal especializado en el mundo digital te ayudamos a elegir el mejor perfil que necesita tu negocio.',
      'Ayudamos a tu equipo de desarrollo a modernizarse y adoptar las mejores prácticas de la industria.',
      'Trabajamos con vos para identificar oportunidades de negocio, diseño de prototipos, estudios de factibilidad técnica y análisis de métricas comerciales.',
    ],
  },
];

const ServicesWeOffer: React.FunctionComponent = () => {
  return (
    <div className='grid gap-5 grid-cols-1 desktop:grid-cols-3'>
      {services.map((serviceCard, index) => (
        <BulletPointsCard
          background='bg-background-100'
          bulletPoints={serviceCard.bulletPoints}
          title={serviceCard.title}
          key={`${serviceCard.title}-${index}`}
        />
      ))}
    </div>
  );
};

export default ServicesWeOffer;
