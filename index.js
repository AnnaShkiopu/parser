const fs = require('fs');
const osmosis = require('osmosis');
let InfoSave = [];
osmosis
  .get('https://www.google.co.in/search?q=javascript')
  .paginate('#foot table tr > td a[href]',3)
  .find('#search')
  .find('.g .r')
  .set({
    'Nomination': 'h3',
    'Url': 'a@href'
})
  .data(function(data) {
    console.log(data);
    InfoSave.push(data);
  });
console.log("Данные выведены в екран!");
