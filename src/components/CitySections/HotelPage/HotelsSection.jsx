import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { HotelList } from './HotelList';
import { Loader } from '../../Loader/Loader';
import { Notification } from '../../Notification/Notifications';
import { toast } from 'react-toastify';


export const HotelsSection = ({ city }) => {
  const [hotelData, setHotelData] = useState(null);
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadHotelsInfo = async() => {
      try {
        setIsError(false);
        const cityInfoFromServer = await axios.get('https://64521253bce0b0a0f73bdbe4.mockapi.io/city/hotels');

        if (cityInfoFromServer.data) {
          setHotelData(cityInfoFromServer.data);
        }
      } catch {
        setIsError(true);
        toast.error("Can` get hotels information");
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadHotelsInfo();

    return () => {
      setHotelData(null);
    };
  }, [selectedCity]);

  return (
    <>
      {isError && <Notification/>}
      {!hotelData && isLoading && <Loader />}
      {hotelData && (
        <div>
          <HotelList hotels={hotelData} />
        </div>
      )}
    </>
  );
};
