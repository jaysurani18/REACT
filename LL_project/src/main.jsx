import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import App from '/contactbook.jsx '
// import App from '/contactlist.jsx '
import ContactList from './contactlist.jsx'
createRoot(document.getElementById('root')).render(
  
    // <App />
    <ContactList />
)   
