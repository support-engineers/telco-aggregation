import { MAP_TYPES } from '@deck.gl/carto';

const CALI_ROUTERS_SOURCE_ID = 'caliRoutersSource';

const source = {
  id: CALI_ROUTERS_SOURCE_ID,
  type: MAP_TYPES.TABLE,
  connection: 'bq-conn',
  data: `carto-academy.telco_service_bound.california_router_locations`,
};

export default source;
