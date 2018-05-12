class List {
	/**
	 * Regresa una lista
	 * @constructor
	 */
	constructor() {
		/** @type {Product} */
		this.first = null
		/** @type {Product} */
		this.last = null
	}

	/**
	 * Agrega un producto al final de la lista
	 * @param {Product} node 
	 */
	add(node) {
		if (this.first === null)
			this.first = this.last = node

		else if (node.code < this.first.code) {
			node.next = this.first
			this.first.previous = node
			this.first = node

		} else if (node.code > this.last.code) {
			this.last.next = node
			node.previous = this.last
			this.last = node

		} else if (node.code === this.first.code && this.first === this.last) {
			this.last.next = node
			node.previous = this.last
			ultimo = node

		} else {
			let temp = this.first.next
			while (node.code > temp.code)
				temp = temp.next
			temp.previous.next = node
			node.next = temp
			node.previous = temp.previous
			temp.previous = node
		}
	}

	/**
	 * Busca un produto por su code en la lista
	 * @param {String} code
	 * @returns {Product} null si no se encuentra
	 */
	search(code) {
		let temp = this.first
		while (temp !== null) {
			if (temp.code === code)
				return temp
			temp = temp.next
		}
		return null;
	}

	/**
	 * Borra el producto cuyo code coicida con
	 * el que se pase como argumento
	 * @param {String} code
	 */
	delete(code) {
		if (this.first !== null) {
			if (this.first.code === code && this.first === this.last)
				this.first = this.last = null
			if (this.first === this.last) {
				if (this.first.code === code) {
					let second = this.first.next
					second.previous = null
					this.first.next = null
					this.first = second
				}
				else if (this.last.code === code) {
					let prevLast = this.last.previous
					prevLast.next = null
					this.last.previous = null
					this.last = prevLast
				}
				else {
					let temp = this.first.next;
					while (temp !== this.last) {
						if (temp.code === code) {
							temp.next.previous = temp.previous
							temp.previous.next = temp.next
							return
						}
						temp = temp.next
					}
				}
			}
		}
	}

	/** Elimina el ultimo elemento de la lista */
	deleteLast() {
		if (this.first !== null) {
			if (this.first === this.last) {
				this.first = this.last = null
			}
			else {
				let prevLast = this.last.previous
				prevLast.next = null
				this.last.previous = null
				this.last = prevLast
			}
		}
	}

	/** Elimina el primer elemento de la lista */
	deleteFirst() {
		if (this.first !== null) {
			if (this.first === this.last) {
				this.first = this.last = null
				return
			}
			else {
				let second = this.first.next
				second.previous = null
				this.first.next = null
				this.first = second
			}
		}
	}

	reverse() {
		if (this.first !== this.last) {
			let temp = this.first;
			while (temp !== null) {
				let next = temp.next;
				temp.next = temp.previous;
				temp.previous = next;
				temp = next;
			}
			temp = this.first;
			this.first = this.last;
			this.last = temp;
		}
	}

	/**
	 * Lista los elementos del ultimo al primero
	 * @returns {String}
	 */
	toReverseArray() {
		let array = []
		let temp = this.first
		while (temp != null) {
			array.unshift(temp)
			temp = temp.next
		}
		return array
	}

	toArray() {
		let array = []
		let temp = this.first
		while (temp != null) {
			array.push(temp)
			temp = temp.next
		}
		return array
	}
}