import React, { useEffect, useState } from 'react';
import { TMenuItem } from '../../types';

interface Prop {
  currentMenuItemData: TMenuItem;
  index: number;
  removeItemHandler: (itemName: string) => void;
}

function MenuItem({ currentMenuItemData, index, removeItemHandler }: Prop) {
  const [menuItem, setMenuItem] = useState<TMenuItem>(currentMenuItemData);

  useEffect(() => {
    setMenuItem(currentMenuItemData);
  }, [currentMenuItemData]);

  function removeBtnHandler(e: React.UIEvent) {
    e.preventDefault();
    removeItemHandler(menuItem.name);
  }

  return (
    <fieldset className={'p-[0.25rem] border-[2px] border-black'}>
      <legend>{`ITEM ${index}`}</legend>
      <div
        className={
          'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
        }>
        <label htmlFor='item_name_input'>Item Name</label>
        <input
          className={'w-full h-fit p-[0.125rem] text-white'}
          type='text'
          name={`menu_item_${index}_name`}
          id={`menu_item_${index}_name_input`}
          defaultValue={menuItem.name}
        />
      </div>
      <div
        className={
          'w-full h-fit flex flex-col items-start justify-start gap-[0.125rem]'
        }>
        <label htmlFor='item_price_input'>Price</label>
        <input
          className={'w-full h-fit p-[0.125rem] text-white'}
          type='number'
          name={`menu_item_${index}_price`}
          id={`menu_item_${index}_price_input`}
          defaultValue={menuItem.price}
        />
      </div>
      <button
        onClick={removeBtnHandler}
        className={
          'w-full h-fit py-[0.5rem] mt-[0.5rem] text-white bg-red-600'
        }>
        REMOVE
      </button>
    </fieldset>
  );
}

export default MenuItem;
