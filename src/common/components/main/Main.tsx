import * as React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<MainProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Main;
