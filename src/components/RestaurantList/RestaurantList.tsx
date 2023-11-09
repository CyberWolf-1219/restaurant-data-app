import React from 'react';
import { RestaurantPreviewData } from '../../App';
import RestaurantCard from './RestaurantCard';

interface Props {
  restaurants: RestaurantPreviewData[];
  setRestaurant: (url: string) => void;
}

function RestaurantList({ restaurants, setRestaurant }: Props) {
  return (
    <ul
      className={
        'w-full h-full p-[1rem] flex flex-col items-stretch justify-start gap-[1rem] bg-white overflow-y-scroll rounded-md'
      }>
      {restaurants.map((res, i) => {
        return (
          <RestaurantCard
            key={`res_${i}_${Math.random()}`}
            restaurantData={res}
            onRestaurantSelect={setRestaurant}
          />
        );
      })}
    </ul>
  );
}

export default RestaurantList;
