import Cookies from "js-cookie";

export const COOKIES_TYPE = {
    LIST_PRODUCT: 'LIST_PRODUCT',
}

export function getCookies<T>(name: string): T | undefined {
    const value = Cookies.get(name);
    if (value === undefined) {
        return undefined;
    }
    return JSON.parse(value);
}

export function setCookies<T>(name: string, value: T) {
    const expires = new Date(new Date().getTime() + 60 * 1000);
    Cookies.set(name, JSON.stringify(value), {expires});
}