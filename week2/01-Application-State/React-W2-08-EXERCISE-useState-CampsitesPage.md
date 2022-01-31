
---


##### SC

##### VO

---



##### SC

export const selectCampsiteById = id => {
    return CAMPSITES.find( el => el.id === parseInt(id))  
}  


##### VO

And now, we're going to add another selector, in campsitesSlic

Remember in the array.filter and array.find video when I mentioned that we could use array.find to retrieve an item with the correct id from a dataset?

Let's use that now, and write the selectCampsiteById selector which we're going to need in our CampsitesPage, to retrieve and display a specific campsite from our array of campsites.

We're again going to export this selector, so we'll start with export const selectCampsiteById and that will be an arrow function that takes in an id and returns campsites.find() and we'll pass in a callback function which pulls off each campsite and then checks if that campsite's id is equal to the id which was passed in to our selectCampsiteById function as an input parameter.  But notice that we are going to have to call parseInt on the id that gets passed in, because it's going to be a string


---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO
