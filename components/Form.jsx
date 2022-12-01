import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material";
import { CATEGORIES } from "../constants";

const Form = () => {
    return (
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select label='Category'>
                <MenuItem>
                    Category
                </MenuItem>
                { CATEGORIES.map( category => (
                    <MenuItem key={category.value} value={category.value}>
                        {category.label}
                    </MenuItem>
                ))}
            </Select>
            <Button fullWidth variant="primary">
                Search News
            </Button>
        </FormControl>
    )
}

export default Form;