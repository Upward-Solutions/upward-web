import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PrimaryButton: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <button className='flex w-fit gap-2 items-center bg-primary text-base-label py-3 px-5 text-dark-background font-medium'>
      {children}
    </button>
  );
};

export default PrimaryButton;
