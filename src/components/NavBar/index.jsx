import React from 'react'
import './styles.css'


const NavBar = () => {
  return (
    <main>
        <header>
            <nav>
                <ul>
                    <li className='logo'><a href="/"><img src="../../assets/superman_logo.png" alt="superman logo" /></a></li>
                    <li className='searchBar'><input type="search" /></li>
                </ul>
            </nav>
        </header>
    </main>
  )
}

export default NavBar
