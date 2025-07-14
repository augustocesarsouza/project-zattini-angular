import { User } from '../user';

export interface ResultGetUserFromLocalStorage {
  isNullUserLocalStorage: boolean;
  user: User | null;
}
