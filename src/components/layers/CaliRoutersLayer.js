import { useSelector } from 'react-redux';
import { CartoLayer, colorBins } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const CALI_ROUTERS_LAYER_ID = 'caliRoutersLayer';

export default function CaliRoutersLayer() {
  const { caliRoutersLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, caliRoutersLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });
  const zoomLevel = useSelector((state) => state.carto.viewState.zoom);

  if (caliRoutersLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: CALI_ROUTERS_LAYER_ID,
      visible: zoomLevel >= 8,
      getFillColor: colorBins({
        attr: 'dbm',
        colors: 'Sunset',
        domain: [-120, -100, -80, -60, -40, -20, 0],
      }),
      pointRadiusMinPixels: 5,
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
