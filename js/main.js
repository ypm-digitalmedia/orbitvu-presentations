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
	
  "0": {
	"id": "MIN.100683", 
	"description": "Quartz", 
	"composition": "SiO<sub>2</sub>", 
	"location": "Peñas Blancas mine, Boyacá, Colombia", 
	"path": "MIN.100683"},
  "1": {
    "id": "Spann Thumbnail #1",
    "description": "Topaz",
    "composition": "Al<sub>2</sub>SiO<sub>4</sub>(F,OH)<sub>2</sub>",
    "location": "Yuno, Gilgit-Baltistan, Pakistan",
    "path": "Spann_TN_001"
  },
  "2": {
    "id": "Spann Thumbnail #2",
    "description": "Fluorapophyllite",
    "composition": "KCa<sub>4</sub>Si<sub>8</sub>O<sub>20</sub>(F,OH)·8H<sub>2</sub>O",
    "location": "Pashan Quarries, Maharashtra, India",
    "path": "Spann_TN_002"
  },
  "3": {
    "id": "Spann Thumbnail #3",
    "description": "Calcite<br />including copper",
    "composition": "CaCO<sub>3</sub>",
    "location": "Quincy Mine, Michigan, USA",
    "path": "Spann_TN_003"
  },
  "4": {
    "id": "Spann Thumbnail #4",
    "description": "Fluorapatite",
    "composition": "Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>F",
    "location": "Paraíba, Brazil",
    "path": "Spann_TN_004"
  },
  "5": {
    "id": "Spann Thumbnail #5",
    "description": "Malachite",
    "composition": "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
    "location": "Tsumeb, Otjikoto Region, Namibia",
    "path": "Spann_TN_005"
  },
  "6": {
    "id": "Spann Thumbnail #6",
    "description": "Wulfenite",
    "composition": "PbMoO<sub>4</sub>",
    "location": "Los Lamentos Mts., Chihuahua, Mexico",
    "path": "Spann_TN_006"
  },
  "7": {
    "id": "Spann Thumbnail #7",
    "description": "Fluorite",
    "composition": "CaF<sub>2</sub>",
    "location": "Elmwood Mine, Tennessee, USA",
    "path": "Spann_TN_007"
  },
  "8": {
    "id": "Spann Thumbnail #8",
    "description": "Rutile",
    "composition": "TiO<sub>2</sub>",
    "location": "Chatorkhand, Gilgit-Baltistan, Pakistan",
    "path": "Spann_TN_008"
  },
  "9": {
    "id": "Spann Thumbnail #9",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Unknown locality",
    "path": "Spann_TN_009"
  },
  "10": {
    "id": "Spann Thumbnail #10",
    "description": "Cavansite",
    "composition": "Ca(V<sup>4+</sup>O)Si<sub>4</sub>O<sub>10</sub> · 4H<sub>2</sub>O",
    "location": "Pune, Maharashtra, India",
    "path": "Spann_TN_010"
  },
  "11": {
    "id": "Spann Thumbnail #11",
    "description": "Azurite",
    "composition": "Cu<sub>3</sub>(CO<sub>3</sub>)<sub>2</sub>(OH)<sub>2</sub>",
    "location": "Cobre Mine, Zacatecas, Mexico",
    "path": "Spann_TN_011"
  },
  "12": {
    "id": "Spann Thumbnail #12",
    "description": "Legrandite",
    "composition": "Zn<sub>2</sub>(AsO<sub>4</sub>)(OH) · H<sub>2</sub>O",
    "location": "Ojuela Mine, Durango, Mexico",
    "path": "Spann_TN_012"
  },
  "13": {
    "id": "Spann Thumbnail #13",
    "description": "Elbaite<br />variety indicolite",
    "composition": "Na(Al,Li)<sub>3</sub>Al<sub>6</sub>(BO<sub>3</sub>)<sub>3</sub>Si<sub>6</sub>O<sub>18</sub>(OH)<sub>4</sub>",
    "location": "Astor Valley, Gilgit-Baltistan, Pakistan",
    "path": "Spann_TN_013"
  },
  "14": {
    "id": "Spann Thumbnail #14",
    "description": "Hematite",
    "composition": "a-Fe<sub>2</sub>O<sub>3</sub>",
    "location": "Cavradi Gorge, Graubunden, Switzerland",
    "path": "Spann_TN_014"
  },
  "15": {
    "id": "Spann Thumbnail #15",
    "description": "Inesite",
    "composition": "Ca<sub>2</sub>Mn<sup>2+</sup><sub>7</sub>Si<sub>10</sub>O<sub>28</sub>(OH)<sub>2</sub> · 5H<sub>2</sub>O",
    "location": "Fengjiashan Mine, Hubei Province, China",
    "path": "Spann_TN_015"
  },
  "16": {
    "id": "Spann Thumbnail #16",
    "description": "Dolomite",
    "composition": "CaMg(CO<sub>3</sub>)<sub>2</sub>",
    "location": "Bou Azzer, Drâa-Tafilalet, Morocco",
    "path": "Spann_TN_016"
  },
  "17": {
    "id": "Spann Thumbnail #17",
    "description": "Calcite",
    "composition": "CaCO<sub>3</sub>",
    "location": "Mine No. 884, Hunan Province, China",
    "path": "Spann_TN_017"
  },
  "18": {
    "id": "Spann Thumbnail #18",
    "description": "Väyrynenite",
    "composition": "Mn<sup>2+</sup>Be(PO<sub>4</sub>)(OH)",
    "location": "Shengus, Gilgit-Baltistan, Pakistan",
    "path": "Spann_TN_018"
  },
  "19": {
    "id": "Spann Thumbnail #19",
    "description": "Veszelyite",
    "composition": "(Cu,Zn)<sub>3</sub>(PO<sub>4</sub>)(OH)<sub>3</sub> · 2H<sub>2</sub>O",
    "location": "Black Pine Mine, Montana, USA",
    "path": "Spann_TN_019"
  },
  "20": {
    "id": "Spann Thumbnail #20",
    "description": "Wulfenite",
    "composition": "PbMoO<sub>4</sub>",
    "location": "San Francisco Mine (Cucurpe), Sonora, Mexico",
    "path": "Spann_TN_020"
  },
  "21": {
    "id": "Spann Thumbnail #21",
    "description": "Opal",
    "composition": "SiO<sub>2</sub> · nH<sub>2</sub>O",
    "location": "Yita Ridge, Amhara Region, Ethiopia",
    "path": "Spann_TN_021"
  },
  "22": {
    "id": "Spann Thumbnail #22",
    "description": "Ettringite",
    "composition": "Ca<sub>6</sub>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(OH)<sub>12</sub> · 26H<sub>2</sub>O",
    "location": "N'Chwaning Mines, Northern Cape, South Africa",
    "path": "Spann_TN_022"
  },
  "23": {
    "id": "Spann Thumbnail #23",
    "description": "Wulfenite",
    "composition": "PbMoO<sub>4</sub>",
    "location": "Ojuela Mine, Durango, Mexico",
    "path": "Spann_TN_023"
  },
  "24": {
    "id": "Spann Thumbnail #24",
    "description": "Hematite",
    "composition": "a-Fe<sub>2</sub>O<sub>3</sub>",
    "location": "St. Gotthard Area, Uri, Switzerland",
    "path": "Spann_TN_024"
  },
  "25": {
    "id": "Spann Thumbnail #25",
    "description": "Anglesite",
    "composition": "PbSO<sub>4</sub>",
    "location": "Morocco",
    "path": "Spann_TN_025"
  },
  "26": {
    "id": "Spann Thumbnail #26",
    "description": "Adamite",
    "composition": "Zn<sub>2</sub>(AsO<sub>4</sub>)(OH)",
    "location": "Gold Hill Mine, Utah, USA",
    "path": "Spann_TN_026"
  },
  "27": {
    "id": "Spann Thumbnail #27",
    "description": "Dioptase",
    "composition": "CuSiO<sub>2</sub>(OH)<sub>2</sub>",
    "location": "Kaokoveld Plateau, Kunene, Namibia",
    "path": "Spann_TN_027"
  },
  "28": {
    "id": "Spann Thumbnail #28",
    "description": "Fluorite",
    "composition": "CaF<sub>2</sub>",
    "location": "Yaogangxian Mine, Hunan Province, China",
    "path": "Spann_TN_028"
  },
  "29": {
    "id": "Spann Thumbnail #29",
    "description": "Cerussite",
    "composition": "PbCO<sub>3</sub>",
    "location": "Touissit, Oriental, Morocco",
    "path": "Spann_TN_029"
  },
  "30": {
    "id": "Spann Thumbnail #30",
    "description": "Fluorite",
    "composition": "CaF<sub>2</sub>",
    "location": "Hilton Mine, England, United Kindom",
    "path": "Spann_TN_030"
  },
  "31": {
    "id": "Spann Thumbnail #31",
    "description": "Diamond",
    "composition": "C",
    "location": "South Africa",
    "path": "Spann_TN_031"
  },
  "32": {
    "id": "Spann Thumbnail #32",
    "description": "Calcite",
    "composition": "CaCO<sub>3</sub>",
    "location": "Iraí, Rio Grande do Sul, Brazil",
    "path": "Spann_TN_032"
  },
  "33": {
    "id": "Spann Thumbnail #33",
    "description": "Beryl<br />variety emerald",
    "composition": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
    "location": "Muzo, Boyacá Dept., Colombia",
    "path": "Spann_TN_033"
  },
  "34": {
    "id": "Spann Thumbnail #34",
    "description": "Malachite",
    "composition": "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
    "location": "Kandesei, Kunene, Namibia",
    "path": "Spann_TN_034"
  },
  "35": {
    "id": "Spann Thumbnail #35",
    "description": "Elbaite",
    "composition": "Na(Al,Li)<sub>3</sub>Al<sub>6</sub>(BO<sub>3</sub>)<sub>3</sub>Si<sub>6</sub>O<sub>18</sub>(OH)<sub>4</sub>",
    "location": "Shengus, Gilgit-Baltistan, Pakistan",
    "path": "Spann_TN_035"
  },
  "36": {
    "id": "Spann Thumbnail #36",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Herkimer Co., New York, USA",
    "path": "Spann_TN_036"
  },
  "37": {
    "id": "Spann Thumbnail #37",
    "description": "Acanthite",
    "composition": "Ag<sub>2</sub>S",
    "location": "Proano Mine, Zacatecas, Mexico",
    "path": "Spann_TN_037"
  },
  "38": {
    "id": "Spann Thumbnail #38",
    "description": "Rutile",
    "composition": "TiO<sub>2</sub>",
    "location": "Ibitiara, Bahia, Brazil",
    "path": "Spann_TN_038"
  },
  "39": {
    "id": "Spann Thumbnail #39",
    "description": "Mimetite",
    "composition": "Pb<sub>5</sub>(AsO<sub>4</sub>)<sub>3</sub>Cl",
    "location": "Tsumeb, Otjikoto Region, Namibia",
    "path": "Spann_TN_039"
  },
  "40": {
    "id": "Spann Thumbnail #40",
    "description": "Fluorite",
    "composition": "CaF<sub>2</sub>",
    "location": "Nikolaevskiy Mine, Dalnegorsk, Russia",
    "path": "Spann_TN_040"
  },
  "41": {
    "id": "Spann Thumbnail #41",
    "description": "Topaz",
    "composition": "Al<sub>2</sub>SiO<sub>4</sub>(F,OH)<sub>2</sub>",
    "location": "Katlang, Khyber Pakhtunkhwa, Pakistan",
    "path": "Spann_TN_041"
  },
  "42": {
    "id": "Spann Thumbnail #42",
    "description": "Copper",
    "composition": "Cu",
    "location": "Itauz Mine, Karagandy, Kazakhstan",
    "path": "Spann_TN_042"
  },
  "43": {
    "id": "Spann Thumbnail #43",
    "description": "Quartz<br />variety amethyst",
    "composition": "SiO<sub>2</sub>",
    "location": "Piedras Parado, Veracruz, Mexico",
    "path": "Spann_TN_043"
  },
  "44": {
    "id": "Spann Thumbnail #44",
    "description": "Ettringite",
    "composition": "Ca<sub>6</sub>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(OH)<sub>12</sub> · 26H<sub>2</sub>O",
    "location": "N'Chwaning II Mine, Northern Cape, South Africa",
    "path": "Spann_TN_044"
  },
  "45": {
    "id": "Spann Thumbnail #45",
    "description": "Vanadinite",
    "composition": "Pb<sub>5</sub>(VO<sub>4</sub>)<sub>3</sub>Cl",
    "location": "ACF Mine, Meknès-Tafilalet, Morocco",
    "path": "Spann_TN_045"
  },
  "46": {
    "id": "Spann Thumbnail #46",
    "description": "Whewellite",
    "composition": "CaC<sub>2</sub>O<sub>4</sub> · H<sub>2</sub>O",
    "location": "Schlema, Saxony, Germany",
    "path": "Spann_TN_046"
  },
  "47": {
    "id": "Spann Thumbnail #47",
    "description": "Fluorite",
    "composition": "CaF<sub>2</sub>",
    "location": "Riemvasmaak, Northern Cape, South Africa",
    "path": "Spann_TN_047"
  },
  "48": {
    "id": "Spann Thumbnail #48",
    "description": "Stibnite",
    "composition": "Sb<sub>2</sub>S<sub>3</sub>",
    "location": "Herja, Maramureş, Romania",
    "path": "Spann_TN_048"
  },
  "49": {
    "id": "Spann Thumbnail #49",
    "description": "Aragonite",
    "composition": "CaCO<sub>3</sub>",
    "location": "Banská Štiavnica, Banská Bystrica, Slovakia",
    "path": "Spann_TN_049"
  },
  "50": {
    "id": "Spann Thumbnail #50",
    "description": "Rhodochrosite",
    "composition": "Mn<sup>2+</sup>CO<sub>3</sub>",
    "location": "Kalahari, Northern Cape, South Africa",
    "path": "Spann_TN_050"
  },
  "51": {
    "id": "Spann Thumbnail #51",
    "description": "Scolecite",
    "composition": "CaAl<sub>2</sub>Si<sub>3</sub>O<sub>10</sub> · 3H<sub>2</sub>O",
    "location": "Pune District, Maharashtra, India",
    "path": "Spann_TN_051"
  },
  "52": {
    "id": "Spann Thumbnail #52",
    "description": "Beryl<br />variety aquamarine",
    "composition": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
    "location": "Erongo Mts., Erongo, Namibia",
    "path": "Spann_TN_052"
  },
  "53": {
    "id": "Spann Thumbnail #53",
    "description": "Vesuvianite",
    "composition": "Ca<sub>19</sub>(Al,Mg)<sub>13</sub>B<sub>0-5</sub>Si<sub>18</sub>O<sub>68</sub>(OH,O,F)<sub>10</sub>",
    "location": "Jeffrey Mine, Québec, Canada",
    "path": "Spann_TN_053"
  },
  "54": {
    "id": "Spann Thumbnail #54",
    "description": "Azurite",
    "composition": "Cu<sub>3</sub>(CO<sub>3</sub>)<sub>2</sub>(OH)<sub>2</sub>",
    "location": "Tsumeb, Otjikoto Region, Namibia",
    "path": "Spann_TN_054"
  },
  "55": {
    "id": "Spann Thumbnail #55",
    "description": "Opal<br />(clam shell)",
    "composition": "SiO<sub>2</sub> · nH<sub>2</sub>O",
    "location": "Coober Pedy, South Australia",
    "path": "Spann_TN_055"
  },
  "56": {
    "id": "Spann Thumbnail #56",
    "description": "Dioptase",
    "composition": "CuSiO<sub>2</sub>(OH)<sub>2</sub>",
    "location": "Tsumeb, Otjikoto Region, Namibia",
    "path": "Spann_TN_056"
  },
  "57": {
    "id": "Spann Thumbnail #57",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Afghanistan",
    "path": "Spann_TN_057"
  },
  "58": {
    "id": "Spann Thumbnail #58",
    "description": "Pyromorphite",
    "composition": "Pb<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>Cl",
    "location": "Wheatley Mine, Pennsylvania, USA",
    "path": "Spann_TN_058"
  },
  "59": {
    "id": "Spann Thumbnail #59",
    "description": "Opal",
    "composition": "SiO<sub>2</sub> · nH<sub>2</sub>O",
    "location": "Durango, Mexico",
    "path": "Spann_TN_059"
  },
  "60": {
    "id": "Spann Thumbnail #60",
    "description": "Calcite",
    "composition": "CaCO<sub>3</sub>",
    "location": "Berry Materials Corp. Quarry, Indiana, USA",
    "path": "Spann_TN_060"
  },
  "61": {
    "id": "Spann Thumbnail #61",
    "description": "Barite",
    "composition": "BaSO<sub>4</sub>",
    "location": "Huanzala Mine, Huánuco, Peru",
    "path": "Spann_TN_061"
  },
  "62": {
    "id": "Spann Thumbnail #62",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Orange River, Northern Cape, South Africa",
    "path": "Spann_TN_062"
  },
  "63": {
    "id": "Spann Thumbnail #63",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Jeffrey Quarry, Arkansas, USA",
    "path": "Spann_TN_063"
  },
  "64": {
    "id": "Spann Thumbnail #64",
    "description": "Wavellite",
    "composition": "Al<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(OH,F)<sub>3</sub> · 5H<sub>2</sub>O",
    "location": "Avant, Arkansas, USA",
    "path": "Spann_TN_064"
  },
  "65": {
    "id": "Spann Thumbnail #65",
    "description": "Datolite",
    "composition": "CaBSiO<sub>4</sub>(OH)",
    "location": "Boron Pit, Dalnegorsk, Russia",
    "path": "Spann_TN_065"
  },
  "66": {
    "id": "Spann Thumbnail #66",
    "description": "Fluorapatite",
    "composition": "Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>F",
    "location": "Nuristan, Afghanistan",
    "path": "Spann_TN_066"
  },
  "67": {
    "id": "Spann Thumbnail #67",
    "description": "Hemimorphite",
    "composition": "Zn<sub>4</sub>Si<sub>2</sub>O<sub>7</sub>(OH)<sub>2</sub> · H<sub>2</sub>O",
    "location": "Potosí mine, Chihuahua, Mexico",
    "path": "Spann_TN_067"
  },
  "68": {
    "id": "Spann Thumbnail #68",
    "description": "Adamite",
    "composition": "Zn<sub>2</sub>(AsO<sub>4</sub>)(OH)",
    "location": "Ojuela Mine, Durango, Mexico",
    "path": "Spann_TN_068"
  },
  "69": {
    "id": "Spann Thumbnail #69",
    "description": "Calcite",
    "composition": "CaCO<sub>3</sub>",
    "location": "Bigrigg, England, UK",
    "path": "Spann_TN_069"
  },
  "70": {
    "id": "Spann Thumbnail #70",
    "description": "Pyromorphite",
    "composition": "Pb<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>Cl",
    "location": "Dry Gill Mine, England, UK",
    "path": "Spann_TN_070"
  },
  "71": {
    "id": "Spann Thumbnail #71",
    "description": "Quartz<br />variety amethyst",
    "composition": "SiO<sub>2</sub>",
    "location": "Kedon, Far-Eastern Region, Russia",
    "path": "Spann_TN_071"
  },
  "72": {
    "id": "Spann Thumbnail #72",
    "description": "Mimetite",
    "composition": "Pb<sub>5</sub>(AsO<sub>4</sub>)<sub>3</sub>Cl",
    "location": "Tsumeb, Otjikoto Region, Namibia",
    "path": "Spann_TN_072"
  },
  "73": {
    "id": "Spann Thumbnail #73",
    "description": "Spessartine",
    "composition": "Mn<sup>2+</sup><sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
    "location": "Shengus, Gilgit-Baltistan, Pakistan",
    "path": "Spann_TN_073"
  },
  "74": {
    "id": "Spann Thumbnail #74",
    "description": "Ferroaxinite",
    "composition": "Ca<sub>2</sub>Fe<sup>2+</sup>Al<sub>2</sub>BSi<sub>4</sub>O<sub>15</sub>(OH)",
    "location": "Puiva Mount, Ural Federal District, Russia",
    "path": "Spann_TN_074"
  },
  "75": {
    "id": "Spann Thumbnail #75",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Northern Cape, South Africa",
    "path": "Spann_TN_075"
  },
  "76": {
    "id": "Spann Thumbnail #76",
    "description": "Pectolite",
    "composition": "NaCa<sub>2</sub>Si<sub>3</sub>O<sub>8</sub>(OH)",
    "location": "Jeffrey Mine, Québec, Canada",
    "path": "Spann_TN_076"
  },
  "77": {
    "id": "Spann Thumbnail #77",
    "description": "Rhodochrosite",
    "composition": "Mn<sup>2+</sup>CO<sub>3</sub>",
    "location": "Capillitas Mine, Catamarca, Argentina",
    "path": "Spann_TN_077"
  },
  "78": {
    "id": "Spann Thumbnail #78",
    "description": "Malachite",
    "composition": "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
    "location": "Ojuela Mine, Durango, Mexico",
    "path": "Spann_TN_078"
  },
  "79": {
    "id": "Spann Thumbnail #79",
    "description": "Calcite",
    "composition": "CaCO<sub>3</sub>",
    "location": "Rensselaer Quarry, Indiana, USA",
    "path": "Spann_TN_079"
  },
  "80": {
    "id": "Spann Thumbnail #80",
    "description": "Olmiite",
    "composition": "CaMn[SiO<sub>3</sub>(OH)](OH)",
    "location": "N'Chwaning Mines, Northern Cape, South Africa",
    "path": "Spann_TN_080"
  },
  "81": {
    "id": "Spann Thumbnail #81",
    "description": "Zoisite<br />variety tanzanite",
    "composition": "Ca<sub>2</sub>Al<sub>3</sub>(SiO<sub>4</sub>)(Si<sub>2</sub>O<sub>7</sub>)O(OH)",
    "location": "Merelani Hills, Manyara Region, Tanzania",
    "path": "Spann_TN_081"
  },
  "82": {
    "id": "Spann Thumbnail #82",
    "description": "Quartz",
    "composition": "SiO<sub>2</sub>",
    "location": "Tole, FATA, Pakistan",
    "path": "Spann_TN_082"
  }
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

