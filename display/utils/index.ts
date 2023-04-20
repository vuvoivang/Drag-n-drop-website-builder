export const mappingDocumentsToCollections = (collections, documents) => {
  const mappingDocumentsByCollectionsIds = documents.reduce((acc, document) => {
    const { collectionId } = document;
    if (!acc[collectionId]) {
      acc[collectionId] = [];
    }
    acc[collectionId].push(document);
    return acc;
  }, {});
  return collections.map((collection) => {
    const { id } = collection;
    return {
      ...collection,
      documents: mappingDocumentsByCollectionsIds[id],
    };
  });
};

export const getNormalizeStringForSearch = (str) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
};
