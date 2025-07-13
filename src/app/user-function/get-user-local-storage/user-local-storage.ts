import CryptoJS from 'crypto-js';
import { ResultGetUserFromLocalStorage } from '../../interface/result-get-user-from-local-storage';
import { environment } from '../../../environments/environment';

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
