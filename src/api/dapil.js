import service from "../utils/request";

export default class Dapil {
    static baseGroupURL = '/dapil';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(dapil_id) {
        const res = await service.get(`${baseGroupURL}/${dapil_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async update(dapil_id, data) {
        const res = await service.patch(`${baseGroupURL}/${dapil_id}`, data);
        return res;
    }

    static async delete(dapil_id) {
        const res = await service.delete(`${baseGroupURL}/${dapil_id}`);
        return res;
    }
}