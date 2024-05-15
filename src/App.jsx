import { useState } from 'react'

import General from './components/General'
import Education from './components/Education'
import './styles/App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [schoolName, setSchoolName] = useState('')
  const [titleOfStudy, setTitleOfStudy] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')

  const [submittedFirstName, setSubmittedFirstName] = useState('')
  const [submittedLastName, setSubmittedLastName] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState('')

  const [submittedSchoolName, setSubmittedSchoolName] = useState('')
  const [submittedTitleOfStudy, setSubmittedTitleOfStudy] = useState('')
  const [submittedDateOfStudy, setSubmittedDateOfStudy] = useState('')

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

    setSubmittedSchoolName(schoolName)
    setSubmittedTitleOfStudy(titleOfStudy)
    setSubmittedDateOfStudy(dateOfStudy)

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

    setSchoolName(submittedSchoolName)
    setTitleOfStudy(submittedTitleOfStudy)
    setDateOfStudy(submittedDateOfStudy)
  }

  return (
    <>
      {!submitted || isEditing ? (
        <>
          <div className='cv-title'>
            <h1>CV Application</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
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
            <h2>Education Information</h2>
            <Education
              schoolName={schoolName}
              setSchoolName={setSchoolName}
              titleOfStudy={titleOfStudy}
              setTitleOfStudy={setTitleOfStudy}
              dateOfStudy={dateOfStudy}
              setDateOfStudy={setDateOfStudy}
            />
            <div className='submit-button'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className='submitted-info'>
            <h1>Personal Information</h1>
            <p>First Name: {submittedFirstName}</p>
            <p>Last Name: {submittedLastName}</p>
            <p>Email: {submittedEmail}</p>
            <p>Phone Number: {submittedPhoneNumber}</p>
            <h1>Education Information</h1>
            <p>School Name: {submittedSchoolName}</p>
            <p>Title of Study: {submittedTitleOfStudy}</p>
            <p>Date of Study: {submittedDateOfStudy}</p>
          </div>
          <div className='edit-button'>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </>
      )}
    </>
  )
}

export default App
