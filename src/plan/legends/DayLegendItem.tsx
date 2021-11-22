import { ReactElement } from 'react';
import React from 'react';
import { Box, BoxProps, Grid } from '@mui/material';

interface Props extends BoxProps {
    displayText?: string;
    visible?: boolean;
}

export const DayLegendItem: React.FC<Props> = ({displayText, visible}: Props): ReactElement => {
    return (
        <React.Fragment>
            <Box sx={{
                opacity: visible === false ? 0 : 1,
                display: 'inline-block',
                borderColor: 'black',
                fontSize: 16,
                border: 1,
                boxShadow: 2,
                backgroundColor: 'gray',
                textAlign: 'center',
                verticalAlign: 'center',
                width: '25px',
                height: '30px'
            }}>{displayText}</Box>
        </React.Fragment>
    );
}
