import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography } from '@mui/material';

const AskForId = () => {
  // Use the useForm hook to manage form state
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = data => {
    console.log(data); // Process form data or send it somewhere
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        '& .MuiTextField-root': { m: 1 }, // Style MUI TextFields
      }}
    >
      {/* Discord ID Field */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
        <Typography component="label" htmlFor="discordId" sx={{ width: '30%' }}>
          Discord:
        </Typography>
        <TextField
          id="discordId"
          variant="outlined"
          {...register('discordId', { required: true })}
          error={Boolean(errors.discordId)}
          helperText={errors.discordId ? 'Discord ID is required' : ''}
          sx={{
            flexGrow: 1, // Allows the input field to take up remaining space,
            width: '100%'
          }}
        />
      </Box>

      {/* Twitter Username Field */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
        <Typography component="label" htmlFor="twitterUsername" sx={{ width: '30%' }} >
          Twitter:
        </Typography>
        <TextField
          id="twitterUsername"
          variant="outlined"
          {...register('twitterUsername', { required: true })}
          error={Boolean(errors.twitterUsername)}
          helperText={errors.twitterUsername ? 'Twitter username is required' : ''}
          sx={{
            flexGrow: 1,
            width: '100%'
          }}
        />
      </Box>

      {/* Verify Button */}
      <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#716D6C' }} fullWidth>
        Verify
      </Button>
    </Box>
  );
};

export default AskForId;
