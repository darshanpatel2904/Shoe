import Link from 'next/link';
import React from 'react';
import style from './navbar.module.scss';

function MainNavigation() {
    const [isActive, setIsActive] = React.useState(0);
    function toggle(){
        setIsActive(!isActive);
    }
  return (
    <>
        <header className={style.mainheader}>
            <a className={style.logo}>Shoe<span className={style.forCss}>Brand</span></a>
            <nav className={style.mainnavbar} id={isActive ? "opennav" : ""}>
                <svg className={style.close} onClick ={toggle} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 17.390625 15.429688 L 15.429688 17.390625 L 12 13.960938 L 8.570313 17.390625 L 6.609375 15.429688 L 10.039063 12 L 6.609375 8.570313 L 8.570313 6.609375 L 12 10.039063 L 15.429688 6.609375 L 17.390625 8.570313 L 13.960938 12 Z"/></svg>
                <ul className={style.navlist}>
                    <li><Link href='/' className={style.navlink}>Home</Link></li>
                    <li><Link href='/newarrivals' className={style.navlink}>New Arrivals</Link></li>
                    <li><Link href='/contact'className={style.navlink}>Contact</Link></li>
                </ul>
            </nav>
            <svg className={style.menu} onClick={toggle} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"/></svg>
        
        </header>
    </>
  );
}

export default MainNavigation;