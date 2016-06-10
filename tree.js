'use strict';
// a tree to be climbed.
module.exports = {
  root: {
    name: 'Bjorn',
    age: 28,
    hasParents: null,
    isLeaf: false,
    hasChildren: true,
    children: [{
        name: 'Manny',
        age: 22,
        hasParents: true,
        isLeaf: false,
        hasChildren: true,
        children: [{
            name: 'Spencer Toyama',
            age: 28,
            hasParents: false,
            isLeaf: true,
            hasChildren: false,
            children: []
          }, {
            name: 'Shannon',
            age: 65,
            hasParents: true,
            isLeaf: false,
            hasChildren: true,
            children: [{
              name: 'Kingtak',
              age: 302,
              hasParents: true,
              isLeaf: false,
              hasChildren: true,
              children: [{
                name: 'Wray',
                age: 1337,
                hasParents: true,
                isLeaf: false,
                hasChildren: true,
                children: [{
                  name: 'Edgar Allan Poe',
                  age: 560,
                  hasParents: true,
                  isLeaf: true,
                  hasChildren: false,
                  children: []
                }, {
                  name: 'Albert Einstein',
                  age: 91,
                  hasParents: true,
                  isLeaf: true,
                  hasChildren: false,
                  children: []
                }, ]
              }, {
                name: 'Nikola Tesla',
                age: 16,
                hasParents: true,
                isLeaf: true,
                hasChildren: false,
                children: []
              }]
            }, {
              name: 'Peter',
              age: 36,
              hasParents: true,
              isLeaf: false,
              hasChildren: true,
              children: [{
                name: 'Garfield The Cat',
                age: 783,
                hasParents: true,
                isLeaf: true,
                hasChildren: false,
                children: []
              }, {
                name: 'Cortney',
                age: 243,
                hasParents: true,
                isLeaf: false,
                hasChildren: true,
                children: [{
                  name: 'Brian',
                  age: 32,
                  hasParents: true,
                  isLeaf: false,
                  hasChildren: true,
                  children: [{
                    name: 'Eylem',
                    age: 24,
                    hasParents: true,
                    isLeaf: false,
                    hasChildren: true,
                    children: [{
                      name: 'Milton S. Hershey',
                      age: 8008,
                      hasParents: true,
                      isLeaf: true,
                      hasChildren: false,
                      children: []
                    }]
                  }, {
                    name: 'Albert',
                    age: 87,
                    hasParents: true,
                    isLeaf: false,
                    hasChildren: true,
                    children: [{
                      name: 'Charles',
                      age: 0,
                      hasParents: true,
                      isLeaf: false,
                      hasChildren: true,
                      children: [{
                        name: 'Gene Shoemaker',
                        age: 62,
                        hasParents: true,
                        isLeaf: true,
                        hasChildren: false,
                        children: []
                      }]
                    }, {
                      name: 'Neil deGrasse Tyson',
                      age: 65,
                      hasParents: true,
                      isLeaf: true,
                      hasChildren: false,
                      children: []
                    }]
                  }]
                }, {
                  name: 'Carl Sagan',
                  age: 23,
                  hasParents: true,
                  isLeaf: true,
                  hasChildren: false,
                  children: []
                }]
              }, {
                name: 'Mark',
                age: 100,
                hasParents: true,
                isLeaf: false,
                hasChildren: true,
                children: [{
                  name: 'Marty McFly',
                  age: 43,
                  hasParents: true,
                  isLeaf: true,
                  hasChildren: false,
                  children: []
                }, {
                  name: 'Jayson',
                  age: 817,
                  hasParents: true,
                  isLeaf: false,
                  hasChildren: true,
                  children: [{
                    name: 'Bill Nye',
                    age: 13,
                    hasParents: true,
                    isLeaf: true,
                    hasChildren: false,
                    children: []
                  }, {
                    name: 'Ann Druyan',
                    age: 914,
                    hasParents: true,
                    isLeaf: true,
                    hasChildren: false,
                    children: []
                  }, {
                    name: 'Jon Stewart',
                    age: 841,
                    hasParents: true,
                    isLeaf: true,
                    hasChildren: false,
                    children: []
                  }]
                }, {
                  name: 'Aaron Turner',
                  age: 33,
                  hasParents: true,
                  isLeaf: true,
                  hasChildren: false,
                  children: []
                }]
              }]
            }]
          }, {
            name: 'Mary',
            age: 910,
            hasParents: true,
            isLeaf: false,
            hasChildren: true,
            children: [{
              name: 'Stevie',
              age: 66,
              hasParents: true,
              isLeaf: false,
              hasChildren: true,
              children: [{
                name: 'Michelle',
                age: 22,
                hasParents: true,
                isLeaf: false,
                hasChildren: true,
                children: [{
                  name: 'Douglas Crockford',
                  age: 88,
                  hasParents: true,
                  isLeaf: true,
                  hasChildren: false,
                  children: []
                }]
              }]
            }]
          }
      ]
    },
    {
      name: 'Victor Von Doom',
      age: 500,
      hasParents: true,
      isLeaf: true,
      hasChildren: false,
      children: []
    }
  ]
}
};

/*
         ,.,
        MMMM_    ,..,
          "_ "__"MMMMM          ,...,,
   ,..., __." --"    ,.,     _-"MMMMMMM
  MMMMMM"___ "_._   MMM"_."" _ """"""
   """""    "" , \_.   "_. ."
          ,., _"__ \__./ ."
         MMMMM_"  "_    ./
          ''''      (    )
   ._______________.-'____"---._.
    \                          /
     \________________________/
     (_)                    (_)

    leaves yellow and red
float downward toward the earth
      rest in my bonsai
*/
