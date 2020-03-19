export class ToDoList {
    constructor(
        public title: string,
        public desc: string,
        public isOpen: boolean,
        public id?: number
    ) {}
}