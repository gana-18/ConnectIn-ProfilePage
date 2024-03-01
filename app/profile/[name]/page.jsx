'use client'
import axios from "axios"
import Header from "@/app/components/Header";
import ProfileComponent from "@/app/components/ProfileComponent";
import LoadingPage from "@/app/loading";
import { useState,useEffect } from "react";
import Analytics from "@/app/components/Analytics";
import Activity from "@/app/components/Activity";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Head from "next/head";
function page({params:{name}}){
  const [userData,setUserData]=useState({});
  const [loading, setLoading] = useState(true);
  console.log(process.env.URL)
  useEffect(()=>{
    const getUser=async()=>{
      const response=await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/index?name=${name}`,{cache:'force-cache'});
      setUserData(response.data);
      setLoading(false);
    }
    getUser();
  },[name])
  
  return (
    <div>
      <Head>
        <title>ConnectIn-Profile</title>
        <meta name="description" content="Create a profile alike LinkedIn on ConnectIn" />
        <meta name="keywords" content="ConnectIn, LinkedIn, Profile, Social Media, Next.js" />
      </Head>
      <Header data={userData} />
      {loading?<LoadingPage/>:(
        <div className="profile-page">
           <ProfileComponent User={userData} />
            <Analytics />
            <Activity />
            <Experience user={userData}/>
            <Education user={userData}/>
            <Skills user={userData}/>
        </div>
      )}
    </div>
    );
}

export default page