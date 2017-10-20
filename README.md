# p5-Documentation  
A Javascript addon to add documentation features to your [p5js](https://p5js.org/) sketch. Gets the documentation of your sketch from a markdown file hosted online. (You can set it to README.md of your project)  
###### Screenshot:  
![Screenshot](https://i.imgur.com/clL2LgI.png)

## Usage  
* Download the JS,CSS file and the dependencies, and add them to the index.html file of your sketch.

###### Sample: 
```html
 <html>
    <head>
      <link rel="stylesheet" href="libraries/p5-documentation.css">
    </head>
    <body>
  
      <!-- javascirpt -->
      <script src="libraries/jquery-3.2.1.min.js" charset="utf-8"></script>      
      <script src="libraries/p5.js"></script>
      <script src="libraries/p5.dom.js"></script>
      <script src="libraries/p5.sound.js"></script>
      <script src="libraries/tagdown.js" charset="utf-8"></script>
      <script src="p5-documentation.js" charset="utf-8"></script>
      <script src="sketch.js"></script>  
    </body>
  </html>
  ```  
  
* In your sketch's setup function, call setupDocumentation(DOCUMENTATION_URL), where DOCUMENTATION_URL is the raw link to your README.md  
###### Sample:  
```javascript
      function setup()
      {
        setupDocumentation("https://raw.githubusercontent.com/haideralipunjabi/p5-projects/master/archimedes-clock/README.md");  
      }
```
_ __Note:__ You don't need to use createCanvas() after setupDocumentation()_  

## Dependencies

  * [p5js](https://p5js.org/)
  * [jQuery](https://jquery.com/) -- Trying to remove this
  * TagdownJS (Originaly By: [spikespaz](https://github.com/spikespaz/))  

## Contributing/Work in progress  
I am not an expert in JS or p5, and would like if people helped me in improving this.  
 #### Things I plan on adding:
 * [ ] Style code, add comments
