import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  {
    name: 'Daro',
  },
  {
    name: 'Juan',
  },
  {
    name: 'Marian',
  },
  {
    name: 'Lucas',
  },
];

const OurTeam: React.FunctionComponent = () => {
  return (
    <div className='grid gap-5 grid-cols-2 tablet:grid-cols-4'>
      {teamMembers.map((member, index) => (
        <TeamCard name={member.name} key={`${member.name}-${index}`}></TeamCard>
      ))}
    </div>
  );
};

export default OurTeam;
