const restaurant = {
    name: 'Bahandi',
    maxSeats: 75, 
    guestsNow: 0,
    chek: function (party) {
        const seatstLeft = this.maxSeats - this.guestsNow
        return seatstLeft >= party
    },
    setParty: function (people) {
        this.guestsNow = this.guestsNow + people
    },
    removeParty: function (people) {
        this.guestsNow = this.guestsNow - people
    }
}

const restaurant2 = {
    name: 'Bahandi',
    maxSeats: 75,
    guestsNow: 0,
    chek: function (party) {
        const seatstLeft = this.maxSeats - this.guestsNow
        return seatstLeft >= party
    },
    setParty: function (people) {
        this.guestsNow = this.guestsNow + people
    },
    removeParty: function (people) {
        this.guestsNow = this.guestsNow - people
    }
}
restaurant2.setParty(72)
let result = restaurant2.chek(4)
console.log(result)
restaurant2.removeParty(0)
result = restaurant2.chek(4)
console.log(result)

 