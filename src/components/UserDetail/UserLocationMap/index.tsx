import React from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { StyledMapContainer } from './styles';
import type { UserLocationMapProps } from './props';

export const UserLocationMap: React.FC<UserLocationMapProps> = ({ latitude, longitude, name }) => (
  <StyledMapContainer center={[latitude, longitude]} zoom={5}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[latitude, longitude]}>
      <Popup>{name}</Popup>
    </Marker>
  </StyledMapContainer>
); 