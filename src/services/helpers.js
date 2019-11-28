const firstName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const arrayOfCatNames = (categories) => {
  const allCats = [];
  categories.forEach(
    (cat) => {
      if (!allCats.includes(cat.category)) allCats.push(cat.category);
    },
  );

  return allCats;
};

export {
  firstName,
  arrayOfCatNames,
};
