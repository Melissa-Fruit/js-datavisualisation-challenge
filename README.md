# JavaScript datavisualisation challenge for BeCode

[js-datavisualisation-challenge page](https://melissa-fruit.github.io/js-datavisualisation-challenge/)

 
- repository : [Be Code repo of the challenge](https://github.com/becodeorg/BXL-Swartz-3-21/tree/master/05-Javascript/javascript-data-visualisation)
- mode: `solo`  
- type: `consolidation challenge`  
- duration: `5 days`  
- author: `Alexandre Plennevaux`  

## Objectives
This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**

## How I proceed

* Find documentation and tutorials : 
   * chart.js 
   * fetch()
   * working with data
   * JSON data
   * refreching data
* Install the chart.js library 
* Create and insert the HTML canvas elements with an ID using JavaScript
* Create the first and second graph and insert them above the html data tables
* Use functions to fonction to:
    * convert the data to JSON
    * remove an index
    * transform the array from string to float and remplacer "," with "."
    * create a random color (this is a personal choise)
    * to add data by index
    * grab the data from the url with fetch()
    * to use the setInterval for refrching every second
* insert the graph at the begining of the document

## My recources for this excersise 

* [Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
* [chart.js](https://www.chartjs.org/)
* [SetInterval](https://www.w3schools.com/js/js_timing.asp)
* [storing coordinates in array in javascript](https://stackoverflow.com/questions/7030229/storing-coordinates-in-array-in-javascript)


## I received help and/of advices of:

* [Ashleigh](https://github.com/AshleighTempleton)
* [Olivier](https://github.com/OlivierPeeters73)
* [Bastien](https://github.com/loonyT)

## biggest bug

I had to modifie the html code when I add the script tag, to get it get work on the git page.

It worked on local, but bugged on github so I put a cdn in the html.

## Evaluation
**self-evaluation** 

#### 1. handling of the DOM:

- I was able to find the right selector to do it.
- I was able to inject the graph in the right place on the page via javascript.
- I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax/fetch:
- I was able to receive the answer from the remote server in json.
- Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- I was able to integrate the third-party library into my application.
- I used the documentation provided by the library.
- I was able to generate the 2 inline data graphs.
- I was able to generate the "remote data" graph.

### 4. Problem-solving:

- Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
  - I was able to generate the 2 inline data graphs.
	 - I was able to generate the "remote data" graph.
  - I was able to build a callback function to process remote data (received via ajax).
	 - I was able to make the realtime graph refresh in real time.
	
### 5. Debugging:

 - I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:

 - If I disable javascript, the user experience is satisfactory, the user has access to data and content
 - If I enable javascript, the tables are enhanced with an interactive graph.
