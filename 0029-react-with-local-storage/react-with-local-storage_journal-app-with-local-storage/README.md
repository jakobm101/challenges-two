# React with Local Storage: Journal App with Local Storage

Make your journal entries persistent by saving them to local storage.

## Tasks

Install the [`use-local-storage-state`](https://github.com/astoilkov/use-local-storage-state) package and use it to make the journal entries persistent.

> 💡 Does it make sense to also put the `filter` state into local storage? What are the differences to the user experience?
😸 Filter does not need to go to local storage. 
it filters the entries that are loaded from there.
But actually it can be nice for visitors to come back to the filtered state they left, so actually i would prefer to add it to local storage

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
