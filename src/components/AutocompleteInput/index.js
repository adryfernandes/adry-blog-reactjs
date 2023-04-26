import { Grid, Autocomplete, Chip, TextField } from "@mui/material";

function AutocompleteInput({ tags, selectedTags, setSelectedTags }) {
  const handleTagChange = (event, value) => {
    setSelectedTags(value);
  };

  return (
    <Grid item sx={12}>
      <Autocomplete
        multiple
        options={tags}
        value={selectedTags}
        onChange={handleTagChange}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((tag, index) => (
            <Chip key={tag} label={tag} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Tags"
            placeholder="Select tags"
          />
        )}
      />
    </Grid>
  );
}

export default AutocompleteInput;
