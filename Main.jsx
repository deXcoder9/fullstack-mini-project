import { Outlet } from 'react-router-dom';

import Navbar from "../shared/navbar/Navbar";

const Main = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default Main;