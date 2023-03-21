(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(570)}])},6565:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var s=i(5893),a=i(8193),n=i(5434),r=i(1664),l=i.n(r),o=i(9755),c=i.n(o);let d=e=>{let{project:t}=e,i=t.source?t.source:t.link?t.link:"",r=t.internal?"_self":"_blank";return(0,s.jsx)("div",{className:"rounded-md bg-violet-200 p-6 transition hover:bg-violet-100 dark:bg-dark-panel dark:hover:bg-dark-highlight",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex items-baseline gap-1",children:[(0,s.jsx)("h1",{className:"grow truncate text-lg font-bold",children:(0,s.jsx)(l(),{href:i,target:r,children:(0,s.jsx)("span",{className:"hover:text-link",children:t.name})})}),t.source?(0,s.jsx)(l(),{href:t.source,target:"_blank",title:"Go to source code for ".concat(t.name),children:(0,s.jsx)("div",{children:(0,s.jsx)(a.RrF,{className:"text-xl transition hover:text-gray-500"})})}):null,(0,s.jsx)(l(),{href:t.link,target:r,title:"Go to deployed project for ".concat(t.name),children:(0,s.jsx)("div",{children:(0,s.jsx)(n.WKS,{className:"text-xl transition hover:text-gray-500"})})})]}),(0,s.jsx)(l(),{href:i,target:r,title:"Go to project page for ".concat(t.name),children:(0,s.jsx)("div",{className:"overflow-hidden rounded-md",children:(0,s.jsx)(c(),{src:t.image,alt:t.name,width:"16",height:"9",layout:"responsive",objectFit:"cover",className:"transition hover:scale-105 hover:opacity-80",objectPosition:"top",priority:!0})})}),(0,s.jsxs)("div",{children:[t.description&&(0,s.jsx)("p",{children:t.description}),t.technologies&&(0,s.jsx)("p",{className:"pt-1 text-sm text-brand-dark dark:text-dark-secondary",children:t.technologies.join(", ")})]}),t.features&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-bold",children:"Features:"}),(0,s.jsx)("ul",{children:t.features.map((e,t)=>(0,s.jsx)("li",{className:"ml-5 list-disc",children:e},t))})]})]})})};var h=i(8716),x=i(5188);let m=e=>{let{projects:t}=e;return(0,s.jsx)(h.E.div,{className:"grid grid-cols-1 gap-8 sm:grid-cols-2",variants:x.yL,initial:"hidden",whileInView:"show",viewport:{once:!0},children:t.map((e,t)=>(0,s.jsx)(h.E.div,{variants:x.dA,viewport:{once:!0},children:(0,s.jsx)(d,{project:e})},t))})};var u=m},5188:function(e,t,i){"use strict";i.d(t,{Ho:function(){return s},dA:function(){return n},yL:function(){return a}});let s={hidden:{opacity:0,transition:{ease:"easeInOut",duration:.25}},show:{opacity:1,transition:{ease:"easeInOut",duration:.25}}},a={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0}}},8878:function(e,t,i){"use strict";i.d(t,{q:function(){return s}});let s=[{name:"Chirp",description:"Full-stack social media app inspired by Twitter with a fully responsive mobile-first front-end design and back-end REST API with auth.",technologies:["React (Next.js)","Node.js (Express)","MongoDB","TypeScript (JavaScript)","Tailwind CSS","Amazon S3 (AWS)"],link:"https://chirp-flaslam.vercel.app/",source:"https://github.com/flaslam/chirp",image:"/images/projects/chirp.jpg"},{name:"Twitter Mood Board",description:"Flask web app which generates a mood board using the Twitter API by pulling user data.",technologies:["Python","Flask","JavaScript","HTML/CSS"],link:"https://twitter-board.onrender.com/",source:"https://github.com/flaslam/twitter-board",image:"/images/projects/twitter-board.jpg"},{name:"Spotify 3D Visualiser",description:"3D data visualisation app which authenticates users using the Spotify API and displays their listening habits in a 3D space.",link:"https://flaslam.github.io/spotify-visualiser/",source:"https://github.com/flaslam/spotify-visualiser",technologies:["Three.js","React","TypeScript (JavaScript)"],image:"/images/projects/spotify.jpg"},{name:"Front End Sites",description:"Example front end sites built for businesses and non-profits using various frameworks",link:"/sites",internal:!0,image:"/images/projects/frontend.jpg",technologies:["React","Next.js","TypeScript","JavaScript","CSS/SASS/Tailwind CSS/Bootstrap"]}]},2377:function(e,t,i){"use strict";var s=i(7294);let a=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),e};t.Z=a},7329:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var s=i(5893),a=i(9008),n=i.n(a),r=i(1664),l=i.n(r),o=i(7294),c=i(2010),d=i(1190),h=i(8716);let x=(e,t,i)=>{(0,o.useEffect)(()=>{let s=s=>{var a,n;if(null===(a=e.current)||void 0===a||!a.contains(s.target)){if(i){for(let e=0;e<i.length;e++)if(null===(n=i[e].current)||void 0===n?void 0:n.contains(s.target))return}t(s)}};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e,t,i])};var m=i(2377);let u=e=>{let{children:t}=e,{theme:i,setTheme:a}=(0,c.F)(),n=(0,m.Z)();if(!n)return null;let r=()=>{switch(i){case"dark":a("light");return;case"light":a("dark");return}};return(0,s.jsx)("button",{onClick:r,children:t})};var p=i(3854),f=i(8193),j=i(1163);let v=[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Games",url:"/games"},{title:"About",url:"/about"},{url:"https://github.com/flaslam",icon:(0,s.jsx)(f.RrF,{className:"my-0.5 text-xl"}),newWindow:!0}],g=()=>{let e=(0,j.useRouter)(),{theme:t}=(0,c.F)(),[i,a]=(0,o.useState)(!1),n=(0,o.useRef)(null);x(n,()=>a(!1));let r=v.map((t,i)=>{let n=t.url!==e.pathname&&!t.icon&&"text-zinc-500 dark:text-zinc-400 dark:hover:text-link";return(0,s.jsx)("div",{children:(0,s.jsx)(l(),{href:t.url,onClick:()=>a(!1),target:t.newWindow?"_blank":"",children:(0,s.jsxs)("div",{className:"p-1 px-1 transition hover:text-link ".concat(n),children:[(0,s.jsx)("span",{className:"font-bold",children:t.title}),t.icon?t.icon:null]})})},i)}),m=(0,s.jsx)(u,{children:(0,s.jsx)("div",{className:"p-1 ".concat("dark"===t?"text-orange-300 hover:text-orange-400":"text-violet-400 hover:text-violet-500"),children:"dark"===t?(0,s.jsx)(p.q4P,{className:"my-0.5 text-xl"}):(0,s.jsx)(p.Lac,{className:"my-0.5 text-xl"})})});return(0,s.jsxs)("nav",{className:"sticky top-0 z-50 bg-zinc-200 bg-opacity-70 py-4 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",ref:n,children:[(0,s.jsx)("div",{className:"mx-auto max-w-screen-lg",children:(0,s.jsx)("div",{className:"container mx-auto px-8",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("div",{className:"flex grow flex-col font-bold md:flex-row md:gap-2",children:[(0,s.jsx)(l(),{href:"/",onClick:()=>a(!1),children:(0,s.jsx)("div",{children:"Fahd Aslam"})}),(0,s.jsx)(l(),{href:"/",onClick:()=>a(!1),children:(0,s.jsx)("div",{className:"text-zinc-500 dark:text-zinc-500",children:"Software Developer"})})]}),(0,s.jsxs)("div",{className:"hidden items-center gap-2 text-sm sm:flex sm:flex-row",children:[r,m]}),(0,s.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:()=>a(e=>!e),children:i?(0,s.jsx)(p.apv,{className:"text-xl"}):(0,s.jsx)(p.r0I,{className:"text-xl"})})]})})}),(0,s.jsx)(d.M,{children:i&&(0,s.jsx)(h.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"overflow-hidden sm:hidden",children:(0,s.jsxs)("div",{className:"mx-7 mt-2 flex flex-col gap-1",children:[r,m]})})})]})},k=()=>(0,s.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,s.jsx)("a",{href:"mailto:flaslam@gmail.com",target:"_blank",rel:"noreferrer",className:"hover:text-link",children:(0,s.jsx)(p.hBs,{className:"text-2xl"})})});var w=i(5188);let N=e=>{let{children:t,title:i,noSpace:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:i?"".concat(i," — Fahd Aslam"):"Fahd Aslam"}),(0,s.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,s.jsx)(g,{}),(0,s.jsx)(h.E.main,{variants:w.Ho,initial:"hidden",animate:"show",exit:"hidden",className:"".concat(a?"":"mt-12"," flex-1"),children:t}),(0,s.jsx)(k,{})]})]})};var b=N},570:function(e,t,i){"use strict";i.r(t);var s=i(5893),a=i(8878),n=i(7329),r=i(6565);let l=()=>(0,s.jsx)(n.Z,{title:"Projects",children:(0,s.jsx)("div",{className:"mx-auto max-w-screen-lg",children:(0,s.jsx)("div",{className:"container mx-auto px-8",children:(0,s.jsx)(r.Z,{projects:a.q})})})});t.default=l}},function(e){e.O(0,[617,556,228,584,755,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);