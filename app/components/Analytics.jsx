import React from 'react'
import Card from './common/Card'
import Image from 'next/image'
function Analytics() {
  return (
    <Card>
        <div className='analytics'>
            <h3>Analytics</h3>
            <div className='private'>
            <Image style={{marginRight:'5px'}} src='/icons8-eye-24.png' width={16} height={16} alt='analytics' /><span>Private to you</span>
            </div>
            <div className='analytics1'>
                <Image style={{marginRight:'5px'}} src='/icons8-group-16.png' width={16} height={16} alt='analytics' /><span>10 profile views</span>
                <Image style={{marginRight:'5px',marginLeft:'20px'}} src='/icons8-search-16.png' width={16} height={16} alt='analytics' /><span> 10 search appearances</span>
            </div>
        </div>
        <hr style={{backgroundColor:'grey',borderWidth:'0.2',opacity:'0.3'}}/>
        <div className='showall'>
            <p>Show all analytics</p>
            <Image style={{display:'flex',marginLeft:'5px'}} src="/icons8-arrow-24.png" width={16} height={16}/>
        </div>
    </Card>
  )
}

export default Analytics