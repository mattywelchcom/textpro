//Submit Button

function fnSubmit() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");
	if (serif.checked == true && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		bold.checked = true;
		fnSerifBold();
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSans();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		serif.checked = true;
		fnSerifBold();
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSerifBold();
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSansBold();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		serif.checked = true;
		fnSerifItalic();
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == false && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSerifItalic();
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == false && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSansItalic();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		serif.checked = true;
		fnSerifBoldItalic();
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == true && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSerifBoldItalic();
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == true && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSansBoldItalic();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == true && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnUnderline();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == true && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnStrikethrough();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == true && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnSmallcaps();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == true && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnScript();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == true && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnBoldScript();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == true && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnDoublestruck();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == true && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		fnCircled();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == true && fraktur.checked == false && upsidedown.checked == false){
		fnSquared();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == true && upsidedown.checked == false){
		fnFraktur();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == true && upsidedown.checked == false){
		fnBoldFraktur();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == true){
		fnUpsidedown();
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		alert("Please select a piece of typographical emphasis before preceding. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com");
	}
	else {
		alert("Due to limitations of the Unicode standard, TextPro can not output that combonation of typgraphical emphasis. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com");
	}
}

function fnColors() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	var serifColor = document.getElementById("spnSerif");
	var sansColor = document.getElementById("spnSans");
	var boldColor = document.getElementById("spnBold");
	var italicColor = document.getElementById("spnItalic");
	var underlineColor = document.getElementById("spnUnderline");
	var strikethroughColor = document.getElementById("spnStrikethrough");
	var smallcapsColor = document.getElementById("spnSmallcaps");
	var scriptColor = document.getElementById("spnScript");
	var doublestruckColor = document.getElementById("spnDoublestruck");
	var circledColor = document.getElementById("spnCircled");
	var squaredColor = document.getElementById("spnSquared");
	var frakturColor = document.getElementById("spnFraktur");
	var upsidedownColor = document.getElementById("spnUpsidedown");

	if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if nothing is checked
		//everything is black
		
		serifColor.style.color = "#000000";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#000000";
		strikethroughColor.style.color = "#000000";
		smallcapsColor.style.color = "#000000";
		scriptColor.style.color = "#000000";
		doublestruckColor.style.color = "#000000";
		circledColor.style.color = "#000000";
		squaredColor.style.color = "#000000";
		frakturColor.style.color = "#000000";
		upsidedownColor.style.color = "#000000";
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SERIF is checked
		//SERIF, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SANS is checked
		//SANS, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just BOLD is checked
		//SERIF, SANS, BOLD, ITALIC, SCRIPT, and FRAKTUR are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#000000";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#000000";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just ITALIC is checked
		//SERIF, SANS, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just BOLD and ITALIC is checked
		//SERIF, SANS, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SERIF and BOLD is checked
		//SERIF, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SANS and BOLD is checked
		//SANS, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == false && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SERIF and ITALIC is checked
		//SERIF, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == false && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SANS and ITALIC is checked
		//SANS, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == true && sans.checked == false && bold.checked == true && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SERIF, BOLD, and ITALIC is checked
		//SERIF, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#000000";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == true && bold.checked == true && italic.checked == true && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SANS, BOLD, and ITALIC is checked
		//SANS, BOLD, and ITALIC are black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#000000";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#000000";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == true && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just UNDERLINE is checked
		//UNDERLINE is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#000000";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == true && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just STRIKETHROUGH is checked
		//STRIKETHROUGH is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#000000";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == true && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SMALLCAPS is checked
		//SMALLCAPS is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#000000";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == true && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just SCRIPT is checked
		//BOLD and SCRIPT is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#000000";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == true && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just BOLD and SCRIPT is checked
		//BOLD SCRIPT is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#000000";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == true && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just DOUBLESTRUCK is checked
		//DOUBLESTRUCK is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#000000";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == true && squared.checked == false && fraktur.checked == false && upsidedown.checked == false){
		//if just CIRCLED is checked
		//CIRCLED is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#000000";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == true && fraktur.checked == false && upsidedown.checked == false){
		//if just SQUARED is checked
		//SQUARED is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#000000";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == true && upsidedown.checked == false){
		//if just FRAKTUR is checked
		//BOLD and FRAKTUR is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#000000";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == true && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == true && upsidedown.checked == false){
		//if just BOLD and FRAKTUR is checked
		//BOLD and FRAKTUR is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#000000";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#000000";
		upsidedownColor.style.color = "#808080";
	}
	else if (serif.checked == false && sans.checked == false && bold.checked == false && italic.checked == false && underline.checked == false && strikethrough.checked == false && smallcaps.checked == false && script.checked == false && doublestruck.checked == false && circled.checked == false && squared.checked == false && fraktur.checked == false && upsidedown.checked == true){
		//if just UPSIDEDOWN is checked
		//UPSIDEDOWN is black and everything else is gray

		serifColor.style.color = "#808080";
		sansColor.style.color = "#808080";
		boldColor.style.color = "#808080";
		italicColor.style.color = "#808080";
		underlineColor.style.color = "#808080";
		strikethroughColor.style.color = "#808080";
		smallcapsColor.style.color = "#808080";
		scriptColor.style.color = "#808080";
		doublestruckColor.style.color = "#808080";
		circledColor.style.color = "#808080";
		squaredColor.style.color = "#808080";
		frakturColor.style.color = "#808080";
		upsidedownColor.style.color = "#000000";
	}
	else {
		alert("TextPro was unable to determine what checkboxes are checked and therefore can not change the colors of said checkboxes accordingly. This error may be caused by using an older broswer or a glitch in this website. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com");
	}
}

//OnClicks

function fnSerifClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	sans.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnSansClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnBoldClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var upsidedown = document.getElementById("ckUpsidedown");

	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	upsidedown.checked = false;
}

function fnItalicClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnUnderlineClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnStrikethroughClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	underline.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnSmallcapsClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnScriptClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnDoublestruckClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnCircledClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	squared.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnSquaredClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	fraktur.checked = false;
	upsidedown.checked = false;
}

function fnFrakturClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	upsidedown.checked = false;
}

function fnUpsidedownClick() {
	var serif = document.getElementById("ckSerif");
	var sans = document.getElementById("ckSans");
	var bold = document.getElementById("ckBold");
	var italic = document.getElementById("ckItalic");
	var underline = document.getElementById("ckUnderline");
	var strikethrough = document.getElementById("ckStrikethrough");
	var smallcaps = document.getElementById("ckSmallcaps");
	var script = document.getElementById("ckScript");
	var doublestruck = document.getElementById("ckDoublestruck");
	var circled = document.getElementById("ckCircled");
	var squared = document.getElementById("ckSquared");
	var fraktur = document.getElementById("ckFraktur");
	var upsidedown = document.getElementById("ckUpsidedown");

	serif.checked = false;
	sans.checked = false;
	bold.checked = false;
	italic.checked = false;
	underline.checked = false;
	strikethrough.checked = false;
	smallcaps.checked = false;
	script.checked = false;
	doublestruck.checked = false;
	circled.checked = false;
	squared.checked = false;
	fraktur.checked = false;
}


//Show More
function fnShowMore() {
	var checkbox = document.getElementById("ckMore");
	var rowthree = document.getElementById("tableRowthree");
	var rowfour = document.getElementById("tableRowfour");

	var more = document.getElementById("spnMore");
	var less = document.getElementById("spnLess");
	
	//When the More checkbox is checked, drop down the other options.
	if (checkbox.checked == true){
		rowthree.style.display = "block";
		rowfour.style.display = "block";
	}
	else if (checkbox.checked == false){
		rowthree.style.display = "none";
		rowfour.style.display = "none";
	}
	else {
		alert("TextPro was unable to determine whether the More/Less checkbox is checked and therefore can not display more or less options accordingly. This error may be caused by using an older broswer or a glitch in this website. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com");
	}


	//When the More checkbox is checked, change it's name to Less.
	if (checkbox.checked == true) {
		less.style.display = "inline";
		more.style.display = "none";
   	}
	else if (checkbox.checked == false) {
		less.style.display = "none";
		more.style.display = "inline";
	}
	else {
		alert("TextPro was unable to determine whether the More/Less checkbox is checked and therefore can not change the label of said checkbox accordingly. This error may be caused by using an older broswer or a glitch in this website. Please report this error to TextPro Support at TextPro@MattyWelch.com");
	}
}






//Sans

function fnSans() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝖠";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝖡";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝖢";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝖣";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝖤";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝖥";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝖦";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝖧";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝖨";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝖩";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝖪";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝖫";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝖬";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝖭";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝖮";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝖯";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝖰";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝖱";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝖲";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝖳";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝖴";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝖵";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝖶";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝖷";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝖸";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝖹";
		}	


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝖺";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝖻";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝖼";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝖽";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝖾";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝖿";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝗀";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝗁";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝗂";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝗃";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝗄";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝗅";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝗆";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝗇";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝗈";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝗉";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝗊";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝗋";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝗌";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝗍";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝗎";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝗏";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝗐";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝗑";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝗒";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝗓";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟣";
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟤";
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟥";
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟦";
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟧";
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟨";
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟩";
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟪";
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟫";
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟢";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Sans and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Sans. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}












//Serif: Bold

function fnSerifBold() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝐀";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝐁";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝐂";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝐃";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝐄";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝐅";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝐆";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝐇";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝐈";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝐉";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝐊";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝐋";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝐌";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝐍";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝐎";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝐏";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝐐";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝐑";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝐒";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝐓";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝐔";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝐕";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝐖";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝐗";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝐘";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝐙";
		}	


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝐚";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝐛";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝐜";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝐝";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝐞";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝐟";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝐠";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝐡";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝐢";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝐣";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝐤";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝐥";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝐦";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝐧";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝐨";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝐩";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝐪";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝐫";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝐬";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝐭";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝐮";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝐯";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝐰";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝐱";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝐲";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝐳";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟏";
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟐";
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟑";
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟒";
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟓";
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟔";
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟕";
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟖";
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟗";
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟎";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Serif and/or Bold and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Serif nor Bold. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}









//Sans: Bold

function fnSansBold() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝗔";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝗕";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝗖";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝗗";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝗘";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝗙";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝗚";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝗛";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝗜";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝗝";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝗞";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝗟";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝗠";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝗡";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝗢";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝗣";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝗤";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝗥";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝗦";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝗧";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝗨";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝗩";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝗪";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝗫";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝗬";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝗭";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝗮";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝗯";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝗰";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝗱";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝗲";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝗳";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝗴";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝗵";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝗶";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝗷";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝗸";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝗹";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝗺";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝗻";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝗼";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝗽";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝗾";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝗿";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝘀";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝘁";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝘂";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝘃";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝘄";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝘅";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝘆";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝘇";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟭";
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟮";
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟯";
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟰";
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟱";
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟲";
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟳";
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟴";
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟵";
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟬";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Sans and/or Bold and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Sans nor Bold. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}









//Serif: Italic

function fnSerifItalic() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝐴";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝐵";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝐶";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝐷";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝐸";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝐹";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝐺";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝐻";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝐼";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝐽";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝐾";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝐿";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝑀";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝑁";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝑂";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝑃";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝑄";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝑅";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝑆";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝑇";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝑈";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝑉";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝑊";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝑋";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝑌";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝑍";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝑎";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝑏";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝑐";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝑑";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝑒";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝑓";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝑔";
		}
		else if (inputstring[i] =="h") {
			newLetter = "ℎ";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝑖";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝑗";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝑘";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝑙";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝑚";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝑛";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝑜";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝑝";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝑞";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝑟";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝑠";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝑡";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝑢";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝑣";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝑤";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝑥";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝑦";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝑧";
		}


		//Special Chracters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Serif and/or Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Serif nor Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Sans: Italic

function fnSansItalic() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝘈";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝘉";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝘊";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝘋";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝘌";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝘍";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝘎";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝘏";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝘐";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝘑";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝘒";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝘓";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝘔";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝘕";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝘖";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝘗";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝘘";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝘙";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝘚";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝘛";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝘜";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝘝";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝘞";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝘟";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝘠";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝘡";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝘢";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝘣";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝘤";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝘥";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝘦";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝘧";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝘨";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝘩";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝘪";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝘫";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝘬";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝘭";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝘮";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝘯";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝘰";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝘱";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝘲";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝘳";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝘴";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝘵";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝘶";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝘷";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝘸";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝘹";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝘺";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝘻";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Sans and/or Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Sans nor Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Serif: Bold/Italic

