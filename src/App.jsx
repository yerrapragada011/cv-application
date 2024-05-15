import { useState } from 'react'

import General from './components/General'
import './styles/App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [submitted, setSubmmited] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmmited(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <General
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <button type='submit'>Submit</button>
      </form>
      {submitted && (
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
      )}
    </>
  )
}

export default App
