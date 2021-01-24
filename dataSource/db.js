const uuid = require("uuid").v4;

class DB {

  constructor() {
    this.data = {};
  }

  async find(filter = () => true) {
    return Object.values(this.data).filter(filter);
  };
  
  async get(id) {
    return this.data[id];
  };
  
  async save(document) {

    if (!document.id) {
      document.id = uuid();
    }

    this.data[document.id] = document;

    return true;

  };

  async saveField(id, fieldName, value) {
    
    if (!this.data.hasOwnProperty(id)) {
      throw new Error(`Unable to update document by id ${id} as it does not exist`);
    }

    this.data[id][fieldName] = value;

  }
  
  async remove(id) {
    delete this.data[id];
  };

}

module.exports = DB;