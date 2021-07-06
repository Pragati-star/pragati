//// for slide show /////

$(".slideshow").swiper({
	imageList: [
		"data/film1.jpg",
		"data/film2.jpg",
		"data/film3.jpg",
		"data/film4.jpg",
		"data/film5.jpg",
	],
	animateType: "fade",
	changeBtn: true,
	slideBtn: true,
	isAuto: true,
});

home = document.getElementById("home");
about = document.getElementById("about");
book = document.getElementById("book");

function getHome() {
	about.className = "invisible";
	book.className = "invisible";
	home.className = "homeOn";
}
function getAbout() {
	home.className = "invisible";
	book.className = "invisible";
	about.className = "aboutOn";
}

function getBook() {
	home.className = "invisible";
	about.className = "invisible";
	book.className = "bookOn";
	defaultOption();
}

//// displaying contents of movies //////

const data = [
	{
		id: 1,
		title: "Doctor Strange",
		booking: "open",
		Poster: "data/film1.jpg",
		time: " 6 Am -- 9 AM",
		description:
			"Marvel's Doctor Strange follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.",
		seats: [
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
		],
	},
	{
		id: 2,
		title: "SPIDER-MAN: HOMECOMING",
		booking: "open",
		Poster: "data/film2.jpg",
		time: " 10 AM -- 1 PM",
		description:
			"Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.",
		seats: [
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
		],
	},
	{
		id: 3,
		title: "3 Idiots",
		booking: "open",
		Poster: "data/film3.jpg",
		time: " 2 PM -- 5PM",
		description:
			"Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
		seats: [
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
		],
	},
	{
		id: 4,
		title: "Dhamaal",
		booking: "open",
		Poster: "data/film4.jpg",
		time: " 6 PM -- 9 PM",
		description:
			"Four lazy slacker conmen buddies who are jobless, homeless and broke learn about the secret of a hidden treasure from a dying thief and later embark on a race against time to find the mobster's buried treasure and claim it while being pursued by a determined police inspector who is hellbent to get the treasure all by himself.",
		seats: [
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
		],
	},
	{
		id: 5,
		title: "Swades",
		booking: "open",
		Poster: "data/film5.jpg",
		time: "10 PM -- 1 AM",
		description:
			"Swades is a terrific movie which sends a message of patriotic love. Mohan Bhargava(SRK) is a scientist working for NASA who returns India to take back an elderly women(Kaveriamma) who helped him grew up. Mohan discovers, and realizes more about Indian origins. He realizes that his country requires him more than any other country. He starts and successfully completes a project of providing electricity to the village in which Kaveriamma is residing. He falls in love with Gita, a school teacher, who stays with Kaveriamma. He realizes the importance of staying in India with her and after one trip decides to stay forever in India.",
		seats: [
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
			"open",
		],
	},
	{
		id: 6,
		title: "Parineeta",
		booking: "close",
		Poster: "data/film6.jpg",
		description:
			"Lolita (Vidya Balan) lives with her financially strapped uncle. Since childhood, she has been in love with her next-door neighbor, Shekhar (Saif Ali Khan), whose father, Navinchandra (Sabyasachi Chakraborty), is a wealthy but heartless businessman. When Lolita discovers Navinchandra's plan to seize her uncle's home and turn it into a hotel, she decides to seek help from the wealthy Girish (Sanjay Dutt). Shekhar, however, jealously suspects romantic motives are behind Lolita's entreaty.",
		seats: null,
	},
	{
		id: 7,
		title: "Ekk Deewana Tha",
		booking: "close",
		Poster: "data/film7.jpg",
		description:
			"Sachin and his Hindu Bramhin family rent the apartment of a strict Malayali Christian family. Although he has a certificate in auto-mobile engineering; his passion is to be a film director. When Sachin meets the daughter of this family Jessie he fall head-over-heels in love with her and even professes love to her. But Jessie confides to Sachin that she does not want a romantic relationship but would prefer friendship due to certain norms of her family and then all is reveal to her family with her dad arranging her marriage elsewhere leading to fist-cuffs between Jessie's brother Jerry and Sachin - with Sachin as a liability to this family it looks like his dream of being with Jessie will never come through.",
		seats: null,
	},
	{
		id: 8,
		title: "Raanjhanaa",
		booking: "close",
		Poster: "data/film8.jpg",
		description:
			"The pundit's son Kundan (Dhanush) has fallen for the girl at first sight. That they're both kids makes us dismiss it as a meaningless crush. But a few years later, the boy is still in love with the girl, Zoya (Sonam Kapoor). When she's in school, he follows her around holding her hand and getting slapped in the process. Finally, she relents because of his consistency. The film shifts cities when Zoya gets into JNU (Jawaharlal Nehru University), and through her, we are introduced to the idealistic and political culture of the place. She discovers a long-lost strength as she confronts and then falls for student leader Akram (Abhay Deol). The film takes a turn when Zoya returns to her hometown after eight long years only to find some things changed, and others surprisingly the same",
		seats: null,
	},
	{
		id: 9,
		title: "Chhichhore",
		booking: "close",
		Poster: "data/film9.jpg",
		description:
			" Raghav, son of high achieving parents succumbs to the pressure that comes with cut-throat entrance exams. As he battles for life in a hospital, his parents regroup with their friends after decades. Together, this older generation, goes on a nostalgia trip reminiscing their college days, hoping their bittersweet memories will help save a teenager, who has lost all will to live.",
		seats: null,
	},
	{
		id: 10,
		title: "Unbroken",
		booking: "close",
		Poster: "data/film10.jpg",
		description:
			"Chronicles the life of Louie Zamperini, an Olympic athlete in the 1936 Berlin Olympics-turned-WWII plane crash survivor and prisoner in two Japanese POW camps. From a rebellious childhood to a life of glory, bravery, and triumph, Louie finds his strength, his fight, and his faith.",
		seats: null,
	},
];

