interface IAddress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: {
        lat: number,
        lng: number
    },
    country: string
}

export default interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    ip: string,
    address: IAddress,
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        department: string,
        name: string,
        title: string,
        address: IAddress
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: string
}