import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const CentroRadFormosa=()=> {
  return (
    <Box sx={{ width: {xs: 310,sm: 500 }, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/1.jpeg?raw=true',
    title: 'Bed',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/2.jpeg?raw=true',
    title: 'Books',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/3.jpeg?raw=true',
    title: 'Sink',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/4.jpeg?raw=true',
    title: 'Kitchen',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/5.jpeg?raw=true',
    title: 'Blinds',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/6.jpeg?raw=true',
    title: 'Chairs',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/7.jpeg?raw=true',
    title: 'Laptop',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/8.jpeg?raw=true',
    title: 'Doors',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/9.jpeg?raw=true',
    title: 'Coffee',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/10.jpeg?raw=true',
    title: 'Storage',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/11.jpeg?raw=true',
    title: 'Candle',
  },
  {
    img: 'https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/12.jpeg?raw=true',
    title: 'Coffee table',
  },
    {
    img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/13.jpeg?raw=true',
    title: 'Coffee table',
    },
    {
    img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/14.jpeg?raw=true',
    title: 'Coffee table',
     },
     {
    img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/15.jpeg?raw=true',
    title: 'Coffee table',
     },
    {
     img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/16.jpeg?raw=true',
     title: 'Coffee table',
  },
  {
    img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/17.jpeg?raw=true',
    title: 'Coffee table',
    },
    {
        img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/18.jpeg?raw=true',
        title: 'Coffee table',
     },
 {
 img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/19.jpeg?raw=true',
  title: 'Coffee table',
 },
 {
    img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/20.jpeg?raw=true',
    title: 'Coffee table',
    },
    {
        img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/21.jpeg?raw=true',
        title: 'Coffee table',
        },
         {
 img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/22.jpeg?raw=true',
     title: 'Coffee table',
 },
 {
    img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/23.jpeg?raw=true',
    title: 'Coffee table',
    },
    {
        img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/24.jpeg?raw=true',
        title: 'Coffee table',
        },
        {
            img: ' https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/25.jpeg?raw=true',
            title: 'Coffee table',
            },
];