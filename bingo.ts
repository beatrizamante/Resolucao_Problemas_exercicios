export default class Bingo {
    cartela: number[][] = [];
    numbers: number[] = [];

    constructor() {
        // Generate 25 unique numbers between 1 and 50
        while (this.numbers.length < 25) {
            const num = Math.floor(Math.random() * 50) + 1;

            // Only add number if it's not already in the array
            if (!this.numbers.includes(num)) {
                this.numbers.push(num);
            }
        }

        let columns: number[][] = [[], [], [], [], []];

        for (let i = 0; i < 25; i++) {
            columns[i % 5].push(this.numbers[i]);
        }

        columns = columns.map(column => column.sort((a, b) => a - b));

        for (let i = 0; i < 5; i++) {
            this.cartela.push([
                columns[0][i],
                columns[1][i],
                columns[2][i],
                columns[3][i],
                columns[4][i]
            ]);
        }
    }

    public toString(): string {
        let result = " B   I   N   G   O\n";
        for (let row = 0; row < 5; row++) {
            result += this.cartela[row]
                .map(column => column.toString().padStart(2, ' '))
                .join(" | ") + "\n";
        }
        return result;
    }
}
