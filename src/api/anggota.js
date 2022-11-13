import service from "../utils/request";

export default class Anggota {
    static baseGroupURL = '/anggota';

    static async all() {
        const res = await service.get(`${this.baseGroupURL}`);
        return res;
    }

    static async show(anggota_id) {
        const res = await service.get(`${this.baseGroupURL}/${anggota_id}`);
        return res;
    }

    static async create(data) {
        const res = await service.post(`${this.baseGroupURL}`, data);
        return res;
    }

    static async update(anggota_id, data) {
        const res = await service.patch(`${this.baseGroupURL}/${anggota_id}`, data);
        return res;
    }

    static async delete(anggota_id) {
        const res = await service.delete(`${this.baseGroupURL}/${anggota_id}`);
        return res;
    }

    static async search(query) {
        const res = await service.get(`${this.baseGroupURL}?query=${query}`);
        return res;
    }
}