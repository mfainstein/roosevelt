import React, { ReactElement } from 'react';
import { MonthLegendItem } from './legends/MonthLegendItem';
import { Day } from './Day';
import { Box } from '@mui/material';
import { DateUtils } from '../utils/DateUtils';

interface Props {
    month: number;
}

const year = 2022;

export const Month: React.FC<Props> = ({month}: Props): ReactElement => {
    let elements = [];
    let daysInCurrentMonth = DateUtils.daysInMonth(month, year);
    elements.push(<MonthLegendItem key="monthLegendItem" displayText={DateUtils.monthNames[month]}/>);
    for (let i = 0; i < 31; i++) {
        let exists = true;
        if (i+1 > daysInCurrentMonth) {
            exists = false;
        }
        let dayId = "day"+i;
        elements.push(<Day key={dayId} exists={exists}/>)
    }

    return (<Box key="month" sx={{display: 'flex'}}>{elements}</Box>)

}
