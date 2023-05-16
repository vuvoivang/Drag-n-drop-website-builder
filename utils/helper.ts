export const getDeepValueProps = (propsObject) => {
    // const propsObject = {...props};
    Object.keys(propsObject).forEach((key) => {
        if(key === 'children') return;
        const currentValue = propsObject[key];
        if (typeof currentValue === "object" && currentValue !== null) {
          // is not null object
          if (currentValue.type === "dynamic-data" || currentValue.type === "theme") {
            propsObject[key] = propsObject[key].value;
          } else {
            getDeepValueProps(propsObject[key]);
          }
        } else return;
      });
    return propsObject;
}