movie_title = document.getElementById("movie_title");
movie_poster = document.getElementById("movie_poster");
description = document.getElementById("description");
//// we cannot directly inject the path of url using js so we first make string and then we inject////
function urlchanger(address) {
	link = "url(" + address + ")";
	return link;
}
function change(title, photo_address, descript) {
	movie_title.innerHTML = title;
	movie_poster.style.backgroundImage = urlchanger(photo_address);
	description.innerHTML = descript;
}

function checkOpenClosed(string) {
	openclose_button = document.getElementById("openclose_button");
	button_function = document.getElementById("button_function");

	if (string == "open") {
		openclose_button.innerHTML = "Book Now";
		button_function.onclick = getBook;
	} else {
		openclose_button.innerHTML = "Booking Closed";
		button_function.onclick = null;
	}
}

function showItem1() {
	change(data[0].title, data[0].Poster, data[0].description);
	checkOpenClosed(data[0].booking);
}
function showItem2() {
	change(data[1].title, data[1].Poster, data[1].description);
	checkOpenClosed(data[1].booking);
}
function showItem3() {
	change(data[2].title, data[2].Poster, data[2].description);
	checkOpenClosed(data[2].booking);
}
function showItem4() {
	change(data[3].title, data[3].Poster, data[3].description);
	checkOpenClosed(data[3].booking);
}
function showItem5() {
	change(data[4].title, data[4].Poster, data[4].description);
	checkOpenClosed(data[4].booking);
}
function showItem6() {
	change(data[5].title, data[5].Poster, data[5].description);
	checkOpenClosed(data[5].booking);
}
function showItem7() {
	change(data[6].title, data[6].Poster, data[6].description);
	checkOpenClosed(data[6].booking);
}
function showItem8() {
	change(data[7].title, data[7].Poster, data[7].description);
	checkOpenClosed(data[7].booking);
}
function showItem9() {
	change(data[8].title, data[8].Poster, data[8].description);
	checkOpenClosed(data[8].booking);
}

t1 = document.getElementById("t1");
t2 = document.getElementById("t2");
t3 = document.getElementById("t3");
t4 = document.getElementById("t4");
t5 = document.getElementById("t5");
t6 = document.getElementById("t6");
t7 = document.getElementById("t7");
t8 = document.getElementById("t8");
t9 = document.getElementById("t9");

function posterTiles() {
	t1.style.backgroundImage = urlchanger(data[0].Poster);
	t2.style.backgroundImage = urlchanger(data[1].Poster);
	t3.style.backgroundImage = urlchanger(data[2].Poster);
	t4.style.backgroundImage = urlchanger(data[3].Poster);
	t5.style.backgroundImage = urlchanger(data[4].Poster);
	t6.style.backgroundImage = urlchanger(data[5].Poster);
	t7.style.backgroundImage = urlchanger(data[6].Poster);
	t8.style.backgroundImage = urlchanger(data[7].Poster);
	t9.style.backgroundImage = urlchanger(data[8].Poster);
}

