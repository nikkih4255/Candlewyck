export const HOTEL = [
  {
    Id: 0,
    Title: "Deluxe Hotel Rooms",
    Info: "Our hotel rooms have either a king bed or 2 queen beds and are larger than most hotel rooms. They have a mini kitchen with a small refrigerator, coffee maker, microwave as well as a flat screen TV and satellite TV. They also have a patio or deck which overlooks a greenbelt area and located near our park.",
    Includes: [
      "Deck or patio",
      "Close to grills",
      "Close to park",
      "Small refrigerator",
      "Microwave",
      "Coffee maker",
      "Satellite TV",
      "Linens",
      "King room sleeps 2",
      "Queen room sleeps 4",
    ],
    Carousels: [
      {
        Id: 0,
        Title: "",
        Images: [
          "/hotel/ext_hotel.jpg",
          "/hotel/hotel1.jpg",
          "/hotel/hotel2.jpg",
          "/hotel/hotel3.jpg",
          "/hotel/hotel4.jpg",
          "/hotel/hotel5.jpg",
          "/hotel/hotel6.jpg",
        ],
      },
    ],
    Rates: [
      {
        Id: "0",
        Header: "On season room rates",
        Body: {
          Season: "(March, April, May, June, August & September)",
          Price: ["1-6 Nights: $119", "7+ Nights: $100"],
        },
      },
      {
        Id: "1",
        Header: "Peak season room rates",
        Body: {
          Season: "(July)",
          Price: ["1-6 Nights: $129", "7+ Nights: $115"],
        },
      },
      {
        Id: "2",
        Header: "Off season",
        Body: {
          Season: "(October to February)",
          Price: ["1-2 Nights: $97", "3-6 Nights: $72", "7+ Nights: $65"],
        },
      },
    ],
  },
];
