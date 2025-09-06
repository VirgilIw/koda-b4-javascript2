// mengoutputkan painting

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
  ...{
    skills: [...extraInfo.skills, "soccer"],
  },
};

// karna pakai spread operator jadi semua isi nya jadi object baru
// didalam object Profile ada name, age, skills, education

console.log(profile.skills);

console.log(profile.skills[1]);
