import service from "../utils/request";

export default class Kecamatan {
    static baseGroupURL = '/pileg';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(pileg_id) {
        const res = await service.get(`${baseGroupURL}/${pileg_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async delete(pileg_id) {
        const res = await service.delete(`${baseGroupURL}/${pileg_id}`);
        return res;
    }

    static async update(pileg_id, data) {
        const res = await service.patch(`${baseGroupURL}/${pileg_id}`, data);
        return res;
    }
}