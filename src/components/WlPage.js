import React from 'react';
import { Box, Grid } from '@mui/material';
import AskForId from './WLPanel/WLElement';

const WaitList = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="75vh"
            flexDirection="column"
        >
            <Grid 
                container 
                justifyItems="stretch" 
                flexDirection='column' 
                sx={
                    {
                        width: '50%', 
                        padding: 1,
                        border: 1,
                        borderColor: '#716D6C',
                        background: '#716D6C',
                        opacity: 0.65,
                        borderRadius: 1.5
                    }
                }
            >
                <Grid item sx={{p: 2, opacity: 1}}>
                    <AskForId />
                </Grid>
            </Grid>
        </Box>
    )
}

export default WaitList;