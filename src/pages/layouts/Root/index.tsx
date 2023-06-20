import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
      <div className="flex-grow-[1] mx-auto">
        <Outlet />
      </div>
  );
};

export default RootLayout;
