export const loginSuccess = (token) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: token
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };