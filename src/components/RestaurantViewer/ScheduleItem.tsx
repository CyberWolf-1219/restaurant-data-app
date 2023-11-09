import React, { ChangeEvent, useState } from 'react';
import { TSchedule } from '../../types';

interface Props {
  day:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thirsday'
    | 'friday'
    | 'saturday'
    | 'sunday';
  currentSchedule?: TSchedule;
}

function ScheduleItem({ day, currentSchedule }: Props) {
  const [opensAt, setOpensAt] = useState('00:00');
  const [closesAt, setClosesAt] = useState('00:00');

  function onOpenTimeChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setOpensAt(e.currentTarget.value);
  }

  function onCloseTimeChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setClosesAt(e.currentTarget.value);
  }

  return (
    <fieldset className={'p-[0.5rem] border-[2px] border-black'}>
      <legend>{day.toUpperCase()}</legend>
      <div className={'flex-[2]'}>
        <div
          className={
            'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
          }>
          <label htmlFor={`${day}_open_time_input`}>Opens At</label>
          <input
            className={'w-full h-fit p-[0.125rem] text-white'}
            type='time'
            name={`${day}_open_time`}
            id={`${day}_open_time_input`}
            value={currentSchedule?.opensAt ?? opensAt}
            onChange={onOpenTimeChange}
          />
        </div>
        <div
          className={
            'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
          }>
          <label htmlFor={`${day}_close_time_input`}>Closes At</label>
          <input
            className={'w-full h-fit p-[0.125rem] text-white'}
            type='time'
            name={`${day}_close_time`}
            id={`${day}_close_time_input`}
            value={currentSchedule?.closesAt ?? closesAt}
            onChange={onCloseTimeChange}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default ScheduleItem;
