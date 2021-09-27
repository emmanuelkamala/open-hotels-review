# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

hotels = Hotel.create([
  {
    name: "Kilimanjaro Kempiski Hotel",
    image_url: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/09/07/1625/Hyatt-Regency-Dar-es-Salaam-The-Kilimanjaro-P087-Exterior-Evening.jpg/Hyatt-Regency-Dar-es-Salaam-The-Kilimanjaro-P087-Exterior-Evening.16x9.jpg?imwidth=1920"
  },
  {
    name: "Seacliff Hotel",
    image_url: "https://images.cvent.com/CSN/adf7d01d-b77e-4e62-92f1-26756a369c28/images/b4ea4849e50146279929c608787d7363_LARGE!_!aaf98f6d449fed87b8d24f85fee609f7.jpg"
  },
  {
    name: "Ramada Hotel",
    image_url: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/34/91/3491296_v2.jpeg"
  },
  {
    name: "WhiteSands Beach Hotel",
    image_url: "https://www.hotelwhitesands.com/assets/images/whitesands2.jpg"
  },
  {
    name: "Golden Tulip Hotel",
    image_url: "https://media.iceportal.com/25546/photos/71337499_XL.jpg"
  },
  {
    name: "Jangwani SeaBreeze Hotel",
    image_url: "https://pix10.agoda.net/hotelImages/487782/-1/dfdeb609604b56af5022bdf2297247e2.jpg?s=1024x768"
  },
  {
    name: "Kunduchi Beach - Ledger Plaza Hotel",
    image_url: "http://images.ntmllc.com/v4/Hotel/421/421510/421510_EXT_ZB800B.JPG"
  },
  {
    name: "Serena Hotel",
    image_url: "https://images.cvent.com/CSN/2c491a49-655a-4bbc-b8ec-61067a1d89cf/images/09f6d3d5793944fdbb8a45eb38217f10_LARGE!_!d47b1ca5712f24215e54c04c0141330e.jpg"
  },
])

reviews = Review.create([
  {
    title: "Great hotel",
    description: "I have a lovely time",
    score: 5,
    hotel: hotels.first
  },
  {
    title: "Bad hotel",
    description: "I have a bad time",
    score: 1,
    hotel: hotels.first
  },
])
