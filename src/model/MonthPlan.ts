import { DayStatus } from './DayStatus';
import { DateUtils } from '../utils/DateUtils';
import { DayPlan } from './DayPlan';
import { Book } from './Book';

export class MonthPlan {
    private readonly plan: DayPlan[];

    constructor(monthNumber: number, year: number) {
        this.plan = Array.from({length: 31}, (_, i) => {
            if (i + 1 > DateUtils.daysInMonth(monthNumber, year)) {
                return new DayPlan(DayStatus.BLOCKED)
            }
            return new DayPlan(DayStatus.FREE);
        });
    }

    public getPlan(): DayPlan[] {
        return this.plan;
    }

    public isEndOfEpoch(day: number): boolean {
        if (day >= 30) {
            return true;
        }
        else {
            let currentDayPlan:DayPlan = this.plan[day];
            let nextDayPlan:DayPlan = this.plan[day+1];
            return !DayPlan.compare(currentDayPlan, nextDayPlan);

        }
    }

    public planReading(dayStart:number, dayEnd:number, book:Book):void {
        for (let i=0; i<dayEnd; i++){
            if (i>=31){
                return;
            }
            this.plan[i].setStatus(DayStatus.PLANNED);
            this.plan[i].setBook(book);
        }
    }

    public planEpochs(): number[] {
        let epochs = [];
        let epochCounter = 1;
        for (let i=0; i<31; i++){
            if (this.isEndOfEpoch(i)){
                epochs.push(epochCounter);
                //reset
                epochCounter = 1;
            }
            else {
                epochCounter++;
            }
        }
        return epochs;
    }
}
