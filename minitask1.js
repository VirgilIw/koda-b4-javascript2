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

// karna pakai spread operator jadi semua isi nya jadi object baru
// didalam object Profile ada name, age, skills, education

let skills = extraInfo.skills;

let data = [...skills, "swimming", "basket"];

console.log(data);
