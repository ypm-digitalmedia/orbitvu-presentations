var thumbpath = "img/_thumb/";
var thumbpathsilo = "img/_thumb-silo/";
var presentationpath = "presentations/"

var template;
var data;

var startNum = 1;
var endNum = 82;

$(document).ready(function () {
	
//	var maxColumns = 6;


	$.ajax({
	  type: "GET",  
	  url: "data.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
    console.log("data loaded.");
    // console.log(data);
    makeGrid();
	  }   
	});
	
template = "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3' id='item%%num%%'>";
		template += "<a href='%%path%%' class='presentation-link'>";
		template += "<div class='presentation-container'>";
		template += "<div class='presentation-thumb' style='background-image:%%thumb%%'></div>";
    template += "<div class='presentation-text'>";
    template += "<h4>%%title%%</h4>";
    template += "<h5 class='item-composition'>%%composition%%</h5>";
    template += "<span>%%id%%</span><br />";
    template += "<span>%%sid%%</span><br />";
    // template += "<span class='item-location'>%%location%%</span>";
    template += "</div>";
		template += "</div>";
		template += "</a>";
		template += "</div>";

});

function makeGrid() {
  	
/*
  0: "id"
  1: "s_num"
​  2: "ypm_id"
​  3: "title"
​​  4: "composition"
​  5: "dimensions"
​  6: "location"
  7: "path"
*/
	_.forEach(data, function(item,index) {
    if( index >= startNum && index <= endNum ) {
		// console.log(item);

		// if( admin || shown.indexOf(index) > -1 ) {
		if( shown == [0] || shown.indexOf(index) > -1 ) {
			var thumbString = 'url("'+thumbpath+item[7]+'_t.jpg")';
			var titleString = item[3];
			var idString = item[2];
			var sidString = item[1] + " (" + item[0] + ")";
			var compString = item[4];
			var pathString = presentationpath + item[7] + ".html";
			var pathString = "view_admin.html?sid=" + item[1].split("Spann ").join("");
			var locString = item[6];
			var extraString = "";
		} else {
			var thumbString = 'url("'+thumbpathsilo+item[7]+'_ts.jpg")';
			var titleString = item[3];
			var idString = item[2];
			var sidString = item[1] + " (" + item[0] + ")";
			var compString = item[4];
			var pathString = presentationpath + item[7] + ".html";
			var pathString = "view_admin.html?sid=" + item[1].split("Spann ").join("");
			var locString = item[6];
			sidString += "<br /><span style='font-weight: bold; color: darkred'>Images unavailable</span>";
		}


		var html = template;
			html = html.split("%%path%%").join(pathString);
			html = html.split("%%num%%").join(index);
			html = html.split("%%id%%").join(idString);
			html = html.split("%%sid%%").join(sidString);
			html = html.split("%%thumb%%").join(thumbString);
			html = html.split("%%title%%").join(titleString);
			html = html.split("%%composition%%").join(compString);
			html = html.split("%%location%%").join(locString);
			
			$("#items_row").append(html);
    }

	});
}