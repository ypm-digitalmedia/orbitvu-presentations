//var presentations = [];
//
//presentations[1] = {title: "specimen 1", description: "blah", path: "", thumb: ""};
//presentations[2] = {title: "specimen 2", description: "blahblah", path: "", thumb: ""};
//presentations[3] = {title: "specimen 3", description: "blahblah blah", path: "", thumb: ""};
//presentations[4] = {title: "specimen 4", description: "blah blahblah blah", path: "", thumb: ""};
//presentations[5] = {title: "specimen 5", description: "blah blah", path: "", thumb: ""};
//presentations[6] = {title: "specimen 6", description: "blahblah blahblah blah", path: "", thumb: ""};
//presentations[7] = {title: "specimen 7", description: "blah blahblah", path: "", thumb: ""};
//presentations[8] = {title: "specimen 8", description: "blah", path: "", thumb: ""};
//presentations[9] = {title: "specimen 9", description: "blahblahblah blah", path: "", thumb: ""};
//presentations[10] = {title: "specimen 10", description: "blah blahblahblah blah", path: "", thumb: ""};
//presentations[11] = {title: "specimen 11", description: "blah blah blah", path: "", thumb: ""};
//presentations[12] = {title: "specimen 12", description: "blah blah blahblah", path: "", thumb: ""};

var thumbpath = "img/_thumb/";
var presentationpath = "presentations/"

var presentations = {
	
	0: {id: "MIN.100683", description: "Quartz", composition: "SiO<sub>2</sub>", location: "Peñas Blancas mine, Boyacá, Colombia", path: "MIN.100683"},
	1: {id: "Spann Thumbnail #1", description: "Topaz", composition: "Al<sub>2</sub>SiO<sub>4</sub>(F,OH)<sub>2</sub>", location: "Yuno, Gilgit-Baltistan, Pakistan", path: "Spann_TN_001"},
	2: {id: "Spann Thumbnail #2", description: "Fluorapophyllite", composition: "KCa<sub>4</sub>Si<sub>8</sub>O<sub>20</sub>(F,OH)·8H<sub>2</sub>O", location: "Pashan Quarries, Maharashtra, India", path: "Spann_TN_002"},
	3: {id: "Spann Thumbnail #3", description: "Calcite<br /><sup>including copper</sup>", composition: "CaCO<sub>3</sub>", location: "Quincy Mine, Michigan, USA", path: "Spann_TN_003"},
	4: {id: "Spann Thumbnail #4", description: "Fluorapatite", composition: "Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>F", location: "Paraíba, Brazil", path: "Spann_TN_004"},
	5: {id: "Spann Thumbnail #5", description: "Malachite", composition: "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>", location: "Tsumeb, Otjikoto Region, Namibia", path: "Spann_TN_005"},
	6: {id: "Spann Thumbnail #6", description: "Wulfenite", composition: "PbMoO<sub>4</sub>", location: "Los Lamentos Mts., Chihuahua, Mexico", path: "Spann_TN_006"}
//	x: {id: "", description: "", composition: "", location: "", path: ""}
};

$(document).ready(function () {
	
//	var maxColumns = 6;
	
	var template = "<div class='col-xs-6 col-md-4 col-lg-3' id='item%%num%%'>";
		template += "<a href='%%path%%' target='_blank' class='presentation-link'>";
		template += "<div class='presentation-container'>";
		template += "<div class='presentation-thumb' style='background-image:%%thumb%%'></div>";
		template += "<div class='presentation-text'><h4>%%id%%</h4><strong>%%title%%</strong><br /><span class='item-composition'>%%composition%%</span><br /><span class='item-location'>%%location%%</span></div>";
		template += "</div>";
		template += "</a>";
		template += "</div>";
	
	var n = 1;
	_.forEach(presentations, function(item,index) {
		console.log(item);
		var thumbString = 'url("'+thumbpath+item.path+'_t.jpg")'
		var html = template;
			html = html.split("%%path%%").join(presentationpath + item.path + ".html");
			html = html.split("%%num%%").join(index);
			html = html.split("%%id%%").join(item.id);
			html = html.split("%%thumb%%").join(thumbString);
			html = html.split("%%title%%").join(item.description);
			html = html.split("%%composition%%").join(item.composition);
			html = html.split("%%location%%").join(item.location);
			
			$("#items_row").append(html);
			
		
//			if( n == 1 ) { 
//				$("#items").append("<div class='row'>");
//				$("#items").append(html);
//				n++;
//			} else {
//				if( n == maxColumns ) {
//					$("#items").append(html);
//					$("#items").append("</div>");
//					n = 1;
//				} else {
//					$("#items").append(html);
//					n++;
//				}
//			}
	})

});

