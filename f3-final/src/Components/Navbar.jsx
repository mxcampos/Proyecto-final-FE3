import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistState } from "./utils/DentistContext";

const Navbar = () => {

  const { state, ChangeDark, ChangeLight } = useDentistState()

  const chageTheme = () => {
    {
      if (state.theme == 'dark') {
        ChangeLight()
      } else {
        ChangeDark()
      }
    }
  }

  return (
    <nav className={state.theme}>

         <div className='imgNavr'>
        <img src="./public/images/iOdonto.jpg" alt="" width={220} />
      </div>

      <div className='linksHome'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <Link to='/favs'><h4>Favoritos</h4></Link>
      </div>

      <div className='buttonNav'>
        <button className='buttonNav' onClick={chageTheme}> {state.theme ? '☀️' : '🌒'} </button>
      </div>
    </nav>
  )
}


export default Navbar