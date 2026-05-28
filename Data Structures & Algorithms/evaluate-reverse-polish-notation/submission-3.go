
type Stack struct {
    s []int
}

func NewStack() Stack {
    return Stack{
        s: make([]int, 0),
    }
}

func (stack *Stack) Pop() int {
    i := stack.s[len(stack.s) - 1]
    stack.s = stack.s[:len(stack.s) - 1]
    return i
}

func (stack *Stack) Push(i int) {
    stack.s = append(stack.s, i)
}

func evalRPN(tokens []string) int {
    stack := NewStack()

    for _, token := range tokens {
        if token == "-" || token == "+" || token == "*" || token == "/" {
            a, b := stack.Pop(), stack.Pop();

            switch token {
                case "-": stack.Push(b - a);
                case "+": stack.Push(b + a);
                case "*": stack.Push(b * a);
                case "/": stack.Push(b / a);
            }
        } else {
            n, _ := strconv.Atoi(token)
            stack.Push(n)
        }
    }
    return stack.Pop()
}
