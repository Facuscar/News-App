import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material";
import { CATEGORIES } from "../constants";
import useNews from "../hooks/useNews";

const Form = () => {
    
    const { category, handleCategoryChange } = useNews();

    return (
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select label='Category' onChange={handleCategoryChange} value={category}>
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