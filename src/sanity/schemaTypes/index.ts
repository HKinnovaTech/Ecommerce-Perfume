import { type SchemaTypeDefinition } from 'sanity'
import collection from './collection';
import article from './article';
import shop from './shop';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collection, article, shop],
}
