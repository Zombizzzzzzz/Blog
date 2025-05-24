"use client"
import { useContext, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

import React from 'react'

const ThemeProvider = ({children}) => {


  const {theme} = useContext(ThemeContext);
  const[mounted,setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  } ,[])

  if(mounted) {return (

   <div className={theme}>{children}</div> 
 
   
  )}
}

export default ThemeProvider