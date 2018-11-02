var bttn_one = document.getElementsByClassName("con1b") ;
var bttn_second = document.getElementsByClassName("con1a") ;
var html_tag = document.getElementsByClassName("one");
var measure = document.getElementsByClassName("measure");
var taking_body = document.getElementsByClassName("body")

function signAdd(){
	var clas = document.getElementsByClassName("first1"); // getElemensByClassName() method always gives an array of Html elements having the same class.
	var anima = document.getElementsByClassName("con2");
	var anima1 = document.getElementsByClassName("con3");
	var con = document.getElementsByClassName("container");
	var ret1 = document.getElementsByClassName("naya");
	var newclass1 = document.getElementsByClassName("naya2");
	anima[0].classList.add("anima1","con2a");
	anima1[0].classList.add("anima","con3a");
	anima1[0].classList.remove("con3")
	bttn_one[0].classList.add("con1ba");
	bttn_one[0].classList.remove("con1b");
	con[0].classList.add("anima3","container1");
	con[0].classList.remove("container");
	clas[0].classList.add("first2");
	ret1[0].classList.add("naya1");
	measure[0].style.margintop = '';
	newclass1[0].addEventListener("click", function(){
		location.reload();
	});
};

bttn_one[0].addEventListener("click", function(){
	signAdd();
});


function loginAdd(){
	var  clas1 = document.getElementsByClassName("con3");
	var clas2 = document.getElementsByClassName("con2");
	var clas3 = document.getElementsByClassName("con4");
	var clas4 = document.getElementsByClassName("con1a");
	var con = document.getElementsByClassName("container");
	var ret = document.getElementsByClassName("new");
	var newclass = document.getElementsByClassName("new2");
	clas1[0].classList.add("anima4","con3b");
	clas2[0].classList.add("anima5","con2b");
	clas2[0].classList.remove("con2");
	clas3[0].classList.add("con5");
	clas4[0].classList.add("con1ab");
	clas4[0].classList.add("con1a");
	con[0].classList.add("anima3","container1");
	ret[0].classList.add("new1");
	newclass[0].addEventListener("click", function(){
		location.reload();
	});
};



bttn_second[0].addEventListener("click", function(){
	loginAdd();
});
