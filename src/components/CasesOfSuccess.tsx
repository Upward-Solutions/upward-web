import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image:
      'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/651ed6df5f1452816829d52f_BlogHeader_17-best-ui-ux-design-tools-2400x1260.jpg',
    name: 'Estelarte',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget netus ut tellus rutrum nunc adipiscing lacus at orci.',
  },
  {
    image:
      'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/651ed6df5f1452816829d52f_BlogHeader_17-best-ui-ux-design-tools-2400x1260.jpg',
    name: 'Prolantec',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget netus ut tellus rutrum nunc adipiscing lacus at orci.',
  },
  {
    image:
      'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/651ed6df5f1452816829d52f_BlogHeader_17-best-ui-ux-design-tools-2400x1260.jpg',
    name: 'Taktika',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget netus ut tellus rutrum nunc adipiscing lacus at orci.',
  },
  {
    image:
      'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/651ed6df5f1452816829d52f_BlogHeader_17-best-ui-ux-design-tools-2400x1260.jpg',
    name: 'B&C Asset Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget netus ut tellus rutrum nunc adipiscing lacus at orci.',
  },
];

const CasesOfSuccess: React.FunctionComponent = () => {
  return (
    <div className='grid gap-5 grid-cols-1 tablet:grid-cols-2'>
      {projects.map((projectCard, index) => (
        <ProjectCard
          name={projectCard.name}
          image={projectCard.image}
          description={projectCard.description}
          key={`${projectCard.name}-${index}`}
        />
      ))}
    </div>
  );
};

export default CasesOfSuccess;
