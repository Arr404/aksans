import service from "../utils/request";

export default class Caleg {
    static baseGroupURL = '/caleg';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(caleg_id) {
        const res = await service.get(`${baseGroupURL}/${caleg_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async update(caleg_id, data) {
        const res = await service.patch(`${baseGroupURL}/${caleg_id}`, data);
        return res;
    }

    static async delete(caleg_id) {
        const res = await service.delete(`${baseGroupURL}/${caleg_id}`);
        return res;
    }

    static async search(query) {
        const res = await service.get(`${baseGroupURL}?query=${query}`);
        return res;
    }

    static async dapil(dapil_id) {
        const res = await service.get(`${baseGroupURL}?dapil=${dapil_id}`);
        return res;
    }
}