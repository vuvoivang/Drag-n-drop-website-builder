import { WithThemeAndDatabase } from "@libs/utils";
import { REMOVED_DYNAMIC_DATA_TEXT_INFORM } from "display/raw-components/constant";

export const getDeepValueProps = <T>(props: WithThemeAndDatabase<T>) => {
    const propsObject = props;
    const handleGetDeepProps = (props) => {
      const propsObject = props;
      Object.keys(propsObject).forEach((key) => {
        if(key === 'children') return;
        const currentValue = propsObject[key];
        if (typeof currentValue === "object" && currentValue !== null) {
          // is not null object
          if (currentValue.type === "theme") {
            propsObject[key] = propsObject[key].value;
          } else {
            getDeepValueProps(propsObject[key]);
          }
        } else return;
      });
      return propsObject;
    }
    return handleGetDeepProps(propsObject) as T;
}
export const handleInputAppTitleCase = (e, MAX_LENGTH = 50) => {
  // transform capitalize first letter of each word
  let newValue = e.target.value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (newValue.length > MAX_LENGTH) {
    newValue = newValue.slice(0, MAX_LENGTH);
  }

  e.target.value = newValue;
};
// export const preprocessingNodes = (nodes: Node[]) => {
//   const deepClonedNodes: Node[] = JSON.parse(JSON.stringify(nodes));
//   deepClonedNodes.forEach((node) => {
//     clearValueThemeAndDynamicData(node.data.props);
//   })
//   return deepClonedNodes;
// }

export const clearValueThemeAndDynamicData = (props) => {
  const clonedNodeProps = JSON.parse(JSON.stringify(props));
  Object.keys(clonedNodeProps).forEach((key) => {
    if(key === 'children') {
      if(clonedNodeProps.children?.length === 0) delete clonedNodeProps[key];
      return;
    };
    const currentValue = clonedNodeProps[key];
    if (typeof currentValue === "object" && currentValue !== null) {
      // is not null object
      if (currentValue.type === "dynamic-data" || currentValue.type === "theme") {
        delete clonedNodeProps[key].value;
      } else {
        clearValueThemeAndDynamicData(clonedNodeProps[key]);
      }
    } else return;
  });
  
  return clonedNodeProps;
}

export const getValuesFromReferencedPropsObject = (propsObject, database, theme) => {
  Object.keys(propsObject).forEach((key) => {
    const currentValue = propsObject[key];

    if (typeof currentValue === "object" && currentValue !== null) {
      // is not null object
      if (currentValue.type === "dynamic-data") {
        propsObject[key] = database?.[currentValue.collectionId]?.documents?.[currentValue.documentId]?.data?.[currentValue.key] || REMOVED_DYNAMIC_DATA_TEXT_INFORM;
      } else if (currentValue.type === "theme") {
        // get theme value
        propsObject[key] = theme[currentValue.id].value;
      } else {
        getValuesFromReferencedPropsObject(propsObject[key], database, theme);
      }
    }
  });
};
export const mappingDocumentsToCollections = (collections, documents) => {
  const mappingDocumentsByCollectionsIds = documents.reduce((acc, document) => {
    const { collectionId } = document;
    if (!acc[collectionId]) {
      acc[collectionId] = {};
    }
    acc[collectionId][document.id] = (document);
    return acc;
  }, {});
  return collections.reduce((res, collection) => {
    const { id } = collection;
    return {
      ...res,
      [id]: {
        ...collection,
        documents: mappingDocumentsByCollectionsIds[id],
      },
    };
  }, {});
};