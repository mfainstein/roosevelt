
export class DateUtils {
    public static monthNames:string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    public static daysInMonth = (month: number, year: number) => {
        return new Date(year, month+1, 0).getDate();
    }
}
