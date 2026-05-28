type MinStack struct {
	minStack []int
	stack []int
}

func Constructor() MinStack {
	minStack := MinStack{make([]int, 0), make([]int, 0)}
	return minStack
}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)
	currMin := this.GetMin()
	if val < currMin {
		this.minStack = append(this.minStack, val)
	} else {
		this.minStack = append(this.minStack, currMin)
	}
	// fmt.Printf("Push %v | stack %v | minStack %v\n", val, this.stack, this.minStack)
}

func (this *MinStack) Pop() {
	if len(this.stack) > 0 {
		this.stack = this.stack[:len(this.stack) - 1]
		this.minStack = this.minStack[:len(this.minStack) - 1]
	}
	// fmt.Printf("Pop | stack %v | minStack %v\n", this.stack, this.minStack)
}

func (this *MinStack) Top() int {
	if len(this.stack) == 0 {
		return 0
	}
	return this.stack[len(this.stack) - 1]
}

func (this *MinStack) GetMin() int {
	if len(this.minStack) == 0 {
		return math.MaxInt
	}
	return this.minStack[len(this.minStack) - 1]
}
