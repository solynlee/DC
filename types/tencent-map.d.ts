export interface MapLocation {
  longitude: number;
  latitude: number;
  address: string;
  title?: string;
}

export interface TencentMapProps {
  location: MapLocation;
  zoom?: number;
  height?: string;
  width?: string;
  showControls?: boolean;
}

export type MapType = 'roadmap' | 'satellite';

export { };
