import service from '../utils/request';

export default class Auth {
    static async loginWithEmail(email, password) {
        const res = await service.post('/login', {
            email: email,
            password: password
        });
        return res;
    }

    static async loginWithGoogle(credential) {
        const res = await service.post('/loginGoogle', {
            google_credential: credential
        });
        return res;
    }

    static async checkToken(token) {
        const res = await service.post('/checkToken', {
            token: token
        });
        return res;
    }

    static async logout() {
        const res = await service.post('/logout');
        return res;
    }

    static async getLogin() {
        const res = await service.get('/login');
        return res;
    }
}