let object = {
  str: [
    "el",
    "vil",
    "test",
    "bum",
    [
      "5",
      "6",
      {
        man: [
          {
            the: {
              name: {
                of: {
                  us: "Koda",
                },
              },
            },
          },
        ],
      },
    ],
  ],
};
const {
  str: [
    a,
    b,
    c,
    d,
    [
      _,
      __,
      {
        man: [
          {
            the: {
              name: {
                of: { us },
              },
            },
          },
        ],
      },
    ],
  ],
} = object;

console.log(us);
