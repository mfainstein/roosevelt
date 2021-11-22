import { DayStatus } from './DayStatus';
import { Book } from './Book';

export class DayPlan {
    private status: DayStatus = DayStatus.FREE;
    private book?: Book;

    constructor(status:DayStatus, book?:Book) {
        this.status = status;
        if (this.status === DayStatus.PLANNED && !book){
            throw new Error("Planned day should have a book associated with it");
        }
        this.book = book;
    }

    public getStatus():DayStatus {
        return this.status;
    }

    public getBook():Book | undefined {
        return this.book;
    }

    public setStatus(status:DayStatus):void {
        this.status = status;
    }

    public setBook(book:Book):void {
        this.book = book;
    }

    public static compare(dayPlan1:DayPlan, dayPlan2:DayPlan):boolean{
        if (dayPlan1.getStatus() === dayPlan2.getStatus()){
            if (dayPlan1.getBook()?.name === dayPlan2.getBook()?.name){
                return true;
            }
        }
        return false;
    }
}
