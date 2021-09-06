const hotelName = document.getElementById('hp_hotel_name').innerText.trim()

const hotelStars = document.querySelector('.c-accommodation-classification-rating ').children[0].children[0].getAttribute('aria-label')[0] + ' stars'

const hotelFacilities = Array.from(document.querySelectorAll('div.important_facility'))
.map(it => it.innerText)
.map(it => it.replace(/\n/g, ''))
.map(it => it.trim())
.filter((item, index, array) => array.indexOf(item) === index)

const hotelRooms = Array.from(document.querySelectorAll('div.room-info'))
.map(it => it.innerText)
.map(it => it.replace(/\n/g, ''))
.map(it => it.trim())

const hotelInfo = {
  name: hotelName,
	stars: hotelStars,
  facilities: hotelFacilities,
  rooms: hotelRooms,
}

console.log(hotelInfo)
