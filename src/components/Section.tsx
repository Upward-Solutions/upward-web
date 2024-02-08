import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Section: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <section className='even:bg-background-100 flex flex-col gap-8 p-8 tablet:p-16'>
      {children}
    </section>
  );
};

export default Section;
