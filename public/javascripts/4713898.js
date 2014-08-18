var a3898tf = "51la";
var a3898pu = "";
var a3898pf = "51la";
var a3898su = window.location;
var a3898sf = document.referrer;
var a3898of = "";
var a3898op = "";
var a3898ops = 1;
var a3898ot = 1;
var a3898d = new Date();
var a3898color = "";
if (navigator.appName == "Netscape") {
    a3898color = screen.pixelDepth;
} else {
    a3898color = screen.colorDepth;
}
try {
    a3898tf = top.document.referrer;
} catch (e) {
}
try {
    a3898pu = window.parent.location;
} catch (e) {
}
try {
    a3898pf = window.parent.document.referrer;
} catch (e) {
}
try {
    a3898ops = document.cookie.match(new RegExp("(^| )AJSTAT_ok_pages=([^;]*)(;|$)"));
    a3898ops = (a3898ops == null) ? 1 : (parseInt(unescape((a3898ops)[2])) + 1);
    var a3898oe = new Date();
    a3898oe.setTime(a3898oe.getTime() + 60 * 60 * 1000);
    document.cookie = "AJSTAT_ok_pages=" + a3898ops + ";path=/;expires=" + a3898oe.toGMTString();
    a3898ot = document.cookie.match(new RegExp("(^| )AJSTAT_ok_times=([^;]*)(;|$)"));
    if (a3898ot == null) {
        a3898ot = 1;
    } else {
        a3898ot = parseInt(unescape((a3898ot)[2]));
        a3898ot = (a3898ops == 1) ? (a3898ot + 1) : (a3898ot);
    }
    a3898oe.setTime(a3898oe.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "AJSTAT_ok_times=" + a3898ot + ";path=/;expires=" + a3898oe.toGMTString();
} catch (e) {
}
try {
    if (document.cookie == "") {
        a3898ops = -1;
        a3898ot = -1;
    }
} catch (e) {
}
a3898of = a3898sf;
if (a3898pf !== "51la") {
    a3898of = a3898pf;
}
if (a3898tf !== "51la") {
    a3898of = a3898tf;
}
a3898op = a3898pu;
try {
    lainframe
} catch (e) {
    a3898op = a3898su;
}