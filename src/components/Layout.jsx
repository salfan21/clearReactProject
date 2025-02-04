import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import ThemeContext from '../HOC/Theme';
import '../styles/style.css'

const Layout = () => {

    // const [theme, setTheme] = useState('light')
    // const toggleTheme = () =>{
    //     theme === 'light' ? setTheme('dark') : setTheme('light')
    // }

    return (
        <div className={"App "}>
            <div className={"main "} >
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;