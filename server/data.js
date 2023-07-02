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
      pictures: [
        "https://images.unsplash.com/photo-1505642257289-9f2d7dd73641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVsYm91cm5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "../wb/11.jpg",
        "../wb/12.jpg",
        "../wb/13.jpg",
        "../wb/14.jpg",
        "../wb/15.jpg",
      ],
    },
    {
      eventNumber: 14,
      eventTitle: "Christmas Celebration 2022",
      pictures: [
        "https://images.unsplash.com/photo-1494236472818-d35e50e604cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbGJvdXJuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
        "https://images.unsplash.com/photo-1585217514204-d025f2f1b116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbGJvdXJuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
        "https://images.unsplash.com/photo-1545405197-2964efafb2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbGJvdXJuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "../wb/10.jpg",
        "../wb/7.jpg",
        "../wb/8.jpg",
        "../wb/9.jpg",
        "../wb/6.jpg",
      ],
    },
    {
      eventNumber: 18,
      eventTitle: "JOL Anniversary",
      pictures: [
        "https://images.unsplash.com/photo-1622955149909-cad45bb12200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbGJvdXJuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "../wb/10.jpg",
        "../wb/7.jpg",
        "../wb/8.jpg",
        "../wb/9.jpg",
        "../wb/6.jpg",
      ],
    },
    {
      eventNumber: 19,
      eventTitle: "JOL Anniversary",
      pictures: [
        "https://images.unsplash.com/photo-1558330458-fcebb13ee414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbGJvdXJuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
