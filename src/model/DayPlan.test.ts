import { DayPlan } from './DayPlan';
import { DayStatus } from './DayStatus';

test("initialize with PLANNED status", ()=>{
    let dayPlanConstructor = ()=>{
        let dayPlan1 = new DayPlan(DayStatus.PLANNED);
    }
    expect(dayPlanConstructor)
        .toThrow("Planned day should have a book associated with it");
})

test("comparing day plans", ()=>{
    let dayPlan1 = new DayPlan(DayStatus.FREE);
    let dayPlan2 = new DayPlan(DayStatus.FREE);
    expect(DayPlan.compare(dayPlan1, dayPlan2 )).toEqual(true);

    let dayPlan3 = new DayPlan(DayStatus.FREE);
    let dayPlan4 = new DayPlan(DayStatus.BLOCKED);
    expect(DayPlan.compare(dayPlan3, dayPlan4 )).toEqual(false);

    let dayPlan5 = new DayPlan(DayStatus.PLANNED, {name: "hello"});
    let dayPlan6 = new DayPlan(DayStatus.PLANNED, {name: "bye"});
    expect(DayPlan.compare(dayPlan5, dayPlan6 )).toEqual(false);

    let dayPlan7 = new DayPlan(DayStatus.PLANNED, {name: "hello"});
    let dayPlan8 = new DayPlan(DayStatus.PLANNED, {name: "hello"});
    expect(DayPlan.compare(dayPlan7, dayPlan8 )).toEqual(true);
})
