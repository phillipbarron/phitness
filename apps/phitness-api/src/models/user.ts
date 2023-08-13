export interface GoogleUser {
  username: String,
  email: String,
  googleId: String,
}


export const isGoogleUser = (arg:any): arg is GoogleUser =>
  typeof arg?.username === 'string' &&
  typeof arg?.email === 'string' &&
  typeof arg?.googleId === 'string';
