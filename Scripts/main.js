// exchars=500
// exchars=350
// exchars=1000

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

function getTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  var clock = setTimeout(getTime, 500);
  
  function checkTime(i) {
    if (i < 10){
      i = "0" + i;
    }
    return i;
  }
  
}

function loaded(){

  getTime();

  var xhttp;
  
  if(window.XMLHttpRequest){
    xhttp = new XMLHttpRequest();
  }
  else{
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
      showRandom(JSON.parse(xhttp.responseText));
    }
  };
  
//   xhttp.open("GET","https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&generator=random&redirects=1&exlimit=10&exintro=1&grnnamespace=0&grnlimit=10",true);
  // xhttp.open("GET","https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageimages&generator=random&redirects=1&exchars=350&exlimit=10&exintro=1&piprop=thumbnail&pithumbsize=240&pilimit=10&grnnamespace=0&grnlimit=10",true);
  xhttp.open("GET","https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageimages&generator=random&redirects=1&exlimit=10&exintro=1&piprop=thumbnail&pithumbsize=240&pilimit=10&grnnamespace=0&grnlimit=10",true);

  xhttp.send();
}

function showRandom(data){
  var hold = "";
  var d = data.query.pages;
  var c = 1;
  var r = 0;
  
  for(var i in d){
    if(c%2 === 1){
      r = Math.floor((Math.random()*4)+4);
      
      hold += "<div class='row rowHead'>" + "<div class='p1 col-sm-12 col-md-" + r + "'>" + "<h1 style='word-wrap:break-word'>" + d[i].title + "</h1>";
      if(d[i].hasOwnProperty("thumbnail")){
        hold += "<img src='" + d[i].thumbnail.source + "'>";
      }
      hold += d[i].extract + "<br><br>" + "<a target='_blank' href='https://en.wikipedia.org/wiki/?curid=" + i + "'>...More</a>" + "</div>";
      
      c++;
    }else{
      var r1 = 12 - r;
      
      hold += "<div class='p2 col-sm-12 col-md-" + r1 + "'>" + "<h1 style='word-wrap:break-word'>" + d[i].title + "</h1>";
      if(d[i].hasOwnProperty("thumbnail")){
        hold += "<img src='" + d[i].thumbnail.source + "'>";
      }
      hold += d[i].extract + "<br><br>" + "<a target='_blank' href='https://en.wikipedia.org/wiki/?curid=" + i + "'>...More</a>" + "</div>" + "</div>";
      
      c++;
    }
  }
  
  document.getElementById("content").innerHTML = hold;
}



