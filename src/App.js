import MainPage from './components/mainPage/MainPage'
import {Route, BrowserRouter} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import MainWindow from './components/trainingPage/mainWindow/MainWindow'
import { AnimatePresence } from 'framer-motion'
import classes from './App.module.scss'


function App() {
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className={classes.App}>
      <AnimatePresence>
            <Route 
                path="/"
                exact
                component={MainPage}
                key={1}
            />
            <Route 
                path="/navigation"
                exact
                component={Navigation}
                key={2}
            />
            <Route 
                path="/navigation/training"
                exact
                component={MainWindow}
                key={3}
            />
      </AnimatePresence>
    </div>
  </BrowserRouter>
  );
}

export default App;
