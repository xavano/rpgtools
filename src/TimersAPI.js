export default class TimersAPI {
    static async getAll() {
        return JSON.parse(localStorage.getItem('timer') || '[]');
    }

    static async save(items) {
        localStorage.setItem('timer', JSON.stringify(items));
    }
}