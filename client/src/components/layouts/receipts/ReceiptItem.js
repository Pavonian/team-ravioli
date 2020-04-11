import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from '../../themes/receiptsStyles/receiptStyle';
import receiptImg from '../../assets/receipt.png';

const ReceiptItem = ({ receipt }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} lg={3} spacing={3}>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
      >
        <img src={receiptImg} alt="receipt" className={classes.receiptImg} />
        <Typography className={classes.receiptDate}>
          {receipt.receipt_date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReceiptItem;
