import { type SchemaTypeDefinition } from 'sanity'
import collection from './collection';
import article from './article';
import shop from './shop';
import Offers from './Offers';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collection, article, shop, Offers],
}
