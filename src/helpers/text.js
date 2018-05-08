export const excerpt = (value, length) => {
  if (value) {
    if (value.length > length) {
      return `${value.slice(0, length)}...`;
    }

    return value;
  }
};
