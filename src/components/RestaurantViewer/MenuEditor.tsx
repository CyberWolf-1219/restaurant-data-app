import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { TMenuItem } from '../../types';

interface Props {
  currentMenu: TMenuItem[];
}

function MenuEditor({ currentMenu }: Props) {
  const [menuItems, setMenuItems] = useState<TMenuItem[]>(currentMenu);

  useEffect(() => {
    (() => {
      console.log(currentMenu);
      setMenuItems(currentMenu);
    })();
  }, [currentMenu]);

  function removeItem(itemName: string) {
    const filteredItems = menuItems?.filter((item) => {
      return item.name != itemName;
    });
    setMenuItems(filteredItems);
  }

  function addItemBtnClickHandler(e: React.UIEvent) {
    e.preventDefault();

    setMenuItems((prevItems) => {
      return [...prevItems, { name: menuItems?.length.toString(), price: '' }];
    });
  }

  return (
    <fieldset className={'w-full h-fit p-[1rem] border-[2px] border-black'}>
      <legend>Menu</legend>
      <div
        className={
          'w-full h-fit mb-[1rem] flex flex-row items-start justify-between gap-[1rem] flex-wrap'
        }>
        {menuItems?.map((item, i) => {
          return (
            <MenuItem
              key={`menu_item_${i}_${Math.random()}`}
              currentMenuItemData={item}
              removeItemHandler={removeItem}
              index={i}
            />
          );
        })}
      </div>
      <button
        onClick={addItemBtnClickHandler}
        className={'w-full h-fit px-[0.75rem] py-[0.5rem] text-white bg-black'}>
        ADD ITEM
      </button>
    </fieldset>
  );
}

export default MenuEditor;
