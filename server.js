// server.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("TO DO App");
})
const items = [];
let id = 0; 

app.get("/api/items", (req, res, next) => {
  res.json(items);
    // this route will return all of the existing to do items
});

app.post('/api/items', (req, res, next) => {
	// something goes in here
  console.log('req.body', req.body);
  if (req.body.item) {
	  id = id + 1;
    const newItem = {
	    id: id,
	    item: req.body.item,
      completed: false
    };
    items.push(newItem);
    res.json(newItem);
  } else {
    res.status(400).json({error: "item needs a description"});
  }
});
// app.patch('/items/:id', (req, res, next) => {
//     console.log(req);
//     // get the parameter ID
//     const itemID = Number(req.params.id);
//     //we'll have to go thriugh the items array
//     // and find the particular item with the ID
//     // we are looking for.
//     const itemToComplete = items.find((item) => item.id === itemID);
//     // If we find the item with the ID
//     if (itemToComplete) {
//         const indexOfItemToComplete = items.indexOf(itemToComplete);
//       itemsToComplete.completed = !itemToComplete.completed;
//       items.splice(indexOfItemToComplete, 1, itemToComplete);
//       res.json(itemToComplete);
//     //We'll need to edit the item with the thing that was in the request body
    
//     //THis will toggle the complete checkbox. In the real world
//     //I should probably copy over the values of item to this new value.
    
//     //Will take the item array of items we have, and SPLICE the new item
//     // in place of the old one.
    
//     //Return the json of the item to complete
//     //If not, return a HTTP 404 not found
//   } else {
//     res.status(404).json({error: 'aww hell naw'});
//   }
// });

// app.delete('/items/:id', (req, res, next) => {
// 	const itemID = Number(req.params.id);
//   const itemToDelete = items.find(
// 	  item => item.id === itemID
//   )
//   if (itemToDelete) {
// 	  const indexOfItemToDelete = items.indexOf(itemToDelete);
//     items.splice(indexOfItemToDelete, 1);
//     res.json(itemToDelete);
//   } else {
// 	  res.status(404).json({error: 'aww hell naw'});
//   }
// });
/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})