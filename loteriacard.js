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
var deck=[];
var cards=[
	{value:1,title: "1 - El Gallo"},
	{value:2,title: "2 - El Diablito"},
	{value:3,title: "3 - La Dama"},
	{value:4,title: "4 - El Catrin"},
	{value:5,title: "5 - El Paraguas"},
	{value:6,title: "6 - La Sirena"},
	{value:7,title: "7 - La Escalera"},
	{value:8,title: "8 - La Botella"},
	{value:9,title: "9 - El Barril"},
	{value:10,title: "10 - El Arbol"},
	{value:11,title: "11 - El Melon"},
	{value:12,title: "12 - El Valiente"},
	{value:13,title: "13 - El Gorrito"},
	{value:14,title: "14 - La Muerte"},
	{value:15,title: "15 - La Pera"},
	{value:16,title: "16 - La Bandera"},
	{value:17,title: "17 - El Bandolon"},
	{value:18,title: "18 - El Violoncello"},
	{value:19,title: "19 - La Garza"},
	{value:20,title: "20 - El Pajaro"},
	{value:21,title: "21 - La Mano"},
	{value:22,title: "22 - La Bota"},
	{value:23,title: "23 - La Luna"},
	{value:24,title: "24 - El Cotorro"},
	{value:25,title: "25 - El Borracho"},
	{value:26,title: "26 - El Negrito"},
	{value:27,title: "27 - El Corazon"},
	{value:28,title: "28 - La Sandia"},
	{value:29,title: "29 - El Tambor"},
	{value:30,title: "30 - El Camaron"},
	{value:31,title: "31 - Las Jaras"},
	{value:32,title: "32 - El Musico"},
	{value:33,title: "33 - La Arana"},
	{value:34,title: "34 - El Soldado"},
	{value:35,title: "35 - La Estrella"},
	{value:36,title: "36 - El Cazo"},
	{value:37,title: "37 - El Mundo"},
	{value:38,title: "38 - El Apache"},
	{value:39,title: "39 - El Nopal"},
	{value:40,title: "40 - El Alacran"},
	{value:41,title: "41 - La Rosa"},
	{value:42,title: "42 - La Calavera"},
	{value:43,title: "43 - La Campana"},
	{value:44,title: "44 - El Cantarito"},
	{value:45,title: "45 - El Venado"},
	{value:46,title: "46 - El Sol"},
	{value:47,title: "47 - La Corona"},
	{value:48,title: "48 - La Chalupa"},
	{value:49,title: "49 - El Pino"},
	{value:50,title: "50 - El Pescado"},
	{value:51,title: "51 - La Palma"},
	{value:52,title: "52 - La Maceta"},
	{value:53,title: "53 - El Arpa"},
	{value:54,title: "54 - La Rana"}
]
let switchImageMaster= function(e) {
	let switch_name=this.name;
	let image_name="myImage"+switch_name.replace("switch","");
	var doc_switch=document.getElementsByName(switch_name)[0];//apparently this always returns an array
	var doc_image=document.getElementsByName(image_name)[0];//apparently this always returns an array
  let selectedImage =doc_switch.options[doc_switch.selectedIndex].value;
  doc_image.src = imageList[selectedImage].src;
}
function shuffle(){
	let tmp_deck=[];
	for(let i=1;i<=54;i++){
		let tmp_obj={};
		tmp_obj.card_val=i;
		tmp_obj.rnd=Math.random();
		tmp_deck.push(tmp_obj);
	}
	tmp_deck.sort((a,b)=>{
		return a.rnd-b.rnd;
	});
	for(let i=0;i<54;i++){
		let card_val=tmp_deck[i].card_val;
		deck.push(card_val);
	}
}
function buildHTML(){
	//there are 16 cards arranged in a 4x4 table
	shuffle();
	//get the table body
	let tbody=document.getElementById("tbody_insert");
	//build the html elements
	let cur_pos=0;
	for(let r=1;r<=4;r++){
		let cur_row=document.createElement("tr");
		cur_row.name="row"+r;
		for(let c=1;c<=4;c++){
			cur_pos+=1;
			let cur_col=document.createElement("td");
			cur_col.innerText="Card "+cur_pos;
			let cur_img=document.createElement("img");
			cur_img.src="images/loteria 5x7 "+deck[cur_pos]+".jpg"
			cur_img.width="300";
			cur_img.height="420";
			cur_img.name="myImage"+(cur_pos);
			let cur_form=document.createElement("form");
			cur_form.method="";
			cur_form.action="";
			cur_form.name="myForm"+cur_pos;
			let cur_sel=document.createElement("select");
			cur_sel.size="1";
			cur_sel.name="switch"+cur_pos;
			cur_sel.onchange=switchImageMaster;
			for(let o=0;o<54;o++){
				let cur_opt=document.createElement("option");
				cur_opt.value=cards[o].value;
				if(cards[o].value==deck[cur_pos]){
					cur_opt.selected="selected";
				}
				cur_opt.innerText=cards[o].title;
				cur_sel.appendChild(cur_opt)
			}
			//build form
			cur_form.appendChild(cur_sel);
			//build the column
			cur_col.appendChild(cur_img);
			cur_col.appendChild(cur_form)
			//add column to row
			cur_row.appendChild(cur_col);
		}
		//now add the row to the table body
		tbody.appendChild(cur_row)
	}
}

setTimeout(function () {
	buildHTML();
}, 1);
