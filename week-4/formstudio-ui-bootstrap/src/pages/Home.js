import React from 'react'
import Forms from '../components/HomeComponents/Forms'
import SideNav from '../components/SideNav'
import UpperNav from '../components/UpperNav'

function Home() {
  return (
    <div className='container-full'>
        <UpperNav/>
        <div class="row">
            <div class="col-1">
                <SideNav/>
            </div>
            <div class="col-9">
                <Forms/>
            </div>
        </div>
    </div>
  )
}

export default Home