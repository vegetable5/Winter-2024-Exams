// Change double quotation to open or close quotation
'use strict';

const changeQuotation = (quote) => {
  let res = '';
  let open = false;
  for (const letter of quote) {
    if (letter === '"') {
      if (!open) res += '«';
      else res += '»';
      open = !open;
    } else res += letter;
  }
  return res;
};

module.exports = changeQuotation;
