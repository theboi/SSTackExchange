(self.webpackChunkroboapex_docs=self.webpackChunkroboapex_docs||[]).push([[193],{1873:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return m}});var t=a(7294),l=a(2049),o=a(5723),r="grid_X4Dg",u="tile_3KMy",c=a(6742),i={nrc:{name:"National Robotics Competition",website:"https://ducklearning.com/pages/nrc-sg",categories:{reg:{name:"Regular"},open:{name:"Open"},fe:{name:"Future Engineer"}}},rcsg:{name:"Robocup Singapore",website:"https://robocupsg.org/en/singaporeopen",categories:{rescue:{name:"RCJ Rescue Line"}}}};function s(e){var n,a=e.nameData,l=e.repo,o=(0,t.useState)(),r=o[0],s=o[1];return console.log(a),(0,t.useEffect)((function(){var e,n;s({groupName:a[4],projectName:null!=(e=null==a||null==(n=a[5])?void 0:n.replace("_"," "))?e:a[0],event:{code:a[1],name:i[a[1]].name,website:i[a[1]].name},year:parseInt(a[2]),category:{code:a[3],name:i[a[1]].categories[a[3]].name}})}),[l]),t.createElement("div",{className:u},t.createElement("h2",null,null==r?void 0:r.projectName),t.createElement("p",null,null==r?void 0:r.groupName),t.createElement("p",null,null!=(n=null==l?void 0:l.description)?n:"No Description"),t.createElement(c.Z,{href:null==l?void 0:l.html_url},"View on GitHub"))}function m(){var e=(0,o.ZP)("https://api.github.com/orgs/roboapex/repos").data;return t.createElement(l.Z,{title:"Projects"},t.createElement("div",{className:r},null==e?void 0:e.map((function(e){var n=null==e?void 0:e.full_name.slice(9).match(/^(\w+)(\d{4})-(\w+)-(\w+)(?:-(\w+))?$/m);return null!=e&&e.full_name.startsWith("roboapex/roboapex")||null===n?null:t.createElement(s,{repo:e,key:null==e?void 0:e.full_name,nameData:Object.values(n)})}))))}}}]);