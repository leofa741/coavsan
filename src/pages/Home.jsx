import { LinearProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { HomeComponent } from '../components'
import { customFetch } from '../database/customfech';
import { BannerComponent } from '../ui';

export const Home = () => {
  const [items, setItems] = useState([]);

   useEffect(() => {
       
     customFetch(4000,1).then((data) => setItems(data));
    }, []);
 
   if (items.length === 0) {
       return (
        <>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
<BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."  />

 
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
     
       <LinearProgress  />
     </Stack>
     
        
         
         </>
       );
       
   }
   
   else{
  return (
    <>

    < HomeComponent  />
     
    </>
  )
}
}
