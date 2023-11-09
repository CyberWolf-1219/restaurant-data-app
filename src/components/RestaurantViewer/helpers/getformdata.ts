import { TMenuItem, TNewRestaurantData } from '../../../types';

export function getFormDataHelper(formData: FormData) {
  const menu: TMenuItem[] = [];

  for (const [key, value] of formData.entries()) {
    if (/menu_item_\d_name/.test(key)) {
      const itemID = /\d/.exec(key)?.[0];
      menu.push({
        name: value.toString(),
        price: parseFloat(formData.get(`menu_item_${itemID}_price`) as string),
      });
    }
  }

  const newRestaurantData: TNewRestaurantData = {
    name: formData.get('name') as string,
    rating: parseInt(formData.get('rating') as string),
    contacts: {
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
    },
    address: {
      street: formData.get('street') as string,
      city: formData.get('city') as string,
      country: formData.get('country') as string,
    },
    menu: menu,
    schedules: {
      monday: {
        opensAt: formData.get('monday_open_time') as string,
        closesAt: formData.get('monday_close_time') as string,
      },
      tuesday: {
        opensAt: formData.get('tuesday_open_time') as string,
        closesAt: formData.get('tuesday_close_time') as string,
      },
      wednesday: {
        opensAt: formData.get('wednesday_open_time') as string,
        closesAt: formData.get('wednesday_close_time') as string,
      },
      thirsday: {
        opensAt: formData.get('thirsday_open_time') as string,
        closesAt: formData.get('thirsday_close_time') as string,
      },
      friday: {
        opensAt: formData.get('friday_open_time') as string,
        closesAt: formData.get('friday_close_time') as string,
      },
      saturday: {
        opensAt: formData.get('saturday_open_time') as string,
        closesAt: formData.get('saturday_close_time') as string,
      },
      sunday: {
        opensAt: formData.get('sunday_open_time') as string,
        closesAt: formData.get('sunday_close_time') as string,
      },
    },
  };

  return newRestaurantData;
}
