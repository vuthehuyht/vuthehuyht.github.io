(window.webpackJsonp=window.webpackJsonp||[]).push([[32,12,14],{347:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDZMMiA2TTIgNkw3IDFNMiA2TDcgMTEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo="},348:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTS0yLjE4NTU3ZS0wNyA2TDE0IDZNMTQgNkw5IDFNMTQgNkw5IDExIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"},349:function(t,e,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("16f0ec23",content,!0,{sourceMap:!1})},352:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("370c20cf",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r.r(e);var o={props:{color:{type:String,default:""},to:{type:String,default:""},type:{type:String,default:""},side:{type:String,default:""}},methods:{action:function(){this.$emit("action")}}},n=(r(354),r(36)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return"action"===t.type?o("button",{staticClass:"c-round-button",style:{"background-color":t.color},on:{click:function(e){return e.preventDefault(),t.action.apply(null,arguments)}}},["left"===t.side?o("img",{attrs:{src:r(347)}}):t._e(),t._v(" "),"right"===t.side?o("img",{attrs:{src:r(348)}}):t._e()]):o("nuxt-link",{staticClass:"c-round-button",style:{"background-color":t.color},attrs:{to:t.to}},["left"===t.side?o("img",{attrs:{src:r(347)}}):t._e(),t._v(" "),"right"===t.side?o("img",{attrs:{src:r(348)}}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(344).default})},354:function(t,e,r){"use strict";r(349)},355:function(t,e,r){var o=r(75)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,".c-round-button{width:56px;height:56px;min-width:56px;min-height:56px;border-radius:28px;display:flex;justify-content:center;align-items:center;border:none;cursor:pointer}",""]),t.exports=o},358:function(t,e,r){var content=r(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("a89194e2",content,!0,{sourceMap:!1})},360:function(t,e,r){"use strict";r.r(e);r(30);var o={props:{first:{type:Boolean,default:!1},data:{type:Object,default:function(){}}},computed:{isRow:function(){return this.first?"--row":"--column"},hasData:function(){return Object.keys(this.data).length>0}}},n=(r(375),r(36)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.hasData?o("nuxt-link",{staticClass:"c-drop-item-wrapper",class:t.isRow,attrs:{to:{path:"/drops/"+t.data.id}}},[o("div",{staticClass:"c-drop-image",style:{backgroundImage:"url(https://website-api.envoy.art"+t.data.thumbnail.url+")"}}),t._v(" "),o("div",{staticClass:"c-drop-content"},[o("div",[o("p",[t._v(t._s(t.data.title))]),t._v(" "),o("i",[t._v(t._s(t.data.subtitle))])]),t._v(" "),o("div",{staticClass:"c-arrow-circle"},[o("img",{attrs:{src:r(374)}})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("1fbb21b2",content,!0,{sourceMap:!1})},364:function(t,e,r){var o=r(75)(!1);o.push([t.i,".hooper-slide{flex-shrink:0;height:100%;margin:0;padding:0;list-style:none}.hooper-progress{position:absolute;top:0;right:0;left:0;height:4px;background-color:#efefef}.hooper-progress-inner{height:100%;background-color:#4285f4;transition:.3s}.hooper-pagination{position:absolute;bottom:0;right:50%;transform:translateX(50%);display:flex;padding:5px 10px}.hooper-indicators{display:flex;list-style:none;margin:0;padding:0}.hooper-indicator.is-active,.hooper-indicator:hover{background-color:#4285f4}.hooper-indicator{margin:0 2px;width:12px;height:4px;border-radius:4px;border:none;padding:0;background-color:#fff;cursor:pointer}.hooper-pagination.is-vertical{bottom:auto;right:0;top:50%;transform:translateY(-50%)}.hooper-pagination.is-vertical .hooper-indicators{flex-direction:column}.hooper-pagination.is-vertical .hooper-indicator{width:6px}.hooper-next,.hooper-prev{background-color:transparent;border:none;padding:1em;position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.hooper-next.is-disabled,.hooper-prev.is-disabled{opacity:.3;cursor:not-allowed}.hooper-next{right:0}.hooper-prev{left:0}.hooper-navigation.is-vertical .hooper-next{top:auto;bottom:0;transform:none}.hooper-navigation.is-vertical .hooper-prev{top:0;bottom:auto;right:0;left:auto;transform:none}.hooper-navigation.is-rtl .hooper-prev{left:auto;right:0}.hooper-navigation.is-rtl .hooper-next{right:auto;left:0}.hooper{position:relative;width:100%;height:200px}.hooper,.hooper *{box-sizing:border-box}.hooper-list{overflow:hidden;width:100%;height:100%}.hooper-track{display:flex;box-sizing:border-box;width:100%;height:100%;padding:0;margin:0}.hooper.is-vertical .hooper-track{flex-direction:column;height:200px}.hooper.is-rtl{direction:rtl}.hooper-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}",""]),t.exports=o},365:function(t,e,r){"use strict";r(352)},366:function(t,e,r){var o=r(75)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,'.c-press-wrapper .c-press-content-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:center}.c-press-wrapper .c-press-content-wrapper .c-press-content{min-width:220px;margin-right:100px}.c-press-wrapper .c-press-content-wrapper h2{font-size:40px;font-family:"Poppins",sans-serif;font-weight:600;line-height:44px;font-style:normal;color:#000;max-width:250px;margin-bottom:30px}.c-press-wrapper .c-press-content-wrapper .c-press-button-collection{width:120px;justify-content:space-between}.c-press-wrapper .c-press-content-wrapper .c-press-items{width:calc(100% - 320px)}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item{padding:30px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item a{text-decoration:none}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item h3{font-size:16px;margin-top:25px;color:#000;height:3.1em;-webkit-line-clamp:2}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item h3,.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item p{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;max-width:260px;text-decoration:none;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item p{color:#878787;font-size:14px;margin-top:14px;height:8.9em;-webkit-line-clamp:6}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item:nth-child(odd){background-color:#f8f8f8}@media only screen and (min-width:651px){.c-press-wrapper{border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;background-color:transparent}.c-press-wrapper .c-press-content-wrapper{flex-direction:row}.c-press-button-collection{display:flex}.hooper-pagination{display:none!important}}@media only screen and (max-width:650px){.hooper-pagination{display:unset!important;bottom:-37px}.hooper-pagination .hooper-indicator{margin:0 2px;width:5px;height:5px;border-radius:2.5px;border:none;padding:0;background-color:#e7e7e7;cursor:pointer}.hooper-pagination .hooper-indicator.is-active,.hooper-pagination .hooper-indicator:hover{background-color:#000}.c-press-wrapper{border:none;background-color:#f8f8f8;padding:64px 0}.c-press-wrapper .c-press-content-wrapper{flex-direction:column}.c-press-button-collection{display:none}.c-press-wrapper .c-press-content-wrapper .c-press-items{width:100%;background-color:#fff}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item:nth-child(odd){background-color:#fff}.c-press-wrapper .c-press-content-wrapper .c-press-items .c-press-item p{max-width:100%}.c-press-wrapper .c-press-content-wrapper .c-press-content{min-width:100%;margin-right:0}.c-press-wrapper .c-press-content-wrapper .c-press-content h2{max-width:unset}}.c-press-image{width:120px}',""]),t.exports=o},369:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(24),r(93),r(120)),c=(r(363),{components:{Hooper:n.a,Slide:n.c,HooperPagination:n.b},data:function(){return{newsList:!1,carouselData:0,cardsHooper:{sliderData:5,itemsToSlide:1,itemsToShow:1,infiniteScroll:!1,breakpoints:{800:{itemsToShow:2},1080:{itemsToShow:3}}}}},watch:{carouselData:function(){this.$refs.carousel.slideTo(this.carouselData)}},methods:{slidePrev:function(){this.$refs.carousel.slidePrev()},slideNext:function(){this.$refs.carousel.slideNext()},updateCarousel:function(t){this.carouselData=t.currentSlide}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$strapi.find("news-items?_sort=created_at:DESC");case 3:t.newsList=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.error=e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}),l=(r(365),r(36)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.newsList&&t.newsList.length>0?r("div",{staticClass:"c-press-wrapper"},[r("div",{staticClass:"c-press-content-wrapper e_layout"},[r("div",{staticClass:"c-press-content"},[r("h2",[t._v("Press about us")]),t._v(" "),r("div",{staticClass:"c-press-button-collection"},[r("RoundButton",{attrs:{type:"action",side:"left",color:0===t.carouselData?"#E6E6E6":"#000",to:"/"},on:{action:t.slidePrev}}),t._v(" "),r("RoundButton",{attrs:{type:"action",side:"right",color:t.carouselData>=4?"#E6E6E6":"#000",to:"/"},on:{action:t.slideNext}})],1)]),t._v(" "),r("div",{staticClass:"c-press-items"},[r("client-only",[r("hooper",{ref:"carousel",staticStyle:{height:"100%"},attrs:{settings:t.cardsHooper},on:{slide:t.updateCarousel}},[t._l(t.newsList,(function(e,o){return r("slide",{key:o,staticClass:"c-press-item"},[r("a",{attrs:{href:e.link,target:"_blank"}},[r("img",{staticClass:"c-press-image",attrs:{src:"https://website-api.envoy.art/"+e.logo.url}}),t._v(" "),r("h3",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v("\n                "+t._s(e.description)+"\n              ")])])])})),t._v(" "),r("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RoundButton:r(353).default})},374:function(t,e){t.exports="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA4IDEyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAxTDYgNkwxIDExIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"},375:function(t,e,r){"use strict";r(358)},376:function(t,e,r){var o=r(75)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,'.c-drop-item-wrapper{padding-top:30px;display:flex;justify-content:center;align-items:center;text-decoration:none}.c-drop-item-wrapper.--column{width:25%;flex-direction:column}.c-drop-item-wrapper.--row{width:50%;flex-direction:row;padding-bottom:30px}.c-drop-item-wrapper.--row .c-drop-image{margin:0 calc(25% - 90px)}.c-drop-item-wrapper:nth-child(odd){background-color:#fbfbfb}.c-drop-item-wrapper .c-drop-image{width:180px;height:180px;min-width:180px;min-height:180px;border-radius:90px;background-repeat:no-repeat;background-size:cover;background-position:50%}.c-drop-item-wrapper .c-drop-content{display:flex;justify-content:space-between;padding:30px;width:100%}.c-drop-item-wrapper .c-drop-content p{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;font-size:16px;color:#000}.c-drop-item-wrapper .c-drop-content i{font-family:"Playfair Display",serif;font-style:italic;font-weight:400;font-size:14px;color:#bdbdbd}.c-drop-item-wrapper .c-drop-content .c-arrow-circle{width:42px;height:42px;border-radius:21px;background-color:#fff;display:flex;justify-content:center;align-items:center}.c-drop-item-wrapper .c-drop-content .c-arrow-circle img{height:15px}@media only screen and (min-width:1100px){.c-featured-drops-wrapper{display:flex;flex-wrap:wrap}.c-featured-drops-wrapper .c-featured-content{width:50%;display:flex;justify-content:center;flex-direction:column}.c-featured-drops-wrapper .c-featured-content .c-featured-content-title{margin-bottom:30px}.c-featured-drops-wrapper .c-featured-content .c-featured-content-title h2{font-size:40px;font-family:"Poppins",sans-serif;font-weight:600;margin:0;line-height:48px}.c-featured-drops-wrapper .c-featured-content .c-featured-content-title h2 i{font-family:"Playfair Display",serif;font-weight:400}}@media only screen and (max-width:1100px){.c-drop-item-wrapper.--column,.c-drop-item-wrapper.--row{width:50%;flex-direction:column}.c-drop-item-wrapper.--row{padding-bottom:30px}.c-drop-item-wrapper.--row .c-drop-image{margin:0 calc(25% - 90px)}}@media only screen and (max-width:570px){.c-featured-drops-wrapper .c-featured-content{width:100%;display:flex;justify-content:center;flex-direction:column;margin-top:64px}.c-drop-item-wrapper .c-drop-image{width:100px;height:100px;min-width:100px;min-height:100px;border-radius:50px}.c-drop-item-wrapper .c-drop-content p{font-size:12px;line-height:120%}.c-drop-item-wrapper .c-drop-content i{font-size:10px;line-height:120%}.c-drop-item-wrapper .c-drop-content .c-arrow-circle{width:24px;height:24px;border-radius:12px}.c-drop-item-wrapper .c-drop-content .c-arrow-circle img{height:9px}.c-drop-item-wrapper .c-drop-content{padding:15px}.c-drop-item-wrapper{padding-top:15px}}',""]),t.exports=o},388:function(t,e,r){var content=r(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("07de2927",content,!0,{sourceMap:!1})},424:function(t,e,r){"use strict";r(388)},425:function(t,e,r){var o=r(75)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),o.push([t.i,'.c-drops-section{display:flex;flex-direction:column;justify-content:center;align-items:center}.c-drops-section h1{margin:96px 0;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:52px;text-align:center}.c-drops-section h1 i{font-family:"Playfair Display",serif;font-weight:400;font-size:52px}.c-drops-section .c-btn-wrapper{margin-bottom:96px}.c-drops-section .c-drops-wrapper{display:flex;flex-wrap:wrap;margin-bottom:36px;width:100%}.c-drops-section .c-drops-wrapper .c-featured-content{width:50%;display:flex;justify-content:center;flex-direction:column}.c-drops-section .c-drops-wrapper .c-featured-content .c-featured-content-title{margin-bottom:30px}.c-drops-section .c-drops-wrapper .c-featured-content .c-featured-content-title h2{font-size:40px;font-family:"Poppins",sans-serif;font-weight:600;margin:0;line-height:48px}.c-drops-section .c-drops-wrapper .c-featured-content .c-featured-content-title h2 i{font-family:"Playfair Display",serif;font-weight:400}@media only screen and (max-width:570px){.c-drops-section h1{max-width:390px;margin:46px 0}.c-drops-section h1,.c-drops-section h1 i{font-size:40px;line-height:110%}}',""]),t.exports=o},457:function(t,e,r){var content=r(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("6ee16244",content,!0,{sourceMap:!1})},471:function(t,e,r){"use strict";r.r(e);var o={components:{DropListItem:r(360).default},props:{dropsList:{type:Array,default:function(){return[]}}},data:function(){return{dropsShown:10}},methods:{addDrops:function(){this.dropsShown+=10}}},n=(r(424),r(36)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"c-drops-section"},[t._m(0),t._v(" "),r("div",{staticClass:"c-drops-wrapper"},t._l(t.dropsList,(function(t){return r("DropListItem",{key:t.id,attrs:{first:t.spotlight,data:t}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("Discover our "),r("i",[t._v("featured drops")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DropListItem:r(360).default})},487:function(t,e,r){"use strict";r(457)},488:function(t,e,r){var o=r(75)(!1);o.push([t.i,"",""]),t.exports=o},503:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(24),r(93),{data:function(){return{dropsList:[],error:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$strapi.find("drops?_sort=spotlight:DESC,created_at:DESC");case 3:t.dropsList=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.error=e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},head:{title:"Drops • ENVOY Network • A new era in Collectibles",meta:[{hid:"ENVOY is passionate about building community driven NFT projects that tap into the fanbase of premium collectibles, artists and brands.",name:"ENVOY is passionate about building community driven NFT projects that tap into the fanbase of premium collectibles, artists and brands.",content:"ENVOY is passionate about building community driven NFT projects that tap into the fanbase of premium collectibles, artists and brands."}]}}),c=(r(487),r(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"e_layout e_top"},[r("Drops",{attrs:{"drops-list":t.dropsList}}),t._v(" "),r("RegisterSection")],1),t._v(" "),r("PressSection")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Drops:r(471).default,RegisterSection:r(402).default,PressSection:r(369).default})}}]);