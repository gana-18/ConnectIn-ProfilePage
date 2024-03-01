import React from 'react'
import Image from 'next/image'
import Card from './common/Card'
function Skills({user}) {
  return (
    <Card>
    <div className='analytics'>
        <h2>Skills</h2>
        <div className='analytics1'>
            <h4>{user.skills}</h4>
        </div>
    </div>
    <hr style={{backgroundColor:'grey',borderWidth:'0.2',opacity:'0.3'}}/>
    <div className='showall'>
        <p>Show all Skills</p>
        <Image style={{display:'flex',marginLeft:'5px'}} src="/icons8-arrow-24.png" width={16} height={16}/>
    </div>
</Card>
  )
}

export default Skills