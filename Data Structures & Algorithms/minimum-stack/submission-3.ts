class MinStack {
	minStack: Array<number>
	stack: Array<number>
    constructor() {
		this.minStack = []
		this.stack = []
	}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
		if(this.minStack.length == 0) {
			this.minStack.push(val)
		} else {
			this.minStack.push(Math.min(val, this.minStack.at(-1)))
		}

		this.stack.push(val)
	}

    /**
     * @return {void}
     */
    pop(): void {
		this.stack.pop()
		this.minStack.pop()
	}

    /**
     * @return {number}
     */
    top(): number {
		return this.stack.at(-1)
	}

    /**
     * @return {number}
     */
    getMin(): number {
		return this.minStack.at(-1)
	}
}
