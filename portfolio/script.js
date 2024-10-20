console.log("Script running...");


/*document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    const infoContainer = document.querySelector('.infoContainer');
    sidebar.classList.toggle('sidebarGo');
    
    if(sidebar.classList.contains('sidebarGo')) {
        document.querySelector('.menu').style.display = 'inline';
        document.querySelector('.close').style.display = 'none';
       
    } else {
        setTimeout(() => {
            document.querySelector('.close').style.display = 'inline';
        }, 300); // Increased delay to allow sidebar animation to complete
        document.querySelector('.menu').style.display = 'none';
       
    }
});*/



const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Connected to MongoDB server');
  
    // Use the client to interact with your database
    const db = client.db();
    // ...
  });