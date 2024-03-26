import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";

export default function BrandFilter() {
  return (
    <Paper sx={{ minWidth: "190px", width: "50%", height: "200px" }}>
      <FormControl sx={{ paddingLeft: "10px" }}>
        <FormLabel id="BrandFİlter">Sort</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value="Old to New"
            control={<Radio />}
            label="Old to New"
          />
          <FormControlLabel
            value="New to Old"
            control={<Radio />}
            label="New to Old"
          />
          <FormControlLabel
            value="Price High to Low"
            control={<Radio />}
            label="Price High to Low"
          />
          <FormControlLabel
            value="Price Low to High"
            control={<Radio />}
            label="Price Low to High"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
