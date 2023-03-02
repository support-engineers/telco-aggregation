import CaliStateAvgLayer from './CaliStateAvgLayer';
import CaliCountyLayer from './CaliCountyLayer';
import CaliRoutersLayer from './CaliRoutersLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    CaliStateAvgLayer(),
    CaliCountyLayer(),
    CaliRoutersLayer(),
    // [hygen] Add layer
  ];
};
