import { useEffect, useState } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantViewer from './components/RestaurantViewer/RestaurantViewer';
import ErrorBoundry from './components/ErrorBoundry';
import { fetchHelper } from './components/RestaurantViewer/helpers/fetch';
import { HOSTNAME } from './config';

export type RestaurantPreviewData = {
  name: string;
  rating: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
  contacts: {
    phone: string;
    email: string;
  };
  links: {
    view: string;
  };
};

function App() {
  const [restaurants, setRestaurants] = useState<RestaurantPreviewData[]>([]);
  const [previewURL, setPreviewURL] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const url = HOSTNAME + '/restaurants';
        const config: RequestInit = {
          method: 'GET',
        };
        const result = await fetchHelper(url, config);
        if (result) {
          setRestaurants(result.payload);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {};
  }, []);

  function setRestaurantLink(url: string) {
    setPreviewURL(url);
  }

  return (
    <main
      className={
        'w-full max-w-screen-lg h-screen p-[1rem] mx-auto flex flex-col items-stretch justify-start gap-[1rem] bg-slate-100/10 rounded-md'
      }>
      <div className={'w-full h-fit p-[2rem] bg-white text-black rounded-md'}>
        <h1 className={'text-3xl text-center'}>RESTAURANT MANAGEMENT SYSTEM</h1>
      </div>
      <div
        className={
          'w-full h-full max-h-[80vh] flex flex-row items-stretch justify-start'
        }>
        <div className={'flex-[1] w-full h-full'}>
          <ErrorBoundry>
            <RestaurantList
              restaurants={restaurants}
              setRestaurant={setRestaurantLink}
            />
          </ErrorBoundry>
        </div>
        <div className={'flex-[3] w-full max-h-screen overflow-y-auto'}>
          <ErrorBoundry>
            <RestaurantViewer URL={previewURL} />
          </ErrorBoundry>
        </div>
      </div>
    </main>
  );
}

export default App;
