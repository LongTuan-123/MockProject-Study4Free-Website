import { Outlet } from 'react-router-dom';


const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>

      <div className="flex-grow-[1]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
