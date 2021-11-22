import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

interface Props {
    exists?:boolean;
}

export const Day: React.FC<Props> = ({ exists }: Props):ReactElement => {
    return (
        <Box sx={{
            display: 'inline-block',
            backgroundColor: !exists? 'gray':'white',
            borderColor: 'black',
            fontSize: 22,
            border: 1,
            boxShadow: 2,
            height: '80px',
            width: '25px'
        }}/>
    );
}
