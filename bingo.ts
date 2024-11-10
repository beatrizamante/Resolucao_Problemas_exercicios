export default class Bingo {
    cartela: number[][] = [];
    numbers: number[] = [];

    constructor() {
        const ranges = [
            { min: 1, max: 10 },
            { min: 11, max: 20 },
            { min: 21, max: 30 },
            { min: 31, max: 40 },
            { min: 41, max: 50 }
        ];

        for (let range of ranges) {
            let column: number[] = [];
            while (column.length < 5) {
                const num = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                if (!column.includes(num)) {
                    column.push(num);
                }
            }
            column.sort((a, b) => a - b);  
            this.numbers.push(...column); 
        }

        for (let i = 0; i < 5; i++) {
            this.cartela.push([
                this.numbers[i],     
                this.numbers[i + 5], 
                this.numbers[i + 10],
                this.numbers[i + 15],
                this.numbers[i + 20] 
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