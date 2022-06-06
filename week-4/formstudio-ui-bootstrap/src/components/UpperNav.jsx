import '../styles/UpperNav.css'
import phLogo from '../media/images/phLogo.png';
import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import { CgMenuGridR } from 'react-icons/cg'
import clientDetails from '../resources/client-details.json'

function UpperNav() {

    const [isNotification, setIsNotification] = React.useState(false);

    return (
        <div>
            <nav className="navbar navbar-dark bg-tertiary navbar-expand-lg f-nav">

                {/*<!-- Brand -->*/}

                <div className="navbar-collapse">
                    <a className="navbar-brand bg-primary-dark" href="#">
                        <img src={phLogo} alt="phenom logo" width="30" height="30" />
                    </a>
                    <a className='navbar-brand' href="#">Form Studio</a>
                    <span className='navbar-brand'>|</span>
                    <a className='navbar-brand' href="#">{clientDetails.name} - {clientDetails.region}</a>
                </div>

                <div className="navbar-collapse justify-content-end">
                    <ul className="navbar-nav">

                        <li className='nav-item'>
                            <a className='nav-link' href="#">
                                <CgMenuGridR size={22} color="white"/>
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {
                                    isNotification ? <VscBellDot size={22} color="white" onClick={()=> setIsNotification(!isNotification)}/> : <VscBell size={22} color="white" onClick={()=> setIsNotification(!isNotification)}/>
                                }
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <BsPersonCircle  color='white' size={22}/>
                            </a>
                        </li>


                    </ul>
                </div>


            </nav>
        </div>
    )
}

export default UpperNav