import React from 'react'
import Image from 'next/image'
import Card from './common/Card'
function Experience({user}) {
    console.log(user)
  return (
    <Card>
        <div className='analytics'>
            <h2>Experience</h2>
            <div className='analytics1'>
                <h4>{user.companyName} - </h4>
                <p>{user.position}</p>
            </div>
            <p>{user.experience} Years</p>
            <p>{user.companyLocation}</p>
            <p>{user.desc}</p>
        </div>
        <hr style={{backgroundColor:'grey',borderWidth:'0.2',opacity:'0.3'}}/>
        <div className='showall'>
            <p>Show all Experiences</p>
            <Image style={{display:'flex',marginLeft:'5px'}} src="/icons8-arrow-24.png" width={16} height={16}/>
        </div>
    </Card>
  )
}

export default Experience