name1 = document.getElementById("name1");
time1 = document.getElementById("time1");
name2 = document.getElementById("name2");
time2 = document.getElementById("time2");
name3 = document.getElementById("name3");
time3 = document.getElementById("time3");
name4 = document.getElementById("name4");
time4 = document.getElementById("time4");
name5 = document.getElementById("name5");
time5 = document.getElementById("time5");

function injectTable() {
	name1.innerHTML = data[0].title;
	time1.innerHTML = data[0].time;
	name2.innerHTML = data[1].title;
	time2.innerHTML = data[1].time;
	name3.innerHTML = data[2].title;
	time3.innerHTML = data[2].time;
	name4.innerHTML = data[3].title;
	time4.innerHTML = data[3].time;
	name5.innerHTML = data[4].title;
	time5.innerHTML = data[4].time;
}

const personData = [
	{
		id: 1,
		name: "Aashish Bhandari",
		info:
			"Hi, I am Aashish Bhandari from Nepal currently persuing B.Tech Computer science and Engineering (Hons.) at Lovely Professional University, Phagwara, Punjab.",
		twitter: "https://twitter.com/Aaahish4",
		linkedin: "https://www.linkedin.com/in/aashish-bhandari-ab025b1a6/",
		instagram: "https://www.instagram.com/i_am_aashish.b/",
		emailId: "mailto:aashishbhandari365@gmail.com",
		photo: "data/person1.jpg",
	},
	{
		id: 2,
		name: "Pragati",
		info:
			"Hi, I am Pragati from Muzaffarpur, Bihar, India currently persuing B.Tech Computer science and Engineering (Hons.) at Lovely Professional University, Phagwara, Punjab.",
		twitter: "#",
		linkedin: "https://www.linkedin.com/in/thakur-pragati-7289421b6/",
		instagram: "https://www.instagram.com/i_thakur_pra_gati/",
		emailId: "mailto:pragati2004muz@gmail.com",
		photo: "data/person2.jpg",
	},
	{
		id: 3,
		name: "HARSHIN MANSOOR",
		info:
			"Hi, I am HARSHIN MANSOOR from KERALA currently persuing B.Tech Computer science and Engineering (Hons.) at Lovely Professional University, Phagwara, Punjab.",
		twitter: "https://twitter.com/harshin_mansoor",
		instagram: "https://www.instagram.com/har_shi___n/",
		linkedin: "https://www.linkedin.com/in/harshin-mansoor-6525a820a/",
		emailId: "mailto:harshinmansoor4057@gmail.com",
		photo: "data/person3.jpg",
	},
];
photo1 = document.getElementById("photo1");
photo2 = document.getElementById("photo2");
photo3 = document.getElementById("photo3");
about_person1 = document.getElementById("about_person1");
about_person2 = document.getElementById("about_person2");
about_person3 = document.getElementById("about_person3");

function injectData() {
	about_person1.innerHTML = personData[0].info;
	about_person2.innerHTML = personData[1].info;
	about_person3.innerHTML = personData[2].info;
	photo1.style.backgroundImage = urlchanger(personData[0].photo);
	photo2.style.backgroundImage = urlchanger(personData[1].photo);
	photo3.style.backgroundImage = urlchanger(personData[2].photo);
}

function li1() {
	location.href = personData[0].linkedin;
}
function li2() {
	location.href = personData[1].linkedin;
}
function li3() {
	location.href = personData[2].linkedin;
}

function tw1() {
	location.href = personData[0].twitter;
}
function tw2() {
	location.href = personData[1].twitter;
}
function tw3() {
	location.href = personData[2].twitter;
}

function in1() {
	location.href = personData[0].instagram;
}
function in2() {
	location.href = personData[1].instagram;
}
function in3() {
	location.href = personData[2].instagram;
}

function em1() {
	location.href = personData[0].emailId;
}
function em2() {
	location.href = personData[1].emailId;
}
function em3() {
	location.href = personData[2].emailId;
}

