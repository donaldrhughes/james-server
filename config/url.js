let url = "";
if (process.env.NODE_ENV === "production") {
    url = 'https://protected-harbor-72820.herokuapp.com/';
  } else if (!process.env.NODE_ENV){
    url = 'http://localhost:3001';
  }

module.exports = {
    url: url
    
}