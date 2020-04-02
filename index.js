const fs = require('fs');
const osmosis = require('osmosis');
let InfoSave = [];
osmosis
  .get('https://www.google.co.in/search?q=javascript')
  .paginate('#navcnt table tr > td a[href]')
  .find('#botstuff')
  .set({'related': ['.card-section .brs_col p a']})
  .data(function(data) {
    console.log(data);
    InfoSave.push(data);
  });
console.log("Данные сохранены!");