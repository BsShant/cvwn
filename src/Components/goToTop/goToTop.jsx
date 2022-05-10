
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import React,{useEffect, useState} from "react";

export default function GoTOTop(){
  let routePath = useLocation()

const [location, setLocation] = useState()

  const scrollTop=()=>{

    window.scrollTo(0,0);

  }
  useEffect(()=>{

    scrollTop()
  },[routePath])
    return null;
}