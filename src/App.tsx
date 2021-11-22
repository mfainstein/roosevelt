import React, { ReactElement } from 'react';
import './App.css';
import Board from './plan/Board';
import { createTheme, ThemeProvider, TypographyVariantsOptions } from '@mui/material';
import { Header } from './Header';

export const App:React.FC = ():ReactElement => {
    const rooseveltTheme = createTheme({

    });

  return (
      <ThemeProvider theme={rooseveltTheme}>
          <div className="App">
              <div className="App-header">
                  <Header/>
              </div>
              <div className="App-board">
                  <Board/>
              </div>
          </div>
      </ThemeProvider>
  );
}

export default App;
