$(document).ready(function(){

	function TeamMate(name, major, picLink, technical) {
		this.name = name;
		this.major = major;
		this.picLink = picLink;
		this.bio = "";
		this.technicalPaper = technical;
		this.whenClicked = function() {
			console.log("Hello " + this.name);
		}
	};

	// function loadJSON(callback) {   

	//     var xobj = new XMLHttpRequest();
	//         xobj.overrideMimeType("application/json");
	//     xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
	//     xobj.onreadystatechange = function () {
	//           if (xobj.readyState == 4 && xobj.status == "200") {
	//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	//             callback(xobj.responseText);
	//           }
	//     };
	//     xobj.send(null);  
	//  }

	window.sr = ScrollReveal({ reset: true });
	var firstTime = true;

	sr.reveal('#toolbar', {
		duration: 200,
		origin: 'top',
		distance: '500px',
		easing: 'ease-in-out',
		opacity: 0
	});

	sr.reveal('#sub_tool_bar', {
		duration: 200,
		origin: 'top',
		distance: '500px',
		easing: 'ease-in-out',
		opacity: 0
	});

	$("#team_member_one").click(function(){
		console.log("Hello");
		setModal(new TeamMate("Joanne", "Computer Engineering", "./Joanne.jpg", "Joanne_Technical_Review.pdf"));
    	
	});

	$("#team_member_two").click(function(){
		console.log("Hello");
    	setModal(new TeamMate("Anjali Shankar", "Computer Engineering", "./Anjali.jpg", "Anjali_Technical_Review.pdf"));
	});

	$("#team_member_three").click(function(){
		console.log("Hello");
    	setModal(new TeamMate("Ganapathy Hari Narayan", "Computer Engineering", "Hari.jpg", "Hari_Technical_Review.pdf"));
	});

	$("#team_member_four").click(function(){
		console.log("Hello");
    	setModal(new TeamMate("Annu George", "Computer Engineering", "./Annu.jpg", "Annu_Technical_Review.pdf"));
	});

	$("#team_member_five").click(function(){
		console.log("Hello");
    	setModal(new TeamMate("Neha Nair", "Computer Engineering", "./Neha.jpg", "Neha_Technical_Review.pdf"));
	});

	$("#menu_item_1").click(function(){
		$(document).scrollTop(0);
	});

	$("#menu_item_2").click(function(){
		$(document).scrollTop(650);
	});

	$("#menu_item_3").click(function(){
		$(document).scrollTop(1300);
	});

	function setModal(personDetails) {
		console.log(personDetails);
		$("#myModal").css("display", "block");
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);
		var html = template(personDetails);
		console.log(html);
		$('.modal-content').html(html);
		$(".close").click(function(){
			$("#myModal").css("display", "none");
		});
	}

	setInterval(
		function() {
			console.log($("#team_member_div").scrollLeft());
			if ($(document).scrollTop() >= 20) {
		    	$("#toolbar").css({"top": "-100px"});
		    	$("#sub_tool_bar").css({"top": "0px"});
			} else {
			    	$("#toolbar").css({"top": "0px"});
			    	$("#sub_tool_bar").css({"top": "70px"});
			}

			if ($(document).scrollTop() <= 200) {
				$("#menu_item_1").removeClass("underline");
				$("#menu_item_2").removeClass("underline");
				$("#menu_item_3").removeClass("underline");
				//$("body").removeClass("changeBack1");
				//$("body").addClass("changeBack2");
				//$("body").removeClass("changeBack3");
				$("#sub_tool_bar").css("opacity", "1.0");
				$("#sub_tool_bar").css("background-color", "#763234");
				
				$("#menu_item_1").addClass("underline");
				$("#team_member_one").removeClass("opacity-one");
				$("#team_member_two").removeClass("opacity-two");
				$("#team_member_three").removeClass("opacity-three");
				$("#team_member_four").removeClass("opacity-four");
				$("#team_member_five").removeClass("opacity-five");
			} else if ($(document).scrollTop() > 200 && $(document).scrollTop() < 770){
				
				$("#sub_tool_bar").css("opacity", "1.0");
				$("#sub_tool_bar").css("background-color", "#763234");
				
				$("#menu_item_2").removeClass("underline");
				$("#menu_item_1").removeClass("underline");
				$("#menu_item_3").removeClass("underline");
				$("#menu_item_2").addClass("underline");
				//$("body").addClass("changeBack1");
				//$("body").removeClass("changeBack2");
				//$("body").removeClass("changeBack3");
				$("#team_member_one").addClass("opacity-one");
				$("#team_member_two").addClass("opacity-two");
				$("#team_member_three").addClass("opacity-three");
				$("#team_member_four").addClass("opacity-four");
				$("#team_member_five").addClass("opacity-five");
			} else {
				$("#menu_item_3").addClass("underline");
				$("#menu_item_2").removeClass("underline");
				$("#menu_item_1").removeClass("underline");
				//$("body").removeClass("changeBack2");
				//$("body").addClass("changeBack3");
				//$("body").removeClass("changeBack1");
			}
		}, 
		200);

});