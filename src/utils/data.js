import apiData from '../data/auth.json';

export const checkValidation = data => {
  let result;
  for (let i = 0; i < apiData.length; i++) {
    if (
      apiData[i].email === data.email &&
      apiData[i].password === data.password
    ) {
      result = { res: apiData[i], status: true };
      break;
    } else {
      result = { res: null, status: false };
    }
  }
  return result;
};

export const handleRolesAction = userData => {
  let validResult;
  if (userData !== undefined) {
    let item = userData[0].roleType;
    for (let i = 0; i < item.length; i++) {
      if (
        item.length === 3 &&
        item[i].role === 'admin' &&
        item[i + 1].role === 'user' &&
        item[i + 2].role === 'manager'
      ) {
        validResult = { res: 'admin' };
        break;
      } else if (
        item.length === 2 &&
        item[i].role === 'admin' &&
        item[i + 1].role === 'user'
      ) {
        validResult = { res: 'admin' };
        break;
      } else if (
        item.length === 2 &&
        item[i].role === 'admin' &&
        item[i + 1].role === 'manager'
      ) {
        validResult = { res: 'admin' };
        break;
      } else if (
        item.length === 2 &&
        item[i].role === 'user' &&
        item[i + 1].role === 'manager'
      ) {
        validResult = { res: 'admin' };
        break;
      } else if (item.length === 1 && item[i].role === 'user') {
        validResult = { res: 'user' };
        break;
      } else if (item.length === 1 && item[i].role === 'admin') {
        validResult = { res: 'admin' };
        break;
      } else if (item.length === 1 && item[i].role === 'manager') {
        validResult = { res: 'admin' };
        break;
      }
    }
  }
  return validResult;
};

export const handleValidation = (email, data) => {
  let res = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email) {
      res = true;
    }
  }
  return res;
};
