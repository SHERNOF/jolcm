import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      id: "1",
      userName: "shernof",
      email: "shernof@gmail.com",
      name: "Sherwin",
      joined: new Date(),
      isAdmin: true,
      password: bcrypt.hashSync("test"),
    },
    {
      id: 2,
      userName: "jedi",
      name: "Jedidiah",
      email: "jedi@gmail.com",
      password: bcrypt.hashSync("test1"),
      joined: new Date(),
      isAdmin: false,
    },
    {
      id: 3,
      userName: "angie",
      name: "Angelyn",
      email: "angie@gmail.com",
      password: bcrypt.hashSync("test2"),
      joined: new Date(),
      isAdmin: false,
    },
  ],
  churchEvents: [
    {
      eventNumber: 13,
      eventTitle: "Mid-Year Celebration 2022",
      pictures: ["../wb/11.jpg", "../wb/7.jpg", "../wb/14.jpg", "../wb/15.jpg"],
    },
    {
      eventNumber: 14,
      eventTitle: "Christmas Celebration 2022",
      pictures: [
        "../wb/1.jpg",
        "../wb/2.jpg",
        "../wb/3.jpg",
        "../wb/4.jpg",
        "../wb/5.jpg",
      ],
    },
    {
      eventNumber: 15,
      eventTitle: "New Year Celebration 2022",
      pictures: [
        "../wb/6.jpg",
        "../wb/7.jpg",
        "../wb/8.jpg",
        "../wb/9.jpg",
        "../wb/10.jpg",
      ],
    },
    {
      eventNumber: 16,
      eventTitle: "Baptism 2023 Year Celebration 2022",
      pictures: [
        "../wb/9.jpg",
        "../wb/7.jpg",
        "../wb/8.jpg",
        "../wb/6.jpg",
        "../wb/10.jpg",
      ],
    },
    {
      eventNumber: 17,
      eventTitle: "JOL Anniversary",
      pictures: [
        "../wb/10.jpg",
        "../wb/7.jpg",
        "../wb/8.jpg",
        "../wb/9.jpg",
        "../wb/6.jpg",
      ],
    },
  ],
};
export default data;
