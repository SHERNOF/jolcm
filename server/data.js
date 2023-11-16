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
      eventTitle: "Mens Fellowship",
      pictures: [
        "../mf/10.jpg",
        "../mf/7.jpg",
        "../mf/8.jpg",
        "../mf/9.jpg",
        "../mf/6.jpg",
        "../mf/5.jpg",
        "../mf/4.jpg",
        "../mf/2.jpg",
        "../mf/1.jpg",
      ],
    },
    {
      eventNumber: 18,
      eventTitle: "Ladies Ministry",
      pictures: [
        "../lm/11.jpg",
        "../lm/12.jpg",
        "../lm/13.jpg",
        "../lm/18.jpg",
        "../lm/19.jpg",
        "../lm/20.jpg",

        "../lm/22.jpg",
        "../lm/23.jpg",
        "../lm/24.jpg",
        "../lm/25.jpg",
        "../lm/26.jpg",
        "../lm/27.png",
        "../lm/28.png",
      ],
    },
  ],
  testimonials: [
    {
      testimonialNumber: 1,
      testimony: "Let's worship Jesus our Lord",
      name: "Jedi",
    },
  ],
  wows:[
    {
      verse:'John 1:1-4',
      wow:'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men.',
      by:'Pastor Bong'
    },
    {
      verse:'Philippians 4:13',
      wow:'I can do all things through Christ which strengtheneth me.',
      by:'Pastor Bong'
    },
  ]
};
export default data;
