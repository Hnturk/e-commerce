import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SidebarDiv from "../atoms/SidebarDiv";
import Paper from "@mui/material/Paper";

export default function BrandFilter() {
  return (
    <Paper sx={{minWidth:"190px", width:"50%",  height:"200px"}}>
    <FormControl sx={{paddingLeft: "10px"}}>
      <FormLabel id="BrandFİlter">Sort</FormLabel>
      <RadioGroup>
        <FormControlLabel value="Lambo" control={<Radio />} label="Lambo" />
        <FormControlLabel
          value="Mercedes"
          control={<Radio />}
          label="Mercedes"
        />
        <FormControlLabel value="Audi" control={<Radio />} label="Audi" />
        <FormControlLabel value="Maksuta" control={<Radio />} label="Maksuta" />
      </RadioGroup>
    </FormControl>
    </Paper>
  );
}