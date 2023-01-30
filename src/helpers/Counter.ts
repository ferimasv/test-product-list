export function Counter(n: number) {
    let count = n;
    return () => {
        return ++count;
    }
}