seat_booking_page = document.getElementById("seat_booking_page");
user_data = document.getElementById("user_data");
thanks = document.getElementById("thanks_page");

function defaultOption() {
	thanks.className = "invisible";
	seat_booking_page.className = "invisible";
	user_data.className = "on_User_data";
}

user_input_data = new Object();

function getInfo() {
	user_input_data.Uname = document.getElementById("name").value;
	user_input_data.Uemail = document.getElementById("email").value;
	user_input_data.Unumber = document.getElementById("number").value;
	user_input_data.Uaddress = document.getElementById("address").value;
}

function pass(object) {
	if (
		object.Uname != "" &&
		object.Uemail != "" &&
		object.Unumber != "" &&
		object.Uaddress != "" &&
		object.Uemail.indexOf("@") != -1
	) {
		return true;
	} else {
		return false;
	}
}

function on_confirm_user_data() {
	getInfo();
	if (pass(user_input_data)) {
		seat_booking_page.className = "on_seat_booking_page";
		user_data.className = "invisible";
		thanks.className = "invisible";
		mv1.style.backgroundImage = urlchanger(data[0].Poster);
		mv2.style.backgroundImage = urlchanger(data[1].Poster);
		mv3.style.backgroundImage = urlchanger(data[2].Poster);
		mv4.style.backgroundImage = urlchanger(data[3].Poster);
		mv5.style.backgroundImage = urlchanger(data[4].Poster);
		showMv1();
	} else {
		alert("please fill the form properly");
	}
}

film_set = [];
function finalConfirm() {
	userName = document.getElementById("userName");
	total_seats = document.getElementById("seat_choosed");

	var seat_set = new Set(booked_seats);
	list = "";
	for (item of seat_set.values()) {
		list += item + " ";
	}
	if (list == "") {
		alert(" please choose at least one seats");
	} else {
		seat_booking_page.className = "invisible";
		user_data.className = "invisible";
		thanks.className = "on_thanksPage";
		thanksmaking();
		userName.innerHTML = user_input_data.Uname;
		total_seats.innerHTML = list;
	}
}

mv1 = document.getElementById("mv1");
mv2 = document.getElementById("mv2");
mv3 = document.getElementById("mv3");
mv4 = document.getElementById("mv4");
mv5 = document.getElementById("mv5");

Mv_name = document.getElementById("Mv_name");
a11 = document.getElementById("A11");
a12 = document.getElementById("A12");
a13 = document.getElementById("A13");
a14 = document.getElementById("A14");
a15 = document.getElementById("A15");

a21 = document.getElementById("A21");
a22 = document.getElementById("A22");
a23 = document.getElementById("A23");
a24 = document.getElementById("A24");
a25 = document.getElementById("A25");

a31 = document.getElementById("A31");
a32 = document.getElementById("A32");
a33 = document.getElementById("A33");
a34 = document.getElementById("A34");
a35 = document.getElementById("A35");

a41 = document.getElementById("A41");
a42 = document.getElementById("A42");
a43 = document.getElementById("A43");
a44 = document.getElementById("A44");
a45 = document.getElementById("A45");

a51 = document.getElementById("A51");
a52 = document.getElementById("A52");
a53 = document.getElementById("A53");
a54 = document.getElementById("A54");
a55 = document.getElementById("A55");

b11 = document.getElementById("B11");
b12 = document.getElementById("B12");
b13 = document.getElementById("B13");
b14 = document.getElementById("B14");
b15 = document.getElementById("B15");

b21 = document.getElementById("B21");
b22 = document.getElementById("B22");
b23 = document.getElementById("B23");
b24 = document.getElementById("B24");
b25 = document.getElementById("B25");

b31 = document.getElementById("B31");
b32 = document.getElementById("B32");
b33 = document.getElementById("B33");
b34 = document.getElementById("B34");
b35 = document.getElementById("B35");

b41 = document.getElementById("B41");
b42 = document.getElementById("B42");
b43 = document.getElementById("B43");
b44 = document.getElementById("B44");
b45 = document.getElementById("B45");

b51 = document.getElementById("B51");
b52 = document.getElementById("B52");
b53 = document.getElementById("B53");
b54 = document.getElementById("B54");
b55 = document.getElementById("B55");

