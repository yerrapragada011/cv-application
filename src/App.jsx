import { useState } from 'react'

import General from './components/General'
import './styles/App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [submittedFirstName, setSubmittedFirstName] = useState('')
  const [submittedLastName, setSubmittedLastName] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState('')

  const [submitted, setSubmmited] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmmited(true)
    setIsEditing(false)

    setSubmittedFirstName(firstName)
    setSubmittedLastName(lastName)
    setSubmittedEmail(email)
    setSubmittedPhoneNumber(phoneNumber)

    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
  }

  const handleEdit = () => {
    setIsEditing(true)
    setFirstName(submittedFirstName)
    setLastName(submittedLastName)
    setEmail(submittedEmail)
    setPhoneNumber(submittedPhoneNumber)
  }

  return (
    <>
      {!submitted || isEditing ? (
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
          <div className='submit-button'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <h1>Personal Information</h1>
          <p>First Name: {submittedFirstName}</p>
          <p>Last Name: {submittedLastName}</p>
          <p>Email: {submittedEmail}</p>
          <p>Phone Number: {submittedPhoneNumber}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </>
  )
}

export default App
