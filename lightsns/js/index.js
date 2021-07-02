"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppShow = function () {
  function AppShow(a) {
    _classCallCheck(this, AppShow);

    this.config = {
      name: "",
      logo: "",
      describe: "",
      tips: "继续浏览精彩内容",
      down: "",
      open: "#",
      time: 12
    };
    if (Object.prototype.toString.call(a) === '[object Object]') {
      Object.assign(this.config, a);
      if (this.config.name == '' || this.config.logo == '' || this.config.describe == '' || this.config.down == '') {
        throw new Error("必要参数不能为空.");
      }
    } else {
      throw new Error("传入变量不是object类型.");
    }
    this.init();
  }

  _createClass(AppShow, [{
    key: "init",
    value: function init() {
      var time = sessionStorage.getItem("AppShow"),
          after = Number(this.config.time) * 60 * 60 * 1000 * 1000,
          now = new Date().getTime();
      if (time == null) {
        this.show();
      } else {
        after = time + after;
        if (now > after) {
          this.show();
        }
      }
    }
  }, {
    key: "show",
    value: function show() {
      var timer = null,
          iframe = document.createElement('iframe'),
          style = document.createElement("style"),
          type = document.createAttribute("type"),
          body = document.body,
          css = '#AppShow{box-sizing:border-box;padding:15px 20px;}#AppShow .t{font-size:14px;}#AppShow .p{align-items:center;display:flex;padding:16px 0;-webkit-box-align: center;}#AppShow .p .l{height:44px;width:44px;margin-right:10px;}#AppShow .p .l img{height:100%;width:100%;}#AppShow .p .c .t{font-size:18px;font-weight:600;}#AppShow .p .c .d{font-size:12px;}#AppShow .p .b{background-color:var(--jinsom-color,#fb7299);border-radius:6px;color:#fff;height:38px;line-height:38px;text-align:center;margin-left:auto;width:90px;}#AppShow .p:last-of-type .b{background-color:rgba(235,235,235,.7);color:rgb(100,100,100);}',
          html = '<div id="AppShow"><div class="t">' + this.config.tips + '</div><div class="p"><div class="l"><img src="' + this.config.logo + '"></img></div><div class="c"><div class="t">' + this.config.name + '</div><div class="d">' + this.config.describe + '</div></div><div class="b" id="AppShow_open">打开</div></div><div class="p"><div class="l"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAJ1BMVEX////f39/8/Pzj4+Pt7e3o6Oj4+Pjl5eX09PT29vbq6urv7+/x8fHI4HpTAAADeklEQVRYw+2Xz08TQRTHxwXWFjnw2C4geKigEBMPLKD1B4dWoqLx0NUoeiuNAgmnGhRjPNSKmuil/oqJp9aLetNoPKNe/LPc6UhnO/tm3vbAbT839vHtvHnz5r03LCEhIWHvOLa9PAdz96687l6avgi7nKl1qf0AYW52I7W+Qyfz2fjab6AyFlv9q62Zg10yMdVr0MJdKgd/TL30ocWpWNpe4DiX2h82KsC5GmfDldYe60xiN1s/V6fFr5AdWgUIGCe1KTS2Qv2VEvNTGok6aHvcnzjRymsN9BGPopY3fDvkjp2s5hSopVcA4K7GNh3YDpnO2Auipc1Dnmp1a/3ycu7hT8TcF5hnmQC3uh60uI+GS+wYpwKSesRrABg2RkQyoxr7iSxKgeQgktYuM+FL8TiypyGjeF+g2vxbnliJHlpaeE34nRceDEePwkEUim+DIjbFaDBHycvO/eW1oaRYCvwAzOznzk1jt9MD2CHEPCyrPMkaSDQYozfNz8tFUmQsbkkvqt97eNpQHBYdAMvcQVLcB5wdzKMiKX7MtSej35t0sNkdrnWzaCBLdG3VpDB9UikPqwMci8zsdAVEuBATdZltHwRVxCciR0S7cv6Ag9/VDKmFvH3tI2IdCMTkmHJDYz4AME5o5WiBrUz4vGCqTxmTFjXT0baboWHK+lFlXZxz2g9p2STqgK3JsAFPasXYkY2d20c6tczHr4+HfX6nDo+Ar+wDVDXT79kscX34boqRMKvnm8LDalXUGnb8/xV8EC6xeB5Oqp39KQhuKX1ymJEjXrogpM45tVnNoAuHY3HbE1q3GqmSDbT8yfKUXgRBRjk8Cy1hveE28sIDwSPk3jp4GymIYGz4IHAuIP+GBTsQjvYAuFIaDPtoLgyhW84PBArP+BCzAY1XIMptgcStaQYDwHtNmM/aZ0AG/yyZr+NaG/BBrSckrenHGbyRWu3z+Y1YZXqNqN9kUnlgavC9pqF4gtnGAsuvSpUYdhqGhTNU63cNCxfJiRp/3hwF/nihR6WqbsqfZWZ8zRu/SS3M6cfb4RMQ+yEoyIIpeQ9oJPHNwUKHh8/l/EWwpt7JlKj9p2mpvGGbzxhn/TwgrZ0euJzc9S1RWuRrnt52BVQcNKlNw4BkRGpp7EUIM1ZiXfFWuu58Yd1ibX8CzoklNClp/dRqOcsSEhIS9pZ/1r+vouMyyqMAAAAASUVORK5CYII="></img></div><div class="c"><div class="t">浏览器</div></div><div class="b" id="AppShow_hide">继续</div></div></div></div>';
      style.innerHTML = css;
      type.value = "text/css";
      style.setAttributeNode(type);
      document.head.appendChild(style);
      $(body).ready(function () {
        layer.open({
          type: 1,
          anim: 'up',
          style: 'background-color: rgb(255,255,255);position:fixed;bottom:0;left:0;width:100vw;height:200px;padding:0;border:none;border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-top-right-radius:20px;border-top-left-radius:20px;',
          content: html
        });
      });
      // 为了没有安装APP导致防止部分浏览器打开scheme link出错
      iframe.style.cssText = 'display:none;width=0;height=0';
      body.appendChild(iframe);
      iframe.src = this.config.open;
      $(body).on('click', '#AppShow_open', function () {
        iframe.contentWindow.location.reload(); // 刷新iframe
        // 微信内无法使用scheme link打开APP，有白名单除外
        if (/MicroMessenger/gi.test(navigator.userAgent)) {
          // 弹窗引导
          layer.open({
            content: '请点击右上角菜单，选择浏览器中打开。',
            btn: '好的',
            shadeClose: false,
            yes: function yes() {
              wondow.location.href = this.config.down;
            }
          });
        } else {
          timer = setTimeout(function () {
            wondow.location.href = this.config.down;
          }, 500);
        }
      });
      $(body).on('click', '#AppShow_hide', function () {
        iframe.remove();
        layer.closeAll();
        sessionStorage.setItem("AppShow", new Date().getTime());
      });
      // 如果APP打开了，页面隐藏，清除计时器
      $(document).on('visibilitychange webkitvisibilitychange', function () {
        var tag = document.hidden || document.webkitHidden;
        if (tag) {
          clearTimeout(timer);
        }
      });
      $(window).on('pagehide', function () {
        clearTimeout(timer);
      });
    }
  }]);

  return AppShow;
}();