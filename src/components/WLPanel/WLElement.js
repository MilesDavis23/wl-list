import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography } from '@mui/material';
import { checkUser, registerUser } from '../utils/wlFunctions';
import FeedbackModal from './FeedBackElement';

const AskForAddress = ({ userData, setAddressInput, setFeedbackOpen, setFeedbackMessage }) => {
  //const [ walletRegistered, setWalletRegistered ] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const registerResp = await registerUser(userData.discordId, userData.twitterUsername, data.address);
    if (registerResp.message === 'New user is registered.') {
      //setWalletRegistered(true);
      setFeedbackMessage('Congratulation! Address is registered!')
      setFeedbackOpen(true);
    }
  };

  const handleBack = (setAddressInputCallback) => {
    setAddressInputCallback(false);
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

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
        <Typography component="label" htmlFor="discordId" sx={{ width: '30%' }}>
          Address:
        </Typography>
        <TextField
          id="discordId"
          variant="outlined"
          {...register('address', { required: true })}
          error={Boolean(errors.discordId)}
          helperText={errors.discordId ? 'Discord ID is required' : ''}
          sx={{
            flexGrow: 1, 
            width: '100%'
          }}
        />
      </Box>

      <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#716D6C' }} fullWidth>
        Register
      </Button>


      <Button onClick={() => handleBack(setAddressInput)} variant="contained" sx={{ mt: 2, backgroundColor: '#716D6C' }} fullWidth>
        Back
      </Button>
    </Box>
  )
};

const AskForId = () => {
  const [addressInput, setAddressInput] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [userData, setUserData] = useState({
    discordId: '',
    twitterUsername: '',
    address: ''
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const newUser = await checkUser(data.discordId, data.twitterUsername);
      console.log(newUser);
      //console.log('New user object:', newUser)
      if (newUser?.message === 'User can register.') {
        //console.log('This is the newUser.message:', newUser.message)
        setUserData({
          discordId: data.discordId,
          twitterUsername: data.twitterUsername,
          address: ''
        })
        setAddressInput(true);
      } else if (newUser?.message === 'User is already registered.' ) {
        console.log(newUser.message)
        setFeedbackMessage('This user is alrady registered.');
        setFeedbackOpen(true);
      }
    } catch (error) {
      console.error('Error during verification.')
    }
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false);
  };


  return (
    <>
      {!addressInput &&
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
                flexGrow: 1,
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


          <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#716D6C' }} fullWidth>
            Verify
          </Button>
        </Box>
      }
      {addressInput &&
        <AskForAddress 
          userData={userData} 
          setAddressInput={setAddressInput} 
          setFeedbackOpen={setFeedbackOpen}
          setFeedbackMessage={setFeedbackMessage} 
        />
      }
      <FeedbackModal
        open={isFeedbackOpen}
        handleClose={handleFeedbackClose}
        message={feedbackMessage}
      />  
    </>
  );
};

export default AskForId;
