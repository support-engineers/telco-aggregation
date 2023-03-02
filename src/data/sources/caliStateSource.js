import { MAP_TYPES } from '@deck.gl/carto';

const CALI_STATE_SOURCE_ID = 'caliStateSource';

const source = {
  id: CALI_STATE_SOURCE_ID,
  type: MAP_TYPES.QUERY,
  connection: 'bq-conn',
  data: `With avg_geom AS ( SELECT ST_AsText(polygon_table.geom) as wkt, avg(point_table.dbm) as dbm_avg FROM carto-academy.telco_service_bound.california_state polygon_table JOIN carto-academy.telco_service_bound.california_router_locations point_table ON ST_CONTAINS(polygon_table.geom, point_table.geom) GROUP BY polygon_table.name, ST_AsText(polygon_table.geom) ) SELECT ST_GeogFromText(wkt) as geom, * except(wkt) FROM avg_geom;`,
};

export default source;
