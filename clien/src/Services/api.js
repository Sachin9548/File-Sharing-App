import axios from 'axios';

// const api_url = 'https://r5hqxq-8000.csb.app';
// const api_url="https://p22pjg-5000.csb.app";
export const uploadFile = async (data) => {
  try {
    let responce=await axios.post(`/upload`, data);
    return responce.data;
  } catch (error) {
    console.error('error in uploadFile requist', error.message);
  }
};
