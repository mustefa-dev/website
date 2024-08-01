import React from 'react'

type Props = {}


function HeroComponent({}: Props) {
  // connect to backend
  const hex = '#efefef'

  return (
  <div className='h-[100vh] bg-fixed bg-center bg-cover' style={{backgroundImage: "url('https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg')"}}>
    <div className='flex flex-col justify-center items-center mt-10 h-full'
     style={{background:`${hex}70`}}> 
        <h1 className='text-5xl font-bold text-center'>Welcome to our website</h1>
        <p className='text-xl'>We are a team of professionals</p>
        <button className=' bg-black text-white p-3 px-7 rounded-md my-2'>Contact</button>
    </div>
</div>
  )
}

export default HeroComponent