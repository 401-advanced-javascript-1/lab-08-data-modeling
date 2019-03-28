'use strict';

const uuid = require('uuid/v4');

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let response = _id ? this.database.filter(record => record._id === _id)[0] : this.database;
    return response;
  }
  
  post(record) {
    record.id = uuid();
    console.log(this.database);
    return record;
  }

  put(_id, record) {
    this.database = this.database.map(item => item.id === _id ? item = record : item);
    return record;
  }

  delete(_id) {
    this.database = this.database.filter(item => item.id != _id);
    return this.database;
  }

}

module.exports = Categories;