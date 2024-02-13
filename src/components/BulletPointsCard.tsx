import React from 'react';

interface Props {
  title: string;
  bulletPoints: string[];
  background: string;
}

const BulletPointsCard: React.FunctionComponent<Props> = ({
  title,
  bulletPoints,
  background,
}) => {
  return (
    <div className={`flex flex-col gap-5 p-6 tablet:p-10 ${background}`}>
      {title}
      <ul className='list-disc list-outside ml-6 tablet:ml-7'>
        {bulletPoints.map((bulletPoint, index) => (
          <li key={index}>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPointsCard;
