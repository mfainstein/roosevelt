import * as React from 'react';
import { ReactElement } from 'react';
import { DayLegendItem } from './legends/DayLegendItem';
import { DayLegend } from './legends/DayLegend';
import { MonthLegendItem } from './legends/MonthLegendItem';
import { Month } from './Month';
import { Typography } from '@mui/material';

interface Props extends React.HTMLAttributes<any> {

}

export const Board: React.FC<Props> = ({}: Props): ReactElement => {
    return (
        <div>
            <div>
                <Typography variant="h5" component="h1">
                    Reading Plan
                </Typography>
                <Typography variant="h6" component="h6">
                    November 2021 - Februrary 2021
                </Typography>
            </div>
            <div>
                <DayLegend/>
                <Month month={10}/>
                <Month month={11}/>
                <Month month={0}/>
                <Month month={1}/>

            </div>
        </div>

    );
}

export default Board;
