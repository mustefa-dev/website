import React from 'react';
import useDeviceInfo from '@/hooks/useDeviceInfo';

type Props = {};

function Footer({}: Props) {
  const { isMobile } = useDeviceInfo();
  return (
    <div className='flex-col'>
      <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row-reverse'} gap-16 text-white pt-10 text-right bg-black md:h-[18vh] mt-14 px-4 md:px-16 sm:px-16`}>
      <p className={`${isMobile ? 'w-full' : 'w-[500px]'} text-center`}>استمتع بلحظات الفخامة مع مجوهرات الروان، حيث يتلاقى الفن والتصميم ليخلقوا قطعاً تتحدث بلغة الجمال. اكتشف تشكيلتنا الفاخرة من الذهب ، وامنح حياتك لمسة من الرفاهية والأناقة. انغمس في عالم الأناقة الراقية وارتقِ بإطلالتك إلى مستوى جديد مع مجوهرات الروان</p>
      <div className='flex flex-col gap-2'>
        <p>Iraq-Najaf-Rwan Street</p>
        <p>rwanjewelry@gmail.com</p>
        <p>07800000000 </p>
      </div>
    </div>
       <div className='bg-gray-500 text-right px-16'>
        <span>جميع الحقوق محفوظة لشركة الروان</span>
      </div>
    </div>
  );
}

export default Footer;