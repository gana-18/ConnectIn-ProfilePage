'use client'
import {useSession,signIn,signOut} from 'next-auth/react'
import { useRouter } from "next/navigation";
import GoogleButton from 'react-google-button'
export default function Home() {
  const router=useRouter();
  const {data:session}=useSession();
  return (
    <>
      {session?(router.push(`/profile/${session.user.name.toLowerCase().replace(/\s+/g, '-')}`)):(
        <div className='home'>
          <div className='home1'>
          <h3>Make a Profile on ConnectIn🚀</h3>
           <GoogleButton
            type='dark'
            onClick={()=>signIn('google')}
            />
          </div>
        </div>
      )}
    </>
  );
}
