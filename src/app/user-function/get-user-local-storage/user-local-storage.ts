import CryptoJS from 'crypto-js';
import { ResultGetUserFromLocalStorage } from '../../interface/user-local-storage/result-get-user-from-local-storage';
import { environment } from '../../../environments/environment';
import { User } from '../../interface/user';
import { ResultSetUserInLocalStorage } from '../../interface/user-local-storage/result-set-user-in-local-storage';

export const UserLocalStorage = (): ResultGetUserFromLocalStorage => {
  const ResultGetUserFromLocalStorage: ResultGetUserFromLocalStorage = {
    isNullUserLocalStorage: false,
    user: null,
  };

  if (typeof window === 'undefined') return ResultGetUserFromLocalStorage;
  const userLocalStorage = localStorage.getItem('user');

  if (userLocalStorage) {
    // let secretKey = import.meta.env.VITE__APP_SECRET_KEY_USER;
    const secretKey = environment.KEY_USER ?? environment.KEY_USER;

    if (secretKey === undefined) {
      return ResultGetUserFromLocalStorage;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(userLocalStorage, secretKey);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

      const decryptedData = JSON.parse(decryptedString);
      ResultGetUserFromLocalStorage.user = decryptedData;

      return ResultGetUserFromLocalStorage;
    } catch (error) {
      console.error('Erro ao converter os dados descriptografados:', error);
      return ResultGetUserFromLocalStorage;
    }
  } else {
    ResultGetUserFromLocalStorage.isNullUserLocalStorage = true;
    return ResultGetUserFromLocalStorage;
  }
};

export const SetUserLocalStorage = (data: User): ResultSetUserInLocalStorage => {
  const objResult: ResultSetUserInLocalStorage = {
    isSetUserOk: false,
    encryptedUser: '',
  };

  try {
    const secretKey = environment.KEY_USER ?? environment.KEY_USER;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    localStorage.setItem('user', encrypted);

    if (encrypted.length <= 0) return objResult;

    objResult.encryptedUser = encrypted;
    objResult.isSetUserOk = true;

    return objResult;
  } catch (error) {
    return objResult;
  }
};
