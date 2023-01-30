export function actions<T>(type: string) {
    return (payload: T) => {
        return { type, payload }
    }
}