export function Counter(number: number) {
    let count = number;
    return () => {
        return ++count;
    }
}