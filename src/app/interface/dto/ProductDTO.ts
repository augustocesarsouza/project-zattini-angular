import { User } from '../user';
import { ProductColorDTO } from './ProductColorDTO';

export interface ProductDTO {
  id: string | null;
  title: string;
  price: number;
  percentageDiscount: number;
  description: string;
  category: string;
  sizesAvailable: string[];
  additionalInformation: Record<string, unknown>;
  productColorDTOs: ProductColorDTO[];
}
