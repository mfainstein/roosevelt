import { ReactElement, ReactFragment } from 'react';
import React from 'react';
import { DayLegendItem } from './DayLegendItem';
import { Box } from '@mui/material';

export const DayLegend: React.FC = (): ReactElement => {

    let legendElements = [];
    legendElements.push(<DayLegendItem key="dayLegendItem0" visible={false}/>);
    for (let i = 1; i < 32; i++) {
        let itemId = "dayLegendItem"+i;
        legendElements.push(
            <DayLegendItem key={itemId} displayText={i.toString()}/>
        )
    }
    return (
        <Box key="dayLegend" sx={{display: 'flex'}}>{legendElements}</Box>
    );
}
