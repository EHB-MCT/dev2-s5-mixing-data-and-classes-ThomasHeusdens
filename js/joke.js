export default class joke {
	constructor(setup, delivery) {
		this.setup = setup;
		this.delivery = delivery;
	}
	get htmlString() {
		return `
        <h2>${this.setup}</h2>
        <h3>${this.delivery}</h3>
        `;
	}
}

const myFirstJoke = new joke("Whats the object - oriented way to become wealthy?", "Inheritance");
