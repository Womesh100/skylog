/**
 * Handle Error Message
 * Define a error message
 * getError accept an error object and check error.response
 * if exists and error.response.data.message exists
 * means the message value that enters inside server.js 'Product Not Found'
 * if exists then return the meesage error.response.data.message - 'Product Not Found' from backend
 * else return general error message.
 */

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message // server.js our defined error message
    : error.message; // default error message
};
