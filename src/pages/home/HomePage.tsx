import * as React from 'react';
import { MainContent, MainOverlay } from './HomePageStyled';
import Section from '@/common/components/section/Section';
import Slick from '@/common/components/carousel/Slick';

interface IHomePageProps {}

const setting = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

//delete
const data = [
  { url: 'https://photo-zmp3.zmdcdn.me/banner/1/0/6/2/1062d83af2ff5c5fbbba88331219ebce.jpg' },
  { url: 'https://photo-zmp3.zmdcdn.me/banner/d/1/8/7/d187f7c347f245df7a694cae5d1477d2.jpg' },
  { url: 'https://photo-zmp3.zmdcdn.me/banner/5/a/b/7/5ab7fc7ce014a1f83a7cf2257e0e6a95.jpg' },
  { url: 'https://photo-zmp3.zmdcdn.me/banner/d/a/8/8/da888d3aaa65f746ac409949bd9e6463.jpg' },
  { url: 'https://photo-zmp3.zmdcdn.me/banner/2/9/e/6/29e6823f099b327ff1730e7f5de4f7d0.jpg' },
];

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <>
      <MainContent>
        <Slick setting={setting}>
          {data.map((item) => (
            <img src={item.url} alt="" key={item.url} />
          ))}
        </Slick>
        <Section numberChildDisplay={7} />
        <Section numberChildDisplay={5} />
        <Section numberChildDisplay={5} />
        <Section numberChildDisplay={5} />
        <Section numberChildDisplay={5} />
      </MainContent>
      <MainOverlay />
    </>
  );
};

export default HomePage;
