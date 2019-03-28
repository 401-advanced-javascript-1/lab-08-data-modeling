'use strict';

const CategoryDB = require('../categories.js');
const categories = new CategoryDB();

describe('Category', () => {

  it('post() - can create a category', () => {
    let category = { name: 'Food' };
    let createdCategory = categories.post(category);
    expect(createdCategory.name).toEqual(category.name);
  });

  it('get() - can get all categories', () => {
    let category = categories.get();
    expect(Array.isArray(category)).toBeTruthy();
  });

  it('get(_id) - can get a category by _id', () => {
    let category = { name: 'Food', description: 'Healthy' };
    let createdCategory = categories.post(category);
    let foundCategory = categories.get(createdCategory._id);
    expect(foundCategory._id).toEqual(createdCategory._id);
  });

  it('put() - can update a category', () => {
    let category = { name: 'Food', description: 'Healthy' };
    let createdCategory = categories.post(category);

    let updatedCategory = {...category, description: 'Bad for you'};
    categories.put(updatedCategory._id, updatedCategory);
    expect(updatedCategory._id).toEqual(createdCategory._id);
    expect(updatedCategory.description).not.toEqual(createdCategory.description);
  });

  it('delete(_id) - can delete a category by _id', () => {
    let category = { name: 'Food', description: 'Healthy' };
    let createdCategory = categories.post(category);
    console.log(createdCategory);

    let removedCategory = categories.delete(createdCategory._id);
    expect(removedCategory).toEqual([]);
  });
});

