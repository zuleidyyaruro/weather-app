(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{19:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(13),r=a.n(n),i=(a(19),a(3)),o=a(0),j=function(e){var t=e.data,a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],j="http://openweathermap.org/img/wn/".concat(n,"@2x.png"),d=Object(c.useState)(!0),l=Object(i.a)(d,2),p=l[0],b=l[1];return Object(c.useEffect)((function(){r(t.weather[0].icon)}),[t.weather]),Object(o.jsxs)("div",{className:"container border",children:[Object(o.jsxs)("h2",{className:"",children:[t.name,", ",Object(o.jsx)("span",{children:t.sys.country})]}),p?Object(o.jsxs)("p",{className:"title",children:[t.main.temp," \xb0c"]}):Object(o.jsxs)("p",{className:"title",children:[Math.round(1.8*t.main.temp+32)," \xb0f"]}),Object(o.jsx)("img",{src:j,alt:""}),Object(o.jsx)("p",{className:"description",children:t.weather[0].description}),Object(o.jsxs)("p",{className:"text-small",children:["winds speed: ",t.wind.speed," m/s"]}),Object(o.jsxs)("p",{className:"text-small",children:["humidity: ",t.main.humidity," %"]}),Object(o.jsxs)("p",{className:"text-small",children:["presure: ",t.main.pressure," m/b"]}),Object(o.jsx)("button",{onClick:function(){b(!p)},children:"Degrees \xb0F/\xb0C"})]})},d=a(14),l=a.n(d),p=function(e){var t=e.setweatherMain,a=Object(c.useState)(0),s=Object(i.a)(a,2),n=s[0],r=s[1],d=Object(c.useState)(0),p=Object(i.a)(d,2),b=p[0],u=p[1],h=Object(c.useState)(void 0),m=Object(i.a)(h,2),O=m[0],f=m[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){r(e.coords.latitude),u(e.coords.longitude)}))}),[]),Object(c.useEffect)((function(){if(0!==b&&0!==b){var e="https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(b,"&appid=").concat("5d43f7a8d20ffd860e07ae2b2f927042","&units=metric");l.a.get(e).then((function(e){f(e.data),t(e.data.weather[0].main)}))}}),[b,n]),Object(o.jsxs)("div",{className:"overlay",children:[Object(o.jsx)("h2",{children:"Weather App"}),Object(o.jsx)("div",{className:"container-app",children:void 0===O?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"spinner-border text-success ",style:{width:"20rem",height:"20rem",fontSize:"15rem"},role:"status"}),Object(o.jsx)("p",{className:"text-center mt-5",children:"Please wait, It's Loading..."})]}):Object(o.jsx)(j,{data:O})})]})};var b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),j=r[0],d=r[1];return Object(c.useEffect)((function(){d(function(e){var t="";switch(e){case"Rain":t="https://image.freepik.com/foto-gratis/lluvia-fuera-ventanas-villa_1321-908.jpg";break;case"Thunderstorm":t="https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";break;case"Drizzle":t="https://cdn.pixabay.com/photo/2017/08/05/15/19/puddle-2584378_960_720.jpg"}return t}(a))}),[a]),Object(o.jsx)("div",{className:"app",style:{backgroundSize:"cover",backgroundImage:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:Object(o.jsx)(p,{setweatherMain:s})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9173bb14.chunk.js.map