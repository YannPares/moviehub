import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import { AuthProvider } from './hooks/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>

    <AuthProvider>
      
        <App />
      
    </AuthProvider>

  </BrowserRouter>
)
