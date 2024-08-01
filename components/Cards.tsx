import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import apiHelper from '@/api/api-helper';

type Props = {
  details: {
    id: string;
    title: string;
    name: string;
    image: string;
  };
};

function Cards({}) {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(apiHelper.WEBSITE.GET)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);304 × 405 px

  return (
    <div className="container mx-auto grid grid-cols-3 items-center justify-center gap-5">
      <img
        className="aspect-[3/4] object-cover"
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt=""
      />
      <img
        className="aspect-[3/4] object-cover"
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt=""
      />
      <img
        className="aspect-[3/4] object-cover"
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt=""
      />
      <img
        className="aspect-[3/4] object-cover"
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt=""
      />
      <img
        className="aspect-[3/4] object-cover"
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt=""
      />
      <img
        className="aspect-[3/4] object-cover"
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling-art-showing-hunters-who-have-just-taken-down-beasts.jpg"
        alt=""
      />
    </div>
  );
}

export default Cards;
