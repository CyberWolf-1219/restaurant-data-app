export type TCurrentSchedules = {
  monday: {
    opensAt: string;
    closesAt: string;
  };
  tuesday: {
    opensAt: string;
    closesAt: string;
  };
  wednesday: {
    opensAt: string;
    closesAt: string;
  };
  thirsday: {
    opensAt: string;
    closesAt: string;
  };
  friday: {
    opensAt: string;
    closesAt: string;
  };
  saturday: {
    opensAt: string;
    closesAt: string;
  };
  sunday: {
    opensAt: string;
    closesAt: string;
  };
};

export type TSchedule = {
  opensAt: string;
  closesAt: string;
};

export type TMenuItem = {
  name: string;
  price: number;
};

export type TRestaurantData = {
  address: {
    street: string;
    city: string;
    country: string;
  };
  contacts: {
    phone: string;
    email: string;
  };
  _id: string;
  name: string;
  rating: number;
  menu: TMenuItem[];
  schedules: TCurrentSchedules;
  links: {
    index: string;
    update: string;
    remove: string;
  };
};

export type TNewRestaurantData = {
  _id?: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  contacts: {
    phone: string;
    email: string;
  };
  name: string;
  rating: number;
  menu: TMenuItem[];
  schedules: TCurrentSchedules;
};
