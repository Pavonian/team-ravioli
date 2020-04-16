import React from 'react';
import { Avatar, TableBody, TableRow, TableCell } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { useStyles } from '../../themes/dashboardStyle';

const RecentItems = ({ recent }) => {
  const classes = useStyles();
  return (
    <TableBody>
      <TableRow className={classes.tableRow}>
        <TableCell align="center">
          <Avatar className={classes.categoryIcon}>
            <ReceiptIcon />
          </Avatar>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {recent.title}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          - ${recent.amount}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          {recent.receipt_date}
        </TableCell>
        <TableCell className={classes.disabled} align="center">
          {recent.category}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default RecentItems;
