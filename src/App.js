import React from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from './components/MainTheme';



import Header from "./components/Header/Header"
import ItemListContainer from "./components/MainApp/ItemListContainer";
import { CssBaseline } from "@mui/material";


export default function App() {


  return (
    <>
      <ThemeProvider theme={MainTheme}>
      <CssBaseline>

        <Header/>
        <ItemListContainer/>
        
        </CssBaseline>
      </ThemeProvider>

    </>
  );
}
