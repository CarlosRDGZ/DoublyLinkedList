class Product {
	/**
	 * Product Constructor
	 * @param {String} code 
	 * @param {String} name 
	 * @param {String} description 
	 * @param {Number} quantity 
	 * @param {Number} cost 
	 */
	constructor (code, name, description, quantity, cost) {
		/**
		 * Autoreference
		 * @type {Product} next
		 */
		this.next = null
		/** @type {Product} previous */
		this.previous = null
		
		// props
		this.code = code
		this.name = name
		this.description = description
		this.quantity = quantity
		this.cost = cost
	}

	toString() {
		return JSON.stringify(this)
	}
}