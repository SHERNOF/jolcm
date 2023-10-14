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
      eventNumber: 15,
      eventTitle: "Filipino Fiesta 2023",
      pictures: [
        "../fiesta/1.jpeg",
        "../fiesta/2.jpeg",
        "../fiesta/3.jpeg",
        "../fiesta/4.jpeg",
        "../fiesta/5.jpeg",
        "../fiesta/6.jpeg",
        "../fiesta/7.jpeg",
        "../fiesta/8.jpeg",
        "../fiesta/9.jpeg",
        "../fiesta/10.jpeg",
        "../fiesta/11.jpeg",
        "../fiesta/12.jpeg",
        "../fiesta/13.jpeg",
        "../fiesta/14.jpeg",
        "../fiesta/15.jpeg",
        "../fiesta/16.jpeg",
        "../fiesta/17.jpeg",
        "../fiesta/18.jpeg",
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
    {
      eventNumber: 18,
      eventTitle: "Ladies Ministry",
      pictures: ["../lm/1.png", "../lm/2.png"],
    },
  ],
  testimonials: [
    {
      testimonialNumber: 1,
      testimony: "Let's worship Jesus our Lord",
      name: "Jedi",
    },
  ],
};
export default data;