// {
//     "batchcomplete": "",
//     "continue": {
//         "grncontinue": "0.883249956065|0.8832525752750001|2212826|0",
//         "continue": "grncontinue||"
//     },
//     "query": {
//         "pages": {
//             "26821287": {
//                 "pageid": 26821287,
//                 "ns": 0,
//                 "title": "Naugatuck Trail",
//                 "extract": "<p>The <b>Naugatuck Trail</b> is a 6.8-mile (10.9&#160;km) <i>Blue-Blazed</i> hiking trail \"system\" in the eastern central-lower Naugatuck River Valley in New Haven County, Connecticut, USA and is today almost entirely contained in the Naugatuck State Forest. The mainline (officially the \"Blue\" or \"non-dot\") trail is primarily east to west with three short side or spur trails.</p>\n<p>The Naugatuck Trail today is composed of four trails including the primarily East-to-West mainline trail (5.5 miles) plus three shorter side trails. At its western end the trail ends with a section alongside Route 8 and the Naugatuck River.</p>\n<p>Notable features include the summits of Beacon Cap and Spruce Knoll. The trail goes near, but does not summit Beacon Hill (670&#160;feet). The Naugatuck Trail is maintained largely through the efforts of the Connecticut Forest and Park Association.</p>\n<p>The Naugatuck Trail was a much larger trail in the 1930s and 1940s but it has been one of the trail systems most drastically shrunk by post\u2013World War II housing developments of the Connecticut Blue-Blazed Trails.</p>...",
//                 "thumbnail": {
//                     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/NaugatuckTrailNaugatuckStateForestBeaconFallsCT-CTRoute8Border.jpg/320px-NaugatuckTrailNaugatuckStateForestBeaconFallsCT-CTRoute8Border.jpg",
//                     "width": 320,
//                     "height": 240
//                 }
//             },
//             "40739971": {
//                 "pageid": 40739971,
//                 "ns": 0,
//                 "title": "132nd New York Volunteer Infantry Regiment",
//                 "extract": "<p>The <b>132nd New York Volunteer Infantry Regiment</b>, the \"Second Regiment, Empire,Spinola's Brigade\"; or \"Hillhouse Light Infantry\", was an infantry regiment of the Union Army during the American Civil War.</p>..."
//             },
//             "21940385": {
//                 "pageid": 21940385,
//                 "ns": 0,
//                 "title": "Modern Art (The Rippingtons album)",
//                 "extract": "<p><i><b>Modern Art</b></i> is The Rippingtons' fifteenth album which was released in 2009.</p>\n<p>The album is notable for being the first Rippingtons album to not feature a hand percussion player. Guitarist/bandleader Russ Freeman cited a desire to explore the possibilities of a smaller ensemble.</p>..."
//             },
//             "42116956": {
//                 "pageid": 42116956,
//                 "ns": 0,
//                 "title": "Jack Grannary",
//                 "extract": "<p><b>Jack Grannary</b>, also spelled <b>Grannery</b>, (born July 12, 1884) was a Canadian professional ice hockey player. He played with the Quebec Hockey Club of the National Hockey Association from the 1909\u201310 season through to the 1911\u201312 season. Granny won the Stanley Cup with Quebec in 1912</p>..."
//             },
//             "22199": {
//                 "pageid": 22199,
//                 "ns": 0,
//                 "title": "Ohio",
//                 "extract": "<p><b>Ohio</b> <span><span>/<span><span title=\"/o\u028a/ long 'o' in 'code'\">o\u028a</span><span title=\"/\u02c8/ primary stress follows\">\u02c8</span><span title=\"'h' in 'hi'\">h</span><span title=\"/a\u026a/ long 'i' in 'tide'\">a\u026a</span><span title=\"/./ syllable break\">.</span><span title=\"/o\u028a/ long 'o' in 'code'\">o\u028a</span></span>/</span></span> is an Eastern state in the Great Lakes region of the United States. Ohio is the 34th largest by area, the 7th most populous, and the 10th most densely populated of the 50 United States. The state's capital and largest city is Columbus.</p>\n<p>The state takes its name from the Ohio River. The name originated from the Iroquois word <i>ohi-yo\u2019</i>, meaning \"great river\" or \"large creek\". Partitioned from the Northwest Territory, the state was admitted to the Union as the 17th state (and the first under the Northwest Ordinance) on March 1, 1803. Ohio is historically known as the \"Buckeye State\" after its Ohio buckeye trees, and Ohioans are also known as \"Buckeyes\".</p>\n<p>The government of Ohio is composed of the executive branch, led by the Governor; the legislative branch, which comprises the Ohio General Assembly; and the judicial branch, which is led by the state Supreme Court. Ohio occupies 16 seats in the United States House of Representatives. Ohio is known for its status as both a swing state and a bellwether in national elections. Six Presidents of the United States have been elected who had Ohio as their home state.</p>...",
//                 "thumbnail": {
//                     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/320px-Flag_of_Ohio.svg.png",
//                     "width": 320,
//                     "height": 197
//                 }
//             },
//             "244747": {
//                 "pageid": 244747,
//                 "ns": 0,
//                 "title": "Brahmin",
//                 "extract": "<p><b>Brahmin</b> (<span><span>/<span><span title=\"/\u02c8/ primary stress follows\">\u02c8</span><span title=\"'b' in 'buy'\">b</span><span title=\"'r' in 'rye'\">r</span><span title=\"/\u0251\u02d0/ 'a' in 'father'\">\u0251\u02d0</span><span title=\"'m' in 'my'\">m</span><span title=\"/\u0259/ 'a' in 'about'\">\u0259</span><span title=\"'n' in 'no'\">n</span><span title=\"/\u0259/ 'a' in 'about'\">\u0259</span></span>/</span></span>; \u092c\u094d\u0930\u093e\u0939\u094d\u092e\u0923) is a varna (class) in Hinduism specialising as priests, teachers (acharya) and protectors of sacred learning across generations.</p>\n<p>Brahmins were traditionally responsible for religious rituals in temples, as intermediaries between temple deities and devotees, as well as rite of passage rituals such as solemnising a wedding with hymns and prayers. However, Indian texts suggest that Brahmins were often agriculturalists and warriors in ancient and medieval India.</p>...",
//                 "thumbnail": {
//                     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Group_of_Brahmins_1913.jpg/254px-Group_of_Brahmins_1913.jpg",
//                     "width": 254,
//                     "height": 320
//                 }
//             },
//             "11219529": {
//                 "pageid": 11219529,
//                 "ns": 0,
//                 "title": "List of syntactic phenomena",
//                 "extract": "<p>A list of phenomena in syntax.</p>\n<ul>\n<li>Anaphora</li>\n<li>Agreement</li>\n<li>Antecedent-contained deletion</li>\n<li>Differential Object Marking</li>\n<li>Case</li>\n<li>Clitics</li>\n<li>Control</li>\n<li>Dummy pronouns</li>\n<li>Ergative verb</li>\n<li>Existential clauses</li>\n<li>Expletives</li>\n<li>Heavy NP shift</li>\n<li>Inverse copula sentences</li>\n<li>Movement paradoxes</li>\n<li>Parasitic gaps</li>\n<li>Pro-drop</li>\n<li>Raising (linguistics)</li>\n<li>Reciprocal (grammar)</li>\n<li>Reflexive pronouns</li>\n<li>Reflexive verbs</li>\n<li>Unaccusative verbs</li>\n<li>Wh-movement</li>\n</ul>..."
//             },
//             "4643065": {
//                 "pageid": 4643065,
//                 "ns": 0,
//                 "title": "Capital Cities Communications Inc v Canadian Radio-Television Commission",
//                 "extract": "<p><i><b>Capital Cities Communications v. CRTC</b></i> (1977), [1978] 2 S.C.R. 141 is a Supreme Court of Canada decision on the legislative jurisdiction of cable television. Chief Justice Laskin, writing for the majority of the Court, held that all television, even where exclusively produced and distributed within the province, fell within the definition of a federal undertaking under section 92(10)(a) of the <i>Constitution Act, 1867</i>.</p>\n<p>Rogers Cable provided a subscription service for American television programs. The Canadian Radio-television and Telecommunications Commission (CRTC), a federal regulatory agency, required television broadcasters such as Rogers to remove the commercials from American television feeds and replace them with Canadian ads.</p>\n<p>The issue before the Court was whether the federal government had legislative jurisdiction over the content of cable television.</p>\n<p>Laskin held that both cable and broadcast television were both within the jurisdiction of the federal government.</p>\n<p>This decision was released along with the accompanying case <i>Dionne v. Quebec (Public Service Board)</i> [1978] 2 S.C.R. 191.</p>...",
//                 "thumbnail": {
//                     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Court_of_Canada_2.jpg/320px-Supreme_Court_of_Canada_2.jpg",
//                     "width": 320,
//                     "height": 209
//                 }
//             },
//             "24869404": {
//                 "pageid": 24869404,
//                 "ns": 0,
//                 "title": "Dan Musa",
//                 "extract": "<p><b>Dan Musa</b> is a Local Government Area in Katsina State, Nigeria. Its headquarters are in the town of Dan Musa.</p>\n<p>It has an area of 792&#160;km\u00b2 and a population of 113,691 at the 2006 census.</p>\n<p>The postal code of the area is 821.</p>...",
//                 "thumbnail": {
//                     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nigeria_location_map.svg/320px-Nigeria_location_map.svg.png",
//                     "width": 320,
//                     "height": 246
//                 }
//             },
//             "46380355": {
//                 "pageid": 46380355,
//                 "ns": 0,
//                 "title": "Gao Jinsong",
//                 "extract": "<p><b>Gao Jinsong</b> (simplified Chinese: <span lang=\"zh-Hans\" xml:lang=\"zh-Hans\">\u9ad8\u52b2\u677e</span>; traditional Chinese: <span lang=\"zh-Hant\" xml:lang=\"zh-Hant\">\u9ad8\u52c1\u677e</span>; pinyin: <i><span lang=\"zh-Latn-pinyin\" xml:lang=\"zh-Latn-pinyin\">G\u0101o J\u00ecns\u014dng</span></i>; born August 1963) is a former Chinese politician who spent most of his career in Southwest China's Yunnan province. He was investigated by the Communist Party of China's anti-graft agency in April 2015. Previously he served as the Communist Party Secretary of Kunming.</p>\n<p>Gao was a delegate to the 11th National People's Congress.</p>..."
//             }
//         }
//     }
// }