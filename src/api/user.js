import service from "../utils/request";

export default class Partai {
    static baseGroupURL = '/user';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(user_id) {
        const res = await service.get(`${baseGroupURL}/${user_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async delete(user_id) {
        const res = await service.delete(`${baseGroupURL}/${user_id}`);
        return res;
    }

    static async update(user_id, data) {
        const res = await service.patch(`${baseGroupURL}/${user_id}`, data);
        return res;
    }
}