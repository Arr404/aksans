import service from "../utils/request";

export default class Tps {
    static baseGroupURL = '/tps';

    static async all() {
        const res = await service.get(`${baseGroupURL}`);
        return res;
    }

    static async show(tps_id) {
        const res = await service.get(`${baseGroupURL}/${tps_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${baseGroupURL}`, data);
        return res;
    }

    static async update(tps_id, data) {
        const res = await service.patch(`${baseGroupURL}/${tps_id}`, data);
        return res;
    }

    static async delete(tps_id) {
        const res = await service.delete(`${baseGroupURL}/${tps_id}`);
        return res;
    }

    static async dapil(dapil_id) {
        const res = await service.get(`${baseGroupURL}?dapil=${dapil_id}`);
        return res;
    }

    static async kecamatan(kecamatan_id) {
        const res = await service.get(`${baseGroupURL}?kecamatan=${kecamatan_id}`);
        return res;
    }

    static async desa(desa_id) {
        const res = await service.get(`${baseGroupURL}?desa=${desa_id}`);
        return res;
    }
}