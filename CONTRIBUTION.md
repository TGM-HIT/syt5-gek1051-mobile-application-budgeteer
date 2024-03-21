# Contribute to the project



## Start Points

1. Clone the repository

```bash
git clone https://github.com/TGM-HIT/syt5-gek1051-mobile-application-budgeteer.git
```

3. Head to the shopping-list-borko directory (`cd shopping-list-borko`).

```bash
cd shopping-list-borko
```

4. Install npm dependencies:

```
npm install
```

4. Start the application:

```
npm start
```


5. With the application startet, the shopping list is available under `localhost:8081`.


## API Entry Points

### Initialize PouchDB

```
// this will be the PouchDB database
var db = new PouchDB('shopping');
```
Here you can see how we create a PouchDB Database with the name "shopping". The changes made locally are saved in this database and will be synced with the CouchDB database, when a connection is established.

### Templates

```
// template shopping list object
const sampleShoppingList = {
	"_id": "",
	"type": "list",
	"version": 1,
	"title": "",
	"checked": false,
	"place": {
		"title": "",
		"license": null,
		"lat": null,
		"lon": null,
		"address": {}
	},
	"createdAt": "",
	"updatedAt": ""
};

// template shopping list item object
const sampleListItem = {
	"_id": "",
	"type": "item",
	"version": 1,
	"title": "",
	"checked": false,
	"createdAt": "",
	"updatedAt": ""
};
```
Here you can see the shema for the two objects "sampleListItem" and "sampleshoppinglist". This shema shows, which data is needed and will be filled with data later.

## Sorting Functions

```
/**
 * Sort comparison function to sort an object by "createdAt" field
 *
 * @param  {String} a
 * @param  {String} b
 * @returns {Number}
 */
const newestFirst = (a, b) => {
	if (a.createdAt > b.createdAt) return -1;
	if (a.createdAt < b.createdAt) return 1;
	return 0 
};

/**
 * Sort comparison function to sort an object by "createdAt" field
 *
 * @param  {String} a
 * @param  {String} b
 * @returns {Number}
 */
const checkedItem = (a, b) => {
	if (a.checked < b.checked) return -1;
	if (a.checked > b.checked) return 1;
	return 0 
};
```
These functions are used to sort the Items. The first function "newestFirst" uses the createdAt Data from an object to determine which Item was created first.
The function "checkedItem" checks with the check Data from an object if a item is checked.

## Ajax Request Function

```
/**
 * Perform an "AJAX" request i.e call the URL supplied with the 
 * a querystring constructed from the supplied object
 *
 * @param  {String} url 
 * @param  {Object} querystring 
 * @returns {Promise}
 */
const ajax = function (url, querystring) {
```
This function makes a Ajax Request to a URL to get Data from external Databases. 

## Additional Infos

Automated actions run on the main branch which deploy the app. To get your changes through, please file a pull request.

### Commit Messages

We would like to remind you of how to write Commit-Messages. There are certain websites which can help you write good Commit-Messages[1].

To summarize the Website a little bit, you should always start the Commit Message with a Verb like "Add", "Remove", etc. and then summarize the Work you have done. 



# Sources

[1] Gitcommitmessages (no date) OpenStack. Available at: https://wiki.openstack.org/wiki/GitCommitMessages#Examples_of_good_practice (Accessed: 21 March 2024). 
