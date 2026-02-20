import { type SchemaTypeDefinition } from 'sanity'
import work from './work'
import series from './series'
import about from './about'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work, series, about, contact],
}
