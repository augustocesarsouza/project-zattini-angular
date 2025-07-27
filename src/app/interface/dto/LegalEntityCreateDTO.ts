import { UserAddressDTO } from './UserAddressDTO';

export interface LegalEntityCreateDTO {
  companyName: string;
  tradeName: string;
  cnpj: string;
  municipalRegistration: string;
  stateRegistration: string;
  exempt: boolean;
  email: string;
  corporateCellPhoneNumber: string;
  numberCorporateLandline: string;
  password: string;
  userImageBase64: string;
  userAddressDTO: UserAddressDTO;
}
