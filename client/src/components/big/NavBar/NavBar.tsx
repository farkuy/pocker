import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/boards'}>Столы</Link>
            <Link to={'/tournaments'}>Турниры</Link>
            <Link to={'/profile'}>Профиль</Link>
        </div>
    );
};

export default NavBar;