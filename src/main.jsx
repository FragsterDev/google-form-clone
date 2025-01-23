import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Name from './components/name.jsx'
// import Address from './components/Address.jsx'
// import Email from './components/email.jsx'
// import Phone from './components/phone.jsx'
// import Comments from './components/comments.jsx'
// import Footer from './components/footer.jsx'
// import Top from './components/top.jsx'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
