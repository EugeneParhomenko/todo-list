export class ToDoList {
    constructor(
        public title: string,
        public desc: string,
        public rate: number,
        public date: any,
        public isOpen: boolean,
        public id?: number
    ) {}
}