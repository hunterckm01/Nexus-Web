import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

  function ScrollToTop(){
       const  navigate = useLocation();

        useEffect(()=>{
            window.scrollTo(0,0);
        },[navigate])
        return null ;
    }

export default ScrollToTop ;
