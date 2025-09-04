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

const Profile = {
  ...bio,
  ...extraInfo,
};

console.log(Profile.skills[1]);
