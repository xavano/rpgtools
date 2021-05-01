export default class PlayersAPI {
    static async getAll() {
        return JSON.parse(localStorage.getItem('player-list') || '[]');
    }

    static async save(items) {
        localStorage.setItem('player-list', JSON.stringify(items));
    }
}