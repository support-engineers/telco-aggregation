import { VOYAGER } from '@carto/react-basemaps';
import { API_VERSIONS } from '@deck.gl/carto';

export const initialState = {
  viewState: {
    latitude: 37.90904794148933,
    longitude: -122.14957034717841,
    zoom: 4,
    pitch: 0,
    bearing: 0,
    dragRotate: false,
  },
  basemap: VOYAGER,
  credentials: {
    apiVersion: API_VERSIONS.V3,
    apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfa2hpdnRreGkiLCJqdGkiOiI0ZjI2MDY1ZSJ9.gJzz7ywUOrQzuvoz5WqYxMCnn2oBp9LEzPET4lkIVsM'
  },
  googleApiKey: '', // only required when using a Google Basemap
  googleMapId: '', // only required when using a Google Custom Basemap
};
