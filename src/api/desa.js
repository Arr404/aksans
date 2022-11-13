import service from "../utils/request";

export default class Kecamatan {
    static baseGroupURL = '/desa';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(desa_id) {
        const res = await service.get(`${baseGroupURL}/${desa_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async delete(desa_id) {
        const res = await service.delete(`${baseGroupURL}/${desa_id}`);
        return res;
    }

    static async update(desa_id, data) {
        const res = await service.patch(`${baseGroupURL}/${desa_id}`, data);
        return res;
    }

    static async kecamatan(kecamatan_id) {
        const res = await service.get(`${baseGroupURL}?kecamatan=${kecamatan_id}`);
        return res;
    }
}