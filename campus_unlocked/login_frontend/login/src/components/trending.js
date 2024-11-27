import React, { useState, useEffect } from 'react';
import TrendingPhotosoat from '../trending/trendingoat';
import TrendingPhotosaudi from '../trending/trendingaudi';
import TrendingPhotosccd from '../trending/trendingccd';
import TrendingPhotosflight from '../trending/trendingflight';
import TrendingPhotoslibrary from '../trending/trendinglibrary';
import TrendingPhotosmamamio from '../trending/trendingmamamio';
import TrendingPhotosmt from '../trending/trendingmt';
import TrendingPhotosnewsac from '../trending/trendingnewsac';
import TrendingPhotosnursery from '../trending/trendingnursery';
import TrendingPhotosoldsac from '../trending/trendingoldsac';
import TrendingPhotosoutreach from '../trending/trendingoutreach';
import TrendingPhotosoxdn from '../trending/trendingoxdn';
import TrendingPhotospark67 from '../trending/trendingpark67';
import TrendingPhotosrm from '../trending/trendingrm';
import TrendingPhotospronite from '../trending/trendingpronite';
import TrendingPhotoshockey from '../trending/trendinghockey';
import TrendingPhotostennis from '../trending/trendingtennis';
import TrendingPhotosswim from '../trending/trendingswim';
import Top from '../components/Header';
import '../trending/trending.css'

function TrendingPhotos() {
 
  return (
    <div>
      <Top/>
      <div className="h1_trending"><h1>Trending Photos</h1></div>
   <TrendingPhotosoat/>
   <TrendingPhotosaudi/>
   <TrendingPhotosccd/>
   <TrendingPhotosflight/>
   <TrendingPhotoslibrary/>
   <TrendingPhotosmamamio/>
   <TrendingPhotosmt/>
   <TrendingPhotosnewsac/>
   <TrendingPhotosnursery/>
   <TrendingPhotosoldsac/>
   <TrendingPhotosoutreach/>
   <TrendingPhotosoxdn/>
   <TrendingPhotospark67/>
   <TrendingPhotosrm/>
   <TrendingPhotospronite/>
   <TrendingPhotoshockey/>
   <TrendingPhotostennis/>
   <TrendingPhotosswim/>
  </div>
  );
}

export default TrendingPhotos;
