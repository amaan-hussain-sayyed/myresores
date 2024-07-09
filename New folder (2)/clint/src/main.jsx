
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-arqfwucsef846wie.us.auth0.com'
    clientId='0Ifa7BkdG0LJOXOJ2sz77kxKl4jk8CP3'
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
)
