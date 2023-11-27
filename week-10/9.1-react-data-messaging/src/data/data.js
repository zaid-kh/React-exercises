export const importedDataObj = {
  data: [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ],
  getNames() {
    return this.data.map((person) => person.name);
  },
  getBornBefore(year) {
    return this.data.filter(
      (person) => Number.parseInt(person.birthday.split("-")[2]) < year
    );
  },
};
