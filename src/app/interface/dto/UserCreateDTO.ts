import { UserAddressDTO } from './UserAddressDTO';

export interface UserCreateDTO {
  name: string;
  lastName: string;
  gender: string;
  email: string;
  birthDate: string;
  cpf: string;
  cellPhone: string;
  password: string;
  userImageBase64: string;
  userAddressDTO: UserAddressDTO;
}
