import React from 'react'
import BrandFilter from '../../../molecules/BrandFilter'
import SortFilter from '../../../molecules/SortFilter'
import ModelFilter from '../../../molecules/ModelFilter'
import Grid from '@mui/material/Unstable_Grid2'; 
function FilterBar() {
  return (
    <Grid container sx={{ display: "flex",  flexDirection: "column",alignItems: "flex-end", justifyContent: "flex-start", height: "100%", width: "100%", gap: 4, margin: 0, paddingRight: "10px", paddingTop: "20px"}}  spacing={3}> 
      <SortFilter /> 
      <BrandFilter/>
      <ModelFilter />
    </Grid>
  )
}

export default FilterBar
 