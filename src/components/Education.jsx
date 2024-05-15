import '../styles/Education.css'

function Education({
  schoolName,
  setSchoolName,
  titleOfStudy,
  setTitleOfStudy,
  dateOfStudy,
  setDateOfStudy
}) {
  return (
    <>
      <div className='education'>
        <label>
          School Name:{' '}
          <input
            type='text'
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <label>
          Title of Study:{' '}
          <input
            type='text'
            value={titleOfStudy}
            onChange={(e) => setTitleOfStudy(e.target.value)}
          />
        </label>
        <label>
          Date of Study:{' '}
          <input
            type='date'
            value={dateOfStudy}
            onChange={(e) => setDateOfStudy(e.target.value)}
          />
        </label>
      </div>
    </>
  )
}

export default Education
