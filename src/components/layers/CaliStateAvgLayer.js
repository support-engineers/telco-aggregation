import { useSelector } from 'react-redux';
import { CartoLayer, colorBins } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const CALI_STATE_AVG_LAYER_ID = 'caliStateAvgLayer';

export default function CaliStateAvgLayer() {
  const { caliStateAvgLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, caliStateAvgLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });
  const zoomLevel = useSelector((state) => state.carto.viewState.zoom);

  if (caliStateAvgLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: CALI_STATE_AVG_LAYER_ID,
      visible: zoomLevel < 6,
      getFillColor: colorBins({
        attr: 'dbm_avg',
        colors: 'Sunset',
        domain: [-1, -150],
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
