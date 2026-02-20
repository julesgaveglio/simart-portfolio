import {StructureBuilder} from 'sanity/desk'

// https://www.sanity.io/docs/structure-builder-reference
export const structure = (S: StructureBuilder) =>
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
        .child(S.documentTypeList('contact'))
    ])
