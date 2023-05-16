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
export const handleInputAppTitleCase = (e, MAX_LENGTH) => {
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