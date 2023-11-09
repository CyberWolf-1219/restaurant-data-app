import React from 'react';
import { RestaurantPreviewData } from '../../App';
import RestaurantCard from './RestaurantCard';

interface Props {
  restaurants: RestaurantPreviewData[];
  setRestaurant: (url: string) => void;
}

function RestaurantList({ restaurants, setRestaurant }: Props) {
  return (
    <ul>
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
