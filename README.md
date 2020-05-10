

### 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

It took me 2 horus to finish the project. I would add more criteria to user input choice so they can refine the result more 

### 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

using axios was very useful feature to call the api and render different list for each city
        
        event.preventDefault();
        const resp = await axios.get('https://opentable.herokuapp.com/api/restaurants?city=' + this.state.dest);
        this.props.onSubmit(resp.data.restaurants, this.state.order);
        this.setState({ dest: '' });

### 3.	How would you track down a performance issue in production? Have you ever had to do this?

I have never had to do this 

### 4.	How would you improve the API that you just used?

I would add more input for json api call so for example only display resturants that are open for launch, dinner, and breakfast or more.

### 5.	Please describe yourself using JSON.

    {
   
        "name": "Seyedamin Seyedmahmoudian",
        "preferred-name": "Amin",
      "passions":[
            "Programming",
            "Problem solving",
            "Tech"
     ],
        "age":"28",
        "location":"Toronto",
        "experience":"one year front end developer at AirCanada"

    }