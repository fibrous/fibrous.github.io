// Code goes here

window.onload = function() {
      init();
    };

    var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AstzfIiztCjkdDI4VHZROUVxNEViVi1nNzd1UktqU1E&single=true&gid=0&output=html';

    function init() {
      Tabletop.init({
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true
      });
    }
  
  var res = function (){
    
  response = prompt("Enter a Genus and Species");
  }
  
   var showInfo = function(data, tabletop) {

      


      for (i = 0; i < data.length; i++) {

        if (data[i].species === response) {
          c = "LEAf CIRCULARITY: " + data[i].circularity;
          l = "LDMC: " + data[i].ldmc;
          sd = "SDMC: " + data[i].sdmc;
          sla = "SLA: " + data[i].sla;
          sp = "SPECIES: " + data[i].species;
          ll = "LEAF LENGTH: " + data[i].llength;
          lw = "LEAF WIDTH: " + data[i].lwidth;
          mh = "MAX HEIGHT: " + data[i].maxheight;
          pl = "PETIOLE LENGTH: " + data[i].plength;
          h = "HABITAT TYPE: " + data[i].habitat;
          st = "NATIVE STATUS: " + data[i].status;
          document.getElementById("circ").innerHTML = c;
          document.getElementById("ldmc").innerHTML = l;
          document.getElementById("sdmc").innerHTML = sd;
          document.getElementById("sla").innerHTML = sla;
          document.getElementById("sp").innerHTML = sp;
          document.getElementById("ll").innerHTML = ll;
          document.getElementById("lw").innerHTML = lw;
          document.getElementById("mh").innerHTML = mh;
          document.getElementById("pl").innerHTML = pl;
          document.getElementById("h").innerHTML = h;
          document.getElementById("st").innerHTML = st;

        }
      }
    };