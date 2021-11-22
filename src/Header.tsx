import { ReactElement } from 'react';
import React from 'react';
import { Typography, useTheme } from '@mui/material';

interface Props {

}

export const Header: React.FC<Props> = ({}: Props): ReactElement => {

    let theme = useTheme();

    return (
        <React.Fragment>
            <div>
                <Typography variant="h2" component="h2">
                    Roosevelt
                </Typography>
            </div>
            <div>
                <Typography variant="h6" component="h2">
                    Treat your reading like a billion dollar company.
                </Typography>
            </div>
        </React.Fragment>
    )
}
