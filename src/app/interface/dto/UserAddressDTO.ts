import { User } from '../user';

export interface UserAddressDTO {
  id: string | null;
  cep: string;
  typeAddress: string;
  address: string;
  number: number;
  complement: string;
  neighborhood: string;
  state: string;
  city: string;
  referencePoint: string;
  userId: string | null;
  userDTO: User | null;
}
