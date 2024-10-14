import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Header from './components/Header';

const portfolioTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'sans-serif', 'Gudea'
    ]
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768, // Custom breakpoint for 768px
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // mode: 'dark',
    // background: {
    //   default: "#0A192F"
    // },
    slateBlue: {
      main: "#6C7A89"
    }
  },
});


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={portfolioTheme}>
        <CssBaseline/>
        <BrowserRouter>
          {/* <Header/> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
