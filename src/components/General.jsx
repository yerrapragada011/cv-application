import '../styles/General.css'

function General({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber
}) {
  return (
    <>
      <div className='general'>
        <label>
          First Name:{' '}
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:{' '}
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:{' '}
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone Number:{' '}
          <input
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
    </>
  )
}

export default General
