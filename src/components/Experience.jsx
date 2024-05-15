import '../styles/Experience.css'

function Experience({
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  mainResponsibilities,
  setMainResponsibilities,
  dateFrom,
  setDateFrom,
  dateUntil,
  setDateUntil
}) {
  return (
    <>
      <div className='experience'>
        <label>
          Company Name:{' '}
          <input
            type='text'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          Position Title:{' '}
          <input
            type='text'
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
          />
        </label>
        <label>
          Main Responsibilites:{' '}
          <input
            type='text'
            value={mainResponsibilities}
            onChange={(e) => setMainResponsibilities(e.target.value)}
          />
        </label>
        <label>
          Date From:{' '}
          <input
            type='date'
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </label>
        <label>
          Date Until:{' '}
          <input
            type='date'
            value={dateUntil}
            onChange={(e) => setDateUntil(e.target.value)}
          />
        </label>
      </div>
    </>
  )
}

export default Experience
