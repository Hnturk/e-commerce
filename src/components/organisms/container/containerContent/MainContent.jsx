import { React, useContext, useState } from "react";
import Card from "../../../../components/molecules/Card";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import CarContext from "../../../../contexts/CarContext";
import Stack from "@mui/material/Stack";

function MainContent() {
  const { carData } = useContext(CarContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = carData.slice(indexOfFirstItem, indexOfLastItem);

  function handleChange(event, value) {
    setCurrentPage(value);
  }

  return (
    <>
      <Grid
        sx={{
          width: "100%",
          maxHeight: "100%",
          margin: 0,
          padding: 0,
          marginTop: "12px",
          display: "flex",
          rowGap: "20px"
        }}
        container
      >
        {currentItems.map((item) => (
          <Grid
            sx={{
              minWidth: "185px",
              height: "260px",
              margin: 0,
              padding: 0,
              display: "grid",
              placeItems: "center",
            }}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
          >
            <Card key={item?.id} car={item} />
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2}>
        <Pagination
          color="primary"
          count={Math.ceil(carData?.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </>
  );
}

export default MainContent;


