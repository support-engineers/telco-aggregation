import { useSelector } from 'react-redux';
import { CartoLayer, colorBins } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const CALI_COUNTY_LAYER_ID = 'caliCountyLayer';

export default function CaliCountyLayer() {
  const { caliCountyLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, caliCountyLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });
  const zoomLevel = useSelector((state) => state.carto.viewState.zoom);

  if (caliCountyLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: CALI_COUNTY_LAYER_ID,
      visible: zoomLevel >= 6 && zoomLevel < 8,
      getFillColor: colorBins({
        attr: 'dbm_avg',
        colors: 'PinkYl',
        domain: [-70, -65, -60, -55, -50, -45, -40, -35],
      }),
      pointRadiusMinPixels: 2,
      getLineColor: [255, 0, 0],
      lineWidthMinPixels: 1,
      pickable: true,
      onHover: (info) => {
        if (info?.object) {
          info.object = {
            html: htmlForFeature({ feature: info.object }),
            style: {},
          };
        }
      },
    });
  }
}
