import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../features/images/imageSlice';
import { Item } from '../helpers/Item';

const ImagesList = ({ searchGroup }) => {
  const imageList = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const checkImageListStatus = () => {
    if (imageList.status === 'pending')
      return <CircularProgress sx={{ my: 4 }} size={100} />;
    else if (imageList.status === 'success')
      if (imageList.list.length === 0)
        return (
          <React.Fragment>
            <Typography sx={{ mb: 2 }} variant="h3" component="h3">
              No Images Found
            </Typography>
            <p>Please try a different search term</p>
          </React.Fragment>
        );
      else {
        return (
          <Grid item container>
            {imageList.list.map((item) => (
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                sx={{ p: 1 }}
                key={item.id}
              >
                <Item>
                  <Card>
                    <CardMedia
                      style={{ width: '100%', height: '200px' }}
                      component="img"
                      alt="green iguana"
                      image={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                    />
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        );
      }
    else
      return (
        <div>
          <Typography sx={{ mb: 2 }} variant="h3" component="h3">
            Oops.. Something went wrong!
          </Typography>
          <p>Please try again</p>
        </div>
      );
  };

  const getGroupName = () => {
    return (
      <Typography
        sx={{ mb: 2, fontWeight: 'bold' }}
        variant="h4"
        component="h4"
      >
        {searchGroup[0].toUpperCase() + searchGroup.slice(1) + ' images'}
      </Typography>
    );
  };

  useEffect(() => {
    dispatch(getImages(searchGroup));
  }, [dispatch, searchGroup]);

  return (
    <div>
      {getGroupName()}
      {checkImageListStatus()}
    </div>
  );
};

export default ImagesList;
