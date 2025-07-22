import { User } from '../user';

export interface CreateUserDTO {
  tokenIsValid: boolean;
  userDTO: User;
}
