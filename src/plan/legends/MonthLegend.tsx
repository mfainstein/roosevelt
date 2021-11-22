import React, { ReactElement } from 'react';
import { MonthLegendItem } from './MonthLegendItem';
import { Box } from '@mui/material';

interface Props {
    displayTexts: string[]
}

export const MonthLegend: React.FC<Props> = ({displayTexts}: Props): ReactElement => {
    let legendElements = [];
    for (let i = 0; i < displayTexts.length; i++) {
        legendElements.push(
            <MonthLegendItem displayText={displayTexts[i]}/>
        )
    }
    return (<Box>{legendElements}</Box>)
}
