(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(4),o=a.n(c),s=(a(22),a(24),a(11)),l=a(12),i=a(15),u=a(13),m=a(16),h=a(3),f=a(5),w=a.n(f);a(26),a(28);function d(e){var t;return e.value>90?t="danger":e.value>70&&(t="warning"),r.a.createElement(h.c,{value:e.value,color:t})}var p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={score:0,performance:0,question:"Wci\u015bnij ENTER by zacz\u0105\u0107!",anwser:"",currentAnwser:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var t=e.state.performance-1;t<0&&(t=0),e.setState({performance:t})},600),console.log(w()(document)),w()(document).keyup(function(){w()(".question").removeClass("animated shake")}),w()(document).keydown(function(t){if(w()(".question").removeClass("animated shake"),8===t.which)e.setState({currentAnwser:e.state.currentAnwser.slice(0,-1)});else if(13===t.which)if(e.state.currentAnwser===e.state.anwser){var a=20;e.state.performance>50&&(a=30),e.state.performance>60&&(a=40),e.state.performance>90&&(a=50);var n,r,c=Math.floor(Math.random()*a),o=Math.floor(Math.random()*a);Math.random()>.5?(n="".concat(c," + ").concat(o," = "),r="".concat(c+o)):(n="".concat(Math.max(c,o)," - ").concat(Math.min(c,o)," = "),r="".concat(Math.max(c,o)-Math.min(c,o))),e.setState({question:n,anwser:r,performance:Math.min(100,e.state.performance+25),score:e.state.score+e.state.performance+1,currentAnwser:""})}else w()(".question").addClass("animated shake");else""!==e.state.anwser&&t.key>="0"&&t.key<="9"&&e.setState({currentAnwser:e.state.currentAnwser+t.key})})}},{key:"render",value:function(){return r.a.createElement(h.b,null,r.a.createElement(h.d,null,r.a.createElement(h.a,null,r.a.createElement("h1",{className:"text-center"},"Obliczeniowiec"))),r.a.createElement(h.d,null,r.a.createElement(h.a,null,r.a.createElement(d,{value:this.state.performance}))),r.a.createElement(h.d,null,r.a.createElement(h.a,null,r.a.createElement("p",{className:"text-left"},"Wynik: ",this.state.score)),r.a.createElement(h.a,null,r.a.createElement("p",{className:"text-right"},"Poziom: ",this.state.performance))),r.a.createElement(h.d,null,r.a.createElement(h.a,null,r.a.createElement("p",{className:"question"},this.state.question,this.state.currentAnwser))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.6eb0f590.chunk.js.map