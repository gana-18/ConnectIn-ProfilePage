'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import copy from "clipboard-copy"
import { useState } from "react"
import {useSession} from 'next-auth/react'
function ProfileComponent({User}) {
  const {data:session}=useSession();
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const router = useRouter()
    const handleRedirect=()=>{
        router.push(`/profile/edit/${User._id}`)
    }

    const handleCopyLink = () => {
        const profileUrl = window.location.href;
        copy(profileUrl);
        setTooltipVisible(true);
        setTimeout(() => {
          setTooltipVisible(false);
        }, 2000);
      };

  return (
    <div className='profile'>
        <div className='user-photo'>
            <Image 
              src={User.image} alt='user' width={120} height={120} style={{borderRadius:'50%'}} 
            />
        </div>
        <div className='user-intro'>
                <div>
                    <h2>{User.name}</h2>
                </div>
                <div>
                    <p>{User.bio}</p>
                </div>
                <div>
                    <p>{User.college}</p>
                </div>
                <div>
                    <p>{User.location}</p>
                </div>
        </div>
        <div className="edit-share">
          {session?.user.id===User._id?<div className="edit">
            <button onClick={handleRedirect}><Image src='/icons8-edit-16.png' width={24} height={24} alt="edit" style={{marginRight:'5px',padding:'3px'}}/>Edit Profile</button>
        </div>:null}
        <div className="edit">
          <button onClick={handleCopyLink}>
            <Image src='/icons8-share-16.png' width={24} height={24} alt="share" style={{ marginRight: '5px', padding: '3px' }} />Share Profile
          </button>
          {tooltipVisible && <span className="tooltip">Url Copied!</span>}
        </div>
        </div>
        
    </div>
  )
}

export default ProfileComponent