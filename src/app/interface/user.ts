export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  gender: string;
  token: string;
  confirmEmail: number;
  userImage: string | null;
}
