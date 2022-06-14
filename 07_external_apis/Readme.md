# Full CRUD Requests
## SWBAT
- [ ] Explain what an API is
- [ ] Explain the limitations of working with an external API
- [ ] Observe how to parse API documentation
- [ ]Observe how to send a GET request to an external API with / without an API key


## Deliverables 
- Demo requesting data from an external API that does not require a API key
    - Review the pokeAPI documentation 
    - Create a fetch request to one of its endpoints and console.log the results. 
- Demo requesting data from an external API that requires an API key
    - Review the Google Books API documentation [using the api](https://developers.google.com/books/docs/v1/using)
    - Open the APIs & Services tab in the google API console and create a project.  
        - Add an API key on the credentials page
        - In the library tab enable the Books API 
    - Open the index.js file and create a fetch call in handleRenderSearch
        - URL: `https://www.googleapis.com/books/v1/volumes?q=${search}&key=api_key_here`
        - Review Query parameters. Here we are using q and key as prams
        - NOTE: DO NOT PUSH YOUR API KEY UP TO GITHUB; IT CAN BE STOLEN AND USED MALICIOUSLY 
            - Protect your keys but creating a .gitignore in the root directory 
            - create a keys.js to store your keys in and add a script file to index.html to load the keys 
            - add the file path to the .gitignore this will keep the file from being pushed to github. 
            - .env and Netlify both have alternatives for protecting your keys if you intend to host the project. 
        - Render the google books data to the DOM
        
