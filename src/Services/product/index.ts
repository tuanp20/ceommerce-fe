const axios = require('axios').default;

// Nếu muốn sử dụng async/await thì viết như sau
async function getUser() {
  try {
    const response = await axios.get('/http://localhost:3001/store/products');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


export default getUser
