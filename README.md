This is a simple app that crreates a RESTfull Express API. It will give users the ability to CREATE, READ,UPDATE, and DELETE items from a To-Do list.

<!---www.example.com/ -->

In order to view all of the To-Do items in the application, make an HTTP GET request ti/api/items. Your sample response body will lokk sometthing like the following:

```
[
    {
        "id": 1,
        "item": "get some eggs",
        "completed": true
    },
    {
        "id": 2,
        "item": "get some beer",
        "completed": false
    },
]
```

-To reate a new To-Do item in this app, make an HTTP POST request to /api/iitems. The body of your POST request shpould look like this:

```
{
    "item": "the name of the thing we're including"
}
```

- onnce posted, a new item will return the following in the body of the response:

```
{
	"id": 3,
	"item": "the name of the thing we're launching",
	"completed": false
}
```
- In order to edit he contents of a single To-Do item, make a PUT request to /api/items/:id

```

{
	"id": 2,
	"item": "get some beer",
	"completed": true
}
```

-In order to delete a single item from our To-Do items API, make a DELETE request to /apiitems/:id
