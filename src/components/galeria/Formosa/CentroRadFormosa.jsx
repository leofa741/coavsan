import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import { fetchProductBytitle } from '../../../database/customfech';
import { Box, CircularProgress} from '@mui/material';


function srcset(img, width, height, rows = 1, cols = 1) {
  return {
    src: `${img}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${img}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const CentroRadFormosa=({tittle})=> {

  const [items, setItems] = useState([]);


  useEffect(() => {  

    fetchProductBytitle(3000,tittle).then((data) => setItems(data));
  
  }, [tittle]);

  if (items.length === 0) {
    return (
      <>   
      <Box sx={{ display: 'flex' , justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
      </Box>       
       </>
     );    
     } else{
     return (
    <ImageList
    sx={{ width: { xs: 310, sm: 550 }, height: 650, overflowY: 'scroll' }}
      rowHeight={400}
      gap={4}
    >
      {items.map((items) => {
        const cols = items.featured ? 2 : 1;
        const rows = items.featured ? 2 : 1;

        return (
          <ImageListItem key={items.img} cols={cols} rows={rows}>
            <img
              {...srcset(items.img, 200, 300, rows, cols)}
              alt={items.title}
              loading="lazy"
            />              
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 2%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={items.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${items.title}`} >
                  <StarBorderIcon     />
                </IconButton>
                
              }
              actionPosition="left" />

               <ImageListItemBar  title={items.author}  position="bottom" 
                  actionIcon={
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label={`PersonIcon ${items.author}`} >
                      <PersonIcon/>
                    </IconButton>
                    
                  } 
                  actionPosition="left" />
        
          </ImageListItem>
          
        );
      })}
       
    </ImageList>
  );
}
}