//Pop up a window to say "HELLO"
alert("This website is for educational purposes (copyright)");

//Javascript array: to store a collection of images
let images = ["Images/slideshow1/1.jpg", 
			  "Images/slideshow1/13.jpg", 
			  "Images/slideshow1/2.jpg", 
			  "Images/slideshow1/14.jpg", 
			  "Images/slideshow1/3.jpg", 
			  "Images/slideshow1/15.jpg", 
			  "Images/slideshow1/4.jpg", 
			  "Images/slideshow1/17.jpg", 
			  "Images/slideshow1/5.jpg", 
			  "Images/slideshow1/18.jpg", 
			  "Images/slideshow1/6.jpg", 
			  "Images/slideshow1/19.jpg",	
              "Images/slideshow1/7.jpg",	
              "Images/slideshow1/20.jpg",	
              "Images/slideshow1/8.jpg",	
              "Images/slideshow1/12.jpg",
              "Images/slideshow1/9.jpg",		
              "Images/slideshow1/11.jpg",	
              "Images/slideshow1/10.jpg"			  
			 ];

//Declare a variable to store index
let index = 0;

//Write the code to create automatic slideshow
function autoSlideShow() {
	//Increase the index by 1 only if it's not reaching the last image
	if (index == images.length - 1 ) {
		index = 0;//Move to the first image
	} else {
		index = index + 1;//Increase the index by 1
	}
	
	//Display the current image based on its index to html
	//Change the source of img element on HTML fileCreatedDate
	//Find the image with id="slideShowImage" and change its source
	document.getElementById("slideShowImage").src = images[index];
	
	
	//Wait 1.5second and then call the function to display next image
	setTimeout(autoSlideShow, 1500);//wait 1500ms = 1.5 second
}

//Call to Execute this autoSlideShow() function
autoSlideShow();

