import React from 'react'

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (<nav className='flex justify-between bg-cyan-300 '>
            <div id="logo" className='mx-3'><a href="https://github.com/harshbuttru3" target='_blank' rel='noreferrer'>Github</a></div>
            <div id="links" className='' >
                <ul className=' flex'>
                    <li className='mx-5'><a href="https://harshbuttru3.github.io/portfolio" target='_blank' rel="noreferrer">My Portfolio</a></li>
                    <li className='mx-5'><a href="https://harshbuttru3.github.io/note_taking_app"  target='_blank' rel="noreferrer">Note App</a></li>
                    <li className='mx-5'><a href="https://harshbuttru3.github.io/weather"  target='_blank' rel="noreferrer">Weather App</a></li>
                </ul>
            </div>
        </nav>);
    }
}
 
export default Navbar;