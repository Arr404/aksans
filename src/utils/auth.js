const TokenKey = "PAN-JOMBANG";

export function getAccessToken() {
    return localStorage.getItem(TokenKey);
}

export function setAccessToken(token) {
    return localStorage.setItem(TokenKey, token);
}

export function removeAccessToken() {
    return localStorage.removeItem(TokenKey);
}