import React from 'react';
import ArrowRight from './ArrowRight';

interface Props {
  image: string;
  name: string;
  description: string;
}

const ProjectCard: React.FunctionComponent<Props> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='aspect-video relative overflow-hidden'>
        <img className='absolute object-cover h-full' src={image} />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='flex gap-2 items-center'>
          {name}{' '}
          <span>
            <ArrowRight className='size-6' />
          </span>
        </p>
        <p className='text-paragraph'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
