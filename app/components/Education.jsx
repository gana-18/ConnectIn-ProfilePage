import React from 'react'
import Image from 'next/image'
import Card from './common/Card'

function Education({user}) {
  return (
    <Card>
    <div className='analytics'>
        <h2>Education</h2>
        <div className='analytics1'>
            <h4>{user.college} - </h4>
            <p>{user.branch}</p>
        </div>
        <p>{user.cgpa} CGPA</p>
        <p>{user.location}</p>
    </div>
    <hr style={{backgroundColor:'grey',borderWidth:'0.2',opacity:'0.3'}}/>
    <div className='showall'>
        <p>Show all Experiences</p>
        <Image style={{display:'flex',marginLeft:'5px'}} src="/icons8-arrow-24.png" width={16} height={16}/>
    </div>
</Card>
  )
}

export default Education