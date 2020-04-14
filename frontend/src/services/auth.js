export const USER_ID = '';
export const isAuthenticated = () => localStorage.getItem('USER_ID') !== null;
export const getId = () => localStorage.getItem('USER_ID');

export const login = (id) => {
  localStorage.setItem('USER_ID', id);
};
export const logout = () => {
  localStorage.clear();
};
