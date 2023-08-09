(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{437:function(a,t,e){"use strict";e.r(t);var s=e(9),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[a._v("#")]),a._v(" Array")]),a._v(" "),e("p",[a._v("Those thing relates to array/ map / reduce etc.")]),a._v(" "),e("h2",{attrs:{id:"do-not-use-foreach-with-async-await-use-for-loop-instead"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#do-not-use-foreach-with-async-await-use-for-loop-instead"}},[a._v("#")]),a._v(" Do not use forEach with async-await. Use For loop instead")]),a._v(" "),e("blockquote",[e("p",[a._v("Ash's quote. This is tricky when you want to do several MongoDB operation in the loop. Things may not going the way you want. In my case. I try to insert several new docs into the db and give them a new globalId. and made some change base on each doc.However, using forEach / map in my case. The different doc may have same globalID. since forEach loop is not actual waiting anything.")])]),a._v(" "),e("blockquote",[e("p",[e("strong",[a._v("Use "),e("code",[a._v("for...of")]),a._v(" instead of "),e("code",[a._v("forEach")]),a._v(" in asynchronous code.")]),a._v("\n{.is-success}")])]),a._v(" "),e("h3",{attrs:{id:"the-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[a._v("#")]),a._v(" The problem")]),a._v(" "),e("p",[e("code",[a._v("Array.prototype.forEach")]),a._v(" is not designed for asynchronous code.  (It was not suitable for promises, and it is not suitable for async-await.)")]),a._v(" "),e("p",[a._v("For example, the following forEach loop might not do what it appears to do:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" players "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("getWinners")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// BAD")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" players"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("forEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("player")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("givePrizeToPlayer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sendEmailToAdmin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'All prizes awarded'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("What's wrong with it?")]),a._v(" "),e("ul",[e("li",[a._v("The promises returned by the iterator function are not handled.  So if one of them throws an error, the error won't be caught.  (In Node 10, if no "),e("code",[a._v("unhandledrejection")]),a._v(" listener has been registered, that will cause the process to crash!)")]),a._v(" "),e("li",[a._v("Because "),e("code",[a._v("forEach")]),a._v(" does not wait for each promise to resolve, all the prizes are awarded in parallel, not serial (one by one).")]),a._v(" "),e("li",[a._v("So the loop actually finishes iterating before any of the prizes have finished being awarded!  (But after they have all started being awarded).")]),a._v(" "),e("li",[a._v("As a result, "),e("code",[a._v("sendEmailToAdmin()")]),a._v(" sends the email before any of the prizes have finished being awarded.  Maybe none of them will end up being awarded (they might all throw an error)!")])]),a._v(" "),e("h3",{attrs:{id:"so-how-should-we-write-this"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#so-how-should-we-write-this"}},[a._v("#")]),a._v(" So how should we write this?")]),a._v(" "),e("h4",{attrs:{id:"process-each-player-in-serial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-each-player-in-serial"}},[a._v("#")]),a._v(" Process each player in serial")]),a._v(" "),e("p",[a._v("Fortunately if your language has async-await then it will also have the "),e("code",[a._v("for...of")]),a._v(" construction, so you can use that.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" player "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("of")]),a._v(" players"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("givePrizeToPlayer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("This loop will wait for one prize to be awarded before proceeding to the next one.")]),a._v(" "),e("p",[a._v("You could also use a traditional "),e("code",[a._v("for(...;...;...)")]),a._v(" here but that is more verbose than we need.")]),a._v(" "),e("p",[e("em",[a._v("Note:")]),a._v(" The airbnb style guide recommends "),e("em",[a._v("not")]),a._v(" using "),e("code",[a._v("for...of")]),a._v(" for "),e("em",[a._v("web apps")]),a._v(" at the current time (2018), because it requires a large polyfill.  If you are working in the browser, use the traditional for mentioned above, or "),e("code",[a._v("Array.reduce()")]),a._v(" described below.")]),a._v(" "),e("h4",{attrs:{id:"process-all-the-players-in-parallel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-all-the-players-in-parallel"}},[a._v("#")]),a._v(" Process all the players in parallel")]),a._v(" "),e("p",[a._v("If the order doesn't matter, it may be quicker to process all the players in parallel.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("all")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("players"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("player")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("givePrizeToPlayer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("This will start awarding all the prizes at once, but it will wait for all of them to complete before proceeding to "),e("code",[a._v("sendEmailToAdmin()")]),a._v(".")]),a._v(" "),e("h4",{attrs:{id:"process-each-player-in-serial-using-array-prototype-reduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-each-player-in-serial-using-array-prototype-reduce"}},[a._v("#")]),a._v(" Process each player in serial, using "),e("code",[a._v("Array.prototype.reduce")])]),a._v(" "),e("p",[a._v("Some people recommend this approach:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" players"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("reduce")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" player")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Wait for the previous item to finish processing")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Process this item")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("givePrizeToPlayer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("(We are using the accumulator "),e("code",[a._v("a")]),a._v(" not as a total or a summary, but just as a way to pass the promise from the previous item's callback to the next item's callback, so that we can wait for the previous item to finish being processed.)")]),a._v(" "),e("p",[a._v("This has pretty much the same behaviour as the "),e("code",[a._v("for...of")]),a._v(" above, but is slightly harder to read.")]),a._v(" "),e("p",[a._v("However it is recommended by the Airbnb style guide because it can reduce the browser bundle size.  "),e("code",[a._v("for...of")]),a._v(" requires iterators, and some browsers require a polyfill for iterators, and that polyfill is quite large.  You can decide on the trade-off between bundle size and developer convenience.")]),a._v(" "),e("h3",{attrs:{id:"so-which-array-functions-can-i-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#so-which-array-functions-can-i-use"}},[a._v("#")]),a._v(" So which array functions can I use?")]),a._v(" "),e("p",[e("em",[a._v("TLDR:")]),a._v(" Only "),e("code",[a._v("map()")]),a._v(", "),e("code",[a._v("reduce()")]),a._v(", "),e("code",[a._v("flatMap()")]),a._v(" and "),e("code",[a._v("reduceRight()")]),a._v(" if used correctly")]),a._v(" "),e("p",[a._v("async-await works naturally with "),e("code",[a._v("for")]),a._v(" loops and "),e("code",[a._v("while")]),a._v(" loops, because they are written in the original function body.")]),a._v(" "),e("p",[a._v("But when you call out to another function, it can only work with async-await if it returns a promise, and if that promise is handled (awaited or "),e("code",[a._v(".then()")]),a._v("-ed).")]),a._v(" "),e("p",[a._v("That is why we can use "),e("code",[a._v(".reduce()")]),a._v(" and "),e("code",[a._v(".map()")]),a._v(" above, because in both cases we return a promise (or an array of promises) which we can await.  (In the reduce case, each invocation of the callback function waits for the previous promise to resolve, to ensure sequential processing.)")]),a._v(" "),e("p",[a._v("But most array functions will not give us a promise back, or allow a promise to be passed from one call to the next, so they cannot be used asynchronously.  So, for example, you can not use asynchronous code inside "),e("code",[a._v("array.some()")]),a._v(" or "),e("code",[a._v("array.filter()")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// BAD")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" playersWithGoodScores "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" players"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("player")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" score "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("calculateLatestScore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" score "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("It might look like that should work but it won't, because "),e("code",[a._v("filter")]),a._v(" was never designed with promises in mind.  When "),e("code",[a._v("filter")]),a._v(" calls your callback function, it will get a "),e("code",[a._v("Promise")]),a._v(' back, but instead of awaiting that promise, it will just see the promise as "truthy", and immediately accept the player, regardless of what their score will eventually be.')]),a._v(" "),e("p",[a._v("You may be able to find a library of array functions that can work asynchronously, but the standard array functions do not.")]),a._v(" "),e("blockquote",[e("p",[a._v("Reference  https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971\n{.is-info}")])])])}),[],!1,null,null,null);t.default=n.exports}}]);