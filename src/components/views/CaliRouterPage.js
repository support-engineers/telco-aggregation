import { useEffect } from 'react';
import caliRoutersSource from 'data/sources/caliRoutersSource';
import { CALI_ROUTERS_LAYER_ID } from 'components/layers/CaliRoutersLayer';
import caliCountySource from 'data/sources/caliCountySource';
import { CALI_COUNTY_LAYER_ID } from 'components/layers/CaliCountyLayer';
import { useDispatch } from 'react-redux';
import {
  addLayer,
  removeLayer,
  addSource,
  removeSource,
} from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  caliRouterPage: {},
}));

export default function CaliRouterPage() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(caliCountySource));

    dispatch(
      addLayer({
        id: CALI_COUNTY_LAYER_ID,
        source: caliCountySource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(CALI_COUNTY_LAYER_ID));
      dispatch(removeSource(caliCountySource.id));
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(addSource(caliRoutersSource));

    dispatch(
      addLayer({
        id: CALI_ROUTERS_LAYER_ID,
        source: caliRoutersSource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(CALI_ROUTERS_LAYER_ID));
      dispatch(removeSource(caliRoutersSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.caliRouterPage}>
      <Grid item>Hello World</Grid>
    </Grid>
  );
}
