import React from "react" // var React = require("react");
import ReactDOM from "react-dom" // var ReactDOM = require("react-dom");
// es6에서는 import 기능을 제공한다. 뭐가 좋은지 모르겠지만 좌는 신버전 우는 구버전코드이다.

// node에서 express require 하는 것 처럼
// react에서도 이렇게 require해주고 시작.


// ReactDOM.render(<h1>Hello</h1>, document.querySelector("#root"));
// html 파일의 
//  <body>
// <div id="root"></div>
// <script src="../src/index.js" type="text/javascript"></script>
// </body>
// root 자리에 h1 태그를 render 하는 것

// react의 좋은점은 어느버전의 자바스크립트나 웹이 알 수 있는 버전으로 컴파일 해준다.

// ReactDOM.render(WHAT TO Show , WHERE TO SHOW IT);



// ReactDOM.render(<h1>Hello</h1><p>KDY</p>, document.querySelector("#root"));
// 나는 이런식으로 html 태그를 두가지 사용하고 싶은데 오류가 난다. 이경우에는 어떻게 해야할까?

ReactDOM.render(
<div>
  <h1>Hello</h1>
  <p>KDY</p>
  </div>, document.querySelector("#root"));
// 이런 경우에는 div 파일로 감싸서 하나로 만들어준다