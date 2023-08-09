(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{429:function(t,e,r){"use strict";r.r(e);var a=r(9),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_1-algorithms-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-algorithms-notes"}},[t._v("#")]),t._v(" 1. Algorithms Notes")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#1-algorithms-notes"}},[t._v("1. Algorithms Notes")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#11-quick-find"}},[t._v("1.1. Quick-Find")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#12-quick-union"}},[t._v("1.2. Quick-Union")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#121-data-structure"}},[t._v("1.2.1. DATA Structure")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#122-find-way"}},[t._v("1.2.2. Find way")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#123-union"}},[t._v("1.2.3. Union")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#124-problems"}},[t._v("1.2.4. Problems")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#125-improvement"}},[t._v("1.2.5. Improvement")])])])])])])]),t._v(" "),r("h2",{attrs:{id:"_1-1-quick-find"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-quick-find"}},[t._v("#")]),t._v(" 1.1. Quick-Find")]),t._v(" "),r("ul",[r("li",[t._v("easy to think but not efficient")])]),t._v(" "),r("h2",{attrs:{id:"_1-2-quick-union"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-quick-union"}},[t._v("#")]),t._v(" 1.2. Quick-Union")]),t._v(" "),r("blockquote",[r("p",[t._v('"still easy but cost too much"')])]),t._v(" "),r("h3",{attrs:{id:"_1-2-1-data-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-data-structure"}},[t._v("#")]),t._v(" 1.2.1. DATA Structure")]),t._v(" "),r("ul",[r("li",[t._v("in the id[ i ]  array, each number have a roots if they are union with another one . So the number it stores is the number of id[ i ] , Which indicates the root of it. Keep finding ,and you will find the real root.")])]),t._v(" "),r("h3",{attrs:{id:"_1-2-2-find-way"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-find-way"}},[t._v("#")]),t._v(" 1.2.2. Find way")]),t._v(" "),r("ul",[r("li",[t._v("check if  p and q have the same root")])]),t._v(" "),r("h3",{attrs:{id:"_1-2-3-union"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-union"}},[t._v("#")]),t._v(" 1.2.3. Union")]),t._v(" "),r("ul",[r("li",[t._v("To merge components containing p and q . Set the id of p's root to the id of  q's root")]),t._v(" "),r("li",[t._v("Dont have to connect one with another one . Just connect with its root. Because when you want to check if they are connected . Only check their roots")])]),t._v(" "),r("h3",{attrs:{id:"_1-2-4-problems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-problems"}},[t._v("#")]),t._v(" 1.2.4. Problems")]),t._v(" "),r("ul",[r("li",[t._v("The tree might be really tall . So each time you need to do ROOT() function too many times.")])]),t._v(" "),r("h3",{attrs:{id:"_1-2-5-improvement"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-improvement"}},[t._v("#")]),t._v(" 1.2.5. Improvement")]),t._v(" "),r("ul",[r("li",[t._v("Weighted quick-union\n"),r("ul",[r("li",[t._v("Weighting the tree . There is gonna be two kinds of tree . longer tree and smaller tree .Make sure connect the smaller tree's root to the longer one's")]),t._v(" "),r("li",[t._v("But how to know which tree is longer? how to mark this\n"),r("ul",[r("li",[t._v("add another array named size[ ]  put the depth of root in it.")]),t._v(" "),r("li",[t._v("compare the depth while merging the trees.")])])])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);