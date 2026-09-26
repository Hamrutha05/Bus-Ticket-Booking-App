export const Buses = [
  {
    id: 1,
    name: "Chennai Express",
    source: "Chennai",
    destination: "Madurai",
    departureTime: "06:00 AM",
    arrivalTime: "12:30 PM",
    price: "₹600",
    availableDates: [
      "2026-09-25",
      "2026-09-26",
      "2026-09-27",
      "2026-09-28"
    ],
    busType: "Sleeper",
    numberOfSeats: 36,
    seatLayout: {
      lower: {
        first: [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
          [11, 12],
          [13, 14],
          [15, 16],
          [17, 18]
        ],
        second: []
      },
      upper: {
        first: [
          [19, 20],
          [21, 22],
          [23, 24],
          [25, 26],
          [27, 28],
          [29, 30],
          [31, 32],
          [33, 34],
          [35, 36]
        ],
        second: []
      }
    },

    availableSeats: [
      "L1",
      "L4",
      "L6",
      "L10",
      "L14",
      "L17",
      "U20",
      "U23",
      "U28",
      "U33"
    ]
  },

  {
    id: 2,
    name: "Tamil Nadu Travels",
    source: "Chennai",
    destination: "Coimbatore",
    departureTime: "09:00 PM",
    arrivalTime: "05:30 AM",
    price: "₹750",
    availableDates: [
      "2026-09-25",
      "2026-09-26",
      "2026-09-27",
      "2026-09-28"
    ],
    busType: "3x2 Seater",
    numberOfSeats: 40,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3],
          [6, 7, 8],
          [11, 12, 13],
          [16, 17, 18],
          [21, 22, 23],
          [26, 27, 28],
          [31, 32, 33],
          [36, 37, 38]
        ],

        second: [
          4, 5,
          9, 10,
          14, 15,
          19, 20,
          24, 25,
          29, 30,
          34, 35,
          39, 40
        ]
      },

      upper: {
        first: [],
        second: []
      }
    },

    availableSeats: [
      "L2",
      "L5",
      "L8",
      "L12",
      "L17",
      "L23",
      "L26",
      "L29",
      "L34",
      "L40"
    ]
  },

  {
    id: 3,
    name: "Kumari Travels",
    source: "Nagercoil",
    destination: "Chennai",
    departureTime: "07:30 PM",
    arrivalTime: "06:00 AM",
    price: "₹900",
    availableDates: [
      "2026-09-25",
      "2026-09-26",
      "2026-09-27",
      "2026-09-28"
    ],
    busType: "3x2 Seater",
    numberOfSeats: 40,
    seatLayout: {
      lower: {
        first: [
          [1, 2, 3],
          [6, 7, 8],
          [11, 12, 13],
          [16, 17, 18],
          [21, 22, 23],
          [26, 27, 28],
          [31, 32, 33],
          [36, 37, 38]
        ],

        second: [
          4, 5,
          9, 10,
          14, 15,
          19, 20,
          24, 25,
          29, 30,
          34, 35,
          39, 40
        ]
      },

      upper: {
        first: [],
        second: []
      }
    },

    availableSeats: [
      "L1",
      "L4",
      "L7",
      "L11",
      "L15",
      "L21",
      "L24",
      "L28",
      "L35",
      "L39"
    ]
  },

  {
    id: 4,
    name: "Kanyakumari Express",
    source: "Nagercoil",
    destination: "Madurai",
    departureTime: "08:00 AM",
    arrivalTime: "02:30 PM",
    price: "₹550",
    availableDates: [
      "2026-09-25",
      "2026-09-26",
      "2026-09-27",
      "2026-09-28"
    ],
    busType: "3x2 Seater",
    numberOfSeats: 40,

    seatLayout: {
      lower: {
        first: [
          [1, 2, 3],
          [6, 7, 8],
          [11, 12, 13],
          [16, 17, 18],
          [21, 22, 23],
          [26, 27, 28],
          [31, 32, 33],
          [36, 37, 38]
        ],

        second: [
          4, 5,
          9, 10,
          14, 15,
          19, 20,
          24, 25,
          29, 30,
          34, 35,
          39, 40
        ]
      },

      upper: {
        first: [],
        second: []
      }
    },

    availableSeats: [
      "L1",
      "L5",
      "L8",
      "L12",
      "L16",
      "L22",
      "L27",
      "L30",
      "L35",
      "L40"
    ]
  },

  {
    id: 5,
    name: "Tamil Express",
    source: "Chennai",
    destination: "Trichy",
    departureTime: "10:00 AM",
    arrivalTime: "03:30 PM",
    price: "₹500",
    availableDates: [
      "2026-09-25",
      "2026-09-26",
      "2026-09-27",
      "2026-09-28"
    ],
    busType: "4x2 Seater",
    numberOfSeats: 48,

    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4],
          [7, 8, 9, 10],
          [13, 14, 15, 16],
          [19, 20, 21, 22],
          [25, 26, 27, 28],
          [31, 32, 33, 34],
          [37, 38, 39, 40],
          [43, 44, 45, 46]
        ],

        second: [
          5, 6,
          11, 12,
          17, 18,
          23, 24,
          29, 30,
          35, 36,
          41, 42,
          47, 48
        ]
      },

      upper: {
        first: [],
        second: []
      }
    },

    availableSeats: [
      "L2",
      "L6",
      "L9",
      "L15",
      "L18",
      "L21",
      "L26",
      "L30",
      "L35",
      "L42"
    ]
  }
];

export const locations = [
  "Chennai",
  "Nagercoil",
  "Coimbatore",
  "Trichy",
  "Madurai",
  "Salem"
];