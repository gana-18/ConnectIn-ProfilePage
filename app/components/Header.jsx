'use client'
import { signOut } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation";
function Header({data}) {
    console.log(data)
  return (
    <div className='header'>
        <div className="item1">
            <div className="logo">
                <Image src="/icons8-linkedin-48.png" alt="logo" width={48} height={48} priority={true} />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="item2">
            <div className="home">
                <Image src="/icons8-home-48.png" alt="home" width={32} height={32} />
            </div>
            <div className="network">
                <Image src="/icons8-network-48.png" alt="network" width={32} height={32} />
            </div>
            <div className="jobs">
                <Image src="/icons8-jobs-48.png" alt="jobs" width={32} height={32} />
            </div>
            <div className="messaging">
                <Image src="/icons8-messaging-48.png" alt="messaging" width={32} height={32} />
            </div>
            <div className="notifications">
                <Image src="/icons8-notifications-48.png" alt="notifications" width={32} height={32} />
            </div>
            <div className="me">
                <Image style={{borderRadius:'50%'}} src={data?.image} alt="me" width={48} height={48} loading="eager" />
            </div>
            <div className="edit">
                <button onClick={()=>(signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}` }))}>Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default Header