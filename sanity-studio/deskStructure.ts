// deskStructure.ts
import { StructureBuilder } from 'sanity/desk';

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Works')
        .child(S.documentTypeList('work')),
      S.listItem()
        .title('Series')
        .child(S.documentTypeList('series')),
      S.listItem()
        .title('About')
        .child(S.documentTypeList('about')),
      S.listItem()
        .title('Contact')
        .child(S.documentTypeList('contact')),
      // Ajouter d'autres types de documents ici si nécessaire
    ])