function fnSerifBoldItalic() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var badNumbers = "";
	var characters = "";
	var numCharacters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝑨";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝑩";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝑪";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝑫";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝑬";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝑭";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝑮";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝑯";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝑰";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝑱";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝑲";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝑳";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝑴";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝑵";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝑶";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝑷";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝑸";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝑹";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝑺";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝑻";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝑼";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝑽";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝑾";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝑿";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝒀";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝒁";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝒂";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝒃";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝒄";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝒅";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝒆";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝒇";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝒈";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝒉";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝒊";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝒋";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝒌";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝒍";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝒎";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝒏";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝒐";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝒑";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝒒";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝒓";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝒔";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝒕";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝒖";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝒗";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝒘";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝒙";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝒚";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝒚";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝒛";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟏";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟐";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟑";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟒";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟓";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟔";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟕";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟖";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟗";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟎";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "" && badNumbers == "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Serif, Bold, and Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Serif, Bold, nor Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters == "" && badNumbers != "") {
		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';
		alert('Due to limitations of the Unicode standard, the ' + numCharacters + badNumbers + 'can not be in Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters != "" && badNumbers !== "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Serif, Bold, and Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';

		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';

		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Serif, Bold, nor Italic and the ' + numCharacters + badNumbers + 'can not be in Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Sans: Bold/Italic

function fnSansBoldItalic() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var badNumbers = "";
	var characters = "";
	var numCharacters = "";
	for (i = 0; i < inputstring.length; i++) {

		
		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝘼";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝘽";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝘾";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝘿";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝙀";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝙁";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝙂";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝙃";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝙄";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝙅";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝙆";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝙇";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝙈";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝙉";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝙊";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝙋";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝙌";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝙍";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝙎";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝙏";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝙐";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝙑";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝙒";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝙓";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝙔";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝙕";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝙖";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝙗";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝙘";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝙙";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝙚";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝙛";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝙜";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝙝";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝙞";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝙟";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝙠";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝙡";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝙢";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝙣";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝙤";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝙥";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝙦";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝙧";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝙨";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝙩";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝙪";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝙫";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝙬";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝙭";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝙮";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝙯";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟭";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟮";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟯";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟰";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟱";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟲";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟳";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟴";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟵";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟬";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "" && badNumbers == "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Sans, Bold, and Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Sans, Bold, nor Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters == "" && badNumbers != "") {
		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Sans, Bold, and Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';
		alert('Due to limitations of the Unicode standard, the ' + numCharacters + badNumbers + 'can not be in Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters != "" && badNumbers !== "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Sans, Bold, and Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Sans, Bold, and Italic and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';

		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';

		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Sans, Bold, nor Italic and the ' + numCharacters + badNumbers + 'can not be in Italic. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Underline

function fnUnderline() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "A̲";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "B̲";
		}
		else if (inputstring[i] =="C") {
			newLetter = "C̲";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "D̲";
		}
		else if (inputstring[i] =="E") {
   			newLetter = "E̲";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "F̲";
		}
		else if (inputstring[i] =="G") {
			newLetter = "G̲";
		}
		else if (inputstring[i] =="H") {
			newLetter = "H̲";
		}
		else if (inputstring[i] =="I") {
			newLetter = "I̲";
		}
		else if (inputstring[i] =="J") {
			newLetter = "J̲";
		}
		else if (inputstring[i] =="K") {
			newLetter = "K̲";
		}
		else if (inputstring[i] =="L") {
			newLetter = "L̲";
		}
		else if (inputstring[i] =="M") {
			newLetter = "M̲";
		}
		else if (inputstring[i] =="N") {
			newLetter = "N̲";
		}
		else if (inputstring[i] =="O") {
			newLetter = "O̲";
		}
		else if (inputstring[i] =="P") {
			newLetter = "P̲";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "Q̲";
		}
		else if (inputstring[i] =="R") {
			newLetter = "R̲";
		}
		else if (inputstring[i] =="S") {
			newLetter = "S̲";
		}
		else if (inputstring[i] =="T") {
			newLetter = "T̲";
		}
		else if (inputstring[i] =="U") {
			newLetter = "U̲";
		}
		else if (inputstring[i] =="V") {
			newLetter = "V̲";
		}
		else if (inputstring[i] =="W") {
			newLetter = "W̲";
		}
		else if (inputstring[i] =="X") {
			newLetter = "X̲";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "Y̲";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "Z̲";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "a̲";
		}
		else if (inputstring[i] =="b") {
			newLetter = "b̲";
		}
		else if (inputstring[i] =="c") {
			newLetter = "c̲";
		}
		else if (inputstring[i] =="d") {
			newLetter = "d̲";
		}
		else if (inputstring[i] =="e") {
			newLetter = "e̲";
		}
		else if (inputstring[i] =="f") {
			newLetter = "f̲";
		}
		else if (inputstring[i] =="g") {
			newLetter = "g̲";
		}
		else if (inputstring[i] =="h") {
			newLetter = "h̲";
		}
		else if (inputstring[i] =="i") {
			newLetter = "i̲";
		}
		else if (inputstring[i] =="j") {
			newLetter = "j̲";
		}
		else if (inputstring[i] =="k") {
			newLetter = "k̲";
		}
		else if (inputstring[i] =="l") {
			newLetter = "l̲";
		}
		else if (inputstring[i] =="m") {
			newLetter = "m̲";
		}
		else if (inputstring[i] =="n") {
			newLetter = "n̲";
		}
		else if (inputstring[i] =="o") {
			newLetter = "o̲";
		}
		else if (inputstring[i] =="p") {
			newLetter = "p̲";
		}
		else if (inputstring[i] =="q") {
			newLetter = "q̲";
		}
		else if (inputstring[i] =="r") {
			newLetter = "r̲";
		}
		else if (inputstring[i] =="s") {
			newLetter = "s̲";
		}
		else if (inputstring[i] =="t") {
			newLetter = "t̲";
		}
		else if (inputstring[i] =="u") {
			newLetter = "u̲";
		}
		else if (inputstring[i] =="v") {
			newLetter = "v̲";
		}
		else if (inputstring[i] =="w") {
			newLetter = "w̲";
		}
		else if (inputstring[i] =="x") {
			newLetter = "x̲";
		}
		else if (inputstring[i] =="y") {
			newLetter = "y̲";
		}
		else if (inputstring[i] =="z") {
			newLetter = "z̲";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be Underlined and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be Underlined. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Strikethrough

function fnStrikethrough() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "A̶";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "B̶";
		}
		else if (inputstring[i] =="C") {
			newLetter = "C̶";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "D̶";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "E̶";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "F̶";
		}
		else if (inputstring[i] =="G") {
			newLetter = "G̶";
		}
		else if (inputstring[i] =="H") {
			newLetter = "H̶";
		}
		else if (inputstring[i] =="I") {
			newLetter = "I̶";
		}
		else if (inputstring[i] =="J") {
			newLetter = "J̶";
		}
		else if (inputstring[i] =="K") {
			newLetter = "K̶";
		}
		else if (inputstring[i] =="L") {
			newLetter = "L̶";
		}
		else if (inputstring[i] =="M") {
			newLetter = "M̶";
		}
		else if (inputstring[i] =="N") {
			newLetter = "N̶";
		}
		else if (inputstring[i] =="O") {
			newLetter = "O̶";
		}
		else if (inputstring[i] =="P") {
			newLetter = "P̶";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "Q̶";
		}
		else if (inputstring[i] =="R") {
			newLetter = "R̶";
		}
		else if (inputstring[i] =="S") {
			newLetter = "S̶";
		}
		else if (inputstring[i] =="T") {
			newLetter = "T̶";
		}
		else if (inputstring[i] =="U") {
			newLetter = "U̶";
		}
		else if (inputstring[i] =="V") {
			newLetter = "V̶";
		}
		else if (inputstring[i] =="W") {
			newLetter = "W̶";
		}
		else if (inputstring[i] =="X") {
			newLetter = "X̶";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "Y̶";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "Z̶";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "a̶";
		}
		else if (inputstring[i] =="b") {
			newLetter = "b̶";
		}
		else if (inputstring[i] =="c") {
			newLetter = "c̶";
		}
		else if (inputstring[i] =="d") {
			newLetter = "d̶";
		}
		else if (inputstring[i] =="e") {
			newLetter = "e̶";
		}
		else if (inputstring[i] =="f") {
			newLetter = "f̶";
		}
		else if (inputstring[i] =="g") {
			newLetter = "g̶";
		}
		else if (inputstring[i] =="h") {
			newLetter = "h̶";
		}
		else if (inputstring[i] =="i") {
			newLetter = "i̶";
		}
		else if (inputstring[i] =="j") {
			newLetter = "j̶";
		}
		else if (inputstring[i] =="k") {
			newLetter = "k̶";
		}
		else if (inputstring[i] =="l") {
			newLetter = "l̶";
		}
		else if (inputstring[i] =="m") {
			newLetter = "m̶";
		}
		else if (inputstring[i] =="n") {
			newLetter = "n̶";
		}
		else if (inputstring[i] =="o") {
			newLetter = "o̶";
		}
		else if (inputstring[i] =="p") {
			newLetter = "p̶";
		}
		else if (inputstring[i] =="q") {
			newLetter = "q̶";
		}
		else if (inputstring[i] =="r") {
			newLetter = "r̶";
		}
		else if (inputstring[i] =="s") {
			newLetter = "s̶";
		}
		else if (inputstring[i] =="t") {
			newLetter = "t̶";
		}
		else if (inputstring[i] =="u") {
			newLetter = "u̶";
		}
		else if (inputstring[i] =="v") {
			newLetter = "v̶";
		}
		else if (inputstring[i] =="w") {
			newLetter = "w̶";
		}
		else if (inputstring[i] =="x") {
			newLetter = "x̶";
		}
		else if (inputstring[i] =="y") {
			newLetter = "y̶";
		}
		else if (inputstring[i] =="z") {
			newLetter = "z̶";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Strikethrough and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Strikethrough. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Small Caps

function fnSmallcaps() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	for (i = 0; i < inputstring.length; i++) {

		//Lowercase

		if (inputstring[i] =="a") {
			newLetter = "ᴀ";
		}
		else if (inputstring[i] =="b") {
			newLetter = "ʙ";
		}
		else if (inputstring[i] =="c") {
			newLetter = "ᴄ";
		}
		else if (inputstring[i] =="d") {
			newLetter = "ᴅ";
		}
		else if (inputstring[i] =="e") {
			newLetter = "ᴇ";
		}
		else if (inputstring[i] =="f") {
			newLetter = "ꜰ";
		}
		else if (inputstring[i] =="g") {
			newLetter = "ɢ";
		}
		else if (inputstring[i] =="h") {
			newLetter = "ʜ";
		}
		else if (inputstring[i] =="i") {
			newLetter = "ɪ";
		}
		else if (inputstring[i] =="j") {
			newLetter = "ᴊ";
		}
		else if (inputstring[i] =="k") {
			newLetter = "ᴋ";
		}
		else if (inputstring[i] =="l") {
			newLetter = "ʟ";
		}
		else if (inputstring[i] =="m") {
			newLetter = "ᴍ";
		}
		else if (inputstring[i] =="n") {
			newLetter = "ɴ";
		}
		else if (inputstring[i] =="o") {
			newLetter = "ᴏ";
		}
		else if (inputstring[i] =="p") {
			newLetter = "ᴘ";
		}
		else if (inputstring[i] =="q") {
			newLetter = "ǫ";
		}
		else if (inputstring[i] =="r") {
			newLetter = "ʀ";
		}
		else if (inputstring[i] =="s") {
			newLetter = "s";
		}
		else if (inputstring[i] =="t") {
			newLetter = "ᴛ";
		}
		else if (inputstring[i] =="u") {
			newLetter = "ᴜ";
		}
		else if (inputstring[i] =="v") {
			newLetter = "ᴠ";
		}
		else if (inputstring[i] =="w") {
			newLetter = "ᴡ";
		}
		else if (inputstring[i] =="x") {
			newLetter = "x";
		}
		else if (inputstring[i] =="y") {
			newLetter = "ʏ";
		}
		else if (inputstring[i] =="z") {
			newLetter = "ᴢ";
		}


		//Else

		else {
			newLetter = inputstring[i];
		}
		outputstring += newLetter;
	}

	document.getElementById("OUTPUT").value = outputstring;
}









//Script

function fnScript() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝒜";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "ℬ";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝒞";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝒟";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "ℰ";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "ℱ";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝒢";
		}
		else if (inputstring[i] =="H") {
			newLetter = "ℋ";
		}
		else if (inputstring[i] =="I") {
			newLetter = "ℐ";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝒥";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝒦";
		}
		else if (inputstring[i] =="L") {
			newLetter = "ℒ";
		}
		else if (inputstring[i] =="M") {
			newLetter = "ℳ";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝒩";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝒪";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝒫";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝒬";
		}
		else if (inputstring[i] =="R") {
			newLetter = "ℛ";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝒮";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝒯";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝒰";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝒱";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝒲";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝒳";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝒴";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝒵";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝒶";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝒷";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝒸";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝒹";
		}
		else if (inputstring[i] =="e") {
			newLetter = "ℯ";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝒻";
		}
		else if (inputstring[i] =="g") {
			newLetter = "ℊ";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝒽";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝒾";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝒿";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝓀";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝓁";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝓂";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝓃";
		}
		else if (inputstring[i] =="o") {
			newLetter = "ℴ";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝓅";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝓆";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝓇";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝓈";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝓉";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝓊";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝓋";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝓌";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝓍";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝓎";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝓏";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Script and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be Script. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//BoldScript

function fnBoldScript() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var badNumbers = "";
	var characters = "";
	var numCharacters = "";
		for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝓐";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝓑";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝓒";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝓓";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝓔";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝓕";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝓖";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝓗";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝓘";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝓙";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝓚";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝓛";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝓜";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝓝";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝓞";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝓟";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝓠";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝓡";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝓢";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝓣";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝓤";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝓥";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝓦";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝓧";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝓨";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝓩";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝓪";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝓫";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝓬";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝓭";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝓮";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝓯";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝓰";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝓱";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝓲";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝓳";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝓴";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝓵";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝓶";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝓷";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝓸";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝓹";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝓺";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝓻";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝓼";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝓽";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝓾";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝓿";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝔀";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝔁";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝔂";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝔃";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟏";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟐";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟑";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟒";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟓";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟔";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟕";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟖";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟗";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟎";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "" && badNumbers == "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Bold and Script and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Bold nor Script. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters == "" && badNumbers != "") {
		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Script and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';
		alert('Due to limitations of the Unicode standard, the ' + numCharacters + badNumbers + 'can not be in Script. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters != "" && badNumbers !== "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Bold and Script and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Script and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';

		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';

		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Bold nor Script and the ' + numCharacters + badNumbers + 'can not be in Script. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Double Struck

function fnDoublestruck() { 
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝔸";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝔹";
		}
		else if (inputstring[i] =="C") {
			newLetter = "ℂ";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝔻";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝔼";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝔽";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝔾";
		}
		else if (inputstring[i] =="H") {
			newLetter = "ℍ";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝕀";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝕁";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝕂";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝕃";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝕄";
		}
		else if (inputstring[i] =="N") {
			newLetter = "ℕ";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝕆";
		}
		else if (inputstring[i] =="P") {
			newLetter = "ℙ";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "ℚ";
		}
		else if (inputstring[i] =="R") {
			newLetter = "ℝ";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝕊";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝕋";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝕌";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝕍";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝕎";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝕏";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝕐";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "ℤ";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝕒";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝕓";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝕔";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝕕";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝕖";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝕗";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝕘";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝕙";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝕚";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝕛";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝕜";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝕝";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝕞";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝕟";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝕠";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝕡";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝕢";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝕣";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝕤";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝕥";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝕦";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝕧";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝕨";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝕩";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝕪";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝕫";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟙";
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟚";
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟛";
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟜";
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟝";
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟞";
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟟";
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟠";
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟡";
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟘";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be in Double Struck and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be Double Struck. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Circled

function fnCircled() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "Ⓐ";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "Ⓑ";
		}
		else if (inputstring[i] =="C") {
			newLetter = "Ⓒ";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "Ⓓ";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "Ⓔ";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "Ⓕ";
		}
		else if (inputstring[i] =="G") {
			newLetter = "Ⓖ";
		}
		else if (inputstring[i] =="H") {
			newLetter = "Ⓗ";
		}
		else if (inputstring[i] =="I") {
			newLetter = "Ⓘ";
		}
		else if (inputstring[i] =="J") {
			newLetter = "Ⓙ";
		}
		else if (inputstring[i] =="K") {
			newLetter = "Ⓚ";
		}
		else if (inputstring[i] =="L") {
			newLetter = "Ⓛ";
		}
		else if (inputstring[i] =="M") {
			newLetter = "Ⓜ";
		}
		else if (inputstring[i] =="N") {
			newLetter = "Ⓝ";
		}
		else if (inputstring[i] =="O") {
			newLetter = "Ⓞ";
		}
		else if (inputstring[i] =="P") {
			newLetter = "Ⓟ";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "Ⓠ";
		}
		else if (inputstring[i] =="R") {
			newLetter = "Ⓡ";
		}
		else if (inputstring[i] =="S") {
			newLetter = "Ⓢ";
		}
		else if (inputstring[i] =="T") {
			newLetter = "Ⓣ";
		}
		else if (inputstring[i] =="U") {
			newLetter = "Ⓤ";
		}
		else if (inputstring[i] =="V") {
			newLetter = "Ⓥ";
		}
		else if (inputstring[i] =="W") {
			newLetter = "Ⓦ";
		}
		else if (inputstring[i] =="X") {
			newLetter = "Ⓧ";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "Ⓨ";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "Ⓩ";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "ⓐ";
		}
		else if (inputstring[i] =="b") {
			newLetter = "ⓑ";
		}
		else if (inputstring[i] =="c") {
			newLetter = "ⓒ";
		}
		else if (inputstring[i] =="d") {
			newLetter = "ⓓ";
		}
		else if (inputstring[i] =="e") {
			newLetter = "ⓔ";
		}
		else if (inputstring[i] =="f") {
			newLetter = "ⓕ";
		}
		else if (inputstring[i] =="g") {
			newLetter = "ⓖ";
		}
		else if (inputstring[i] =="h") {
			newLetter = "ⓗ";
		}
		else if (inputstring[i] =="i") {
			newLetter = "ⓘ";
		}
		else if (inputstring[i] =="j") {
			newLetter = "ⓙ";
		}
		else if (inputstring[i] =="k") {
			newLetter = "ⓚ";
		}
		else if (inputstring[i] =="l") {
			newLetter = "ⓛ";
		}
		else if (inputstring[i] =="m") {
			newLetter = "ⓜ";
		}
		else if (inputstring[i] =="n") {
			newLetter = "ⓝ";
		}
		else if (inputstring[i] =="o") {
			newLetter = "ⓞ";
		}
		else if (inputstring[i] =="p") {
			newLetter = "ⓟ";
		}
		else if (inputstring[i] =="q") {
			newLetter = "ⓠ";
		}
		else if (inputstring[i] =="r") {
			newLetter = "ⓡ";
		}
		else if (inputstring[i] =="s") {
			newLetter = "ⓢ";
		}
		else if (inputstring[i] =="t") {
			newLetter = "ⓣ";
		}
		else if (inputstring[i] =="u") {
			newLetter = "ⓤ";
		}
		else if (inputstring[i] =="v") {
			newLetter = "ⓥ";
		}
		else if (inputstring[i] =="w") {
			newLetter = "ⓦ";
		}
		else if (inputstring[i] =="x") {
			newLetter = "ⓧ";
		}
		else if (inputstring[i] =="y") {
			newLetter = "ⓨ";
		}
		else if (inputstring[i] =="z") {
			newLetter = "ⓩ";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "①";
		}
		else if (inputstring[i] =="2") {
			newLetter = "②";
		}
		else if (inputstring[i] =="3") {
			newLetter = "③";
		}
		else if (inputstring[i] =="4") {
			newLetter = "④";
		}
		else if (inputstring[i] =="5") {
			newLetter = "⑤";
		}
		else if (inputstring[i] =="6") {
			newLetter = "⑥";
		}
		else if (inputstring[i] =="7") {
			newLetter = "⑦";
		}
		else if (inputstring[i] =="8") {
			newLetter = "⑧";
		}
		else if (inputstring[i] =="9") {
			newLetter = "⑨";
		}
		else if (inputstring[i] =="0") {
			newLetter = "⓪";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be Circled and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be Circled. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Squared

function fnSquared() { 
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters ="";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "🄰";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "🄱";
		}
		else if (inputstring[i] =="C") {
			newLetter = "🄲";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "🄳";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "🄴";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "🄵";
		}
		else if (inputstring[i] =="G") {
			newLetter = "🄶";
		}
		else if (inputstring[i] =="H") {
			newLetter = "🄷";
		}
		else if (inputstring[i] =="I") {
			newLetter = "🄸";
		}
		else if (inputstring[i] =="J") {
			newLetter = "🄹";
		}
		else if (inputstring[i] =="K") {
			newLetter = "🄺";
		}
		else if (inputstring[i] =="L") {
			newLetter = "🄻";
		}
		else if (inputstring[i] =="M") {
			newLetter = "🄼";
		}
		else if (inputstring[i] =="N") {
			newLetter = "🄽";
		}
		else if (inputstring[i] =="O") {
			newLetter = "🄾";
		}
		else if (inputstring[i] =="P") {
			newLetter = "🄿";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "🅀";
		}
		else if (inputstring[i] =="R") {
			newLetter = "🅁";
		}
		else if (inputstring[i] =="S") {
			newLetter = "🅂";
		}
		else if (inputstring[i] =="T") {
			newLetter = "🅃";
		}
		else if (inputstring[i] =="U") {
			newLetter = "🅄";
		}
		else if (inputstring[i] =="V") {
			newLetter = "🅅";
		}
		else if (inputstring[i] =="W") {
			newLetter = "🅆";
		}
		else if (inputstring[i] =="X") {
			newLetter = "🅇";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "🅈";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "🅉";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "🄰";
		}
		else if (inputstring[i] =="b") {
			newLetter = "🄱";
		}
		else if (inputstring[i] =="c") {
			newLetter = "🄲";
		}
		else if (inputstring[i] =="d") {
			newLetter = "🄳";
		}
		else if (inputstring[i] =="e") {
			newLetter = "🄴";
		}
		else if (inputstring[i] =="f") {
			newLetter = "🄵";
		}
		else if (inputstring[i] =="g") {
			newLetter = "🄶";
		}
		else if (inputstring[i] =="h") {
			newLetter = "🄷";
		}
		else if (inputstring[i] =="i") {
			newLetter = "🄸";
		}
		else if (inputstring[i] =="j") {
			newLetter = "🄹";
		}
		else if (inputstring[i] =="k") {
			newLetter = "🄺";
		}
		else if (inputstring[i] =="l") {
			newLetter = "🄻";
		}
		else if (inputstring[i] =="m") {
			newLetter = "🄼";
		}
		else if (inputstring[i] =="n") {
			newLetter = "🄽";
		}
		else if (inputstring[i] =="o") {
			newLetter = "🄾";
		}
		else if (inputstring[i] =="p") {
			newLetter = "🄿";
		}
		else if (inputstring[i] =="q") {
			newLetter = "🅀";
		}
		else if (inputstring[i] =="r") {
			newLetter = "🅁";
		}
		else if (inputstring[i] =="s") {
			newLetter = "🅂";
		}
		else if (inputstring[i] =="t") {
			newLetter = "🅃";
		}
		else if (inputstring[i] =="u") {
			newLetter = "🅄";
		}
		else if (inputstring[i] =="v") {
			newLetter = "🅅";
		}
		else if (inputstring[i] =="w") {
			newLetter = "🅆";
		}
		else if (inputstring[i] =="x") {
			newLetter = "🅇";
		}
		else if (inputstring[i] =="y") {
			newLetter = "🅈";
		}
		else if (inputstring[i] =="z") {
			newLetter = "🅉";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be Squared and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be Squared. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Fraktur

function fnFraktur() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝔄";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝔅";
		}
		else if (inputstring[i] =="C") {
			newLetter = "ℭ";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝔇";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝔈";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝔉";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝔊";
		}
		else if (inputstring[i] =="H") {
			newLetter = "ℌ";
		}
		else if (inputstring[i] =="I") {
			newLetter = "ℑ";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝔍";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝔎";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝔏";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝔐";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝔑";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝔒";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝔓";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝔔";
		}
		else if (inputstring[i] =="R") {
			newLetter = "ℜ";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝔖";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝔗";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝔘";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝔙";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝔚";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝔛";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝔜";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "ℨ";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝔞";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝔟";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝔠";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝔡";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝔢";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝔢";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝔤";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝔥";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝔦";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝔧";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝔨";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝔩";
		}
		else if (inputstring[i] =="m") 	{
			newLetter = "𝔪";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝔫";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝔬";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝔭";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝔮";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝔯";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝔰";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝔱";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝔲";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝔳";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝔴";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝔵";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝔶";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝔷";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be Fraktur and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Fraktur. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Bold/Fraktur

function fnBoldFraktur() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var badNumbers = "";
	var characters = "";
	var numCharacters = "";
	for (i = 0; i < inputstring.length; i++) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "𝕬";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "𝕭";
		}
		else if (inputstring[i] =="C") {
			newLetter = "𝕮";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "𝕯";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "𝕰";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "𝕱";
		}
		else if (inputstring[i] =="G") {
			newLetter = "𝕲";
		}
		else if (inputstring[i] =="H") {
			newLetter = "𝕳";
		}
		else if (inputstring[i] =="I") {
			newLetter = "𝕴";
		}
		else if (inputstring[i] =="J") {
			newLetter = "𝕵";
		}
		else if (inputstring[i] =="K") {
			newLetter = "𝕶";
		}
		else if (inputstring[i] =="L") {
			newLetter = "𝕷";
		}
		else if (inputstring[i] =="M") {
			newLetter = "𝕸";
		}
		else if (inputstring[i] =="N") {
			newLetter = "𝕹";
		}
		else if (inputstring[i] =="O") {
			newLetter = "𝕺";
		}
		else if (inputstring[i] =="P") {
			newLetter = "𝕻";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "𝕼";
		}
		else if (inputstring[i] =="R") {
			newLetter = "𝕽";
		}
		else if (inputstring[i] =="S") {
			newLetter = "𝕾";
		}
		else if (inputstring[i] =="T") {
			newLetter = "𝕿";
		}
		else if (inputstring[i] =="U") {
			newLetter = "𝖀";
		}
		else if (inputstring[i] =="V") {
			newLetter = "𝖁";
		}
		else if (inputstring[i] =="W") {
			newLetter = "𝖂";
		}
		else if (inputstring[i] =="X") {
			newLetter = "𝖃";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "𝖄";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "𝖅";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "𝖆";
		}
		else if (inputstring[i] =="b") {
			newLetter = "𝖇";
		}
		else if (inputstring[i] =="c") {
			newLetter = "𝖈";
		}
		else if (inputstring[i] =="d") {
			newLetter = "𝖉";
		}
		else if (inputstring[i] =="e") {
			newLetter = "𝖊";
		}
		else if (inputstring[i] =="f") {
			newLetter = "𝖋";
		}
		else if (inputstring[i] =="g") {
			newLetter = "𝖌";
		}
		else if (inputstring[i] =="h") {
			newLetter = "𝖍";
		}
		else if (inputstring[i] =="i") {
			newLetter = "𝖎";
		}
		else if (inputstring[i] =="j") {
			newLetter = "𝖏";
		}
		else if (inputstring[i] =="k") {
			newLetter = "𝖐";
		}
		else if (inputstring[i] =="l") {
			newLetter = "𝖑";
		}
		else if (inputstring[i] =="m") {
			newLetter = "𝖒";
		}
		else if (inputstring[i] =="n") {
			newLetter = "𝖓";
		}
		else if (inputstring[i] =="o") {
			newLetter = "𝖔";
		}
		else if (inputstring[i] =="p") {
			newLetter = "𝖕";
		}
		else if (inputstring[i] =="q") {
			newLetter = "𝖖";
		}
		else if (inputstring[i] =="r") {
			newLetter = "𝖗";
		}
		else if (inputstring[i] =="s") {
			newLetter = "𝖘";
		}
		else if (inputstring[i] =="t") {
			newLetter = "𝖙";
		}
		else if (inputstring[i] =="u") {
			newLetter = "𝖚";
		}
		else if (inputstring[i] =="v") {
			newLetter = "𝖛";
		}
		else if (inputstring[i] =="w") {
			newLetter = "𝖜";
		}
		else if (inputstring[i] =="x") {
			newLetter = "𝖝";
		}
		else if (inputstring[i] =="y") {
			newLetter = "𝖞";
		}
		else if (inputstring[i] =="z") {
			newLetter = "𝖟";
		}


		//Numbers

		else if (inputstring[i] =="1") {
			newLetter = "𝟏";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="2") {
			newLetter = "𝟐";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="3") {
			newLetter = "𝟑";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="4") {
			newLetter = "𝟒";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="5") {
			newLetter = "𝟓";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="6") {
			newLetter = "𝟔";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="7") {
			newLetter = "𝟕";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="8") {
			newLetter = "𝟖";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="9") {
			newLetter = "𝟗";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}
		else if (inputstring[i] =="0") {
			newLetter = "𝟎";
			if (badNumbers.indexOf(inputstring[i]) == -1) {
				badNumbers = badNumbers + ' "' + inputstring[i] + '", ';
			}
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "" && badNumbers == "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Bold and Fraktur and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Bold nor Fraktur. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters == "" && badNumbers != "") {
		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Fraktur and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';
		alert('Due to limitations of the Unicode standard, the ' + numCharacters + badNumbers + 'can not be in Fraktur. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
	else if (badLetters != "" && badNumbers !== "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many nonnumerical characters can not be in Bold and Fraktur and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badNumbers.length <= 6) {
			numCharacters = "character";
		}
		else if (badNumbers.length > 6) {
			numCharacters = "characters";
		}
		else {
			numCharacters = "character(s)";
			alert('TextPro was unable to determine how many numbers can not be in Fraktur and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}


		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';

		if (badNumbers.length > 6 && badNumbers.length <= 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 8);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		else if (badNumbers.length > 12) {
			var firstNumbers = badNumbers.substring(0, badNumbers.length - 7);
			var lastNumber = badNumbers.substring(badNumbers.length - 5);
			badNumbers = firstNumbers + ' and ' + lastNumber;
		}
		badNumbers = badNumbers.substring(0, badNumbers.length - 2) + ' ';

		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be in Bold nor Fraktur and the ' + numCharacters + badNumbers + 'can not be in Fraktur. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}








//Upsidedown

function fnUpsidedown() {
	var inputstring = document.getElementById("INPUT").value;
	var outputstring = "";
	var newLetter = "";
	var badLetters = "";
	var characters = "";
	for (i = inputstring.length-1; i >= 0; i--) {


		//Uppercase

		if (inputstring[i] =="A") {
			newLetter = "∀";
		} 
		else if (inputstring[i] =="B") {
			newLetter = "ᙠ";
		}
		else if (inputstring[i] =="C") {
			newLetter = "Ͻ";
		}
		else if (inputstring[i] =="D") {
    			newLetter = "ᗡ";
		}
		else if (inputstring[i] =="E") {
    			newLetter = "Ǝ";
		}
		else if (inputstring[i] =="F") {
    			newLetter = "Ⅎ";
		}
		else if (inputstring[i] =="G") {
			newLetter = "ƃ";
		}
		else if (inputstring[i] =="H") {
			newLetter = "H";
		}
		else if (inputstring[i] =="I") {
			newLetter = "I";
		}
		else if (inputstring[i] =="J") {
			newLetter = "ſ";
		}
		else if (inputstring[i] =="K") {
			newLetter = "ʞ";
		}
		else if (inputstring[i] =="L") {
			newLetter = "˥";
		}
		else if (inputstring[i] =="M") {
			newLetter = "W";
		}
		else if (inputstring[i] =="N") {
			newLetter = "N";
		}
		else if (inputstring[i] =="O") {
			newLetter = "O";
		}
		else if (inputstring[i] =="P") {
			newLetter = "d";
		}
		else if (inputstring[i] =="Q") {
			newLetter = "Ὁ";
		}
		else if (inputstring[i] =="R") {
			newLetter = "ᴚ";
		}
		else if (inputstring[i] =="S") {
			newLetter = "S";
		}
		else if (inputstring[i] =="T") {
			newLetter = "⊥";
		}
		else if (inputstring[i] =="U") {
			newLetter = "∩";
		}
		else if (inputstring[i] =="V") {
			newLetter = "Λ";
		}
		else if (inputstring[i] =="W") {
			newLetter = "M";
		}
		else if (inputstring[i] =="X") {
			newLetter = "X";
		}
		else if (inputstring[i] =="Y") {
			newLetter = "ʎ";
		}
		else if (inputstring[i] =="Z") {
			newLetter = "Z";
		}


		//Lowercase

		else if (inputstring[i] =="a") {
			newLetter = "ɐ";
		}
		else if (inputstring[i] =="b") {
			newLetter = "q";
		}
		else if (inputstring[i] =="c") {
			newLetter = "ɔ";
		}
		else if (inputstring[i] =="d") {
			newLetter = "p";
		}
		else if (inputstring[i] =="e") {
			newLetter = "ǝ";
		}
		else if (inputstring[i] =="f") {
			newLetter = "ɟ";
		}
		else if (inputstring[i] =="g") {
			newLetter = "ƃ";
		}
		else if (inputstring[i] =="h") {
			newLetter = "ɥ";
		}
		else if (inputstring[i] =="i") {
			newLetter = "ı";
		}
		else if (inputstring[i] =="j") {
			newLetter = "ɾ";
		}
		else if (inputstring[i] =="k") {
			newLetter = "ʞ";
		}
		else if (inputstring[i] =="l") {
			newLetter = "ן";
		}
		else if (inputstring[i] =="m") {
			newLetter = "w";
		}
		else if (inputstring[i] =="n") {
			newLetter = "u";
		}
		else if (inputstring[i] =="o") {
			newLetter = "o";
		}
		else if (inputstring[i] =="p") {
			newLetter = "d";
		}
		else if (inputstring[i] =="q") {
			newLetter = "b";
		}
		else if (inputstring[i] =="r") {
			newLetter = "ɹ";
		}
		else if (inputstring[i] =="s") {
			newLetter = "s";
		}
		else if (inputstring[i] =="t") {
			newLetter = "ʇ";
		}
		else if (inputstring[i] =="u") 	{
			newLetter = "n";
		}
		else if (inputstring[i] =="v") {
			newLetter = "ʌ";
		}
		else if (inputstring[i] =="w") {
			newLetter = "m";
		}
		else if (inputstring[i] =="x") {
			newLetter = "x";
		}
		else if (inputstring[i] =="y") {
			newLetter = "ʎ";
		}
		else if (inputstring[i] =="z") {
			newLetter = "z";
		}


		//Special Characters

		else if (inputstring[i] ==" ") {
			newLetter = inputstring[i];
		}


		//Else

		else {
			newLetter = inputstring[i];
			if (badLetters.indexOf(inputstring[i]) == -1) {
				badLetters = badLetters + ' "' + inputstring[i] + '", ';
			}
		}
		outputstring += newLetter;
	}
	
	document.getElementById("OUTPUT").value = outputstring;

	if (badLetters != "") {
		if (badLetters.length <= 6) {
			characters = "character";
		}
		else if (badLetters.length > 6) {
			characters = "characters";
		}
		else {
			characters = "character(s)";
			alert('TextPro was unable to determine how many characters can not be turned Upsidedown and thus can not display "character" or "characters" accordingly. Please report this error to TextPro Support at TextPro@MattyWelch.com');
		}

		if (badLetters.length > 6 && badLetters.length <= 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 8);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}
		else if (badLetters.length > 12) {
			var firstLetters = badLetters.substring(0, badLetters.length - 7);
			var lastLetter = badLetters.substring(badLetters.length - 5);
			badLetters = firstLetters + ' and ' + lastLetter;
		}

		badLetters = badLetters.substring(0, badLetters.length - 2) + ' ';		
		alert('Due to limitations of the Unicode standard, the ' + characters + badLetters + 'can not be turned Upsidedown. For help, visit MattyWelch.com/TextPro/About or contact TextPro Support at TextPro@MattyWelch.com');
	}
}