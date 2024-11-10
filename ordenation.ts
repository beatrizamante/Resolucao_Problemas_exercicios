export default class Sorting {
        list: number[];

        public constructor(list: number[]) {
            this.list = list;
        }

        public crescentSort(): boolean {
            for(let i = 0; i < this.list.length; i++)
                if(this.list[i] > this.list[i + 1])
                    return false; 
            return true;
        }

        public recursiveSort(index: number = 0, arr: number[] = this.list): number[] { 
            if (index >= arr.length - 1) return arr;

            let lowIndex: number = index;
            for(let i = index; i < arr.length - index; i++) {
                if(arr[i] < arr[lowIndex]) {
                    lowIndex = i;
                }
            }
            
            if(lowIndex != index) {
                [arr[index], arr[lowIndex]] = [arr[lowIndex], arr[index]];
            }

            return this.recursiveSort(index + 1, arr)
        }

}