function background(string) {
	if (string == "close") {
		return "red";
	} else {
		return "green";
	}
}
function changeBookingContent(array, title) {
	Mv_name.innerHTML = title;
	a11.style.backgroundColor = background(array[0]);
	a12.style.backgroundColor = background(array[1]);
	a13.style.backgroundColor = background(array[2]);
	a14.style.backgroundColor = background(array[3]);
	a15.style.backgroundColor = background(array[4]);

	a21.style.backgroundColor = background(array[5]);
	a22.style.backgroundColor = background(array[6]);
	a23.style.backgroundColor = background(array[7]);
	a24.style.backgroundColor = background(array[8]);
	a25.style.backgroundColor = background(array[9]);

	a31.style.backgroundColor = background(array[10]);
	a32.style.backgroundColor = background(array[11]);
	a33.style.backgroundColor = background(array[12]);
	a34.style.backgroundColor = background(array[12]);
	a35.style.backgroundColor = background(array[14]);

	a41.style.backgroundColor = background(array[15]);
	a42.style.backgroundColor = background(array[16]);
	a43.style.backgroundColor = background(array[17]);
	a44.style.backgroundColor = background(array[18]);
	a45.style.backgroundColor = background(array[19]);

	a51.style.backgroundColor = background(array[20]);
	a52.style.backgroundColor = background(array[21]);
	a53.style.backgroundColor = background(array[22]);
	a54.style.backgroundColor = background(array[23]);
	a55.style.backgroundColor = background(array[24]);

	b11.style.backgroundColor = background(array[25]);
	b12.style.backgroundColor = background(array[26]);
	b13.style.backgroundColor = background(array[27]);
	b14.style.backgroundColor = background(array[28]);
	b15.style.backgroundColor = background(array[29]);

	b21.style.backgroundColor = background(array[30]);
	b22.style.backgroundColor = background(array[31]);
	b23.style.backgroundColor = background(array[32]);
	b24.style.backgroundColor = background(array[33]);
	b25.style.backgroundColor = background(array[34]);

	b31.style.backgroundColor = background(array[35]);
	b32.style.backgroundColor = background(array[36]);
	b33.style.backgroundColor = background(array[37]);
	b34.style.backgroundColor = background(array[38]);
	b35.style.backgroundColor = background(array[39]);

	b41.style.backgroundColor = background(array[40]);
	b42.style.backgroundColor = background(array[41]);
	b43.style.backgroundColor = background(array[42]);
	b44.style.backgroundColor = background(array[43]);
	b45.style.backgroundColor = background(array[44]);

	b51.style.backgroundColor = background(array[45]);
	b52.style.backgroundColor = background(array[46]);
	b53.style.backgroundColor = background(array[47]);
	b54.style.backgroundColor = background(array[48]);
	b55.style.backgroundColor = background(array[49]);
}

seats_container = document.getElementById("seats_container");

var finalTitle = "";
function showMv1() {
	changeBookingContent(data[0].seats, data[0].title);
	finalTitle = data[0].title;
}
function showMv2() {
	changeBookingContent(data[1].seats, data[1].title);
	finalTitle = data[1].title;
}
function showMv3() {
	changeBookingContent(data[2].seats, data[2].title);
	finalTitle = data[2].title;
}
function showMv4() {
	changeBookingContent(data[3].seats, data[3].title);
	finalTitle = data[3].title;
}
function showMv5() {
	changeBookingContent(data[4].seats, data[4].title);
	finalTitle = data[4].title;
}

function colorchange(id) {
	document.getElementById(id).style.backgroundColor = "red";
}

var booked_seats = [];

function addseats(seatName) {
	booked_seats.push(seatName);
	colorchange(seatName);
}

function thanksmaking() {
	selectedMovie = document.getElementById("selectedMovie");
	selectedMovie.innerHTML = finalTitle;
}

(window.onload = posterTiles),
	getHome,
	showItem1(),
	injectTable(),
	injectData(),
	defaultOption();

navbar = document.getElementById("navbar");
logo_base = document.getElementById("logo-base");
nav = document.getElementById("nav");
function fixed_nav() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		navbar.className = "navbar_fixed";
		logo_base.className = "black_logo";
		nav.className = "black_nav";
	} else {
		navbar.className = "navbar";
		logo_base.className = "logo-base";
		nav.className = "nav";
	}
}

window.onscroll = function () {
	fixed_nav();
};
