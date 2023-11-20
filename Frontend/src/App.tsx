import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import RoutesComponent from './routes/PublicRoutes.routes';
import Background from './components/Background/Background';

function App() {
  const helmetContext = {};

  return (
    <>
          <HelmetProvider context={helmetContext}>
            <Background />
            <RoutesComponent />
          </HelmetProvider> 
    </>
  )
}

export default App
