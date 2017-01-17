/*适配各比例手机*/
!(function(win, doc) {
    function setFontSize() {

        var winWidth = window.innerWidth;
        // doc.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px' ;

        var size = (winWidth / 750) * 100;
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function() {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 100);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 100);
        }
    }, false);

    // 初始化
    setFontSize();

}(window, document));

var config = {
    designerList: "do?g=api&m=hd&a=works-list", //设计师说-作品列表
    load: "do?g=api&m=hd&a=loan-apply", //装修贷申请页面
    OneKeyOffer: "do?g=api&m=hd&a=offer", //智能一键报价
    DesignerApply: "do?g=api&m=hd&a=design-apply", //美家设计申请
    applyCode: "do?g=api&m=sms&a=hd-application", //美家设计申请：获得验证码
    articleVisitCount: "do?g=api&m=hd&a=article-view-count", //文章访问统计
    proDuctVisitCount: "do?g=api&m=hd&a=product-view-count", //产品访问统计
    opusVisitCount: "do?g=api&m=hd&a=works-view-count", //作品访问统计
    opusPraise: "do?g=api&m=hd&a=designer_agrees_count" //作品点赞统计
};

/*全局变量*/
var Util = {},
    debug = false,
    setDateType,
    setLocalTestParam,
    hostName = "wx.lxjjz.cn";

if (location.host !== hostName) {
    debug = true
}

Util.config = {
    ajaxURL: "http://" + hostName + "/",
    token: "USER_VALIDATE"
};

var setDateType = debug ? "jsonp" : "json";
var setLocalTestParam = debug ? "&lqtest=1" : "";

    Util.createURL = function(action) {
        return Util.config.ajaxURL + action + setLocalTestParam;
    }

Util.error = function() {
    Util.layerStyle1('网络出错了!')
}

/*Cookie存储*/
var Cookie = {};
Cookie.get = function(sName, sDefaultValue) {
    var sRE = "(?:; |^)" + sName + "=([^;]*);?";
    var oRE = new RegExp(sRE);
    if (oRE.test(document.cookie)) {
        return unescape(RegExp["$1"]);
    } else {
        return sDefaultValue || null;
    }
};
Cookie.set = function(sName, sValue, iExpireSec, sDomain, sPath, bSecure) {
    if (!sName) {
        return;
    }
    if (!sValue) {
        sValue = "";
    }
    var str = sName + "=" + escape(sValue) + "; ";
    if (!isNaN(iExpireSec)) {
        var oDate = new Date();
        oDate.setTime(oDate.getTime() + iExpireSec * 1000);
        str += "expires=" + oDate.toGMTString() + "; ";
    }
    if (sDomain) {
        str += "domain=" + sDomain + "; ";
    }
    if (sPath) {
        str += "path=" + sPath + "; ";
    } else {
        str += "path=/; ";
    }
    if (bSecure) {
        str += "secure";
    }
    document.cookie = str;
};
Cookie.clear = function(sName) {
    Cookie.set(sName, "", new Date(0));
};


Util.intToData = function(num) { //num形式为：201502131019
    var unixTimestamp = new Date(num * 1000);
    var commonTime = unixTimestamp.toLocaleString()
    return commonTime;
};

Util.confirm = function(text, callback) {
    layer.confirm(text, {
        btn: ['确定', '取消'],
        shade: false,
        offset: '25%'
    }, callback);

}

Util.alert = function(text) {
    layer.alert(text, {
        offset: '25%'
    });
}

//获取url中的参数
Util.getUrlParam = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

Util.isEmail = function(str) { /*是否是合法的email*/
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(str);
};

Util.isPhoneNum = function(str) { /*是否是合法的电话号码*/
    return /^(0[0-9]{2,3}[-]?)?[0-9]{7,8}(-[0-9]{1,8})?$/.test(str) || /^1[3578]{1}[0-9]{9}$/.test(str);
};
Util.isPhone = function(str) { /*是否是合法的电话号码*/
    return /^1[3578]{1}[0-9]{9}$/.test(str);
};
Util.isPositiveInt = function(str) { /*是否是正整数*/
    var reg = /^[0-9]*[1-9][0-9]*$/;
    return reg.test(str);
};

Util.isNum = function(str) { /*是否是数字*/
    var reg = /^[0-9][0-9]*(\.[0-9]+)?$/;
    return reg.test(str);
};
Util.isZipcode = function(str) { /*是否是邮编*/
    var reg = /^[1-9][0-9]{5}$/;
    return reg.test(str);
}
Util.addToken = function(param) { /*除登录页外，其他页面的所有请求都必须用Util.addToken加上token参数*/
    if (!this.token)
        this.token = 0;
    if ("string" == typeof(param)) {
        if (-1 != param.indexOf("="))
            param += "&token=" + this.token;
        else
            param += "?token=" + this.token;
    } else if ("object" == typeof(param)) {
        if (null == param)
            param = {};
        param.token = this.token;
    }
    return param;
};

Util.layerStyle1 = function(content) {
    layer.open({
        type: 0,
        skin: 'msg',
        time: 2,
        style: 'padding:20px 20px;bottom: 0px;',
        content: content
    });
}

Util.checkMobile = function(str) { /*检测合法手机号码并弹窗*/
    var re = /1[34578]{1}\d{9}$/;
    if (re.test(str)) {
        return true;
    } else {
        Util.layerStyle1('请输入正确的手机号码')
        return false;
    }
}

Util.checkUser = function(str) {
    var re = /[\u4E00-\u9FA5]{2,7}/g;
    if (re.test(str)) {
        return true;
    } else {
        Util.layerStyle1('请输入2-6位中文汉字')
        return false;
    }
}
Util.handler = function() {
    event.preventDefault();
}
Util.stopSlide = function() {
    document.addEventListener('touchmove', Util.handler, false);
}
Util.moveSlide = function() {
    document.removeEventListener('touchmove', Util.handler, false);
}

var wait = 60;
Util.getCode = function(Btn, className) {
    if (wait == 0) {
        Btn.removeClass(className)
        Btn.removeAttr("disabled");
        Btn.val('获取验证码')
        wait = 60;
    } else {
        Btn.addClass(className)
        Btn.attr("disabled", true);
        Btn.val(wait + "S 后可重新发")
        wait--;
        setTimeout(function() {
                Util.getCode(Btn, className)
            },
            1000)
    }
}
