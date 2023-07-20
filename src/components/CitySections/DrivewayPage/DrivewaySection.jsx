import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ReactComponent as ArrowDrive } from '../../Icons/ArrowDrive.svg';
import {
  DriveWayTitle,
  DrivewayLink,
  DrivewayPageWrapper,
  DrivewayWrapper,
  MapDriveSvg,
  TransportBox,
  TransportDescriprion,
  TransportPicture,
  TransportTitle,
} from './Driveway.styled';
import { Loader } from '../../Loader/Loader';
import { Notification } from '../../Notification/Notifications';
import { toast } from 'react-toastify';

const MapLink = ({ city }) => {
  const handleMapLinkClick = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const destination = `${city}`;
      const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;

      window.open(url, '_blank');
    });
  };

  return (
    <DrivewayLink
      href="#"
      onClick={handleMapLinkClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here to view directions to
      {' '}
      {city}
    </DrivewayLink>
  );
};

export const DrivewaySection = () => {
  const [routeData, setRouteData] = useState(null);
  const { city } = useParams();
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadRoutesInfo = async() => {
      try {
        setIsError(false);
        const cityInfoFromServer = await axios.get('https://64521253bce0b0a0f73bdbe4.mockapi.io/city/routes');

        if (cityInfoFromServer.data) {
          setRouteData(cityInfoFromServer.data[0]);
        }
      } catch {
        setIsError(true);
        toast.error("Can`t get route information");
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadRoutesInfo();

    return () => {
      setRouteData(null);
    };
  }, [selectedCity]);

  return (
    <DrivewayPageWrapper>
      {isError && <Notification/>}
      {!routeData && isLoading && <Loader />}
      <DriveWayTitle>Map your way with Google Maps</DriveWayTitle>
      <DrivewayWrapper>
        <div>
          <MapDriveSvg />
          <MapLink city={city} />
        </div>
        <ArrowDrive />
      </DrivewayWrapper>
      {routeData && (
      <div>
        <TransportTitle>Transport hubs</TransportTitle>
        <TransportBox>
          <TransportPicture src={routeData.transportation1Img} alt="" />
          <TransportDescriprion>
            {routeData.transportation1}
          </TransportDescriprion>
        </TransportBox>
        <TransportBox className="revert-box">
          <TransportDescriprion>
            {routeData.transportation2}
          </TransportDescriprion>
          <TransportPicture src={routeData.transportation2Img} alt="" />
        </TransportBox>
      </div>
      )}
    </DrivewayPageWrapper>
  );
};
