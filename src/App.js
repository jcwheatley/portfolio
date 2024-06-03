import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Header from './components/Header';

const portfolioTheme = createTheme({
  palette: {
    // mode: 'dark',
    // background: {
    //   default: "#0A192F"
    // },
    lightBlue: {
      main: "#A3C6C4"
    }
  },
});


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={portfolioTheme}>
        <CssBaseline/>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
