import '../styles/Home.css'
import React from 'react'
import { BiTachometer } from 'react-icons/bi'
import { CgFileDocument, CgLoadbarDoc, CgCodeSlash } from 'react-icons/cg'
import { BsGearWide } from 'react-icons/bs'

function SideNav() {
    return (
        <div className='side-nav'>
            <nav className="navbar navbar-dark bg-dark f-nav  nav-col">
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <BiTachometer size={30} color="white" />
                        
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <CgFileDocument size={30} color="white" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <CgLoadbarDoc size={30} color="white" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <CgCodeSlash size={30} color="white" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <BsGearWide size={30} color="white" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav