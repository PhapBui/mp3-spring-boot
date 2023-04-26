import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
// import UIMenu from './common/components/UIMenu';
// import { useState } from 'react';
function App() {
  // const [isShow, setIsShow] = useState<Boolean>(false);
  // const [top, setTop] = useState<number>(0);
  // const [left, setLeft] = useState<number>(0);

  // const handleOnclickMenu = (evt: React.MouseEvent<HTMLImageElement>) => {
  //   evt.preventDefault();
  //   console.log(evt.currentTarget);
  //   setIsShow(true);
  //   setTop(evt.clientY);
  //   setLeft(evt.clientX);
  // };
  return (
    // <div onContextMenu={handleOnclickMenu}>
    <RouterProvider router={router} />
    // {/* <UIMenu isShow={isShow} top={top} left={left} /> */}
    // </div>
  );
}

export default App;
