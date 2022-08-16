export const baseURL = "http://43.204.196.131:9300/api/v1";

export const isRequired = (value) => {
    if (value === "" || value === undefined || value === null) {
      return true;
    }
  };
  
export function validateEmail(email) {
const emailRegx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
return emailRegx.test(email) !== false;
}

export function isPassword(value) {
    let str = value;
    if (
      str.match(/[a-z]/g) &&
      str.match(/[A-Z]/g) &&
      str.match(/[0-9]/g) &&
      str.match(/[^a-zA-Z\d]/g) &&
      str.length >= 8
    ) {
      return true;
    }
    return false;
  }