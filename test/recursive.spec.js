var chai = require('chai');
var expect = chai.expect;
var tree = require('../tree');
var TraverseClass = require('../Traverse');

var bootstrappedTree = new TraverseClass(tree);

describe('Validation', function(){
  describe('Traversal Object', function () {

    it('should be an instance of itself', function () {
      expect(bootstrappedTree).to.be.an.instanceOf(TraverseClass);
    });

    it('should take a data structure and set it as a property on itself', function () {
      expect(bootstrappedTree.tree).to.not.be.undefined;
      expect(bootstrappedTree.tree).to.be.an('object');
    });
  }); // ends traversal object describe
}); // ends validation describe

describe('Traversing a Tree', function () {
  describe('Methods should exist', function () {
    [
      'getAllNames',
      'getAllAges',
      'getLeafNames',
      'getLeafAges',
      'findAllParentsNames',
      'findAllParentsAges',
      'findName',
      'findAge'
    ].forEach((method) => {
      it(method + ' should be defined and be a Function', function () {
        console.log('foreEach!')
        expect(bootstrappedTree[method]).to.not.be.undefined;
        expect(bootstrappedTree[method]).to.a.instanceOf(Function);
      });
    });

  });// ends methods exists describe

  describe('Method getAllNames', function () {
    var results;

    beforeEach(function(){
      results = bootstrappedTree.getAllNames();
    });

    it('should return an array of strings', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsStrings);
    });

    it('should be an array of thirty-two names', function () {
      expect(results).to.have.length(32);
    });

    it('should have all the names!', function () {
      expect(results).to.include.members(['Nikola Tesla', 'Kingtak', 'Eylem', 'Douglas Crockford', 'Jayson']);
    });
  }); // ends method getAllNames describe

  describe('Method getAllAges', function () {
    var results;

    beforeEach(function() {
      results = bootstrappedTree.getAllAges();
    });

    it('should return an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should be an array of thirty-two numbers', function () {
      expect(results).to.have.length(32);
    });

    it('should have all the numbers!', function () {
      expect(results).to.include.members([66, 22, 88, 1337, 500]);
    });
  });

  describe('Method getLeafNames', function () {
    var results;

    beforeEach(function(){
      results = bootstrappedTree.getLeafNames();
    });

    var sixteen_names = [
      'Spencer Toyama',
      'Edgar Allan Poe',
      'Albert Einstein',
      'Nikola Tesla',
      'Garfield The Cat',
      'Milton S. Hershey',
      'Gene Shoemaker',
      'Neil deGrasse Tyson',
      'Carl Sagan',
      'Marty McFly',
      'Bill Nye',
      'Ann Druyan',
      'Jon Stewart',
      'Aaron Turner',
      'Douglas Crockford',
      'Victor Von Doom'
    ];

    it('should return an array of strings', function () {
        expect(results).to.be.an('array');
        expect(results).to.satisfy(containsStrings);
    });

    it('should be an array of sixteen string values', function () {
      expect(results).to.have.length(16);
    });

    it('should contains all the names!', function () {
      expect(results).to.include.members(sixteen_names);
    });
  }); //ends getLeafName describe

  describe('Method getLeafAges', function () {
    var results;

    beforeEach(function(){
      results = bootstrappedTree.getLeafAges();
    });

    it('should be an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should be an array of sixteen values', function () {
      expect(results).to.have.length(16);
    });

    it('should contain certain numbers', function () {
      var sixteen_ages = [28, 560, 91, 16, 783, 8008, 62, 65, 23, 43, 13, 914, 841, 33, 88, 500 ];
      expect(results).to.have.members(sixteen_ages);
    });
  }); // ends getLeafAges describe

  describe('Method findAllParentsNames', function () {
    var results;

    beforeEach(function(){
      results = bootstrappedTree.findAllParentsNames();
    })

    it('should be an array of strings', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsStrings);
    });

    it('should not include leaf names', function () {
      var leafNames = bootstrappedTree.getLeafNames();
      var result = bootstrappedTree.findAllParentsNames();

      expect(results).to.not.include.members(leafNames);
    });

    it('should contain some of these names', function () {
      var someParentNames = ['Stevie', 'Mark', 'Charles', 'Cortney', 'Wray', 'Kingtak', 'Bjorn'];
      
      expect(results).to.include.members(someParentNames);
    });
  }); // ends findAllParentsNames describe

  describe('Method findAllParentsAges', function () {
    var results;

    beforeEach(function(){
      results = bootstrappedTree.findAllParentsAges();
    });

    it('should be an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should not include leaf ages', function () {
      var leafAges = bootstrappedTree.getLeafAges();
      var result = bootstrappedTree.findAllParentsAges();

      expect(results).to.not.include.members(leafAges);
    });

    it('should contain some of these ages', function () {
      var someParentAges = [28, 22, 65, 302, 1337, 36, 243, 32, 24, 87, 0, 100, 817, 910, 66, 22];

      expect(results).to.include.members(someParentAges);
    });
  });

  describe('Method findName', function () {
    var results;

    beforeEach(function(){
      person = bootstrappedTree.findName('Nikola Tesla');
    });

    it('should find Nikola Tesla', function () {
      expect(person).to.be.an('object');
      expect(person).to.have.deep.property('name', 'Nikola Tesla');
      expect(person).to.have.deep.property('age', 16);
      expect(person).to.have.deep.property('hasParents', true);
      expect(person).to.have.deep.property('isLeaf', true);
      expect(person.children).to.be.empty;
    });
  }); //ends findName describe




}); // ends traversing describe


/* **************** *
 * helper functions *
 * **************** */

// check each method by it's name

// used to the satisfy(cheezburger);
function containsStrings(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      return false;
    }
  }
  return true;
}

function containsNumbers(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      return false;
    }
  }
  return true;
}
