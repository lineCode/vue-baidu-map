webpackJsonp([58],{"24Xh":function(t,s,a){t.exports=a("8NPC")},"8NPC":function(t,s,a){var _=a("VU/8")(null,a("hGCj"),null,null);t.exports=_.exports},hGCj:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("瓦片图层")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("清华校园微观图")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(2),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.332782,lat:40.007978},zoom:16}},[a("bm-tile",{attrs:{isTransparentPng:!0,tileUrlTemplate:"//developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png"}})],1)],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmTile")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("transparentPng")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理")])]),t._v(" "),a("tr",[a("td",[t._v("tileUrlTemplate")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法")])]),t._v(" "),a("tr",[a("td",[t._v("copyright")]),t._v(" "),a("td",[t._v("Copyright")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("地图图层的版权信息")])]),t._v(" "),a("tr",[a("td",[t._v("zIndex")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("图层的zIndex")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.332782, lat: 40.007978}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"16"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-tile")]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":isTransparentPng")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("tileUrlTemplate")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"//developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-tile")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}}});