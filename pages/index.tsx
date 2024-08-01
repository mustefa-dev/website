import Cards from '@/components/Cards';
import React, { Fragment } from 'react';
import HeroComponent from '@/components/website/HeroComponent';
import Header from '@/components/layout/Header';
import AboutComponent from '@/components/website/AboutComponent';
import Footer from '@/components/layout/Footer';

type Props = {};

const data = [
  {
    id: '01',
    title: 'House',
    name: 'project name',
    image: '/assets/cards/card1.jpg',
  },
  {
    id: '02',
    title: 'House',
    name: 'project name',
    image: '/assets/cards/card2.jpg',
  },
  {
    id: '03',
    title: 'House',
    name: 'project name',
    image: '/assets/cards/card3.jpg',
  },
  {
    id: '04',
    title: 'House',
    name: 'project name',
    image: '/assets/cards/card4.jpg',
  },
  {
    id: '05',
    title: 'House',
    name: 'project name',
    image: '/assets/cards/card5.jpg',
  },
];

function index({}: Props) {

  return (
    <Fragment>
      <Header />
      <HeroComponent/>
      <AboutComponent/>
      <Cards />
      <Footer />
    </Fragment>
  );
}

export default index;
