import { User } from '../user';
import { ProductDTO } from './ProductDTO';

export interface ProductColorDTO {
  id: string | null;
  title: string;
  imagens: string;
  productId: string;
  productDTO: ProductDTO;
}
