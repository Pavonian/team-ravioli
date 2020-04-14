import React from 'react';
import { Avatar, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useStyles } from '../../themes/reportsStyles/reportsStyle';
import ReceiptIcon from '@material-ui/icons/Receipt';

const ReportItem = ({ receipt }) => {
  const classes = useStyles();
  return (
    <TableBody>
      <TableRow className={classes.tableRow}>
        <TableCell align="center">
          <Avatar className={classes.avatar}>
            <ReceiptIcon />
          </Avatar>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {receipt.title}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          - ${receipt.amount}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          {receipt.receipt_date}
        </TableCell>
        <TableCell className={classes.disabled} align="center">
          {receipt.category}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ReportItem;