// Change double quotation to open or close quotation
'use strict';

const empty = '';

const changeQuotation = (quote) => {
  const res = [];
  let open = false;
  for (const letter of quote) {
    if (letter === '"') {
      for (const i of letter) {
        if (!open) {
          res.push('«');
          open = true;
        } else {
          res.push('»');
          open = false;
        }
      }
    } else {
      if (letter !== '"') {
        for (const i of letter) {
          res.push(i);
        }
      }
    }
  }
  return res.join(empty);
};

module.exports = changeQuotation;
