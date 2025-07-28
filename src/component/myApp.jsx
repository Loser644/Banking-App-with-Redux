import {Route, Routes, useLocation} from 'react-router-dom';
import PageTransition from '../assets/pageTransition';
import { HomeEl } from './exComponent';
import UserHeaderMenu from '../Page/userCom/headerMenu';
import '../assets/style/baseStyle.css'
import { useEffect } from 'react';
export default function MyApp(params) {
     useEffect(() => {
          const setVH = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
          };
          setVH();
          window.addEventListener('resize', setVH);
          return () => window.removeEventListener('resize', setVH);
        }, []);
  const location = useLocation();
    return(
        <PageTransition location={location} key={location.pathname}  >
            <UserHeaderMenu/>
            <Routes>
                <Route path='/' element={<div className='resultDiv'><HomeEl/></div>} />
            </Routes>
        </PageTransition>
    )
}
