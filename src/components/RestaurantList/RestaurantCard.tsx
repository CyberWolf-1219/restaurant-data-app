import React from 'react';
import { RestaurantPreviewData } from '../../App';

interface Props {
  restaurantData: RestaurantPreviewData;
  onRestaurantSelect: (url: string) => void;
}

function RestaurantCard({ restaurantData, onRestaurantSelect }: Props) {
  function btnClickHandler(e: React.UIEvent) {
    e.preventDefault;
    onRestaurantSelect(restaurantData.links.view);
  }

  return (
    <article
      className={
        'w-full h-fit p-[1rem] text-black bg-white border-[2px] border-black'
      }>
      <h2 className={'text-3xl mb-[2rem]'}>{restaurantData.name}</h2>
      <div className={'text-left mb-[1rem]'}>
        <p>
          <span>RATING:</span> <span>{restaurantData.rating}</span>
        </p>
        <p>
          <span>EMAIL:</span> <span>{restaurantData.contacts.email}</span>
          <br />
          <span>PHONE:</span> <span>{restaurantData.contacts.phone}</span>
          <br />
        </p>
        <p>
          <span>STREET:</span> <span>{restaurantData.address.street}</span>
          <br />
          <span>CITY:</span> <span>{restaurantData.address.city}</span>
          <br />
          <span>COUNTRY:</span> <span>{restaurantData.address.country}</span>
          <br />
        </p>
      </div>
      <button
        onClick={btnClickHandler}
        className={'w-full h-fit px-[0.75rem] py-[0.5rem] bg-black text-white'}>
        VIEW RESTAURANT
      </button>
    </article>
  );
}

export default RestaurantCard;
