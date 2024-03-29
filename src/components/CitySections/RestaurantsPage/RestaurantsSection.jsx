import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { RestaurantsFilter } from './RestaurantsFilter';
import { RestaurantList } from './RestaurantsList';
import { Loader } from '../../Loader/Loader';
import { Notification } from '../../Notification/Notifications';
import { toast } from 'react-toastify';

export const RestaurantsSection = ({ city }) => {
  const [restaurauntData, setRestaurauntData] = useState(null);
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadRestaurauntsInfo = async() => {

      try {
        setIsError(false);
        const cityInfoFromServer = await axios.get('https://64521253bce0b0a0f73bdbe4.mockapi.io/city/restaurants');

        if (cityInfoFromServer.data) {
          setRestaurauntData(cityInfoFromServer.data);
        }
      } catch {
        setIsError(true);
        toast.error("Can` get restauraunts information");
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadRestaurauntsInfo();

    return () => {
      setRestaurauntData(null);
    };
  }, [selectedCity]);

  return (
    <div>
      {isError && (
        <Notification/>
      )}
      {!restaurauntData && isLoading && <Loader />}
      {restaurauntData && (
        <>
          <div>
            <RestaurantsFilter />
          </div>
          <div>
            <RestaurantList restaurants={restaurauntData} />
          </div>
        </>
      )}
    </div>
  );
};
