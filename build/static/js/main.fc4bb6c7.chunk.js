(this["webpackJsonpedyst-swiggy"]=this["webpackJsonpedyst-swiggy"]||[]).push([[0],{2:function(a,e,r){a.exports={jumbotron:"Hero_jumbotron__1zW-l",jbLeft:"Hero_jbLeft__3VsOX",jbNav:"Hero_jbNav__1Tur_",jbLogin:"Hero_jbLogin__1I11o",jbRegister:"Hero_jbRegister__2RPG-",jbTitle:"Hero_jbTitle__3b2-5",jbSubtitle:"Hero_jbSubtitle__3LvyP",jbForm:"Hero_jbForm__3-Ydn",formSearch:"Hero_formSearch__1dTTS",toggleClear:"Hero_toggleClear__1VyXF",formInput:"Hero_formInput__1oqAM",formLocate:"Hero_formLocate__zl6kj",searchClear:"Hero_searchClear__2JcQM",formSearchBtn:"Hero_formSearchBtn__RJeVJ",formBtn:"Hero_formBtn__34nDw",captionTitle:"Hero_captionTitle__3Ex6Q",captionList:"Hero_captionList__30-Oq",listItem:"Hero_listItem__1Lf2q",listLink:"Hero_listLink__1s47v",jbRight:"Hero_jbRight__zDuFs",animation:"Hero_animation__1tDRN"}},20:function(a,e,r){},3:function(a,e,r){a.exports={container:"Footer_container__3a-GT",wrapper:"Footer_wrapper__3gFtq",footer:"Footer_footer__3QwQy",footTitle:"Footer_footTitle__3UbeK",section:"Footer_section__111AK",icon:"Footer_icon__1zLU8",location:"Footer_location__azDUZ",locationWrap:"Footer_locationWrap__1Iq9A",locationList:"Footer_locationList__emDR_",social:"Footer_social__xNeDj",revealBtn:"Footer_revealBtn__kmdZ1"}},30:function(a,e,r){"use strict";r.r(e);var t=r(1),i=r.n(t),n=r(13),o=r.n(n),s=(r(20),r(6)),l=r(2),c=r.n(l),u=["Unexpected guests?","Cooking gone wrong?","Movie marathon?","Game night?","Late night work?","Hungry?"],h=[{name:"Ahmedabad",type:""},{name:"Banglore",type:"disabled"},{name:"Chennai",type:""},{name:"Delhi",type:"disabled"},{name:"Gurgaon",type:""},{name:"Hyderabad",type:"disabled"},{name:"Kolkata",type:""},{name:"Mumbai",type:"disabled"},{name:"Pune",type:""},{name:"&more.",type:"disabled"}],d=r(0),j=function(){var a=Object(t.useState)(""),e=Object(s.a)(a,2),r=e[0],i=e[1];return Object(d.jsxs)("form",{action:"",className:c.a.jbForm,children:[Object(d.jsxs)("section",{className:"".concat(c.a.formSearch," ").concat(r?c.a.toggleClear:""),children:[Object(d.jsx)("input",{type:"text",list:"cities",name:"cities",className:"".concat(c.a.formInput),value:r,onChange:function(a){return function(a){i(a.target.value)}(a)},placeholder:"Enter your delivery location"}),Object(d.jsxs)("datalist",{id:"cities",children:[Object(d.jsx)("option",{value:"Ahmedabad"}),Object(d.jsx)("option",{value:"Bangalore"}),Object(d.jsx)("option",{value:"Chennai"}),Object(d.jsx)("option",{value:"Delhi"}),Object(d.jsx)("option",{value:"Gurgaon"}),Object(d.jsx)("option",{value:"Hyderabad"}),Object(d.jsx)("option",{value:"Kolkata"}),Object(d.jsx)("option",{value:"Mumbai"}),Object(d.jsx)("option",{value:"Pune"}),Object(d.jsx)("option",{value:"& more"})]}),""===r?Object(d.jsxs)("button",{className:"btn ".concat(c.a.formLocate),children:[Object(d.jsx)("img",{src:"/assets/crosshairs.svg",alt:"crosshair"})," ",Object(d.jsx)("span",{children:"Locate Me"})]}):Object(d.jsx)("span",{className:"".concat(c.a.searchClear),onClick:function(){return i("")},children:"Clear"})]}),Object(d.jsx)("section",{className:"".concat(c.a.formSearchBtn),children:Object(d.jsx)("button",{className:"btn ".concat(c.a.formBtn),children:"FIND FOOD"})})]})},b=r(4),m=function(){var a=Object(t.useState)("Hungry?"),e=Object(s.a)(a,2),r=e[0],i=e[1],n=Object(t.useRef)(),o=Object(t.useCallback)((function(){n.current<u.length-1?++n.current:n.current=0,i(u[n.current])}),[]);return Object(t.useEffect)((function(){var a=setInterval(o,3e3);return function(){return clearInterval(a)}}),[o]),Object(d.jsx)("div",{className:c.a.jumbotron,children:Object(d.jsxs)("section",{className:c.a.jbLeft,children:[Object(d.jsxs)("div",{className:c.a.jbNav,children:[Object(d.jsx)("img",{src:"/assets/swiggy.svg",alt:"swiggy"}),Object(d.jsxs)("div",{className:c.a.navLeft,children:[Object(d.jsx)("button",{className:"btn fn-large ".concat(c.a.jbLogin),children:"Login"}),Object(d.jsx)("button",{className:"btn fn-large invert ".concat(c.a.jbRegister),children:"Sign up"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"fn-large ca-title ".concat(c.a.jbTitle),children:r}),Object(d.jsx)("span",{className:"disabled fn-medium ".concat(c.a.jbSubtitle),children:"Order food from favourite restaurants near you."})]}),Object(d.jsx)(j,{}),Object(d.jsxs)("section",{className:c.a.jbCaption,children:[Object(d.jsx)("h3",{className:c.a.captionTitle,children:"Popular cities in India"}),Object(d.jsx)("ul",{className:c.a.captionList,children:h.map((function(a,e){var r=a.name,t=a.type;return Object(d.jsx)("li",{className:c.a.listItem,children:Object(d.jsx)(b.b,{to:"/",className:"fn-large ".concat(t," ").concat(c.a.listLink),children:r})},e)}))})]})]})})},g=r(5),p=r.n(g),_=function(){return Object(d.jsx)("div",{className:p.a.featureContainer,children:Object(d.jsxs)("div",{className:p.a.featureWrapper,children:[Object(d.jsxs)("section",{className:p.a.featureSection,children:[Object(d.jsx)("img",{src:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf",alt:"bruh"}),Object(d.jsx)("p",{className:p.a.featureTitle,children:"No Minimum Order"}),Object(d.jsx)("p",{className:p.a.featureText,children:"Order in for yourself or for the group, with no restrictions on order value"})]}),Object(d.jsxs)("section",{className:p.a.featureSection,children:[Object(d.jsx)("img",{src:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy",alt:"bruh"}),Object(d.jsx)("p",{className:p.a.featureTitle,children:"Live Order Tracking"}),Object(d.jsx)("p",{className:p.a.featureText,children:"Know where your order is at all times, from the restaurant to your doorstep"})]}),Object(d.jsxs)("section",{className:p.a.featureSection,children:[Object(d.jsx)("img",{src:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn",alt:"bruh"}),Object(d.jsx)("p",{className:p.a.featureTitle,children:"Lightning-Fast Delivery"}),Object(d.jsx)("p",{className:p.a.featureText,children:"Experience Swiggy's superfast delivery for food delivered fresh & on time"})]})]})})},x=r(7),O=r.n(x),f=function(){return Object(d.jsx)("div",{className:O.a.container,children:Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsxs)("section",{className:O.a.textSection,children:[Object(d.jsx)("h3",{className:"fn-large ".concat(O.a.title),children:"Restaurants in your pocket"}),Object(d.jsx)("p",{className:O.a.text,children:"Order from your favorite restaurants & track on the go, with the all-new Swiggy app."}),Object(d.jsxs)("section",{className:O.a.icon,children:[Object(d.jsx)("img",{src:"/assets/play_icon.png",alt:"icon"}),Object(d.jsx)("img",{src:"/assets/iOS_icon.png",alt:"icon"})]})]}),Object(d.jsxs)("section",{className:O.a.imageSection,children:[Object(d.jsx)("img",{src:"/assets/pixel1.png",alt:"mobile"}),Object(d.jsx)("img",{src:"/assets/pixel2.png",alt:"mobile"})]})]})})},y=r(3),N=r.n(y),S={Company:{"About us":"/",Team:"/",Careers:"/","Swiggy Blog":"/","Big Boubty":"/","Swiggy Super":"/","Swiggy Colaborate":"/","Swiggy Instamart":"/"},Contact:{"Help & Support":"/","Partner with us":"/","Ride with us":"/"},Legal:{"Terms & Conditions":"/","Refund & Cancellation":"/","Privacy Policy":"/","Cookie Policy":"/","Offer Terms":"/","Phishing & Fraud":"/"}},k=["Abohar","Adilabad","Adityapur","Adoni","Agartala","Agra","Ahmedabad","Ahmednagar","Ajmer","Akola","Alappuzha","Aligarh","Allahabad","Alwar","Ambala","Ambikapur","Ambur","Amravati","Amreli","Amritsar","Amroha","Anand","Anantapur","Ankleshwar","Arrah","Asansol","Ashoknagar","Aurangabad","Aurangabad_bihar","Azamgarh","Baddi","Bagalkot","Bagdogra","Bahadurgarh","Bahraich","Bajpe","Balaghat","Ballari","Balrampur","Balurghat","Bangalore","Bankura","Banswara","Bantwal","Bapatlachirala","Baraut","Bardhaman","Bardoli","Bareilly","Barnala","Barshi","Basirhat","Basti","Batala","Bathinda","Beawar","Beed","Begusarai","Belgaum","Berhampore","Berhampur","Bettiah","Betul","Bhadrachalam","Bhadravati","Bhagalpur","Bhandara","Bharabanki","Bharatpur","Bharuch","Bhatapara","Bhatkal","Bhavnagar","Bhilai","Bhilwara","Bhimavaram","Bhind","Bhiwadi","Bhiwani","Bhopal","Bhubaneswar","Bhuj","Bidar","Biharsharif","Bijapur","Bijnor","Bikaner","Bilaspur","Bina","Bodhan-Rural","Bokaro","Bolpur","Bongaigaon","Bongaon","Botad","Budaun","Budhwal","Bulandshahr","Buldana","Bundi","Burhanpur","Buxar","Central-Goa","Chalakkudy","Chalisgaon","Chandigarh","Chandrapur","Changanasherry","Charkhi-Dadri","Chengannur","Chennai","Cherthala","Chhapra","Chhatarpur","Chhindwara","Chikkaballapur","Chikmagalur","Chilakaluripet","Chitradurga","Chittoor","Chittorgarh","Churu","Coimbatore","Cuddalore","Cuttack","Dabhoi","Dabra","Dahod","Damoh","Darbhanga","Darjeeling","Datia"],B=["Dausa","Davanagere","Dehradun","Dehri","Delhi","Deoghar","Dewas","Dhamtari","Dhanbad","Dhar","Dharamshala","Dharmapuri","Dharwad","Dhule","Dibrugarh","Digha","Dindigul","Doddaballapura","Duliajan","Durgapur","Eluru","Erode","Etawah","Faizabad","Faridabad","Faridkot","Farrukhabad","Fatehabad","Fatehgarh-Sahib","Fatehpur","Fazilka","Firozabad","Firozpur","Gadag-Betigeri","Gadwal","Gandhidham","Gaya","Gharaunda","Ghaziabad","Giridih","Godhra","Gohana","Gokak","Gokarna","Gonda","Gondal","Gondia","Gopalganj","Gorakhpur","Gudivada","Guna","Guntakal","Guntur","Gurdaspur","Gurgaon","Guwahati","Gwalior","Habra","Haldia","Haldwani","Halol","Hampi","Hansi","Hanumangarh","Hapur","Hardoi","Haridwar","Hassan","Himmatnagar","Hinganghat","Hisar","Hoshangabad","Hoshiarpur","Hospet","Hubli","Hyderabad","Imphal","Indore","Irinjalakuda","Itarsi","Jabalpur","Jagdalpur","Jagraon","Jagtial","Jahanabad","Jaipur","Jalandhar","Jalgaon","Jalna","Jalpaiguri","Jammu","Jamnagar","Jamshedpur","Janjgir","Jaunpur","Jhalawar","Jhansi","Jhunjhunu","Jind","Jodhpur","Jorhat","Junagadh","Kadapa","Kadiri","Kaithal","Kakinada","Kalaburagi","Kalady","Kamareddy","Kanchrapara","Kanker","Kannur","Kanpur","Kanyakumari","Kapurthala","Karad","Karaikkudi","Karimnagar","Karnal","Karunagappaly","Karur","Karwar","Kashipur","Katihar","Katni","Kavali","Kayamkulam","Khammam","Khandwa","Khanna","Kharagpur","Khargone"],v=["Kishanganj","Kishangarh","Kochi","Kodaikanal","Kolar","Kolhapur","Kolkata","Kollam","Korba","Kota","Kothagudem","Kothamanagalam","Kottakkal","Kottarakkara","Kottayam","Kozhikode","Krishnagiri","Krishnanagar","Kuchaman","Kumbakonam","Kumta","Kundapura","Kurnool","Kurukshetra","Lakhimpur","Lalitpur","Latur","Lonavala","Lonavla","Lucknow","Ludhiana","Machilipatnam","Madanapalle","Madikeri","Madurai","Mahasamund","Mahbubnagar","Malappuram","Malda","Malegaon","Mallapuram","Malout","Mancherial","Mandi-Dabwali","Mandsaur","Mandya","Mangaluru","Manipal","Manjeri","Mansa","Markapur","Mathura","Maunath-Bhanjan","Medak","Medinipur","Meerut","Mehsana","Miryalaguda","Mirzapur","Modinagar","Moga","Moodbidri","Moradabad","Morbi","Morbi-2","Morena","Motihari","Mount-Abu","Mughalsarai","Muktsar","Mumbai","Munger","Murdeshwar","Mussoorie","Muvattupuzha","Muzaffarnagar","Muzaffarpur","Mysore","Nabadwip","Nadiad","Nagaon","Nagapattinam","Nagda","Nagercoil","Nagpur","Nagur","Nainital","Nalgonda","Namakkal","Nanded","Nandurbar","Nandyal","Nangal","Naraingarh","Narasaraopet","Narnaul","Narwana","Nashik","Nathdwara","Navsari","Neemuch","Nellore","Neyveli","Nipani","Nirmal","Nizamabad","Noida","Noida-1","North-Goa","Ongole","Ooty","Orai","Osmanabad","Pala","Palakkad","Palanpur","Pali","Palwal","Panipat","Parbhani","Patan","Pathankot","Patiala","Patna","Perinthalmanna","Phagwara","Phaltan","Pilani","Pilibhit","Pondicherry","Porbandar","Proddatur"],w=["Pudukottai","Pune","Puri","Purnea","Purulia","Puttur","Rae-Bareli","Raichur","Raiganj","Raigarh","Raipur","Rajahmundry","Rajapalayam","Rajkot","Rajnandgaon","Ramagundam","Ramanathapuram","Ramgarh","Rampur","Ranchi","Ranibennur","Raniganj","Ratlam","Ratnagiri","Rayachoty","Rewa","Rewari","Rishikesh","Rohtak","Roorkee","Ropar","Rourkela","Rudrapur","Sagar","Sagara","Saharanpur","Saharsa","Salem","Samastipur","Sambalpur","Sambhal","Sangamner","Sangaria","Sangli","Sangrur","Sardarshahar","Sasaram","Satara","Satna","Sawai-Madhopur","Sehore","Seoni","Shahjahanpur","Shillong","Shimla","Shivamogga","Shivpuri","Shrirampur","Siddipet","Sikar","Silchar","Siliguri","Sindhanur","Singrauli","Sirohi","Sirsa","Sirsi","Sitapur","Sivakasi","Sivasagar","Siwan","Solan","Solapur","Sonipat","South-Goa","Sri-Ganganagar","Srikakulam","Sultanpur","Surat","Suratgarh","Surendranagar-Dudhrej","Suryapet","Tadepalligudem","Tadpatri","Taliparamba","Tamluk","Tanuku","Tarn-Taran-Sahib","Tezpur","Thalassery","Thanjavur","Theni","Thiruvalla","Thiruvallur","Thiruvananthapuram","Thodupuzha","Thoothukudi","Thrissur","Tinsukia","Tiptur","Tirunelveli","Tirupati","Tirupur","Tiruvannamalai","Tohana","Tonk","Trichy","Tumakuru","Tuni","Udaipur","Udgir","Ujjain","Uluberia","Unnao","Vadodara","Valsad","Vapi","Varanasi","Vellore","Veraval","Vidisha","Vijayawada","Viluppuram","Virudhunagar","Vizag","Vizianagaram","Vyara","Waidhan","Warangal","Wardha","Yamuna-Nagar","Yavatmal"],M=function(){var a=Object(t.useState)(!1),e=Object(s.a)(a,2),r=e[0],i=e[1];return Object(d.jsx)("footer",{className:N.a.container,children:Object(d.jsxs)("div",{className:N.a.wrapper,children:[Object(d.jsxs)("section",{className:N.a.footer,children:[Object.entries(S).map((function(a,e){var r=Object(s.a)(a,2),t=r[0],i=r[1];return Object(d.jsxs)("ul",{className:N.a.section,children:[Object(d.jsx)("h4",{className:"disabled ".concat(t," ").concat(N.a.footTitle),children:t}),Object.entries(i).map((function(a,e){var r=Object(s.a)(a,2),t=r[0],i=r[1];return Object(d.jsx)("li",{className:N.a.footerList,children:Object(d.jsx)(b.b,{to:i,children:t})},e)}))]},e)})),Object(d.jsxs)("ul",{className:N.a.icon,children:[Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("img",{src:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv",alt:"icon"})}),Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("img",{src:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl",alt:"icon"})})]})]}),Object(d.jsxs)("section",{className:N.a.location,children:[Object(d.jsx)("h4",{className:"disabled ".concat(N.a.footTitle),children:"We Deliver to"}),Object(d.jsxs)("section",{className:N.a.locationWrap,style:r?{maxHeight:"100%"}:{maxHeight:""},children:[Object(d.jsx)("ul",{className:N.a.locationList,children:k.map((function(a,e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:a})},e)}))}),Object(d.jsx)("ul",{className:N.a.locationList,children:B.map((function(a,e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:a})},e)}))}),Object(d.jsx)("ul",{className:N.a.locationList,children:v.map((function(a,e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:a})},e)}))}),Object(d.jsx)("ul",{className:N.a.locationList,children:w.map((function(a,e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:a})},e)}))})]}),Object(d.jsx)("button",{className:"btn ".concat(N.a.revealBtn),onClick:function(a){a.preventDefault(),i(!r)},children:r?"See Less":"See More"})]}),Object(d.jsxs)("section",{className:N.a.social,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/assets/swiggy_foot.png",alt:"Swiggy"})}),Object(d.jsx)("p",{children:Object(d.jsx)("span",{children:"\xa9 2021 Swiggy"})}),Object(d.jsxs)("figure",{children:[Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("img",{src:"/assets/icon-facebook.png",alt:"social_facebook"})}),Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("img",{src:"/assets/icon-pinterest.png",alt:"social_pinterest"})}),Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("img",{src:"/assets/icon-instagram.png",alt:"social_instagram"})}),Object(d.jsx)(b.b,{to:"/",children:Object(d.jsx)("img",{src:"/assets/icon-twitter.png",alt:"social_twitter"})})]})]})]})})},K=function(){return Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(_,{}),Object(d.jsx)(f,{}),Object(d.jsx)(M,{})]})})};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root"))},5:function(a,e,r){a.exports={featureContainer:"Features_featureContainer__1r6l6",featureWrapper:"Features_featureWrapper__3lQv5",featureSection:"Features_featureSection__2Wsts",featureTitle:"Features_featureTitle__1Q7WD",featureText:"Features_featureText__3zQcO"}},7:function(a,e,r){a.exports={container:"Mobile_container__3i7rf",wrapper:"Mobile_wrapper__3Cl6J",textSection:"Mobile_textSection__2l2eg",title:"Mobile_title__2B5fR",text:"Mobile_text__4ZCsV",icon:"Mobile_icon__1dtsk",imageSection:"Mobile_imageSection__q8irf"}}},[[30,1,2]]]);
//# sourceMappingURL=main.fc4bb6c7.chunk.js.map