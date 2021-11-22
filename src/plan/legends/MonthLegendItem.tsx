import { ReactElement } from 'react';
import React from 'react';
import { Box, Grid } from '@mui/material';

interface Props {
    displayText:string;
}

export const MonthLegendItem: React.FC<Props> = ({ displayText }: Props):ReactElement => {
    return (
        <Box sx={{
            display: 'inline-block',
            borderColor: 'black',
            fontSize: 22,
            border: 1,
            boxShadow: 2,
            textOrientation: 'upright',
            writingMode: 'vertical-rl',
            backgroundColor: 'gray',
            height: '80px',
            width: '25px'
        }}>{displayText}</Box>
    );
}
