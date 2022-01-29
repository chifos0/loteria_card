// Adapted from code provided by SparoHawk from Stack Overflow
// https://stackoverflow.com/questions/22254608/change-image-based-on-dropdown-using-javascript

// This is the code to preload the images
let imageList = Array();
for (let i = 1; i <= 54; i++) {
  imageList[i] = new Image(300, 420);
  imageList[i].src = "images/loteria 5x7 " + i + ".jpg";
}

// 16 functions...hope to eventually learn how to cut this down to 1 function to control all 16 squares. Would be much neater code!
// At least I got rid of all the uses of 'var'!

function switchImageMaster(switch_name, image_name) {
	var doc_switch=document.getElementsByName(switch_name)[0];//apparently this always returns an array
	var doc_image=document.getElementsByName(image_name)[0];//apparently this always returns an array
  let selectedImage =doc_switch.options[doc_switch.selectedIndex].value;
  doc_image.src = imageList[selectedImage].src;
}
