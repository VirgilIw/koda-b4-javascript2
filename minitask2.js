const bio = {
  name: "john O'Connor",
  age: 30,
};

const extraInfo = {
  skills: ["Web Programming", "Painting"],
  education: [
    {
      name: "Smp 1 Denpasar",
      year: 2012,
    },
  ],
};

const profile = {
  ...bio,
  ...extraInfo,
};

// destruct painting
// destruct education.name indeks 0

// painting
const {
  skills: [_, warna],
} = profile;

const {
  education: [{ name }],
} = profile;
console.log(warna);
console.log(name);
