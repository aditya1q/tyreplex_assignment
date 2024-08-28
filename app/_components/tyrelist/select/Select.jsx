import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Select({ data }) {
    return (
        <Autocomplete
            disablePortal
            options={data}
            sx={{ width: 300, p: 0 }}
            renderInput={(params) => <TextField {...params} label="Tyre Brand"
                InputLabelProps={{
                    style: {
                        lineHeight: "1",
                        textAlign: "center",
                        fontSize: "13px",
                    },
                }}
            />}
        />
    );
}
