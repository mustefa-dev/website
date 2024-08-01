import React from 'react';

type Props = {};

function AboutComponent({}: Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-1 md:gap-16 h-screen p-4 md:p-16">
      <div className="text-right w-full sm:w-1/2 flex gap-4 flex-col justify-center px-5 items-end h-full">
        <h2 className="text-5xl font-bold">
          مجوهرات الروان رقي وتألق يحكيان قصة فريدة
        </h2>
        <p className="text-lg md:text-xl">
          استمتع بلحظات الفخامة مع مجوهرات الروان، حيث يتلاقى الفن والتصميم
          ليخلقوا قطعاً تتحدث بلغة الجمال. اكتشف تشكيلتنا الفاخرة من الذهب ،
          وامنح حياتك لمسة من الرفاهية والأناقة. انغمس في عالم الأناقة الراقية
          وارتقِ بإطلالتك إلى مستوى جديد مع مجوهرات الروان
        </p>
        <button className=" bg-black text-white p-3 px-7 rounded-md my-2">
          Contact
        </button>
      </div>
      <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt="about"
        className="w-full sm:w-1/2 object-cover"
      />
    </div>
  );
}

export default AboutComponent;