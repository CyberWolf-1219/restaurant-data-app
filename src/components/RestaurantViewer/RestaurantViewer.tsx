import React, { useRef, useEffect, useState } from 'react';
import MenuEditor from './MenuEditor';
import { TRestaurantData } from '../../types';
import ScheduleEditor from './ScheduleEditor';
import { getFormDataHelper } from './helpers/getformdata';
import { fetchHelper } from './helpers/fetch';
import ErrorBoundry from '../ErrorBoundry';
import { HOSTNAME } from '../../config';

interface Props {
  URL: string;
}

function RestaurantViewer({ URL }: Props) {
  const [restaurantData, setRestaurantData] =
    useState<TRestaurantData | null>();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!URL) {
      return;
    }

    (async () => {
      try {
        const response = await fetch(HOSTNAME + URL, {
          method: 'GET',
        });
        const result = await response.json();
        console.log(result.message);
        setRestaurantData(result.message);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, [URL]);

  async function removeBtnHandler(e: React.UIEvent) {
    e.preventDefault();
    if (!restaurantData) {
      alert('NO RESTAURANT IS SELECTED');
      return;
    }

    try {
      const url = HOSTNAME + restaurantData?.links.remove;
      const config = { method: 'DELETE' };

      const result = await fetchHelper(url, config);
      if (result.status == 'OK') {
        console.log(result);
        setRestaurantData(null);
      } else {
        throw new Error(result.payload);
      }
    } catch (error) {
      console.error(error);
      alert('[-] SOMETHING WENT WRONG');
    }
  }

  async function updateBtnHandler(e: React.UIEvent) {
    e.preventDefault();
    if (!restaurantData) {
      alert('NO RESTAURANT IS SELECTED');
      return;
    }

    try {
      const formData = new FormData(form.current!);
      const newRestaurantData = getFormDataHelper(formData);
      newRestaurantData._id = restaurantData._id;
      const encodedData: BodyInit = JSON.stringify(newRestaurantData);

      const url = HOSTNAME + '/restaurants/update';
      const config: RequestInit = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: encodedData,
      };

      const result = await fetchHelper(url, config);
      if (result.status == 'OK') {
        console.log(result);
        setRestaurantData(null);
      } else {
        throw new Error(result.payload);
      }
    } catch (error) {
      console.error(error);
      alert('[-] SOMETHING WENT WRONG');
    }
  }

  async function createBtnHandler(e: React.UIEvent) {
    e.preventDefault();

    try {
      const formData = new FormData(form.current!);

      const newRestaurantData = getFormDataHelper(formData);
      console.log(newRestaurantData);

      const encodedData: BodyInit = JSON.stringify(newRestaurantData);
      console.log(encodedData);

      const url = HOSTNAME + '/restaurants/create';
      const config: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: encodedData,
      };

      const result = await fetchHelper(url, config);
      if (result.status == 'OK') {
        console.log(result);
        setRestaurantData(null);
      } else {
        throw new Error(result.payload);
      }
    } catch (error) {
      console.error(error);
      alert('[-] SOMETHING WENT WRONG');
    }
  }

  return (
    <form
      ref={form}
      className={
        'w-full max-w-screen-md h-full p-[1rem] flex flex-col items-start justify-start gap-[1rem] bg-white text-black overflow-x-hidden rounded-md'
      }>
      <div
        className={'w-full h-fit flex flex-row items-stretch justify-between'}>
        <fieldset className={'p-[1rem] border-[2px] border-black '}>
          <legend>Basic</legend>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='name_input'>Name</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='text'
              name='name'
              id='name_input'
              defaultValue={restaurantData?.name}
            />
          </div>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='rating_input'>Rating</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='number'
              name='rating'
              id='rating_input'
              defaultValue={restaurantData?.rating}
            />
          </div>
        </fieldset>
        <fieldset className={'p-[1rem] border-[2px] border-black'}>
          <legend>Contacts</legend>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='email_input'>Email</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='email'
              name='email'
              id='email_input'
              defaultValue={restaurantData?.contacts.email}
            />
          </div>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='phone_input'>Phone</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='tel'
              name='phone'
              id='phone_input'
              defaultValue={restaurantData?.contacts.phone}
            />
          </div>
        </fieldset>
        <fieldset className={'p-[1rem] border-[2px] border-black'}>
          <legend>Address</legend>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='street_input'>Street</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='text'
              name='street'
              id='street_input'
              defaultValue={restaurantData?.address.street}
            />
          </div>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='city_input'>City</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='text'
              name='city'
              id='city_input'
              defaultValue={restaurantData?.address.city}
            />
          </div>
          <div
            className={
              'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
            }>
            <label htmlFor='country_input'>Country</label>
            <input
              className={'w-full h-fit p-[0.125rem] text-white'}
              type='text'
              name='country'
              id='country_input'
              defaultValue={restaurantData?.address.country}
            />
          </div>
        </fieldset>
      </div>
      <ErrorBoundry>
        <ScheduleEditor currentSchedules={restaurantData?.schedules} />
      </ErrorBoundry>
      <ErrorBoundry>
        <MenuEditor currentMenu={restaurantData?.menu ?? []} />
      </ErrorBoundry>
      <div
        className={
          'w-full h-fit flex flex-row items-center justify-stretch gap-[1rem]'
        }>
        <button
          onClick={removeBtnHandler}
          className={
            'w-fit h-fit px-[0.75rem] py-[0.5rem] text-white bg-red-700'
          }>
          REMOVE
        </button>
        <button
          onClick={createBtnHandler}
          className={
            'w-fit h-fit px-[0.75rem] py-[0.5rem] text-white bg-green-500'
          }>
          CREATE
        </button>
        <button
          onClick={updateBtnHandler}
          className={
            'w-fit h-fit px-[0.75rem] py-[0.5rem] text-white bg-yellow-500'
          }>
          UPDATE
        </button>
      </div>
    </form>
  );
}

export default RestaurantViewer;
