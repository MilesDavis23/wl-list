import axios from 'axios';

const apiUrl = process.env.REACT_APP_WLLIST_WL_USERS_URL;
const checkRoute = 'users/check';
const registerRoute = 'users/register';


console.log(apiUrl)

const checkUser = async (discordId, twitterUsername) => {
  try {
    const response = await axios.post(`${apiUrl}${checkRoute}`, {
      discordId,
      twitterUsername
    });
    //console.log('Check user response:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('User check failed:', error.response.data);
      return error.response.data;
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  }
};

const registerUser = async (discordId, twitterUsername, address) => {
  try {
    const response = await axios.post(`${apiUrl}${registerRoute}`, {
      discordId,
      twitterUsername,
      address
    });
    //console.log('User registered successfully:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
  }
};

export {
    checkUser,
    registerUser
};
