import { type SchemaTypeDefinition } from 'sanity'
import collection from './collection';
import article from './article';
import shop from './shop';
import Offers from './Offers';
import ProductReviews from './ProductReviews';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collection, article, shop, Offers, ProductReviews],
}
