import service from "../utils/request";

export default class Partai {
    static baseGroupURL = '/partai';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(partai_id) {
        const res = await service.get(`${baseGroupURL}/${partai_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async delete(partai_id) {
        const res = await service.delete(`${baseGroupURL}/${partai_id}`);
        return res;
    }

    static async update(partai_id, data) {
        const res = await service.patch(`${baseGroupURL}/${partai_id}`, data);
        return res;
    }
}