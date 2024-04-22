import React from 'react'
import Card from '../Components/Card'
import DentistList from '../Components/DentistList'
import { useDentistState } from '../Components/utils/DentistContext'

const Home = () => {
  const { state } = useDentistState()
  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistList.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
          </div>
    </main>
  )
}

export default Home