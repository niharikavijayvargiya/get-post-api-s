const People = {
    Niharika: {
      name: 'Niharika',
      age: 21,
      country: 'India',
      city: 'Hyderabad',
      skills: ['java', 'python', 'c++'],
      isMarried: false
    },
    Nikita: {
      name: 'Nikita',
      age: 21,
      country: 'India',
      city: 'Hyderabad',
      skills: ['java', 'python', 'c++'],
      isMarried: false
    },
    Aman: {
      name: 'Aman',
      age: 30,
      country: 'India',
      city: 'Delhi',
      skills: ['javascript', 'node.js', 'react'],
      isMarried: true
    },
    Priya: {
      name: 'Priya',
      age: 25,
      country: 'India',
      city: 'Mumbai',
      skills: ['html', 'css', 'design'],
      isMarried: false
    }
  };
  
  const getUserInfo = (name) => {
    if (!name) return People;
    return People[name] || null;
  };
  
  module.exports = { getUserInfo };
  