// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstFavoriteRestaurantData = [
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
]

const firstFavoriteColorData = ["Yellow", "Pink", "White", "Purple"]

const firstFavoriteRestaurant = new Set()
while (firstFavoriteRestaurantData.length > 0) {
  firstFavoriteRestaurant.add(firstFavoriteRestaurantData.shift())
}
const firstFavoriteColor = new Set()
while (firstFavoriteColorData.length > 0) {
  firstFavoriteColor.add(firstFavoriteColorData.shift())
}

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: firstFavoriteColor,
  isHavePet: "Yes",
  education: JSON.stringify([
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Tangerang",
    },
  ]),
  favoriteRestaurant: firstFavoriteRestaurant,
}

const secondFavoriteRestaurantData = [
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
]

const secondFavoriteColorData = ["Blue", "Black", "Gray"]

const secondFavoriteRestaurant = new Set()
while (secondFavoriteRestaurantData.length > 0) {
  secondFavoriteRestaurant.add(secondFavoriteRestaurantData.shift())
}

const secondFavoriteColor = new Set()
while (secondFavoriteColorData.length > 0) {
  secondFavoriteColor.add(secondFavoriteColorData.shift())
}

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: secondFavoriteColor,
  isHavePet: "No",
  education: JSON.stringify([
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
    },
  ]),
  favoriteRestaurant: secondFavoriteRestaurant,
}

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = []
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size)
  console.log(users)
}

main()

module.exports = {
  users,
}
