import React from 'react'
import Image from 'next/image'
import Card from './common/Card'
function Activity() {
  return (
    <Card>
    <div className='analytics'>
        <h3>Activity</h3>
        <div className='private'>
        <Image style={{marginRight:'5px'}} src='/icons8-group-16.png' width={16} height={16} alt='analytics' /><span>100 Followers</span>
        </div>
        <div className='analytics1'>
            <h4>You haven’t posted yet</h4>
        </div>
        <p>Posts you share will be displayed here.</p>
    </div>
    <hr style={{backgroundColor:'grey',borderWidth:'0.2',opacity:'0.3'}}/>
    <div className='showall'>
        <p>Show all activity</p>
        <Image style={{display:'flex',marginLeft:'5px'}} src="/icons8-arrow-24.png" width={16} height={16}/>
    </div>
</Card>
  )
}

export default Activity