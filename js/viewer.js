var originalPageTitle;
var pnum;
var row;
var idx;
var folder;
var template;

$(document).ready(function() {
    
    originalPageTitle = document.title;
    
    $.ajax({
        type: "GET",  
        url: "../data.csv",
        dataType: "text",       
        success: function(response)  
        {
          data = $.csv.toArrays(response);
      console.log("data loaded.");
      // console.log(data);
            checkValidity();
        }   
      });
});

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

function checkValidity() {

  var can_view = false;

  pnum = getUrlParameter('sid');
  
  row = _.find(data,function(o,index) { idx = index; return o[1] == "Spann " + pnum; })
  if( typeof(row) == 'undefined' ) { 
    document.location = "index.html";
  } else {
    // console.log(row);
    folder = row[7];
    console.log("query successful.")

    if( shown.indexOf(idx) > -1 || admin ) { can_view = true; }

    if( can_view ) {
      updateMeta();
      loadPresentation();
      printData();
    } else {
      document.location = "index.html";
    }


  }

}

function loadPresentation() {
  var force_html5 = document.location.search.indexOf('force_html5=yes') == -1 ? 'no' : 'yes';
    inject_orbitvu('Spann_TN',  // id of the viewer container element which is defined above
                    'presentations/orbitvu12/orbitvuer12.swf',  // location of viewer swf file
                    'presentations/orbitvu12/expressInstall.swf',  // location of flash installer file
                    {ovus_folder: "presentations/" + folder + "/",  // location of presentation files (can be absolute or relative url)
                    content2: "yes",
                    width: "100%",
                    height: "auto",
                    force_html5: force_html5
                    });
}

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

function printData() {
  template = "<div class='container'>";
  template += "<div class='row'>";  

  template += "<div class='col-xs-12 col-md-6'>";
    template += "<h4 class='footer-title'>%%title%%</h4>";
    template += "<h5 class='item-composition'>%%composition%%</h5>";
  template += "</div>";
  
  template += "<div class='col-xs-12 col-md-6'>";
  template += "<span class='item-id'>%%id%%</span>: ";
  template += "<span class='item-sid'>%%sid%%</span><br />";
  template += "<span class='item-dimensions'>%%dimensions%%</h5><br />";
  template += "<span class='item-location'>%%location%%</span>";
  template += "</div>";

  template += "</div>";
  template += "</div>";

  var titleString = row[3];
  var idString = row[2];
  var sidString = row[1] + " (" + row[0] + ")";
  var compString = row[4];
  var dimString = row[5];
  var locString = row[6];

  var html = template;
			html = html.split("%%id%%").join(idString);
			html = html.split("%%sid%%").join(sidString);
			html = html.split("%%title%%").join(titleString);
			html = html.split("%%composition%%").join(compString);
			html = html.split("%%location%%").join(locString);
			html = html.split("%%dimensions%%").join(dimString);

  $("footer").append(html);
}

function updateMeta() {
    // var row = _.find(data,function(o) { return o[7] == originalPageTitle; })
    // console.log(row);
    var newPageTitle = "";
    if( typeof row !== 'undefined' ) {
        newPageTitle += row[3].replace(/(<([^>]+)>)/ig," ");
        newPageTitle += " | " + row[2] + ": Spann " + row[0] + " | David Friend Hall | Yale Peabody Museum";

        var metaAuthor = document.createElement('meta');
        metaAuthor.setAttribute('name', 'author');
        metaAuthor.content = "Yale Peabody Museum";

        var metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.content = "Mineralogy, Yale Peabdy Museum, David Friend Hall, Spann, Mineral, Thumbnails, Exhibition, Gems, " + newPageTitle + ", " + row[6];

        var metaDescrip = document.createElement('meta');
        metaDescrip.setAttribute('name', 'description');
        metaDescrip.content = "360 photography of the Spann Thumbnail collection of " + newPageTitle + " in David Friend Hall, Yale Peabody Museum";
        
        document.getElementsByTagName('head')[0].appendChild(metaDescrip);
        document.getElementsByTagName('head')[0].appendChild(metaKeywords);
        document.getElementsByTagName('head')[0].appendChild(metaAuthor);
        document.title = newPageTitle;
    }
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};