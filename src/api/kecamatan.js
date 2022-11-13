import service from "../utils/request";

export default class Kecamatan {
    static baseGroupURL = '/kecamatan';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(kecamatan_id) {
        const res = await service.get(`${baseGroupURL}/${kecamatan_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async delete(kecamatan_id) {
        const res = await service.delete(`${baseGroupURL}/${kecamatan_id}`);
        return res;
    }

    static async update(kecamatan_id, data) {
        const res = await service.patch(`${baseGroupURL}/${kecamatan_id}`, data);
        return res;
    }

    static async dapil(dapil_id) {
        const res = await service.get(`${baseGroupURL}?dapil=${dapil_id}`);
        return res;
    }
}