'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: {required:true},
  name: {required:true},
};

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
  }
  
  post(entry) {
  }

  put(id, entry) {
  }

  delete(id) {
  }

  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(schema).forEach( field => {
      if ( schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = Products;