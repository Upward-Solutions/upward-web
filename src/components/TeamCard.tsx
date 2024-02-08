import React from 'react';

interface Props {
  name: string;
}

const TeamCard: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='aspect-square relative overflow-hidden'>
        <img
          className='absolute'
          src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default TeamCard;
