import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Users information",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  type: "line",
  datasets: [
    {
      label: "Sign Up",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: "#FF9D69",
    },
    {
      label: "Logins",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
    {
      label: "Reservations",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: "#162e52",
    },
  ],
  labels,
};
