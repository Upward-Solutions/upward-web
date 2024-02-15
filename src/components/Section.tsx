import React from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
}

const Section: React.FunctionComponent<Props> = ({ children, id }) => {
  return (
    <section
      className='even:bg-background-100 flex flex-col gap-8 p-4 tablet:p-16'
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
