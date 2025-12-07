
const express = require('express');
const app = express();

const banks = {
  A: {
    vault: 90,
    currency: 'United States Dollars'
  },
  B: {
    vault: 90,
    currency: 'Dinar'
  },
  C: {
    vault: 80,
    currency: 'Shilling'
  },
  D: {
    vault: 70,
    currency: 'Pesos'
  }
};

/* Complete the route below */
app.get('/banks/:vaultname', (req, res, next) => {
  const specificVaultName = req.params.vaultname;
  const specificVaultAmount = banks.specificVaultName.vault;
  res.json(specificVaultAmount); 
});

module.exports = app