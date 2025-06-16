export const loginService = (username: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && password) {
        const token = Math.random().toString(36).substring(2);
        resolve(token);
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

export const logoutService = () => {
  localStorage.removeItem('auth-token');
};
