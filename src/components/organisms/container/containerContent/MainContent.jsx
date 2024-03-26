import React from 'react'
import Card from '../../../../components/molecules/Card'
import Grid from '@mui/material/Unstable_Grid2'; 
import PaginationButtons from '../../../molecules/Pagination';

function MainContent() {
  return (
    <>
    <Grid sx={{width: "100%", height:"100%", margin: 0, padding: 0,marginTop: "12px", display: "flex", justifyContent: "space-evenly"}} container rowGap={1} >
      <Grid sx={{ minWidth: "185px",  height: "270px", margin: 0, padding: 0, display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
       <Grid  sx={{ minWidth: "185px",  margin: 0, padding: 0, height: "270px", display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
      <Grid sx={{ minWidth: "185px",  height: "270px", display: "grid", placeItems: "center", margin: 0, padding: 0}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
       <Grid  sx={{ minWidth: "185px",  margin: 0, padding: 0, height: "270px", display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
      <Grid sx={{ minWidth: "185px",  height: "270px", display: "grid", placeItems: "center", margin: 0, padding: 0}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
       <Grid  sx={{ minWidth: "185px",  margin: 0, padding: 0, height: "270px", display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
      <Grid sx={{ minWidth: "185px",  height: "270px", display: "grid", placeItems: "center", margin: 0, padding: 0}} xs={12} sm={6} md={6} lg={4} xl={3} >
        <Card />
      </Grid>
       <Grid  sx={{ minWidth: "185px",  margin: 0, padding: 0, height: "270px", display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3}>
        <Card />
      </Grid>
      <Grid sx={{ minWidth: "185px",  height: "270px", display: "grid", placeItems: "center", margin: 0, padding: 0}} xs={12} sm={6} md={6} lg={4} xl={3}>
        <Card />
      </Grid>
       <Grid  sx={{ minWidth: "185px",  margin: 0, padding: 0, height: "270px", display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3}>
        <Card />
      </Grid>
      <Grid sx={{ minWidth: "185px",  height: "270px", display: "grid", placeItems: "center", margin: 0, padding: 0}} xs={12} sm={6} md={6} lg={4} xl={3}>
        <Card />
      </Grid>
       <Grid  sx={{ minWidth: "185px",  margin: 0, padding: 0, height: "270px", display: "grid", placeItems: "center"}} xs={12} sm={6} md={6} lg={4} xl={3}>
        <Card />
      </Grid>
      
      
    </Grid>
    <PaginationButtons />
    </>
  )
}

export default MainContent
