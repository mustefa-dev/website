import React from 'react'
import useDeviceInfo from '@/hooks/useDeviceInfo'
import Link from 'next/link'
import { Logo } from '@/public/svgs/logo'

function Header() {
  const {isMobile} = useDeviceInfo()
  return (
      <div className={`w-100 h-[70px] fixed top-0 left-0 right-0 z-50 bg-white flex justify-end items-center ${isMobile ? 'px-4' : 'px-16'}`}>
       <Link href={'/'} className='cursor-pointer sm:pl-20'>{isMobile ? Logo('100','40') :Logo()}</Link> 
      </div>
  )
}

export default Header

