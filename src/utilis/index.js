export const Buses = [
  {
    id: 1,
    name: "Chennai Express",
    source: "Chennai",
    destination: "Madurai",
    departureTime: "06:00 AM",
    arrivalTime: "12:30 PM",
    price: "₹600",
    availableDates: ["2026-09-25", "2026-09-26", "2026-09-27", "2026-09-28"],
    busType: "Sleeper",
    numberOfSeats: 36,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
        ],
        second: [13, 14, 15, 16, 17, 18],
      },
      upper: {
        first: [
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
        ],
        second: [31, 32, 33, 34, 35, 36],
      },
    },
    availableSeats: ["L1", "L4", "L6", "L10", "L16", "U19", "U24", "U30", "U33"],
  },

  {
    id: 2,
    name: "Tamil Nadu Travels",
    source: "Chennai",
    destination: "Coimbatore",
    departureTime: "09:00 PM",
    arrivalTime: "05:30 AM",
    price: "₹750",
    availableDates: ["2026-09-25", "2026-09-26", "2026-09-27", "2026-09-28"],
    busType: "Seater",
    numberOfSeats: 40,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
        ],
        second: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      },
      upper: {
        first: [
          [31, 32, 33, 34, 35],
          [36, 37, 38, 39, 40],
        ],
        second: [],
      },
    },
    availableSeats: ["L2", "L5", "L8", "L12", "L17", "L23", "L26", "L29", "U31", "U36"],
  },

  {
    id: 3,
    name: "Kumari Travels",
    source: "Nagercoil",
    destination: "Chennai",
    departureTime: "07:30 PM",
    arrivalTime: "06:00 AM",
    price: "₹900",
    availableDates: ["2026-09-25", "2026-09-26", "2026-09-27", "2026-09-28"],
    busType: "Seater",
    numberOfSeats: 40,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
        ],
        second: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      },
      upper: {
        first: [
          [31, 32, 33, 34, 35],
          [36, 37, 38, 39, 40],
        ],
        second: [],
      },
    },
    availableSeats: ["L1", "L4", "L7", "L11", "L15", "L21", "L24", "L28", "U32", "U37"],
  },
];
export const locations = [
    "Chennai",
    "Coimbatore",
    "Trichy",
    "Madurai",
    "Salem",
];