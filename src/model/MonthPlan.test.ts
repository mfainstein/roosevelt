import { MonthPlan } from './MonthPlan';
import { DayStatus } from './DayStatus';

test('initialize the month plan', () => {
    let monthPlan = new MonthPlan(10, 2021);
    let plan = monthPlan.getPlan();
    expect(plan[21].getStatus()).toEqual(DayStatus.FREE);
    expect(plan[23].getStatus()).toEqual(DayStatus.FREE);
    expect(plan[30].getStatus()).toEqual(DayStatus.BLOCKED);
});

test('calculate epochs ', () => {
    let monthPlan = new MonthPlan(10, 2021);
    monthPlan.planReading(3, 7, {name: "myBook"});
    monthPlan.planReading(8, 33, {name: "Another book"});
    expect(monthPlan.planEpochs().length).toEqual(3);
});
