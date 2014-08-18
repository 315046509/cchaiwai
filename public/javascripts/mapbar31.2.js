/*
 * Mapbar Maplet Engine (C)2005 Mapbar Inc
 * Date: 2014-03-11
 * Time: 12:46:47
 * Type: mapbar
 * Version: 31.2
 */
if (typeof strImgsvrUrl == "undefined")strImgsvrUrl = "http://img.mapbar.com/maplite/";
if (typeof strMapsvrUrl == "undefined")strMapsvrUrl = "http://api.mapbar.com/api/";
CTLIMG_RESOURCE = [
    {url: strImgsvrUrl + "images/mapbar31.2.1.png", w: 210, h: 235}
];
var transparencyLevel = 60;
var DirectionInfo = '';
var strLicenseKey = "3409";
var strRemoteIP = "www.mapbar.com";
if (typeof iToolTipStyle == "undefined") {
    var iToolTipStyle = 1
}
var mapwidth = 600;
var mapheight = 400;
var MapBackgroundColor = "#EBEAE8";
var t655 = new Array();
t655["\u5168\u56FD"] = "GGEJDBVUUEARA";
t655["\u5317\u4EAC\u5E02"] = "HETCUFWVVHUEE";
t655["\u5929\u6D25\u5E02"] = "HHCIWHXVVJDBG";
t655["\u5858\u6CBD"] = "HIAUDWXVWBRBG";
t655["\u5927\u6E2F\u533A"] = "HHWJIRXVVHCUF";
t655["\u4E0A\u6D77\u5E02"] = "IJSRVJXVIWCHC";
t655["\u91CD\u5E86\u5E02"] = "HFISFCXTWJRFB";
t655["\u5E7F\u4E1C\u7701"] = "IJITUVWUABJGJ";
t655["\u5E7F\u5DDE\u5E02"] = "IJITUVWUABJGJ";
t655["\u6E05\u8FDC\u5E02"] = "IIFAAAVUARHGU";
t655["\u4F5B\u5C71\u5E02"] = "IJHUEEXTWSGVB";
t655["\u6DF1\u5733\u5E02"] = "ISTBEAVUAIIDF";
t655["\u6E5B\u6C5F\u5E02"] = "IICSURVTITUFU";
t655["\u8087\u5E86\u5E02"] = "IIHDAVWTVUETJ";
t655["\u4E2D\u5C71\u5E02"] = "IRRTRJXTWFUSG";
t655["\u4E1C\u839E\u5E02"] = "IRHDSEVUASTDU";
t655["\u97F6\u5173\u5E02"] = "IHIJCWXUDDDST";
t655["\u6C55\u5934\u5E02"] = "IVHBSGXUFSBTW";
t655["\u987A\u5FB7\u5E02"] = "IRBBEVXTWRHIS";
t655["\u73E0\u6D77\u5E02"] = "ISFWBTXTWDEUF";
t655["\u63ED\u9633\u5E02"] = "IURJHGVUFHRSU";
t655["\u4ECE\u5316\u5E02"] = "IJHDBRVUBEBAJ";
t655["\u6F6E\u5DDE\u5E02"] = "IUVGRVWUGBCDU";
t655["\u60E0\u5DDE\u5E02"] = "ISGGRHVUBTSBE";
t655["\u6C5F\u95E8\u5E02"] = "IRCSTCXTWBEAW";
t655["\u8302\u540D\u5E02"] = "IICVSCXTRDWRD";
t655["\u6885\u5DDE\u5E02"] = "ITCCETVUGDGIS";
t655["\u6CB3\u6E90\u5E02"] = "IRUDJJXUDDIWR";
t655["\u6C55\u5C3E\u5E02"] = "IUFAWHXUCTDWC";
t655["\u9633\u6C5F\u5E02"] = "IJIJHFWTTDFTV";
t655["\u4E91\u6D6E\u5E02"] = "IIAGBIWTUVVGB";
t655["\u6C88\u9633\u5E02"] = "HTJTRBXWTBGET";
t655["\u961C\u65B0\u5E02"] = "HJJCFJXWJSHWV";
t655["\u76D8\u9526\u5E02"] = "HSEHGRXWJBBHU";
t655["\u629A\u987A\u5E02"] = "HUBGDJXWTSTTT";
t655["\u8425\u53E3\u5E02"] = "HTIACGXWIIVJH";
t655["\u5927\u8FDE\u5E02"] = "HVDFTDXWEVHRR";
t655["\u846B\u82A6\u5C9B\u5E02"] = "HRERFAXWGITHJ";
t655["\u978D\u5C71\u5E02"] = "HTWGIRXWRHBRU";
t655["\u4E39\u4E1C\u5E02"] = "IAJJRUXWRWGTR";
t655["\u5357\u4EAC\u5E02"] = "IEGDCTWVGDBVS";
t655["\u5F90\u5DDE\u5E02"] = "HVJDGSWVHBRHC";
t655["\u8FDE\u4E91\u6E2F\u5E02"] = "IBBDTHWVRJVHE";
t655["\u6DEE\u9634\u5E02"] = "ICGHTUWVIURHG";
t655["\u76D0\u57CE\u5E02"] = "IEGSSTXVRDWJB";
t655["\u626C\u5DDE\u5E02"] = "IEUWEUXVHRSJG";
t655["\u6CF0\u5DDE\u5E02"] = "IFGWVFXVIIUDV";
t655["\u9547\u6C5F\u5E02"] = "IFCRFFWVHGGAI";
t655["\u5357\u901A\u5E02"] = "IHJVAAWVJEAFH";
t655["\u5E38\u5DDE\u5E02"] = "IGJGIVWVHIHHB";
t655["\u65E0\u9521\u5E02"] = "IHGVVGWVHSTJB";
t655["\u82CF\u5DDE\u5E02"] = "IIEIVUWVHTJBE";
t655["\u6DEE\u5B89\u5E02"] = "ICGJGDWVIVFJA";
t655["\u5BBF\u8FC1\u5E02"] = "IASVJUWVIFASV";
t655["\u6C5F\u9634\u5E02"] = "IGUWDTXVIDIHW";
t655["\u5B9C\u5174\u5E02"] = "IIFVGWTGXHJAWEBHF";
t655["\u6B66\u6C49\u5E02"] = "HWTARHXUUAIWI";
t655["\u8346\u95E8\u5E02"] = "HSVJRCWURJETS";
t655["\u8346\u5DDE\u5E02"] = "HUARAVWUJIHSU";
t655["\u5341\u5830\u5E02"] = "HHEGSCXURTGGW";
t655["\u968F\u5DDE\u5E02"] = "HTRADCXUUGCVW";
t655["\u8944\u6A0A\u5E02"] = "HRDVUGWUTBDJS";
t655["\u5B9C\u660C\u5E02"] = "HSATBHVUISGJI";
t655["\u5B5D\u611F\u5E02"] = "HVRJGCWUUAHRH";
t655["\u6210\u90FD\u5E02"] = "HABIJDVTUJEGA";
t655["\u6CF8\u5DDE\u5E02"] = "HEUSFAXTTWJSS";
t655["\u8FBE\u5DDE\u5E02"] = "HEGUGBXUDJWFE";
t655["\u5E7F\u5B89\u5E02"] = "HEEGTJVUBDGJR";
t655["\u5E7F\u5143\u5E02"] = "HAAIBIXUCWGSS";
t655["\u4E50\u5C71\u5E02"] = "HBEBFWXTSGWFC";
t655["\u5185\u6C5F\u5E02"] = "HDDDRIXTUGWRS";
t655["\u6500\u679D\u82B1\u5E02"] = "HCRHCWXTDSAST";
t655["\u9042\u5B81\u5E02"] = "HCJJUFXTWRIGC";
t655["\u5B9C\u5BBE\u5E02"] = "HDTRTSXTSIWBV";
t655["\u81EA\u8D21\u5E02"] = "HDCDSUVTTRIJA";
t655["\u897F\u5B89\u5E02"] = "HBWSJFXURIERE";
t655["\u54B8\u9633\u5E02"] = "HBIIBFWUREFVC";
t655["\u77F3\u5BB6\u5E84\u5E02"] = "HESUBVWVITTHS";
t655["\u5510\u5C71\u5E02"] = "HHWAWWXWATUCT";
t655["\u79E6\u7687\u5C9B\u5E02"] = "HJJVGFXWDGIEG";
t655["\u627F\u5FB7\u5E02"] = "HFHJHWXWCHACR";
t655["\u5ECA\u574A\u5E02"] = "HFTVWAXVVFSCH";
t655["\u5F20\u5BB6\u53E3\u5E02"] = "HBBTDBWVUISAG";
t655["\u4FDD\u5B9A\u5E02"] = "HEWGEJXVSICHV";
t655["\u90A2\u53F0\u5E02"] = "HGDDSHWVHDJBV";
t655["\u90AF\u90F8\u5E02"] = "HGVCGVWVGIBRD";
t655["\u6CA7\u5DDE\u5E02"] = "HHVAAFWVTTRDT";
t655["\u592A\u539F\u5E02"] = "HCAFICWVFITUB";
t655["\u957F\u6CBB\u5E02"] = "HFGISAWVDTTJH";
t655["\u5927\u540C\u5E02"] = "GWSVEUXVRAJVR";
t655["\u664B\u57CE\u5E02"] = "HGBDAUWVCFJIA";
t655["\u664B\u4E2D\u5E02"] = "HCIWDTXVFIGDH";
t655["\u4E34\u6C7E\u5E02"] = "HDCJHGWVBDIBB";
t655["\u5415\u6881\u5730\u533A"] = "HAGDSSXVCUGWA";
t655["\u6714\u5DDE\u5E02"] = "GWJHIEXVHJBJF";
t655["\u5FFB\u5DDE\u5E02"] = "HBHFJSWVGJVDT";
t655["\u9633\u6CC9\u5E02"] = "HDIVBIXVHAUWW";
t655["\u8FD0\u57CE\u5E02"] = "HDWEIIXUVUARJ";
t655["\u90D1\u5DDE\u5E02"] = "HIGSCCWVCHAHF";
t655["\u6D1B\u9633\u5E02"] = "HGRDWVXVAFWVU";
t655["\u5E73\u9876\u5C71\u5E02"] = "HJHARHWVAFTSR";
t655["\u8BB8\u660C\u5E02"] = "HJTUEIWVBJITU";
t655["\u5357\u9633\u5E02"] = "HJGEVGXUVAWHW";
t655["\u9A7B\u9A6C\u5E97\u5E02"] = "HSSISAWVAEVVB";
t655["\u5468\u53E3\u5E02"] = "HSRTHWXVCDTSR";
t655["\u5546\u4E18\u5E02"] = "HSWBAEXVEWSCS";
t655["\u5F00\u5C01\u5E02"] = "HJGVEGXVDIWGW";
t655["\u65B0\u4E61\u5E02"] = "HHWEWDXVDJSIC";
t655["\u4E09\u95E8\u5CE1\u5E02"] = "HERHERWUVSTUF";
t655["\u6FEE\u9633\u5E02"] = "HJADAVWVGATIH";
t655["\u4FE1\u9633\u5E02"] = "HUBFDBXUWBFVV";
t655["\u9E64\u58C1\u5E02"] = "HHGUUJWVFADAE";
t655["\u5B89\u9633\u5E02"] = "HHHDVVXVFIVEW";
t655["\u7126\u4F5C\u5E02"] = "HHBCJJXVCIHWI";
t655["\u6F2F\u6CB3\u5E02"] = "HRUCUFWVBDVRA";
t655["\u957F\u6625\u5E02"] = "HTESJCVBACCRUU";
t655["\u5409\u6797\u5E02"] = "HVCVBJWBAEBVVR";
t655["\u54C8\u5C14\u6EE8\u5E02"] = "HSHWUDXBAHARIG";
t655["\u9F50\u9F50\u54C8\u5C14\u5E02"] = "HEWGJRXBAFGFFH";
t655["\u5927\u5E86\u5E02"] = "HHSSFDVBAFUUUG";
t655["\u4E94\u5927\u8FDE\u6C60\u5E02"] = "HGERCVWBARSCIS";
t655["\u7261\u4E39\u6C5F\u5E02"] = "IBTVJCXBAJTWCB";
t655["\u547C\u548C\u6D69\u7279\u5E02"] = "GTCIEDWVIRJSI";
t655["\u9521\u6797\u90ED\u52D2"] = "GVBWHFXWECWVC";
t655["\u6D4E\u5357\u5E02"] = "HRRRBTWVRIHDU";
t655["\u804A\u57CE\u5E02"] = "HJFDFSWVIJVDI";
t655["\u70DF\u53F0\u5E02"] = "HWWUHDXWCHRJC";
t655["\u5A01\u6D77\u5E02"] = "IBCGUJXWDIRTI";
t655["\u9752\u5C9B\u5E02"] = "IARACCWVVUDCU";
t655["\u6CF0\u5B89\u5E02"] = "HSIVBAXVJWASD";
t655["\u83B1\u829C\u5E02"] = "HTFICSXVRTHWC";
t655["\u6D4E\u5B81\u5E02"] = "HSVHFHWVHVRAG";
t655["\u83CF\u6CFD\u5E02"] = "HRHRJJXVFWWUG";
t655["\u4E34\u6C82\u5E02"] = "HWCAADXVRBECV";
t655["\u5FB7\u5DDE\u5E02"] = "HIEVBTWVRSSVF";
t655["\u6DC4\u535A\u5E02"] = "HTAVDJWVTEHVC";
t655["\u6F4D\u574A\u5E02"] = "HUTJUUWVUSVIC";
t655["\u65E5\u7167\u5E02"] = "IAFTHRWVTFJJS";
t655["\u4E1C\u8425\u5E02"] = "HSUERIWVVBGCU";
t655["\u6EE8\u5DDE\u5E02"] = "HSAWCDXVUBRBV";
t655["\u67A3\u5E84\u5E02"] = "HVDUUEWVIIUTH";
t655["\u5408\u80A5\u5E02"] = "ICGAACWVDIGSD";
t655["\u829C\u6E56\u5E02"] = "IEUISRWVEGSBF";
t655["\u9EC4\u5C71\u5E02"] = "IHDTICWVBUURU";
t655["\u5B89\u5E86\u5E02"] = "IEBDSUWVBDBHE";
t655["\u868C\u57E0\u5E02"] = "IAUUAAWVFFCHB";
t655["\u4EB3\u5DDE\u5E02"] = "HUAIWVXVEFIFU";
t655["\u5DE2\u6E56\u5E02"] = "IDRTRDWVEBHRV";
t655["\u6C60\u5DDE\u5E02"] = "IEIGTWXVCAUIC";
t655["\u6EC1\u5DDE\u5E02"] = "IDEJCAWVFUDAJ";
t655["\u961C\u9633\u5E02"] = "HVJGCUXVCWCGG";
t655["\u6DEE\u5317\u5E02"] = "HVHEGJXVFWWCI";
t655["\u516D\u5B89\u5E02"] = "IBFVUSXVCDSWT";
t655["\u9A6C\u978D\u5C71\u5E02"] = "IEHRWSXVFDABT";
t655["\u5BBF\u5DDE\u5E02"] = "HWDSDFXVFUGHA";
t655["\u94DC\u9675\u5E02"] = "IEJTFVWVCVFJF";
t655["\u5BA3\u57CE\u5E02"] = "IGAAECWVEHBGD";
t655["\u6DEE\u5357\u5E02"] = "IASFHWXVEDVTE";
t655["\u676D\u5DDE\u5E02"] = "IJDAJAWVFJGCB";
t655["\u7ECD\u5174\u5E02"] = "IREBUTXVFTERW";
t655["\u5B81\u6CE2\u5E02"] = "ISWIFCXVHBBAS";
t655["\u6E56\u5DDE\u5E02"] = "IIDGEDWVGFJRI";
t655["\u5609\u5174\u5E02"] = "IJFTGAWVHDDBJ";
t655["\u91D1\u534E\u5E02"] = "IRDGFTXVCWSAH";
t655["\u4E3D\u6C34\u5E02"] = "ISRHIDWVCGJFI";
t655["\u6E29\u5DDE\u5E02"] = "IUGWBGXVCUHFD";
t655["\u4E50\u6E05\u5E02"] = "IUSDHJWVDHSSV";
t655["\u53F0\u5DDE\u5E02"] = "IUJGDSWVFAFUE";
t655["\u8862\u5DDE\u5E02"] = "IJEDARWVBJCGD";
t655["\u798F\u5DDE\u5E02"] = "IVGDHIXUUTREW";
t655["\u8386\u7530\u5E02"] = "IVUGHUWUTGHGG";
t655["\u5357\u5E73\u5E02"] = "ISRAGEWUTVCRB";
t655["\u53A6\u95E8\u5E02"] = "IVVSDUWUJJTJR";
t655["\u6CC9\u5DDE\u5E02"] = "IVWVHJXURWGTT";
t655["\u6F33\u5DDE\u5E02"] = "IVCTCHWUIVUGC";
t655["\u4E09\u660E\u5E02"] = "ISHCWSXUSIFFT";
t655["\u9F99\u5CA9\u5E02"] = "ITFFFUWUIUVGC";
t655["\u957F\u6C99\u5E02"] = "IBGRTCVUHGRSF";
t655["\u5F20\u5BB6\u754C\u5E02"] = "HTDSDJVUFATFG";
t655["\u5CB3\u9633\u5E02"] = "HWURCEXUJHAEH";
t655["\u682A\u6D32\u5E02"] = "ICDADVXUHCBWH";
t655["\u90F4\u5DDE\u5E02"] = "IFCBUEVUDUGGU";
t655["\u5E38\u5FB7\u5E02"] = "HVDAVWXUGSCRI";
t655["\u8861\u9633\u5E02"] = "ICUVVBXUEUWGE";
t655["\u90B5\u9633\u5E02"] = "IAJDWAXUDRJDW";
t655["\u6E58\u6F6D\u5E02"] = "IBUTBWXUGTIBI";
t655["\u76CA\u9633\u5E02"] = "HWVBGTXUHAUAB";
t655["\u6E58\u897F"] = "HTESRDVUCRFHC";
t655["\u5357\u5B81\u5E02"] = "ICIFVTWTIBCAU";
t655["\u6842\u6797\u5E02"] = "IBTCGEWTVUSVH";
t655["\u767e\u8272\u5e02"] = "HVEHATXTHCIWJ";
t655["\u5357\u660C\u5E02"] = "IFCEUTVUTJJDU";
t655["\u8D35\u9633\u5E02"] = "HRFBHUVTSGBFI";
t655["\u6606\u660E\u5E02"] = "HGIVRBXTCWBDG";
t655["\u7389\u6EAA\u5E02"] = "HHFUSFXTBJWHG";
t655["\u695A\u96C4\u5E02"] = "HEGDTDUTBSTCC";
t655["\u5FB7\u5B8F"] = "HAECBGXSSEAWD";
t655["\u8FEA\u5E86"] = "GTWSURXTCJAJS";
t655["\u4E2A\u65E7\u5E02"] = "HJECWRXTBDUCF";
t655["\u4E34\u6CA7\u5E02"] = "HDFFEHUSTSDDI";
t655["\u6012\u6C5F\u5E02"] = "GUTHDTWTAATVU";
t655["\u66F2\u9756\u5E02"] = "HHGUGEVTFUBJH";
t655["\u601D\u8305\u5E02"] = "HGAEUCVSUHFHU";
t655["\u62C9\u8428\u5E02"] = "FUUVCJWSIEVAR";
t655["\u6D77\u53E3\u5E02"] = "IJTRTWXTGUUSR";
t655["\u4E09\u4E9A\u5E02"] = "ISECARWTCVVAD";
t655["\u743C\u6D77\u5E02"] = "ISDJDGWTFVIAS";
t655["\u5170\u5DDE\u5E02"] = "GHFHGUWUFFUUV";
t655["\u94F6\u5DDD\u5E02"] = "GHIEETXUTURWF";
t655["\u897F\u5B81\u5E02"] = "GDIATWXUDCTBA";
t655["\u4E4C\u9C81\u6728\u9F50\u5E02"] = "ECTRRTUTIIAJH";
t655["\u9999\u6E2F"] = "ITDUDHWUADIVI";
t655["\u6FB3\u95E8"] = "ISGWHUXTWBWWT";
t655["\u53F0\u6E7E"] = "JESFTTXUTRWJW";
t655["\u9E64\u5C97\u5E02"] = "HVREATXBAVVGWH";
t655["\u5305\u5934\u5E02"] = "GJJSCSZVFRAIA";
t655["\u8861\u6C34\u5E02"] = "HGWVHSZVRBHDV";
t655["\u6986\u6797\u5E02"] = "GUBBADZVBUWWA";
t655["\u901A\u8FBD\u5E02"] = "HIAJGGXWUBWRC";
t655["\u8D64\u5CF0\u5E02"] = "HFAGBIXWGAFHI";
t655["\u547C\u4F26\u8D1D\u5C14"] = "GSRDHWXBABUCHH";
t655["\u5174\u5B89\u76DF"] = "HDWGITXBAAIVAR";
t655["\u5B81\u5FB7\u5E02"] = "IUSTGRXUWBCGA";
t655["\u8D63\u5DDE\u5E02"] = "IHWSERZUGUBUJ";
t655["\u67f3\u5dde\u5e02"] = "IBVATEZTTBBTS";
function getPid(a) {
    if (typeof t655[a] == "undefined")return a;
    return t655[a]
};
var topColor = "#FFFFFF";
var subColor = "#FFFFFF";
var xoffset = 0;
var yoffset = 0;
var _9Ra = '?20123444023';
var sN = function () {
    this.clear = function () {
    };
    this.paint = function () {
    };
    this.lB = function () {
    };
    this.lE = function () {
    };
    this.setColor = function () {
    }
};
var jsGraphics = function (name) {
};
var gq = function (name, left, top, width, height, visible, zindex, content) {
    var h = document.createElement("div");
    h.unselectable = "on";
    h.id = name;
    h.style.position = "absolute";
    h.style.top = parseInt(top) + "px";
    h.style.left = parseInt(left) + "px";
    h.style.zIndex = zindex;
    h.style.width = width + (width == "auto" ? "" : "px");
    h.style.height = height + (height == "auto" ? "" : "px");
    h.style.visibility = (visible) ? 'visible' : 'hidden';
    h.innerHTML = content;
    return h
};
var PerformControl = function (e, uy, qu) {
    var maplet = uy.parentNode.q9;
    switch (qu) {
        case 1:
            maplet.panTo(parseInt(maplet.width) / 2, 0);
            break;
        case 2:
            maplet.panTo(0, parseInt(maplet.height) / 2);
            break;
        case 3:
            maplet.panTo(-parseInt(maplet.width) / 2, 0);
            break;
        case 4:
            maplet.panTo(0, -parseInt(maplet.height) / 2);
            break;
        case 5:
            maplet.zoomIn();
            break;
        case 6:
            maplet.zoomOut();
            break;
        case 7:
            maplet.setMode(ts.tb);
            break;
        case 8:
            var yoffset = parseInt(uy.style.top) - 96 + parseInt(maplet.controlCanvas.top);
            var y = parseInt((px) ? event.clientY : e.clientY) - parseInt(maplet.offsetY) - parseInt(maplet.top);
            y -= yoffset;
            if (!px && maplet.panel.style.position != "absolute") {
            }
            AB = MAX_ZOOM_LEVEL - Math.max(0, Math.min(MAX_ZOOM_LEVEL, parseInt((parseInt(y) - 100) / gb.n7J)));
            uy.parentNode.update(AB);
            maplet.eavj8();
            maplet.setZoomLevel(AB, true, false);
            break;
        default:
            break
    }
};
var y4 = null;
var showMouseTipBox = function (x, y, x8, container) {
    try {
        if (y4 == null || y4 == "undefined") {
            if (maplet.sS != ts.tw) {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, x8);
                y4.className = "ptlabel";
                y4.style.backgroundColor = "#FFFFFF";
                y4.style.padding = "2px";
                y4.style.border = "1px solid #0E347F";
                y4.style.color = "#D50F1E"
            } else {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, x8)
            }
            y4.unselectable = "on";
            y4.style.MozUserSelect = "none"
        } else {
            y4.style.left = (parseInt(x) + 10) + "px";
            y4.style.top = (parseInt(y) + 18) + "px";
            y4.visibility = "visible"
        }
        if (y4 != null && (y4.parentNode == null || y4.parentNode != container)) {
            container.appendChild(y4)
        }
    } catch (e) {
    }
};
var nX = function () {
    if (y4 != null) {
        if (y4.parentNode != null) {
            _removeNode(y4)
        }
        y4 = null
    }
};
var imageTileError = function (yF) {
    if (yF.width == 300 && yF.ntry == "0") {
        yF.ntry = "1";
        yF.src = yF.src + "?"
    } else if (yF.width == 300 && yF.ntry == "1") {
        yF.ntry = "2";
        yF.src = yF.src + "?"
    } else {
        yF.ntry = "3";
        yF.onerror = null;
        yF.src = strImgsvrUrl + "images/mask.gif";
        yF.style.width = "300px";
        yF.style.height = "300px"
    }
};
var imageTileOk = function (yF) {
    yF.onerror = null;
    yF.onload = null;
    yF.style.width = "300px";
    yF.style.height = "300px"
};
var fJ = function (uy, yH) {
    var cU = false;
    while (uy != null) {
        if ((typeof yH == "string" && uy.id == yH) || (uy == yH)) {
            cU = true;
            break
        }
        uy = uy.parentNode
    }
    return cU
};
var y5 = null;
var waitHideTip = function () {
    if (y5)clearTimeout(y5);
    y5 = null;
    y5 = setTimeout("hideToolTipMenu()", 2000)
};
var lbp = function (id, x, y, w, wO, y6, yU, oL8) {
    $2FD[id] = {x: x, y: y, w: w, wO: wO, y6: y6, yU: yU, oL8: oL8};
    b6G(id, x, y, w, wO, y6, yU, oL8)
};
var b6G = function (id, x, y, w, wO, y6, yU, oL8) {
    if (typeof id == "string" && id != null && document.getElementById(id) != null && typeof wO == "string" && wO != null) {
        if (!oL8) {
            document.getElementById(id).innerHTML += "<div unselectable=\"on\" class=\"hotspotlabel\" onmouseout=\"javascript:waitHideTip();\" onmouseover=\"javascript:{var e = arguments[0];setToolTipMenu(e,e,'" + y6 + "','" + (yU) + "',e)};\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + wO + "</div>"
        } else {
            document.getElementById(id).innerHTML += "<div unselectable=\"on\"  style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + wO + "</div>"
        }
    }
};
var $2FD = {};
function CreateToolTip(qR, ya, xu) {
    var ContentInfo = '<table id="mytooltip_container" border="0" width="150" cellspacing="0" cellpadding="0"><tr><td width="100%" bgcolor="#FF0000"><table border="0" width="150" cellspacing="1" cellpadding="0">' + '<tr><td width="100%" bgcolor="#FF0000">' + '<table border="0" width="100%" cellspacing="0" cellpadding="0">' + '<tr><td width="100%" bgcolor=' + topColor + '>' + '<table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">' + '<tr><td id="mytooltiptitle"width="100%" class="tooltiptitle">' + ya + '</td>' + '<td style="cursor:pointer;" valign="top" align="right">' + '<img src="' + strImgsvrUrl + 'images/xclose.gif" onclick="javascript:hideToolTipMenu();">' + '</td>' + '</tr>' + '</table>' + '</td></tr>' + '<tr><td width="100%" bgcolor=' + subColor + '>' + '<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">' + '<tr><td id="mytooltipcontent" width="100%" class="tooltipcontent">' + xu + '</td></tr>' + '</table>' + '</td></tr>' + '</table>' + '</td></tr>' + '</table></td></tr></table>';
    document.getElementById(qR).innerHTML = ContentInfo;
    var yw = document.getElementById(qR).childNodes[0];
    document.getElementById(qR).style.width = yw.clientWidth;
    document.getElementById(qR).style.height = yw.clientHeight
};
var setToolTipMenu = function (x, y, ya, xu, e) {
    var maplet = document["mapbar-maplet"];
    if (maplet != null && maplet.width && maplet.height) {
        mapwidth = maplet.width;
        mapheight = maplet.height;
        if (typeof x == "undefined" || typeof e == "object") {
            x = ((px) ? event.clientX : e.clientX) - maplet.offsetX - maplet.left;
            y = ((px) ? event.clientY : e.clientY) - maplet.offsetY - maplet.top
        }
    }
    UpdateContent("ToolTip", ya, xu);
    var y8 = document.getElementById("ToolTip").clientWidth;
    var y1 = document.getElementById("ToolTip").clientHeight;
    if (x > mapwidth - y8) {
        x = x - y8
    }
    ;
    if (y > mapheight - y1) {
        y = y - y1
    }
    ;
    MoveToolTip("ToolTip", y + yoffset, x + xoffset);
    document.getElementById("ToolTip").style.visibility = 'visible'
};
var hideToolTipMenu = function () {
    document.getElementById("ToolTip").style.visibility = "hidden";
    var maplet = document["mapbar-maplet"];
    if (maplet.getContextMenu() != null) {
        maplet.getContextMenu().hide()
    }
    MoveToolTip("ToolTip", 0, 0)
};
var MoveToolTip = function (qR, nr, nq) {
    if (px) {
        document.getElementById(qR).style.top = parseInt(eval(nr)) + "px"
    } else {
        document.getElementById(qR).style.top = parseInt(eval(nr)) + "px"
    }
    document.getElementById(qR).style.left = parseInt(eval(nq)) + "px"
};
var UpdateContent = function (qR, ya, xu) {
    if (initialize == 0) {
        CreateToolTip(qR, ya, xu);
        initialize = 1
    }
    if (document.getElementById("mytooltiptitle"))document.getElementById("mytooltiptitle").innerHTML = ya;
    if (document.getElementById("mytooltipcontent"))document.getElementById("mytooltipcontent").innerHTML = xu;
    var G$5 = document.getElementById("ToolTip");
    var CVT = document.getElementById("mytooltip_container");
    if (CVT) {
        G$5.style.width = CVT.clientWidth + "px";
        G$5.style.height = CVT.clientHeight + "px"
    }
};
var ts = {tz: 1, tA: 2, ty: 3, tv: 5, tw: 6, tx: 7, tt: 8, lz: 9, ly: 10, tb: 11, np: 12, l3: 13, tM: 14, tu: 23, ta: 15, X420D: 24, u0S$: 25};
function _xY34(uy) {
    if (typeof uy == "undefined" || !uy)return false;
    return uy instanceof Array
};
function E43(lT) {
    var X6OcW = 0, c9GN = 0;
    if (typeof lT == "string" && lT)lT = document.getElementById(lT);
    if (typeof lT == "object" && lT) {
        do {
            X6OcW += lT.offsetTop || 0;
            c9GN += lT.offsetLeft || 0;
            if (lT.offsetParent == document.body)if (lT.style.position == 'absolute')break;
            lT = lT.offsetParent
        } while (lT)
    }
    return [c9GN, X6OcW]
};
function uP5(f1r, l2914) {
    var r = null;
    if (typeof f1r == "string" && f1r)f1r = aa(f1r);
    if (typeof f1r == "object" && f1r) {
        do {
            if (typeof f1r.getAttribute !== 'undefined') {
                r = f1r.getAttribute(l2914)
            }
            if (r || f1r.parentNode == maplet.map)break;
            f1r = f1r.parentNode
        } while (f1r)
    }
    return r
};
var lf7 = function (dom, l2914, value, G_30) {
    var Bm9 = function (d, a, v) {
        if (typeof d.setAttribute != "undefined")d.setAttribute(a, v)
    };
    var y56$a = function (d, a, v, nc) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var o6Q7 = d.childNodes;
            for (var i = 0; i < o6Q7.length; i++) {
                var c = o6Q7[i];
                if (c.childNodes.length > 0) {
                    y56$a(c, a, v, nc)
                } else if (typeof c.tagName == "string" && !nc[c.tagName.toLowerCase()]) {
                    Bm9(c, a, v)
                }
            }
            Bm9(d, a, v)
        }
    };
    if (_xY34(G_30)) {
        for (var i = 0; i < G_30.length; i++)G_30[G_30[i].toLowerCase()] = 1
    } else {
        G_30 = []
    }
    y56$a(dom, l2914, value, G_30)
};
var HNt = function (dom, l2914) {
    var Bm9 = function (d, a) {
        if (typeof d.removeAttribute != "undefined")d.removeAttribute(a)
    };
    var y56$a = function (d, a) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var o6Q7 = d.childNodes;
            for (var i = 0; i < o6Q7.length; i++) {
                var c = o6Q7[i];
                if (c.childNodes.length > 0) {
                    y56$a(c, a)
                } else if (typeof c.tagName == "string") {
                    Bm9(c, a)
                }
            }
            Bm9(d, a)
        }
    };
    y56$a(dom, l2914)
};
function _getStyle(f1r, duO, FS_7) {
    var x = null;
    if (typeof f1r == "string" && f1r)x = document.getElementById(f1r); else x = f1r;
    if (typeof x != "object" || !x)return "";
    if (!duO && !FS_7)return "";
    if (duO && !FS_7)FS_7 = duO;
    if (!duO && FS_7)duO = FS_7;
    var y = "";
    if (x.currentStyle) {
        y = x.currentStyle[duO]
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        var pe84v = document.defaultView.getComputedStyle(x, null);
        if (ukX || xA5) {
            y = pe84v ? pe84v.getPropertyValue(duO) : ""
        } else {
            y = pe84v ? pe84v.getPropertyValue(FS_7) : ""
        }
    }
    return y
};
function Y32k(s, d) {
    if (isNaN(parseInt(s)))return(typeof d != "number" ? 0 : d); else return parseInt(s)
};
function _isInsidePolygon(pt, _88S) {
    for (var c = false, i = -1, l = _88S.length, qC = l - 1; ++i < l; qC = i) {
        if (((_88S[i].y <= pt.y && pt.y < _88S[qC].y) || (_88S[qC].y <= pt.y && pt.y < _88S[i].y)) && (pt.x < (_88S[qC].x - _88S[i].x) * (pt.y - _88S[i].y) / (_88S[qC].y - _88S[i].y) + _88S[i].x))c = !c
    }
    return c
};
function _isInsideRect(pt, rect) {
    if (rect.max.x > pt.x && rect.min.x <= pt.x && rect.max.y > pt.y && rect.min.y <= pt.y)return true;
    return false
};
function _isRectint(Ey79a, q_58h) {
    return Math.abs((Ey79a.min.x + Ey79a.max.x) / 2 - (q_58h.min.x + q_58h.max.x) / 2) < ((Ey79a.max.x + q_58h.max.x - Ey79a.min.x - q_58h.min.x) / 2) && Math.abs((Ey79a.min.y + Ey79a.max.y) / 2 - (q_58h.min.y + q_58h.max.y) / 2) < ((Ey79a.max.y + q_58h.max.y - Ey79a.min.y - q_58h.min.y) / 2)
};
function _IsIntersect(r6a4I, g21) {
    var d = (r6a4I.end.y - r6a4I.start.y) * (g21.end.x - g21.start.x) - (g21.end.y - g21.start.y) * (r6a4I.end.x - r6a4I.start.x);
    if (d == 0) {
        return false
    } else {
        var x0 = ((r6a4I.end.x - r6a4I.start.x) * (g21.end.x - g21.start.x) * (g21.start.y - r6a4I.start.y) + (r6a4I.end.y - r6a4I.start.y) * (g21.end.x - g21.start.x) * r6a4I.start.x - (g21.end.y - g21.start.y) * (r6a4I.end.x - r6a4I.start.x) * g21.start.x) / d;
        var As = ((r6a4I.end.y - r6a4I.start.y) * (g21.end.y - g21.start.y) * (g21.start.x - r6a4I.start.x) + (r6a4I.end.x - r6a4I.start.x) * (g21.end.y - g21.start.y) * r6a4I.start.y - (g21.end.x - g21.start.x) * (r6a4I.end.y - r6a4I.start.y) * g21.start.y) / (-d);
        if ((x0 - r6a4I.start.x) * (x0 - r6a4I.end.x) <= 0 && (x0 - g21.start.x) * (x0 - g21.end.x) <= 0 && (As - r6a4I.start.y) * (As - r6a4I.end.y) <= 0 && (As - g21.start.y) * (As - g21.end.y) <= 0) {
            return true
        }
    }
    return false
};
var _882 = function (U7uN2) {
    if (window.event) {
        return window.event
    } else {
        while (U7uN2.caller)U7uN2 = U7uN2.caller;
        if (typeof U7uN2.arguments != "undefined" && U7uN2.arguments && U7uN2.arguments.length > 0) {
            if (U7uN2.arguments[0].constructor.toString().indexOf("Event"))return U7uN2.arguments[0]
        }
    }
    return null
};
var tM8 = function (e, preventDefault) {
    if (typeof e == "undefined")return;
    if (window.event) {
        window.event.returnValue = false;
        window.event.cancelBubble = true
    } else {
        if (typeof preventDefault != "boolean")preventDefault = true;
        if (preventDefault)e.preventDefault();
        e.stopPropagation()
    }
};
function aa(lT) {
    if (typeof lT == 'string') {
        return document.getElementById(lT)
    } else {
        return null
    }
};
_removeNode = document.all ? function () {
    var d;
    return function (n) {
        if (n && n.tagName != 'BODY') {
            d = d || document.createElement('div');
            d.appendChild(n);
            d.innerHTML = ''
        }
    }
}() : function (n) {
    if (n && n.parentNode && n.tagName != 'BODY') {
        n.parentNode.removeChild(n)
    }
};
C22u = function (s) {
    var r = new RegExp("<.*?>|\r|\n", "gi");
    return function (s) {
        return s.replace(r, "")
    }
}();
var iBl8Y = function (URL, F60, m7Jt7, M868, T61, q7Qc, aB) {
    this.URL = URL;
    this.F60 = F60;
    this.s08 = T61;
    this._0vSO = q7Qc;
    this.aB = aB;
    this.m7Jt7 = m7Jt7;
    this.M868 = M868
};
iBl8Y.prototype.PYl = function () {
    var r73 = document.getElementById("scriptTemp");
    if (r73) {
        _removeNode(r73)
    }
    var s = document.createElement("script");
    s.language = "javascript";
    s.type = "text/javascript";
    s.id = (this.M868 && this.M868 == true) ? "Temp" + Math.random() : "scriptTemp";
    s.src = (this.m7Jt7 && this.m7Jt7 == true) ? this.URL + "?" + Math.random() : this.URL;
    var Gww = this.F60 ? (this.F60) : parseInt;
    var id = s.id, KO38 = this;
    var k9n80 = this.s08;
    var mx$p = this._0vSO;
    var aB = typeof this.aB == "undefined" || !this.aB ? [] : this.aB;
    s.onload = s.onreadystatechange = function () {
        if (typeof ActiveXObject != "undefined") {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                if (typeof Gww == "function") {
                    aB.push(s.id);
                    Gww.apply(k9n80, aB)
                }
                KO38.V4q(id);
                s.onerror = null;
                s.onload = null;
                s.onreadystatechange = null
            }
        } else {
            if (typeof Gww == "function") {
                aB.push(s.id);
                Gww.apply(k9n80, aB)
            }
            KO38.V4q(id);
            s.onerror = null;
            s.onload = null;
            s.onreadystatechange = null
        }
    };
    s.onerror = function () {
        if (s && s.parentNode)s.parentNode.removeChild(s);
        if (typeof mx$p == "function") {
            aB.push(s.id);
            mx$p.apply(k9n80, aB)
        }
        KO38.V4q(id);
        s.onerror = null;
        s.onload = null;
        s.onreadystatechange = null
    };
    document.body.insertBefore(s, document.body.firstChild)
};
iBl8Y.prototype.V4q = function (id) {
    var Y3TC = document.getElementById(id);
    Y3TC && document.body.removeChild(Y3TC)
};
var YK2b = function () {
    if (K6_)return document.documentElement.scrollTop; else return document.body.scrollTop
};
var O4sk = function () {
    if (K6_)return document.documentElement.scrollLeft; else return document.body.scrollLeft
};
var sC = function (x, y, xu) {
    document.getElementById("myalert").style.top = (parseInt(y) - 60 + YK2b()) + "px";
    document.getElementById("myalert").style.left = (parseInt(x) - 100 + O4sk()) + "px";
    var xs = (en == 1) ? "Close" : tX("%u5175%uE760");
    document.getElementById("myalert").innerHTML = '<table width="196px" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #0E347F;"><tr><td height="100px" align="center" valign="middle" bgcolor="#FFFFFF"><table width="167px" height="79px" border="0" cellpadding="0" cellspacing="0"><tr><td height="55px" align="center" valign="middle" style="font-size: 12px;color: #0065AD;">' + xu + '</td></tr><tr><td height="24px" align="center" valign="middle"><input type="button" value="' + xs + '" onClick="document.getElementById(\'myalert\').style.display = \'none\'"onMouseOver="style.background=\'#DEE7EF\';style.cursor=\'hand\';style.cursor=\'pointer\'"onMouseOut="this.style.background=\'FDFAF3\'" style="font-size: 9pt; border: 1px solid #4A799C;background-color: #FDFAF3"></td></tr></table></td></tr></table>';
    document.getElementById("myalert").style.display = ""
};
var gP = function (xu) {
    if (gQ)sC(300, 100, xu)
};
var S71 = new RegExp("<(?:!(?:--[\\s\\S]*?--\\s*)?(>)\\s*|(?:script|style|SCRIPT|STYLE)[\\s\\S]*?<\\/(?:script|style|SCRIPT|STYLE)>)", "gi");
var t84 = new RegExp("[\\r\\n]", "gi");
var pX7n = function (html, i02) {
    if (typeof i02 != "boolean")i02 = false;
    if (typeof html == "string" && html) {
        var s = html.replace(S71, "");
        if (i02)s = s.replace(t84, "");
        return s
    } else {
        return html
    }
};
var r5E = null;
var K1DW7 = function (s) {
    var size = {fN4l1: 0, k6p: 0, vN7N6: 0, ch: 0};
    if (typeof s == "string" && s && maplet && maplet.panel) {
        if (!r5E) {
            r5E = document.createElement("DIV");
            with (r5E.style) {
                position = "absolute";
                left = -Number.MAX_VALUE + "px";
                top = -Number.MAX_VALUE + "px"
            }
            maplet.sF.div.appendChild(r5E)
        }
        r5E.innerHTML = s;
        size.fN4l1 = r5E.offsetWidth;
        size.k6p = r5E.offsetHeight;
        size.vN7N6 = r5E.clientWidth;
        size.ch = r5E.clientHeight;
        r5E.innerHTML = ""
    }
    return size
};
var _55 = function (wq2p, rect) {
    function Sq84N(x, y, gU58, h367, De1D, J20) {
        var c = 0;
        if (y > J20)c |= $oSi1; else if (y < h367)c |= e1$N;
        if (x > De1D)c |= JsE34; else if (x < gU58)c |= e3S19;
        return c
    };
    var x1 = wq2p.HxR.x, N4O = wq2p.HxR.y, x2 = wq2p.$63.x, xWq = wq2p.$63.y;
    var gU58 = rect.min.x, h367 = rect.min.y, De1D = rect.max.x, J20 = rect.max.y;
    var G47_0, _9N5, N37, KYd70 = 0;
    var accept = false, ln = false;
    G47_0 = Sq84N(x1, N4O, gU58, h367, De1D, J20);
    _9N5 = Sq84N(x2, xWq, gU58, h367, De1D, J20);
    do {
        if ((G47_0 | _9N5) == 0) {
            accept = true;
            ln = true
        } else if ((G47_0 & _9N5) > 0) {
            ln = true
        } else {
            var x = 0, y = 0;
            N37 = G47_0 != 0 ? G47_0 : _9N5;
            if ((N37 & $oSi1) > 0) {
                x = x1 + (x2 - x1) * (J20 - N4O) / (xWq - N4O);
                y = J20
            } else if ((N37 & e1$N) > 0) {
                x = x1 + (x2 - x1) * (h367 - N4O) / (xWq - N4O);
                y = h367
            } else if ((N37 & JsE34) > 0) {
                y = N4O + (xWq - N4O) * (De1D - x1) / (x2 - x1);
                x = De1D
            } else if ((N37 & e3S19) > 0) {
                y = N4O + (xWq - N4O) * (gU58 - x1) / (x2 - x1);
                x = gU58
            }
            if (N37 == G47_0) {
                x1 = x;
                N4O = y;
                G47_0 = Sq84N(x1, N4O, gU58, h367, De1D, J20)
            } else {
                x2 = x;
                xWq = y;
                _9N5 = Sq84N(x2, xWq, gU58, h367, De1D, J20)
            }
        }
        KYd70++
    } while (ln != true && KYd70 < 5000);
    if (accept) {
        wq2p.HxR.x = Math.floor(x1);
        wq2p.HxR.y = Math.floor(N4O);
        wq2p.$63.x = Math.floor(x2);
        wq2p.$63.y = Math.floor(xWq)
    }
    return accept
};
var JsE34 = 2;
var $oSi1 = 8;
var e1$N = 4;
var e3S19 = 1;
var P3g9B = 6;
function R2K70(wq2p) {
    var i = 0;
    var t7eW4 = [];
    var kcj07 = wq2p.length;
    if (kcj07 <= 0)return t7eW4;
    while (i < kcj07) {
        var b = 0;
        var shift = 0;
        var sIp = 0;
        var X0642 = P3g9B;
        do {
            b = (wq2p.charCodeAt(i++)) - 63;
            var g5_57 = (((b >> 1) ^ (X0642++)) & 0x1f);
            sIp |= g5_57 << shift;
            shift += 5
        } while ((b & 0x1) == 0);
        sIp = ((sIp & 0x01) == 0x01) ? ~(sIp >> 1) : (sIp >> 1);
        t7eW4.push(sIp)
    }
    return t7eW4
};
function Am883(x1, N4O, x2, xWq) {
    var tan = Math.atan((xWq - N4O) / (x2 - x1));
    var $y6 = 180 / Math.PI * tan;
    if (x1 <= x2 && N4O >= xWq)$y6 = $y6 + 90; else if (x1 <= x2 && N4O < xWq)$y6 = $y6 + 90; else if (x1 > x2 && N4O <= xWq)$y6 = 90 + $y6 + 180; else if (x1 > x2 && N4O > xWq)$y6 = $y6 + 270;
    return $y6
};
function _removeArrayItem(J_$38, b5$, F161P) {
    if (!_xY34(J_$38))return;
    var e9NB, t4b = J_$38.length;
    b5$ = b5$ < 0 ? b5$ - 0 + t4b : b5$;
    F161P = F161P < 0 ? F161P - 0 + t4b : F161P;
    if (F161P < b5$ || b5$ >= t4b || F161P >= t4b)return;
    e9NB = J_$38.slice((F161P || b5$) + 1 || J_$38.length);
    J_$38.length = b5$ < 0 ? J_$38.length + b5$ : b5$;
    return J_$38.push.apply(J_$38, e9NB)
};
function t892(uy) {
    if (typeof uy == "object") {
        for (var i in uy) {
            uy[i] = null;
            delete uy[i]
        }
    }
    uy = null
};
var _8y63 = function (F$1) {
    if (typeof F$1 === 'number') {
        return Math.round(F$1)
    }
    return F$1
};
var cq = {pu: {}, vp: function (li) {
    return this.pu[li] || function (pu, xT) {
        var v6;
        if (xT.indexOf(",") == -1) {
            var pk = -1;
            var fE = 0;
            var ub = '';
            var fH = '';
            if (xT != null && parseInt(xT.charAt(0), 36) >= 33) {
                fH = xT.charAt(0);
                xT = xT.substring(1)
            }
            for (var i = 0; i < (xT.length - (c75 ? 1 : 0)); i++) {
                var n8 = parseInt(xT.charAt(i), 36) - 10;
                if (n8 >= 17)n8 = n8 - 7;
                ub += (n8).toString(36);
                if (n8 > fE) {
                    pk = i;
                    fE = n8
                }
            }
            var n9 = parseInt(ub.substring(0, pk), 16);
            var n0 = parseInt(ub.substring(pk + 1), 16);
            if ("X" == fH) {
                n9 = -n9
            }
            if ("Y" == fH) {
                n0 = -n0
            }
            v6 = new Array();
            v6[0] = (n9 + n0 - parseInt(strLicenseKey)) / 2;
            v6[1] = (n0 - v6[0]) / 100000.0;
            v6[0] /= 100000.0;
            if (v6[0] > 180)v6[0] -= 360;
            pu[xT] = v6;
            return v6
        } else {
            v6 = y922(xT);
            pu[xT] = v6;
            return v6
        }
    }(this.pu, li)
}, zn: function (li, lf, $Gd) {
    if (typeof $Gd != "boolean")$Gd = false;
    if (typeof li != "undefined" && typeof lf != "undefined") {
        this.lf = parseFloat(lf);
        this.li = parseFloat(li)
    }
    if (apiType == 1 && !$Gd) {
        return Le00D(this.li + "," + this.lf).join(",")
    } else {
        var v6 = '';
        var uh = parseInt(parseFloat(Math.max(-90, Math.min(90, this.lf))) * 100000);
        var uj = parseInt(parseFloat((this.li < 0) ? (this.li + 360) : this.li) * 100000);
        var pl = uj - uh + parseInt(strLicenseKey);
        var pm = uj + uh;
        if (pl < 0) {
            v6 = 'X';
            pl = -pl
        }
        if (pm < 0) {
            v6 = 'Y';
            pm = -pm
        }
        var ph = (pl).toString(16);
        var pi = (pm).toString(16);
        for (var i = 0; i < ph.length; i++) {
            var qv = parseInt(ph.charAt(i), 16);
            v6 += (((qv >= 10) ? (qv + 7) : qv) + 10).toString(36)
        }
        v6 += 'z';
        for (var qC = 0; qC < pi.length; qC++) {
            var F$DD = parseInt(pi.charAt(qC), 16);
            v6 += (((F$DD >= 10) ? (F$DD + 7) : F$DD) + 10).toString(36)
        }
        if (c75) {
            v6 += v6.charAt(c75)
        }
        return v6.toUpperCase()
    }
}};
var xE = function (xj) {
    var c = '';
    for (var i = 0; i < xj.length; i++) {
        var zh = xj.charCodeAt(i).toString(36).toUpperCase();
        if (zh.length <= 1) {
            zh = "0" + zh
        }
        c += zh
    }
    return c
};
var sdc = function (xj) {
    var c = '';
    for (var i = 0; i < xj.length; i += 2) {
        var zh = xj.substring(i, i + 2);
        c += String.fromCharCode(parseInt(zh, 36))
    }
    return c
};
var tX = function (xj) {
    xj = unescape(xj);
    var c = String.fromCharCode(xj.charCodeAt(0) - xj.length);
    for (var i = 1; i < xj.length; i++) {
        c += String.fromCharCode(xj.charCodeAt(i) - c.charCodeAt(i - 1))
    }
    return c
};
function Le00D(kfP) {
    var x60 = kfP.split(",");
    var x = parseFloat(x60[0]) * 100000 % 36000000;
    var y = parseFloat(x60[1]) * 100000 % 36000000;
    var J2038 = parseInt(Rh3v(x, y) + x);
    var OBU5y = parseInt(V6s43(x, y) + y);
    return [J2038 / 100000.0, OBU5y / 100000.0]
};
function y922(kfP) {
    var x60 = kfP.split(",");
    var x = parseFloat(x60[0]) * 100000 % 36000000;
    var y = parseFloat(x60[1]) * 100000 % 36000000;
    var tYg = parseInt(-fen(x, y) + x);
    var VE0P = parseInt(-t97(x, y) + y);
    tYg = parseInt(-fen(tYg, VE0P) + x + ((x > 0) ? 1 : -1));
    VE0P = parseInt(-t97(tYg, VE0P) + y + ((y > 0) ? 1 : -1));
    return [tYg / 100000.0, VE0P / 100000.0]
};
function Rh3v(x, y) {
    return Gg3U(x, y)
};
function V6s43(x, y) {
    return Jq79n(x, y)
};
function fen(x, y) {
    return Gg3U(x, y)
};
function t97(x, y) {
    return Jq79n(x, y)
};
function Gg3U(x, y) {
    return yK8(bj13(q37(y, x), FYVL(x, y)), bj13(gskag(x, y), $HG4(y, x)))
};
function Jq79n(x, y) {
    return yK8(bj13(gskag(y, x), FYVL(x, y)), bj13(q37(x, y), $HG4(y, x)))
};
function bj13(x, y) {
    return x * y
};
function yK8(x, y) {
    return x + y
};
function q37(x, y) {
    return Math.cos(x / 100000)
};
function gskag(x, y) {
    return Math.sin(x / 100000)
};
function $HG4(x, y) {
    return x / 9000
};
function FYVL(x, y) {
    return x / 18000
};
var fD = function (name, left, top, width, height, visible, zindex, content, container) {
    this.n7 = content;
    this.container = container;
    this.name = name;
    this.qe = 1;
    this.hide = function () {
        this.style.visibility = "hidden"
    };
    this.show = function () {
        this.style.visibility = "visible"
    };
    this.setVisible = function (visible) {
        if (this.style.display != (visible ? "" : "none"))this.style.display = visible ? "" : "none"
    };
    this.moveTo = function (x, y) {
        eval(document.body.scrollTop);
        this.style.left = parseInt(x) + "px";
        this.style.top = parseInt(y) + "px"
    };
    this.resize = function (w, h) {
        if (parseInt(w) >= 0 && parseInt(h) >= 0) {
            this.style.width = parseInt(w) + "px";
            this.style.height = parseInt(h) + "px"
        }
    };
    this.nz = function () {
        return parseInt(this.style.height)
    };
    this.nH = function () {
        return parseInt(this.style.width)
    };
    this.qn = function (x, y) {
        return(x > parseInt(this.style.left) && x < (parseInt(this.style.left) + parseInt(this.style.width)) && y > parseInt(this.style.top) && y < (parseInt(this.style.top) + parseInt(this.style.height)))
    };
    this.appendChild = function (fK) {
        try {
            this.div.appendChild(fK)
        } catch (e) {
        }
    };
    this.removeChild = function (fK) {
        try {
            _removeNode(fK)
        } catch (e) {
        }
    };
    this.clear = function () {
        this.div.innerHTML = ""
    };
    this.clean = this.clear;
    this.getName = function () {
        return this.name
    };
    try {
        this.div = gq(this.name, left, top, width, height, visible, zindex, content);
        this.div.unselectable = "on";
        if (this.container)this.container.appendChild(this.div);
        this.style = this.div.style;
        this.graphics = (px) ? new sN() : new jsGraphics(this.name)
    } catch (e) {
    }
};
var MBound = function (tj, tl, s4, s6, tp, s0) {
    this.s4 = s4;
    this.tj = tj;
    this.s6 = s6;
    this.tl = tl;
    this.s0 = (typeof s0 == "undefined") ? MAX_ZOOM_LEVEL : parseInt(s0);
    this.tp = (typeof tp == "undefined") ? MIN_ZOOM_LEVEL : parseInt(tp);
    this.qn = function (lat, lon) {
        if (this.s4 < lat || this.tj > lat)return false;
        var g2 = (lon - this.tl) % 360;
        if (g2 < 0)g2 += 360;
        return((this.s6 - this.tl) >= g2)
    }
};
var MBrush = function (xt, x5, x6, cr, xn, yc, xo, fh, dmstyle) {
    this.color = (typeof xt == "undefined") ? "#FF0000" : xt;
    this.stroke = (typeof x5 == "undefined") ? 5 : parseInt(x5);
    this.style = (typeof x6 == "undefined") ? 0 : parseInt(x6);
    this.fill = (typeof cr == "undefined") ? false : cr;
    this.bgcolor = (typeof xn == "undefined") ? this.color : xn;
    this.transparency = (typeof yc == "undefined") ? transparencyLevel : parseInt(yc);
    this.bgtransparency = (typeof xo == "undefined") ? transparencyLevel / 2 : parseInt(xo);
    this.arrow = (typeof fh == "undefined") ? bArrow : fh;
    this.dmstyle = (typeof dmstyle == "undefined") ? {color: "#0000ff", size: this.stroke * 4, transparency: this.transparency, strokeWidth: 1, strokeColor: "#FFFFFF", strokeTransparency: 100} : dmstyle;
    this.overlap = {enable: false, stroke: null, color: "white", transparency: transparencyLevel};
    this.toString = function () {
        return 'com.mapbar.maplet.MBrush'
    }
};
var MPoint = function (xQ, E9c, encrypt, levelGroup) {
    this.pid = null;
    this.lat = null;
    this.lon = null;
    this.maplet = null;
    var jhB31 = null;
    var v31g = null;
    this.mapX = null;
    this.mapY = null;
    this.__RH = null;
    this.encrypt = (typeof encrypt == "boolean" ? encrypt : true);
    this.levelGroup = (typeof levelGroup == "number" && levelGroup >= 0 && levelGroup <= 3 ? levelGroup : 3);
    if (typeof xQ != "undefined" || typeof E9c != "undefined") {
        if (_xY34(xQ))xQ = xQ.join(",");
        if (typeof xQ == "string" && xQ.indexOf(",") != -1) {
            if (this.encrypt) {
                this.pid = xQ;
                this.lon = parseFloat(xQ.split(",")[0]);
                this.lat = parseFloat(xQ.split(",")[1])
            } else {
                v31g = parseFloat(xQ.split(",")[0]);
                jhB31 = parseFloat(xQ.split(",")[1])
            }
        } else if (!isNaN(parseFloat(xQ)) && !isNaN(parseFloat(E9c))) {
            if (this.encrypt) {
                this.pid = xQ + "," + E9c;
                this.lon = parseFloat(xQ);
                this.lat = parseFloat(E9c)
            } else {
                v31g = xQ;
                jhB31 = E9c
            }
        } else {
            this.pid = (typeof getPid == "undefined") ? xQ : getPid(xQ);
            if (apiType == 1) {
                var TyK14 = cq.vp(this.pid);
                v31g = TyK14[0];
                jhB31 = TyK14[1];
                this.lon = parseFloat(this.pid.split(",")[0]);
                this.lat = parseFloat(this.pid.split(",")[1])
            }
        }
        if (this.encrypt && v31g == null && jhB31 == null) {
            var r = cq.vp(this.pid);
            v31g = r[0];
            jhB31 = r[1]
        }
    }
    ;
    this.inLevelRange = function (level) {
        if (level >= 0 && level <= 3 && this.levelGroup == 3)return true; else if (level >= 4 && level <= 7 && this.levelGroup >= 2)return true; else if (level >= 8 && level <= 11 && this.levelGroup >= 1)return true; else if (level >= 12 && level <= 18 && this.levelGroup >= 0)return true; else return false
    };
    this.getPid = function () {
        if (!this.encrypt && !this.pid) {
            this.pid = cq.zn(v31g, jhB31);
            if (apiType == 1) {
                this.lon = this.pid.split(",")[0];
                this.lat = this.pid.split(",")[1]
            } else if (this.lon != null) {
                var r = Le00D(v31g + "," + jhB31);
                this.lon = r[0];
                this.lat = r[1]
            }
        }
        return this.pid
    };
    this.setMapCoords = function (x, y) {
        this.mapX = x;
        this.mapY = y;
        v31g = this.maplet.zp(x, y);
        jhB31 = this.maplet.zo(x, y);
        this.pid = cq.zn(v31g, jhB31);
        if (apiType == 1) {
            this.lon = this.pid.split(",")[0];
            this.lat = this.pid.split(",")[1]
        } else if (this.lon != null) {
            var r = Le00D(v31g + "," + jhB31);
            this.lon = r[0];
            this.lat = r[1]
        }
    };
    this.recalcScreenCoords = function () {
        this.mapX = this.maplet.zl(v31g, jhB31);
        this.mapY = this.maplet.zm(jhB31, v31g)
    };
    this._galn = function () {
        return v31g
    };
    this.ryu = function (v) {
        v31g = v
    };
    this._galt = function () {
        return jhB31
    };
    this.P9O1 = function (v) {
        jhB31 = v
    };
    this.clone = function () {
        var pt = new MPoint(undefined, undefined, this.encrypt, this.levelGroup);
        pt.pid = this.pid;
        pt.lat = this.lat;
        pt.lon = this.lon;
        pt.maplet = this.maplet;
        pt.ryu(this._galn());
        pt.P9O1(this._galt());
        pt.mapX = this.mapX;
        pt.mapY = this.mapY;
        return pt
    };
    this._da68 = function () {
        return!isNaN(v31g) && !isNaN(jhB31)
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.recalcScreenCoords()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPoint'
    }
};
var f1 = {fx: [], uo: 100, nk: function (img, src, w, h) {
    if (typeof img != "object" || !img)return;
    this.fx[this.fx.length] = new Image();
    var pn = this.fx.length - 1;
    this.fx[pn].q9 = img;
    img.style.filter = "alpha(opacity=" + this.uo + ");";
    img.style.MozOpacity = (this.uo / 100.0);
    img.style.opacity = (this.uo / 100.0);
    img.style.qK = (this.uo / 100);
    if (typeof w != "undefined") {
        img.width = parseInt(w) + "px";
        this.fx[pn].width = parseInt(w) + "px"
    }
    if (typeof h != "undefined") {
        img.height = parseInt(h) + "px";
        this.fx[pn].height = parseInt(h) + "px"
    }
    this.fx[pn].container = this;
    this.fx[pn].pn = pn;
    this.fx[pn].ln = "0";
    this.fx[pn].onload = function () {
        if (typeof w != "undefined") {
            this.width = parseInt(w) + "px"
        }
        if (typeof h != "undefined") {
            this.height = parseInt(h) + "px"
        }
        this.q9.src = this.src;
        this.q9.style.filter = null;
        this.q9.style.MozOpacity = 1;
        this.q9.style.opacity = 1;
        this.q9.style.qK = 1;
        if (typeof w != "undefined" && !rs) {
            this.q9.width = parseInt(w) + "px";
            this.q9.style.width = parseInt(w) + "px"
        }
        if (typeof h != "undefined" && !rs) {
            this.q9.height = parseInt(h) + "px";
            this.q9.style.height = parseInt(h) + "px"
        }
        this.q9.setAttribute("done", "1");
        this.ln = "1";
        this.container[this.pn] = null;
        this.container.clearCache();
        this.container = null;
        this.q9 = null;
        this.onload = null;
        this.onerror = null
    };
    this.fx[pn].onerror = function () {
        if (rs)return false;
        if (typeof w != "undefined") {
            this.width = parseInt(w) + "px"
        }
        if (typeof h != "undefined") {
            this.height = parseInt(h) + "px"
        }
        this.q9.style.filter = null;
        if (typeof w != "undefined" && !rs) {
            this.q9.width = parseInt(w) + "px"
        }
        if (typeof h != "undefined" && !rs) {
            this.q9.height = parseInt(h) + "px"
        }
        this.ln = "1";
        this.q9.width = "300";
        this.q9.height = "300";
        this.q9.style.width = "300";
        this.q9.style.height = "300";
        this.q9.src = sX;
        this.q9.style.backgroundColor = "#ebeae8";
        this.q9.setAttribute("done", "1");
        this.container[this.pn] = null;
        this.container.clearCache();
        this.container = null;
        this.q9 = null;
        this.onload = null;
        this.onerror = null
    };
    this.fx[pn].src = src
}, clearCache: function () {
    var cp = 1;
    for (var i = 0; i < this.fx.length; i++) {
        if (this.fx[i] != null && this.fx[i].ln == "0") {
            cp = 0
        } else if (this.fx[i] != null) {
            this.fx[i].q9 = null;
            this.fx[i].container = null;
            this.fx[i].onload = null;
            this.fx[i].onerror = null;
            delete(this.fx[i])
        }
    }
    if (cp) {
        for (var qC = 0; i < this.fx.length; qC++) {
            if (this.fx[qC] != null) {
                this.fx[qC].q9 = null;
                this.fx[qC].container = null;
                this.fx[qC].onload = null;
                this.fx[qC].onerror = null;
                delete(this.fx[qC])
            }
        }
        this.fx.length = 0;
        MEvent.trigger(this, "clean")
    }
}};
var gb = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        var content = [];
        n084(content, "ctrlPan", 0, 0, 50, 49, -25, 0, "_pan_map");
        n084(content, "ctrlZoomOut", 14, 54, 24, 24, 0, 0, "_zo_map");
        var d94M = L4p70();
        n084(content, "ctrlRuler", 14, 78, 24, d94M, 0, -24);
        n084(content, "ctrlZoomIn", 14, 77 + d94M, 24, 27, 0, -181, "_zi_map");
        n084(content, "ctrlSlider", 0, 0, 17, 7, -25, -51);
        content.push("<map name=\"_pan_map\" id=\"_pan_map\">");
        content.push("<area id=\"_fb_n_ctrl_imap\" shape=\"poly\" title=\"" + xN[1] + "\" coords=\"35,6,39,3,42,2,47,1,51,1,56,2,61,4,63,6,63,7,55,15,50,13,48,13,43,15,35,7\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,2);\"/>");
        content.push("<area id=\"_fb_s_ctrl_imap\" shape=\"poly\" title=\"" + xN[3] + "\" coords=\"64,38,55,29,50,31,48,31,43,29,34,38,34,39,37,42,42,44,47,45,51,45,56,44,61,42,64,39\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,4);\"/>");
        content.push("<area id=\"_fb_w_ctrl_imap\" shape=\"poly\" title=\"" + xN[0] + "\" coords=\"34,8,42,16,40,21,40,23,42,28,33,37,32,37,30,35,28,30,27,25,27,21,28,16,30,11,33,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,1);\"/>");
        content.push("<area id=\"_fb_e_ctrl_imap\" shape=\"poly\" title=\"" + xN[2] + "\" coords=\"64,8,56,16,58,21,58,23,56,28,65,37,66,37,68,35,70,30,71,25,71,21,70,16,68,11,65,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,3);\" />");
        content.push("<area id=\"_fb_m_ctrl_imap\" shape=\"circle\" title=\"" + xN[4] + "\" coords=\"48,22,8\" onclick=\"PerformControl(event, this,7);\" onFocus=\"this.blur()\" />");
        content.push("</map>");
        content.push("<map name=\"_zo_map\" id=\"_zo_map\">");
        content.push("<area id=\"_fb_zo_ctrl_imap\" shape=\"poly\" title=\"" + xN[6] + "\" coords=\"8,0,5,1,1,5,0,8,0,21,20,21,20,8,19,5,15,1,12,0\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,5);\" />");
        content.push("</map>");
        content.push("<map name=\"_zi_map\" id=\"_zi_map\">");
        content.push("<area id=\"_fb_zi_ctrl_imap\" shape=\"poly\" title=\"" + xN[7] + "\" coords=\"0,183,0,196,1,199,5,203,8,204,12,204,15,203,19,199,20,196,20,183\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,6);\" />");
        content.push("</map>");
        content.push("<div id=\"_fb_ctrl_leveltip\" style=\"position:absolute;left:0px;top:0px;width:" + gb.p16V + "px;height:121px;display:none;\">");
        $xgF(content, "_fb_ctrl_lt_s", gb.w79[0], 0, 0, gb.p16V, gb.sv726, -26, -65, 13);
        $xgF(content, "_fb_ctrl_lt_c", gb.w79[1], 0, 40, gb.p16V, gb.sv726, -26, -65, 8);
        $xgF(content, "_fb_ctrl_lt_p", gb.w79[2], 0, 72, gb.p16V, gb.sv726, -26, -65, 4);
        $xgF(content, "_fb_ctrl_lt_cr", gb.w79[3], 0, 104, gb.p16V, gb.sv726, -26, -65, 0);
        content.push("</div>");
        this.dom = new fD("LayerControl", _8J, VI8F, 0, 0, true, 3, content.join(""), this.maplet.panel);
        MHLU5 = aa("ctrlPan");
        X3w = aa("ctrlZoomOut");
        FXbn = aa("ctrlZoomIn");
        u66ac = aa("ctrlRuler");
        mK5ql = aa("ctrlSlider");
        WYX = aa("_fb_ctrl_leveltip");
        gy61O = aa("_fb_ctrl_lt_s");
        $62 = aa("_fb_ctrl_lt_c");
        _Ibe = aa("_fb_ctrl_lt_p");
        I94C6 = aa("_fb_ctrl_lt_cr");
        mK5ql.firstChild.id = "ctrlSliderImg";
        aa("_pan_map").q9 = this.maplet;
        aa("_zo_map").q9 = this.maplet;
        aa("_zi_map").q9 = this.maplet;
        ir0["_ctlSlider_mousedown"] = MEvent.bindDom(mK5ql, "mousedown", this, I5kgL);
        ir0["document_mousemove"] = MEvent.bindDom(document, "mousemove", this, U9X);
        ir0["document_mouseup"] = MEvent.bindDom(document, "mouseup", this, O6480);
        ir0["_ctlRuler_click"] = MEvent.bindDom(u66ac, "click", this, Uq$l);
        ir0["_ctlRuler_mouseover"] = MEvent.bindDom(u66ac, "mouseover", this, et32$);
        ir0["_ctlRuler_mouseout"] = MEvent.bindDom(u66ac, "mouseout", this, D2138);
        ir0["_ctlRuler_mouseout"] = MEvent.bindDom(u66ac, "mousedown", this, ix43);
        ir0["_ctlRuler_mouseout"] = MEvent.bindDom(u66ac, "mouseup", this, M4GLU);
        ir0["_zo_map_mouseover"] = MEvent.bindDom(aa("_zo_map"), "mouseover", this, et32$);
        ir0["_zo_map_mouseout"] = MEvent.bindDom(aa("_zo_map"), "mouseout", this, D2138);
        ir0["_zi_map_mouseover"] = MEvent.bindDom(aa("_zi_map"), "mouseover", this, et32$);
        ir0["_zi_map_mouseout"] = MEvent.bindDom(aa("_zi_map"), "mouseout", this, D2138);
        ir0["_ctlSlider_mouseover"] = MEvent.bindDom(mK5ql, "mouseover", this, et32$);
        ir0["_ctlSlider_mouseout"] = MEvent.bindDom(mK5ql, "mouseout", this, D2138);
        ir0["_ltStreet_click"] = MEvent.bindDom(gy61O, "click", this, H28);
        ir0["_ltCity_click"] = MEvent.bindDom($62, "click", this, H28);
        ir0["_ltProvince_click"] = MEvent.bindDom(_Ibe, "click", this, H28);
        ir0["_ltCountry_click"] = MEvent.bindDom(I94C6, "click", this, H28);
        ir0["_ltStreet_mouseup"] = MEvent.bindDom(gy61O, "mouseup", this, w7W72);
        ir0["_ltCity_mouseup"] = MEvent.bindDom($62, "mouseup", this, w7W72);
        ir0["_ltProvince_mouseup"] = MEvent.bindDom(_Ibe, "mouseup", this, w7W72);
        ir0["_ltCountry_mouseup"] = MEvent.bindDom(I94C6, "mouseup", this, w7W72);
        ir0["_ltStreet_mousedown"] = MEvent.bindDom(gy61O, "mousedown", this, l3v6r);
        ir0["_ltCity_mousedown"] = MEvent.bindDom($62, "mousedown", this, l3v6r);
        ir0["_ltProvince_mousedown"] = MEvent.bindDom(_Ibe, "mousedown", this, l3v6r);
        ir0["_ltCountry_mousedown"] = MEvent.bindDom(I94C6, "mousedown", this, l3v6r);
        ir0["_zo_map_mouseup"] = MEvent.bindDom(aa("_zo_map"), "mouseup", this, w7W72);
        ir0["_zi_map_mouseup"] = MEvent.bindDom(aa("_zi_map"), "mouseup", this, w7W72);
        ir0["_fb_n_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_n_ctrl_imap"), "mouseup", this, w7W72);
        ir0["_fb_s_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_s_ctrl_imap"), "mouseup", this, w7W72);
        ir0["_fb_w_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_w_ctrl_imap"), "mouseup", this, w7W72);
        ir0["_fb_e_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_e_ctrl_imap"), "mouseup", this, w7W72);
        ir0["_fb_m_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_m_ctrl_imap"), "mouseup", this, w7W72);
        J142_.apply(this)
    };
    var n084 = function (content, B7X29, DCOd9, O315, a8_, j$i3j, p1, p3, J119) {
        content.push("<div id=\"" + B7X29 + "\" style=\"position:absolute;left:" + DCOd9 + "px;top:" + O315 + "px;width:" + a8_ + "px;height:" + j$i3j + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        if (m9o43) {
            content.push("<img id=\"" + B7X29 + "_img\" src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + p1 + "px;top:" + p3 + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" " + (typeof J119 == "string" && J119 ? "usemap=\"#" + J119 + "\"" : "") + " galleryimg=\"no\" />")
        } else {
            content.push("<img id=\"" + B7X29 + "_img\" src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + p1 + "px;top:" + p3 + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" " + (typeof J119 == "string" && J119 ? "usemap=\"#" + J119 + "\"" : "") + " galleryimg=\"no\"/>")
        }
        content.push("</div>")
    };
    var $xgF = function (content, B7X29, text, DCOd9, O315, a8_, j$i3j, p1, p3, level) {
        content.push("<div id=\"" + B7X29 + "\" style=\"position:absolute;left:" + DCOd9 + "px;top:" + O315 + "px;width:" + a8_ + "px;height:" + j$i3j + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        content.push("<div id=\"" + B7X29 + "_text\" style=\"position:absolute;padding-left:16px;padding-top:1px;color:white;z-index:1;width:" + (K6_ || !px ? 35 : 45) + "px;text-align:center;font-size:12px;cursor:pointer;background-image:url('" + sX + "');\" _ml=\"" + level + "\">" + text + "</div>");
        if (m9o43) {
            content.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + p1 + "px;top:" + p3 + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        } else {
            content.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + p1 + "px;top:" + p3 + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        }
        content.push("</div>")
    };
    var L4p70 = function () {
        var hr1 = MAX_ZOOM_LEVEL - MIN_ZOOM_LEVEL + 1;
        return hr1 * gb.n7J + hr1 * gb.P9840 + gb.n7J - 1
    };
    var x8$X = function (AB) {
        AB = MAX_ZOOM_LEVEL - AB;
        return AB * gb.n7J + AB * gb.P9840 + u5iK().max.y + 3
    };
    var yj0 = function () {
        var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}, width: 0, height: 0};
        if (MHLU5) {
            r.width = Y32k(MHLU5.style.width, 0);
            r.height = Y32k(MHLU5.style.height, 0);
            r.min.x = Y32k(MHLU5.style.left, 0);
            r.min.y = Y32k(MHLU5.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var u5iK = function () {
        var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}, width: 0, height: 0};
        if (X3w) {
            r.width = Y32k(X3w.style.width, 0);
            r.height = Y32k(X3w.style.height, 0);
            r.min.x = Y32k(X3w.style.left, 0);
            r.min.y = Y32k(X3w.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var G0ES = function () {
        var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}, width: 0, height: 0};
        if (u66ac) {
            r.width = Y32k(u66ac.style.width, 0);
            r.height = Y32k(u66ac.style.height, 0);
            r.min.x = Y32k(u66ac.style.left, 0);
            r.min.y = Y32k(u66ac.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var $$Q4g = function () {
        var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}, width: 0, height: 0};
        if (FXbn) {
            r.width = Y32k(FXbn.style.width, 0);
            r.height = Y32k(FXbn.style.height, 0);
            r.min.x = Y32k(FXbn.style.left, 0);
            r.min.y = Y32k(FXbn.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var f32 = function () {
        var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}, width: 0, height: 0};
        if (WYX) {
            r.width = Y32k(WYX.style.width, 0);
            r.height = Y32k(WYX.style.height, 0);
            r.min.x = Y32k(WYX.style.left, 0) + _8J;
            r.min.y = Y32k(WYX.style.top, 0) + VI8F;
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var vMo$ = function () {
        var q1dYr = G0ES();
        Gi4.min = q1dYr.min.y + gb.n7J;
        Gi4.max = q1dYr.max.y - 1 - gb.n7J;
        fg0L.min = q1dYr.min.x;
        fg0L.max = q1dYr.max.x - 3
    };
    var ln$M = function () {
        with (this.options.location) {
            var rect = this.getRect();
            var M84Y = G0ES();
            if (type == Maplet.LEFT_TOP) {
                _8J = marginx;
                VI8F = marginy;
                NO80 = M84Y.max.x + 5
            } else {
                if (type == Maplet.LEFT_BOTTOM) {
                    _8J = marginx;
                    VI8F = this.maplet.height - marginy - rect.height;
                    NO80 = M84Y.max.x + 5
                } else if (type == Maplet.RIGHT_TOP) {
                    _8J = this.maplet.width - marginx - rect.width;
                    VI8F = marginy;
                    NO80 = M84Y.min.x - gb.p16V - 5
                } else if (type == Maplet.RIGHT_BOTTOM) {
                    _8J = this.maplet.width - marginx - rect.width;
                    VI8F = this.maplet.height - marginy - rect.height;
                    NO80 = M84Y.min.x - gb.p16V - 5
                }
            }
        }
        X$31o = G0ES().min.y - 2
    };
    this.setLocation = function (location, r47e) {
        location = location || {};
        if (typeof location.type != "number" && !(location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM || location.type == Maplet.RIGHT_TOP || location.type == Maplet.LEFT_BOTTOM))location.type = Maplet.LEFT_TOP;
        if (typeof location.o_ye8 != "number")location.marginx = 10;
        if (typeof location.Jk9Q3 != "number")location.marginy = 10;
        this.options.location = location;
        if (typeof r47e != "boolean")r47e = true;
        if (r47e)$01T2.apply(this)
    };
    this.setView = function (view, r47e) {
        view = view || {};
        if (typeof view.pan != "boolean")view.pan = true;
        if (typeof view.zoomout != "boolean")view.zoomout = true;
        if (typeof view.ruler != "boolean")view.ruler = true;
        if (typeof view.zoomin != "boolean")view.zoomin = true;
        this.options.view = view;
        if (typeof r47e != "boolean")r47e = true;
        if (r47e)J142_.apply(this, [r47e])
    };
    var I5kgL = function (e) {
        tM8(e);
        if (!X519 && (e.target == mK5ql || e.target == mK5ql.firstChild)) {
            vMo$.apply(this);
            X519 = true;
            this.maplet.$_T("move", mK5ql)
        } else {
            X519 = false
        }
        return X519
    };
    var U9X = function (e) {
        if (X519) {
            var currTop = e.clientY - this.maplet.offsetY - this.maplet.top - VI8F;
            if (currTop >= Gi4.min && currTop <= Gi4.max) {
                mK5ql.style.top = (currTop - 3) + "px";
                if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
                    var h = (this.isVisible(MHLU5) ? 0 : 49 + 10) + (this.isVisible(X3w) ? 0 : 24);
                    var AB = MAX_ZOOM_LEVEL - ((currTop + h) / (gb.n7J + gb.P9840) - 10);
                    this.maplet.AN(AB)
                }
                this.maplet.$_T("move", document.body)
            }
            if (!L940C && px) {
                document.body.setCapture();
                L940C = true
            }
        }
        return X519
    };
    var O6480 = function (e) {
        if (!X519)return false;
        tM8(e, !i079);
        if (X519) {
            var y = e.clientY - this.maplet.offsetY - this.maplet.top - VI8F;
            y = y < Gi4.min ? Gi4.min : y;
            y = y > Gi4.max ? Gi4.max : y;
            var h = (this.isVisible(MHLU5) ? 0 : 49 + 10) + (this.isVisible(X3w) ? 0 : 24);
            var AB = Math.ceil(MAX_ZOOM_LEVEL - ((y + h) / (gb.n7J + gb.P9840) - 10));
            if (this.maplet.AG == AB) {
                this.maplet.i2y(true);
                this.maplet.lA.setVisible(true);
                if (this.maplet.u_5)this.maplet.u_5.setVisible(true);
                this.update(AB)
            } else {
                this.maplet.setZoomLevel(parseInt(AB))
            }
            X519 = false;
            if (L940C) {
                document.body.releaseCapture();
                L940C = false;
                $V9$ = true;
                getTimeout(this, V_256, 700)
            }
            return true
        }
        this.maplet.$_T("default", document.body);
        this.maplet.$_T("default", mK5ql);
        return false
    };
    var Uq$l = function (e) {
        tM8(e);
        vMo$.apply(this);
        var e = e || window.event;
        var y = e.clientY - VI8F - this.maplet.offsetY - this.maplet.top;
        y = y < Gi4.min ? Gi4.min : y;
        y = y > Gi4.max ? Gi4.max : y;
        var h = (this.isVisible(MHLU5) ? 0 : 49 + 10) + (this.isVisible(X3w) ? 0 : 24);
        var AB = Math.ceil(MAX_ZOOM_LEVEL - ((y + h) / (gb.n7J + gb.P9840) - 10));
        if (this.maplet.AG != AB)this.maplet.setZoomLevel(parseInt(AB))
    };
    var ix43 = function (e) {
        tM8(e)
    };
    var M4GLU = function (e) {
        this.maplet.a6(e);
        O6480.apply(this, [e]);
        if (this.maplet.sS != ts.X420D && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv)tM8(e)
    };
    var et32$ = function (e) {
        tM8(e);
        if (!this.isVisible(u66ac))return;
        $V9$ = false;
        if (!this.isVisible(WYX)) {
            this.fq4(true)
        }
    };
    var D2138 = function (e) {
        tM8(e);
        $V9$ = true;
        getTimeout(this, V_256, 700)
    };
    var H28 = function (e) {
        tM8(e);
        var level = e.target.getAttribute("_ml");
        if (level) {
            this.maplet.setZoomLevel(Y32k(level))
        }
    };
    var w7W72 = function (e) {
        this.maplet.a6(e);
        this.maplet.overview.l1(e);
        O6480.apply(this, [e]);
        tM8(e)
    };
    var l3v6r = function (e) {
        tM8(e)
    };
    var V_256 = function () {
        if (!$V9$)return;
        var loop = false;
        if (this.isVisible(WYX)) {
            var r = f32();
            var pt = {x: this.maplet.moveX, y: this.maplet.moveY};
            var egd = {min: {x: r.min.x, y: r.min.y}, max: {x: r.max.x, y: r.max.y}};
            if (_isInsideRect(pt, egd))loop = true
        }
        if (X519)loop = true;
        if (loop) {
            getTimeout(this, V_256, 700);
            return
        }
        this.fq4(false)
    };
    this.update = function (AB) {
        if (this.options && this.options.location) {
            ln$M.apply(this);
            this.dom.style.left = _8J + "px";
            this.dom.style.top = VI8F + "px"
        }
        if (mK5ql && u66ac && this.isVisible(mK5ql) && this.isVisible(u66ac)) {
            with (mK5ql.style) {
                left = Y32k(u66ac.style.left, 0) + 2 + "px";
                top = x8$X(AB) + "px"
            }
        }
    };
    this.showCtlPan = function (visible, r47e, k8d4) {
        if (!MHLU5)return;
        if (typeof visible != "boolean")visible = true;
        if (this.isVisible(MHLU5) != visible) {
            if (visible) {
                MHLU5.style.height = "49px";
                X3w.style.left = "14px";
                u66ac.style.left = "14px";
                FXbn.style.left = "14px"
            } else {
                MHLU5.style.height = "0px";
                X3w.style.left = "0px";
                u66ac.style.left = "0px";
                FXbn.style.left = "0px"
            }
            setVisible.apply(this, [MHLU5, visible]);
            if (typeof k8d4 != "boolean")k8d4 = true;
            if (k8d4)this.options.view.pan = visible;
            if (typeof r47e != "boolean")r47e = true;
            if (r47e)$01T2.apply(this)
        }
    };
    this.showZOButton = function (visible, r47e, k8d4) {
        if (!X3w)return;
        if (typeof visible != "boolean")visible = true;
        if (this.isVisible(X3w) != visible) {
            if (visible) {
                if (!this.isVisible(u66ac)) {
                    X3w.style.height = "23px"
                } else {
                    X3w.style.height = "24px"
                }
            } else {
                X3w.style.height = "0px"
            }
            setVisible.apply(this, [X3w, visible]);
            if (typeof k8d4 != "boolean")k8d4 = true;
            if (k8d4)this.options.view.zoomout = visible;
            if (typeof r47e != "boolean")r47e = true;
            if (r47e)$01T2.apply(this)
        }
    };
    this.showCtlRuler = function (visible, r47e, k8d4) {
        if (!u66ac)return;
        if (typeof visible != "boolean")visible = true;
        if (this.isVisible(u66ac) != visible) {
            if (visible) {
                u66ac.style.height = L4p70() + "px";
                X3w.style.height = (Y32k(X3w.style.height, 0) + 1) + "px";
                FXbn.style.height = (Y32k(FXbn.style.height, 0) + 1) + "px";
                FXbn.firstChild.style.top = (Y32k(FXbn.firstChild.style.top, 0) + 2) + "px"
            } else {
                u66ac.style.height = "0px";
                X3w.style.height = Math.max((Y32k(X3w.style.height, 0) - 1), 0) + "px";
                FXbn.style.height = Math.max((Y32k(FXbn.style.height, 0) - 1), 0) + "px";
                FXbn.firstChild.style.top = (Y32k(FXbn.firstChild.style.top, 0) - 2) + "px"
            }
            setVisible.apply(this, [mK5ql, visible]);
            setVisible.apply(this, [u66ac, visible]);
            if (typeof k8d4 != "boolean")k8d4 = true;
            if (k8d4)this.options.view.ruler = visible;
            if (typeof r47e != "boolean")r47e = true;
            if (r47e)$01T2.apply(this)
        }
    };
    this.showZIButton = function (visible, r47e, k8d4) {
        if (!FXbn)return;
        if (typeof visible != "boolean")visible = true;
        if (this.isVisible(FXbn) != visible) {
            if (visible)FXbn.style.height = "24px"; else FXbn.style.height = "0px";
            setVisible.apply(this, [FXbn, visible]);
            if (typeof k8d4 != "boolean")k8d4 = true;
            if (k8d4)this.options.view.zoomin = visible;
            if (typeof r47e != "boolean")r47e = true;
            if (r47e)$01T2.apply(this)
        }
    };
    this.fq4 = function (visible) {
        if (!WYX)return;
        if (typeof visible != "boolean")visible = true;
        if (this.isVisible(WYX) != visible) {
            if (visible) {
                WYX.style.left = NO80 + "px";
                WYX.style.top = X$31o + "px";
                if (this.options.location.type == Maplet.LEFT_TOP || this.options.location.type == Maplet.LEFT_BOTTOM) {
                    gy61O.childNodes[1].style.top = $62.childNodes[1].style.top = _Ibe.childNodes[1].style.top = I94C6.childNodes[1].style.top = "-65px";
                    gy61O.childNodes[0].style.paddingLeft = $62.childNodes[0].style.paddingLeft = _Ibe.childNodes[0].style.paddingLeft = I94C6.childNodes[0].style.paddingLeft = "16px";
                    gy61O.childNodes[0].style.paddingRight = $62.childNodes[0].style.paddingRight = _Ibe.childNodes[0].style.paddingRight = I94C6.childNodes[0].style.paddingRight = "0px"
                } else {
                    gy61O.childNodes[1].style.top = $62.childNodes[1].style.top = _Ibe.childNodes[1].style.top = I94C6.childNodes[1].style.top = "-84px";
                    gy61O.childNodes[0].style.paddingLeft = $62.childNodes[0].style.paddingLeft = _Ibe.childNodes[0].style.paddingLeft = I94C6.childNodes[0].style.paddingLeft = "0px";
                    gy61O.childNodes[0].style.paddingRight = $62.childNodes[0].style.paddingRight = _Ibe.childNodes[0].style.paddingRight = I94C6.childNodes[0].style.paddingRight = "16px"
                }
                setVisible.apply(this, [I94C6, MIN_ZOOM_LEVEL <= 0]);
                setVisible.apply(this, [_Ibe, (4 >= MIN_ZOOM_LEVEL && 4 <= MAX_ZOOM_LEVEL)]);
                setVisible.apply(this, [$62, (8 >= MIN_ZOOM_LEVEL && 8 <= MAX_ZOOM_LEVEL)]);
                setVisible.apply(this, [gy61O, MAX_ZOOM_LEVEL >= 13]);
                if (!this.isVisible(gy61O)) {
                    var c = 13 - MAX_ZOOM_LEVEL;
                    WYX.style.top = X$31o - (c * gb.n7J + c * gb.P9840) + "px"
                } else if (MAX_ZOOM_LEVEL > 13) {
                    var c = MAX_ZOOM_LEVEL - 13;
                    WYX.style.top = X$31o + (c * gb.n7J + c * gb.P9840) + "px"
                }
            }
            setVisible.apply(this, [WYX, visible])
        }
    };
    var J142_ = function ($io) {
        if (typeof $io != "boolean")$io = true;
        with (this.options.view) {
            this.showCtlPan(pan, false);
            this.showZOButton(zoomout, false);
            this.showCtlRuler(ruler, false);
            this.showZIButton(zoomin, false)
        }
        if ($io)$01T2.apply(this)
    };
    var $01T2 = function () {
        this.fq4(false);
        X3w.style.top = (yj0().max.y + (this.isVisible(MHLU5) ? 5 : -5)) + "px";
        u66ac.style.top = u5iK().max.y + "px";
        FXbn.style.top = G0ES().max.y + "px";
        this.maplet.Et18P();
        this.maplet.rb4();
        this.update(this.maplet.AG)
    };
    this.hide = function () {
        setVisible.apply(this, [this.dom, false])
    };
    this.show = function () {
        setVisible.apply(this, [this.dom, true])
    };
    var setVisible = function (e52, visible) {
        if (!this.dom || typeof e52 != "object" || !e52)return;
        if (e52.style.display != (visible ? "" : "none"))e52.style.display = visible ? "" : "none"
    };
    this.isVisible = function (e52) {
        if (typeof e52 != "object" || !e52)e52 = this.dom;
        if (!e52)return false;
        return e52.style.display == ""
    };
    this.g1 = function () {
        MEvent.removeBuiltInListener(mK5ql, "mousedown", ir0["_ctlSlider_mousedown"]);
        MEvent.removeBuiltInListener(document, "mousemove", ir0["document_mousemove"]);
        MEvent.removeBuiltInListener(document, "mouseup", ir0["document_mouseup"]);
        MEvent.removeBuiltInListener(u66ac, "click", ir0["_ctlRuler_click"]);
        MEvent.removeBuiltInListener(u66ac, "mouseover", ir0["_ctlRuler_mouseover"]);
        MEvent.removeBuiltInListener(u66ac, "mouseout", ir0["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(u66ac, "mousedown", ir0["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(u66ac, "mouseup", ir0["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseover", ir0["_zo_map_mouseover"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseout", ir0["_zo_map_mouseout"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseover", ir0["_zi_map_mouseover"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseout", ir0["_zi_map_mouseout"]);
        MEvent.removeBuiltInListener(mK5ql, "mouseover", ir0["_ctlSlider_mouseover"]);
        MEvent.removeBuiltInListener(mK5ql, "mouseout", ir0["_ctlSlider_mouseout"]);
        MEvent.removeBuiltInListener(gy61O, "click", ir0["_ltStreet_click"]);
        MEvent.removeBuiltInListener($62, "click", ir0["_ltCity_click"]);
        MEvent.removeBuiltInListener(_Ibe, "click", ir0["_ltProvince_click"]);
        MEvent.removeBuiltInListener(I94C6, "click", ir0["_ltCountry_click"]);
        MEvent.removeBuiltInListener(gy61O, "mouseup", ir0["_ltStreet_mouseup"]);
        MEvent.removeBuiltInListener($62, "mouseup", ir0["_ltCity_mouseup"]);
        MEvent.removeBuiltInListener(_Ibe, "mouseup", ir0["_ltProvince_mouseup"]);
        MEvent.removeBuiltInListener(I94C6, "mouseup", ir0["_ltCountry_mouseup"]);
        MEvent.removeBuiltInListener(gy61O, "mousedown", ir0["_ltStreet_mousedown"]);
        MEvent.removeBuiltInListener($62, "mousedown", ir0["_ltCity_mousedown"]);
        MEvent.removeBuiltInListener(_Ibe, "mousedown", ir0["_ltProvince_mousedown"]);
        MEvent.removeBuiltInListener(I94C6, "mousedown", ir0["_ltCountry_mousedown"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseup", ir0["_zo_map_mouseup"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseup", ir0["_zi_map_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_n_ctrl_imap"), "mouseup", ir0["_fb_n_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_s_ctrl_imap"), "mouseup", ir0["_fb_s_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_w_ctrl_imap"), "mouseup", ir0["_fb_w_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_e_ctrl_imap"), "mouseup", ir0["_fb_e_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_m_ctrl_imap"), "mouseup", ir0["_fb_m_ctrl_imap_mouseup"]);
        if (this.dom)this.dom.finalize();
        if (aa("_pan_map"))aa("_pan_map").q9 = null;
        if (aa("_zo_map"))aa("_zo_map").q9 = null;
        if (aa("_zi_map"))aa("_zi_map").q9 = null;
        t892(this)
    };
    this.getRect = function () {
        var r = {min: {x: null, y: null}, max: {x: null, y: null}, kEP7: {x: null, y: null}, bxj: {x: null, y: null}, width: null, height: null};
        if (this.isVisible(this.dom)) {
            if (this.isVisible(MHLU5)) {
                r = yj0();
                r.kEP7 = {x: null, y: null};
                r.bxj = {x: null, y: null}
            }
            if (this.isVisible(X3w)) {
                var v = u5iK();
                if (r.min.x == null)r.min.x = v.min.x;
                if (r.min.y == null)r.min.y = v.min.y;
                if (r.max.x == null)r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(u66ac)) {
                var v = G0ES();
                if (r.min.x == null)r.min.x = v.min.x;
                if (r.min.y == null)r.min.y = v.min.y;
                if (r.max.x == null)r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(FXbn)) {
                var v = $$Q4g();
                if (r.min.x == null)r.min.x = v.min.x;
                if (r.min.y == null)r.min.y = v.min.y;
                if (r.max.x == null)r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            r.kEP7.x = r.min.x + _8J;
            r.kEP7.y = r.min.x + VI8F;
            r.bxj.x = r.max.x + _8J;
            r.bxj.y = r.max.y + VI8F;
            r.width = r.max.x - r.min.x;
            r.height = r.max.y - r.min.y
        }
        return r
    };
    var MHLU5 = null;
    var X3w = null;
    var FXbn = null;
    var u66ac = null;
    var mK5ql = null;
    var WYX = null;
    var gy61O = null;
    var $62 = null;
    var _Ibe = null;
    var I94C6 = null;
    var ir0 = [];
    var X519 = false;
    var Gi4 = {min: 0, max: 0};
    var fg0L = {min: 0, max: 0};
    var _8J = -Number.MAX_VALUE;
    var VI8F = -Number.MAX_VALUE;
    var NO80 = -Number.MAX_VALUE;
    var X$31o = -Number.MAX_VALUE;
    var $V9$ = true;
    var L940C = false;
    this.maplet = null;
    this.dom = null;
    this.options = options || {};
    with (this.options) {
        this.setLocation(typeof location != "object" ? undefined : location, false);
        this.setView(typeof view != "object" ? undefined : view, false)
    }
    ;
    this.controlCanvas = {};
    this.controlCanvas.div = {};
    this.controlCanvas.div.update = function () {
    };
    this.onmousedown = I5kgL;
    this.onmousemove = U9X;
    this.onmouseup = O6480;
    this.onmouseout = function () {
    }
};
gb.n7J = 6;
gb.P9840 = 2;
gb.p16V = 52;
gb.sv726 = 18;
gb.w79 = ["\u8857\u9053", "\u57ce\u5e02", "\u7701", "\u56fd\u5bb6"];
function ny(e) {
    if (!e) {
        e = window.event
    }
    if (e && !e.target) {
        e.target = e.srcElement
    }
    if (e && typeof e.button == "undefined") {
        e.button = e.which
    }
    e.p7K4e = function () {
        if (this.stopPropagation) {
            this.stopPropagation()
        } else {
            this.cancelBubble = false
        }
    };
    e.D7f8 = function () {
        if (this.preventDefault) {
            this.preventDefault()
        } else {
            this.returnValue = false
        }
    };
    return e
};
function getTimeout(uy, q0, yI) {
    return window.setTimeout(function () {
        q0.apply(uy)
    }, yI)
};
function nB(uy, q0, yI) {
    return window.setInterval(function () {
        q0.apply(uy)
    }, yI)
};
var MEvent = {nD: function (l7) {
    return "_e__" + l7
}, addListener: function (uy, l7, q0) {
    var l8 = this.nD(l7);
    if (uy[l8]) {
        var cZ = true;
        for (var i = 0; i < uy[l8].length; i++) {
            var h = uy[l8][i];
            if (h == q0) {
                cZ = false;
                break
            }
        }
        if (cZ)uy[l8].push(q0)
    } else {
        uy[l8] = [q0]
    }
    return{qg: uy, propertyName: l8, q0: q0}
}, removeListener: function (q9) {
    var uy = q9.qg[q9.propertyName];
    for (var c = 0; c < uy.length; c++) {
        if (uy[c] == q9.q0) {
            uy.splice(c, 1);
            return
        }
    }
}, contains: function (uy, l7) {
    var l8 = this.nD(l7);
    if (typeof uy[l8] != "undefined")return uy[l8].length; else return 0
}, clearListeners: function (uy, l7) {
    var l8 = this.nD(l7);
    uy[l8] = null
}, trigger: function (uy, l8) {
    var l9 = this.nD(l8);
    var lS = uy[l9];
    if (lS && lS.length > 0) {
        var vn = [];
        for (var fuj18 = 2; fuj18 < arguments.length; fuj18++) {
            vn.push(arguments[fuj18])
        }
        for (var i = 0; i < lS.length; i++) {
            var h = lS[i];
            if (h) {
                try {
                    h.apply(uy, vn)
                } catch (e) {
                }
            }
        }
    }
}, addBuiltInListener: function (uy, l8, q0, K5N) {
    if (uy.addEventListener) {
        uy.addEventListener(l8, q0, K5N)
    } else if (uy.attachEvent) {
        uy.attachEvent("on" + l8, q0)
    } else {
        uy["on" + l8] = q0
    }
    return q0
}, removeBuiltInListener: function (uy, l8, q0) {
    if (uy.removeEventListener) {
        uy.removeEventListener(l8, q0, false)
    } else if (uy.detachEvent) {
        uy.detachEvent("on" + l8, q0)
    } else {
        uy["on" + l8] = null
    }
}, bind: function (uy, l8, fU, q0) {
    return this.addListener(uy, l8, function () {
        q0.apply(fU, arguments)
    })
}, bindDom: function (uy, l8, fU, q0, K5N) {
    K5N = !!K5N;
    var an = this.gm(fU, q0);
    return this.addBuiltInListener(uy, l8, an, K5N)
}, gm: function (uy, l8) {
    return function (e) {
        e = ny(e);
        l8.call(uy, e)
    }
}, callback: function (q0, uy) {
    return function () {
        return uy.apply(q0, arguments)
    }
}};
var MIcon = function (imgUrl, width, height, anchorX, anchorY, t0513) {
    this.ao = new Array();
    this.k9Aq0 = 1;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.k9Aq0;
    this.div.style.position = "absolute";
    width = (typeof width == "undefined") ? 16 : width;
    height = (typeof height == "undefined") ? 16 : height;
    this.img = document.createElement("div");
    this.img.unselectable = "on";
    this.img.style.MozUserSelect = "none";
    this.img.style.zIndex = this.k9Aq0;
    this.img.style.position = "absolute";
    this.img.style.top = "0px";
    this.img.style.left = "0px";
    this.imgUrl = imgUrl;
    this.left = 0;
    this.top = 0;
    this.g0G7 = this.left;
    this.a_7 = this.top;
    this.wz = function (id) {
        this.div.id = "OverlayBg" + id;
        this.img.id = id
    };
    this.initialize = function (marker) {
        if (px)this.img.ondragstart = function () {
            return false
        };
        this.marker = marker;
        lf7(this.img.firstChild, "oid", this.marker.id);
        this.ao["mouseover"] = MEvent.bindDom(this.img.firstChild, "mouseover", this.marker, this.marker.hiliteIcon);
        this.ao["mouseout"] = MEvent.bindDom(this.img.firstChild, "mouseout", this.marker, this.marker.v4)
    };
    this.setContextMenu = function (menu) {
    };
    this.getImgUrl = function () {
        var sIp = "";
        var pC = this.img;
        if (pC.innerHTML.indexOf(Maplet.MICON_IMGSRC_FLAG) != -1) {
            var $Cd = new RegExp(Maplet.MICON_IMGSRC_FLAG + "=\"?([^\"\t ]*)", "gi");
            var c31 = $Cd.exec(pC.innerHTML);
            if (c31 != null)sIp = c31[1]
        } else if (pC.firstChild && pC.firstChild.tagName.toUpperCase() == "IMG") {
            sIp = pC.firstChild.src
        } else {
            sIp = this.imgUrl
        }
        return sIp
    };
    this.enableDragMap = function (enable) {
        if (!this.img || !this.img.firstChild)return;
        if (enable)lf7(this.img.firstChild, Ux3q, "true"); else HNt(this.img.firstChild, Ux3q)
    };
    this.updateImage = function (w7, Aj, nV) {
        if ((this.img.firstChild && this.imgUrl == w7) || !w7)return;
        this.imgUrl = w7;
        if (typeof this.imgUrl == "string") {
            if (this.imgUrl.indexOf("<") >= 0) {
                this.img.innerHTML = this.imgUrl
            } else {
                this.img.innerHTML = "<img src=" + this.imgUrl + " width=" + (typeof Aj == "undefined" ? width : Aj) + " height=" + (typeof Aj == "undefined" ? height : nV) + ">";
                if (this.marker) {
                    if (this.marker.label && typeof Aj != "undefined") {
                        this.marker.label.xoffset += Aj - width;
                        width = Aj
                    }
                    if (this.marker.maplet) {
                        this.marker.initialize(this.marker.maplet)
                    }
                }
            }
        } else {
            this.img.innerHTML = "";
            this.img.appendChild(this.imgUrl)
        }
        this.img.firstChild.onmousedown = function (e) {
            return false
        };
        lf7(this.img.firstChild, P1uR9, "marker");
        this.enableDragMap(this.marker ? !this.marker.bEditable : true)
    };
    this.updateImage(imgUrl);
    this.width = (typeof width == "undefined") ? parseInt(this.img.width) : parseInt(width);
    this.height = (typeof height == "undefined") ? parseInt(this.img.height) : parseInt(height);
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.t0513 = (typeof t0513 == "undefined") ? imgUrl : t0513;
    this.anchorX = (typeof anchorX == "undefined") ? this.width / 2 : parseInt(anchorX);
    this.anchorY = (typeof anchorY == "undefined") ? this.height / 2 : parseInt(anchorY);
    this.div.appendChild(this.img);
    this.update = function (maplet, left, top) {
        var zB = parseInt(left) - parseInt(this.anchorX);
        var zF = parseInt(top) - parseInt(this.anchorY);
        if (this.marker.autoHide && !this.marker.ls && (zB > maplet.width || zB < -this.width || zF > maplet.height || zF < -this.height)) {
            if (this.div.parentNode) {
                this.div.style.top = zF + "px";
                this.div.style.left = zB + "px";
                this.div.parentNode.removeChild(this.div);
                if (this.marker.label)this.marker.label.remove();
                this.fu = false
            }
        } else {
            if (this.div.parentNode != maplet.lA.div && !this.marker.ls) {
                maplet.lA.appendChild(this.div);
                this.div.style.width = this.width + "px";
                this.div.style.height = this.height + "px";
                this.img.width = this.width + "px";
                this.img.height = this.height + "px";
                this.fu = true
            }
            this.div.style.top = zF + "px";
            this.div.style.left = zB + "px";
            this.g0G7 = this.left;
            this.a_7 = this.top;
            this.left = zB;
            this.top = zF;
            left = zB;
            top = zF;
            if (this.marker.label)this.marker.label.update(this.marker.maplet, left, top)
        }
    };
    this.isVisible = function () {
        return(this.fu)
    };
    this.zq = function () {
        return(this.img.firstChild.src) + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.marker) {
            this.marker.hiliteIcon({target: this.img})
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.img.firstChild) {
            if (px)this.img.ondragstart = null;
            this.img.firstChild.onmousedown = null;
            for (var l8 in this.ao) {
                MEvent.removeBuiltInListener(this.img.firstChild, l8, this.ao[l8]);
                this.ao[l8] = null;
                if (finalize)delete this.ao[l8]
            }
        }
        if (finalize)this.ao = null;
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode)this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize)this.marker = null
    };
    this.setZIndex = function (WV4) {
        if (this.div && this.div.parentNode && WV4 != this.div.style.zIndex) {
            this.k9Aq0 = this.div.style.zIndex;
            this.div.style.zIndex = WV4
        }
    };
    this._9w = function () {
        if (!this.div)return;
        if (this.k9Aq0 != this.div.style.zIndex) {
            this.setZIndex(this.k9Aq0)
        }
    };
    this.getRect = function () {
        var r = {min: {x: this.div.offsetLeft, y: this.div.offsetTop}, max: {x: 0, y: 0}};
        r.max.x = r.min.x + this.div.offsetWidth;
        r.max.y = r.min.y + this.div.offsetHeight;
        return r
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIcon'
    }
};
var MMarker = function (pt, icon, info, label, shadow) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
    this.pt = pt;
    this.icon = (typeof icon == "undefined") ? null : icon;
    if (this.icon && this.icon.wz) {
        this.icon.wz(this.id)
    }
    this.shadow = typeof shadow == "undefined" ? null : shadow;
    if (this.shadow && this.shadow.wz)this.shadow.wz(this.id);
    this.label = (typeof label == "undefined") ? null : label;
    if (this.label && this.label.wz) {
        this.label.wz(this.id)
    }
    this.info = null;
    if (typeof info != "undefined" && info) {
        this.info = info;
        this.info.setOverlay(this)
    }
    this.lw = 0;
    this.ls = false;
    this.bEditable = false;
    this.rotation = 0;
    this.ao = new Array();
    this.contextmenu = null;
    this.autoHide = true;
    this.dragAnimation = true;
    this.j016_ = false;
    this.creator = MLayer.USER;
    this.q3S4$ = false;
    this.setContextMenu = function (menu) {
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet)this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this))this.contextmenu.addOverlay(this)
        } else if (!menu) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (dom) {
        return this.contextmenu
    };
    this.wz = function (id) {
        this.id = id;
        if (this.icon && this.icon.wz) {
            this.icon.wz(id)
        }
        if (this.shadow && this.shadow.wz)this.shadow.wz(id)
    };
    this.setEditable = function (cs) {
        this.bEditable = (typeof cs == "undefined") ? false : cs;
        if (REFRESH_MK_INDEX)this.refreshZIndex();
        if (this.icon)this.icon.enableDragMap(!this.bEditable)
    };
    this.refreshZIndex = function (tO54R) {
        if (!this.icon)return;
        if (typeof tO54R != "boolean")tO54R = true;
        if (this.maplet) {
            var Gj6 = this.maplet.getMarkerPolygons(this);
            if (Gj6.length > 0) {
                var b = false;
                for (var i = 0; i < Gj6.length; i++) {
                    if (Gj6[i].bEditable) {
                        b = true;
                        break
                    }
                }
                if (this.bEditable || !b) {
                    if (this.icon.div.style.zIndex < 0)this._9w()
                } else {
                    if (this.icon.div.style.zIndex >= 0)this.setZIndex(-1)
                }
                if (tO54R) {
                    for (var i = 0; i < Gj6.length; i++) {
                        Gj6[i].Uo3P4(this)
                    }
                }
            }
        }
    };
    this.initialize = function (maplet) {
        this.XwSWi(true);
        this.maplet = maplet;
        this.dragAnimation = this.maplet.markerDragAnimation && this.dragAnimation;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet)this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this))this.contextmenu.addOverlay(this)
        }
        this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
        if (this.icon != null) {
            this.icon.initialize(this)
        }
        if (this.label != null) {
            this.label.initialize(this)
        }
        if (this.shadow != null) {
            this.shadow.initialize(this)
        }
        {
            if (this.info != null) {
                this.ao["info_" + this.info.yd] = MEvent.bindDom(this.maplet.map, this.info.yd, this, this.openInfoWindow)
            } else {
                this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
            }
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
        if (REFRESH_MK_INDEX)this.refreshZIndex()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MMarker'
    };
    this.paint = function () {
        if (!this.maplet)return;
        if (!this.pt.maplet)this.pt.initialize(this.maplet);
        if (this.maplet.MT$) {
            if (this.maplet.__RH != this.pt.__RH) {
                this.pt.mapX += this.maplet.pNt;
                this.pt.mapY += this.maplet.$5D2;
                this.pt.__RH = this.maplet.__RH
            }
        } else {
            this.pt.recalcScreenCoords()
        }
        if (this.icon) {
            if (!this.icon.marker)this.icon.initialize(this);
            this.icon.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
        if (this.shadow) {
            if (!this.shadow.marker)this.shadow.initialize(this);
            this.shadow.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
    };
    this.zq = function () {
        return(this.icon.isVisible()) ? "1" + "," + this.pt.getPid() + "," + this.icon.zq() : ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.maplet && this.maplet.markerDragAnimation)this.maplet.$T9R7(false);
        if (finalize)this.removeContextMenu();
        if (this.icon) {
            this.icon.remove(finalize)
        }
        if (this.label) {
            this.label.remove(finalize)
        }
        if (this.shadow) {
            this.shadow.remove(finalize)
        }
        this.XwSWi(finalize);
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize)this.ao = null;
        this.maplet = null
    };
    this.XwSWi = function (finalize) {
        if (this.maplet) {
            for (var l8 in this.ao) {
                var l9 = l8.substring(0, 5) == "info_" ? l8.substring(5) : l8;
                MEvent.removeBuiltInListener(this.maplet.map, l9, this.ao[l8]);
                this.ao[l8] = null;
                if (finalize)delete this.ao[l8]
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.openInfoWindow.caller == null) {
        }
        if (this.maplet != null) {
            if ((new Date().getTime() - this.lw) < 200)return;
            if (this.maplet.r8r1 && typeof e == "object" && ((this.icon && fJ(e.target, this.icon.img)) || (this.label && fJ(e.target, this.label.div)))) {
                this.maplet.r8r1 = false;
                if (this.maplet.t41 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this))return
            }
            var x = this.pt.mapX;
            var y = this.pt.mapY;
            if (typeof e == "undefined" || (typeof e == "object" && this.icon && fJ(e.target, this.icon.img)) || (typeof e == "object" && this.label && fJ(e.target, this.label.div))) {
                if (typeof e == "object" && this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) {
                    return
                }
                if (!this.icon.isVisible()) {
                    if (x >= this.maplet.width * 1.5 || x <= -(this.maplet.width / 2) || y <= -(this.maplet.height / 2) || y >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(this.pt.getPid());
                        x = this.maplet.width / 2;
                        y = this.maplet.height / 2
                    }
                }
                this.x = x;
                this.y = y;
                if (this.openInfoWindow.caller && this.openInfoWindow.caller.toString().indexOf(".call(") != -1) {
                    avBubble.pUh3r = false;
                    MEvent.trigger(this, "click", this)
                }
                if (!this.maplet)return;
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (iToolTipStyle != 2) {
                    this.hiliteIcon({target: {id: this.id}});
                    this.maplet.wN(x, y, this.info, "", "", true)
                }
            } else if (typeof e == "boolean" && e || e == "true") {
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (x > this.maplet.width * 2 || x < -this.maplet.width || y < -this.maplet.height || y > this.maplet.height * 2) {
                    this.maplet.setCenter(this.pt.getPid());
                    x = this.maplet.width / 2;
                    y = this.maplet.height / 2
                }
                this.maplet.wN(x, y, this.info, true)
            }
        }
    };
    this.w0 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && fJ(e.target, this.icon.img) && e.button != 2) {
            this.qo = true;
            this.fd = false;
            this.l6 = this.id;
            this.l0 = parseInt(e.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
            this.na = parseInt(e.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
            if (this.rotation == 1) {
                var lb = this.l0 - this.icon.width / 2;
                var lc = this.na - this.icon.height / 2;
                var la = Math.sqrt(lb * lb + lc * lc);
                if (la > (this.icon.width / 4 - 5)) {
                    this.fd = true;
                    this.downX = e.clientX;
                    this.downY = e.clientY
                }
            }
            this.ao["mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px)this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1); else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(e.target, this.icon.img) || this.l6 == this.id)) {
            if (this.qo) {
                if (avBubble.overlay && avBubble.overlay.id == this.id)this.maplet.hideBubble();
                if (!this.fd) {
                    var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                    var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                    var qCg = this.maplet.w41r9;
                    var Ci3 = 0, _o2 = 0;
                    if (this.icon.div.parentNode == this.maplet.lA.div) {
                        this.maplet.panel.appendChild(this.icon.div);
                        if (this.label)this.maplet.panel.appendChild(this.label.div);
                        if (this.shadow)this.maplet.panel.appendChild(this.shadow.div);
                        this.setZIndex(pF);
                        if (px)document.body.setCapture();
                        if (this.maplet.markerDragAnimation) {
                            Ci3 = qCg.BuW;
                            _o2 = qCg.gV2d
                        }
                    }
                    if (!usr84)usr84 = nB(this, dU80, 100);
                    if (this.dragAnimation) {
                        y = y + this.icon.anchorY - qCg.height / 2;
                        this.maplet.$T9R7(true, x + this.icon.anchorX - qCg.width / 2, y);
                        y = y - qCg.offsetY - this.icon.height
                    }
                    this.x = x;
                    this.y = y;
                    this.lw = new Date().getTime();
                    this.ls = true;
                    this.icon.update(this.maplet, x + this.icon.anchorX, y + this.icon.anchorY);
                    if (this.shadow) {
                        var g4 = this.icon.left - this.icon.g0G7;
                        var g5 = this.icon.top - this.icon.a_7;
                        this.shadow.update(this.maplet, this.shadow.left + g4 + this.shadow.anchorX + Ci3, this.shadow.top + g5 + this.shadow.anchorY + _o2)
                    }
                    if ((MEvent.contains(this, "dragstart") && !this.j016_) || MEvent.contains(this, "draging")) {
                        var pt = null;
                        if (this.dragAnimation) {
                            pt = new MPoint(this.maplet.toMapCoordinate(Y32k(qCg.fC.div.style.left) + qCg.width / 2, Y32k(qCg.fC.div.style.top) + qCg.height / 2))
                        } else {
                            pt = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY))
                        }
                        pt.initialize(this.maplet);
                        if (MEvent.contains(this, "dragstart") && !this.j016_) {
                            MEvent.trigger(this, "dragstart", this, pt);
                            this.j016_ = true
                        }
                        if (MEvent.contains(this, "draging")) {
                            MEvent.trigger(this, "draging", this, pt)
                        }
                    }
                } else {
                    var wc = parseInt(e.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
                    var wd = parseInt(e.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
                    var wa = Math.atan2((wd - this.icon.height / 2), wc - this.icon.width / 2);
                    var wb = ((90 + wa * 180 / Math.PI) + 360) % 360;
                    MEvent.trigger(this, "rotate", wb)
                }
                if (px)this.maplet.a3(e)
            }
        }
    };
    this.l1 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo && this.ls) {
            if (this.maplet.fa)this.maplet.finishupPan();
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["mouseup"]);
            this.ao["mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
            this.j016_ = false;
            if (!this.fd) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                if (isNaN(x))x = this.x;
                if (isNaN(y))y = this.y;
                if (this.icon.div.parentNode != this.maplet.lA.div) {
                    this.maplet.lA.appendChild(this.icon.div);
                    if (this.label)this.maplet.lA.appendChild(this.label.div);
                    if (this.shadow) {
                        this.maplet.lA.appendChild(this.shadow.div);
                        this.shadow._9w()
                    }
                    with (this.maplet.w41r9.fC) {
                        if (div.parentNode != this.maplet.lA.div) {
                            this.maplet.lA.div.appendChild(div);
                            div.style.zIndex = this.icon.div.style.zIndex - 1
                        }
                    }
                    if (px)document.body.releaseCapture()
                }
                if (this.dragAnimation) {
                    y = parseInt(this.maplet.w41r9.fC.style.top) + this.maplet.w41r9.height / 2 - this.icon.anchorY
                }
                this.pt.setMapCoords(x + this.icon.anchorX, y + this.icon.anchorY);
                this.x = x;
                this.y = y;
                if (this.dragAnimation)GE94A.apply(this)
            } else {
            }
            MEvent.trigger(this, "drag", this);
            MEvent.trigger(this.maplet, "edit", this);
            if (this.ls) {
                this.lw = new Date().getTime();
                this.ls = false
            }
            if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly)this.maplet._H7 = false
        }
        if (this.l6 == this.id) {
            this.l6 = null
        }
        this.qo = false
    };
    this.hiliteIcon = function (e) {
        if (this.icon != null && fJ(e.target, this.id) && !this.qo) {
            if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.X420D) {
                this.maplet.$_T("no-drop", this.icon.img)
            } else if (this.info || MEvent.contains(this, "click") > 0 || this.bEditable) {
                this.maplet.$_T("pointer", this.icon.img)
            }
            if (this.icon.div.style.zIndex < pF) {
                pF++
            }
            this.icon.setZIndex(pF);
            if (this.label)this.label.setZIndex(pF);
            var x = this.maplet.zl(this.pt.lon, this.pt.lat);
            var y = this.maplet.zm(this.pt.lat, this.pt.lon);
            this.x = x;
            this.y = y;
            if (typeof e.button != "undefined" && !this.q3S4$) {
                this.q3S4$ = true;
                MEvent.trigger(this, "mouseover", this)
            }
        }
    };
    this.v4 = function (e) {
        this.maplet.$_T("default", this.icon.img);
        if (this.icon != null && fJ(e.target, this.id) && !this.qo) {
            var x = this.maplet.zl(this.pt.lon, this.pt.lat);
            var y = this.maplet.zm(this.pt.lat, this.pt.lon);
            this.x = x;
            this.y = y;
            MEvent.trigger(this, "mouseout", this);
            this.q3S4$ = false
        }
    };
    this.setZIndex = function (WV4) {
        if (this.icon)this.icon.setZIndex(WV4);
        if (this.label)this.label.setZIndex(WV4);
        if (this.shadow)this.shadow.setZIndex(WV4)
    };
    this._9w = function () {
        if (this.icon)this.icon._9w();
        if (this.label)this.label._9w();
        if (this.shadow)this.shadow._9w()
    };
    this.setIcon = function ($3dUe, T4e7) {
        if (typeof T4e7 != "boolean")T4e7 = true;
        if (this.icon) {
            this.icon.remove();
            this.icon = null
        }
        if ($3dUe) {
            this.icon = $3dUe;
            this.icon.wz(this.id);
            this.icon.initialize(this);
            this.icon.enableDragMap(!this.bEditable);
            if (T4e7)this.paint()
        }
    };
    this.setLabel = function (X93, T4e7) {
        if (typeof T4e7 != "boolean")T4e7 = true;
        if (this.label) {
            this.label.remove();
            this.label = null
        }
        if (X93) {
            this.label = X93;
            this.label.wz(this.id);
            this.label.initialize(this);
            if (T4e7)this.paint()
        }
    };
    this.setShadow = function (g480, T4e7) {
        if (typeof T4e7 != "boolean")T4e7 = true;
        if (this.shadow) {
            this.shadow.remove();
            this.shadow = null
        }
        if (g480) {
            this.shadow = g480;
            this.shadow.wz(this.id);
            this.shadow.initialize(this);
            if (T4e7)this.paint()
        }
    };
    this.setInfoWindow = function (tL17) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible())this.maplet.hideBubble();
            this.info = null
        }
        if (tL17) {
            this.info = tL17;
            this.info.setOverlay(this)
        }
    };
    this.setPoint = function (QC8X8, T4e7) {
        if (typeof T4e7 != "boolean")T4e7 = true;
        this.pt = QC8X8;
        if (avBubble.overlay && avBubble.overlay.id == this.id)this.maplet.hideBubble();
        if (T4e7)this.paint()
    };
    var usr84 = null;
    var dU80 = function () {
        if (this.ls) {
            var wD2 = this.maplet.l19S;
            var rt = this.icon.getRect();
            if (rt.min.x == rt.max.x || rt.min.y == rt.max.y)return;
            var vj = 0, vk = 0;
            if (rt.min.x < wD2)vj = 50;
            if (rt.min.y < wD2)vk = 50;
            if (rt.max.x > this.maplet.width - wD2)vj = -50;
            if (rt.max.y + (this.dragAnimation ? (this.maplet.w41r9.height + this.maplet.w41r9.offsetY) : 0) + 2 > this.maplet.height - wD2)vk = -50;
            if ((vj != 0 || vk != 0)) {
                this.maplet.panTo(vj, vk);
                if (MEvent.contains(this, "draging")) {
                    var pt = null;
                    if (this.dragAnimation) {
                        var qCg = this.maplet.w41r9;
                        pt = new MPoint(this.maplet.toMapCoordinate(Y32k(qCg.fC.div.style.left) + qCg.width / 2, Y32k(qCg.fC.div.style.top) + qCg.height / 2))
                    } else pt = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY));
                    pt.initialize(this.maplet);
                    MEvent.trigger(this, "draging", this, pt)
                }
                return
            }
        }
        window.clearInterval(usr84);
        usr84 = null
    };
    T37J = null;
    var GE94A = function () {
        window.clearTimeout(T37J);
        this.maplet.w41r9.overlay = this;
        var yw = 0, d = 50;
        var R0FS5 = {b: parseInt(this.icon.div.style.top), c: 0};
        R0FS5.c = this.pt.mapY - this.icon.anchorY - R0FS5.b;
        var Ie8 = null, $7F = null;
        if (this.shadow) {
            var Ie8 = {b: parseInt(this.shadow.div.style.left), c: 0};
            Ie8.c = this.pt.mapX - this.shadow.anchorX - Ie8.b;
            var $7F = {b: parseInt(this.shadow.div.style.top), c: 0};
            $7F.c = this.pt.mapY - this.shadow.anchorY - $7F.b
        }
        function p8v() {
            if (yw < d) {
                yw++;
                this.icon.update(this.maplet, this.pt.mapX, Math.ceil(Ur46Q(yw, R0FS5.b, R0FS5.c, d)) + this.icon.anchorY);
                if (this.shadow)this.shadow.update(this.maplet, Math.ceil(Ur46Q(yw, Ie8.b, Ie8.c, d)) + this.shadow.anchorX, Math.ceil(Ur46Q(yw, $7F.b, $7F.c, d)) + this.shadow.anchorY);
                T37J = getTimeout(this, p8v, 10)
            } else {
                this.maplet.$T9R7(false)
            }
        };
        p8v.apply(this)
    };
    this.$HwrS = function () {
        if (T37J) {
            window.clearTimeout(T37J);
            T37J = null
        }
        this.paint()
    };
    var Ur46Q = function (yw, b, c, d) {
        if ((yw /= d) < (1 / 2.75)) {
            return c * (7.5625 * yw * yw) + b
        } else if (yw < (2 / 2.75)) {
            return c * (7.5625 * (yw -= (1.5 / 2.75)) * yw + .75) + b
        } else if (yw < (2.5 / 2.75)) {
            return c * (7.5625 * (yw -= (2.25 / 2.75)) * yw + .9375) + b
        } else {
            return c * (7.5625 * (yw -= (2.625 / 2.75)) * yw + .984375) + b
        }
    }
};
var MPolyline = function (pts, brush, info, label, options) {
    this.options = options || {};
    if (typeof this.options.editHilite != "boolean") {
        this.options.editHilite = true
    }
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "MPolyline";
    this.pts = pts;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = null;
    if (typeof info != "undefined" && info) {
        this.info = info;
        this.info.setOverlay(this)
    }
    this.label = (typeof label == "undefined") ? null : label;
    this.qo = false;
    this.wk = null;
    this.z9 = null;
    this.um = new MContextMenu();
    this.un = new MContextMenuItem('\u5220\u9664\u8282\u70B9');
    this.um.addItem(this.un);
    this.contextmenu = null;
    this.pathNodeMenu = null;
    this.ao = new Array();
    this.t48x9 = new Object();
    this.isRefreshMkIndex = REFRESH_MK_INDEX;
    this.to = this.tn = Number.MAX_VALUE;
    this.T282 = this.Wl1 = -Number.MAX_VALUE;
    this.maplet = null;
    this.bEditable = false;
    this.$93Sj = false;
    this.qd1X = false;
    this.tL2 = true;
    this.T9E2 = null;
    var Pj5 = {yN: null, t9n2: {x: null, y: null}, Oyw: {x: null, y: null}, yXp6t: {x: null, y: null}};
    this.P440 = [];
    var Kf34 = [];
    this.creator = MLayer.USER;
    this.setEditable = function (enable) {
        this.bEditable = (typeof enable != "boolean") ? false : enable;
        if (!this.bEditable && this.z9)this.J9aT();
        if (this.maplet != null)this.update()
    };
    this.setEditMode = function (mode, _76) {
        if (typeof _76 != "boolean")_76 = true;
        var N07yj = false;
        if (mode == "path") {
            N07yj = !this.traffic;
            this.traffic = true
        } else if (mode == "default") {
            N07yj = this.traffic;
            this.traffic = false
        }
        if (N07yj && this.maplet)this.OEB_F();
        if (_76 && !this.bEditable)this.setEditable(true)
    };
    this.OEB_F = function () {
        if (!this.maplet)return;
        if (this.contextmenu)this.contextmenu.hide();
        if (this.pathNodeMenu)this.pathNodeMenu.hide();
        if (this.um)this.um.hide();
        MEvent.removeBuiltInListener(this.maplet.map, "mousedown", this.ao["mousedown"]);
        this.ao["mousedown"] = null;
        MEvent.removeBuiltInListener(this.maplet.map, "mouseup", this.ao["mouseup"]);
        this.ao["mouseup"] = null;
        this.update();
        if (!this.traffic) {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][0]);
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][1]);
            this.ao["mousemove"] = null;
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1);
            if (this.z9) {
                this.z9.style.overflow = "";
                this.z9.style.width = "";
                this.z9.style.height = "";
                this.z9.style.left = "";
                this.z9.style.top = ""
            }
        } else {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.IsX);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.p5N76);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.BpNB9);
            if (this.z9)this.z9.style.overflow = "hidden"
        }
    };
    this.initialize = function (maplet, S97) {
        this.maplet = maplet;
        this.S97 = typeof S97 === 'undefined' ? true : false;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet)this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this))this.contextmenu.addOverlay(this)
        }
        if (this.pathNodeMenu) {
            if (!this.pathNodeMenu.maplet)this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this))this.pathNodeMenu.addOverlay(this)
        }
        this.um.initialize(this.maplet);
        this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow);
        if (this.traffic) {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.IsX);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.p5N76);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.BpNB9)
        } else {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1)
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPolyline'
    };
    this.zq = function () {
        return ""
    };
    this.zn = function () {
        if (apiType == 1)return{brush: this.brush, points: this.pts}; else {
            var xU = this.brush.filled ? "2" : "0";
            var xT = this.brush.stroke + "," + xU + "," + this.brush.color + ":";
            for (var i = 0; i < this.pts.length; i++)xT += this.pts[i].getPid() + ",";
            return xT
        }
    };
    this.paint = function () {
        this.zX = this.maplet.B7aNf();
        if (!HMum5) {
            if (!this.z0) {
                this.z0 = document.createElement("v:shape");
                this.z0.style.width = "1px";
                this.z0.style.height = "1px";
                this.z0.coordsize = "1,1";
                this.z0.unselectable = "on";
                this.z0.id = this.id;
                this.z0.setAttribute("MStrName", this.toString());
                this.z0.strokecolor = this.brush.color;
                this.z0.strokeweight = this.brush.stroke + 'px';
                this.z0.fill = this.brush.fill;
                this.z0.filled = this.brush.fill;
                this.z0.style.position = "absolute";
                this.z0.contextmenu = this.contextmenu;
                lf7(this.z0, Ux3q, "true");
                lf7(this.z0, P1uR9, "polyline");
                lf7(this.z0, "oid", this.id);
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0;
                this.Ad.joinstyle = "round";
                this.Ad.endcap = "round";
                this.Ad.fill = this.brush.fill;
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.z0.appendChild(this.zY);
                this.z0.appendChild(this.Ad);
                this.zX.appendChild(this.z0);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var w9L = this.brush.overlap;
                    this.T9E2 = document.createElement("v:shape");
                    this.T9E2.style.width = "1px";
                    this.T9E2.style.height = "1px";
                    this.T9E2.coordsize = "1,1";
                    this.T9E2.unselectable = "on";
                    this.T9E2.strokecolor = w9L.color;
                    this.T9E2.strokeweight = (w9L.stroke && !isNaN(w9L.stroke) ? w9L.stroke : this.brush.stroke - 2) + "px";
                    this.T9E2.fill = false;
                    this.T9E2.filled = false;
                    this.T9E2.style.position = "absolute";
                    lf7(this.T9E2, Ux3q, "true");
                    lf7(this.T9E2, P1uR9, "polyline");
                    lf7(this.T9E2, "oid", this.id);
                    this.K486 = document.createElement("v:stroke");
                    this.K486.opacity = w9L.transparency / 100.0;
                    this.K486.joinstyle = "round";
                    this.K486.endcap = "round";
                    this.K486.fill = false;
                    this.K486.endarrow = this.brush.arrow ? "classic" : "";
                    this.K486.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                    this.T9E2.appendChild(this.K486);
                    this.zX.appendChild(this.T9E2)
                }
                this.z0.onmouseover = MEvent.gm(this, p2UG5);
                this.z0.onmouseout = MEvent.gm(this, e50);
                this.z0.onmousedown = MEvent.gm(this, N54S);
                this.z0.onmouseup = MEvent.gm(this, M4KsO);
                if (this.T9E2) {
                    this.T9E2.onmouseover = MEvent.gm(this, p2UG5);
                    this.T9E2.onmouseout = MEvent.gm(this, e50);
                    this.T9E2.onmousedown = MEvent.gm(this, N54S);
                    this.T9E2.onmouseup = MEvent.gm(this, M4KsO)
                }
            }
        } else {
            this.z0 = this.zX.firstChild;
            if (!this.Ad) {
                this.Ad = document.createElementNS("http://www.w3.org/2000/svg", "path");
                this.Ad.setAttribute("id", this.id);
                this.Ad.setAttribute("MStrName", this.toString());
                this.Ad.setAttribute("stroke-linejoin", "round");
                this.Ad.setAttribute("stroke-linecap", "round");
                this.Ad.setAttribute("stroke", this.brush.color);
                this.Ad.setAttribute("stroke-width", this.brush.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.Ad.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                this.Ad.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.Ad.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                lf7(this.Ad, Ux3q, "true");
                lf7(this.Ad, P1uR9, "polyline");
                lf7(this.Ad, "oid", this.id);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var w9L = this.brush.overlap;
                    this.T9E2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.T9E2.setAttribute("stroke-linejoin", "round");
                    this.T9E2.setAttribute("stroke-linecap", "round");
                    this.T9E2.setAttribute("stroke", w9L.color);
                    this.T9E2.setAttribute("stroke-width", (w9L.stroke && !isNaN(w9L.stroke) ? w9L.stroke : this.brush.stroke - 2) + "px");
                    this.T9E2.setAttribute("stroke-opacity", w9L.transparency / 100);
                    this.T9E2.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                    this.T9E2.setAttribute("fill", "none");
                    lf7(this.T9E2, Ux3q, "true");
                    lf7(this.T9E2, P1uR9, "polyline");
                    lf7(this.T9E2, "oid", this.id)
                }
                this.ao["vstroke_mouseover"] = MEvent.bindDom(this.Ad, "mouseover", this, p2UG5);
                this.ao["vstroke_mouseout"] = MEvent.bindDom(this.Ad, "mouseout", this, e50);
                this.ao["vstroke_mousedown"] = MEvent.bindDom(this.Ad, "mousedown", this, N54S);
                this.ao["vstroke_mouseup"] = MEvent.bindDom(this.Ad, "mouseup", this, M4KsO);
                this.ao["vstroke_mousemove"] = MEvent.bindDom(this.Ad, "mousemove", this, C2vQ);
                if (this.T9E2) {
                    this.ao["overlapLine_mouseover"] = MEvent.bindDom(this.T9E2, "mouseover", this, p2UG5);
                    this.ao["overlapLine_mouseout"] = MEvent.bindDom(this.T9E2, "mouseout", this, e50);
                    this.ao["overlapLine_mousedown"] = MEvent.bindDom(this.T9E2, "mousedown", this, N54S);
                    this.ao["overlapLine_mouseup"] = MEvent.bindDom(this.T9E2, "mouseup", this, M4KsO);
                    this.ao["overlapLine_mousemove"] = MEvent.bindDom(this.T9E2, "mousemove", this, C2vQ)
                }
                if (typeof this.contextmenu == "object" && this.contextmenu) {
                    this.Ad.contextmenu = this.contextmenu
                }
                this.z0.appendChild(this.Ad);
                if (this.T9E2)this.z0.appendChild(this.T9E2)
            }
        }
        this.update()
    };
    var p2UG5 = function (e) {
        var w9L = e.target;
        if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.X420D)this.maplet.$_T("crosshair", w9L); else if (this.info || MEvent.contains(this, "click"))this.maplet.$_T("pointer", w9L); else this.maplet.$_T("default", w9L);
        if (e.type == "mouseover")MEvent.trigger(this, "mouseover", this)
    };
    var e50 = function (e) {
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.X420D)this.maplet.$_T("default", e.target);
        MEvent.trigger(this, "mouseout", this)
    };
    var N54S = function (e) {
        if (!px) {
            this.$93Sj = true;
            this.qd1X = false
        }
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.X420D)this.maplet.$_T("move", e.target)
    };
    var M4KsO = function (e) {
        if (!px)this.$93Sj = false;
        p2UG5.apply(this, [e])
    };
    var C2vQ = function (e) {
        if (this.$93Sj && !this.qd1X)this.qd1X = true
    };
    this.setContextMenu = function (menu) {
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet)this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this))this.contextmenu.addOverlay(this)
        } else if (!menu) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom)return null;
        if (typeof dom.id == "string" && dom.id.indexOf("traffic") != -1 && this.traffic)return this.pathNodeMenu; else return this.contextmenu
    };
    this.setPathNodeMenu = function (menu) {
        this.pathNodeMenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.pathNodeMenu.maplet)this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this))this.pathNodeMenu.addOverlay(this)
        } else if (!menu) {
            this.removePathNodeMenu()
        }
    };
    this.removePathNodeMenu = function () {
        if (this.pathNodeMenu) {
            this.pathNodeMenu.removeOverlay(this);
            this.pathNodeMenu = null
        }
    };
    this.setBrush = function (W$X36) {
        if (!(W$X36 instanceof MBrush))return;
        this.brush = W$X36;
        if (!HMum5) {
            if (this.z0 && this.Ad && this.zY) {
                this.z0.strokecolor = W$X36.color;
                this.z0.strokeweight = W$X36.stroke + 'px';
                this.Ad.opacity = parseInt(W$X36.stroke) == 0 ? 0 : W$X36.transparency / 100.0;
                this.Ad.fill = W$X36.fill;
                this.Ad.endarrow = W$X36.arrow ? "classic" : "none";
                this.Ad.dashstyle = parseInt(W$X36.style) ? "dash" : "";
                this.zY.opacity = ((W$X36.bgtransparency) / 100);
                this.zY.color = W$X36.bgcolor
            }
        } else {
            if (this.arrow) {
                this.arrow.setAttribute("fill", W$X36.color);
                this.arrow.setAttribute("fill-opacity", W$X36.bgtransparency / 100 + 0.3)
            }
            if (this.Ad) {
                this.Ad.setAttribute("marker-end", W$X36.arrow ? "url(#svgArrow)" : "");
                this.Ad.setAttribute("stroke", W$X36.color);
                this.Ad.setAttribute("stroke-width", W$X36.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", W$X36.transparency / 100);
                this.Ad.setAttribute("style", parseInt(W$X36.style) ? "stroke-dasharray:10,15" : "");
                this.Ad.setAttribute("fill-opacity", W$X36.bgtransparency / 100);
                this.Ad.setAttribute("fill", (W$X36.fill) ? W$X36.bgcolor : "none")
            }
        }
        if (this.brush.fill != W$X36.fill)this.update()
    };
    this.setInfoWindow = function (tL17) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible())this.maplet.hideBubble();
            this.info = null
        }
        if (tL17) {
            this.info = tL17;
            this.info.setOverlay(this)
        }
    };
    this.setPoints = function (pts) {
        this.pts = pts;
        if (this.maplet)this.update()
    };
    this.c0d = function (Aa) {
        if (this.z0 && Aa && Aa.length > 0) {
            var wQk6 = Math.max(this.Wl1 - this.tn, this.T282 - this.to), AsUV = parseInt(this.brush.stroke) * 3, O804 = parseInt(this.brush.overlap.stroke) * 3;
            if (!HMum5) {
                _removeNode(document.getElementById("fix_id"));
                var s = document.createElement("script");
                s.id = "fix_id";
                document.body.insertBefore(s, document.body.firstChild);
                this.z0.style.display = "none";
                this.z0.path = Aa.join(" ") + " e";
                this.z0.style.display = "";
                if (this.T9E2) {
                    this.T9E2.style.display = "none";
                    this.T9E2.path = Aa.join(" ") + " e";
                    this.T9E2.style.display = ""
                }
                if (this.S97) {
                    if (this.Ad) {
                        this.Ad.endarrow = 'none';
                        var gq0 = wQk6 + parseInt(this.brush.stroke);
                        if (AsUV < gq0 && this.brush.arrow) {
                            (!this.brush.fill) && (this.Ad.endarrow = 'classic')
                        }
                    }
                    if (this.K486) {
                        this.K486.endarrow = 'none';
                        var gq0 = wQk6 + parseInt(this.brush.overlap.stroke);
                        if (O804 < gq0 && this.brush.arrow) {
                            (!this.brush.fill) && (this.K486.endarrow = 'classic')
                        }
                    }
                }
            } else {
                var KO38 = this;
                if (this.Ad) {
                    this.Ad.setAttribute("d", Aa.join(" "));
                    if (px) {
                        HNt(this.Ad, 'marker-end')
                    } else {
                        KO38.Ad.setAttribute("marker-end", "")
                    }
                    var gq0 = wQk6 + parseInt(this.brush.stroke);
                    if (AsUV < gq0 && Aa[0].indexOf('L') > -1 && this.brush.arrow) {
                        window.setTimeout(function () {
                            (!KO38.brush.fill) && KO38.Ad && KO38.Ad.setAttribute("marker-end", "url(#svgArrow)")
                        }, 0)
                    }
                }
                if (this.T9E2) {
                    this.T9E2.setAttribute("d", Aa.join(" "));
                    if (px) {
                        HNt(this.T9E2, 'marker-end')
                    } else {
                        KO38.T9E2.setAttribute("marker-end", "")
                    }
                    var gq0 = wQk6 + parseInt(this.brush.overlap.stroke);
                    if (O804 < gq0 && Aa[0].indexOf('L') > -1 && this.brush.arrow) {
                        window.setTimeout(function () {
                            (!KO38.brush.fill) && KO38.T9E2 && KO38.T9E2.setAttribute("marker-end", "url(#svgArrow)")
                        }, 0)
                    }
                }
            }
        }
    };
    this.update = function () {
        this.z9 = document.getElementById(this.id + "vNodeLayer");
        if (this.bEditable || this.maplet.sS == ts.tu) {
            if ((!this.traffic || (this.traffic && !this.qo)) && this.z9) {
                this.J9aT()
            }
            if (!this.z9) {
                this.z9 = document.createElement("div");
                this.z9.id = this.id + "vNodeLayer";
                this.z9.style.position = "absolute";
                this.z9.style.display = "none";
                this.z9.unselectable = "on";
                this.z9.style.zIndex = 1;
                this.zX.appendChild(this.z9)
            }
            if (this.traffic) {
                var HwP8 = document.getElementById(this.id + "_node_traffic");
                if (HwP8 == null) {
                    HwP8 = document.createElement("IMG");
                    HwP8.style.width = CTLIMG_RESOURCE[0].w + "px";
                    HwP8.style.height = CTLIMG_RESOURCE[0].h + "px";
                    if (m9o43) {
                        HwP8.src = sX;
                        HwP8.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);"
                    } else {
                        HwP8.src = CTLIMG_RESOURCE[0].url
                    }
                    HwP8.id = this.id + "_node_traffic";
                    HwP8.style.position = "absolute";
                    HwP8.unselectable = "on";
                    HwP8.alt = lt;
                    HwP8.title = lt;
                    HwP8.style.left = "-65px";
                    HwP8.style.top = "-112px";
                    HwP8.C05 = "no";
                    HwP8.style.cursor = "pointer";
                    HwP8.onmousedown = function () {
                        return false
                    };
                    lf7(HwP8, "oid", this.id);
                    this.z9.style.width = "11px";
                    this.z9.style.height = "11px";
                    this.z9.style.overflow = "hidden";
                    this.z9.appendChild(HwP8)
                }
                if (!this.qo)this.z9.style.display = "none"
            }
        }
        cS5.apply(this);
        this.aP = [];
        this.aR = [];
        var us = 10;
        if (this.pts == null || this.pts.length <= 0) {
            return
        }
        var cY = false;
        var tn = this.maplet.width;
        var to = this.maplet.height;
        this.tn = Number.MAX_VALUE;
        this.to = this.tn;
        this.Wl1 = -Number.MAX_VALUE;
        this.T282 = this.Wl1;
        this.P440 = [];
        var P22EX = {min: {x: -this.maplet.width, y: -this.maplet.height}, max: {x: this.maplet.width * 2, y: this.maplet.height * 2}};
        var gF = null, Ye$7A = null;
        var pts = [];
        var pn = [];
        for (var qC = 0; qC < this.pts.length; qC++) {
            var pt = this.pts[qC];
            if (pt.inLevelRange(this.maplet.AG)) {
                pts.push(pt);
                pn.push(qC)
            }
        }
        for (var qC = 0; qC < pts.length; qC++) {
            var pt = pts[qC];
            if (!pt.getPid()) {
                continue
            }
            if (!pt.maplet)pt.initialize(this.maplet);
            if (this.maplet.MT$) {
                if (this.maplet.__RH != pt.__RH) {
                    pt.mapX += Y32k(this.maplet.pNt);
                    pt.mapY += Y32k(this.maplet.$5D2);
                    pt.__RH = this.maplet.__RH
                }
            } else {
                pt.recalcScreenCoords()
            }
            var _o3 = pts[(qC == pts.length - 1) ? qC : qC + 1];
            if (!_o3.maplet)_o3.initialize(this.maplet);
            if (this.maplet.MT$) {
                if (this.maplet.__RH != _o3.__RH) {
                    _o3.mapX += Y32k(this.maplet.pNt);
                    _o3.mapY += Y32k(this.maplet.$5D2);
                    _o3.__RH = this.maplet.__RH
                }
            } else {
                _o3.recalcScreenCoords()
            }
            this.aP.push(pt.mapX);
            this.aR.push(pt.mapY);
            this.tn = Math.min(this.tn, pt.mapX);
            this.to = Math.min(this.to, pt.mapY);
            this.Wl1 = Math.max(this.Wl1, pt.mapX);
            this.T282 = Math.max(this.T282, pt.mapY);
            var wq2p = {HxR: {x: pt.mapX, y: pt.mapY}, $63: {x: _o3.mapX, y: _o3.mapY}};
            var i00I = !this.brush.fill ? _55(wq2p, P22EX) : true;
            if (i00I) {
                if (!gF) {
                    gF = [wq2p.HxR];
                    Ye$7A = wq2p.HxR
                } else if (wq2p.HxR.x != Ye$7A.x || wq2p.HxR.y != Ye$7A.y) {
                    gF.push(wq2p.HxR);
                    Ye$7A = wq2p.HxR
                }
                if (wq2p.$63.x != Ye$7A.x || wq2p.$63.y != Ye$7A.y) {
                    gF.push(wq2p.$63);
                    Ye$7A = wq2p.$63
                }
            }
            if ((!i00I && gF) || (wq2p.$63.x != _o3.mapX || wq2p.$63.y != _o3.mapY)) {
                if (gF.length >= 2)this.P440.push(gF);
                gF = null;
                Ye$7A = null
            }
        }
        if (gF) {
            if (this.S97 && gF.length == 1) {
                var _$72j = gF[0].x;
                var Evkh = gF[0].y;
                gF.push({x: _$72j, y: Evkh})
            }
            if (gF.length >= 2)this.P440.push(gF);
            gF = null;
            Ye$7A = null
        }
        var Aa = [];
        if (this.P440.length > 0) {
            for (var i = 0; i < this.P440.length; i++) {
                var zh = [];
                var pt = null;
                for (var qC = 0; qC < this.P440[i].length; qC++) {
                    pt = this.P440[i][qC];
                    if (qC != 0)zh.push(pt.x + "," + pt.y)
                }
                pt = this.P440[i][0];
                Aa.push("M" + pt.x + "," + pt.y + " L" + zh.join(!HMum5 ? "," : " L"))
            }
            if (this.brush.fill && this.S97) {
                Aa.push(HMum5 ? 'Z' : 'x')
            }
        } else {
            Aa.push('M0,0')
        }
        Ye$7A = null;
        for (var i = 0; i < this.aP.length; i++) {
            var x = this.aP[i];
            var y = this.aR[i];
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.traffic) {
                var r = us + 1;
                if (Ye$7A)r = Math.abs(x - Ye$7A.x) + Math.abs(y - Ye$7A.y);
                if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height && r > us) {
                    var z7 = document.getElementById(this.id + "_node_" + i);
                    if (z7 == null) {
                        z7 = new Image();
                        z7.id = this.id + "_node_" + i;
                        z7.qf = i;
                        z7.qk = pn[i];
                        z7.src = ul;
                        z7.unselectable = "on";
                        z7.alt = lt;
                        z7.title = lt;
                        z7.style.position = "absolute";
                        z7.rEW = this;
                        z7.onmousedown = function () {
                            return false
                        };
                        if (this.pts.length > 2) {
                            z7.contextmenu = this.um
                        }
                    }
                    z7.style.left = (x - 5) + "px";
                    z7.style.top = (y - 5) + "px";
                    this.z9.appendChild(z7);
                    Ye$7A = {x: x, y: y}
                }
                var $9_4 = 0, D808 = 0;
                if (r > us) {
                    if (i == 0) {
                        if (this.brush.fill) {
                            $9_4 = (x + this.aP[this.aP.length - 1]) / 2 - 5;
                            D808 = (y + this.aR[this.aP.length - 1]) / 2 - 5
                        } else {
                            continue
                        }
                    } else {
                        $9_4 = (x + this.aP[i - 1]) / 2 - 5;
                        D808 = (y + this.aR[i - 1]) / 2 - 5
                    }
                }
                if (Math.abs($9_4 - x) < 20 && Math.abs(D808 - y) < 20) {
                    continue
                }
                x = $9_4;
                y = D808;
                if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height) {
                    var z8 = document.getElementById(this.id + "_midnode_" + i);
                    if (z8 == null) {
                        z8 = new Image();
                        z8.id = this.id + "_midnode_" + i;
                        z8.qf = i;
                        z8.qk = pn[i];
                        z8.unselectable = "on";
                        z8.src = ul;
                        z8.alt = lt;
                        z8.title = lt;
                        z8.style.position = "absolute";
                        z8.style.filter = "alpha(opacity=60);";
                        z8.style.MozOpacity = 0.6;
                        z8.style.opacity = 0.6;
                        z8.onmousedown = function () {
                            return false
                        }
                    }
                    z8.style.left = x + "px";
                    z8.style.top = y + "px";
                    this.z9.appendChild(z8)
                }
            }
        }
        ;
        this.c0d(Aa);
        var wH70 = this.options.dirmark;
        if (this.maplet.AG >= wH70.minLevel && this.maplet.AG <= wH70.maxLevel) {
            for (var i = 1; i < pn.length; i++) {
                if (typeof wH70.Cpq[pn[i]] == "undefined")continue;
                if (pn[i] == this.pts.length - 1)break;
                var pt = pts[i];
                if (pt.mapX > 0 && pt.mapX < this.maplet.width && pt.mapY > 0 && pt.mapY < this.maplet.height) {
                    var c = 1, IE2 = pts[i - c];
                    while (pt.mapX == IE2.mapX && pt.mapY == IE2.mapY && (i - (c + 1)) >= 0) {
                        IE2 = pts[i - (++c)]
                    }
                    if (pt.mapX == IE2.mapX && pt.mapY == IE2.mapY)continue;
                    G0rQ4.apply(this, [IE2.mapX, IE2.mapY, pt.mapX, pt.mapY])
                }
            }
        }
        if (this.isRefreshMkIndex && !(this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly))this.refreshMarkerZIndex()
    };
    this.refreshMarkerZIndex = function () {
        if (!this.U53() || !this.maplet)return;
        var cJg8 = this.maplet.getMarkersInPolygon(this);
        var j03 = new Object();
        if (cJg8.length > 0) {
            for (var i = 0; i < cJg8.length; i++) {
                if (this.bEditable && !cJg8[i].bEditable) {
                    cJg8[i].setZIndex(-1)
                } else if (cJg8[i].icon && cJg8[i].icon.div.style.zIndex < 0) {
                    cJg8[i]._9w()
                }
                j03[cJg8[i].id] = cJg8[i]
            }
        }
        for (var qC in this.t48x9) {
            if (!j03[this.t48x9[qC].id]) {
                if (typeof this.t48x9[qC]._9w == "function") {
                    this.t48x9[qC]._9w()
                }
            }
        }
        this.t48x9 = j03
    };
    this.U53 = function () {
        if (!this.Ad)return false;
        return this.Ad.getAttribute("fill") != "none" || this.Ad.getAttribute("fill") == eval(true)
    };
    this.Uo3P4 = function (S5JSl) {
        if (!this.t48x9[S5JSl.id])this.t48x9[S5JSl.id] = S5JSl
    };
    this.J9aT = function () {
        if (this.z9) {
            var wp5y3 = this.z9.childNodes;
            for (var i = 0; i < wp5y3.length; i++) {
                wp5y3[i].onmousedown = null;
                wp5y3[i].contextmenu = null;
                wp5y3[i].rEW = null
            }
            _removeNode(this.z9);
            this.z9 = null
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.U53() && this.bEditable) {
            this.bEditable = false;
            this.refreshMarkerZIndex();
            if (!finalize)this.bEditable = true
        }
        if (px) {
            if (this.z0) {
                this.z0.onmouseover = null;
                this.z0.onmouseout = null;
                this.z0.onmousedown = null;
                this.z0.onmouseup = null
            }
            if (this.T9E2) {
                this.T9E2.onmouseover = null;
                this.T9E2.onmouseout = null;
                this.T9E2.onmousedown = null;
                this.T9E2.onmouseup = null
            }
        }
        for (var l8 in this.ao) {
            if (l8.substring(0, 8) == "vstroke_") {
                if (this.Ad)MEvent.removeBuiltInListener(this.Ad, l8.substring(8), this.ao[l8])
            } else if (l8.substring(0, 10) == "vpolyline_") {
                if (this.z0)MEvent.removeBuiltInListener(this.z0, l8.substring(10), this.ao[l8])
            } else if (l8.substring(0, 12) == "overlapLine_") {
                if (this.T9E2)MEvent.removeBuiltInListener(this.T9E2, l8.substring(12), this.ao[l8])
            } else {
                if (this.maplet) {
                    var _419R = this.ao[l8];
                    if (_xY34(_419R)) {
                        for (var i = 0; i < _419R.length; i++)MEvent.removeBuiltInListener(this.maplet.map, l8, _419R[i])
                    } else {
                        MEvent.removeBuiltInListener(this.maplet.map, l8, _419R)
                    }
                }
            }
            this.ao[l8] = null;
            if (finalize)delete this.ao[l8]
        }
        if (finalize) {
            this.ao = null;
            this.removeContextMenu();
            if (this.um) {
                this.um.remove(true);
                this.um = null
            }
        }
        cS5.apply(this);
        if (typeof this.T9E2 == "object" && this.T9E2) {
            _removeNode(this.T9E2);
            this.T9E2 = null
        }
        if (!HMum5) {
            if (typeof this.z0 == "object" && this.z0) {
                _removeNode(this.z0);
                this.z0 = null
            }
        } else {
            if (typeof this.Ad == "object" && this.Ad) {
                _removeNode(this.Ad);
                this.Ad = null
            }
        }
        if (this.maplet) {
            if (this.maplet.$r701 == this)this.maplet.$r701 = null;
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        this.J9aT();
        if (finalize)this.maplet = null
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getCenterXY = function () {
        var $9_4 = 0;
        var D808 = 0;
        if (this.brush.fill) {
            $9_4 = this.tn + (this.Wl1 - this.tn) / 2;
            D808 = this.to + (this.T282 - this.to) / 2
        } else if (this.maplet) {
            var pn = Math.ceil(this.aP.length / 2) - (this.aP.length % 2);
            if (pn < this.aP.length) {
                $9_4 = this.aP[pn];
                D808 = this.aR[pn]
            }
        }
        return{x: $9_4, y: D808}
    };
    this.getCenterPt = function () {
        if (this.tn != Number.MAX_VALUE && this.maplet) {
            var Qp9 = this.getCenterXY();
            var pt = new MPoint(this.maplet.toMapCoordinate(Qp9.x, Qp9.y));
            pt.initialize(this.maplet);
            return pt
        } else {
            return null
        }
    };
    this.getPointsByLevelGroup = function (b9L, a86) {
        var sIp = [];
        b9L = Y32k(b9L);
        b9L = Math.max(Math.min(b9L, this.pts.length - 1), 0);
        a86 = Y32k(a86, this.pts.length - 1);
        a86 = Math.max(Math.min(a86, this.pts.length - 1), 0);
        var pt = this.pts[b9L];
        pt.levelGroup = 3;
        sIp.push(pt);
        for (var i = b9L + 1; i < a86; i++) {
            if (this.pts[i].inLevelRange(this.maplet.AG)) {
                pt = this.pts[i];
                pt.levelGroup = 3;
                sIp.push(pt)
            }
        }
        var pt = this.pts[a86];
        pt.levelGroup = 3;
        sIp.push(pt);
        return sIp
    };
    this.openInfoWindow = function (e) {
        if (this.maplet) {
            if (typeof e != "undefined" && (e.target.id == this.id || e.target == this.T9E2) && this.maplet.R9sb) {
                this.maplet.R9sb = false;
                if (this.maplet.t41 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this))return
            }
            if (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)return;
            if (this.info && !this.info.getOverlay())this.info.setOverlay(this);
            if (typeof e == "undefined") {
                if (this.info != null && this.pts.length >= 2) {
                    var x6434 = this.getCenterXY();
                    var $9_4 = x6434.x;
                    var D808 = x6434.y;
                    if ($9_4 >= this.maplet.width * 1.5 || $9_4 <= -(this.maplet.width / 2) || D808 <= -(this.maplet.height / 2) || D808 >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(new MPoint(this.maplet.toMapCoordinate($9_4, D808)));
                        $9_4 = this.maplet.width / 2;
                        D808 = this.maplet.height / 2
                    }
                    if (iToolTipStyle == 2) {
                        this.x = $9_4;
                        this.y = D808;
                        MEvent.trigger(this, "click", this)
                    } else {
                        this.maplet.wN($9_4, D808, this.info, "", "", true)
                    }
                }
            } else if ((e.target.id == this.id || e.target == this.T9E2) && !this.maplet.R9sb) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top;
                if (iToolTipStyle == 2) {
                    this.x = x;
                    this.y = y;
                    MEvent.trigger(this, "click", this)
                } else {
                    if (MEvent.contains(this, "click") > 0) {
                        with (this.maplet) {
                            var B45 = e.clientX - offsetX - left;
                            var $28y6 = e.clientY - offsetY - top;
                            var lm9S = cq.zn(zp(B45, $28y6), zo(B45, $28y6))
                        }
                        if (apiType == 1) {
                            var pt = new MPoint(lm9S);
                            pt.initialize(this.maplet);
                            MEvent.trigger(this, 'click', this, e, pt)
                        } else MEvent.trigger(this, 'click', this, e, lm9S)
                    }
                    if (this.info) {
                        if (!this.info.getOverlay())this.info.setOverlay(this);
                        this.maplet.wN(x, y, this.info, false);
                        avBubble.fg5 = true
                    }
                }
            }
        }
    };
    this.wQ = function (fg) {
        if (this.z9 != null) {
            if (fg) {
                this.z9.style.display = "block";
                this.z9.style.zIndex = 10;
                this.maplet.$r701 = this
            } else {
                this.z9.style.display = "none";
                this.z9.style.zIndex = 0;
                this.maplet.$r701 = null
            }
        }
    };
    this.uG = function (e) {
        if (!this.maplet)return;
        if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly || this.maplet.cN) {
            return
        }
        if (this.traffic) {
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.qo && (!this.maplet.$r701 || this.maplet.$r701 == this) && !this.ls) {
                if (typeof e.target.getAttribute == "function" && e.target.getAttribute(P1uR9) == "marker") {
                    this.wQ(false);
                    return
                }
                var kQq = this.e180([e.clientX - this.maplet.offsetX, e.clientY - this.maplet.offsetY], this.P440);
                if (this.zX != null && this.maplet && kQq != null || fJ(e.target, this.z9)) {
                    this.wQ(true);
                    var fE16C = {x: -10, y: -10};
                    if (kQq != null && this.maplet) {
                        fE16C = this.KRm5(kQq[0], kQq[1], [e.clientX - this.maplet.offsetX, e.clientY - this.maplet.offsetY]);
                        this.kQq = kQq;
                        if (px)this.z0.style.cursor = "pointer"; else this.Ad.style.cursor = "pointer"
                    } else {
                        if (px)this.z0.style.cursor = "default"; else this.Ad.style.cursor = "default"
                    }
                    this.X$0 = true;
                    clearTimeout(this.U9301);
                    this.U9301 = null;
                    var Dl8t = [0, 0];
                    switch (this.L2sI) {
                        case 1:
                            Dl8t = [0, 1];
                            break;
                        case 2:
                            Dl8t = [1, 0];
                            break;
                        case 3:
                            Dl8t = [1, 1];
                            break;
                        case 4:
                            Dl8t = [0, 0];
                            break;
                        default:
                            Dl8t = [0, 0];
                            break
                    }
                    this.z9.style.left = (fE16C.x - (px ? (5 + Dl8t[0]) : 5)) + "px";
                    this.z9.style.top = (fE16C.y - (px ? (5 + Dl8t[1]) : 5)) + "px"
                } else {
                    if (px)this.z0.style.cursor = "default"; else this.Ad.style.cursor = "default";
                    if (this.z9 != null && this.z9.style.display == "none")return;
                    if (this.U9301 != null)return;
                    this.X$0 = false;
                    this.U9301 = getTimeout(this, function () {
                        if (this.X$0)return;
                        if (this.z9 != null && this.z9.style.display == "none")return;
                        this.wQ(false);
                        clearTimeout(this.U9301);
                        this.U9301 = null
                    }, 500)
                }
            } else if (this.qo) {
                this.BpNB9(e)
            }
        } else {
            if (this.bEditable || this.maplet.sS == ts.tu) {
                if (this.ls || this.zX && this.maplet && fJ(e.target, HMum5 ? this.Ad : this.z0) || fJ(e.target, this.z9) || fJ(e.target, this.T9E2) || e.target.getAttribute(P1uR9) == "linemarker") {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1
                        } else {
                            this.Ad.setAttribute("stroke-opacity", 1)
                        }
                    }
                    this.wQ(true)
                } else {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0
                        } else {
                            this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100.0)
                        }
                    }
                    this.wQ(false)
                }
            }
        }
    };
    this.w0 = function (e) {
        if (this.zX != null && this.maplet && (!HMum5 && e.button == 1 || HMum5 && e.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(e.target, !HMum5 ? this.z9 : this.Ad) || HMum5 && fJ(e.target, this.z9)) && e.target.id.indexOf("node") != -1) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            this.l0 = (px || s_k2) ? e.offsetX : e.layerX;
            this.na = (px || s_k2) ? e.offsetY : e.layerY;
            $05D6 = e.target;
            if (this.wk == null) {
                if (!HMum5) {
                    this.wk = document.createElement("v:shape");
                    this.wk.style.width = "1px";
                    this.wk.style.height = "1px";
                    this.wk.coordsize = "1,1";
                    this.wk.unselectable = "on";
                    this.wk.id = this.id;
                    this.wk.strokecolor = this.brush.color;
                    this.wk.strokeweight = this.brush.stroke + 'px';
                    this.wk.fill = this.brush.fill;
                    this.wk.filled = this.brush.fill;
                    this.wk.style.position = "absolute";
                    this.Ac = document.createElement("v:stroke");
                    this.Ac.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1;
                    this.Ac.joinstyle = "round";
                    this.Ac.endcap = "round";
                    this.Ac.fill = this.brush.fill;
                    this.Ac.dashstyle = "dash";
                    var Ab = document.createElement("v:fill");
                    Ab.opacity = ((this.brush.bgtransparency) / 100);
                    Ab.color = this.brush.bgcolor;
                    this.wk.appendChild(Ab)
                } else {
                    this.wk = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this.wk.setAttribute("version", "1.1");
                    this.wk.setAttribute("overflow", "visible");
                    this.wk.setAttribute("viewBox", "0 0 " + this.maplet.width + " " + this.maplet.height);
                    this.wk.setAttribute("height", this.maplet.height + "px");
                    this.wk.setAttribute("width", this.maplet.width + "px");
                    this.wk.setAttribute("unselectable", "on");
                    this.Ac = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.Ac.setAttribute("MStrName", this.toString());
                    this.Ac.setAttribute("stroke-linejoin", "round");
                    this.Ac.setAttribute("stroke-linecap", "round");
                    this.Ac.setAttribute("stroke", this.brush.color);
                    this.Ac.setAttribute("stroke-width", this.brush.stroke + "px");
                    this.Ac.setAttribute("stroke-opacity", 1);
                    this.Ac.setAttribute("style", "stroke-dasharray:10,15");
                    this.Ac.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                    this.Ac.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                    if (this.brush.arrow) {
                        this.arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        this.arrow.setAttribute("d", px ? "M 0 0 L 40 20 L 0 40 L 16 20 Z" : "M 0 0 L 10 5 L 0 10 L 4 5 z");
                        this.arrow.setAttribute("fill", this.brush.color);
                        this.arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                        this.zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                        this.zY.setAttribute("id", "arrow" + this.id);
                        this.zY.setAttribute("viewBox", px ? "0 0 40 40" : "0 0 10 10");
                        this.zY.setAttribute("refX", px ? "24" : "6");
                        this.zY.setAttribute("refY", px ? "20" : "5");
                        this.zY.setAttribute("markerUnits", "strokeWidth");
                        this.zY.setAttribute("orient", "auto");
                        this.zY.appendChild(this.arrow);
                        this.wk.appendChild(this.zY)
                    }
                }
            }
            this.wk.appendChild(this.Ac);
            this.zX.appendChild(this.wk)
        }
    };
    this.f9 = function (e) {
        if ($05D6 != null && (this.bEditable || this.maplet.sS == ts.tu) && $05D6.id.indexOf("node") > 0 && this.qo) {
            if ($05D6 != null) {
                if (avBubble.overlay && avBubble.overlay.id == this.id)this.maplet.hideBubble();
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                $05D6.style.left = (parseInt(x)) + "px";
                $05D6.style.top = (parseInt(y)) + "px";
                this.lw = new Date().getTime();
                this.ls = true;
                var ps = parseInt($05D6.qf);
                var QN45l, m9f9;
                var Aa = "M";
                QN45l = (ps == 0) ? (this.aP.length - 1) : (ps - 1);
                if ($05D6.id.indexOf("_midnode_") > 0) {
                    Aa += this.aP[QN45l] + ',' + this.aR[QN45l] + ' L' + (x + 5) + ',' + (y + 5);
                    Aa += (!HMum5 ? "," : "L") + this.aP[ps] + ',' + this.aR[ps]
                } else {
                    m9f9 = (ps == this.aP.length - 1) ? (0) : (ps + 1);
                    if (ps == 0) {
                        if (this.brush.fill) {
                            Aa += this.aP[QN45l] + ',' + this.aR[QN45l] + ' L' + (x + 5) + ',' + (y + 5) + (!HMum5 ? "," : " L")
                        } else {
                            Aa += (x + 5) + ',' + (y + 5) + ' L'
                        }
                    } else {
                        Aa += this.aP[QN45l] + ',' + this.aR[QN45l] + ' L' + (x + 5) + ',' + (y + 5) + (!HMum5 ? "," : " L")
                    }
                    if (ps < this.aP.length - 1 || this.brush.fill) {
                        Aa += this.aP[m9f9] + ',' + this.aR[m9f9]
                    }
                }
                if (this.wk != null) {
                    if (!HMum5) {
                        this.wk.path = Aa
                    } else if (this.wk.points) {
                        this.wk.points.value = Aa
                    } else {
                        this.Ac.setAttribute("d", Aa)
                    }
                }
            }
        }
    };
    this.l1 = function (e) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if ($05D6 != null && this.ls) {
                var x = parseInt(e.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
                var y = parseInt(e.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
                var ps = Y32k($05D6.qk);
                var g9g = new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5));
                if ($05D6.id.indexOf("_midnode_") > 0)this.pts.splice(ps, 0, g9g); else this.pts.splice(ps, 1, g9g);
                this.lw = new Date().getTime();
                this.ls = false;
                $05D6 = null;
                this.update();
                MEvent.trigger(this, "drag", this, g9g);
                MEvent.trigger(this.maplet, "edit", this, g9g)
            }
            this.qo = false;
            if (this.wk.parentNode != null) {
                _removeNode(this.wk);
                this.wk = null
            }
        }
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.removeNode = function (g_341, menu, overlay) {
        var qf = menu.N91;
        if (typeof qf != "undefined") {
            if (qf.toString().indexOf(this.id) >= 0 && qf.toString().lastIndexOf("_") >= 0) {
                qf = qf.toString().substring(qf.toString().lastIndexOf("_") + 1)
            }
            qf = parseInt(qf);
            if (!isNaN(qf) && qf < this.pts.length) {
                this.pts.splice(qf, 1);
                MEvent.trigger(this, "edit", this);
                MEvent.trigger(this.maplet, "edit", this);
                if (this.wk != null && this.wk.parentNode != null) {
                    _removeNode(this.wk);
                    this.wk = null
                }
                this.update()
            }
        }
    };
    MEvent.bind(this.un, "select", this, this.removeNode);
    this.v31E = function (UGruv, GP42, nc, NX1) {
        this.g53 = function (f4XU) {
            var $8sM = Math.atan2(GP42 - f4XU.u1J2d, UGruv - f4XU.u15) - f4XU.m85;
            var E53 = Math.atan2(NX1 - f4XU.u1J2d, nc - f4XU.u15) - f4XU.m85;
            while ($8sM < 0)$8sM += 2 * Math.PI;
            while (E53 < 0)E53 += 2 * Math.PI;
            while ($8sM > 2 * Math.PI)$8sM -= 2 * Math.PI;
            while (E53 > 2 * Math.PI)E53 -= 2 * Math.PI;
            return($8sM - Math.PI) * (E53 - Math.PI) < 0 && ($8sM > Math.PI ? 2 * Math.PI - $8sM : $8sM) + (E53 > Math.PI ? 2 * Math.PI - E53 : E53) < Math.PI
        }
    };
    this.tI8O$ = function (u15, u1J2d, m85) {
        this.u15 = u15;
        this.u1J2d = u1J2d;
        this.m85 = m85
    };
    this.SAq = function (E3767) {
        var v6 = null;
        var f6xb = parseInt(E3767[0].x);
        var WD6T0 = parseInt(E3767[0].y);
        var e153 = parseInt(E3767[1].x);
        var Fn7 = parseInt(E3767[1].y);
        var DY792 = Math.abs(f6xb - e153);
        var i33 = Math.abs(WD6T0 - Fn7);
        var Jh81 = parseInt(this.brush.stroke);
        var g4 = Jh81 * i33 / Math.sqrt(Math.pow(DY792, 2) + Math.pow(i33, 2));
        var g5 = g4 * DY792 / i33;
        var $_t4 = 4;
        this.L2sI = 0;
        if (f6xb == e153) {
            this.L2sI = 1;
            v6 = [
                [f6xb - Jh81 - $_t4, WD6T0],
                [f6xb + Jh81 + $_t4, WD6T0],
                [e153 + Jh81 + $_t4, Fn7],
                [e153 - Jh81 - $_t4, Fn7]
            ]
        } else if (WD6T0 == Fn7) {
            this.L2sI = 2;
            v6 = [
                [f6xb, WD6T0 + Jh81 + $_t4],
                [e153, Fn7 + Jh81 + $_t4],
                [e153, Fn7 - Jh81 - $_t4],
                [f6xb, WD6T0 - Jh81 - $_t4]
            ]
        } else if (WD6T0 < Fn7 && f6xb < e153) {
            this.L2sI = 3;
            v6 = [
                [parseInt(f6xb - g4 - $_t4), parseInt(WD6T0 + g5 + $_t4)],
                [parseInt(e153 - g4 - $_t4), parseInt(Fn7 + g5 + $_t4)],
                [parseInt(e153 + g4 + $_t4), parseInt(Fn7 - g5 - $_t4)],
                [parseInt(f6xb + g4 + $_t4), parseInt(WD6T0 - g5 - $_t4)]
            ]
        } else if (WD6T0 > Fn7 && f6xb < e153) {
            this.L2sI = 4;
            v6 = [
                [parseInt(f6xb - g4 - $_t4), parseInt(WD6T0 - g5 - $_t4)],
                [parseInt(e153 - g4 - $_t4), parseInt(Fn7 - g5 - $_t4)],
                [parseInt(e153 + g4 + $_t4), parseInt(Fn7 + g5 + $_t4)],
                [parseInt(f6xb + g4 + $_t4), parseInt(WD6T0 + g5 + $_t4)]
            ]
        } else if (WD6T0 > Fn7 && f6xb > e153) {
            this.L2sI = 3;
            v6 = [
                [parseInt(f6xb - g4 - $_t4), parseInt(WD6T0 + g5 + $_t4)],
                [parseInt(f6xb + g4 + $_t4), parseInt(WD6T0 - g5 - $_t4)],
                [parseInt(e153 + g4 + $_t4), parseInt(Fn7 - g5 - $_t4)],
                [parseInt(e153 - g4 - $_t4), parseInt(Fn7 + g5 + $_t4)]
            ]
        } else if (WD6T0 < Fn7 && f6xb > e153) {
            this.L2sI = 4;
            v6 = [
                [parseInt(f6xb - g4 - $_t4), parseInt(WD6T0 - g5 - $_t4)],
                [parseInt(f6xb + g4 + $_t4), parseInt(WD6T0 + g5 + $_t4)],
                [parseInt(e153 + g4 + $_t4), parseInt(Fn7 + g5 + $_t4)],
                [parseInt(e153 - g4 - $_t4), parseInt(Fn7 - g5 - $_t4)]
            ]
        }
        return v6
    };
    this.ra30 = [];
    this.N2n = function (GHj, E3767) {
        var ub = this.SAq(E3767);
        for (var i = 0; i < ub.length; i++) {
            this.ra30.push(new this.v31E(ub[i][0], ub[i][1], ub[(i + 1) % ub.length][0], ub[(i + 1) % ub.length][1]))
        }
        var hdC3 = new this.tI8O$(GHj[0], GHj[1], parseFloat("0.523112313123"));
        var N34 = 0;
        for (var qC = 0; qC < this.ra30.length; qC++) {
            if (this.ra30[qC].g53(hdC3))N34++
        }
        this.ra30 = [];
        return N34 % 2 != 0
    };
    this.e180 = function (coords, P440) {
        for (var i = 0; i < P440.length; i++) {
            var wq2p = P440[i];
            for (var qC = 0; qC < wq2p.length - 1; qC++) {
                var HxR = wq2p[qC];
                var $63 = wq2p[qC + 1];
                if (this.N2n(coords, [HxR, $63])) {
                    return [HxR, $63]
                }
            }
        }
        return null
    };
    this.KRm5 = function (HxR, $63, KRq9) {
        var _566 = [$63.x - HxR.x, $63.y - HxR.y];
        var aRq2 = [parseInt(KRq9[0]) - HxR.x, parseInt(KRq9[1]) - HxR.y];
        var __$ = aRq2[0] * _566[0] + aRq2[1] * _566[1];
        if (__$ <= 0)return HxR;
        var Bv5 = _566[0] * _566[0] + _566[1] * _566[1];
        if (Bv5 <= __$)return $63;
        return{x: HxR.x + _566[0] * __$ / Bv5, y: HxR.y + _566[1] * __$ / Bv5}
    };
    this.IsX = function (e) {
        if (this.zX != null && this.maplet && (px && e.button == 1 || !px && e.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && fJ(e.target, this.z9)) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            var q45 = parseInt(e.target.style.left) + (px ? 1 : 0);
            var X0s1 = parseInt(e.target.style.top) + (px ? 1 : 0);
            this.l0 = ((px || s_k2) ? e.offsetX : e.layerX) + q45;
            this.na = ((px || s_k2) ? e.offsetY : e.layerY) + X0s1;
            $05D6 = e.target
        }
    };
    this.p5N76 = function (e) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            this.qo = false;
            var x = parseInt(e.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
            var y = parseInt(e.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
            if (x > 0 && y > 0) {
                MEvent.trigger(this, "nodedrag", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5))), (this.yeE35(this, this.kQq)).slice(0, 2))
            }
            this.wQ(false);
            this.X$0 = false;
            clearTimeout(this.U9301);
            this.U9301 = null
        }
        this.ls = false;
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.yeE35 = function ($AM9, MM3F) {
        var v6 = [];
        var pts = $AM9.pts;
        for (var i = 0; i < pts.length; i++) {
            if ((pts[i].mapX == MM3F[0].x && pts[i].mapY == MM3F[0].y) || (pts[i].mapX == MM3F[1].x && pts[i].mapY == MM3F[1].y)) {
                v6.push(i)
            }
        }
        return v6
    };
    this.BpNB9 = function (e) {
        if ($05D6 != null && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if ($05D6 != null) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                this.z9.style.left = (parseInt(x)) + "px";
                this.z9.style.top = (parseInt(y)) + "px";
                if (MEvent.contains(this, "nodedrag_move") > 0) {
                    var pt = new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5));
                    pt.initialize(this.maplet);
                    MEvent.trigger(this, "nodedrag_move", this, new MMarker(pt), (this.yeE35(this, this.kQq)).slice(0, 2))
                }
                this.lw = new Date().getTime();
                this.ls = true;
                with (Pj5) {
                    Oyw.x = x;
                    Oyw.y = y;
                    if (!yN) {
                        t9n2.x = x;
                        t9n2.y = y;
                        yXp6t.x = x;
                        yXp6t.y = y;
                        yN = nB(this, mobe, LPN_HOVERING_TIME)
                    }
                }
            }
        }
    };
    var mobe = function () {
        with (Pj5) {
            if (!this.qo && yN) {
                clearInterval(yN);
                yN = null;
                return
            }
            if (t9n2.x == Oyw.x && t9n2.y == Oyw.y && (Oyw.x != yXp6t.x || Oyw.y != yXp6t.y)) {
                yXp6t.x = Oyw.x;
                yXp6t.y = Oyw.y;
                MEvent.trigger(this, "drag_hovering", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(Oyw.x + 5, Oyw.y + 5))), (this.yeE35(this, this.kQq)).slice(0, 2))
            } else {
                t9n2.x = Oyw.x;
                t9n2.y = Oyw.y
            }
        }
    };
    this.appendPoint = function (QC8X8, T4e7, dirmark) {
        if (typeof QC8X8 != "object" || !(QC8X8 instanceof MPoint) || !QC8X8)throw new Error("para new_pt is not a valid MPoint object.");
        if (!QC8X8.maplet)QC8X8.initialize(this.maplet);
        this.pts.push(QC8X8);
        if (typeof dirmark != "boolean")dirmark = false;
        if (typeof T4e7 != "boolean")T4e7 = true;
        if (dirmark) {
            var wH70 = this.options.dirmark;
            wH70.pts.push(this.pts.length - 2);
            wH70.Cpq[this.pts.length - 2] = null
        }
        if (T4e7)this.update()
    };
    this.setDirMark = function (uy, refresh) {
        if (typeof uy != "object")uy = {minLevel: MAX_ZOOM_LEVEL - 1, maxLevel: MAX_ZOOM_LEVEL, pts: []};
        if (typeof uy.minLevel != "number" || uy.minLevel < MIN_ZOOM_LEVEL || uy.minLevel > MAX_ZOOM_LEVEL)uy.minLevel = MAX_ZOOM_LEVEL - 1;
        if (typeof uy.maxLevel != "number" || uy.maxLevel < MIN_ZOOM_LEVEL || uy.maxLevel > MAX_ZOOM_LEVEL)uy.maxLevel = MAX_ZOOM_LEVEL;
        uy.Cpq = {};
        if (!_xY34(uy.pts)) {
            uy.pts = []
        } else {
            for (var i = 0; i < uy.pts.length; i++)uy.Cpq[uy.pts[i]] = null
        }
        this.options.dirmark = uy;
        if (!this.maplet)return;
        if (typeof refresh != "boolean")refresh = true;
        if (refresh)this.update()
    };
    var YL3 = function (r, $y6, E4W, e2S, Cf2m7) {
        return parseInt(r + r * Math.sin(Math.PI / 180 * ($y6 + E4W)) + e2S) + "," + parseInt(r + r * Math.cos(Math.PI / 180 * ($y6 + E4W)) + Cf2m7)
    };
    var sR7 = function (size, $y6) {
        size = size * 100;
        $y6 = 180 - $y6;
        var JgL = size / 2;
        var X1ua = YL3(JgL, $y6, 0, 0, 0);
        var x7d = YL3(JgL, $y6, 125, 0, 0);
        var k6x = YL3(JgL, $y6, 235, 0, 0);
        return "M" + X1ua + " L" + x7d + "," + size / 2 + "," + size / 2 + "," + k6x + "," + X1ua + "E"
    };
    var Ot5 = function (e2S, Cf2m7, size, $y6) {
        $y6 = 180 - $y6;
        var JgL = size / 2;
        var X1ua = YL3(JgL, $y6, 0, e2S, Cf2m7);
        var x7d = YL3(JgL, $y6, 125, e2S, Cf2m7);
        var k6x = YL3(JgL, $y6, 235, e2S, Cf2m7);
        return "M " + X1ua + " L " + x7d + " L " + (size / 2 + e2S) + " " + (size / 2 + Cf2m7) + " L " + k6x + " L " + X1ua + "z"
    };
    var G0rQ4 = function (x1, N4O, x2, xWq) {
        var SG961 = null;
        var color = this.brush.dmstyle.color;
        var size = this.brush.dmstyle.size;
        var opacity = this.brush.dmstyle.transparency;
        var d656 = this.brush.dmstyle.strokeWidth;
        var wIKR = this.brush.dmstyle.strokeColor;
        var F53J6 = this.brush.dmstyle.strokeTransparency;
        var $y6 = Math.floor(Am883(x1, N4O, x2, xWq));
        var p37 = size / 2;
        zh = Math.PI / 180 * ($y6 % 360);
        var e2S = -p37 * (1 + Math.sin(zh));
        var Cf2m7 = -p37 * (1 - Math.cos(zh));
        if (px) {
            SG961 = document.createElement("v:shape");
            with (SG961.style) {
                position = "absolute";
                left = x2 + e2S + "px";
                top = xWq + Cf2m7 + "px";
                height = width = "1px";
                MozUserSelect = "none"
            }
            with (SG961) {
                setAttribute("coordsize", "100,100");
                setAttribute("filled", "t");
                setAttribute("strokecolor", wIKR);
                setAttribute("strokeweight", d656 + "px");
                setAttribute("fillcolor", color);
                setAttribute("path", sR7(size, $y6));
                setAttribute(P1uR9, "linemarker");
                setAttribute(Ux3q, "true")
            }
            var RN0 = document.createElement("v:fill");
            RN0.setAttribute("opacity", opacity / 100.0);
            var A2a7W = document.createElement("v:stroke");
            A2a7W.setAttribute("opacity", F53J6 / 100.0);
            SG961.appendChild(RN0);
            SG961.appendChild(A2a7W);
            this.zX.appendChild(SG961)
        } else {
            SG961 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            with (SG961) {
                setAttribute("d", Ot5(e2S + x2, Cf2m7 + xWq, size, $y6));
                setAttribute("fill", color);
                setAttribute("fill-opacity", opacity / 100.0);
                setAttribute("stroke", wIKR);
                setAttribute("stroke-width", d656 + "px");
                setAttribute("stroke-opacity", F53J6 / 100);
                setAttribute(P1uR9, "linemarker");
                setAttribute(Ux3q, "true")
            }
            this.maplet.B7aNf().firstChild.appendChild(SG961)
        }
        Kf34.push(SG961)
    };
    var cS5 = function () {
        if (Kf34.length > 0) {
            for (var i = 0; i < Kf34.length; i++) {
                Kf34[i].onmousedown = null;
                _removeNode(Kf34[i]);
                Kf34[i] = null
            }
            Kf34 = []
        }
    };
    this.setDirMark(this.options.dirmark, false)
};
MPolyline.Q6j = 24;
var MEllipse = function (gC, sax, say, brush, info) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "Ellipse";
    this.gC = gC;
    this.sax = typeof sax != "undefined" && !isNaN(sax) ? parseInt(sax) : 300;
    this.say = typeof say != "undefined" && !isNaN(say) ? parseInt(say) : null;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = (typeof info == "undefined") ? null : info;
    this.ao = new Array();
    this.zX = null;
    this.jC419 = null;
    this.Ad = null;
    this.zY = null;
    this.tL2 = true;
    this.data = {ix: 0, iy: 0, ax: 0, ay: 0, sax: 0, say: 0};
    this.$93Sj = false;
    this.qd1X = false;
    this.creator = MLayer.USER;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MEllipse'
    };
    this.paint = function () {
        if (!this.jC419) {
            this.zX = this.maplet.B7aNf();
            if (!HMum5) {
                this.jC419 = document.createElement("v:oval");
                this.jC419.strokecolor = this.brush.color;
                this.jC419.strokeweight = this.brush.stroke + 'px';
                this.jC419.filled = this.brush.fill;
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = (this.brush.transparency / 100.0);
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.jC419.appendChild(this.Ad);
                this.jC419.appendChild(this.zY);
                this.zX.appendChild(this.jC419)
            } else {
                this.jC419 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                this.jC419.setAttribute("stroke", this.brush.color);
                this.jC419.setAttribute("fill", this.brush.fill ? this.brush.bgcolor : 'none');
                this.jC419.setAttribute("stroke-width", this.brush.stroke);
                this.jC419.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.jC419.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.zX.firstChild.appendChild(this.jC419)
            }
            this.jC419.id = this.id;
            lf7(this.jC419, "oid", this.id);
            this.jC419.style.position = "absolute";
            this.jC419.unselectable = "on";
            this.jC419.setAttribute(Ux3q, "true");
            this.jC419.setAttribute(P1uR9, "true");
            this.ao["ellipse_mouseover"] = MEvent.bindDom(this.jC419, "mouseover", this, function (e) {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.X420D)this.maplet.$_T("crosshair", this.jC419); else if (this.info || MEvent.contains(this, "click"))this.maplet.$_T("pointer", this.jC419); else this.maplet.$_T("default", this.jC419);
                if (e.type == "mouseover")MEvent.trigger(this, "mouseover", this)
            });
            this.ao["ellipse_mouseout"] = MEvent.bindDom(this.jC419, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.X420D)this.maplet.$_T("default", this.jC419);
                MEvent.trigger(this, "mouseout", this)
            });
            this.ao["ellipse_mousedown"] = MEvent.bindDom(this.jC419, "mousedown", this, function () {
                this.$93Sj = true;
                this.qd1X = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.X420D)this.maplet.$_T("move", this.jC419)
            });
            this.ao["ellipse_mouseup"] = MEvent.bindDom(this.jC419, "mouseup", this, function (e) {
                this.$93Sj = false;
                this.ao["ellipse_mouseover"](e)
            });
            this.ao["ellipse_mousemove"] = MEvent.bindDom(this.jC419, "mousemove", this, function () {
                if (this.$93Sj && !this.qd1X)this.qd1X = true
            })
        }
        this.update()
    };
    this.setBrush = function (W$X36) {
        if (!(W$X36 instanceof MBrush))return;
        this.brush = W$X36;
        if (!HMum5) {
            if (this.jC419) {
                this.jC419.strokecolor = W$X36.color;
                this.jC419.strokeweight = W$X36.stroke + 'px';
                this.jC419.filled = this.brush.fill;
                this.Ad.opacity = (W$X36.transparency / 100.0);
                this.zY.opacity = ((W$X36.bgtransparency) / 100);
                this.zY.color = W$X36.bgcolor
            }
        } else {
            if (this.jC419) {
                this.jC419.setAttribute("stroke", W$X36.color);
                this.jC419.setAttribute("fill", this.brush.fill ? W$X36.bgcolor : 'none');
                this.jC419.setAttribute("stroke-width", W$X36.stroke);
                this.jC419.setAttribute("stroke-opacity", W$X36.transparency / 100);
                this.jC419.setAttribute("fill-opacity", W$X36.bgtransparency / 100)
            }
        }
    };
    this.update = function () {
        if (this.jC419) {
            if (!this.gC.maplet)this.gC.initialize(this.maplet);
            if (this.maplet.MT$) {
                if (this.maplet.__RH != this.gC.__RH) {
                    this.gC.mapX += this.maplet.pNt;
                    this.gC.mapY += this.maplet.$5D2;
                    this.gC.__RH = this.maplet.__RH
                }
            } else {
                this.gC.recalcScreenCoords()
            }
            var $9_4 = this.gC.mapX;
            var D808 = this.gC.mapY;
            var G_95b = parseInt(this.sax / 111111.0 / this.maplet.xg * this.maplet.imgWidth / 0.8);
            var p6W1u = G_95b;
            if (this.say)p6W1u = parseInt(this.say / 111111.0 / this.maplet.xf * this.maplet.imgHeight);
            this.data.ix = $9_4 - G_95b;
            this.data.iy = D808 - p6W1u;
            this.data.ax = $9_4 + G_95b;
            this.data.ay = D808 + p6W1u;
            this.data.sax = G_95b;
            this.data.say = p6W1u;
            if (!HMum5) {
                this.jC419.style.left = this.data.ix + "px";
                this.jC419.style.top = this.data.iy + "px";
                this.jC419.style.width = G_95b * 2 + "px";
                this.jC419.style.height = p6W1u * 2 + "px"
            } else {
                this.jC419.setAttribute("cx", $9_4 + "px");
                this.jC419.setAttribute("cy", D808 + "px");
                this.jC419.setAttribute("rx", G_95b + "px");
                this.jC419.setAttribute("ry", p6W1u + "px")
            }
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        for (var l8 in this.ao) {
            if (l8.substring(0, 8) == "ellipse_") {
                if (this.jC419)MEvent.removeBuiltInListener(this.jC419, l8.substring(8), this.ao[l8])
            } else {
                if (this.maplet)MEvent.removeBuiltInListener(this.maplet.map, l8, this.ao[l8])
            }
            this.ao[l8] = null;
            delete this.ao[l8]
        }
        if (typeof this.jC419 == "object" && this.jC419 && this.jC419.parentNode) {
            _removeNode(this.jC419);
            this.Ad = null;
            this.zY = null;
            this.jC419 = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.maplet != null) {
            if (this.qd1X) {
                if (e.target.id == this.id && this.maplet.R9sb) {
                    this.maplet.R9sb = false
                }
                if (this.maplet.t41 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this))return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu))return;
            var x = this.gC.mapX;
            var y = this.gC.mapY;
            if (!this.info.getOverlay())this.info.setOverlay(this);
            var fg = true;
            if (typeof e == "undefined") {
            } else if (e.target.id == this.id && !this.maplet.R9sb) {
                MEvent.trigger(this, "click", this);
                x = e.clientX - this.maplet.offsetX - this.maplet.left;
                y = e.clientY - this.maplet.offsetY - this.maplet.top
            } else if (e.target.id == this.id && this.maplet.R9sb) {
                this.maplet.R9sb = false;
                fg = false
            } else {
                fg = false
            }
            if (fg)this.maplet.wN(x, y, this.info)
        }
    };
    this.setContextMenu = function (menu) {
        if (!menu instanceof MContextMenu)return;
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) {
                this.contextmenu.initialize(this.maplet)
            }
            if (!this.contextmenu.containsOverlay(this)) {
                this.contextmenu.addOverlay(this)
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom)return null;
        return this.contextmenu
    }
};
var MRoundRect = function (_7H, RIa7R, arcsize, brush, info) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "RRect";
    this._7H = _7H;
    this.RIa7R = RIa7R;
    this.arcsize = typeof arcsize == "number" ? arcsize : 0.1;
    this.width = 0;
    this.height = 0;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = (typeof info == "undefined") ? null : info;
    this.ao = new Array();
    this.zX = null;
    this.rect = null;
    this.tL2 = true;
    this.$93Sj = false;
    this.qd1X = false;
    this.creator = MLayer.USER;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MRoundRect'
    };
    this.paint = function () {
        if (!this.rect) {
            this.zX = this.maplet.B7aNf();
            if (!HMum5) {
                this.rect = document.createElement("v:roundrect");
                this.rect.arcsize = this.arcsize;
                this.Ad = document.createElement("v:stroke");
                this.zY = document.createElement("v:fill");
                this.rect.appendChild(this.Ad);
                this.rect.appendChild(this.zY);
                this.zX.appendChild(this.rect)
            } else {
                this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this.zX.firstChild.appendChild(this.rect)
            }
            this.fwBE3();
            this.rect.id = this.id;
            lf7(this.rect, "oid", this.id);
            this.rect.style.position = "absolute";
            this.rect.unselectable = "on";
            this.rect.setAttribute(Ux3q, "true");
            this.ao["rect_mouseover"] = MEvent.bindDom(this.rect, "mouseover", this, function () {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.X420D)this.maplet.$_T("crosshair", this.rect); else if (this.info || MEvent.contains(this, "click"))this.maplet.$_T("pointer", this.rect); else this.maplet.$_T("default", this.rect)
            });
            this.ao["rect_mouseout"] = MEvent.bindDom(this.rect, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.X420D)this.maplet.$_T("default", this.rect)
            });
            this.ao["rect_mousedown"] = MEvent.bindDom(this.rect, "mousedown", this, function () {
                this.$93Sj = true;
                this.qd1X = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.X420D)this.maplet.$_T("move", this.rect)
            });
            this.ao["rect_mouseup"] = MEvent.bindDom(this.rect, "mouseup", this, function (e) {
                this.$93Sj = false;
                this.ao["rect_mouseover"](e)
            });
            this.ao["rect_mousemove"] = MEvent.bindDom(this.rect, "mousemove", this, function () {
                if (this.$93Sj && !this.qd1X)this.qd1X = true
            })
        }
        this.update()
    };
    this.update = function () {
        if (this.rect) {
            if (!this._7H.maplet)this._7H.initialize(this.maplet);
            if (!this.RIa7R.maplet)this.RIa7R.initialize(this.maplet);
            if (this.maplet.MT$) {
                if (this.maplet.__RH != this._7H.__RH) {
                    this._7H.mapX += this.maplet.pNt;
                    this._7H.mapY += this.maplet.$5D2;
                    this._7H.__RH = this.maplet.__RH
                }
                if (this.maplet.__RH != this.RIa7R.__RH) {
                    this.RIa7R.mapX += this.maplet.pNt;
                    this.RIa7R.mapY += this.maplet.$5D2;
                    this.RIa7R.__RH = this.maplet.__RH
                }
            } else {
                this._7H.recalcScreenCoords();
                this.RIa7R.recalcScreenCoords()
            }
            var x = this._7H.mapX;
            var y = this._7H.mapY;
            this.width = Math.abs(this.RIa7R.mapX - x);
            this.height = Math.abs(this.RIa7R.mapY - y);
            if (!HMum5) {
                this.rect.style.left = x + "px";
                this.rect.style.top = y + "px";
                this.rect.style.width = this.width + "px";
                this.rect.style.height = this.height + "px"
            } else {
                this.rect.setAttribute("x", x + "px");
                this.rect.setAttribute("y", y + "px");
                this.rect.setAttribute("width", this.width + "px");
                this.rect.setAttribute("height", this.height + "px");
                this.rect.setAttribute("ry", this.height * this.arcsize)
            }
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        for (var l8 in this.ao) {
            if (l8.substring(0, 5) == "rect_") {
                if (this.rect)MEvent.removeBuiltInListener(this.rect, l8.substring(5), this.ao[l8])
            } else {
                if (this.maplet)MEvent.removeBuiltInListener(this.maplet.map, l8, this.ao[l8])
            }
            this.ao[l8] = null;
            delete this.ao[l8]
        }
        if (typeof this.rect == "object" && this.rect && this.rect.parentNode) {
            _removeNode(this.rect);
            this.rect = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.maplet != null) {
            if (this.qd1X) {
                if (e.target.id == this.id && this.maplet.R9sb) {
                    this.maplet.R9sb = false
                }
                if (this.maplet.t41 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this))return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu))return;
            var x = 0;
            var y = 0;
            if (!this.info.getOverlay())this.info.setOverlay(this);
            var fg = true;
            if (typeof e == "undefined") {
                x = this._7H.mapX + this.width / 2;
                y = this._7H.mapY + this.height / 2
            } else if (e.target.id == this.id && !this.maplet.R9sb) {
                MEvent.trigger(this, "click", this);
                x = e.clientX - this.maplet.offsetX - this.maplet.left;
                y = e.clientY - this.maplet.offsetY - this.maplet.top
            } else if (e.target.id == this.id && this.maplet.R9sb) {
                this.maplet.R9sb = false;
                fg = false
            } else {
                fg = false
            }
            if (fg)this.maplet.wN(x, y, this.info)
        }
    };
    this.getCenterXY = function () {
        var $9_4 = this._7H.mapX + this.width / 2;
        var D808 = this._7H.mapY + this.height / 2;
        return{x: $9_4, y: D808}
    };
    this.setBrush = function (W$X36) {
        if (!(W$X36 instanceof MBrush))return;
        this.brush = W$X36;
        this.fwBE3()
    };
    this.fwBE3 = function () {
        if (!HMum5) {
            if (this.rect && this.Ad && this.zY) {
                this.rect.strokecolor = this.brush.color;
                this.rect.strokeweight = this.brush.stroke + 'px';
                this.rect.filled = this.brush.fill;
                this.Ad.opacity = (this.brush.transparency / 100.0);
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor
            }
        } else {
            if (this.rect) {
                this.rect.setAttribute("stroke", this.brush.color);
                this.rect.setAttribute("fill", this.brush.fill ? this.brush.bgcolor : 'none');
                this.rect.setAttribute("stroke-width", this.brush.stroke);
                this.rect.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.rect.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.rect.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:10,15" : "")
            }
        }
    };
    this.setContextMenu = function (menu) {
        if (!menu instanceof MContextMenu)return;
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) {
                this.contextmenu.initialize(this.maplet)
            }
            if (!this.contextmenu.containsOverlay(this)) {
                this.contextmenu.addOverlay(this)
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom)return null;
        return this.contextmenu
    }
};
var MLabel = function (xP, xoffset, yoffset, opacity, options) {
    this.label = xP;
    if (typeof xoffset == "object" && xoffset)options = xoffset;
    if (typeof options != "object" || !options)options = {};
    if (typeof xoffset == "object" && xoffset) {
        if ("number,string".indexOf(typeof options.xoffset) == -1)options.xoffset = undefined;
        if ("number,string".indexOf(typeof options.yoffset) == -1)options.yoffset = undefined;
        if ("number,string".indexOf(typeof options.opacity) == -1)options.opacity = undefined
    } else {
        options.xoffset = xoffset;
        options.yoffset = yoffset;
        options.opacity = opacity
    }
    if (typeof options.enableStyle != "boolean")options.enableStyle = true;
    if (typeof options.visible != "boolean")options.visible = true;
    var q10x4 = false;
    this.visible = options.visible;
    this.xoffset = (typeof options.xoffset == "undefined") ? null : parseInt(options.xoffset);
    this.yoffset = (typeof options.yoffset == "undefined") ? null : parseInt(options.yoffset);
    this.opacity = typeof options.opacity != "undefined";
    this.div = document.createElement("div");
    if (options.enableStyle)this.div.className = "tiplabel";
    this.div.style.left = "-1000px";
    this.div.style.top = "-1000px";
    this.div.unselectable = "on";
    this.div.style.zIndex = 10;
    this.div.style.position = "absolute";
    if (px && typeof options.opacity != "undefined") {
        this.div.style.filter = "alpha( opacity = " + parseInt(options.opacity) + " )"
    } else if (!px && typeof options.opacity != "undefined") {
        this.div.style.MozOpacity = parseInt(options.opacity) / 100
    }
    this.marker = null;
    this.wz = function (id) {
        this.div.id = "mk_label_" + id
    };
    this.setContextMenu = function (menu) {
    };
    this.initialize = function (marker) {
        this.marker = marker
    };
    this.update = function (maplet, left, top) {
        if (this.div.parentNode != maplet.lA.div && !this.marker.ls) {
            if (typeof this.label == "string") {
                this.div.innerHTML = this.label
            } else {
                this.div.appendChild(this.label)
            }
            maplet.lA.appendChild(this.div)
        }
        if (this.xoffset == null)this.xoffset = this.marker.icon.width;
        if (this.yoffset == null)this.yoffset = this.marker.icon.height / 2 - this.div.offsetHeight / 2;
        if (!q10x4) {
            this.div.style.display = this.visible ? "" : "none";
            q10x4 = true
        }
        this.div.style.left = (parseInt(left) + this.xoffset) + "px";
        this.div.style.top = (parseInt(top) + this.yoffset) + "px"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode)this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize)this.marker = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLabel'
    };
    this.k9Aq0 = this.div.style.zIndex;
    this.setZIndex = function (WV4) {
        if (this.div && this.div.parentNode && WV4 != this.div.style.zIndex) {
            this.k9Aq0 = this.div.style.zIndex;
            this.div.style.zIndex = WV4
        }
    };
    this._9w = function () {
        if (!this.div)return;
        if (this.k9Aq0 != this.div.style.zIndex)this.setZIndex(this.k9Aq0)
    };
    this.setVisible = function (visible) {
        if (visible != (this.div.style.display == "none" ? false : true)) {
            this.div.style.display = visible ? "" : "none";
            this.visible = visible
        }
    };
    this.resetLabel = function (options) {
        if (typeof options != "object" || !options)return;
        var left = parseInt(this.div.style.left);
        var top = parseInt(this.div.style.top);
        if (options.content) {
            this.label = options.content;
            this.div.innerHTML = "";
            if (typeof options.content == "string") {
                this.div.innerHTML = this.label
            } else {
                this.div.appendChild(this.label)
            }
        }
        if (typeof options.enableStyle == "boolean") {
            this.div.className = options.enableStyle ? "tiplabel" : ""
        }
        if ("number,string".indexOf(typeof options.xoffset) != -1)this.xoffset = parseInt(options.xoffset); else if (typeof options.xoffset == "object" && options.xoffset == null)this.xoffset = null;
        if ("number,string".indexOf(typeof options.yoffset) != -1)this.yoffset = parseInt(options.yoffset); else if (typeof options.yoffset == "object" && options.yoffset == null)this.yoffset = null;
        if ("number,string".indexOf(typeof options.opacity) != -1) {
            if (px && typeof options.opacity != "undefined") {
                this.div.style.filter = "alpha( opacity = " + parseInt(options.opacity) + " )"
            } else if (!px && typeof options.opacity != "undefined") {
                this.div.style.MozOpacity = parseInt(options.opacity) / 100
            }
        }
        this.update(this.marker.maplet, this.marker.icon.left, this.marker.icon.top)
    };
    this.getText = function () {
        var sIp = "";
        var s = this.div.innerHTML;
        if (s.indexOf(Maplet.MLABEL_TEXT_FLAG) != -1) {
            var $Cd = new RegExp(Maplet.MLABEL_TEXT_FLAG + "=\"?([^\"\t ]*)", "gi");
            var c31 = $Cd.exec(s);
            if (c31 != null)sIp = c31[1]
        } else if (s != "") {
            sIp = C22u(s)
        } else {
            sIp = s
        }
        return sIp
    }
};
var MInfoWindow = function (ya, xv, yd, options) {
    this.title = ya;
    this.content = pX7n(xv, true);
    this.yd = (typeof yd != "undefined" && "mouseover" == yd.toLowerCase()) ? "mouseover" : "click";
    this.options = options || {};
    if (typeof this.options.xoffset != "number")this.options.xoffset = 0;
    if (typeof this.options.yoffset != "number")this.options.yoffset = 0;
    this.A2Y1V = {g7m8: false, width: 0, height: 0};
    this.gv = function (x, y) {
        MEvent.trigger(this.getOverlay(), "iw_beforeopen", this.getOverlay(), x, y);
        if (this.getOverlay().maplet.customInfoWindow)return null;
        avBubble.overlay = this.getOverlay();
        var b = gp(this.title, x, y, this.content);
        this.setTabs(CJy);
        return b
    };
    var XpC7 = null;
    this.setOverlay = function (overlay) {
        XpC7 = overlay
    };
    this.getOverlay = function () {
        return XpC7
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MInfoWindow'
    };
    this.setTitle = function (yw, J142_, _t8$) {
        this.title = yw;
        if (ContentInfo) {
            ContentInfo.setTitle(yw);
            this.A2Y1V.g7m8 = false;
            if (typeof J142_ != "boolean")J142_ = true;
            if (typeof _t8$ != "boolean")_t8$ = false;
            if (J142_)$H1g(_t8$)
        }
    };
    this.setContent = function (c, J142_, _t8$) {
        this.content = pX7n(c, true);
        if (ContentInfo) {
            ContentInfo.setContent(c);
            this.A2Y1V.g7m8 = false;
            if (typeof J142_ != "boolean")J142_ = true;
            if (typeof _t8$ != "boolean")_t8$ = true;
            if (J142_)$H1g(_t8$)
        }
    };
    this.zoomTo = function (type, w, h) {
        if (type == "zoomin")this.zoomIn(w, h); else if (type == "zoomout")this.zoomOut(w, h)
    };
    this.zoomOut = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomOut == "function") {
            ContentInfo.onZoomOut(w, h)
        }
    };
    this.zoomIn = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomIn == "function") {
            ContentInfo.onZoomIn(w, h)
        }
    };
    this.getBodySize = function () {
        var size = {width: 0, height: 0};
        if (ContentInfo) {
            return ContentInfo.k89()
        }
        return size
    };
    this.setZMBtnVisible = function (visible) {
        if (ContentInfo) {
            ContentInfo.setZMBtnVisible(visible)
        } else {
            avBubble.gO8 = visible
        }
    };
    this.getZMBtnVisible = function () {
        return ContentInfo && ContentInfo.I4W_()
    };
    var CJy = [];
    this.setTabs = function (l469C) {
        if (_xY34(l469C))CJy = l469C;
        if (ContentInfo && ContentInfo.isVisible() && (XpC7 && avBubble.overlay.id == XpC7.id) && CJy.length > 0) {
            for (var i = 0; i < l469C.length; i++) {
                ContentInfo.l0f8u(l469C[i].clone())
            }
            this.A2Y1V.g7m8 = false;
            $H1g()
        }
    };
    this.getTabs = function () {
        return CJy
    };
    this.clearTabs = function () {
        CJy = [];
        if (ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.K01mt();
            if (XpC7 && avBubble.overlay.id == XpC7.id) {
                this.A2Y1V.g7m8 = false;
                $H1g()
            }
        }
    };
    this.setCurrentTab = function (D62) {
        if (ContentInfo) {
            ContentInfo.setCurrentTab(D62)
        }
    };
    this.getCurrentTab = function () {
        if (ContentInfo && ContentInfo.tabIndex != -1) {
            return ContentInfo._8c[ContentInfo.tabIndex]
        } else {
            return null
        }
    };
    this.finalize = function () {
        this.clearTabs();
        t892(this)
    }
};
var ContentInfo = null;
var gp = function (title, left, top, f5) {
    hideBubble(maplet);
    avBubble.calcLatLon();
    if (ContentInfo == null) {
        ContentInfo = new $03a(maplet);
        ContentInfo.initialize();
        ContentInfo.onClosed = function () {
            avBubble.by16 = false;
            avBubble.$3d = false;
            avBubble.n$69 = false;
            MEvent.trigger(maplet, "iw_hide", avBubble.overlay);
            maplet.viewOverlay(avBubble.overlay, 50, 50)
        };
        ContentInfo.onZoomOut = function (w, h) {
            MEvent.trigger(avBubble.overlay, "bubble_zoomout", avBubble.overlay);
            var size = {width: avBubble.width, height: avBubble.height};
            if (avBubble.overlay.info && avBubble.overlay.info.A2Y1V.width > 0)size = avBubble.overlay.info.A2Y1V;
            if (w) {
                if (w < avBubble.minWidth)w = avBubble.minWidth;
                size.width = w
            }
            if (h) {
                if (h < avBubble.minHeight)h = avBubble.minHeight;
                size.height = h
            }
            ContentInfo.width = size.width;
            ContentInfo.height = size.height;
            ContentInfo.C$8f1("zoomin");
            avBubble.r983i = true;
            var dGC1n = maplet.viewOverlay(avBubble.overlay, 50, 50);
            if (dGC1n._0S == 0 && dGC1n._9Od9 == 0)maplet.refresh();
            avBubble.n$69 = false;
            avBubble.B0EU = "out"
        };
        ContentInfo.onZoomIn = function (w, h) {
            var overlay = avBubble.overlay;
            MEvent.trigger(overlay, "bubble_zoomin", avBubble.overlay);
            w = Y32k(w, null);
            h = Y32k(h, null);
            var c7 = maplet.getMaxBubbleSize();
            if (w && w < c7.width)c7.width = w;
            if (h && h < c7.height)c7.height = h;
            var jTOW = 0;
            var XCvb = 0;
            if (typeof overlay == "object" && overlay) {
                if (overlay.toString().indexOf("MMarker") != -1) {
                    if (overlay.icon) {
                        jTOW = overlay.icon.height;
                        XCvb = overlay.icon.width;
                        c7.height -= jTOW;
                        c7.width -= XCvb
                    }
                } else {
                    jTOW = 50;
                    c7.height -= jTOW
                }
            }
            var Qp9 = maplet.toScreenCoordinate(avBubble.E6539);
            var W$Co = ContentInfo.kIM(Qp9[0], Qp9[1], c7.width, c7.height, "top", true, true, overlay);
            avBubble.K4t = W$Co.e3233;
            avBubble.left = W$Co.N0f;
            avBubble.top = W$Co.U9g50;
            avBubble.r983i = true;
            ContentInfo.show(W$Co, null);
            ContentInfo.C$8f1("zoomout");
            var ix = W$Co.N0f;
            var iy = W$Co.U9g50;
            var ax = ix + W$Co.width;
            var ay = iy + W$Co.height;
            with (W$Co.arrow) {
                if (dir == "left") {
                    ix = ix - XCvb - W$Co.arrow.width
                } else if (dir == "right") {
                    ax = ax + XCvb + W$Co.arrow.width
                } else if (dir == "top") {
                    iy = iy - jTOW - W$Co.arrow.height
                } else if (dir == "bottom") {
                    ay = ay + jTOW + W$Co.arrow.height
                }
            }
            maplet.H0pR8({$7AJ: ix, niX: iy, N4k4: ax, $sk: ay, e2S: 10, Cf2m7: 10}, {I53l: true, Y_cq: true, CF41: false});
            avBubble.n$69 = true;
            avBubble.B0EU = "in"
        }
    } else {
    }
    avBubble.by16 = false;
    avBubble.$3d = false;
    ContentInfo.K01mt();
    var size = {width: 0, height: 0};
    if (avBubble.overlay.info.A2Y1V.g7m8) {
        size.width = avBubble.overlay.info.A2Y1V.width;
        size.height = avBubble.overlay.info.A2Y1V.height;
        ContentInfo.setTitle(title);
        ContentInfo.setContent(f5)
    } else {
        size = ContentInfo.F5$40(title, f5);
        if (size.width == 0) {
            size = {width: avBubble.width, height: avBubble.height}
        } else {
            if (size.width < avBubble.minWidth)size.width = avBubble.minWidth;
            if (size.height < avBubble.minHeight)size.height = avBubble.minHeight;
            var u60 = maplet.getMaxBubbleSize();
            if (size.width > u60.width)size.width = u60.width;
            if (size.height > u60.height)size.height = u60.height
        }
        avBubble.overlay.info.A2Y1V.width = size.width;
        avBubble.overlay.info.A2Y1V.height = size.height;
        avBubble.overlay.info.A2Y1V.g7m8 = true
    }
    var W$Co = ContentInfo.kIM(left, top, size.width, size.height, avBubble.tipInitPlace, avBubble.by16, avBubble.$3d, avBubble.overlay);
    avBubble.K4t = W$Co.e3233;
    avBubble.left = W$Co.N0f;
    avBubble.top = W$Co.U9g50;
    avBubble.head = title;
    avBubble.body = f5;
    ContentInfo.show(W$Co, avBubble.gO8, true, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
    if (maplet.fa) {
        ContentInfo.setVisible(false);
        avBubble.n4s = true
    }
    var XCvb = 0;
    var jTOW = 0;
    if (W$Co.$q2E) {
        avBubble.E6539 = avBubble.overlay.pt.getPid();
        if (avBubble.overlay.icon) {
            XCvb = avBubble.overlay.icon.width;
            jTOW = avBubble.overlay.icon.height
        }
    } else {
        avBubble.E6539 = maplet.toMapCoordinate(left, top)
    }
    if (avBubble.gO8 != null)avBubble.gO8 = null;
    var ix = W$Co.N0f;
    var iy = W$Co.U9g50;
    var ax = ix + W$Co.width;
    var ay = iy + W$Co.height;
    with (W$Co.arrow) {
        if (dir == "left") {
            ix = ix - XCvb - W$Co.arrow.width
        } else if (dir == "right") {
            ax = ax + XCvb + W$Co.arrow.width
        } else if (dir == "top") {
            iy = iy - jTOW - W$Co.arrow.height
        } else if (dir == "bottom") {
            ay = ay + jTOW + W$Co.arrow.height
        }
    }
    maplet.H0pR8({$7AJ: ix, niX: iy, N4k4: ax, $sk: ay, e2S: 10, Cf2m7: 10});
    MEvent.trigger(avBubble.overlay, "iw_afteropen", avBubble.overlay);
    return ContentInfo.dom
};
function $H1g(_t8$) {
    if (!ContentInfo || !ContentInfo.isVisible())return;
    if (typeof _t8$ != "boolean")_t8$ = false;
    var Qp9 = maplet.toScreenCoordinate(avBubble.E6539);
    var r = ContentInfo.getRect(false, false);
    if (_t8$) {
        var size = ContentInfo.F5$40(avBubble.overlay.info.title, avBubble.overlay.info.content);
        if (size.width == 0) {
            size = {width: r.width, height: r.height}
        } else {
            if (size.width < avBubble.minWidth)size.width = avBubble.minWidth;
            if (size.height < avBubble.minHeight)size.height = avBubble.minHeight;
            var u60 = maplet.getMaxBubbleSize();
            if (size.width > u60.width)size.width = u60.width;
            if (size.height > u60.height)size.height = u60.height
        }
        avBubble.overlay.info.A2Y1V.width = size.width;
        avBubble.overlay.info.A2Y1V.height = size.height;
        r.width = size.width;
        r.height = size.height
    }
    var W$Co = ContentInfo.kIM(Qp9[0], Qp9[1], r.width, r.height, avBubble.K4t, avBubble.by16, avBubble.$3d, avBubble.overlay);
    ContentInfo.show(W$Co, avBubble.gO8, true, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
    r = ContentInfo.getRect();
    if (!avBubble.n$69) {
        avBubble.overlay.info.A2Y1V.width = r.width;
        avBubble.overlay.info.A2Y1V.height = r.height
    }
    var XCvb = 0;
    var jTOW = 0;
    if (W$Co.$q2E && avBubble.overlay.icon) {
        XCvb = avBubble.overlay.icon.width;
        jTOW = avBubble.overlay.icon.height
    }
    var ix = r.min.x;
    var iy = r.min.y;
    var ax = r.max.x;
    var ay = r.max.y;
    with (W$Co.arrow) {
        if (dir == "left") {
            ix = ix - XCvb
        } else if (dir == "right") {
            ax = ax + XCvb
        } else if (dir == "top") {
            iy = iy - jTOW
        } else if (dir == "bottom") {
            ay = ay + jTOW
        }
    }
    maplet.fa = false;
    maplet.H0pR8({$7AJ: ix, niX: iy, N4k4: ax, $sk: ay, e2S: 10, Cf2m7: 10})
};
function hideBubble(maplet) {
    if (!ContentInfo)return;
    if (ContentInfo.isVisible()) {
        ContentInfo.setVisible(false);
        MEvent.trigger(maplet, "iw_hide", avBubble.overlay)
    }
    if (typeof maplet != "undefined" && maplet.d23yh != null) {
        maplet.d23yh = null;
        maplet.refresh()
    } else if (document["mapbar-maplet"] != "undefined" && document["mapbar-maplet"].d23yh != null) {
        document["mapbar-maplet"].d23yh = null;
        document["mapbar-maplet"].refresh()
    }
    ContentInfo.C$8f1("zoomin")
};
var Bubble = function () {
    this.xR = "";
    this.gO8 = false;
    this.left = 0;
    this.top = 0;
    this.head = new String();
    this.body = new String();
    this.width = 260;
    this.height = 240;
    this.overlay = null;
    this.arrow_tip_xoffset = 27;
    this.arrow_tip_yoffset = 3;
    this.xoffset = 0;
    this.E6539 = "";
    this.tipInitPlace = "top";
    this.K4t = "auto";
    this.by16 = false;
    this.$3d = false;
    this.pgdSN = true;
    this.n4s = false;
    this.H8Y0 = "";
    this.lJ0m = "";
    this.r983i = false;
    this.B0EU = "";
    this.minWidth = 100;
    this.minHeight = 60;
    this.tW8u = true;
    this.n$69 = false;
    this.$WRB1 = function (head) {
        this.head = head
    };
    this.J9l41 = function (body) {
        this.body = body
    };
    this.gl = function () {
    };
    this.calcLatLon = function () {
        this.xR = maplet.toMapCoordinate(this.left, this.top)
    };
    this.syncContentInfoPosition = function () {
        if (ContentInfo) {
            this.left = ContentInfo.q3;
            this.top = ContentInfo.zt
        }
    };
    this.h16 = function () {
        if (ContentInfo) {
            if (!px)ContentInfo._A0(false);
            if (this.E6539 && (this.n4s || ContentInfo.isVisible())) {
                if (this.n4s)this.n4s = false;
                if (this.pgdSN) {
                    var Qp9 = maplet.toScreenCoordinate(this.E6539);
                    avBubble.by16 = true;
                    var W$Co = ContentInfo.kIM(Qp9[0], Qp9[1], ContentInfo.width, ContentInfo.height, avBubble.K4t, avBubble.by16, this.$3d, avBubble.overlay, false, false);
                    this.K4t = W$Co.e3233;
                    ContentInfo.show(W$Co, null, this.r983i, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
                    if (this.r983i)this.r983i = false;
                    if (this.B0EU != "" && this.overlay) {
                        MEvent.trigger(this.overlay, "bubble_zoomend", this.B0EU == "in" ? "out" : "in");
                        if (this.overlay.info)MEvent.trigger(maplet, "iw_zoomend", this.overlay.info, this.B0EU == "in" ? "zoomin" : "zoomout");
                        if (this.B0EU == "in") {
                            this.by16 = true;
                            this.$3d = true
                        } else {
                            this.by16 = false;
                            this.$3d = false
                        }
                        this.B0EU = ""
                    }
                } else {
                    this.pgdSN = true
                }
            }
        }
    }
};
var avBubble = new Bubble();
var MInfoWindowTab = function (label, content, focus) {
    var df58P = label;
    var r2040 = content;
    var bV2 = null;
    var t3A = 0;
    var OT6 = true;
    this.Hf5p9 = typeof focus != "boolean" ? false : focus;
    this.QxfW = -1;
    this.Vd71 = [];
    this.setVisible = function (visible) {
        OT6 = visible
    };
    this.N65w7 = function () {
        return OT6
    };
    this.Pe3 = function (index) {
        t3A = index
    };
    this.getIndex = function () {
        return t3A
    };
    this.setLabel = function (label) {
        df58P = label
    };
    this.getLabel = function () {
        return df58P
    };
    this.setContent = function (content) {
        r2040 = content
    };
    this.getContent = function () {
        return r2040
    };
    this.toString = function () {
        return "com.mapbar.maplet.MInfoWindowTab"
    };
    this.BX92g = function (dom) {
        bV2 = dom
    };
    this.J1w7 = function () {
        return bV2
    };
    this.clone = function () {
        return new MInfoWindowTab(this.getLabel(), this.getContent(), this.Hf5p9)
    };
    this.n29 = function () {
        bV2 = null;
        OT6 = false;
        QxfW = -1
    }
};
MInfoWindowTab.F3x9 = function (uy) {
    return typeof uy == "object" && uy && typeof uy.toString == "function" && uy.toString().indexOf("MInfoWindowTab") != -1
};
var $03a = function (maplet) {
    var wn2U = maplet;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.content = "";
    this.dom = null;
    this.j9H = null;
    this.uk2 = null;
    this.D9Uo = null;
    this.$76R_ = null;
    this.mAkp = null;
    this.rl3K = null;
    this.J63 = null;
    this.$Ed = null;
    this.cO23 = null;
    this.$4h = [];
    this.XRb76 = null;
    this.W5LP4 = null;
    this.A7428 = "";
    this._8c = [];
    this.tabIndex = -1;
    this.P78 = 0;
    this.U0Aif = 0;
    this.hJ6U = 0;
    this.Uw85 = 0;
    this.YJ_ = 0;
    this.Cdf7u = null;
    this.onZoomOut = null;
    this.onZoomIn = null;
    this.onClosed = null;
    this.n0741 = null;
    this.wx9 = null;
    this.fJa36 = null;
    this.bxc = {type: "zoomin", q9: null};
    this.l3n6 = 0;
    this.i5r6 = 0;
    this.initialize = function () {
        this.dom = document.createElement("TABLE");
        this._3Nw1();
        this.dom.cellSpacing = 0;
        this.dom.cellPadding = 0;
        this.dom.border = 0;
        this.dom.style.cssText = this.JEo("TIP_TABLE");
        this.dom.setAttribute(oiY1, true);
        var Orb3A = this.dom.insertRow(-1);
        var $VX = Orb3A.insertCell(-1);
        $VX.vAlign = "top";
        $VX.style.cssText = this.JEo("TITLE_CONTAINER_TD");
        this.j9H = this.AN8_3();
        $VX.appendChild(this.j9H);
        $VX = this.dom.insertRow(-1).insertCell(-1);
        $VX.style.cssText = this.JEo("TAB_TD");
        this.mAkp = this.N9Q();
        this.mAkp.style.cssText = this.JEo("TAB_CONTAINER");
        $VX.appendChild(this.mAkp);
        this.mAkp.style.display = "none";
        this.dom.rows[1].style.display = "none";
        Orb3A = this.dom.insertRow(-1);
        $VX = Orb3A.insertCell(-1);
        $VX.vAlign = "top";
        $VX.style.cssText = this.JEo("CONTENT_TD");
        this.cO23 = this.a48G8();
        $VX.appendChild(this.cO23);
        this.$_3d();
        var parentNode = wn2U ? wn2U.sF : document.body;
        parentNode.appendChild(this.dom);
        parentNode.appendChild(this._y473());
        for (var i = 0; i < this.$4h.length; i++) {
            parentNode.appendChild(this.$4h[i])
        }
        parentNode.appendChild(this.Bsj())
    };
    this.Bsj = function () {
        this.W5LP4 = document.createElement("DIV");
        this.W5LP4.style.cssText = this.JEo("TIP_BORDER");
        return this.W5LP4
    };
    this._y473 = function () {
        this.XRb76 = document.createElement("DIV");
        this.XRb76.style.cssText = this.JEo("ARROW_DIV");
        return this.XRb76
    };
    this.a48G8 = function () {
        var dom = document.createElement("DIV");
        dom.style.cssText = this.JEo("CONTENT_DIV");
        return dom
    };
    this.$_3d = function () {
        if (this.dom) {
            var t4b = this.JEo("SHADOW_AMOUNT");
            for (var i = 0; i < t4b; i++) {
                var shadow = document.createElement("DIV");
                shadow.id = "_iw_shadow_" + i;
                shadow.style.cssText = this.JEo("SHADOW_DIV");
                shadow.setAttribute(Ux3q, "true");
                if (window.attachEvent)shadow.style.filter = "alpha(opacity=" + (this.JEo("SHADOW_OPACITY")[i] * 100) + ");"; else shadow.style.opacity = this.JEo("SHADOW_OPACITY")[i];
                shadow.style.zIndex = this.JEo("TIP_DEFAULT_INFO").zIndex - (i + 1);
                shadow.onmousedown = function () {
                    return false
                };
                this.$4h.push(shadow)
            }
        }
    };
    this.N9Q = function () {
        var ul = document.createElement("UL");
        this.J63 = document.createElement("LI");
        this.J63.style.cssText = this.JEo("TAB_NAV_L");
        this.rl3K = document.createElement("LI");
        this.rl3K.style.cssText = this.JEo("TAB_SPACER");
        this.$Ed = document.createElement("LI");
        this.$Ed.style.cssText = this.JEo("TAB_NAV_R");
        ul.appendChild(this.J63);
        ul.appendChild(this.rl3K);
        ul.appendChild(this.$Ed);
        return ul
    };
    this.AN8_3 = function () {
        var l20 = this.JEo("TITLE_INFO");
        var W286b = document.createElement("TABLE");
        W286b.width = "100%";
        W286b.cellSpacing = 0;
        W286b.cellPadding = 0;
        W286b.border = 0;
        W286b.style.cssText = this.JEo("TITLE_TABLE");
        var Orb3A = W286b.insertRow(-1);
        this.uk2 = Orb3A.insertCell(-1);
        this.uk2.vAlign = "top";
        this.uk2.style.cssText = this.JEo("TITLE_TD");
        var $VX = Orb3A.insertCell(-1);
        $VX.style.cssText = this.JEo("TITLE_SPACER");
        $VX.innerHTML = "&nbsp;";
        this.D9Uo = Orb3A.insertCell(-1);
        this.D9Uo.vAlign = "top";
        this.D9Uo.style.cssText = this.JEo("RT_BTN_TD");
        this.D9Uo.innerHTML = this.JEo("ZOOMIN_IMG");
        this.D9Uo.style.width = "0px";
        this.M6R4();
        this.$76R_ = Orb3A.insertCell(-1);
        this.$76R_.vAlign = "top";
        this.$76R_.style.cssText = this.JEo("RT_BTN_TD");
        this.$76R_.innerHTML = this.JEo("CLOSE_IMG");
        this.n0741 = MEvent.bindDom(this.$76R_, "click", this, this.i31);
        return W286b
    };
    this.k89 = function () {
        return{width: this.W5LP4.offsetWidth, height: this.W5LP4.offsetHeight}
    };
    this.getRect = function (a4f, bArrow) {
        if (typeof a4f != "boolean")a4f = true;
        if (typeof bArrow != "boolean")bArrow = true;
        var dom = a4f ? this.W5LP4 : this.dom;
        var ix = Y32k(this.dom.style.left);
        var iy = Y32k(this.dom.style.top);
        var ax = ix + this.dom.offsetWidth;
        var ay = iy + this.dom.offsetHeight;
        if (bArrow) {
            if (this.A7428 == "LEFT") {
                ix = Y32k(this.XRb76.style.left)
            } else if (this.A7428 == "RIGHT") {
                ax += this.XRb76.offsetWidth
            } else if (this.A7428 == "TOP") {
                iy = Y32k(this.XRb76.style.top)
            } else if (this.A7428 == "BOTTOM") {
                ay += this.XRb76.offsetHeight
            }
        }
        return{min: {x: ix, y: iy}, max: {x: ax, y: ay}, width: ax - ix, height: ay - iy}
    };
    this.F5$40 = function (title, content) {
        if (!this.dom)this.initialize();
        var _0646 = -100000;
        var W$Co = {N0f: _0646, U9g50: _0646, n8j9: _0646, $gl: _0646, width: avBubble.minWidth, height: avBubble.minHeight, arrow: {dir: "left"}};
        this.show(W$Co, null, false);
        this.setTitle(title);
        this.setContent(content);
        this._A0(true);
        var h = 0;
        var w = 0;
        var c = this.cO23.firstChild;
        if (c && c.offsetWidth && this.cO23.childNodes.length == 1 && (_getStyle(c, "width") != "auto" || c.tagName == "IMG")) {
            w = c.offsetWidth + Y32k(_getStyle(c, "marginLeft", "margin-left")) + Y32k(_getStyle(c, "marginRight", "margin-right"));
            h = c.offsetHeight + Y32k(_getStyle(c, "marginTop", "margin-top")) + Y32k(_getStyle(c, "marginBottom", "margin-bottom"));
            if (px) {
                if (!K6_) {
                    w = w + Y32k(_getStyle(this.cO23, "paddingLeft", "padding-left")) * 2;
                    h = h + Y32k(_getStyle(this.cO23, "paddingTop", "padding-top")) * 2
                } else {
                    h += 1
                }
            }
            this.cO23.style.width = w + "px";
            this.cO23.style.height = h + "px";
            this.dom.style.width = this.cO23.offsetWidth + Y32k(this.dom.style.borderWidth) * 2 + "px";
            h = this.dom.offsetHeight;
            w = this.dom.offsetWidth
        }
        this._A0(false);
        this.setVisible(false);
        return{width: w, height: h}
    };
    this.kIM = function (x, y, width, height, e3233, Dd50, s9q, overlay, Y_cq, I53l) {
        if (typeof width != "number")width = this.JEo("TIP_DEFAULT_INFO").width;
        if (typeof height != "number")height = this.JEo("TIP_DEFAULT_INFO").height;
        if (typeof e3233 != "string")e3233 = "auto";
        if (typeof Dd50 != "boolean")Dd50 = false;
        if (typeof s9q != "boolean")s9q = false;
        if (typeof Y_cq != "boolean")Y_cq = true;
        if (typeof I53l != "boolean")I53l = true;
        var N0f = 0;
        var U9g50 = 0;
        var n8j9 = 0;
        var $gl = 0;
        var direction = "right";
        var ES31P = 0;
        var v354U = 0;
        var $q2E = false;
        var R109 = false;
        if (wn2U) {
            var sT = wn2U.width;
            var b01V4 = wn2U.height;
            var B7dM = this.JEo("ARROW_INFO");
            var p913T = width + B7dM.M8F3_;
            var W192 = height + B7dM.hSj;
            var Bx7hw = width / 2;
            var Y0Ed = height / 2;
            var offsetX = 0;
            var offsetY = 0;
            if (typeof overlay == "object" && overlay) {
                var s = overlay.toString();
                $q2E = s.indexOf("MMarker") != -1;
                R109 = s.indexOf("MPolyline") != -1
            }
            if ($q2E && overlay.icon) {
                offsetX = overlay.icon.width / 2;
                offsetY = overlay.icon.height / 2;
                x = x - overlay.icon.anchorX + offsetX;
                y = y - overlay.icon.anchorY + offsetY
            }
            if (s9q) {
                U9g50 = y - Y0Ed;
                N0f = x - Bx7hw
            } else {
                if (y - Y0Ed <= 0)U9g50 = 5; else if (y + Y0Ed > b01V4)U9g50 = b01V4 - height - 5; else U9g50 = y - Y0Ed;
                if (x - Bx7hw <= 0)N0f = 5; else if (x + Bx7hw > sT)N0f = sT - width - 5; else N0f = x - Bx7hw
            }
            var s90 = false;
            var K1j = false;
            var H8_ = false;
            var B8s = false;
            var kq1 = {min: {x: 0, y: 0}, max: {x: 0, y: 0}};
            var i7P8$ = wn2U.getControlRect();
            var IR6P = wn2U.getOverviewRect();
            var E761 = x >= p913T && y >= B7dM.Fw_3F && y + B7dM.Fw_3F <= b01V4;
            if (E761) {
                var ax = x - offsetX - B7dM.M8F3_;
                var zB = ax - width;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth)))zB += parseInt(this.dom.style.borderRightWidth);
                kq1 = {min: {x: zB, y: U9g50}, max: {x: zB + p913T, y: U9g50 + W192}};
                if (Y_cq)E761 = !_isRectint(kq1, i7P8$);
                if (I53l && E761)E761 = !_isRectint(kq1, IR6P)
            }
            var JNdQ = y >= W192 && x >= B7dM.V5J8N && x <= sT - B7dM.V5J8N;
            if (JNdQ) {
                var ay = y - offsetY - B7dM.hSj;
                var zF = ay - height;
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth)))zF += parseInt(this.dom.style.borderBottomWidth);
                kq1 = {min: {x: N0f, y: zF}, max: {x: N0f + p913T, y: zF + W192}};
                if (Y_cq)JNdQ = !_isRectint(kq1, i7P8$);
                if (I53l && JNdQ)JNdQ = !_isRectint(kq1, IR6P)
            }
            var J64J = sT - x >= p913T && y >= B7dM.Fw_3F && y + B7dM.Fw_3F <= b01V4;
            if (J64J) {
                var ax = x + offsetX;
                var zB = ax + B7dM.M8F3_;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth)))zB -= parseInt(this.dom.style.borderLeftWidth);
                kq1 = {min: {x: zB, y: U9g50}, max: {x: zB + p913T, y: U9g50 + W192}};
                if (Y_cq)J64J = !_isRectint(kq1, i7P8$);
                if (I53l && J64J)J64J = !_isRectint(kq1, IR6P)
            }
            var ai13w = b01V4 - y >= W192 && x >= B7dM.V5J8N && x <= sT - B7dM.V5J8N;
            if (ai13w) {
                var ay = y + offsetY;
                var zF = ay + B7dM.hSj;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth)))zF -= parseInt(this.dom.style.borderTopWidth);
                kq1 = {min: {x: N0f, y: zF}, max: {x: N0f + p913T, y: zF + W192}};
                if (Y_cq)ai13w = !_isRectint(kq1, i7P8$);
                if (I53l && ai13w)ai13w = !_isRectint(kq1, IR6P)
            }
            if (e3233 != "auto") {
                if (Dd50) {
                    if (e3233 == "left")s90 = true; else if (e3233 == "top")K1j = true; else if (e3233 == "right")H8_ = true; else if (e3233 == "bottom")B8s = true
                } else {
                    if (e3233 == "left" && E761)s90 = true; else if (e3233 == "top" && JNdQ)K1j = true; else if (e3233 == "right" && J64J)H8_ = true; else if (e3233 == "bottom" && ai13w)B8s = true; else e3233 = "auto"
                }
            }
            if (e3233 == "auto") {
                s90 = E761;
                K1j = JNdQ;
                H8_ = J64J;
                B8s = ai13w
            }
            var K2_ = "";
            if (s90) {
                K2_ = "left";
                n8j9 = x - offsetX - B7dM.M8F3_;
                $gl = y - B7dM.Fw_3F / 2;
                N0f = n8j9 - width;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth)))N0f += parseInt(this.dom.style.borderRightWidth);
                if ($gl < U9g50 + 5)U9g50 = $gl - 5; else if ($gl + B7dM.Fw_3F >= U9g50 + height - 5)U9g50 = $gl - height + B7dM.Fw_3F + 5
            } else if (H8_) {
                K2_ = "right";
                direction = "left";
                n8j9 = x + offsetX;
                $gl = y - B7dM.Fw_3F / 2;
                N0f = n8j9 + B7dM.M8F3_;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth)))N0f -= parseInt(this.dom.style.borderLeftWidth);
                if ($gl < U9g50 + 5)U9g50 = $gl - 5; else if ($gl + B7dM.Fw_3F >= U9g50 + height - 5)U9g50 = $gl - height + B7dM.Fw_3F + 5
            } else if (K1j || (!H8_ && !K1j && !s90 && !B8s)) {
                K2_ = "top";
                direction = "bottom";
                n8j9 = x - B7dM.V5J8N / 2;
                $gl = y - offsetY - B7dM.hSj;
                U9g50 = $gl - height;
                if ((!H8_ && !K1j && !s90 && !B8s)) {
                    if (N0f == 5 || (N0f == sT - width - 5)) {
                        N0f = x - Bx7hw
                    }
                }
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth)))U9g50 += parseInt(this.dom.style.borderBottomWidth);
                if (n8j9 < N0f + 5)N0f = n8j9 - 5; else if (n8j9 + B7dM.V5J8N >= N0f + width - 5)N0f = n8j9 - width + B7dM.V5J8N + 5
            } else if (B8s) {
                K2_ = "bottom";
                direction = "top";
                n8j9 = x - B7dM.V5J8N / 2;
                $gl = y + offsetY;
                U9g50 = $gl + B7dM.hSj;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth)))U9g50 -= parseInt(this.dom.style.borderTopWidth);
                if (n8j9 < N0f + 5)N0f = n8j9 - 5; else if (n8j9 + B7dM.V5J8N >= N0f + width - 5)N0f = n8j9 - width + B7dM.V5J8N + 5
            }
            if (K2_ == "left" || K2_ == "right") {
                ES31P = B7dM.M8F3_;
                v354U = B7dM.Fw_3F
            } else {
                ES31P = B7dM.V5J8N;
                v354U = B7dM.hSj
            }
        }
        return{N0f: N0f, U9g50: U9g50, n8j9: n8j9, $gl: $gl, width: width, height: height, e3233: K2_, arrow: {dir: direction, width: ES31P, height: v354U}, $q2E: $q2E, R109: R109}
    };
    this.show = function (W$Co, NaA, _Q_Ao, xoffset, yoffset) {
        this.x = W$Co.N0f;
        this.y = W$Co.U9g50;
        this.width = W$Co.width;
        this.height = W$Co.height;
        if (!this.dom)this.initialize();
        this.l3n6 = (typeof xoffset != "number") ? 0 : xoffset;
        this.i5r6 = (typeof yoffset != "number") ? 0 : yoffset;
        this.dom.style.left = this.x + (W$Co.e3233 == "top" || W$Co.e3233 == "bottom" ? this.l3n6 : 0) + "px";
        this.dom.style.top = this.y + (W$Co.e3233 == "left" || W$Co.e3233 == "right" ? this.i5r6 : 0) + "px";
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.cO23.style.width = "1px";
        this.cO23.style.height = "1px";
        if (!s_k2)this.cO23.style.overflow = "hidden";
        this.setVisible(true);
        if (typeof NaA == "boolean")this.setZMBtnVisible(NaA);
        this._7R(W$Co.n8j9, W$Co.$gl, W$Co.arrow.dir);
        this.$01T2(_Q_Ao);
        if (!s_k2)this.cO23.style.overflow = "auto"
    };
    this._7R = function (x, y, direction) {
        direction = direction.toUpperCase();
        this.A7428 = direction;
        var os25 = "";
        var B7dM = this.JEo("ARROW_INFO");
        os25 = this.JEo("ARROW_" + direction + "_CHILD");
        var width = B7dM.M8F3_;
        var height = B7dM.Fw_3F;
        if (direction == "TOP" || direction == "BOTTOM") {
            width = B7dM.V5J8N;
            height = B7dM.hSj
        }
        this.XRb76.innerHTML = os25;
        this.XRb76.style.left = x + (direction == "TOP" || direction == "BOTTOM" ? this.l3n6 : 0) + "px";
        this.XRb76.style.top = y + (direction == "RIGHT" || direction == "LEFT" ? this.i5r6 : 0) + "px";
        this.XRb76.style.width = width + "px";
        this.XRb76.style.height = height + "px";
        this.XRb76.style.display = ""
    };
    this._693_ = function () {
        this.XRb76.style.display = "none"
    };
    this.$01T2 = function (_Q_Ao) {
        if (!this.isVisible())return;
        var th = this.j9H.offsetHeight;
        if (!isNaN(parseInt(this.j9H.style.marginTop)))th += parseInt(this.j9H.style.marginTop);
        if (!isNaN(parseInt(this.j9H.style.marginBottom)))th += parseInt(this.j9H.style.marginBottom);
        var h = this.dom.offsetHeight - th - this.P78;
        if (K6_ || i079 || ukX || xA5) {
            if (!isNaN(parseInt(this.cO23.style.paddingTop)))h -= Y32k(this.cO23.style.paddingTop);
            if (!isNaN(parseInt(this.cO23.style.paddingBottom)))h -= Y32k(this.cO23.style.paddingBottom)
        }
        if (!isNaN(parseInt(this.dom.style.borderTopWidth)))h -= parseInt(this.dom.style.borderTopWidth);
        if (!isNaN(parseInt(this.dom.style.borderBottomWidth)))h -= parseInt(this.dom.style.borderBottomWidth);
        var w = this.dom.offsetWidth;
        if (K6_ || ukX || xA5 || i079) {
            if (!isNaN(parseInt(this.cO23.style.paddingLeft)))w -= parseInt(this.cO23.style.paddingLeft);
            if (!isNaN(parseInt(this.cO23.style.paddingRight)))w -= parseInt(this.cO23.style.paddingRight)
        }
        w = w - Y32k(this.dom.style.borderWidth) * 2;
        this.cO23.style.height = h + "px";
        this.cO23.style.width = w + "px";
        if (this.cO23.scrollWidth > this.cO23.offsetWidth) {
            if (!isNaN(parseInt(this.dom.style.borderLeftWidth)))w -= parseInt(this.dom.style.borderLeftWidth);
            if (!isNaN(parseInt(this.dom.style.borderRightWidth)))w -= parseInt(this.dom.style.borderRightWidth);
            this.cO23.style.width = w + "px"
        }
        if (typeof _Q_Ao != "boolean")_Q_Ao = true;
        if (this._8c.length > 0 && _Q_Ao) {
            this.T21I9();
            this.VEVf();
            var W2Bf = this.tabIndex;
            this.tabIndex = -1;
            if (W2Bf != -1) {
                if (!this._8c[W2Bf].N65w7())this.setCurrentTab(0); else this.setCurrentTab(W2Bf)
            }
        }
        var u15 = this.A7428 == "TOP" || this.A7428 == "BOTTOM" ? this.l3n6 : 0;
        var u1J2d = this.A7428 == "RIGHT" || this.A7428 == "LEFT" ? this.i5r6 : 0;
        for (var i = 0; i < this.$4h.length; i++) {
            var shadow = this.$4h[i];
            shadow.style.left = (this.x + 3 + ((i) * 3)) + u15 + "px";
            shadow.style.top = (this.y + 3 + ((i) * 3)) + u1J2d + "px";
            shadow.style.width = this.width + "px";
            shadow.style.height = this.height + "px";
            shadow.style.display = ""
        }
        this.W5LP4.style.width = this.width + 2 + "px";
        this.W5LP4.style.height = this.height + 2 + "px";
        this.W5LP4.style.left = this.x - 1 + u15 + "px";
        this.W5LP4.style.top = this.y - 1 + u1J2d + "px";
        if (Q48) {
            wn2U.sF.moveTo(1, 0);
            wn2U.sF.moveTo(0, 0)
        }
    };
    this.X0qi2 = function () {
        return this.dom
    };
    this.l0f8u = function (Y227) {
        if (!this.X0qi2())return;
        if (this._8c.length >= this.JEo("TAB_AMOUNT"))return false;
        if (MInfoWindowTab.F3x9(Y227)) {
            if (this._8c.length == 0) {
                var l469C = [];
                if (this.content != "") {
                    l469C.push(new MInfoWindowTab(this.JEo("TAB_DEFAULT_LABEL"), this.content, !Y227.Hf5p9));
                    this.cO23.innerHTML = ""
                }
                if (l469C.length == 0 && !Y227.Hf5p9)Y227.Hf5p9 = true;
                l469C.push(Y227);
                this.K40H(l469C)
            } else {
                this.BLY41(Y227, -1)
            }
        }
    };
    this.K01mt = function () {
        if (!this.X0qi2())return;
        if (this._8c.length > 0) {
            var l469C = this._8c;
            for (var i = l469C.length - 1; i >= 0; i--) {
                this.$W80(i, false)
            }
            this._8c = []
        }
    };
    this.TB4 = function () {
        this.tabIndex = -1;
        this.YJ_ = 0;
        this.Cdf7u = null
    };
    this.$W80 = function (index, a504) {
        if (!this.X0qi2())return;
        if (this.mAkp && this._8c.length > index) {
            if (typeof a504 != "boolean")a504 = true;
            var o7H$k = [];
            var $W80 = null;
            var w61 = this.tabIndex;
            this.tabIndex = -1;
            var F1D46 = 0;
            for (var i = 0; i < this._8c.length; i++) {
                if (i != index) {
                    var yiW$ = this._8c[i];
                    var W2Bf = yiW$.getIndex();
                    o7H$k.push(yiW$);
                    yiW$.Pe3(o7H$k.length - 1);
                    var dom = yiW$.J1w7();
                    if (dom)dom.setAttribute("tabIndex", yiW$.getIndex());
                    if (W2Bf == w61)F1D46 = yiW$.getIndex()
                } else {
                    $W80 = this._8c[i]
                }
            }
            if ($W80) {
                this._8c = o7H$k;
                var qy8_ = $W80.J1w7();
                if ($W80.Vd71.length > 0) {
                    for (var i = 0; i < $W80.Vd71.length; i++) {
                        var item = $W80.Vd71[i];
                        MEvent.removeBuiltInListener(qy8_, item.event, item.q9)
                    }
                }
                if (qy8_) {
                    _removeNode(qy8_)
                }
            }
            this.T21I9();
            this.VEVf();
            if (this._8c.length > F1D46 && !this._8c[F1D46].N65w7())F1D46 = 0;
            if (a504)this.setCurrentTab(F1D46);
            if (this._8c.length == 0) {
                this.J8q7h()
            }
        }
    };
    this.J8q7h = function () {
        this.P78 = 0;
        this.dom.rows[1].style.display = "none";
        this.TB4();
        if (this.content)this.setContent(this.content);
        this.$01T2()
    };
    this.BLY41 = function (tp3Ka, lJP) {
        if (!MInfoWindowTab.F3x9(tp3Ka)) {
            return false
        }
        var t4b = this._8c.length;
        var _X5y = this.rl3K;
        if (!MInfoWindowTab.F3x9(lJP) || !lJP.J1w7()) {
            lJP = null
        }
        if (lJP) {
            _X5y = lJP.J1w7();
            var um12 = this.tabIndex == lJP.getIndex();
            var $la = [];
            for (var i = 0; i < this._8c.length; i++) {
                var item = this._8c[i];
                if (item == lJP) {
                    $la.push(tp3Ka);
                    tp3Ka.Pe3($la.length - 1)
                }
                $la.push(item);
                item.Pe3($la.length - 1);
                var qy8_ = item.J1w7();
                if (qy8_)qy8_.setAttribute("tabIndex", item.getIndex())
            }
            if (um12)this.tabIndex = lJP.getIndex();
            this._8c = $la
        } else {
            this._8c.push(tp3Ka);
            tp3Ka.Pe3(this._8c.length - 1)
        }
        var qy8_ = this.giT$w(tp3Ka, _X5y);
        if (isNaN(parseInt(this.mAkp.style.height))) {
            this.mAkp.style.height = parseInt(this.mAkp.parentNode.clientHeight) + "px"
        }
        if (tp3Ka.Hf5p9)this.setCurrentTab(tp3Ka.getIndex());
        this.VEVf()
    };
    this._3Nw1 = function () {
        MEvent.bindDom(this.dom, 'contextmenu', this, function (e) {
            tM8(e);
            if (e.stopPropagation)e.stopPropagation(); else e.cancelBubble = true;
            if (wn2U.xc)wn2U.xc.hide()
        })
    };
    this.giT$w = function (Y227, _X5y) {
        var qy8_ = document.createElement("LI");
        qy8_.innerHTML = Y227.getLabel();
        qy8_.style.cssText = this.JEo("TAB_TEXT_BLUR");
        qy8_.setAttribute("tabIndex", Y227.getIndex());
        Y227.BX92g(qy8_);
        this.mAkp.insertBefore(qy8_, _X5y);
        Y227.Vd71.push({event: "click", q9: MEvent.bindDom(qy8_, "click", this, this.p9j4n)});
        if (this._8c.length == 1) {
            if (this.U0Aif == 0) {
                this.U0Aif = qy8_.clientHeight;
                if (parseInt(qy8_.style.paddingTop))this.U0Aif -= parseInt(qy8_.style.paddingTop);
                if (parseInt(qy8_.style.paddingBottom))this.U0Aif -= parseInt(qy8_.style.paddingBottom)
            }
            if (this.hJ6U == 0) {
                this.hJ6U = qy8_.clientHeight
            }
        }
        return qy8_
    };
    this.VEVf = function () {
        var l469C = this._8c;
        this.co3x(true);
        this.jn3(true);
        var HH7Y = this.J63.firstChild.offsetWidth;
        var y7bnF = this.$Ed.firstChild.offsetWidth;
        var u3q = null;
        var Y227 = null;
        for (var i = l469C.length - 1; i >= 0; i--) {
            Y227 = l469C[i];
            if (Y227.N65w7()) {
                var qy8_ = Y227.J1w7();
                if (qy8_) {
                    var H0L$ = qy8_.clientWidth;
                    if (qy8_.offsetTop >= qy8_.offsetHeight * 2 - 5) {
                        ESNi0 = 0
                    } else {
                        var ESNi0 = this.cOhN(true);
                        if (qy8_.offsetTop == 0)ESNi0 += H0L$; else if (qy8_.offsetLeft != 0)ESNi0 = 0
                    }
                    if (H0L$ >= ESNi0) {
                        if (ESNi0 <= 20) {
                            this.Uimrv(Y227, false);
                            ESNi0 = 0
                        } else {
                            ESNi0 = ESNi0 - parseInt(qy8_.style.paddingLeft) - parseInt(qy8_.style.paddingRight);
                            qy8_.style.width = ESNi0 + "px";
                            u3q = Y227
                        }
                    } else {
                        u3q = Y227
                    }
                    if (ESNi0 != 0)break
                }
            }
        }
        this.co3x(false);
        this.jn3(false);
        if (l469C.length > 0) {
            this.co3x(!l469C[0].N65w7());
            this.jn3(!l469C[l469C.length - 1].N65w7())
        }
        if (u3q && u3q.J1w7()) {
            this.Cdf7u = u3q;
            var dom = u3q.J1w7();
            var width = dom.clientWidth;
            if (!isNaN(parseInt(dom.style.paddingLeft)))width -= parseInt(dom.style.paddingLeft);
            if (!isNaN(parseInt(dom.style.paddingRight)))width -= parseInt(dom.style.paddingRight);
            if (!this.$96()) {
                width += HH7Y
            }
            if (!this.Yy4v()) {
                width += y7bnF
            }
            if (this.tabIndex == u3q.getIndex())width -= 2;
            dom.style.width = width + "px"
        }
        for (var i = 0; i < l469C.length; i++) {
            Y227 = l469C[i];
            if (Y227.N65w7()) {
                Y227.QxfW = this.YJ_;
                if (Y227.J1w7()) {
                    Y227.J1w7().style.height = this.U0Aif + "px"
                }
            }
        }
        this.B9G()
    };
    this.Uimrv = function (Y227, visible) {
        var qy8_ = Y227.J1w7();
        if (qy8_) {
            if (visible) {
                qy8_.style.cssText = this.JEo("TAB_TEXT_BLUR")
            } else {
                qy8_.style.width = "0px";
                qy8_.style.padding = "0px"
            }
            Y227.setVisible(visible)
        }
    };
    this.T21I9 = function () {
        var l469C = this._8c;
        for (var i = 0; i < l469C.length; i++) {
            this.Uimrv(l469C[i], true)
        }
    };
    this.jn3 = function (visible) {
        if (!this.fJa36)this.fJa36 = MEvent.bindDom(this.$Ed, "click", this, this.tpW);
        if (visible) {
            this.$Ed.innerHTML = this.JEo("TAB_NAV_R_CHILD");
            this.$Ed.style.cursor = "pointer";
            this.$Ed.style.width = this.JEo("TAB_NAV_INFO").width + "px"
        } else {
            this.$Ed.innerHTML = "";
            this.$Ed.style.cursor = "";
            this.$Ed.style.width = "0px"
        }
    };
    this.co3x = function (visible) {
        if (!this.wx9)this.wx9 = MEvent.bindDom(this.J63, "click", this, this.OCmg);
        if (visible) {
            this.J63.innerHTML = this.JEo("TAB_NAV_L_CHILD");
            this.J63.style.cursor = "pointer";
            this.J63.style.width = this.JEo("TAB_NAV_INFO").width + "px"
        } else {
            this.J63.innerHTML = "";
            this.J63.style.cursor = "";
            this.J63.style.width = "0px"
        }
    };
    this.B9G = function () {
        var ESNi0 = this.cOhN(false);
        if (ESNi0 < 0)ESNi0 = 0;
        this.rl3K.style.width = ESNi0 + "px";
        this.rl3K.style.height = this.hJ6U + "px"
    };
    this.$96 = function () {
        if (this.J63.firstChild)return this.J63.firstChild.offsetWidth > 0; else return false
    };
    this.Yy4v = function () {
        if (this.$Ed.firstChild)return this.$Ed.firstChild.offsetWidth > 0; else return false
    };
    this.cOhN = function () {
        var width = 0;
        if (this.mAkp) {
            if (this._8c.length > 0) {
                var l469C = this._8c;
                var Y227 = null;
                var qy8_ = null;
                for (var i = l469C.length - 1; i >= 0; i--) {
                    Y227 = l469C[i];
                    qy8_ = Y227.J1w7();
                    if (qy8_ && qy8_.offsetTop == this.J63.offsetTop) {
                        break
                    }
                }
                if (qy8_) {
                    if (Y227.getIndex() == 0 && qy8_.offsetTop != this.J63.offsetTop)qy8_ = this.J63;
                    width = this.mAkp.parentNode.offsetWidth - qy8_.offsetLeft - qy8_.offsetWidth - this.$Ed.offsetWidth
                }
            }
        }
        return width
    };
    this.K40H = function (l469C) {
        if (this.mAkp && l469C.length > 0) {
            if (this.dom.rows[1].style.display == "none") {
                this.dom.rows[1].style.display = ""
            }
            if (this.mAkp.style.display == "none") {
                this.mAkp.style.display = ""
            }
            for (var i = 0; i < l469C.length; i++) {
                this.BLY41(l469C[i])
            }
            this.p$C0E();
            var height = this.dom.rows[1].clientHeight;
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingTop)))height -= parseInt(this.dom.rows[1].style.paddingTop);
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingBottom)))height -= parseInt(this.dom.rows[1].style.paddingBottom);
            this.dom.rows[1].style.height = height + "px";
            this.P78 = height;
            this.$01T2()
        }
    };
    this.p$C0E = function () {
        if (this.Uw85 == 0) {
            var qy8_ = this._8c[0].J1w7();
            var borderWidth = this.tabIndex == 0 ? parseInt(qy8_.style.borderTopWidth) : parseInt(qy8_.style.borderBottomWidth);
            if (isNaN(borderWidth))borderWidth = 0;
            this.Uw85 = qy8_.offsetHeight - parseInt(qy8_.style.paddingTop) - borderWidth
        }
        this.J63.style.height = this.Uw85 + "px";
        this.J63.style.lineHeight = this.Uw85 + "px";
        this.$Ed.style.height = this.Uw85 + "px";
        this.$Ed.style.lineHeight = this.Uw85 + "px"
    };
    this.I7NNj = function (Y227) {
        if (!Y227.N65w7())return;
        var dom = Y227.J1w7();
        if (dom) {
            var V62m = {width: dom.style.width, height: dom.style.height};
            dom.style.cssText = this.JEo("TAB_TEXT_BLUR");
            dom.style.width = V62m.width;
            dom.style.height = V62m.height;
            this.tabIndex = -1
        }
    };
    this.N9781 = function (Y227) {
        var dom = Y227.J1w7();
        if (dom) {
            var V62m = {width: dom.style.width, height: dom.style.height};
            dom.style.cssText = this.JEo("TAB_TEXT_FOCUS");
            dom.style.width = V62m.width;
            dom.style.height = V62m.height;
            this.tabIndex = Y227.getIndex();
            var content = Y227.getContent();
            if (typeof content == "string") {
                this.cO23.innerHTML = content
            } else if (typeof content == "object" && typeof content.tagName != "undefined") {
                this.cO23.innerHTML = "";
                this.cO23.appendChild(content)
            }
        }
    };
    this.setCurrentTab = function (index) {
        var l469C = this._8c;
        if (this.tabIndex == index || l469C.length <= 0 || index < 0 || index >= l469C.length)return;
        if (this.tabIndex != -1)this.I7NNj(this._8c[this.tabIndex]);
        var Y13X6 = l469C[index];
        if (!Y13X6.N65w7()) {
            if (Y13X6.QxfW != -1) {
                this.YJ_ = Y13X6.QxfW;
                for (var i = 0; i < l469C.length; i++) {
                    var Y227 = l469C[i];
                    if (Y227.QxfW == Y13X6.QxfW) {
                        this.Uimrv(Y227, true)
                    } else {
                        this.Uimrv(Y227, false)
                    }
                }
                this.VEVf()
            } else {
                while (!Y13X6.N65w7()) {
                    this.tpW(null)
                }
            }
        }
        if (Y13X6.N65w7()) {
            this.N9781(Y13X6)
        }
    };
    this.OCmg = function (e) {
        if (!this.$96())return;
        this.YJ_--;
        var l469C = this._8c;
        var Y13X6 = null;
        if (this.tabIndex != -1)this.I7NNj(this._8c[this.tabIndex]);
        for (var i = l469C.length - 1; i >= 0; i--) {
            var Y227 = l469C[i];
            if (Y227.QxfW == this.YJ_) {
                this.Uimrv(Y227, true);
                Y13X6 = Y227
            } else {
                this.Uimrv(Y227, false)
            }
        }
        this.VEVf();
        this.setCurrentTab(Y13X6.getIndex())
    };
    this.tpW = function (e) {
        if (!this.Yy4v())return;
        this.YJ_++;
        var l469C = this._8c;
        var Y13X6 = null;
        if (this.tabIndex != -1)this.I7NNj(this._8c[this.tabIndex]);
        for (var i = 0; i < l469C.length; i++) {
            var Y227 = l469C[i];
            if (Y227.getIndex() <= this.Cdf7u.getIndex()) {
                if (Y227.N65w7())this.Uimrv(Y227, false)
            } else {
                if (!Y227.N65w7()) {
                    if (!Y13X6)Y13X6 = Y227;
                    this.Uimrv(Y227, true)
                }
            }
        }
        this.VEVf();
        if (Y13X6)this.setCurrentTab(Y13X6.getIndex())
    };
    this.i31 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            this.setVisible(false);
            if (this.onClosed)this.onClosed()
        }
    };
    this.setVisible = function (visible) {
        if (!this.dom)return;
        if (this.isVisible() == visible)return;
        this.dom.style.display = visible ? "" : "none";
        for (var i = 0; i < this.$4h.length; i++) {
            this.$4h[i].style.display = visible ? "" : "none"
        }
        if (!visible)this._693_();
        this.W5LP4.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.style.display != "none"
    };
    this.setZMBtnVisible = function (visible) {
        if (this.I4W_() == visible)return;
        if (visible)this.D9Uo.style.width = this.JEo("RT_BTN_TD_INFO").width + "px"; else this.D9Uo.style.width = "0px"
    };
    this.I4W_ = function () {
        return this.D9Uo && parseInt(this.D9Uo.style.width) != 0
    };
    this.p9j4n = function (e) {
        var index = e.target.getAttribute("tabIndex");
        if (index != null)this.setCurrentTab(parseInt(index))
    };
    this.C$8f1 = function (type) {
        if (this.D9Uo && this.bxc.type != type) {
            this.bxc.type = type;
            if (this.bxc.type == "zoomin") {
                this.D9Uo.innerHTML = this.JEo("ZOOMIN_IMG")
            } else {
                this.D9Uo.innerHTML = this.JEo("ZOOMOUT_IMG")
            }
            this.M6R4()
        }
    };
    this.M6R4 = function () {
        if (this.bxc.q9)MEvent.removeBuiltInListener(this.D9Uo, "click", this.bxc.q9);
        if (this.bxc.type == "zoomin") {
            this.bxc.q9 = MEvent.bindDom(this.D9Uo, "click", this, this.h5YB)
        } else if (this.bxc.type == "zoomout") {
            this.bxc.q9 = MEvent.bindDom(this.D9Uo, "click", this, this.B1hp8)
        }
    };
    this.h5YB = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            if (this.onZoomIn)this.onZoomIn()
        }
    };
    this.B1hp8 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            if (this.onZoomOut)this.onZoomOut()
        }
    };
    this.setTitle = function (title) {
        if (this.uk2) {
            this.uk2.innerHTML = title
        }
    };
    this.setContent = function (content) {
        this.content = content;
        if (this.cO23) {
            if (MEvent.contains(wn2U, "iw_setcontent") > 0)MEvent.trigger(wn2U, "iw_setcontent", this.cO23);
            var y587 = this.cO23.parentNode;
            _removeNode(this.cO23);
            this.cO23 = this.a48G8();
            y587.appendChild(this.cO23);
            if (typeof content == "string")this.cO23.innerHTML = content; else if (typeof content == "object" && typeof content.tagName != "undefined") {
                this.cO23.innerHTML = "";
                this.cO23.appendChild(content)
            }
            if (this._8c.length > 0)this._8c[0].setContent(content)
        }
    };
    this.x70 = function (w, h) {
        if (!this.X0qi2())return;
        this.width = w;
        this.height = h;
        if (this.dom) {
            this.dom.style.width = w + "px";
            this.dom.style.height = h + "px";
            this.$01T2()
        }
    };
    this.moveTo = function (x, y) {
        if (!this.X0qi2())return;
        this.x = x;
        this.y = y;
        this.dom.style.left = x + "px";
        this.dom.style.top = y + "px";
        for (var i = 0; i < this.$4h.length; i++) {
            var shadow = this.$4h[i];
            shadow.style.left = (this.x + 3 + ((i) * 3)) + "px";
            shadow.style.top = (this.y + 3 + ((i) * 3)) + "px"
        }
    };
    this._A0 = function (I_mW) {
        if (this.isVisible()) {
            if ((this.cO23.style.overflow == "hidden" ? true : false) != I_mW) {
                this.cO23.style.overflow = I_mW ? "hidden" : "auto"
            }
        }
    };
    this.JEo = function (name) {
        return $03a.Ecq.$44h(name)
    };
    this.$U36 = function (name, value) {
        $03a.Ecq.vWC(name, value)
    };
    this.finalize = function () {
        if (this.wx9)MEvent.removeBuiltInListener(this.J63, "click", this.wx9);
        if (this.fJa36)MEvent.removeBuiltInListener(this.$Ed, "click", this.fJa36);
        if (this.n0741)MEvent.removeBuiltInListener(this.$76R_, "click", this.n0741);
        this.K01mt();
        _removeNode(this.dom);
        for (var i = 0; i < this.$4h.length; i++) {
            _removeNode(this.$4h[i])
        }
        _removeNode(this.W5LP4);
        _removeNode(this.XRb76);
        t892(this);
        $03a.Ecq.finalize()
    }
};
$03a.Ecq = new function () {
    var m7so = [];
    var m9o43 = false;
    if (navigator.userAgent.indexOf(";") >= 0) {
        if (!window.XMLHttpRequest)m9o43 = true
    }
    m7so["TIP_DEFAULT_INFO"] = {width: 300, height: 300, ev1U9: false, zIndex: 100};
    m7so["COLOR"] = "#81807f";
    m7so["TIP_TABLE_BORDER_COLOR"] = "#0e347f";
    m7so["IMAGE_RESOURCE"] = CTLIMG_RESOURCE[0].url;
    m7so["IMAGE_RESOURCE_INFO"] = {width: CTLIMG_RESOURCE[0].w, height: CTLIMG_RESOURCE[0].h};
    m7so["BLANK_IMG_SRC"] = strImgsvrUrl + "images/newbubbleimg/mbblank.gif";
    m7so["TIP_TABLE"] = "position:absolute;border:2px solid " + m7so["TIP_TABLE_BORDER_COLOR"] + ";background-color:#FFFFFF;display:none;spacing:10px;table-layout:fixed;overflow:hidden;z-index:" + m7so["TIP_DEFAULT_INFO"].zIndex + ";";
    m7so["TIP_BORDER"] = "position:absolute;background:white;z-index:99;";
    m7so["TITLE_CONTAINER_TD"] = "";
    m7so["TITLE_TABLE"] = "table-layout:fixed;margin-bottom:5px;margin-top:4px;";
    m7so["TITLE_TD"] = "overflow:hidden;padding-left:4px;padding-top:2px;font-weight:bold;font-size:14px;";
    m7so["TITLE_SPACER"] = "width:10px;-moz-user-select:none;-moz-user-focus:none;";
    var i1F0F = function (w, h, x, y, pe84v) {
        if (typeof pe84v != "string")pe84v = "";
        var s = "<div style=\"position:absolute;width:" + w + "px;height:" + h + "px;overflow:hidden;-moz-user-select:none;-moz-user-focus:none;" + pe84v + "\">";
        if (m9o43) {
            s += "<img src=\"" + m7so["BLANK_IMG_SRC"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + m7so["IMAGE_RESOURCE"] + ",sizingMethod=scale);width:" + m7so["IMAGE_RESOURCE_INFO"].width + "px;height:" + m7so["IMAGE_RESOURCE_INFO"].height + "px;\">"
        } else {
            s += "<img src=\"" + m7so["IMAGE_RESOURCE"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;\">"
        }
        s += "</div>";
        return s
    };
    m7so["RT_BTN_TD_INFO"] = {width: 18};
    m7so["RT_BTN_TD"] = "width:" + m7so["RT_BTN_TD_INFO"].width + "px";
    m7so["RT_BTN_IMG_INFO"] = {width: 12, height: 12};
    m7so["CLOSE_IMG"] = i1F0F(m7so["RT_BTN_IMG_INFO"].width, m7so["RT_BTN_IMG_INFO"].height, -64, -51, "cursor:pointer;");
    m7so["ZOOMIN_IMG"] = i1F0F(m7so["RT_BTN_IMG_INFO"].width, m7so["RT_BTN_IMG_INFO"].height, -42, -51, "cursor:pointer;");
    m7so["ZOOMOUT_IMG"] = i1F0F(m7so["RT_BTN_IMG_INFO"].width, m7so["RT_BTN_IMG_INFO"].height, -53, -51, "cursor:pointer;");
    m7so["SHADOW_COLOR"] = m7so["COLOR"];
    m7so["SHADOW_AMOUNT"] = 2;
    m7so["SHADOW_OPACITY"] = [0.5, 0.3];
    m7so["SHADOW_DIV"] = "position:absolute;background-color:" + m7so["SHADOW_COLOR"] + ";display:none;";
    m7so["TAB_AMOUNT"] = 5;
    m7so["TAB_DEFAULT_LABEL"] = "\u4e3b\u8981";
    m7so["TAB_TD"] = "-moz-user-select:none;-moz-user-focus:none;";
    m7so["TAB_CONTAINER"] = "list-style-type:none;margin:0px;padding:0px;overflow:hidden;";
    m7so["TAB_LINE"] = "1px solid " + m7so["COLOR"] + ";";
    m7so["TAB_TEXT_COMMON"] = "float:left;cursor:pointer;white-space:nowrap;overflow:hidden;outline:none;font-size:12px;padding-bottom:4px;";
    m7so["TAB_TEXT_FOCUS"] = m7so["TAB_TEXT_COMMON"] + "border-top:" + m7so["TAB_LINE"] + ";border-left:" + m7so["TAB_LINE"] + ";border-right:" + m7so["TAB_LINE"] + ";padding-top:5px;padding-left:4px;padding-right:4px;";
    m7so["TAB_TEXT_BLUR"] = m7so["TAB_TEXT_COMMON"] + "border-bottom:" + m7so["TAB_LINE"] + "padding-top:5px;padding-left:5px;padding-right:5px;";
    m7so["TAB_SPACER"] = "float:left;border-bottom:" + m7so["TAB_LINE"];
    m7so["TAB_NAV_INFO"] = {width: 10, height: 10};
    m7so["TAB_NAV_LR_COMMON"] = "float:left;padding-top:5px;padding-left:4px;padding-right:4px;border-bottom:" + m7so["TAB_LINE"] + ";";
    m7so["TAB_NAV_L"] = m7so["TAB_NAV_LR_COMMON"];
    m7so["TAB_NAV_R"] = m7so["TAB_NAV_LR_COMMON"] + "float:right;";
    m7so["TAB_NAV_L_CHILD"] = i1F0F(m7so["TAB_NAV_INFO"].width, m7so["TAB_NAV_INFO"].height, -66, -160);
    m7so["TAB_NAV_R_CHILD"] = i1F0F(m7so["TAB_NAV_INFO"].width, m7so["TAB_NAV_INFO"].height, -66, -148);
    m7so["CONTENT_TD"] = "";
    m7so["CONTENT_DIV"] = "position:relative;padding:5px;width:100%;height:100%;overflow:auto;word-break: break-all;";
    m7so["ARROW_INFO"] = {M8F3_: 15, Fw_3F: 23, V5J8N: 23, hSj: 15, zIndex: m7so["TIP_DEFAULT_INFO"].zIndex + 1};
    m7so["ARROW_DIV"] = "position:absolute;top:0px;left:0px;width:" + m7so["ARROW_INFO"].width + "px;height:" + m7so["ARROW_INFO"].height + "px;display:none;z-index:" + m7so["ARROW_INFO"].zIndex + ";-moz-user-select:none;-moz-user-focus:none;";
    m7so["ARROW_TOP_CHILD"] = i1F0F(m7so["ARROW_INFO"].V5J8N, m7so["ARROW_INFO"].hSj, -43, -177);
    m7so["ARROW_BOTTOM_CHILD"] = i1F0F(m7so["ARROW_INFO"].V5J8N, m7so["ARROW_INFO"].hSj, -43, -192);
    m7so["ARROW_LEFT_CHILD"] = i1F0F(m7so["ARROW_INFO"].M8F3_, m7so["ARROW_INFO"].Fw_3F, -61, -124);
    m7so["ARROW_RIGHT_CHILD"] = i1F0F(m7so["ARROW_INFO"].M8F3_, m7so["ARROW_INFO"].Fw_3F, -25, -178);
    this.vWC = function (name, value) {
        if (typeof m7so[name] != "undefined")m7so[name] = value
    };
    this.$44h = function (name) {
        return m7so[name]
    };
    this.finalize = function () {
        t892(m7so);
        m7so = null
    }
};
var MPanel = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.paint()
    };
    this.setLocation = function (options, paint) {
        if (typeof paint != "boolean")paint = true;
        this.location = options || {};
        with (this.location) {
            if (typeof pt != "object" || !(pt instanceof MPoint) || !pt)this.location.pt = null;
            if (typeof type != "string" || !type || (type == "latlon" && !pt))this.location.type = "xy";
            if (typeof x != "number")this.location.x = 0;
            if (typeof y != "number")this.location.y = 0;
            if (type == "latlon" && pt && !pt.maplet && this.maplet)pt.initialize(this.maplet)
        }
        this.options.location = this.location;
        if (paint)this.paint()
    };
    this.setContent = function (c) {
        if (typeof c != "undefined" && c) {
            if (typeof c == "string") {
                this.dom.innerHTML = c
            } else if (typeof c == "object") {
                this.dom.appendChild(c)
            }
        } else {
            c = null;
            this.dom.innerHTML = ""
        }
        this.options.content = c
    };
    this.setMouseWheel = function (enable) {
        if (typeof enable != "boolean")enable = true;
        if (this.dom)this.dom.setAttribute(oiY1, !enable);
        this.options.mousewheel = enable
    };
    this.setZoomHide = function (hide) {
        if (typeof hide != "boolean")hide = false;
        this.options.zoomhide = hide
    };
    this.setCreator = function (QX359) {
        if (typeof QX359 != "number" || (QX359 != MPanel.USER && QX359 != MPanel.SYSTEM))QX359 = MPanel.USER;
        this.options.creator = QX359
    };
    this.setPin = function (p, paint) {
        if (typeof p != "boolean")p = false;
        if (typeof paint != "boolean")paint = true;
        this.options.pin = p;
        if (!p && typeof this.location != "undefined" && this.location.pt) {
            this.location.type = "xy";
            this.location.pt = null
        }
        if (paint)this.paint()
    };
    this.setContainer = function (c) {
        if (typeof c != "object" || !c)c = null;
        this.options.container = c
    };
    this.setZIndex = function (i) {
        if (typeof i != "number")i = this.options.pin ? 200 : 2;
        this.dom.style.zIndex = i;
        this.options.zindex = i
    };
    this.paint = function () {
        if (!this.dom || !this.maplet)return;
        if (this.options.container) {
            if (this.dom.parentNode != this.options.container)this.options.container.appendChild(this.dom)
        } else {
            if (this.options.pin) {
                if (this.dom.parentNode != this.maplet.sF.div)this.maplet.sF.div.appendChild(this.dom)
            } else {
                if (this.dom.parentNode != this.maplet.panel)this.maplet.panel.appendChild(this.dom)
            }
        }
        with (this.location) {
            if (this.options.pin || type == "latlon") {
                if (typeof pt == "undefined" || !pt)pt = new MPoint(this.maplet.toMapCoordinate(x, y));
                if (!pt.maplet) {
                    pt.initialize(this.maplet)
                } else if (this.options.pin) {
                    if (this.maplet.MT$) {
                        if (this.maplet.__RH != pt.__RH) {
                            pt.mapX += this.maplet.pNt;
                            pt.mapY += this.maplet.$5D2;
                            pt.__RH = this.maplet.__RH
                        }
                    } else {
                        pt.recalcScreenCoords()
                    }
                }
                x = pt.mapX;
                y = pt.mapY
            }
            this.dom.style.left = x + "px";
            this.dom.style.top = y + "px"
        }
    };
    this.show = function () {
        this.setVisible(true);
        this.Y2837.N$UU1 = false
    };
    this.hide = function () {
        this.setVisible(false);
        this.Y2837.N$UU1 = true
    };
    this.setVisible = function (visible) {
        if (!this.dom)return;
        if (this.dom.style.display != (visible ? "" : "none"))this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom.style.display == ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.dom) {
            if (!finalize) {
                if (this.dom.parentNode)this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        this.maplet = null
    };
    this.clone = function () {
        return new MPanel({pin: this.options.pin, parent: this.options.parent, zindex: this.options.zindex, content: this.options.content, location: this.location, mousewheel: this.options.mousewheel, zoomhide: this.options.zoomhide, creator: this.options.creator})
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPanel'
    };
    this.id = "panel" + MPanel.E$9;
    MPanel.E$9++;
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.Y2837 = {N$UU1: false};
    this.options = options || {};
    with (this.options) {
        this.setPin(typeof pin != "undefined" ? pin : undefined, false);
        this.setContainer(typeof container != "undefined" ? container : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setContent(typeof content != "undefined" ? content : undefined);
        this.setLocation(typeof location != "undefined" ? location : undefined, false);
        this.setMouseWheel(typeof mousewheel != "undefined" ? mousewheel : undefined);
        this.setZoomHide(typeof zoomhide != "undefined" ? zoomhide : undefined);
        this.setCreator(typeof creator != "undefined" ? creator : undefined)
    }
};
MPanel.enableDragMap = function (dom, enable, G_30) {
    if (typeof enable != "boolean")enable = true;
    if (enable)lf7(dom, Ux3q, "true", G_30); else HNt(dom, Ux3q)
};
MPanel.USER = 1;
MPanel.SYSTEM = 2;
MPanel.E$9 = 0;
var MLayer = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.paint()
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path)path = "";
        this.options.serverPath = path
    };
    this.setZIndex = function (i) {
        if (typeof i != "number")i = 0;
        this.dom.style.zIndex = i;
        this.options.zindex = i;
        if (this.maplet) {
            this.maplet.vq6(this)
        }
    };
    this.setImgType = function (type) {
        if (typeof type != "string" || !type)type = "png";
        this.options.imgType = type.toLowerCase()
    };
    this.setDataType = function (type) {
        if (typeof type != "string" || !type)type = "js";
        this.options.dataType = type
    };
    this.setDataPattern = function (p8y9) {
        if (typeof p8y9 != "string" || !p8y9)p8y9 = "data" + MLayer.DPLACEHOLDER;
        this.options.dataPattern = p8y9
    };
    this.setImgWidth = function (w) {
        if (typeof w != "number" || w <= 0)w = 5;
        this.options.imgWidth = w;
        this.P30_ = Math.ceil(w / 2)
    };
    this.setImgHeight = function (h) {
        if (typeof h != "number" || h <= 0)h = 5;
        this.options.imgHeight = h;
        this.j37 = Math.ceil(h / 2)
    };
    this.setLevelRange = function (min, max, refresh) {
        if (typeof min != "number" || min < MIN_ZOOM_LEVEL || min > MAX_ZOOM_LEVEL)min = MIN_ZOOM_LEVEL;
        if (typeof max != "number" || max < MIN_ZOOM_LEVEL || max > MAX_ZOOM_LEVEL)max = MAX_ZOOM_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max;
        if (typeof refresh != "boolean")refresh = true;
        if (refresh)this.update()
    };
    this.setNeedData = function (p7I, v98v4) {
        if (typeof p7I != "boolean")p7I = false;
        if (typeof v98v4 != "boolean")v98v4 = true;
        var h85 = this.options.needData;
        this.options.needData = p7I;
        if (v98v4 && this.options.needData != h85) {
            if (h85) {
                this.clearData()
            } else {
                JWq_.apply(this)
            }
        }
    };
    this.setCreator = function (QX359) {
        if (typeof QX359 != "pt7$H" || (QX359 != MLayer.USER && QX359 != MLayer.SYSTEM))QX359 = MLayer.USER;
        this.options.creator = QX359
    };
    this.setImgUrlPreprocessor = function (_jQK1) {
        _jQK1 = _jQK1 || {};
        if (typeof _jQK1.fun != "function" || !_jQK1.fun)_jQK1.fun = null;
        if (typeof _jQK1.thisObj != "object" || !_jQK1.thisObj)_jQK1.thisObj = null;
        this.options.imgUrlPreprocessor = _jQK1
    };
    this.setDataUrlPreprocessor = function (_jQK1) {
        _jQK1 = _jQK1 || {};
        if (typeof _jQK1.fun != "function" || !_jQK1.fun)_jQK1.fun = null;
        if (typeof _jQK1.thisObj != "object" || !_jQK1.thisObj)_jQK1.thisObj = null;
        this.options.dataUrlPreprocessor = _jQK1
    };
    this.setFireEvent = function (D5_) {
        if (typeof D5_ != "number")D5_ = MLayer.ALL;
        this.options.events = D5_
    };
    this.rg96 = function (mouseover) {
        mouseover = mouseover || {};
        if (typeof mouseover.fun != "function" || !mouseover.fun)mouseover.fun = null;
        if (typeof mouseover.thisObj != "object" || !mouseover.thisObj)mouseover.thisObj = null;
        this.options.mouseover = mouseover
    };
    this.Pem20 = function (mouseout) {
        mouseout = mouseout || {};
        if (typeof mouseout.fun != "function" || !mouseout.fun)mouseout.fun = null;
        if (typeof mouseout.thisObj != "object" || !mouseout.thisObj)mouseout.thisObj = null;
        this.options.mouseout = mouseout
    };
    this.baB4 = function (click) {
        click = click || {};
        if (typeof click.fun != "function" || !click.fun)click.fun = null;
        if (typeof click.thisObj != "object" || !click.thisObj)click.thisObj = null;
        this.options.click = click
    };
    this.setDataLoadMode = function (mode) {
        if (typeof mode != "number" || (mode != MLayer.DL_INITIATIVE && mode != MLayer.DL_PASSIVE))mode = MLayer.DL_INITIATIVE;
        this.options.dataLoadMode = mode
    };
    this.N0PA = function (id, uy) {
        var layerData = this.maplet.layerData[id];
        if (typeof layerData == "object" && layerData && _xY34(uy) && uy.length > 0) {
            this.data[id] = uy;
            var p1 = layerData.x;
            var p3 = layerData.y;
            for (var i = 0; i < uy.length; i++) {
                var item = uy[i];
                item.grid = id;
                var zB = p1 + item.r.i.x;
                var zF = p3 + item.r.i.y;
                item.rect = {min: {x: zB, y: zF}, max: {x: zB + item.r.a.x, y: zF + item.r.a.y}};
                G47.apply(this, [item])
            }
            uy = null
        }
    };
    this.EM6 = function () {
        return this.options.dataPattern.replace(MLayer.DPLACEHOLDER, "")
    };
    this.setServerPathType = function (type) {
        if (typeof type != "number" || (type != MLayer.PT_NORMAL && type != MLayer.PT_COMBINER))type = MLayer.PT_NORMAL;
        this.options.serverPathType = type
    };
    this.setCombinerParas = function (it9o) {
        if (typeof it9o != "string")it9o = "";
        this.options.combinerParas = it9o
    };
    this.enableNPS = function (enable) {
        if (typeof enable != "boolean")enable = false;
        this.options.nps = enable
    };
    this.getFilename = function (fBXj8, grid) {
        var $shJ6 = "";
        if (this.maplet) {
            if (typeof grid == "string")grid = this.maplet.layerData[grid];
            if (typeof grid == "object" && grid) {
                $shJ6 = sI[this.maplet.AG] + "/" + (this.options.nps && this.maplet.AG >= 14 ? grid.dirx + "/" : "") + grid.dirname + "/" + grid.xyname + "." + (fBXj8 ? this.options.imgType : this.options.dataType)
            }
        }
        return $shJ6
    };
    this.enableSafeLevel = function (enable) {
        if (typeof enable != "boolean")enable = false;
        this.options.safeLevel = enable
    };
    this.setTip = function (tip, refresh) {
        tip = tip || {};
        if (typeof tip.mode != "number" || (tip.mode & MLayer.TM_ALWAYS != MLayer.TM_ALWAYS && tip.mode & MLayer.TM_MOUSEOVER != MLayer.TM_MOUSEOVER))tip.mode = MLayer.TM_NEVER;
        if (typeof tip.otiLevel != "number" || tip.otiLevel < MIN_ZOOM_LEVEL || tip.otiLevel > MAX_ZOOM_LEVEL)tip.otiLevel = MIN_ZOOM_LEVEL;
        if (typeof tip.otaLevel != "number" || tip.otaLevel < MIN_ZOOM_LEVEL || tip.otaLevel > MAX_ZOOM_LEVEL)tip.otaLevel = MAX_ZOOM_LEVEL;
        if (typeof tip.atiLevel != "number" || tip.atiLevel < MIN_ZOOM_LEVEL || tip.atiLevel > MAX_ZOOM_LEVEL)tip.atiLevel = MIN_ZOOM_LEVEL;
        if (typeof tip.ataLevel != "number" || tip.ataLevel < MIN_ZOOM_LEVEL || tip.ataLevel > MAX_ZOOM_LEVEL)tip.ataLevel = MAX_ZOOM_LEVEL;
        this.options.tip = tip;
        if (typeof refresh != "boolean")refresh = true;
        if (refresh)this.refreshTip()
    };
    this.refreshTip = function () {
        for (var i in this.data)o61a.apply(this, [this.data[i]])
    };
    var o61a = function (grid) {
        if (typeof grid != "object" || !grid)return;
        for (var i = 0; i < grid.length; i++)G47.apply(this, [grid[i]])
    };
    var G47 = function (data) {
        if (typeof data != "object" || !data || !data.n)return;
        var b = _9tU.apply(this, [true, true]);
        var K1e = M2He.apply(this, [data]);
        if (b && !data.tip && K1e) {
            this.wR(data)
        } else if (data.tip && (!b || !K1e)) {
            OP6.apply(this, [data])
        }
    };
    this.setNeedImg = function (p7I, v98v4) {
        if (typeof p7I != "boolean")p7I = true;
        if (typeof v98v4 != "boolean")v98v4 = true;
        var h85 = this.options.needImg;
        this.options.needImg = p7I;
        if (v98v4 && this.options.needImg != h85) {
            if (h85) {
                this.clearImgs()
            } else {
                JWq_.apply(this)
            }
        }
    };
    this.inZoomRange = function (AB) {
        if (AB >= this.options.minLevel && AB <= this.options.maxLevel)return true; else return false
    };
    this.paint = function () {
        if (!this.dom || !this.maplet)return;
        if (!this.maplet.u_5)this.maplet.a62();
        if (this.dom.parentNode != this.maplet.u_5) {
            this.resize(this.maplet.width, this.maplet.height);
            this.maplet.u_5.appendChild(this.dom)
        }
    };
    var nuuv5 = function (data, RUL2) {
        if (typeof data.IDjg == "undefined")data.IDjg = RUL2; else data.IDjg = RUL2
    };
    var _da68 = function (data) {
        return typeof data.IDjg == "undefined" || data.IDjg
    };
    var m46kH = function () {
        for (var i in this.data)nuuv5.apply(this, [this.data[i], false])
    };
    var Fg1cR = function () {
        for (var i in this.data) {
            if (!_da68.apply(this, [this.data[i]]))EYdT2.apply(this, [i])
        }
    };
    var DK_ = function (img, w1x53) {
        img.setAttribute(N73, w1x53 ? "yes" : "no")
    };
    var t1G = function () {
        for (var i in this.g8n82)DK_.apply(this, [this.g8n82[i], false])
    };
    var dl5 = function (img) {
        return img.getAttribute(N73) == "yes"
    };
    var Pf6 = function () {
        for (var i in this.g8n82) {
            if (!dl5.apply(this, [this.g8n82[i]]))l97Ld.apply(this, [i])
        }
    };
    var l97Ld = function (id) {
        if (typeof this.g8n82[id] == "object") {
            var img = this.g8n82[id];
            img.onload = null;
            img.onerror = null;
            _removeNode(img);
            img = null;
            delete this.g8n82[id]
        }
    };
    var EYdT2 = function (id) {
        if (typeof this.data[id] == "object") {
            if (this.g8n82[id] && this.g8n82[id].getAttribute(MLayer.M8_)) {
                this.g8n82[id].removeAttribute(MLayer.M8_)
            }
            for (var i = 0; i < this.data[id].length; i++) {
                OP6.apply(this, [this.data[id][i]])
            }
            if (O4WPR && O4WPR.grid == id) {
                S30A.apply(this);
                O4WPR = null
            }
            this.data[id] = null;
            delete this.data[id]
        }
    };
    var OP6 = function (data) {
        if (!this.maplet || !data || !data.tip)return;
        this.maplet.removePanel(data.tip, true);
        data.tip = null;
        if (B3_[data.p])delete B3_[data.p]
    };
    this.update = function () {
        if (!this.dom || !this.maplet)return;
        if (!this.inZoomRange(this.maplet.AG)) {
            this.clear();
            return
        }
        JWq_.apply(this)
    };
    this.refresh = function () {
        if (!this.dom || !this.maplet)return;
        this.clear();
        JWq_.apply(this)
    };
    var JWq_ = function () {
        if (!this.isVisible() || !this.inZoomRange(this.maplet.AG))return;
        m46kH.apply(this);
        t1G.apply(this);
        for (var i in this.maplet.layerData) {
            var item = this.maplet.layerData[i];
            if (item.x + this.maplet.imgWidth < 0 || item.x > this.maplet.width || item.y + this.maplet.imgHeight < 0 || (item.y + (this.options.safeLevel ? w8[this.maplet.AG] : 0)) > this.maplet.height)continue;
            if (this.options.needImg) {
                var img = this.g8n82[i];
                if (typeof img != "object" || !img) {
                    img = document.createElement("IMG");
                    img.style.position = "absolute";
                    img.setAttribute("unselectable", "on");
                    img.style.MozUserSelect = "none";
                    img.setAttribute(Ux3q, "true");
                    img.setAttribute(M9wA, "yes");
                    img.onerror = function (thisObj, id) {
                        return function () {
                            o970.apply(thisObj, [id])
                        }
                    }(this, i);
                    img.onload = function (thisObj, id) {
                        return function () {
                            L67.apply(thisObj, [id])
                        }
                    }(this, i);
                    this.g8n82[i] = img
                }
                DK_.apply(this, [img, true]);
                img.style.left = item.x + "px";
                img.style.top = item.y + (this.options.safeLevel ? w8[this.maplet.AG] : 0) + "px";
                if (!img.src && img.tagName != "DIV") {
                    var src = "";
                    var filename = this.getFilename(true, item);
                    if (this.options.imgUrlPreprocessor.fun) {
                        src = this.options.imgUrlPreprocessor.fun.apply(this.options.imgUrlPreprocessor.thisObj, [item]);
                        if (!src)continue
                    } else if (this.options.serverPathType == MLayer.PT_COMBINER) {
                        src += G9Jl7.apply(this, [this.options.serverPath, item.AOvOc, item.o9U0j]);
                        src += (this.options.serverPath.indexOf("?") != -1 ? "&" : "?") + "n=" + this.options.combinerParas;
                        src += "&p=" + filename;
                        src += "&g=" + item.grid
                    } else {
                        src = G9Jl7.apply(this, [this.options.serverPath, item.AOvOc, item.o9U0j]) + filename
                    }
                    img.src = src
                } else {
                    g087Q.apply(this, [i])
                }
            } else {
                g087Q.apply(this, [i])
            }
        }
        Pf6.apply(this);
        Fg1cR.apply(this)
    };
    var G9Jl7 = function (path, AOvOc, o9U0j) {
        var NWB73 = "img.mapbar.com";
        if (strImgsvrUrl.substring(7, 21) == NWB73) {
            return path.replace(NWB73, "img" + this.maplet.C92(AOvOc, o9U0j) + ".mapbar.com")
        } else {
            return path
        }
    };
    var o970 = function (id) {
        l97Ld.apply(this, [id])
    };
    var L67 = function (id) {
        var img = this.g8n82[id];
        if (typeof img != "undefined" && img) {
            if (img.width <= 1 || img.height <= 1) {
                l97Ld.apply(this, [id]);
                return
            }
            img.onerror = null;
            img.onload = null;
            if (m9o43 && this.options.imgType == "png") {
                var d = document.createElement("DIV");
                d.style.position = "absolute";
                d.style.width = this.maplet.imgWidth + "px";
                d.style.height = this.maplet.imgHeight + "px";
                d.style.left = img.style.left;
                d.style.top = img.style.top;
                d.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + img.src + ",sizingMethod=scale);";
                d.style.MozUserSelect = "none";
                d.setAttribute("unselectable", "on");
                d.setAttribute(Ux3q, "true");
                d.setAttribute(M9wA, "yes");
                DK_.apply(this, [d, true]);
                this.dom.appendChild(d);
                l97Ld.apply(this, [id]);
                this.g8n82[id] = d
            } else {
                this.dom.appendChild(img)
            }
            g087Q.apply(this, [id])
        }
    };
    this.refreshDataXY = function () {
        if (!this.options.needData)return;
        for (var id in this.data) {
            var uy = this.data[id];
            for (var i = 0; i < uy.length; i++) {
                var item = uy[i];
                var zB = this.maplet.layerData[id].x + item.r.i.x;
                var zF = this.maplet.layerData[id].y + item.r.i.y;
                item.rect.min.x = zB;
                item.rect.min.y = zF;
                item.rect.max.x = zB + item.r.a.x;
                item.rect.max.y = zF + item.r.a.y
            }
        }
    };
    var g087Q = function (id) {
        if (!this.options.needData)return;
        var img = this.g8n82[id];
        if (!this.options.needImg || (typeof img == "object" && img && ((typeof img.src != "undefined" && img.src != sX) || (m9o43 && this.options.imgType == "png")))) {
            if (!this.data[id] && typeof this.maplet.layerData[id] == "object") {
                if (this.options.dataLoadMode == MLayer.DL_PASSIVE)return;
                if (img) {
                    if (img.getAttribute(MLayer.M8_))return; else img.setAttribute(MLayer.M8_, true)
                }
                var item = this.maplet.layerData[id];
                var src = "";
                var filename = this.getFilename(false, item);
                if (this.options.dataUrlPreprocessor.fun) {
                    src = this.options.dataUrlPreprocessor.fun.apply(this.options.dataUrlPreprocessor.thisObj, [item]);
                    if (!src)return
                } else {
                    src = G9Jl7.apply(this, [this.options.serverPath, item.AOvOc, item.o9U0j]) + filename
                }
                new iBl8Y(src, QD6$, false, true, this, undefined, [id]).PYl()
            } else {
                var uy = this.data[id];
                var layerData = this.maplet.layerData[id];
                if (typeof uy == "undefined" || !uy || typeof layerData == "undefined" || !layerData)return;
                nuuv5.apply(this, [uy, true]);
                var p1 = layerData.x;
                var p3 = layerData.y;
                for (var i = 0; i < uy.length; i++) {
                    var item = uy[i];
                    item.rect.min.x = p1 + item.r.i.x;
                    item.rect.min.y = p3 + item.r.i.y;
                    item.rect.max.x = item.rect.min.x + item.r.a.x;
                    item.rect.max.y = item.rect.min.y + item.r.a.y;
                    G47.apply(this, [item])
                }
            }
        }
    };
    var QD6$ = function (id, Y85) {
        if (typeof this.maplet == "object" && this.maplet && typeof this.maplet.layerData == "object" && this.maplet.layerData) {
            if (typeof this.maplet.layerData[id] == "undefined" || !this.maplet.layerData[id])return;
            var layerData = this.maplet.layerData[id];
            var X69 = this.options.dataPattern.replace(MLayer.DPLACEHOLDER, layerData.dirname + "_" + layerData.xyname);
            var uy = eval("typeof " + X69 + "==\"undefined\"?null:" + X69);
            this.N0PA(id, uy)
        }
        _removeNode(aa(Y85))
    };
    this.getDataByXY = function (id, x, y, t5$) {
        if (typeof t5$ != "boolean")t5$ = false;
        if (this.data[id]) {
            var pt = {x: x, y: y};
            for (var i = 0; i < this.data[id].length; i++) {
                if (_isInsideRect(pt, this.data[id][i].rect)) {
                    var d = this.data[id][i];
                    if (t5$) {
                        if (d.c.length > 0) {
                            var r = d.rect;
                            var p1 = this.maplet.layerData[id].x;
                            var p3 = this.maplet.layerData[id].y;
                            for (var k3n1 = 0; k3n1 < d.c.length; k3n1++) {
                                var c = d.c[k3n1];
                                var ix = p1 + c.i.x;
                                var iy = p3 + c.i.y;
                                var egd = {min: {x: ix, y: iy}, max: {x: ix + c.a.x, y: iy + c.a.y}};
                                if (_isInsideRect(pt, egd)) {
                                    d = this.data[id][c.f]
                                }
                            }
                        }
                    }
                    return d
                }
            }
        }
        return null
    };
    this.C2$6Y = function (id, x, y) {
        if (!this.isVisible())return null;
        var d = this.getDataByXY(id, x, y, oRI09.apply(this, [true, true]));
        var lLu = true;
        if (this.options.mouseout.fun)S30A.apply(this, [d]);
        if (this.options.mouseover.fun && d) {
            lLu = aW9HJ.apply(this, [d])
        }
        if (d && lLu) {
            this.maplet.$_T("pointer", this.maplet.panel)
        }
        O4WPR = d;
        if (this.options.mouseover.fun)return null;
        if (d && oRI09.apply(this, [true, true]) && !_9tU.apply(this, [true, true]) && d.n) {
            this.wR(d)
        } else {
            this.F612()
        }
        return d
    };
    var aW9HJ = function (d) {
        var lpK86 = true;
        if (this.options.mouseover.fun) {
            if (!O4WPR || O4WPR != d) {
                lpK86 = this.options.mouseover.fun.apply(this.options.mouseover.thisObj, [d]);
                PB71O = lpK86
            } else {
                lpK86 = PB71O
            }
        }
        return lpK86
    };
    var S30A = function (d) {
        if (this.options.mouseout.fun && O4WPR && (O4WPR != d || !d)) {
            this.options.mouseout.fun.apply(this.options.mouseout.thisObj, [O4WPR])
        }
    };
    var oRI09 = function (m0O, x3_3) {
        with (this.options.tip) {
            return(!m0O || (mode & MLayer.TM_MOUSEOVER) == MLayer.TM_MOUSEOVER) && (!x3_3 || (this.maplet.AG >= otiLevel && this.maplet.AG <= otaLevel))
        }
    };
    var _9tU = function (m0O, x3_3) {
        if (this.options.dataLoadMode != MLayer.DL_INITIATIVE)return;
        with (this.options.tip) {
            return(!m0O || (mode & MLayer.TM_ALWAYS) == MLayer.TM_ALWAYS) && (!x3_3 || (this.maplet.AG >= atiLevel && this.maplet.AG <= ataLevel))
        }
    };
    this.wR = function (data) {
        if (oRI09.apply(this, [true, true]) && !_9tU.apply(this, [true, true])) {
            if (!k6w8) {
                this.maplet.addPanel(MLayer.TIPANEL);
                k6w8 = aa(MLayer.TIPID)
            }
            if ($8F != data || ($8F == data && !MLayer.TIPANEL.isVisible())) {
                $8F = data;
                k6w8.innerHTML = data.n;
                MLayer.TIPANEL.dom.style.visibility = "hidden";
                MLayer.TIPANEL.show();
                var QJg3 = _q4.apply(this, [data]);
                MLayer.TIPANEL.setLocation({type: "xy", x: QJg3.x, y: QJg3.y});
                MLayer.TIPANEL.dom.style.visibility = "visible"
            }
        } else if (_9tU.apply(this, [true, true]) && data && data.n) {
            if (data.p && B3_[data.p])return;
            B3_[data.p] = true;
            data.tip = MLayer.TIPANEL2.clone();
            data.tip.setContainer(this.maplet.u_5.div);
            var n = data.n;
            if (n.length > 8) {
                n = data.n.substring(0, 8) + "...";
                data.tip.dom.title = data.n
            }
            data.tip.setContent(data.tip.options.content.replace(MLayer.TPLACEHOLDER, n));
            data.tip.dom.firstChild.setAttribute(Ux3q, "true");
            data.tip.dom.style.visibility = "hidden";
            this.maplet.addPanel(data.tip);
            var QJg3 = _q4.apply(this, [data]);
            data.tip.setLocation({type: "xy", x: QJg3.x, y: QJg3.y});
            data.tip.dom.style.visibility = "visible"
        }
    };
    this.F612 = function () {
        if (MLayer.TIPANEL.maplet && $8F) {
            $8F = null;
            MLayer.TIPANEL.hide()
        }
    };
    var M2He = function (data) {
        return _isRectint(data.rect, {min: {x: 0, y: 0}, max: {x: this.maplet.width, y: this.maplet.height}})
    };
    var _q4 = function (data, size) {
        var tip = MLayer.TIPANEL.dom;
        if (_9tU.apply(this, [true, true]))tip = data.tip.dom;
        var QJg3 = {x: 0, y: 0};
        var ix = data.rect.min.x;
        var iy = data.rect.min.y;
        var ax = data.rect.max.x;
        var ay = data.rect.max.y;
        var _99 = tip.offsetWidth;
        var th = tip.offsetHeight;
        if (oRI09.apply(this, [true, true])) {
            if (ax + 2 + _99 <= this.maplet.width - 5) {
                QJg3.x = ax + 2;
                QJg3.y = iy + (ay - iy) / 2 - th / 2
            } else {
                QJg3.x = ix - _99 - 2;
                QJg3.y = iy + (ay - iy) / 2 - th / 2
            }
        } else {
            QJg3.x = ax + 2;
            QJg3.y = iy + (ay - iy) / 2 - th / 2
        }
        return QJg3
    };
    this.click = function (id, x, y) {
        var lpK86 = {center2map: true, firevent: false, data: null};
        if (this.isVisible() && (this.options.click.fun || this.options.events & MLayer.CLICK == MLayer.CLICK)) {
            lpK86.data = this.getDataByXY(id, x, y, true);
            if (lpK86.data) {
                if (this.options.click.fun) {
                    var phk = this.options.click.fun.apply(this.options.click.thisObj, [lpK86.data]);
                    lpK86.center2map = phk.center2map;
                    lpK86.firevent = phk.firevent
                } else {
                    lpK86.firevent = true
                }
            }
        }
        return lpK86
    };
    this.clearImgs = function () {
        for (var i in this.g8n82) {
            l97Ld.apply(this, [i])
        }
    };
    this.clearData = function () {
        for (var i in this.data) {
            EYdT2.apply(this, [i])
        }
    };
    this.clear = function () {
        this.clearImgs();
        this.clearData();
        if (!this.dom)return;
        this.dom.innerHTML = ""
    };
    this.getImgCount = function (vN03) {
        var c = 0;
        if (this.isVisible() && this.maplet && this.inZoomRange(this.maplet.AG))for (var i in this.g8n82)c++;
        return c
    };
    this.resize = function (w, h) {
        if (!this.dom)return;
        if (Y32k(this.dom.style.width, 0) != w)this.dom.style.width = (w - 1) + "px";
        if (Y32k(this.dom.style.height, 0) != h)this.dom.style.height = (h - 2) + "px"
    };
    this.show = function () {
        var h85 = this.isVisible();
        this.setVisible(true);
        if (!h85)JWq_.apply(this)
    };
    this.hide = function () {
        var h85 = this.isVisible();
        this.setVisible(false);
        if (h85)this.clear()
    };
    this.setVisible = function (visible) {
        if (!this.dom)return;
        if (this.dom.style.display != (visible ? "" : "E1$"))this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.parentNode == this.maplet.u_5.div && this.dom.style.display != "none"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        this.clear();
        if (this.dom) {
            if (!finalize) {
                if (this.dom.parentNode)this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        if (this.options.imgUrlPreprocessor.thisObj)this.options.imgUrlPreprocessor.thisObj = null;
        if (this.options.dataUrlPreprocessor.thisObj)this.options.dataUrlPreprocessor.thisObj = null;
        if (this.options.mouseover.thisObj)this.options.mouseover.thisObj = null;
        if (this.options.mouseout.thisObj)this.options.mouseout.thisObj = null;
        if (this.options.click.thisObj)this.options.click.thisObj = null;
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLayer'
    };
    this.id = new Date().getTime() + "_layer";
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.g8n82 = {};
    this.data = {};
    this.P30_ = 0;
    this.j37 = 0;
    var N73 = "_using";
    var $8F = null;
    var k6w8 = null;
    var B3_ = {};
    var O4WPR = null;
    var PB71O = false;
    this.options = options || {};
    with (this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined);
        this.setDataType(typeof dataType != "undefined" ? dataType : undefined);
        this.setDataPattern(typeof dataPattern != "undefined" ? dataPattern : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined), false);
        this.setImgWidth(typeof imgWidth != "undefined" ? imgWidth : undefined);
        this.setImgHeight(typeof imgHeight != "undefined" ? imgHeight : undefined);
        this.setNeedData(typeof needData != "undefined" ? needData : undefined, false);
        this.setNeedImg(typeof needImg != "undefined" ? needImg : undefined, false);
        this.setCreator(typeof creator != "undefined" ? creator : undefined);
        this.setImgUrlPreprocessor(typeof imgUrlPreprocessor != "undefined" ? imgUrlPreprocessor : undefined);
        this.setDataUrlPreprocessor(typeof dataUrlPreprocessor != "undefined" ? dataUrlPreprocessor : undefined);
        this.setFireEvent(typeof events != "undefined" ? events : undefined);
        this.setTip(typeof tip != "undefined" ? tip : undefined, false);
        this.rg96(typeof mouseover != "undefined" ? mouseover : undefined);
        this.Pem20(typeof mouseout != "undefined" ? mouseout : undefined);
        this.baB4(typeof click != "undefined" ? click : undefined);
        this.setDataLoadMode(typeof dataLoadMode != "undefined" ? dataLoadMode : undefined);
        this.setServerPathType(typeof serverPathType != "undefined" ? serverPathType : undefined);
        this.setCombinerParas(typeof combinerParas != "undefined" ? combinerParas : undefined);
        this.enableNPS(typeof nps != "undefined" ? nps : undefined);
        this.enableSafeLevel(typeof safeLevel != "undefined" ? safeLevel : undefined)
    }
};
MLayer.USER = 1;
MLayer.SYSTEM = 2;
MLayer.DPLACEHOLDER = "[xyname]";
MLayer.NONE = 0;
MLayer.CLICK = 1;
MLayer.MOUSEMOVE = 2;
MLayer.ALL = 255;
MLayer.TM_NEVER = 1;
MLayer.TM_ALWAYS = 2;
MLayer.TM_MOUSEOVER = 4;
MLayer.TIPID = "_map_layertip";
MLayer.TIPANEL = new MPanel({pin: true, location: {type: "xy"}, content: "<div id='" + MLayer.TIPID + "' style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:13px;line-height:17px;color:gray;' onmouseover='MLayer.setTipVisible(false);'></div>", creator: MPanel.SYSTEM});
MLayer.TPLACEHOLDER = "[TPLACEHOLDER]";
MLayer.TIPANEL2 = new MPanel({pin: true, location: {type: "xy", x: 0, y: 0}, content: "<div style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;' unselectable='on'>" + MLayer.TPLACEHOLDER + "</div>", creator: MPanel.SYSTEM});
MLayer.setTipVisible = function (visible) {
    if (MLayer.TIPANEL.maplet)MLayer.TIPANEL.setVisible(visible)
};
MLayer.M8_ = "_loadingdata";
MLayer.DL_INITIATIVE = 1;
MLayer.DL_PASSIVE = 2;
MLayer.PT_NORMAL = 1;
MLayer.PT_COMBINER = 2;
var MTraffic = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.layer = new MLayer({serverPath: this.options.serverPath, zindex: -1, imgType: this.options.imgType, needData: false, minLevel: this.options.minLevel, maxLevel: this.options.maxLevel, creator: MLayer.SYSTEM, imgUrlPreprocessor: {fun: _0N, thisObj: this}, ct_$: ""});
        this.maplet.addLayer(this.layer);
        this.refresh();
        M5114 = nB(this, FQ3, this.options.interval)
    };
    var _0N = function (data) {
        if (jo591)return this.options.serverPath + jo591 + (this.maplet.AG - 1) + "/o" + data.grid + "." + this.options.imgType; else return ""
    };
    this.refresh = function () {
        if (!this.layer || !this.layer.inZoomRange(this.maplet.AG))return;
        this.layer.clear();
        Hw19l = true;
        FQ3.apply(this)
    };
    var FQ3 = function () {
        i970.apply(this)
    };
    var i970 = function () {
        var url = h3007.apply(this);
        url += (url.indexOf("?") != -1 ? "&" : "?") + "_" + new Date().getTime() + "=";
        new iBl8Y(url, $GI, false, true, this).PYl()
    };
    var h3007 = function () {
        return this.options.magicPath.replace("[city]", this.options.city)
    };
    var $GI = function () {
        if (!this.layer.maplet)return;
        var d = eval(MTraffic.MAGIC_RESULT_NAME);
        if (typeof d != "string" || !d)return;
        if (!jo591 || d != jo591 || Hw19l) {
            jo591 = eval(MTraffic.MAGIC_RESULT_NAME);
            Hw19l = false;
            this.layer.clear();
            this.layer.update();
            MEvent.trigger(this.layer.maplet, "traffic_update", {magicPath: jo591})
        }
    };
    this.getTimestamp = function () {
        var lpK86 = null;
        if (jo591) {
            var Rrb = jo591.split("/");
            if (Rrb.length > 8) {
                lpK86 = new Date(Rrb[4], Y32k(Rrb[5][0] == "0" ? Rrb[5][1] : Rrb[5]) - 1, Rrb[6], Rrb[7], Rrb[8].replace(Rrb[4] + Rrb[5] + Rrb[6] + Rrb[7], ""), 0)
            }
        }
        return lpK86
    };
    this.getTimestampDir = function () {
        var lpK86 = "";
        if (jo591) {
            var Rrb = jo591.split("/");
            if (Rrb.length > 9) {
                lpK86 = Rrb.slice(4, 9).join("/")
            }
        }
        return lpK86
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path)path = "http://lukuang.mapbar.com/";
        this.options.serverPath = path
    };
    this.setImgType = function (type) {
        if (typeof type != "string" || !type)type = "png";
        this.options.imgType = type.toLowerCase()
    };
    this.setMagicPath = function (path) {
        if (typeof path != "string" || !path)path = "http://lukuang.mapbar.com/[city]/traffic/images/traffic.js";
        this.options.magicPath = path
    };
    this.setLevelRange = function (min, max) {
        if (typeof min != "number" || min < TRAFFIC_MIN_LEVEL || min > TRAFFIC_MAX_LEVEL)min = TRAFFIC_MIN_LEVEL;
        if (typeof max != "number" || max < TRAFFIC_MIN_LEVEL || max > TRAFFIC_MAX_LEVEL)max = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max
    };
    this.setInterval = function (i) {
        if (typeof i != "number" || i < TRAFFIC_REFRESH_INTERVAL)i = TRAFFIC_REFRESH_INTERVAL;
        this.options.interval = i * 1000;
        if (M5114) {
            window.clearInterval(M5114);
            M5114 = nB(this, FQ3, this.options.interval)
        }
    };
    this.setCity = function (city, refresh) {
        if (typeof city != "string" || !city)city = "beijing";
        this.options.city = city;
        if (typeof refresh != "boolean")refresh = true;
        if (refresh) {
            Hw19l = true;
            FQ3.apply(this)
        }
    };
    this.show = function () {
        if (this.layer)this.layer.show()
    };
    this.hide = function () {
        if (this.layer)this.layer.hide()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (M5114)window.clearTimeout(M5114);
        M5114 = null;
        if (this.maplet)this.maplet.removeLayer(this.layer, finalize);
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MTraffic'
    };
    this.id = new Date().getTime() + "_traffic";
    this.maplet = null;
    this.layer = null;
    var M5114 = null;
    var jo591 = null;
    var Hw19l = true;
    this.options = options || {};
    with (this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined));
        this.setInterval(typeof interval != "undefined" ? interval : undefined);
        this.setCity(typeof city != "undefined" ? city : undefined, false);
        this.setMagicPath(typeof magicPath != "undefined" ? magicPath : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined)
    }
};
MTraffic.MAGIC_RESULT_NAME = "__mapbar_magic_id";
var MPOILayer = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.layer = new MLayer({serverPath: this.options.serverPath, zindex: -2, needImg: false, needData: true, minLevel: this.options.minLevel, maxLevel: this.options.maxLevel, creator: MLayer.SYSTEM, dataLoadMode: this.options.loadMode, mouseover: {fun: mouseover, thisObj: this}, mouseout: {fun: mouseout, thisObj: this}, click: {fun: click, thisObj: this}, dataPattern: 'basepoi' + MLayer.DPLACEHOLDER});
        this.maplet.addLayer(this.layer)
    };
    var mouseover = function (data) {
        var lpK86 = J3cn.apply(this, [data]);
        if (lpK86 && MEvent.contains(this.maplet, "poi_mouseover") > 0) {
            MEvent.trigger(this.maplet, "poi_mouseover", q48_.apply(this, [data]))
        }
        return lpK86
    };
    var mouseout = function (data) {
        if (J3cn.apply(this, [data]) && MEvent.contains(this.maplet, "poi_mouseout") > 0) {
            MEvent.trigger(this.maplet, "poi_mouseout", q48_.apply(this, [data]))
        }
    };
    var click = function (data) {
        var lpK86 = {center2map: !J3cn.apply(this, [data]), firevent: false};
        if (!lpK86.center2map && MEvent.contains(this.maplet, "poi_click") > 0) {
            MEvent.trigger(this.maplet, "poi_click", q48_.apply(this, [data]))
        }
        return lpK86
    };
    var J3cn = function (data) {
        if (typeof data == "object" && data && typeof data.d == "string" && data.d)var pt = u5738.apply(this, [data.d.substring(0, 1)]);
        return((this.options.dataTypes & pt) == MPOILayer.DT_POI) || ((this.options.dataTypes & pt) == MPOILayer.DT_BUSTOP) || ((this.options.dataTypes & pt) == MPOILayer.DT_SUBWAY)
    };
    var q48_ = function (data) {
        if (typeof data == "object" && data && typeof data.d == "string" && data.d)var A03b = data.d;
        var pt = u5738.apply(this, [A03b.substring(0, 1)]);
        if (A03b.length >= 2)A03b = A03b.substring(2);
        return{type: pt, pid: data.p, area: data.l, data: A03b, name: data.n, rect: data.rect}
    };
    var u5738 = function (s) {
        var i = Y32k(s);
        if (i == MPOILayer.DT_POI)return MPOILayer.DT_POI; else if (i == MPOILayer.DT_BUSTOP)return MPOILayer.DT_BUSTOP; else if (i == MPOILayer.DT_SUBWAY)return MPOILayer.DT_SUBWAY; else return MPOILayer.DT_NONE
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.maplet && this.layer) {
            this.maplet.removeLayer(this.layer, finalize);
            this.layer = null;
            this.maplet = null
        }
    };
    this.setServerPath = function (path, v98v4) {
        if (typeof path != "string" || !path)path = MPOILayer.INITIATIVE_URL;
        if (path == MPOILayer.INITIATIVE_URL || path == MPOILayer.PASSIVE_URL) {
            if (this.options.loadMode & MLayer.DL_INITIATIVE == MLayer.DL_INITIATIVE)path = MPOILayer.INITIATIVE_URL; else path = MPOILayer.PASSIVE_URL
        }
        this.options.serverPath = path;
        if (this.layer)this.layer.setServerPath(path, v98v4)
    };
    this.setLevelRange = function (min, max, v98v4) {
        if (typeof min != "number" || min < TRAFFIC_MIN_LEVEL || min > TRAFFIC_MAX_LEVEL)min = TRAFFIC_MIN_LEVEL;
        if (typeof max != "number" || max < TRAFFIC_MIN_LEVEL || max > TRAFFIC_MAX_LEVEL)max = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max;
        if (this.layer)this.layer.setLevelRange(min, max, v98v4)
    };
    this.setDataTypes = function (YWD0, v98v4) {
        if (typeof YWD0 != "number" || (YWD0 & MPOILayer.DT_POI != MPOILayer.DT_POI && YWD0 & MPOILayer.DT_SUBWAY != MPOILayer.DT_SUBWAY && YWD0 & MPOILayer.DT_BUSTOP != MPOILayer.DT_BUSTOP))YWD0 = MPOILayer.DT_ALL;
        this.options.dataTypes = YWD0
    };
    this.setLoadMode = function (mode, v98v4) {
        if (typeof mode != "number" || (mode != MLayer.DL_INITIATIVE && mode != MLayer.DL_PASSIVE))mode = MLayer.DL_INITIATIVE;
        this.options.loadMode = mode;
        this.setServerPath(this.options.serverPath, v98v4)
    };
    this.maplet = null;
    this.layer = null;
    this.options = options || {};
    with (this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined, false);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined), false);
        this.setDataTypes((typeof dataTypes != "undefined" ? dataTypes : undefined), false);
        this.setLoadMode(typeof loadMode != "undefined" ? loadMode : undefined, false)
    }
};
MPOILayer.DT_NONE = 0;
MPOILayer.DT_POI = 1;
MPOILayer.DT_BUSTOP = 2;
MPOILayer.DT_SUBWAY = 4;
MPOILayer.DT_ALL = 255;
MPOILayer.INITIATIVE_URL = "http://img.mapbar.com/maplite/mapbank/maplayer/basepoi/";
MPOILayer.PASSIVE_URL = "http://192.168.0.241:8084/servlet/mg";
function qA6$3(maplet) {
    this.maplet = maplet;
    document["mapbar-overview"] = this;
    this.yl = "mapbar";
    var bg7bh = 0;
    var wSG72 = 0;
    var n761 = 0;
    var BAXsi = 0;
    this.c3 = oo;
    this.fg = true;
    this.panel = document.createElement("div");
    this.panel.unselectable = "on";
    this.panel.style.position = "absolute";
    this.panel.style.zIndex = 999;
    this.panel.style.backgroundColor = "white";
    this.panel.style.border = "1px solid #A6A5A1";
    this.panel.setAttribute(oiY1, true);
    this.panel.style.overflow = "hidden";
    this.panel.style.display = "none";
    this.fC = document.createElement("div");
    this.fC.id = "mapbar-overview-canvas";
    this.fC.unselectable = "on";
    this.fC.style.position = "absolute";
    this.fC.style.visibility = "visible";
    this.fC.style.zIndex = 0;
    this.fC.style.top = (uU - 2) + "px";
    this.fC.style.left = (px) ? "5px" : "7px";
    this.fC.style.backgroundColor = MapBackgroundColor;
    this.fC.style.border = "2px solid #0E347F";
    this.fC.style.overflow = "hidden";
    this.fC.selected = false;
    this.panel.appendChild(this.fC);
    this.z3 = document.createElement("div");
    this.z3.id = "mapbar-overview-viewport";
    this.z3.unselectable = "on";
    this.fC.appendChild(this.z3);
    this.z1 = document.createElement("div");
    this.z1.id = "mapbar-overview-viewframe";
    this.z1.unselectable = "on";
    this.fC.appendChild(this.z1);
    this.z2 = document.createElement("div");
    this.z2.id = "mapbar-overview-viewpad_ctrl";
    this.z2.unselectable = "on";
    this.z2.style.MozUserSelect = "none";
    this.fC.appendChild(this.z2);
    this.z2.style.cursor = "move";
    this.z2.selected = false;
    this.ao = new Array();
    this.cW = 0;
    this.G5e51 = [2, 4, 8, 6];
    this.shadow = document.createElement("div");
    this.shadow.unselectable = "on";
    this.shadow.style.position = "absolute";
    this.shadow.style.zIndex = 998;
    this.shadow.setAttribute(oiY1, true);
    this.shadow.style.display = "none";
    var usr84 = null;
    var IkO90 = null;
    this.X92 = new fD("OvwImgs", 0, 0, 0, 0, true, 0, '', this.fC);
    this.show = function () {
        this.fg = true
    };
    this.hide = function () {
        this.fg = false
    };
    this.nF = function () {
        if (this.fg) {
            if (this.c3)return Y32k(this.shadow.style.top); else return BAXsi
        } else {
            return 0
        }
    };
    this.tju8 = function () {
        if (this.fg) {
            if (this.c3)return Y32k(this.shadow.style.left); else return n761
        } else {
            return 0
        }
    };
    this.nz = function () {
        if (this.fg) {
            if (this.c3)return Y32k(this.shadow.offsetHeight); else return Y32k(this.img.offsetHeight)
        } else {
            return 0
        }
    };
    this.w0 = function (e) {
        tM8(e);
        if (this.cW != 0)return;
        if (e.target.id == this.z2.id || FjJ3 == this.z2.id) {
            FjJ3 = this.z2.id;
            this.z2.selected = true;
            this.downX = (px) ? event.clientX : e.clientX;
            this.downY = (px) ? event.clientY : e.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        } else if (fJ(e.target, this.fC) || FjJ3 == this.fC.id) {
            FjJ3 = this.fC.id;
            this.fC.selected = true;
            this.downX = (px) ? event.clientX : e.clientX;
            this.downY = (px) ? event.clientY : e.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        }
        if (FjJ3) {
            this.ao["doc_mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["doc_mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px)this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1); else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (e) {
        if (FjJ3 == this.z2.id && this.z2.selected) {
            this.moveX = (px) ? event.clientX : e.clientX;
            this.moveY = (px) ? event.clientY : e.clientY;
            var lI = (this.moveX - this.downX);
            var lK = (this.moveY - this.downY);
            this.downX = this.moveX;
            this.downY = this.moveY;
            if (this.z2.style.top) {
                this.z2.style.top = (parseInt(this.z2.style.top) + lK) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + lI) + "px"
            }
        } else if (FjJ3 == this.fC.id && this.fC.selected) {
            this.moveX = (px) ? event.clientX : e.clientX;
            this.moveY = (px) ? event.clientY : e.clientY;
            var lI = (this.moveX - this.downX);
            var lK = (this.moveY - this.downY);
            this.downX = this.moveX;
            this.downY = this.moveY;
            this.X92.style.top = (parseInt(this.X92.style.top) + lK) + "px";
            this.X92.style.left = (parseInt(this.X92.style.left) + lI) + "px";
            if (this.z3.style.top) {
                this.z3.style.top = (parseInt(this.z3.style.top) + lK) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + lI) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + lK) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + lI) + "px"
            }
        }
        if (!usr84 && this.z2.offsetWidth < this.fC.offsetWidth) {
            if (px)document.body.setCapture();
            usr84 = nB(this, dU80, 100);
            IkO90 = nB(this, zL, 100)
        }
    };
    this.l1 = function (e) {
        if (this.maplet.sS != ts.X420D && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv)tM8(e);
        if (usr84) {
            this.maplet.hideBubble();
            window.clearInterval(usr84);
            usr84 = null;
            window.clearInterval(IkO90);
            IkO90 = null;
            if (px)document.body.releaseCapture()
        }
        if (this.ao["doc_mousemove"]) {
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["doc_mousemove"]);
            this.ao["doc_mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["doc_mouseup"]);
            this.ao["doc_mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
        }
        if (this.z2.selected) {
            FjJ3 = null;
            this.z2.selected = false;
            var moveX = (px) ? event.clientX : e.clientX;
            var moveY = (px) ? event.clientY : e.clientY;
            if (typeof moveX == "undefined")moveX = this.moveX;
            if (typeof moveY == "undefined")moveY = this.moveY;
            var lI = (moveX - this.xa - Y32k(this.X92.style.left));
            var lK = (moveY - this.xb - Y32k(this.X92.style.top));
            var lf = -lK * this.xf / this.maplet.imgHeight;
            var li = lI * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + lf;
            this.gL = this.maplet.gA + li;
            this.cW = 1;
            var l = Y32k(this.z2.style.left);
            if (l < -this.z2.offsetWidth)l = -this.z2.offsetWidth; else if (l >= this.fC.offsetWidth)l = this.fC.offsetWidth;
            var yw = parseInt(this.z2.style.top);
            if (yw < -this.z2.offsetHeight)yw = -this.z2.offsetHeight; else if (yw >= this.fC.offsetHeight)yw = this.fC.offsetHeight;
            this.z2.style.left = l + "px";
            this.z2.style.top = yw + "px";
            this.vh = getTimeout(this, this.vO, 20)
        } else if (this.fC.selected) {
            FjJ3 = null;
            this.fC.selected = false;
            var moveX = (px) ? event.clientX : e.clientX;
            var moveY = (px) ? event.clientY : e.clientY;
            var lI = -(moveX - this.xa);
            var lK = -(moveY - this.xb);
            var lf = -lK * this.xf / this.maplet.imgHeight;
            var li = lI * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + lf;
            this.gL = this.maplet.gA + li;
            this.cW = 2;
            var l = Y32k(this.z3.style.left);
            if (l < -this.z3.offsetWidth)l = -this.z3.offsetWidth; else if (l >= this.fC.offsetWidth)l = this.fC.offsetWidth;
            var yw = Y32k(this.z3.style.top);
            if (yw < -this.z3.offsetHeight)yw = -this.z3.offsetHeight; else if (yw >= this.fC.offsetHeight)yw = this.fC.offsetHeight;
            this.z3.style.left = l + "px";
            this.z3.style.top = yw + "px";
            this.z1.style.left = l + "px";
            this.z1.style.top = yw + "px";
            this.vh = getTimeout(this, this.vO, 20)
        }
    };
    var Pjx1 = function (e) {
        tM8(e)
    };
    this.vO = function () {
        if (this.vh) {
            clearTimeout(this.vh);
            this.vh = null
        }
        if (!this.z3.style.top || !this.z2.style.top) {
            this.maplet.setCenter(this.gK, this.gL, true);
            this.cW = 0;
            return
        }
        var lK = parseInt(this.z2.style.top) - parseInt(this.z3.style.top);
        var lI = parseInt(this.z2.style.left) - parseInt(this.z3.style.left);
        var gN = Math.round(lI);
        var gO = Math.round(lK);
        if ((Math.abs(lI) + Math.abs(lK)) >= 10) {
            var gN = Math.round(lI * 10.0 / (Math.abs(lI) + Math.abs(lK)));
            var gO = Math.round(lK * 10.0 / (Math.abs(lI) + Math.abs(lK)))
        }
        if (this.cW == 2) {
            if ((Math.abs(lI) + Math.abs(lK)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                this.z3.style.top = (parseInt(this.z3.style.top) + gO) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + gN) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + gO) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + gN) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        } else if (this.cW == 1) {
            gN = -gN;
            gO = -gO;
            if ((Math.abs(lI) + Math.abs(lK)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                for (var i in this.pU) {
                    if (typeof this.pU[i] == "object" && (this.pU[i] != null)) {
                        this.pU[i].style.top = (parseInt(this.pU[i].style.top) + gO) + "px";
                        this.pU[i].style.left = (parseInt(this.pU[i].style.left) + gN) + "px"
                    }
                }
                this.z2.style.top = (parseInt(this.z2.style.top) + gO) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + gN) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        }
    };
    this.pU = new Array();
    this.yN = null;
    this.c4 = false;
    this.cl = false;
    this.sa = new Array();
    this.nH = function () {
        if (this.fg && this.c3)return OVER_WIN_WIDTH; else return uS
    };
    this.addListener = function (uy) {
        this.sa[uy.id] = uy
    };
    this.removeListener = function (uy) {
        this.sa[uy.id] = null
    };
    this.uq = function () {
        for (var pf in this.sa) {
            if (this.sa[pf] && this.sa[pf].onresize) {
                this.sa[pf].onresize()
            }
        }
        this.maplet.onresize()
    };
    this.g1 = function () {
        for (var pf in this.sa) {
            if (this.sa[pf]) {
                this.sa[pf] = null
            }
            this.sa = null
        }
        this.clearImgs();
        this.pU = null;
        for (var l8 in this.ao) {
            try {
                if (this.ao[l8] != null) {
                    MEvent.removeBuiltInListener(this.fC, l8, this.ao[l8]);
                    this.ao[l8] = null
                }
            } catch (e) {
            }
            this.ao = null
        }
        this.img.overview = null;
        this.img.onclick = null;
        this.img.onmousedown = null;
        this.img.onmouseup = null;
        this.img.ondblclick = null;
        this.z2.w0 = null;
        this.z2.f9 = null;
        if (this.panel.parentNode != null) {
            _removeNode(this.panel)
        }
        this.maplet = null;
        _removeNode(this.img);
        _removeNode(this.shadow);
        t892(this)
    };
    this.onresize = function () {
        this.$01T2();
        this.uq()
    };
    this.close = function () {
        if (this.cl)return;
        if (typeof this.img == "undefined") {
            this.c3 = oo = false;
            return
        } else if (this.img.style.display == "none" && this.c3) {
            this.c3 = oo = false
        }
        C6U.apply(this);
        this.cl = true;
        this.yN = getTimeout(this, V60_, 10);
        this.c4 = false;
        this.uq()
    };
    this.open = function () {
        if (typeof this.img == "undefined") {
            this.c3 = oo = true;
            return
        }
        if (this.c4)return;
        C6U.apply(this);
        this.c4 = true;
        this.yN = getTimeout(this, nU78, 10);
        this.cl = false
    };
    this.qa = function (container) {
        var An = (px) ? 0 : 2;
        this.img = document.createElement("div");
        this.img.unselectable = "on";
        this.img.style.position = "absolute";
        this.img.style.zIndex = 1000;
        this.img.overview = this;
        this.img.style.cursor = (px) ? "hand" : "pointer";
        this.img.style.overflow = "hidden";
        this.img.style.display = "none";
        this.E2Wl3 = document.createElement("img");
        this.E2Wl3.unselectable = "on";
        this.E2Wl3.style.position = "absolute";
        this.E2Wl3.src = CTLIMG_RESOURCE[0].url;
        this.E2Wl3.style.width = CTLIMG_RESOURCE[0].w + "px";
        this.E2Wl3.style.height = CTLIMG_RESOURCE[0].h + "px";
        this.E2Wl3.C05 = "no";
        if (px)this.img.style.filter = "alpha(opacity=0)"; else this.img.style.opacity = "0";
        this.img.onmousedown = function (e) {
            tM8(e || window.event)
        };
        this.img.onmouseup = function (e) {
            this.overview.l1(e);
            tM8(e || window.event)
        };
        this.img.ondblclick = function (e) {
            tM8(e || window.event)
        };
        this.img.onclick = function (e) {
            tM8(e || window.event);
            if (this.overview.c3) {
                this.overview.close()
            } else {
                this.overview.open()
            }
        };
        container.appendChild(this.img);
        this.img.appendChild(this.E2Wl3);
        container.appendChild(this.panel);
        container.appendChild(this.shadow);
        this.ao["mousedown"] = MEvent.bindDom(this.fC, "mousedown", this, this.w0);
        this.ao["mouseup"] = MEvent.bindDom(this.fC, "dblclick", this, Pjx1);
        this.onresize();
        if (!this.fg)return;
        if (oo) {
            this.open()
        } else {
            this.close()
        }
    };
    this.clearImgs = function () {
        for (var i in this.pU)l97Ld.apply(this, [i])
    };
    var l97Ld = function (id) {
        try {
            if (this.pU[id] != null) {
                _removeNode(this.pU[id]);
                this.pU[id].onmousedown = null;
                this.pU[id].onerror = null;
                this.pU[id].onload = null;
                this.pU[id] = null;
                delete this.pU[id]
            }
        } catch (e) {
        }
    };
    var Pf6 = function () {
        for (var i in this.pU) {
            if (this.pU[i] && !this.pU[i].c2)l97Ld.apply(this, [i])
        }
    };
    this.paint = function (l308) {
        l308 && this.clearImgs();
        if (!this.c3 || !this.fg)return;
        this.width = OVER_WIN_WIDTH - 10;
        this.height = OVER_WIN_HEIGHT - 10;
        this.gx = this.maplet.gx;
        this.gA = this.maplet.gA;
        this.AG = Math.max(Math.max(0, MIN_ZOOM_LEVEL - 2), uW[this.maplet.AG]);
        this.imgWidth = this.maplet.imgWidth;
        this.imgHeight = this.maplet.imgHeight;
        this.xK = this.maplet.nG0J;
        if (this.yl != this.maplet.yl) {
            this.yl = this.maplet.yl;
            this.clearImgs()
        }
        var yk = this.yl;
        this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
        this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
        this.xg = sj[this.AG];
        this.xf = qP[this.AG];
        this.sR = sI[this.AG] + "/";
        this.gD = Math.floor((this.maplet.gA) / this.xg);
        this.gE = Math.floor((this.maplet.gx) / this.xf);
        if (this.gD < 0)this.gD += 1;
        this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
        if (this.gx >= 0) {
            this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        } else {
            this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        }
        var nL = nM[this.AG];
        this.sZ = 0;
        this.s1 = 0;
        this.tf1 = this.width;
        this.tg = this.height;
        this.s2 = parseInt(this.gD);
        this.s3 = parseInt(this.gE);
        this.th = parseInt(this.gD);
        this.ti = parseInt(this.gE);
        var s8 = (360 / sj[this.AG]);
        this.gk = 1.0;
        this.wT = 0.0;
        for (var i in this.pU) {
            if (this.pU[i] != null) {
                this.pU[i].c2 = false
            }
        }
        for (ix = -this.z4 - 1; ix <= this.z4; ix++) {
            for (iy = -this.z5 - 1; iy <= this.z5; iy++) {
                try {
                    var pM = this.maplet.B1X + this.sR;
                    var qy = parseInt(this.gD + ix);
                    var qA = parseInt(this.gE + iy);
                    qy = (qy) % s8;
                    if (qy >= (s8 / 2))qy -= s8;
                    if (qy < (-s8 / 2))qy += s8;
                    var dirx = parseInt(Math.floor((qy) / nL));
                    var diry = parseInt(Math.floor((qA) / nL));
                    {
                        if (dirx < 0)dirx += 1;
                        if (diry < 0)diry += 1
                    }
                    var AOvOc = (qy) - dirx * nL;
                    var o9U0j = (qA) - diry * nL;
                    pM += dirx + "_" + diry + "/";
                    pM += AOvOc + "_" + o9U0j + "." + this.xK;
                    var p1 = (ix * this.imgWidth) + parseInt(this.mapX);
                    var p3 = (-(iy * this.imgHeight) + parseInt(this.mapY));
                    var p4 = p3;
                    if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                        p3 = p3 + w8[this.AG]
                    }
                    if (p1 < -this.imgWidth || p1 > this.width || p3 > this.height || p3 < -this.imgHeight)continue;
                    if (this.sZ < (p1 + this.imgWidth)) {
                        this.sZ = (p1 + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.s1 < (p3 + this.imgHeight)) {
                        this.s1 = (p3 + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(iy)
                    }
                    if (this.tf1 > p1) {
                        this.tf1 = p1;
                        this.th = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.tg > p3) {
                        this.tg = p3;
                        this.s3 = parseInt(this.gE) + parseInt(iy)
                    }
                    var xY = "__ov_ctrl_" + ((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase();
                    if (pM && pM.indexOf("NaN") < 0) {
                        if (this.pU[xY] == null) {
                            this.pU[xY] = new Image();
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].onmousedown = function () {
                                return false
                            };
                            this.pU[xY].C05 = "no";
                            this.pU[xY].src = pM
                        }
                        var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                        var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                        this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
                        this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
                        this.pU[xY].c2 = true
                    }
                    pM = null;
                    xY = null
                } catch (e) {
                }
            }
        }
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.c2 && img.parentNode != this.X92)this.X92.appendChild(img)
        }
        Pf6.apply(this);
        d326.apply(this);
        this.X92.style.top = this.X92.style.left = "0px"
    };
    var d326 = function () {
        var Ae = parseInt(this.maplet.width * this.maplet.xg / this.xg);
        var zZ = parseInt(this.maplet.height * this.maplet.xf / this.xf);
        if (Ae > this.width && zZ > this.height) {
            P09p.apply(this, [false])
        } else {
            this.z3.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z3.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z3.style.width = (Ae) + "px";
            this.z3.style.height = (zZ) + "px";
            this.z1.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z1.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z1.style.width = (Ae) + "px";
            this.z1.style.height = (zZ) + "px";
            this.z2.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z2.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z2.style.width = (Ae) + "px";
            this.z2.style.height = (zZ) + "px";
            P09p.apply(this, [true])
        }
    };
    var P09p = function (visible) {
        this.z3.style.visibility = visible ? "visible" : "hidden";
        this.z1.style.visibility = visible ? "visible" : "hidden";
        this.z2.style.visibility = visible ? "visible" : "hidden"
    };
    this.getRect = function () {
        var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}};
        if (typeof this.img != "undefined") {
            var $977$ = (this.panel.style.display != "none");
            var c81Se = (this.img.style.display != "none");
            if ($977$ || c81Se) {
                var d = this.c3 ? this.shadow : this.img;
                r = {min: {x: d.offsetLeft, y: d.offsetTop}, max: {x: 0, y: 0}};
                r.max.x = r.min.x + d.offsetWidth;
                r.max.y = r.min.y + d.offsetHeight
            }
        }
        return r
    };
    var V60_ = function () {
        var $977$ = (this.panel.style.display != "none");
        if (this.fg)this.img.style.display = "";
        this.uq();
        C6U.apply(this);
        P09p.apply(this, [false]);
        this.shadow.style.display = "none";
        if (this.fg || $977$) {
            with (this.panel.style) {
                if (px) {
                    filter = "alpha(opacity=100)"
                } else {
                    opacity = "1"
                }
            }
        }
        if (this.fg) {
            with (this.E2Wl3.style) {
                left = "-26px";
                top = "-124px"
            }
        }
        with (this.img.style) {
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        var yw = 0, d = 10;
        var p = {b: 0, c: 1};
        var KRq9 = {b: 0, c: 1};

        function p8v() {
            if (yw < d) {
                yw++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + (100 - EaYL(yw, p.b, p.c, d) * 100) + ")";
                    if (this.fg)this.img.style.filter = "alpha(opacity=" + EaYL(yw, KRq9.b, KRq9.c, d) * 100 + ")"; else this.img.style.filter = "alpha(opacity=" + (100 - EaYL(yw, KRq9.b, KRq9.c, d) * 100) + ")"
                } else {
                    this.panel.style.opacity = 1 - EaYL(yw, p.b, p.c, d);
                    if (this.fg)this.img.style.opacity = EaYL(yw, KRq9.b, KRq9.c, d); else this.img.style.opacity = 1 - EaYL(yw, KRq9.b, KRq9.c, d)
                }
                this.yN = getTimeout(this, p8v, 100)
            } else {
                this.panel.style.display = "none";
                this.img.style.display = this.fg ? "" : "none";
                this.cl = false;
                this.c3 = false;
                this.uq()
            }
        };
        p8v.apply(this)
    };
    var nU78 = function () {
        if (this.panel.style.display != "none")return;
        C6U.apply(this);
        P09p.apply(this, [false]);
        with (this.panel.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with (this.img.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with (this.E2Wl3.style) {
            top = "-125px";
            left = "-42px"
        }
        var yw = 0, d = 10;
        var p = {b: 0, c: 1};
        var KRq9 = {b: 0, c: 1};

        function p8v() {
            if (yw < d) {
                yw++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + EaYL(yw, p.b, p.c, d) * 100 + ")";
                    this.img.style.filter = "alpha(opacity=" + EaYL(yw, KRq9.b, KRq9.c, d) * 100 + ")"
                } else {
                    this.panel.style.opacity = EaYL(yw, p.b, p.c, d);
                    this.img.style.opacity = EaYL(yw, KRq9.b, KRq9.c, d)
                }
                this.yN = getTimeout(this, p8v, 100)
            } else {
                if (px) {
                    this.panel.style.filter = null
                } else {
                    this.shadow.style.opacity = 1
                }
                this.shadow.style.display = this.fg ? "" : "none";
                this.c4 = false;
                this.c3 = true;
                this.uq();
                this.paint()
            }
        };
        p8v.apply(this)
    };
    var C6U = function () {
        if (this.yN) {
            window.clearTimeout(this.yN);
            this.yN = null
        }
    };
    var EaYL = function (yw, b, c, d) {
        if (yw == 0)return b;
        if (yw == d)return b + c;
        if ((yw /= d / 2) < 1)return c / 2 * Math.pow(2, 10 * (yw - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --yw) + 2) + b
    };
    this.g18V$ = function (location) {
        location = location || {};
        if (typeof location.type != "number" && !(location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM || location.type == Maplet.RIGHT_TOP || location.type == Maplet.LEFT_BOTTOM))location.type = Maplet.RIGHT_BOTTOM;
        if (typeof location.marginx != "number")location.marginx = 6;
        if (typeof location.marginy != "number")location.marginy = 6;
        return location
    };
    this.setLocation = function (location) {
        this.location = this.g18V$(location);
        ;
        this.$01T2()
    };
    this.resizeTo = function (w, h) {
        if (typeof w != "number") {
            w = 150
        } else {
            if (w < 100)w = 100; else if (w > 210)w = 210
        }
        if (typeof h != "number") {
            h = 140
        } else {
            if (h < 100)h = 100; else if (h > 210)h = 210
        }
        OVER_WIN_WIDTH = w;
        OVER_WIN_HEIGHT = h;
        this.onresize();
        this.paint()
    };
    var ln$M = function () {
        with (this.location) {
            if (type == Maplet.LEFT_TOP) {
                bg7bh = marginx;
                wSG72 = marginy;
                n761 = bg7bh + qA6$3.QfD9 + 4;
                BAXsi = wSG72 + qA6$3.j2uD_ + 4
            } else if (type == Maplet.LEFT_BOTTOM) {
                bg7bh = marginx;
                wSG72 = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                n761 = bg7bh + qA6$3.QfD9 + 4;
                BAXsi = wSG72 + OVER_WIN_HEIGHT - uS - qA6$3.j2uD_ - 1
            } else if (type == Maplet.RIGHT_TOP) {
                bg7bh = this.maplet.width - OVER_WIN_WIDTH - marginx;
                wSG72 = marginy;
                n761 = bg7bh + OVER_WIN_WIDTH - uS - qA6$3.QfD9 - 2;
                BAXsi = wSG72 + qA6$3.j2uD_ + 4
            } else if (type == Maplet.RIGHT_BOTTOM) {
                bg7bh = this.maplet.width - OVER_WIN_WIDTH - marginx;
                wSG72 = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                n761 = bg7bh + OVER_WIN_WIDTH - uS - qA6$3.QfD9 - 2;
                BAXsi = wSG72 + OVER_WIN_HEIGHT - uS - qA6$3.j2uD_ - 1
            }
        }
    };
    this.$01T2 = function () {
        ln$M.apply(this);
        with (this.panel.style) {
            width = OVER_WIN_WIDTH + "px";
            height = OVER_WIN_HEIGHT + "px";
            left = bg7bh + "px";
            top = wSG72 + "px"
        }
        with (this.shadow.style) {
            width = OVER_WIN_WIDTH + qA6$3.lp16J + "px";
            height = OVER_WIN_HEIGHT + qA6$3.lp16J + "px";
            left = bg7bh - qA6$3.lp16J / 2 + "px";
            top = wSG72 - qA6$3.lp16J / 2 + "px"
        }
        with (this.fC.style) {
            width = OVER_WIN_WIDTH - qA6$3.QfD9 * 2 - Y32k(borderWidth) * 2 + "px";
            height = OVER_WIN_HEIGHT - qA6$3.j2uD_ * 2 - Y32k(borderWidth) * 2 + "px";
            left = qA6$3.QfD9 + "px";
            top = qA6$3.j2uD_ + "px"
        }
        with (this.X92.style) {
            width = this.fC.style.width;
            height = this.fC.style.height;
            top = left = "0px"
        }
        with (this.img.style) {
            width = uS + "px";
            height = uS + "px";
            left = n761 + "px";
            top = BAXsi + "px"
        }
        with (this.E2Wl3.style) {
            if (this.c3) {
                top = "-125px";
                left = "-42px"
            } else {
                left = "-26px";
                top = "-124px"
            }
        }
        this.shadow.innerHTML = "";
        if (m9o43) {
            for (var i = 0; i < this.G5e51.length; i++) {
                var iegx = document.createElement("div");
                iegx.unselectable = "on";
                iegx.style.position = "absolute";
                iegx.style.zIndex = i;
                iegx.style.backgroundColor = "black";
                iegx.setAttribute(oiY1, true);
                iegx.style.left = i * 2 + "px";
                iegx.style.top = i * 2 + "px";
                iegx.style.width = (OVER_WIN_WIDTH + (this.G5e51.length - i) * 4 + 2) + "px";
                iegx.style.height = (OVER_WIN_HEIGHT + (this.G5e51.length - i) * 4 + 2) + "px";
                if (px)iegx.style.filter = "alpha(opacity=" + this.G5e51[i] + ")"; else iegx.style.opacity = this.G5e51[i] / 100;
                this.shadow.appendChild(iegx)
            }
        } else {
            var x = qA6$3.lp16J / 2 - qA6$3.kB6l;
            var y = x;
            var w = qA6$3._a5;
            var h = qA6$3._a5;
            var s = ["<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-103px;\"></div>"];
            x += qA6$3._a5;
            w = OVER_WIN_WIDTH - qA6$3._a5 + 1;
            h = qA6$3.kB6l;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-226px;\"></div>");
            x += w;
            w = qA6$3._a5;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-103px;\"></div>");
            x = OVER_WIN_WIDTH + qA6$3._a5 + qA6$3.kB6l;
            y += qA6$3._a5;
            h = OVER_WIN_HEIGHT - qA6$3._a5 + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-81px;top:0px;\"></div>");
            x = x - qA6$3.kB6l - 1;
            y += h;
            w = qA6$3._a5;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-113px;\"></div>");
            x = qA6$3.lp16J / 2 - qA6$3.kB6l + qA6$3._a5;
            y += qA6$3.kB6l + 1;
            w = OVER_WIN_WIDTH - qA6$3._a5 + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-229px;\"></div>");
            x = qA6$3.lp16J / 2 - qA6$3.kB6l;
            y = y - qA6$3.kB6l - 1;
            w = qA6$3._a5;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-113px;\"></div>");
            y = qA6$3.lp16J / 2 - qA6$3.kB6l + qA6$3._a5;
            h = OVER_WIN_HEIGHT - qA6$3._a5 + 1;
            w = qA6$3.kB6l;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-78px;top:0px;\"></div>");
            this.shadow.innerHTML = s.join("")
        }
    };
    var dU80 = function () {
        var rt = l3i.apply(this);
        var vj = 0, vk = 0;
        if (rt.min.x < 0)vj = 5;
        if (rt.min.y < 0)vk = 5;
        if (rt.max.x > Y32k(this.fC.style.width))vj = -5;
        if (rt.max.y > Y32k(this.fC.style.height))vk = -5;
        if ((vj != 0 || vk != 0)) {
            this.panTo(vj, vk)
        }
    };
    var l3i = function () {
        var r = {min: {x: this.z2.offsetLeft, y: this.z2.offsetTop}, max: {x: 0, y: 0}};
        r.max.x = r.min.x + this.z2.offsetWidth;
        r.max.y = r.min.y + this.z2.offsetHeight;
        return r
    };
    this.panTo = function (x, y) {
        this.X92.style.top = Y32k(this.X92.style.top) + y + "px";
        this.X92.style.left = Y32k(this.X92.style.left) + x + "px"
    };
    var zL = function () {
        if (this.fs || this.c0)return;
        var sP = parseInt(this.X92.style.left);
        var sQ = parseInt(this.X92.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0 || (sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            this.fs = true;
            zA.apply(this)
        }
    };
    var zA = function () {
        if (this.fs == false)return;
        var sP = parseInt(this.X92.style.left);
        var sQ = parseInt(this.X92.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0) {
            if (this.c0 == true)return;
            this.c0 = true;
            var qy = 0;
            var p1 = 0;
            if ((sP + this.tf1) >= 0) {
                this.th--;
                this.tf1 -= parseInt(this.imgWidth);
                qy = this.th;
                p1 = this.tf1
            }
            if ((sP + this.sZ - this.width) <= 0) {
                this.s2++;
                p1 = this.sZ;
                this.sZ += parseInt(this.imgWidth);
                qy = this.s2
            }
            var ix = qy;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            qy = (qy) % s8;
            if (qy >= (s8 / 2))qy -= s8;
            if (qy < (-s8 / 2))qy += s8;
            var yk = this.yl;
            for (var iy = this.ti; iy <= this.s3; iy++) {
                var qA = iy;
                var p3 = (-(iy - this.ti + 1) * this.imgHeight) + this.s1;
                aA.apply(this, [p1, p3, qy, qA, ix, iy, yk])
            }
            this.c0 = false
        }
        if ((sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            if (this.c0 == true)return;
            this.c0 = true;
            var qA = 0;
            var p3 = 0;
            if ((sQ + this.tg) >= 0) {
                this.s3++;
                this.tg -= parseInt(this.imgHeight);
                qA = this.s3;
                p3 = this.tg
            }
            if ((sQ + this.s1 - this.height) <= 0) {
                this.ti--;
                p3 = this.s1;
                this.s1 += parseInt(this.imgHeight);
                qA = this.ti
            }
            var iy = qA;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            var yk = this.yl;
            for (var ix = this.th; ix <= this.s2; ix++) {
                var qy = ix;
                qy = (qy) % s8;
                if (qy >= (s8 / 2))qy -= s8;
                if (qy < (-s8 / 2))qy += s8;
                var p1 = ((ix - this.th) * this.imgWidth) + this.tf1;
                aA.apply(this, [p1, p3, qy, qA, ix, iy, yk])
            }
            this.c0 = false
        }
        this.fs = false
    };
    var aA = function (p1, p3, qy, qA, ix, iy, yk) {
        var nL = nM[this.AG];
        var dirx = parseInt(Math.floor((qy) / nL));
        var diry = parseInt(Math.floor((qA) / nL));
        if (dirx < 0)dirx += 1;
        if (diry < 0)diry += 1;
        var AOvOc = (qy) - dirx * nL;
        var o9U0j = (qA) - diry * nL;
        var pM = this.maplet.B1X + this.sR;
        var xY = "__ov_ctrl_" + ((this.AG).toString(16) + ix.toString(16) + 'l' + iy.toString(16)).toLowerCase();
        pM += dirx + "_" + diry + "/";
        pM += AOvOc + "_" + o9U0j + "." + this.xK;
        if (pM && pM.indexOf("NaN") < 0) {
            if (this.pU[xY] == null) {
                this.pU[xY] = new Image();
                this.pU[xY].id = xY;
                this.pU[xY].name = xY;
                this.pU[xY].ntry = "0";
                this.pU[xY].unselectable = "on";
                this.pU[xY].style.position = "absolute";
                this.pU[xY].onmousedown = function () {
                    return false
                };
                this.pU[xY].C05 = "no";
                this.pU[xY].src = pM
            }
            var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
            this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
            this.pU[xY].c2 = true;
            this.X92.div.appendChild(this.pU[xY]);
            xY = null
        }
        pM = null
    };
    this.location = this.g18V$(OVER_LOCATION)
};
qA6$3.QfD9 = 2;
qA6$3.j2uD_ = 2;
qA6$3.kB6l = 3;
qA6$3.lp16J = 16;
qA6$3._a5 = 7;
function MStandardControl(x6, left, top, fi) {
    this.x6 = (typeof x6 == "undefined") ? "mapbar" : x6;
    this.left = (typeof left == "undefined") ? 0 : parseInt(left);
    this.top = (typeof top == "undefined") ? 0 : parseInt(top);
    this.fi = (typeof fi == "undefined") ? 0 : parseInt(fi);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.nR = null;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.maplet.gc[this.id] == null) {
            if (!this.fi && this.maplet.height < 300) {
                if (bsc)this.fi = 1
            }
            this.maplet.gc[this.id] = this;
            this.nR = new gb(typeof this.x6 != "object" ? null : this.x6);
            this.nR.initialize(this.maplet);
            if (this.maplet.controlCanvas == null)this.maplet.controlCanvas = this.nR
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.nR) {
            if (this.nR == this.maplet.controlCanvas)this.maplet.controlCanvas = null;
            this.nR.g1();
            this.nR = null
        }
        t892(this)
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MStandardControl'
    }
};
function MLookupControl(ya, left, top) {
    this.ya = (typeof ya == "undefined") ? tX("%u62CD%uCB0F%uD02B%uF3C7") : ya;
    this.left = (typeof left == "undefined") ? 0 : parseInt(left);
    this.top = (typeof top == "undefined") ? 0 : parseInt(top);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.onresize = function (maplet) {
        if (this.maplet.overview.nF() <= 37) {
            this.tY.style.left = (this.maplet.width - 132 + this.left - this.maplet.overview.nH()) + "px"
        } else {
            this.tY.style.left = (this.maplet.width - 132 + this.left) + "px"
        }
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.maplet.gc[this.id] == null) {
            this.maplet.gc[this.id] = this;
            this.tY = document.createElement("div");
            this.tY.style.position = "absolute";
            this.onresize(this.maplet);
            this.tY.style.top = (10 + this.top) + "px";
            this.tY.style.zIndex = 10;
            this.tY.style.visibility = "visible";
            this.tU = document.createElement("img");
            this.tU.unselectable = "on";
            this.tU.src = strImgsvrUrl + "images/lookup.png";
            this.tU.alt = this.ya;
            this.tU.style.cursor = "hand";
            this.tU.style.cursor = "pointer";
            this.tU.panel = this;
            this.tU.maplet = this.maplet;
            this.tU.onclick = function () {
                this.maplet.setMode("lookup");
                MEvent.trigger(this.panel, "onclick")
            };
            this.tY.appendChild(this.tU);
            this.maplet.panel.appendChild(this.tY)
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.tY != null && this.tY.parentNode != null) {
            this.tY.parentNode.removeChild(this.tY);
            this.tY = null;
            this.tU.maplet = null;
            this.tU.onclick = null;
            this.tU = null
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLookupControl'
    }
};
var MContextMenuItem = function (title, fy) {
    this.ao = [];
    this.title = title;
    this.callback = (typeof fy == "undefined") ? null : fy;
    this.t6 = document.createElement("tr");
    this.tW = document.createElement("td");
    this.tW.className = "contextmenuitem";
    this.tW.innerHTML = "&nbsp;" + title;
    this.t6.appendChild(this.tW);
    this.uK = function (e) {
        this.panel.hide();
        if (typeof this.callback == "function" && this.callback) {
            this.callback.apply(null, [this, this.panel, this.panel.overlay])
        } else if (typeof this.callback == "string" && this.callback) {
            eval(this.callback)
        } else {
            MEvent.trigger(this, "select", this, this.panel, this.panel.overlay)
        }
    };
    this.uG = function (e) {
        this.t6.style.backgroundColor = "#d2e1ff"
    };
    this.uJ = function (e) {
        this.t6.style.backgroundColor = "#FFFFFF"
    };
    this.paint = function (panel) {
        this.panel = panel;
        this.panel.t8.appendChild(this.t6)
    };
    this.toString = function () {
        return "com.mapbar.maplet.MContextMenuItem"
    };
    this.ao["click"] = MEvent.bindDom(this.t6, "click", this, this.uK);
    this.ao["mouseover"] = MEvent.bindDom(this.t6, "mouseover", this, this.uG);
    this.ao["mouseout"] = MEvent.bindDom(this.t6, "mouseout", this, this.uJ);
    this.remove = function () {
        if (this.panel)this.panel = null;
        for (var l8 in this.ao) {
            MEvent.removeBuiltInListener(this.t6, l8, this.ao[l8]);
            delete this.ao[l8]
        }
        this.ao = null;
        if (this.t6) {
            if (this.t6.parentNode)_removeNode(this.t6);
            this.t6 = null
        }
        if (typeof this.callback == "function" && this.callback)this.callback = null
    }
};
var MContextMenu = function () {
    this.overlay = null;
    this.u5 = {};
    this.N91 = "";
    this.qt = new Array();
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.tY = document.createElement("div");
    this.tY.className = "mapcontextmenu";
    this.t7 = document.createElement("table");
    this.t7.className = "contextmenutable";
    this.t8 = document.createElement("tbody");
    this.t7.appendChild(this.t8);
    this.tY.appendChild(this.t7);
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.maplet.sF.appendChild(this.tY)
    };
    this.iol77 = function (id) {
        this.N91 = id
    };
    this.J24X = function (w9L) {
        this.overlay = w9L
    };
    this.addOverlay = function (w9L) {
        this.u5[w9L.id] = w9L
    };
    this.removeOverlay = function (w9L) {
        if (this.u5[w9L.id]) {
            if (this.overlay == this.u5[w9L.id])this.hide();
            this.u5[w9L.id] = null;
            delete this.u5[w9L.id]
        }
    };
    this.getOverlaySize = function () {
        var c = 0;
        for (var i in this.u5)c++;
        return c
    };
    this.containsOverlay = function (w9L) {
        return typeof this.u5[w9L.id] != "undefined" && this.u5[w9L.id]
    };
    this.update = function () {
        for (var i in this.t8.childNodes) {
            if (typeof this.t8.childNodes[i] == "object") {
                if (this.t8.childNodes[i].panel != null)this.t8.childNodes[i].panel = null;
                this.t8.removeChild(this.t8.childNodes[i])
            }
        }
        for (var qC = 0; qC < this.qt.length; qC++) {
            this.qt[qC].paint(this)
        }
    };
    this.addItem = function (item, pn) {
        if (typeof pn == "undefined") {
            this.qt[this.qt.length] = item
        } else {
            pn = parseInt(pn);
            this.qt.splice(pn, 0, item)
        }
        this.update()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (this.getOverlaySize() > 0) {
            for (var i in this.u5)this.u5[i].removeContextMenu()
        }
        if (typeof this.maplet == "object" && this.maplet) {
            if (this == this.maplet.xc)this.maplet.xc = null;
            this.maplet = null
        }
        if (typeof finalize != "boolean")finalize = false;
        if (finalize) {
            this.clear();
            _removeNode(this.tY);
            this.tY = null;
            this.qt = null
        }
    };
    this.removeItem = function (pn) {
        if (pn < this.qt.length)this.qt[pn].remove();
        this.qt.splice(pn, 1);
        this.update()
    };
    this.clear = function () {
        for (var i = 0; i < this.qt.length; i++) {
            this.qt[i].remove()
        }
        this.qt = new Array();
        this.update()
    };
    this.show = function (x, y) {
        this.tY.style.left = parseInt(x) + "px";
        this.tY.style.top = parseInt(y) + "px";
        this.tY.style.visibility = "visible"
    };
    this.hide = function () {
        this.tY.style.visibility = "hidden"
    };
    this.toString = function () {
        return "com.mapbar.maplet.MContextMenu"
    }
};
var MSnapshotBox = function (B776, style) {
    if (!(B776 instanceof Maplet) && !B776)throw new Error("parameter para_maplet is invalid Maplet object.");
    var x6 = (typeof style != "string" || !style) ? "" : style + "/";
    var C409 = SNAPSHOT_SERVER;
    var g057Q = SNAPSHOT_SERVER + "get";
    var maplet = B776;
    var krJ = new Date().getTime();
    var ao = [];
    var m989w = "MSnapshotSizeTip" + krJ;
    var xY$o = m989w + "_td";
    var N5Sa4 = '<table cellpadding="2" cellspacing="0" style="background-color:#0E347F;color:#ff0;font-size:14px;font-family:Arial;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;"><tr><td id="' + xY$o + '"></td></tr></table>';
    var $nU = new fD(m989w, 0, 0, 0, 0, false, 24, N5Sa4, maplet.panel);
    $nU.div.style.width = "auto";
    $nU.div.style.height = "auto";
    var e6k = "MSnapshotBox" + krJ;
    var oh6 = '<table width="100%" height="100%" style="border:2px solid #0E347F;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;" cellpadding="0" cellspacing="0"><tr><td style="background-color:#FFFFFF;filter:alpha(opacity=30);opacity:0.3;"></td></tr></table>';
    var $$55 = new fD(e6k, 0, 0, 0, 0, false, 24, oh6, maplet.panel);
    $$55.div.style.overflow = "hidden";
    var JL1 = 117;
    var Gy41 = 23;
    var DRNf = "MSnapshotBar" + krJ;
    var s7ur9 = "MSnapshotBtn_preview_" + krJ;
    var Otj78 = "MSnapshotBtn_download_" + krJ;
    var o73b = "MSnapshotBtn_cancel_" + krJ;
    var imD = "";
    imD = '<font id="' + s7ur9 + '" class="snapshotTextBtn">\u9884\u89c8</font><font id="' + Otj78 + '" class="snapshotTextBtn">\u4fdd\u5b58</font><font id="' + o73b + '" class="snapshotTextBtn" style="border-right: 1px solid #0E347F;">\u53d6\u6d88</font>';
    var Q6C = new fD(DRNf, 0, 0, 0, 0, false, 24, imD, maplet.panel);
    Q6C.style.lineHeight = Gy41 + "px";
    var q51 = "mapbar_snapshot_iframe";
    var iframe = null;
    var E8W4 = "mapbar_snapshot_frm";
    var A521 = null;
    var _5d = 0;
    var a9_8 = {x: 0, y: 0, width: 0, height: 0, rect: {min: {x: 0, y: 0}, max: {x: 0, y: 0}}, center: ""};
    this.mT3 = false;
    this.A$27p = false;
    this.show = function () {
        if (ao.length == 0) {
            ao.push(MEvent.bindDom(document.getElementById(DRNf), "mousedown", this, v2X1U));
            ao.push(MEvent.bindDom(document.getElementById(s7ur9), "click", this, T84));
            ao.push(MEvent.bindDom(document.getElementById(Otj78), "click", this, F6657));
            ao.push(MEvent.bindDom(document.getElementById(o73b), "click", this, this.hide))
        }
        Ltn();
        this.hide();
        $$55.show();
        $nU.show()
    };
    this.hide = function () {
        var l8 = _882(this.hide);
        if (typeof l8 != "undefined" && l8) {
            if (l8.type == "click") {
                var target = typeof l8.target != "undefined" ? l8.target : l8.srcElement;
                var id = target.id;
                if (id == o73b)MEvent.trigger(maplet, "snapshot_done", "cancel"); else if (id == s7ur9)MEvent.trigger(maplet, "snapshot_done", "preview"); else if (id == Otj78)MEvent.trigger(maplet, "snapshot_done", "download")
            }
        }
        K72_();
        r61();
        s16Uf()
    };
    var K72_ = function () {
        $$55.hide();
        $$55.resize(0, 0)
    };
    var r61 = function () {
        $nU.hide();
        $nU.moveTo(-1000, -1000)
    };
    var s16Uf = function () {
        Q6C.hide();
        Q6C.resize(0, 0)
    };
    this.moveTo = function (x, y) {
        $$55.moveTo(x, y);
        var a6$9 = y - $nU.div.firstChild.clientHeight - 2;
        $nU.moveTo(x, a6$9);
        if (y - $nU.div.offsetHeight < 0) {
            $nU.moveTo(x + 3, a6$9 + $nU.div.offsetHeight + 5)
        }
    };
    this.resize = function (w, h) {
        w = w < 0 ? 0 : w;
        h = h < 0 ? 0 : h;
        $$55.resize(w, h);
        this.rj$(w + " x " + h)
    };
    this.rj$ = function (text) {
        document.getElementById(xY$o).innerHTML = text
    };
    this.isVisible = function () {
        return document.getElementById(e6k).style.visibility != "hidden" ? true : false
    };
    this.mS52 = function () {
        this.mT3 = true;
        AS3();
        var x = a9_8.x + a9_8.width - JL1 - 2;
        var y = a9_8.y + a9_8.height;
        if (y + Gy41 > maplet.height)y -= Gy41 + (px ? 4 : 3);
        Q6C.resize(JL1, Gy41);
        Q6C.moveTo(x, y);
        Q6C.show();
        maplet.$_T("pointer", document.getElementById(s7ur9));
        maplet.$_T("pointer", document.getElementById(Otj78));
        maplet.$_T("pointer", document.getElementById(o73b));
        MEvent.trigger(maplet, "snapshot_select", {x: a9_8.x, y: a9_8.y, width: a9_8.width, height: a9_8.height})
    };
    this.snapshot = function (options) {
        if (typeof options != "object")options = {};
        if (typeof options.mode != "string" || (options.mode != "fullscreen" && options.mode != "custom"))options.mode = SNAPSHOT_OPTIONS.mode;
        if (typeof options.x == "undefined" || isNaN(options.x))options.x = 0;
        if (typeof options.y == "undefined" || isNaN(options.y))options.y = 0;
        if (typeof options.width == "undefined" || isNaN(options.width))options.width = maplet.width;
        if (typeof options.height == "undefined" || isNaN(options.height))options.height = maplet.height;
        if (typeof options.zoom == "undefined" || isNaN(options.zoom))options.zoom = maplet.getZoomLevel();
        if (typeof options.format != "string")options.format = SNAPSHOT_OPTIONS.format;
        if (typeof options.depth == "undefined" || isNaN(options.depth))options.depth = SNAPSHOT_OPTIONS.depth;
        if (options.processMode != "string" && (options.processMode != "event" && options.processMode != "download"))options.processMode = SNAPSHOT_OPTIONS.processMode;
        AS3.apply(this, [options]);
        w35.apply(this, [options])
    };
    var w35 = function (options) {
        var J1W = {};
        J1W.center = _wuH3.apply(this, [a9_8.center]);
        J1W.point = "";
        J1W.wq2p = "";
        J1W.area = "";
        J1W.width = a9_8.width;
        J1W.height = a9_8.height;
        J1W.zoom = typeof options.zoom == "undefined" ? maplet.getZoomLevel() : options.zoom;
        J1W.format = typeof options.format == "undefined" ? SNAPSHOT_OPTIONS.format : options.format;
        J1W.depth = typeof options.depth == "undefined" ? SNAPSHOT_OPTIONS.depth : options.depth;
        J1W.processMode = typeof options.processMode == "undefined" ? SNAPSHOT_OPTIONS.processMode : options.processMode;
        J1W.jC419 = "";
        J1W.osk = "";
        J1W.traffic = false;
        J1W.g4x93 = "";
        J1W.g08 = "";
        var e08e = getMarkers();
        if (e08e.length > 0) {
            J1W.point = [];
            for (var i = 0; i < e08e.length; i++) {
                var M4$ = e08e[i];
                J1W.point.push(_wuH3.apply(this, [M4$.marker.pt.getPid()]) + "," + M4$.text + "," + M4$.mX230 + "," + M4$.u0e5 + ",,," + M4$.src + "," + M4$.e2S + "," + M4$.Cf2m7)
            }
            J1W.point = J1W.point.join("|")
        }
        var vw = getPolylines();
        if (vw.length > 0) {
            J1W.wq2p = [];
            J1W.area = [];
            for (var i = 0; i < vw.length; i++) {
                var V43 = [];
                var pts = vw[i].pts;
                for (var k3n1 = 0; k3n1 < pts.length; k3n1++) {
                    V43.push(_wuH3.apply(this, [pts[k3n1].getPid()]))
                }
                var brush = vw[i].brush;
                if (vw[i].brush.fill) {
                    J1W.area.push(V43.join(",") + ";" + QWL2(brush.bgcolor) + ";" + (parseFloat(brush.bgtransparency) / 100) + ";" + QWL2(brush.color) + ";" + brush.stroke + ";" + brush.style + ";" + (parseFloat(brush.transparency) / 100))
                } else {
                    J1W.wq2p.push(V43.join(",") + ";" + QWL2(brush.color) + ";" + brush.stroke + ";" + brush.style + ";" + (parseFloat(brush.transparency) / 100))
                }
            }
            if (J1W.wq2p.length > 0)J1W.wq2p = J1W.wq2p.join("|"); else J1W.wq2p = "";
            if (J1W.area.length > 0)J1W.area = J1W.area.join("|"); else J1W.area = ""
        }
        var jC419 = maplet.getEllipse();
        if (jC419.length > 0) {
            J1W.jC419 = [];
            for (var i = 0; i < jC419.length; i++) {
                var item = jC419[i];
                var brush = item.brush;
                J1W.jC419.push(_wuH3.apply(this, [item.gC.getPid()]) + "," + item.sax + "," + Y32k(item.say, "") + "," + QWL2(brush.bgcolor) + "," + (parseFloat(brush.bgtransparency) / 100) + "," + QWL2(brush.color) + "," + brush.stroke + "," + brush.style + "," + (parseFloat(brush.transparency) / 100))
            }
            if (J1W.jC419.length > 0)J1W.jC419 = J1W.jC419.join("|"); else J1W.jC419 = ""
        }
        var $V5 = getRoundRect();
        if ($V5.length > 0) {
            J1W.osk = [];
            for (var i = 0; i < $V5.length; i++) {
                var item = $V5[i];
                var brush = item.osk.brush;
                J1W.osk.push(_wuH3.apply(this, [item.osk._7H.getPid()]) + "," + _wuH3.apply(this, [item.osk.RIa7R.getPid()]) + "," + item.p625r + "," + item.sY_3 + "," + QWL2(brush.bgcolor) + "," + (parseFloat(brush.bgtransparency) / 100) + "," + QWL2(brush.color) + "," + brush.stroke + "," + brush.style + "," + (parseFloat(brush.transparency) / 100))
            }
            if (J1W.osk.length > 0)J1W.osk = J1W.osk.join("|"); else J1W.osk = ""
        }
        if (maplet.traffic && maplet.traffic.layer.getImgCount()) {
            J1W.traffic = true;
            J1W.g4x93 = maplet.traffic.options.city;
            J1W.g08 = maplet.traffic.getTimestampDir()
        }
        B75.apply(this, [J1W])
    };
    var _wuH3 = function (S4t) {
        return S4t.indexOf(",") != -1 ? S4t.replace(",", "_") : S4t
    };
    var aa4d = function () {
        if (_5d >= 3)return;
        var taskId = A521["taskId"].value;
        if (typeof _snapshot_result == "object" && _snapshot_result) {
            if (_snapshot_result.url != "inexistence") {
                switch (_snapshot_result.processMode) {
                    case "event":
                    case "preview":
                        MEvent.trigger(maplet, "snapshot", _snapshot_result.url);
                        break;
                    default:
                        break
                }
                return
            }
        }
        window.setTimeout(function (thisObj) {
            return function () {
                _5d++;
                new iBl8Y(g057Q + "?taskId=" + taskId, function () {
                    aa4d.apply(thisObj)
                }).PYl()
            }
        }.apply(this, [this]), 1000)
    };
    var QWL2 = function (color) {
        if (color.substring(0, 3).toLowerCase() == "rgb") {
            return color.replace(new RegExp(",", "g"), "@")
        }
        return color
    };
    var T84 = function () {
        this.hide();
        var options = {};
        options.processMode = "preview";
        w35.apply(this, [options])
    };
    var F6657 = function () {
        this.hide();
        var options = {};
        options.processMode = "download";
        w35.apply(this, [options])
    };
    var v2X1U = function (e) {
        tM8(e)
    };
    var getMarkers = function () {
        var v6 = [];
        var cJg8 = maplet.getMarkers();
        if (cJg8.length > 0) {
            for (var i = 0; i < cJg8.length; i++) {
                if (!cJg8[i].icon)continue;
                if (!cJg8[i].icon.isVisible())continue;
                var S5JSl = cJg8[i];
                var icon = S5JSl.icon;
                var g8_ = 0, _50 = 0, UjW43 = 0, G2X3 = 0;
                var B12Is = 0, w30b = 0;
                B12Is = g8_ = parseInt(icon.div.style.left);
                w30b = _50 = parseInt(icon.div.style.top);
                UjW43 = icon.div.clientWidth;
                G2X3 = icon.div.clientHeight;
                var e22lu = "", A0r = "", nV6 = "";
                if (cJg8[i].label) {
                    var u00Y = S5JSl.label;
                    e22lu = u00Y.getText();
                    A0r = parseInt(u00Y.div.style.left);
                    nV6 = parseInt(u00Y.div.style.top);
                    var VE670 = u00Y.div.clientWidth;
                    var X4h = u00Y.div.clientHeight;
                    if (A0r < g8_)g8_ = A0r;
                    if (nV6 < _50)_50 = nV6;
                    if ((A0r + VE670) > (g8_ + UjW43))UjW43 = A0r + VE670;
                    if ((nV6 + X4h) > (_50 + G2X3))G2X3 = nV6 + X4h
                }
                if (_isRectint(a9_8.rect, {min: {x: g8_, y: _50}, max: {x: g8_ + UjW43, y: _50 + G2X3}})) {
                    v6.push({x: B12Is, y: w30b, e2S: cJg8[i].icon.anchorX, Cf2m7: cJg8[i].icon.anchorY, src: icon.getImgUrl(), text: e22lu, mX230: cJg8[i].label ? cJg8[i].label.xoffset : 0, u0e5: cJg8[i].label ? cJg8[i].label.yoffset : 0, marker: cJg8[i]})
                }
            }
        }
        return v6
    };
    var getPolylines = function () {
        var v6 = [];
        var vw = maplet.getPolylines();
        if (vw.length > 0) {
            for (var i = 0; i < vw.length; i++) {
                var pts = vw[i].pts;
                var RUL2 = false;
                for (var k3n1 = 0; k3n1 < pts.length; k3n1++) {
                    var m4En$x = pts[k3n1].mapX;
                    var m4En$y = pts[k3n1].mapY;
                    if (_isInsideRect({x: m4En$x, y: m4En$y}, a9_8.rect)) {
                        RUL2 = true;
                        break
                    }
                    if (k3n1 > 0) {
                        var m4En$H0$ = pts[k3n1 - 1].mapX;
                        var m4En$B60 = pts[k3n1 - 1].mapY;
                        var H2796 = {start: {x: a9_8.rect.max.x, y: a9_8.rect.max.y}, end: {x: a9_8.rect.max.x, y: a9_8.rect.min.y}};
                        var q25 = {start: {x: m4En$H0$, y: m4En$B60}, end: {x: m4En$x, y: m4En$y}};
                        if (_IsIntersect(H2796, q25)) {
                            RUL2 = true;
                            break
                        }
                        H2796 = {start: {x: a9_8.rect.max.x, y: a9_8.rect.min.y}, end: {x: a9_8.rect.min.x, y: a9_8.rect.min.y}};
                        if (_IsIntersect(H2796, q25)) {
                            RUL2 = true;
                            break
                        }
                        H2796 = {start: {x: a9_8.rect.min.x, y: a9_8.rect.min.y}, end: {x: a9_8.rect.min.x, y: a9_8.rect.max.y}};
                        if (_IsIntersect(H2796, q25)) {
                            RUL2 = true;
                            break
                        }
                        H2796 = {start: {x: a9_8.rect.min.x, y: a9_8.rect.max.y}, end: {x: a9_8.rect.max.x, y: a9_8.rect.max.y}};
                        if (_IsIntersect(H2796, q25)) {
                            RUL2 = true;
                            break
                        }
                    }
                }
                if (!RUL2 && vw[i].brush.fill) {
                    var sex = vw[i].pts;
                    var B77 = [];
                    for (var k3n1 = 0; k3n1 < sex.length; k3n1++)B77.push({x: sex[k3n1].mapX, y: sex[k3n1].mapY});
                    var _J5N7 = [
                        {x: a9_8.rect.max.x, y: a9_8.rect.max.y},
                        {x: a9_8.rect.max.x, y: a9_8.rect.min.y},
                        {x: a9_8.rect.min.x, y: a9_8.rect.min.y},
                        {x: a9_8.rect.min.x, y: a9_8.rect.max.y}
                    ];
                    for (var k3n1 = 0; k3n1 < B77.length; k3n1++) {
                        if (_isInsidePolygon(B77[k3n1], _J5N7)) {
                            RUL2 = true
                        }
                    }
                    if (!RUL2) {
                        for (var k3n1 = 0; k3n1 < _J5N7.length; k3n1++) {
                            if (_isInsidePolygon(_J5N7[k3n1], B77)) {
                                RUL2 = true
                            }
                        }
                    }
                }
                if (RUL2) {
                    v6.push(vw[i])
                }
            }
        }
        return v6
    };
    var getRoundRect = function () {
        var v6 = [];
        var $V5 = maplet.getRoundRect();
        if ($V5.length > 0) {
            for (var i = 0; i < $V5.length; i++) {
                var item = $V5[i];
                var X4cN = {min: {x: item._7H.mapX, y: item._7H.mapY}, max: {x: item.RIa7R.mapX, y: item.RIa7R.mapY}};
                if (_isRectint(a9_8.rect, X4cN)) {
                    v6.push({p625r: parseInt(item.width * item.arcsize) * 2, sY_3: parseInt(item.height * item.arcsize) * 2, osk: item})
                }
            }
        }
        return v6
    };
    var FU2 = function (Fv8) {
        var QNq = null;
        if (px) {
            QNq = document.createElement("<input name='" + Fv8 + "'>")
        } else {
            QNq = document.createElement("input");
            QNq.name = Fv8
        }
        QNq.type = "hidden";
        return QNq
    };
    var B75 = function (it9o) {
        try {
            _5d = 0;
            if (typeof _snapshot_result == "object" && _snapshot_result)_snapshot_result = null;
            if (!iframe) {
                if (px) {
                    iframe = document.createElement("<IFRAME name='" + q51 + "'>")
                } else {
                    iframe = document.createElement("IFRAME");
                    iframe.name = q51
                }
                iframe.id = q51;
                iframe.frameBorder = "0";
                iframe.style.width = "0px";
                iframe.style.height = "0px";
                iframe.style.zIndex = -1;
                maplet.panel.appendChild(iframe);
                var _0K = function (thisObj) {
                    return function () {
                        U8$T.apply(thisObj)
                    }
                };
                if (px)iframe.attachEvent("onreadystatechange", _0K(this)); else iframe.addEventListener("load", _0K(this), false);
                A521 = document.createElement("FORM");
                A521.id = E8W4;
                A521.method = "POST";
                A521.target = q51;
                A521.action = C409;
                maplet.panel.appendChild(A521);
                A521.appendChild(FU2("center"));
                A521.appendChild(FU2("customer"));
                A521.appendChild(FU2("size"));
                A521.appendChild(FU2("markers"));
                A521.appendChild(FU2("polylines"));
                A521.appendChild(FU2("polygons"));
                A521.appendChild(FU2("format"));
                A521.appendChild(FU2("depth"));
                A521.appendChild(FU2("processMode"));
                A521.appendChild(FU2("taskId"));
                A521.appendChild(FU2("codeform"));
                A521.appendChild(FU2("zoom"));
                A521.appendChild(FU2("ellipse"));
                A521.appendChild(FU2("roundrect"));
                A521.appendChild(FU2("traffic"));
                A521.appendChild(FU2("tcity"));
                A521.appendChild(FU2("ttime"))
            }
            A521["center"].value = it9o.center;
            A521["customer"].value = (strLicenseKey == "3409") ? 0 : 1;
            A521["size"].value = it9o.width + "x" + it9o.height;
            A521["markers"].value = it9o.point;
            A521["polylines"].value = it9o.wq2p;
            A521["polygons"].value = it9o.area;
            A521["format"].value = it9o.format;
            A521["depth"].value = it9o.depth;
            A521["processMode"].value = it9o.processMode;
            A521["taskId"].value = new Date().getTime();
            A521["codeform"].value = "1";
            A521["zoom"].value = it9o.zoom;
            A521["ellipse"].value = it9o.jC419;
            A521["roundrect"].value = it9o.osk;
            A521["traffic"].value = it9o.traffic;
            A521["tcity"].value = it9o.g4x93;
            A521["ttime"].value = it9o.g08;
            if (!px)A521.target = q51;
            A521.submit()
        } catch (nc) {
            iframe = null;
            A521 = null
        }
    };
    var U8$T = function () {
        if (px && iframe.readyState != "complete")return;
        aa4d.apply(this)
    };
    var AS3 = function (options) {
        if (typeof options == "undefined") {
            with (a9_8) {
                x = parseInt($$55.div.style.left);
                y = parseInt($$55.div.style.top);
                width = $$55.div.clientWidth;
                height = $$55.div.clientHeight
            }
        } else {
            if (options.mode == "fullscreen") {
                options.width = maplet.width;
                options.height = maplet.height
            }
            with (a9_8) {
                x = options.x;
                y = options.y;
                width = options.width;
                height = options.height
            }
        }
        with (a9_8) {
            rect = {min: {x: x, y: y}, max: {x: x + width, y: y + height}};
            center = maplet.toMapCoordinate(x + width / 2, y + height / 2)
        }
    };
    var Ltn = function () {
        with (a9_8) {
            x = 0;
            y = 0;
            width = 0;
            height = 0;
            rect = null
        }
    };
    this.finalize = function () {
        for (var i = 0; i < ao.length; i++) {
            MEvent.removeBuiltInListener(ao[i]);
            ao[i] = null
        }
        ao = null;
        $nU.finalize();
        $nU = null;
        $$55.finalize();
        $$55 = null;
        Q6C.finalize();
        Q6C = null;
        _removeNode(iframe);
        iframe = null;
        _removeNode(A521);
        A521 = null;
        maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MSnapshotBox'
    }
};
var MIconShadow = function (url, width, height, anchorX, anchorY) {
    this.k9Aq0 = 0;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.k9Aq0;
    this.div.style.position = "absolute";
    if (typeof width == "number")width = parseInt(width);
    if (typeof height == "number")height = parseInt(height);
    this.div.style.lineHeight = "0px";
    this.div.style.left = Number.MAX_VALUE + "px";
    this.div.style.top = Number.MAX_VALUE + "px";
    maplet.lA.appendChild(this.div);
    this.img = null;
    if (typeof url == "string" && url.indexOf("<") < 0) {
        this.img = (m9o43) ? document.createElement("v:Image") : new Image();
        this.img.unselectable = "on";
        this.img.style.MozUserSelect = "none";
        this.img.style.zIndex = this.k9Aq0;
        this.img.src = (typeof url == "undefined") ? strImgsvrUrl + "images/Shadow.png" : url;
        this.div.appendChild(this.img);
        if (typeof width == "number")this.img.style.width = width + "px";
        if (typeof height == "number")this.img.style.height = height + "px"
    } else {
        if (typeof url == "string")this.div.innerHTML = url; else this.div.appendChild(url);
        if (typeof width == "number")this.div.style.width = width + "px";
        if (typeof height == "number")this.div.style.height = height + "px"
    }
    MPanel.enableDragMap(this.div, true);
    this.width = this.div.offsetWidth;
    this.height = this.div.offsetHeight;
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2;
    this.anchorX = parseInt((typeof anchorX == "undefined") ? this.anchorX : this.anchorX + anchorX);
    this.anchorY = parseInt((typeof anchorY == "undefined") ? this.anchorY : this.anchorY + anchorY);
    this.left = 0;
    this.top = 0;
    this.wz = function (id) {
        this.div.id = "mk_shadow_c_" + id;
        if (this.img)this.img.id = "mk_shadow_" + id
    };
    this.initialize = function (marker) {
        this.marker = marker;
        if (this.img) {
            if (px)this.img.ondragstart = function () {
                return false
            };
            this.img.onmousedown = function () {
                return false
            }
        }
    };
    this.update = function (maplet, left, top) {
        if (this.marker.autoHide && !this.marker.icon.isVisible()) {
            if (this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
                this.fu = false
            }
        } else {
            var zB = parseInt(left) - parseInt(this.anchorX);
            var zF = parseInt(top) - parseInt(this.anchorY);
            if (this.div.parentNode != maplet.lA.div && !this.marker.ls) {
                maplet.lA.appendChild(this.div);
                this.fu = true
            }
            this.div.style.top = zF + "px";
            this.div.style.left = zB + "px";
            this.top = zF;
            this.left = zB
        }
    };
    this.isVisible = function () {
        return(this.fu)
    };
    this.zq = function () {
        return(this.img ? this.img.src : "") + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.div) {
            if (this.div.style.zIndex < pF) {
                pF++
            }
            this.setZIndex(pF)
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean")finalize = false;
        if (this.img) {
            if (px)this.img.ondragstart = null;
            this.img.onmousedown = null
        }
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode)this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize)this.marker = null
    };
    this.setZIndex = function (WV4) {
        if (this.div && this.div.parentNode && WV4 != this.div.style.zIndex) {
            this.k9Aq0 = this.div.style.zIndex;
            this.div.style.zIndex = WV4
        }
    };
    this._9w = function () {
        if (!this.div)return;
        if (this.k9Aq0 != this.div.style.zIndex) {
            this.setZIndex(this.k9Aq0)
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIconShadow'
    }
};
window["MVersion"] = {"version": "31.2", "build": "20140311124647"};
var Maplet = function (gx, gA, AB, w, h, Ak, Al, yv, x6) {
    if (px) {
        try {
            document.execCommand("BackgroundImageCache", false, true)
        } catch (nc) {
        }
    }
    this.downX = 0;
    this.downY = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.fS = 0;
    this.fT = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isHeX = {cursor: strImgsvrUrl + "images/measure.cur", fbN1j: m9o43 ? "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + sX + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-100px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);' galleryimg='no' unselectable='on' onmousedown='return false;' /></div>" : "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-100px;' galleryimg='no' unselectable='on' onmousedown='return false;'></div>", sS55: "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9", F5g: "\u603b\u957f: <font color='red'>[DISTANCE]</font></br><font color='gray'>\u5355\u51fb\u786e\u5b9a\u5730\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f</font>", Y192: "\u8d77\u70b9", TP68E: "[DISTANCE]", tS0x5: "<div style='position:absolute;width:12px;height:12px;overflow:hidden;top:50%;margin-top:-6px;left:2px;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-86px;top:0px;cursor:pointer' galleryimg='no' unselectable='on' onmousedown='return false;'></div><span style='padding-left:14px;height:18px;line-height:18px;display:block;float:left;'>\u603b\u957f: [DISTANCE]</span>", SU_: "[DISTANCE]", MBn4: "[TIP]", tip: "<div style='position:absolute;height:18px;line-height:19px;_line-height:18px;border:1px solid gray;background:white;padding:0 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;' unselectable='on'>[TIP]</div>", SSW: new MBrush("#FF0000", 3, 0, false, "#FF0000", 50), X0Y: new MBrush("#FF0000", 3, 0, false, "#FF0000", 30)};
    this.wtd = [];
    ac = new Date();
    this.imgWidth = 300;
    this.imgHeight = 300;
    this.clickToCenter = true;
    this.ir0 = {};
    this.ht4D = {};
    this.customInfoWindow = false;
    this.H5cW = -1;
    this.dc3f = -1;
    this.HyjP1 = 200;
    this.ignoreMoveRange = 2;
    this.t41 = false;
    this.NXn = 0;
    this.$839 = 0;
    this.MT$ = false;
    this.R9sb = false;
    this.__RH = null;
    this.pNt = null;
    this.$5D2 = null;
    this.r4FB = [];
    HNp9 = [];
    this.N8Uw = "";
    this.Q6G8F = -1;
    this.t$qb7 = -1;
    this.$q506 = "";
    this.yo47 = null;
    this.$r701 = null;
    this.HAw82 = {container: null, Wp6: [], yN: null, xd: 0.12, _MF: 4, Ye8: 1, interval: 100, GC3p9: {width: 85, height: 68}, Qkv: {width: 35, height: 27}};
    this.w41r9 = {fC: null, width: 16, height: 16, offsetY: 5, BuW: 3, gV2d: 4, overlay: null};
    this.eC_K = -1;
    this.Cc468 = false;
    this.C1_o = true;
    this.w367I = false;
    this.OciYx = bpp[0];
    this.traffic = null;
    this.Fc25e = true;
    this.l19S = 5;
    this.markerDragAnimation = true;
    this.qS = {};
    this.layerData = {};
    this.M0D = [];
    this.layerDataPassiveUrl = "";
    this.$5Sn = null;
    this.$70 = null;
    this.D7S = {width: 41, height: 20};
    this._cg1G = {width: 0, height: 0};
    this.rlConfig = {url: "http://3in1.mapbar.com/s?t=snsn", resultName: "rlm" + new Date().getTime(), RVo3: false, fbN1j: m9o43 ? "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + sX + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-112px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);' galleryimg='no' unselectable='on' onmousedown='return false;' /></div>" : "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-112px;' galleryimg='no' unselectable='on' onmousedown='return false;'></div>", tip: {start: "\u70b9\u51fb\u5f00\u59cb\u6cbf\u9053\u8def\u753b\u4e00\u6761\u7ebf", one: "\u70b9\u51fb\u7ee7\u7eed\u753b\u7ebf", end: "\u70b9\u51fb\u6700\u540e\u4e00\u4e2a\u70b9\uff0c\u53ef\u7ed3\u675f\u6b64\u7ebf\u8def", cBO: "<div class='roadlineTip'><div class='roadlineTip_distance' style='display:none'></div><div></div></div>"}};
    this.h4nA = {diep: [], P440: [], _49: false, O286: null, u$_c: {_96: 0, $n5P: 0, Cx9Q0: 0, W2L8: 0}, tip: new MPanel({location: {type: "xy"}, content: this.rlConfig.tip.cBO, creator: MPanel.SYSTEM}), L1tq: {O_n: 0, O0U22: 0}, gsGY: 1};
    this.mapBound = null;
    this.wO$ = false;
    this.Nw$ = null;
    this.allowDrawingDragMap = true;
    this._H7 = true;
    this.r8r1 = false;
    this.sS = ts.ty;
    this.id = "mapbar";
    this.yt = ((new Date().getTime()) % 86400000).toString(36) + (parseInt(Math.random() * 1000)).toString(36);
    if (typeof strRemoteIP != "undefined" && strRemoteIP) {
        this.yt += "*" + strRemoteIP
    }
    document["mapbar-maplet"] = this;
    this.left = (typeof Ak == "undefined") ? 0 : parseInt(Ak);
    this.top = (typeof Al == "undefined") ? 0 : parseInt(Al);
    this.width = (typeof w == "undefined") ? 600.00001 : parseInt(w);
    this.height = (typeof h == "undefined") ? 400.00001 : parseInt(h);
    if (isNaN(parseFloat(gx)) || (typeof gx == "string" && gx.length > 3 && gx.substring(0, 3).toLowerCase() == "inf")) {
        this.id = gx;
        this.panel = (typeof gx == "object") ? gx : document.getElementById(gx);
        if (gA != null && gA != "undefined") {
            var zh = cq.vp(gA);
            this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(zh[1])));
            this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(zh[0]) % 360));
            zh = null
        }
        if (typeof this.panel != "undefined" && this.panel != null) {
            if (!this.panel.style.zIndex)this.panel.style.zIndex = 0;
            this.left = 0;
            this.top = 0;
            if (this.panel.style.left)this.left = parseInt(this.panel.style.left);
            if (this.panel.style.top)this.top = parseInt(this.panel.style.top);
            if (!this.panel.style.height) {
                this.panel.style.height = this.panel.clientHeight + 'px'
            }
            ;
            if (!this.panel.style.width) {
                this.panel.style.width = this.panel.clientWidth + 'px'
            }
            ;
            if (this.panel.style.width)this.width = parseInt(this.panel.style.width);
            if (this.panel.style.height)this.height = parseInt(this.panel.style.height)
        }
    } else {
        this.gA = gA;
        this.gx = gx
    }
    this.strImgUrl = strImgsvrUrl;
    this.AG = (typeof AB == "undefined") ? 0 : parseInt(AB);
    this.nT = 0;
    this.py = 0;
    this.rotation = 0;
    this.gk = Math.cos(this.rotation / 180 * Math.PI);
    this.wT = Math.sin(this.rotation / 180 * Math.PI);
    this.yv = (yv == "undefined") ? "" : yv;
    this.pU = new Array();
    this.qE = new Array();
    this.yl = (typeof x6 == "undefined" || x6 == null) ? ds : x6;
    this.u2 = null;
    this.u3 = '';
    this.xK = "png" + _9Ra;
    this.xw = this.yl;
    this.yh = "";
    this.x4 = this.yl;
    this.x3 = null;
    this.uu = null;
    this.xX = this.yl;
    this.pJ = null;
    this.pdp = [
        ["", 1],
        [2, 3]
    ];
    this.bp = true;
    this.ff = false;
    this.fe = true;
    this.sf = null;
    this.fj = (typeof bDefaultControlOn == "undefined") ? true : bDefaultControlOn;
    this.fa = false;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.aO = new Array();
    this.aN = new Array();
    this.yG = new Array();
    this.d23yh = null;
    this.pU = new Array();
    this.aE = new Array();
    this.aF = null;
    this.aG = null;
    this.aH = null;
    this.zy = null;
    this.tG = null;
    this.brush = new MBrush("#FF0000", 3);
    this.sv = 0;
    this.fo = false;
    this.gJ = null;
    this.gI = new Image();
    this._Wk16 = new MBound(0, 0, 0, 0);
    this.bInitialized = false;
    this.c0 = false;
    this.w3 = new Array();
    this.cI = true;
    this.cn = false;
    this.gc = [];
    this.u5 = [];
    this.u5['length'] = 0;
    this.vA = this.sS;
    this.fs = false;
    this.c9 = false;
    this.F38W = null;
    this.tD = 0;
    this.gM = 1.0;
    this.xc = null;
    this.mapContextMenu = null;
    this.overview = new qA6$3(this);
    this.ovw = this.overview;
    this.wK = new Array();
    if (typeof this.panel == "undefined" || this.panel == null) {
        document.writeln('<div unselectable="on" id="' + this.id + '" style="position:absolute;overflow:hidden; width:' + this.width + 'px; height:' + this.height + 'px; left:' + this.left + 'px; top:' + this.top + 'px;"></div>');
        this.panel = aa(this.id)
    } else {
        this.panel.style.overflow = "hidden"
    }
    this.map = this.panel;
    if (this.map) {
        this.map.setAttribute("align", "left");
        if (this.map.style.position != "absolute") {
            this.map.style.position = "relative"
        }
        var e22n7 = "http://www.mapbar.com/ApiCopyrightLink.html?referrer=" + window.location.host;
        this.$374j = document.createElement("div");
        this.$374j.style.width = this.D7S.width + "px";
        this.$374j.style.height = this.D7S.height + "px";
        this.$374j.style.overflow = "hidden";
        this.$374j.innerHTML = "<img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-25px;top:-158px' />";
        this.$374j.id = "ImgCopyright";
        this.$374j.style.position = "absolute";
        this.$374j.style.zIndex = 3;
        this.$374j.style.top = (this.height - 22) + "px";
        this.$374j.setAttribute("whohide", "");
        this.$374j.style.cursor = "pointer";
        this.$374j.onclick = function () {
            window.open(e22n7)
        };
        this.r81 = document.createElement('div');
        this.r81.style.position = 'absolute';
        this.r81.style.zIndex = 3;
        this.r81.style.fontSize = '12px';
        this.r81.style.fontFamily = 'Arial';
        this.r81.style.top = (this.height - 25) + 'px';
        this.r81.style.left = (this.width - 70) + 'px';
        this.r81.style.background = 'none';
        this.r81.style.whiteSpace = 'nowrap';
        var ibA = document.createElement('span');
        ibA.style.color = '#000';
        ibA.style.margin = '0 10px 0 0';
        ibA.innerHTML = 'GS(2013)6018\u53F7';
        var CN5J = document.createElement('a');
        CN5J.setAttribute('target', '_blank');
        CN5J.setAttribute('href', 'http://www.navinfo.com.cn');
        CN5J.innerHTML = 'Data&nbsp;&copy;&nbsp;NavInfo';
        CN5J.style.color = 'blue';
        CN5J.style.textDecoration = 'none';
        this.r81.appendChild(ibA);
        this.r81.appendChild(CN5J);
        this.map.appendChild(this.$374j);
        this.map.appendChild(this.r81);
        this._cg1G.width = this.r81.offsetWidth;
        this._cg1G.height = this.r81.offsetHeight
    }
    this.h0D = false;
    this.wB3 = false;
    this.uw = 0;
    this.t9 = 0;
    this.xe = 10;
    if (bp) {
        this.setOverlay('base')
    }
    this.fM = null;
    this.AY = 0.2;
    this.AS = -1;
    this.AT = 0;
    this.AZ = null;
    this.vg = 20.0;
    this.vh = null;
    this.Ah = null;
    this.vc = 0;
    this.vd = 0;
    this.vi = 0;
    this.tB = {"zoomin": 1, "zoomout": 2, "pan": 3, "erase": 13, "edit": 23, "lookup": 5, "bookmark": 6, "drawline": 9, "drawarea": 10, "measure": 11, "measarea": 15, "snapshot": 24, "roadline": 25};
    this.u8d = strImgsvrUrl + 'mapbank/mapbar/';
    this.B1X = strImgsvrUrl + 'mapbank/mapbar/';
    ;
    this.nG0J = 'png' + _9Ra
};
Maplet.MICON_IMGSRC_FLAG = "imgsrc";
Maplet.MLABEL_TEXT_FLAG = "lbltext";
Maplet.LEFT_TOP = 1;
Maplet.LEFT_BOTTOM = 2;
Maplet.RIGHT_TOP = 3;
Maplet.RIGHT_BOTTOM = 4;
Maplet.UNLOAD = 0;
Maplet.LOADING = 1;
Maplet.LOADED = 2;
Maplet.gqQ_R = 3;
Maplet.prototype = {onresize: function () {
    if (this.controlCanvas && this.controlCanvas.options.view.ruler) {
        if (this.height >= 270) {
            this.controlCanvas.showCtlRuler(true, true, false)
        } else {
            this.controlCanvas.showCtlRuler(false, true, false)
        }
    }
    this.Et18P();
    this.rb4();
    this.$us()
}, $us: function () {
    if (this.Nw$ && this.tG7) {
        this.tG7.setAttribute("viewBox", "-" + this.width + " -" + this.height + " " + this.width * 3 + " " + this.height * 3);
        this.tG7.setAttribute("style", "position: absolute; left: -" + this.width + "px; top: -" + this.height + "px; z-index: 0;");
        this.tG7.setAttribute("height", this.height * 3 + "px");
        this.tG7.setAttribute("width", this.width * 3 + "px")
    }
}, Et18P: function () {
    var YkA0 = {w: 0, h: this.D7S.height};
    if (this.$374j.style.display != "none")YkA0.w = YkA0.w + this.D7S.width + 5;
    if (this.Fc25e)YkA0.w = YkA0.w + this._cg1G.width + 5;
    var lTEJF = this.width;
    if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.RIGHT_BOTTOM) {
        lTEJF = lTEJF - this.controlCanvas.getRect().width
    }
    if (this.overview.location.type == Maplet.RIGHT_BOTTOM) {
        var h6k8M = this.overview.getRect();
        if (lTEJF >= h6k8M.min.x && h6k8M.min.x != 0) {
            lTEJF = h6k8M.min.x;
            if ((this.width - h6k8M.max.x >= YkA0.w) || (this.height - h6k8M.max.y >= YkA0.h))lTEJF = this.width
        }
    }
    var U405C = this.Fc25e ? this._cg1G.width : 0;
    var n$$2y = this.Fc25e ? Y32k(this.r81.style.left) : lTEJF;
    if (this.Fc25e) {
        with (this.r81.style) {
            left = lTEJF - U405C - 5 + "px";
            top = (this.height - 23) + "px";
            n$$2y = this.Fc25e ? Y32k(left) : lTEJF
        }
    }
    with (this.$374j) {
        if (style.display != "none") {
            style.left = n$$2y - offsetWidth - 5 + "px";
            style.top = (this.height - 26) + "px"
        }
    }
}, nI: function () {
    if (!this.ff)return null;
    if (this.AP == null) {
        this.AP = new AO(this, -1, this.width - 16, 0, 16, this.height, this.ff, this.panel)
    }
    return this.AP
}, wP: function (e) {
    tM8(e);
    if (this.t41)return false;
    var pt = new MPoint(this.toMapCoordinate(this.moveX, this.moveY));
    pt.initialize(this);
    MEvent.trigger(this, "contextmenu", pt);
    var target = (px) ? event.srcElement : e.target;
    if (this.xc)this.xc.hide();
    if (target.id.indexOf('MPolyline_') > -1) {
        if (target.id.indexOf('_midnode_') > -1)return;
        var XpC7 = target.rEW;
        if (!XpC7.S4G) {
            if (XpC7.pts.length <= 2)return
        }
    }
    var menu = null;
    var overlay = target.getAttribute("oid");
    overlay = typeof this.u5[overlay] != "undefined" ? this.u5[overlay] : null;
    if (overlay && typeof overlay.getContextMenu == "function") {
        menu = overlay.getContextMenu(target)
    } else if (typeof target.contextmenu != "undefined" && target.contextmenu) {
        menu = target.contextmenu
    }
    if (menu) {
        this.xc = menu;
        menu.iol77(typeof target.id == "string" ? target.id : "");
        menu.J24X(overlay);
        menu.show(this.moveX, this.moveY)
    } else {
        if (this.mapContextMenu != null) {
            this.xc = this.mapContextMenu;
            this.mapContextMenu.show(this.moveX, this.moveY)
        }
    }
}, getContextMenu: function () {
    return this.mapContextMenu
}, setContextMenu: function (uc) {
    if (this.mapContextMenu != uc) {
        this.removeContextMenu()
    }
    this.mapContextMenu = uc;
    if (this.mapContextMenu != null) {
        this.mapContextMenu.initialize(this)
    }
}, setStandardContextMenu: function (uc) {
    this.xc = uc
}, removeContextMenu: function () {
    if (this.mapContextMenu != null) {
        if (this.xc == this.mapContextMenu)this.xc = null;
        this.sF.div.removeChild(this.mapContextMenu.tY);
        this.mapContextMenu.maplet = null;
        this.mapContextMenu = null
    }
}, showMap: function () {
    if (m9o43 && this.width > 0) {
        this.panel.style.width = (this.width - 1) + "px";
        this.panel.style.height = (this.height - 1) + "px";
        this.panel.style.width = this.width + "px";
        this.panel.style.height = this.height + "px"
    }
    if (ukX || xA5)this.panel.onselectstart = function () {
        return false
    };
    if (MapBackgroundColor)this.panel.style.backgroundColor = MapBackgroundColor;
    MEvent.bindDom(this.panel, "contextmenu", this, this.wP);
    this.sG = new fD("MapContainerBg", 0, 0, this.width, this.height, true, 0, '', this.panel);
    this.sF = new fD("MapContainer", 0, 0, this.width, this.height, true, 2, '', this.panel);
    this.zs = new fD("ToolTip", 0, 0, 0, 0, false, 24, '', this.sF);
    this.sE = new fD("LayerMap", 0, 0, this.width, this.height, true, 2, '', this.sF);
    this.vx = new fD("LayerPoiMap", 0, 0, this.width, this.height, true, 3, '', this.sF);
    this.nI();
    if (this.fj) {
        var gV = new MStandardControl();
        this.addControl(gV);
        this.controlCanvas = gV.nR
    }
    this.wq = new fD("LayerScale", 1, this.height - 24, 70, 24, this.fe, 3, '', this.panel);
    var content = '<table border="0" width="100%" height="100%" style="border:2px solid #0E347F;"><tr ><td align="center" valign="middle" style="filter:alpha(opacity=30);opacity:0.3;background-color:#FFFFFF;"></td></tr></table>';
    this.sD = new fD("LayerBorder", 1, 1, 1, 1, false, 6, content, this.panel);
    this.sD.style.border = "1px solid #FFFFFF";
    this.snapshotBox = new MSnapshotBox(this);
    content = "<div style=\"position:absolute;border-width:2px 0px 0px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:2px 2px 0px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 0px 2px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:20px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 2px 2px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:20px;line-height:1px;\"></div>";
    this.HAw82.container = new fD("_mapbar_mw_indicator", 0, 0, this.HAw82.Qkv.width, this.HAw82.Qkv.height, true, 100, content, this.panel).div;
    this.HAw82.container.style.display = "none";
    this.HAw82.Wp6 = this.HAw82.container.getElementsByTagName("div");
    this.lA = new fD("LayerDrawMap", 0, 0, this.width, this.height, true, 4, '', this.sF);
    if (px)this.lA.style.backgroundImage = "url(" + sX + ")";
    if (!px) {
        this.lA.style.MozUserSelect = "none"
    }
    this.lA.style.u4DV = "none";
    this.lA.div.setAttribute(Ux3q, "true");
    this.w41r9.fC = new fD("_mapbar_drag_cross", 0, 0, this.w41r9.width, this.w41r9.height, true, 2, '', this.panel);
    with (this.w41r9.fC.div) {
        style.width = this.w41r9.width + "px";
        style.height = this.w41r9.height + "px";
        style.display = "none";
        style.overflow = "hidden"
    }
    if (m9o43)this.w41r9.fC.div.innerHTML = "<v:image  style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\" src='" + CTLIMG_RESOURCE[0].url + "' />"; else this.w41r9.fC.div.innerHTML = "<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\">";
    this.overview.qa(this.panel);
    {
        var rightMargin = 15;
        var ui = 0;
        this.sg = (this.width > 360) ? 150 : 73;
        if ((this.overview.nF() + this.overview.nz()) > (this.height - 23)) {
            ui += Math.max(0, this.overview.nH() - (this.sg - 70))
        }
    }
    {
        var _IH = document;
        if (px || i079) {
            _IH = this.map
        }
        this.ir0["map_mousemove"] = MEvent.bindDom(_IH, "mousemove", this, this.a3);
        this.ir0["map_mousedown"] = MEvent.bindDom(this.map, "mousedown", this, this.a2);
        this.ir0["map_mouseup"] = MEvent.bindDom(_IH, "mouseup", this, this.a6);
        this.ir0["map_click"] = MEvent.bindDom(this.map, "click", this, this.aZ);
        this.ir0["map_dblclick"] = MEvent.bindDom(this.map, "dblclick", this, this.a1);
        this.ir0["map_mouseout"] = MEvent.bindDom(this.map, "mouseout", this, this.a4);
        this.ir0["map_drag"] = MEvent.bindDom(this.map, "drag", this, this.a3);
        this.ir0["map_dragstart"] = MEvent.bindDom(this.map, "dragstart", this, this.a3);
        this.ir0["map_dragend"] = MEvent.bindDom(this.map, "dragend", this, this.a3);
        this.ir0["map_mouseover"] = MEvent.bindDom(this.map, "mouseover", this, this.a5);
        this.ir0["map_mousewheel"] = MEvent.bindDom(this.map, "mousewheel", this, this.a7);
        this.ir0["map_DOMMouseScroll"] = MEvent.bindDom(this.map, "DOMMouseScroll", this, this.a7);
        if (kp) {
            this.ir0["document_keydown"] = MEvent.bindDom(document, "keydown", this, this.onkeydown)
        }
    }
    this.qd();
    this.setZoomLevel(this.AG);
    this.setMode(this.sS);
    if (this.zP == null) {
        this.zP = setInterval("document['mapbar-maplet'].zL()", 100)
    }
}, qd: function () {
    this.sD.hide();
    this.sD.resize(1, 1);
    this.sD.moveTo(-10, -10);
    if (document.all) {
        this.sE.moveTo(0, 0);
        this.sE.show();
        this.vx.moveTo(0, 0);
        this.vx.show();
        this.lA.moveTo(0, 0);
        this.lA.show()
    }
}, setStyle: function (x7, xH) {
    if (this.yl != x7) {
        this.yl = x7;
        if ("aerial" == this.yl || this.yl.indexOf("aerial") >= 0) {
            this.xK = "jpg"
        } else {
            this.xK = "png"
        }
        if (typeof xH != "undefined") {
            this.xK = xH
        }
        if (typeof this.sF != "undefined") {
            for (var i in this.pU) {
                try {
                    if (this.pU[i] != null && typeof this.pU[i] == "object") {
                        if (this.pU[i].parentNode != null) {
                            this.pU[i].parentNode.removeChild(this.pU[i])
                        }
                        this.pU[i] = null
                    }
                } catch (e) {
                }
            }
            this.refresh();
            MEvent.trigger(this, "style", x7)
        }
    }
}, setRotation: function (v0) {
    if (px && rs) {
        this.rotation = v0;
        this.gk = Math.cos(this.rotation / 180 * Math.PI);
        this.wT = Math.sin(this.rotation / 180 * Math.PI)
    }
}, setHeadMode: function (pz) {
    this.nT = pz
}, setOverlay: function (xZ, uz) {
    if (typeof uz == "string") {
        this.u3 = uz
    }
    if (this.u2 != xZ) {
        this.u2 = xZ
    }
    if (typeof this.sF != "undefined") {
        this.refresh()
    }
}, jx6: function () {
    var ll = sj[this.AG] * this.width / this.imgWidth;
    this._Wk16.tl = (this.gA - ll / 2);
    this._Wk16.s6 = (this.gA + ll / 2);
    var lk = qP[this.AG] * this.height / this.imgHeight;
    this._Wk16.tj = (this.gx - lk / 2);
    this._Wk16.s4 = (this.gx + lk / 2)
}, refresh: function (S1335) {
    this.u0(S1335);
    this.u8()
}, fL: function () {
    if (this.fM != null) {
        clearTimeout(this.fM);
        this.fM = null
    }
    if (this.c0 || this.fs || f1.fx.length > 0) {
        this.fM = getTimeout(this, this.fL, 100);
        return
    }
    this.no()
}, no: function () {
    var pL = 0;
    for (var i in this.pU) {
        try {
            if (this.pU[i] != null && typeof this.pU[i] == "object") {
                if (this.pU[i].c2 == true) {
                } else {
                    if (this.pU[i].parentNode != null) {
                        _removeNode(this.pU[i])
                    }
                    this.pU[i].onerror = null;
                    this.pU[i].onload = null;
                    this.pU[i] = null;
                    delete this.pU[i];
                    pL++
                }
            }
        } catch (e) {
        }
    }
}, zL: function () {
    if (this.Cc468 || this.fs || this.c0 || (typeof this.Ai != "undefined" && this.Ai != 0))return;
    var sP = parseInt(this.sF.style.left);
    var sQ = parseInt(this.sF.style.top);
    if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0 || (sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
        this.fs = true;
        this.zA()
    }
}, zA: function () {
    if (this.fs == false)return;
    var sP = parseInt(this.sF.style.left);
    var sQ = parseInt(this.sF.style.top);
    if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0) {
        if (this.c0 == true)return;
        this.c0 = true;
        try {
            var qy = 0;
            var p1 = 0;
            if ((sP + this.tf1) >= 0) {
                this.th--;
                this.tf1 -= parseInt(this.imgWidth);
                qy = this.th;
                p1 = this.tf1
            }
            if ((sP + this.sZ - this.width) <= 0) {
                this.s2++;
                p1 = this.sZ;
                this.sZ += parseInt(this.imgWidth);
                qy = this.s2
            }
            var ix = qy;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            qy = (qy) % s8;
            if (qy >= (s8 / 2))qy -= s8;
            if (qy < (-s8 / 2))qy += s8;
            var yk = this.yl;
            for (var iy = this.ti; iy <= this.s3; iy++) {
                var qA = iy;
                var p3 = (-(iy - this.ti + 1) * this.imgHeight) + this.s1;
                this.aA(p1, p3, qy, qA, ix, iy, yk)
            }
            this.c0 = false
        } catch (e) {
        }
    }
    if ((sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
        if (this.c0 == true)return;
        this.c0 = true;
        try {
            var qA = 0;
            var p3 = 0;
            if ((sQ + this.tg) >= 0) {
                this.s3++;
                this.tg -= parseInt(this.imgHeight);
                qA = this.s3;
                p3 = this.tg
            }
            if ((sQ + this.s1 - this.height) <= 0) {
                this.ti--;
                p3 = this.s1;
                this.s1 += parseInt(this.imgHeight);
                qA = this.ti
            }
            var iy = qA;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            var yk = this.yl;
            for (var ix = this.th; ix <= this.s2; ix++) {
                var qy = ix;
                qy = (qy) % s8;
                if (qy >= (s8 / 2))qy -= s8;
                if (qy < (-s8 / 2))qy += s8;
                var p1 = ((ix - this.th) * this.imgWidth) + this.tf1;
                this.aA(p1, p3, qy, qA, ix, iy, yk)
            }
            this.c0 = false
        } catch (e) {
        }
    }
    this.fs = false
}, aA: function (p1, p3, qy, qA, ix, iy, yk) {
    var nL = nM[this.AG];
    var dirx = parseInt(Math.floor((qy) / nL));
    var diry = parseInt(Math.floor((qA) / nL));
    if (dirx < 0)dirx += 1;
    if (diry < 0)diry += 1;
    var AOvOc = (qy) - dirx * nL;
    var o9U0j = (qA) - diry * nL;
    var pM = this.u8d.replace("img", "img" + this.C92(AOvOc, o9U0j)) + this.sR;
    var xY = ((this.AG).toString(16) + ix.toString(16) + 'l' + iy.toString(16)).toLowerCase();
    if (this.AG >= 14)pM += dirx + "/";
    pM += dirx + "_" + diry + "/";
    pM += AOvOc + "_" + o9U0j + "." + this.xK;
    if (pM && pM.indexOf("NaN") < 0) {
        if (this.pU[xY] == null) {
            if (rs == 0 || !px) {
                this.pU[xY] = new Image();
                this.pU[xY].id = xY;
                this.pU[xY].name = xY;
                this.pU[xY].ntry = "0";
                this.pU[xY].unselectable = "on";
                this.pU[xY].style.position = "absolute"
            } else {
                this.pU[xY] = document.createElement("v:Image");
                this.pU[xY].id = xY;
                this.pU[xY].name = xY;
                this.pU[xY].ntry = "0";
                this.pU[xY].unselectable = "on";
                this.pU[xY].style.position = "absolute";
                this.pU[xY].cE = "f";
                this.pU[xY].style.rotation = this.rotation;
                this.pU[xY].style.width = this.imgWidth + "px";
                this.pU[xY].style.height = this.imgHeight + "px"
            }
            f1.nk(this.pU[xY], pM, this.imgWidth, this.imgHeight);
            this.sE.div.appendChild(this.pU[xY])
        } else {
            if (px && rs) {
                this.pU[xY].style.rotation = this.rotation
            }
        }
        var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
        var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
        this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
        this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
        this.pU[xY].c2 = true;
        this.pU[xY].setAttribute("origy", parseInt(p5 - this.imgHeight / 2));
        this.pU[xY].setAttribute("origx", parseInt(p2 - this.imgWidth / 2));
        xY = null
    }
    pM = null
}, PD7: function () {
    this.no();
    this.sG.div.style.width = this.sE.div.style.width;
    this.sG.div.style.height = this.sE.div.style.height;
    this.sG.div.style.left = this.sE.div.style.left;
    this.sG.div.style.top = this.sE.div.style.top;
    this.sG.div.style.visibility = "visible";
    for (var i in this.pU) {
        var img = this.pU[i];
        if (img && img.parentNode) {
            img.parentNode.removeChild(img);
            this.sG.div.appendChild(img)
        }
    }
    this.a2m95();
    this.C1_o = false
}, a2m95: function () {
    for (var i in this.pU) {
        var img = this.pU[i];
        if (img && img.parentNode)img.c2 = false
    }
}, eavj8: function () {
    this.a2m95();
    this.no()
}, u8: function (nn, zE) {
    if (this.fe) {
        var ws = (this.xg * 100 * 60 / parseInt(this.imgWidth)) * this.gM;
        ;
        var ns = "#000000";
        var xC = (en) ? "km" : tX("%u516E%uE338");
        var xF = (en) ? "mi" : tX("%u54EA");
        ws = (ws < 10) ? (ws).toPrecision(1) : parseInt(ws);
        if (this.wq.div.innerHTML == "") {
            var x2 = ["<div id=\"_scaleValue\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + ns + ";FONT-WEIGHT: bold;left:4px;top:0px;\">&nbsp;" + ws + " " + xC + "</div>"];
            x2.push("<div style=\"position:absolute;width:69px;height:11px;overflow:hidden;top:8px;\">");
            if (m9o43) {
                x2.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-8px;top:-209px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
            } else {
                x2.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-8px;top:-209px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
            }
            x2.push("</div>");
            if (en == 1) {
                this.wq.style.top = Y32k(this.wq.style.top) - 10 + "px";
                this.wq.style.height = Y32k(this.wq.style.height) + 10 + "px";
                x2.push("<div id=\"_scaleValue2\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + ns + ";FONT-WEIGHT: bold;left:4px;top:19px;\">&nbsp;" + ws + ' ' + xF + "</div>")
            }
            this.wq.div.innerHTML = x2.join("")
        } else {
            if (en == 1) {
                aa("_scaleValue").innerHTML = "&nbsp;" + ws + ' ' + xC;
                if (aa("_scaleValue2"))aa("_scaleValue2").innerHTML = "&nbsp;" + ws + ' ' + xF
            } else aa("_scaleValue").innerHTML = "&nbsp;" + ws + ' ' + xC
        }
        this.wq.show()
    } else {
        this.wq.hide()
    }
}, rb4: function () {
    if (!this.wq)return;
    if (this.fe) {
        var l = 4, yw;
        if (en == 1)yw = this.height - 34; else yw = this.height - 24;
        var o9$ = 0, u15 = 0;
        if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.LEFT_BOTTOM) {
            o9$ = this.controlCanvas.getRect().max.x + 10
        }
        if (this.overview && this.overview.location.type == Maplet.LEFT_BOTTOM) {
            u15 = this.overview.getRect().max.x + 10
        }
        this.wq.moveTo(Math.max(l, Math.max(o9$, u15)), yw)
    }
}, showNavLogo: function (c2) {
    if (!c2) {
        this.r81.style.display = "none"
    } else {
        this.r81.style.display = "block"
    }
    this.Fc25e = c2;
    this.Et18P()
}, waitPan: function (x, y, fy) {
    if (this.Ah)clearTimeout(this.Ah);
    this.Ah = null;
    if (x && y) {
        if (this.vi == 0) {
            this.vi = 1;
            this.vc = x;
            this.vd = y;
            this.fy = fy;
            this.Ah = getTimeout(this, this.waitPan, 500)
        }
    } else {
        if (this.vi) {
            this.vi = 0;
            this.panTo(this.vc, this.vd, this.fy)
        }
    }
}, doPan: function () {
    this.fa = true;
    this.w367I = true;
    if (!px && ContentInfo && ContentInfo.isVisible()) {
        ContentInfo._A0(true)
    }
    if (!this.C1_o) {
        this.no();
        this.C1_o = true
    }
    if (this.markerDragAnimation) {
        with (this.w41r9) {
            if (overlay != null && !overlay.ls)this.$T9R7(false)
        }
    }
    var tN = parseInt(Math.sqrt(this.Aq * this.Aq + this.Aw * this.Aw));
    if (this.vh)clearTimeout(this.vh);
    this.vh = null;
    if ((this.va - tN) <= (1.2 * this.vg)) {
        this.Aq = this.xoffset;
        this.Aw = this.yoffset;
        this.sF.moveTo(this.Aq, this.Aw);
        this.vh = getTimeout(this, this.finishupPan, 10)
    } else {
        var lJ = this.xoffset * this.vg / this.va;
        var lL = this.yoffset * this.vg / this.va;
        this.Aq += lJ;
        this.Aw += lL;
        this.sF.moveTo(this.Aq, this.Aw);
        this.vh = getTimeout(this, this.doPan, 10)
    }
}, finishupPan: function () {
    this.fa = false;
    this.MT$ = true;
    this.__RH = new Date().getTime();
    this.pNt = _8y63(this.Aq);
    this.$5D2 = _8y63(this.Aw);
    if (this.vh)clearTimeout(this.vh);
    this.vh = null;
    this.setCenter(this.ve, this.vf);
    this.MT$ = false;
    if (this.d23yh && this.d23yh.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.d23yh)
    } else {
    }
    if (this.fy != null && this.fy != "undefined")eval(this.fy);
    this.w367I = false
}, AN: function (AL, x, y) {
    this.lA.hide();
    if (this.u_5) {
        this.u_5.setVisible(false);
        MLayer.setTipVisible(false)
    }
    for (var i in this.ht4D) {
        var p = this.ht4D[i];
        if (p.options.zoomhide && p.isVisible()) {
            p.setVisible(false)
        }
    }
    if (!this.C1_o)this.no();
    this.Cc468 = true;
    if (typeof x != "number")x = 0;
    if (typeof y != "number")y = 0;
    var AK = Math.pow(2, parseFloat(AL)) / Math.pow(2, this.AG);
    for (var i in this.pU) {
        var img = this.pU[i];
        if (img.c2) {
            with (img.style) {
                if (img.getAttribute("done") != "1") {
                    _removeNode(img);
                    img = null;
                    delete this.pU[i]
                } else {
                    width = (this.imgWidth * AK < 10 ? 0 : this.imgWidth * AK + 1) + "px";
                    height = (this.imgHeight * AK < 10 ? 0 : this.imgHeight * AK + 1) + "px";
                    left = Y32k(img.getAttribute("origx")) * AK + 1 + "px";
                    top = Y32k(img.getAttribute("origy")) * AK + 1 + "px"
                }
            }
        }
    }
    with (this.sE.div.style) {
        width = this.width * AK + "px";
        height = this.height * AK + "px";
        left = (this.width / 2 - Y32k(width) / 2 + x) + "px";
        top = (this.height / 2 - Y32k(height) / 2 + y) + "px"
    }
}, i2y: function (B09V) {
    if (Y32k(this.sE.div.style.width) != this.width) {
        with (this.sE.div.style) {
            width = this.width + "px";
            height = this.height + "px";
            left = "0px";
            top = "0px"
        }
    }
    if (typeof B09V == "boolean" && B09V) {
        for (var i in this.pU) {
            var img = this.pU[i];
            if (typeof img == "object" && img.c2) {
                img.style.left = Y32k(img.getAttribute("origx"), 0) + "px";
                img.style.top = Y32k(img.getAttribute("origy"), 0) + "px";
                img.style.width = this.imgWidth + "px";
                img.style.height = this.imgHeight + "px"
            }
        }
    }
    this.Cc468 = false
}, removeLineAt: function () {
}, addHotspot: function (lf, li, xP, tp, s0) {
    var nW = "hotspot" + this.aE.length;
    if (typeof li == "object" && li.toString() == "com.mapbar.maplet.MPoint") {
        lf = li.lat;
        li = li.lon
    } else {
        var zh = cq.vp(li);
        lf = Math.min(sy[1], Math.max(sy[0], parseFloat(zh[1])));
        li = Math.min(sz[1], Math.max(sz[0], parseFloat(zh[0]) % 360))
    }
    this.aE[this.aE.length] = new a8(nW, parseFloat(lf), parseFloat(li), xP, tp, s0)
}, zp: function (x, y, AB) {
    var An = (x - this.width / 2);
    if (this.rotation != 0) {
        var At = (y - this.height / 2);
        An = An * this.gk + At * this.wT
    }
    AB = Y32k(AB, this.AG);
    var xd = sj[AB];
    var li = this.gA + An * xd / this.imgWidth;
    li = Math.min(sz[1], Math.max(sz[0], li % 360));
    return li
}, zo: function (x, y, AB) {
    var At = (y - this.height / 2);
    if (this.rotation != 0) {
        var An = (x - this.width / 2);
        At = -An * this.wT + At * this.gk
    }
    AB = Y32k(AB, this.AG);
    var xd = qP[AB];
    var lf = this.gx - At * xd / this.imgHeight;
    lf = Math.min(sy[1], Math.max(sy[0], lf));
    return lf
}, zl: function (li, lf) {
    var g2 = ((parseFloat(li) - this.gA) % 360);
    if (g2 > 180)g2 -= 360;
    if (g2 < -180)g2 += 360;
    var p1 = Math.round(this.width / 2 + g2 / sj[this.AG] * this.imgWidth);
    if (this.rotation != 0) {
        var p3 = Math.round(this.height / 2 - ((parseFloat(lf) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
        p1 = (p1 - this.width / 2) * this.gk - (p3 - this.height / 2) * this.wT + this.width / 2
    }
    return p1
}, zm: function (lf, li) {
    var p3 = Math.round(this.height / 2 - ((parseFloat(lf) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
    if (this.rotation != 0) {
        var g2 = ((parseFloat(li) - this.gA) % 360);
        if (g2 > 180)g2 -= 360;
        if (g2 < -180)g2 += 360;
        var p1 = Math.round(this.width / 2 + g2 / sj[this.AG] * this.imgWidth);
        p3 = (p1 - this.width / 2) * this.wT + (p3 - this.height / 2) * this.gk + this.height / 2
    }
    return p3
}, setMode: function (zr, fy) {
    zr = zr.toString().toLowerCase();
    zr = (this.tB[zr]) ? parseInt(this.tB[zr]) : parseInt(zr);
    if ((zr != 3 && zr != 23) && this.sS == zr)return null;
    if (this.sS == 3 || this.sS == 23)this.vA = this.sS;
    this.sS = parseInt(zr);
    this.E212();
    var l8 = null;
    if (zr != 'measure' && zr != 11) {
        clearInterval(this.u28);
        this.u28 = undefined
    }
    switch (zr) {
        case 'zoomin':
        case '1':
        case 1:
            this.cS = true;
            this.$_T('crosshair', this.map);
            this.sS = 1;
            l8 = 'zoomin';
            break;
        case 'zoomout':
        case '2':
        case 2:
            this.cS = true;
            this.sS = 2;
            this.$_T('crosshair', this.map);
            l8 = 'zoomout';
            break;
        case ts.ty:
        case "pan":
        case 3:
            this.sS = 3;
            l8 = 'pan';
            zr = null;
            this.setCursorStyle("default", "");
        case ts.l3:
        case 13:
        case 'erase':
            if (zr) {
                this.sS = 13;
                l8 = 'erase';
                zr = null
            }
        case ts.tu:
        case 'edit':
        case 23:
            if (zr) {
                this.sS = 23;
                l8 = 'edit';
                zr = null
            }
            this.cO = true;
            this.$_T('default', this.map);
            break;
        case ts.tv:
        case "lookup":
        case 5:
            this.cS = true;
            this.$_T('crosshair', this.map);
            this.sS = 5;
            l8 = 'lookup';
            break;
        case '6':
        case 6:
        case 'bookmark':
            this.$_T('default', this.map);
            l8 = 'bookmark';
            this.sS = 6;
            break;
        case '7':
        case 7:
            this.$_T('default', this.map);
            break;
        case '8':
        case 8:
            this.$_T('default', this.map);
            break;
        case '9':
        case 9:
        case 'drawline':
            this.$_T('default', this.map);
            this.po = -1;
            this.sS = 9;
            l8 = 'drawline';
            if (this.allowDrawingDragMap)this.cO = true;
            break;
        case '10':
        case 10:
        case 'drawarea':
            this.$_T('default', this.map);
            this.po = -1;
            this.sS = 10;
            l8 = 'drawarea';
            if (this.allowDrawingDragMap)this.cO = true;
            break;
        case '11':
        case 11:
        case 'measure':
            this.setCursorStyle("default", this.isHeX.cursor);
            this.$_T('default', this.map);
            l8 = 'measure';
            this.sS = 11;
            if (this.allowDrawingDragMap)this.cO = true;
            break;
        case '15':
        case 15:
        case 'measarea':
            this.$_T('default', this.map);
            l8 = 'measarea';
            this.sS = 15;
            if (this.allowDrawingDragMap)this.cO = true;
            break;
        case '24':
        case 24:
        case 'snapshot':
            this.cS = true;
            this.$_T('crosshair', this.map);
            l8 = 'snapshot';
            this.sS = 24;
            break;
        case '25':
        case 25:
        case 'roadline':
            this.$_T('pointer', this.map);
            l8 = 'roadline';
            this.sS = ts.u0S$;
            if (this.allowDrawingDragMap)this.cO = true;
            break;
        default:
            break
    }
    ;
    var mQoM = null;
    if (l8 != null && typeof fy == "function")mQoM = MEvent.addListener(this, l8, fy);
    if (l8 != null) {
        MEvent.trigger(this, "setmode", l8)
    }
    return mQoM
}, r_6_0: function (pt, n) {
    var S5JSl = new MMarker(pt, new MIcon(this.rlConfig.fbN1j, 11, 11));
    S5JSl.creator = MLayer.SYSTEM;
    this.addOverlay(S5JSl);
    this.h4nA.diep.push(S5JSl)
}, U72R9: function (i4sqj, o4b, f65, Y85) {
    if (this.sS == ts.u0S$ || (this.sS != ts.u0S$ && i4sqj)) {
        var r = eval("typeof " + this.rlConfig.resultName + "=='undefined'?null:" + this.rlConfig.resultName);
        if (r) {
            if (this.h4nA.O286) {
                this.removeOverlay(this.h4nA.O286, true);
                this.h4nA.O286 = null
            }
            var pts = [];
            var e29 = 0;
            if (r.a.length) {
                var data = r.a[0];
                var pts = this.decodeLine(data.a, data.b);
                e29 = Y32k(data.e, 0)
            } else {
                pts.push(o4b);
                pts.push(f65)
            }
            var wq2p = new MPolyline(pts);
            if (this.sS == ts.u0S$)wq2p.creator = MLayer.SYSTEM;
            if (i4sqj) {
                this.h4nA.P440.push(wq2p);
                this.h4nA.L1tq.O_n += e29;
                this.h4nA.L1tq.O0U22 = 0
            } else {
                this.h4nA.O286 = wq2p;
                this.h4nA.L1tq.O0U22 = e29
            }
            this.addOverlay(wq2p);
            r = undefined;
            eval(this.rlConfig.resultName + "=undefined");
            this.$31X()
        }
        with (this.h4nA.u$_c) {
            if (_96 != Cx9Q0 || $n5P != W2L8) {
                Cx9Q0 = _96;
                W2L8 = $n5P;
                this.f788y(new MPoint(_96, $n5P, false), false)
            } else {
                this.h4nA._49 = false
            }
        }
    }
    _removeNode(aa(Y85))
}, f788y: function (f65, i4sqj) {
    if (typeof i4sqj != "boolean")i4sqj = false;
    this.h4nA._49 = true;
    var pk24L = this.h4nA.diep;
    var d7MSe = "%252C";
    var o4b = pk24L[pk24L.length - 1].pt;
    var url = this.rlConfig.url + "&_=" + new Date().getTime() + "&nh=" + o4b.getPid() + "_" + d7MSe + f65.getPid() + "_&ri=" + this.rlConfig.resultName;
    new iBl8Y(url, this.U72R9, false, true, this, this.U72R9, [i4sqj, o4b, f65]).PYl()
}, $31X: function () {
    with (this.h4nA) {
        if (!tip.maplet)this.addPanel(tip);
        if (!tip.isVisible())tip.show();
        var d = tip.dom.firstChild.childNodes[0];
        var yw = "start";
        if (diep.length == 0) {
            d.style.display = "none"
        } else {
            if (diep.length == 1)yw = "one"; else yw = "end";
            var e29 = L1tq.O_n + L1tq.O0U22;
            d.innerHTML = e29 < 1000 ? e29 + " \u7c73" : (e29 / 1000).toFixed(1) + " \u516c\u91cc";
            d.style.display = ""
        }
        if (this.rlConfig.tip[yw])tip.dom.firstChild.childNodes[1].innerHTML = this.rlConfig.tip[yw];
        tip.setLocation({x: this.moveX + 20, y: this.moveY})
    }
}, setCursorStyle: function (mode, icon) {
    if (typeof mode == "string" && typeof icon == "string" && mode) {
        if ("default,pointer,move,crosshair".indexOf(mode) != -1) {
            HNp9[mode] = icon
        }
    }
}, $_T: function (mode, e52) {
    var icon = HNp9[mode];
    var cursor = "";
    if (typeof icon == "string" && icon) {
        cursor = "url('" + icon + "'),auto"
    } else {
        cursor = mode
    }
    if (e52.style.cursor != cursor) {
        e52.style.cursor = cursor
    }
}, wN: function (x, y, ya, xu, ct) {
    if (typeof ya == "undefined" || ya == null)return;
    if (iToolTipStyle == "undefined" || iToolTipStyle == 1) {
        var p0 = (typeof ya == "object") ? ya : null;
        if (p0) {
            avBubble.gl(p0.title, p0.content);
            ct = xu
        } else {
            avBubble.gl(ya, xu)
        }
        if (p0) {
            this.d23yh = p0.gv(x, y, true)
        } else {
            this.d23yh = gp(ya, x, y, xu, true)
        }
    } else {
        var p0 = (typeof ya == "object") ? ya : null;
        if (p0) {
            setToolTipMenu(x, y, p0.title, p0.content)
        } else {
            setToolTipMenu(x, y, ya, xu)
        }
    }
}, hideBubble: function () {
    hideBubble(this);
    if (this.d23yh) {
        if (this.d23yh.parentNode)this.d23yh.parentNode.removeChild(this.d23yh);
        this.d23yh = null
    }
}, aY: function () {
    if ((this.moveX > 0) && (this.moveX < this.width) && (this.moveY > 0) && (this.moveY < this.height) && (this.downX > 0) && (this.downX < this.width) && (this.downY > 0) && (this.downY < this.height)) {
        return true
    } else {
        return false
    }
}, lu: function () {
    var w = 0, h = 0, x = 0, y = 0;
    if (this.moveX < this.downX && this.moveY < this.downY) {
        w = this.downX - this.moveX;
        h = this.downY - this.moveY;
        x = this.moveX;
        y = this.moveY
    } else if (this.moveX > this.downX && this.moveY < this.downY) {
        w = this.moveX - this.downX;
        h = this.downY - this.moveY;
        x = this.downX;
        y = this.moveY
    } else if (this.moveX < this.downX && this.moveY > this.downY) {
        w = this.downX - this.moveX;
        h = this.moveY - this.downY;
        x = this.moveX;
        y = this.downY
    } else if (this.moveX > this.downX && this.moveY > this.downY) {
        w = parseInt(this.moveX) - this.downX;
        h = parseInt(this.moveY) - this.downY;
        x = this.downX;
        y = this.downY
    } else {
        w = this.moveX - this.downX;
        h = this.moveY - this.downY;
        x = this.downX;
        y = this.downY
    }
    if (this.sS == ts.X420D) {
        this.snapshotBox.resize(w, h);
        this.snapshotBox.moveTo(x, y)
    } else {
        this.sD.resize(w, h);
        this.sD.moveTo(x, y)
    }
}, E212: function () {
    this.cL = false;
    this.cS = false;
    this.cO = false;
    this.cN = false;
    this.cR = false;
    this.closeMeasureCurrPath();
    this.setCursorStyle("default", "");
    if (this.zy) {
        this.zy.remove(true);
        this.zy = null
    }
    if (this.tG) {
        this.tG.remove(true);
        this.tG = null
    }
    if (this.sD.style.visibility == "visible") {
        this.sD.hide();
        this.sD.resize(1, 1);
        this.sD.moveTo(-10, -10)
    }
    if (this.snapshotBox.isVisible() && !this.snapshotBox.mT3) {
        this.snapshotBox.hide()
    }
    nX();
    with (this.h4nA) {
        L1tq.O_n = 0;
        L1tq.O0U22 = 0;
        if (tip.maplet && tip.isVisible())tip.hide();
        u$_c.Cx9Q0 = u$_c._96 = 0;
        u$_c.W2L8 = u$_c.$n5P = 0;
        if (O286) {
            this.removeOverlay(O286, true);
            O286 = null
        }
        if (diep.length) {
            for (var i = 0; i < diep.length; i++) {
                diep[i].creator = MLayer.USER;
                if (gsGY) {
                    this.removeOverlay(diep[i], true);
                    diep[i] = null
                }
            }
        }
        if (P440.length) {
            for (var i = 0; i < P440.length; i++) {
                P440[i].creator = MLayer.USER;
                if (gsGY) {
                    this.removeOverlay(P440[i], true);
                    P440[i] = null
                }
            }
        }
        diep = [];
        P440 = [];
        _49 = false;
        gsGY = 1
    }
}, clean: function () {
    this.hideBubble();
    this.refresh()
}, showBasePois: function (c2) {
    this.bp = c2;
    this.refresh()
}, addControl: function (gB, fi, q6, zw) {
    if (typeof gB == "string" || (typeof gB == "object" && gB.toString().indexOf("MStandardControl") > 0)) {
        if (this.controlCanvas) {
            this.controlCanvas.g1();
            this.controlCanvas = null
        }
        var t0 = null;
        if (typeof gB == "string") {
            if (q6 == null || q6 == "undefined") {
                q6 = 0
            }
            if (zw == null || zw == "undefined") {
                zw = 0
            }
            t0 = new MStandardControl(gB, q6, zw, fi)
        } else if (typeof gB == "object") {
            t0 = gB
        }
        if (t0) {
            t0.initialize(this)
        }
    } else if (typeof gB == "object") {
        if (this.gc[gB.id]) {
            return
        }
        gB.initialize(this);
        this.gc[gB.id] = gB;
        this.overview.addListener(this.gc[gB.id])
    }
}, removeControl: function (gw) {
    if (typeof gw == "object" && this.gc[gw.id]) {
        this.gc[gw.id].remove();
        this.gc[gw.id] = null
    }
}, getCurrentMap: function () {
    var sT = this.width * sj[this.AG] / this.imgWidth;
    cq.lf = this.gx;
    cq.li = this.gA;
    var gz = cq.zn();
    var vy = (this.aO.length > 0) ? "&pois=" + this.aO.length + "," : "";
    for (var i = 0; i < this.aO.length; i++) {
        vy += this.aO[i].zn() + "," + this.aO[i].xP + ","
    }
    var vw = (this.aN.length > 0) ? "&plines=" + this.aN.length + "," : "";
    for (var i = 0; i < this.aN.length; i++) {
        vw += this.aN[i].zn() + ";"
    }
    var u1 = "";
    for (var i in this.u5) {
        if (typeof this.u5[i] == "object" && this.u5[i] != null && this.u5[i].zq) {
            if (u1.length == 0) {
                u1 = "&overlays="
            }
            u1 += this.u5[i].zq() + ";"
        }
    }
    return "&map=" + this.AG + "," + gz + "," + this.width + "," + this.height + "&zm=" + (Math.round(parseFloat(sT) * 1000) / 10.0) + "&width=" + this.width + "&height=" + this.height + "&ctr=" + gz + vy + vw + "&client=" + strLicenseKey + u1
}, setCursorIcon: function (xI) {
    this.gJ = xI;
    this.gI.src = xI;
    nX()
}, v1: function () {
    this.gJ = null;
    this.gI.src = null
}, setBgColor: function (xt) {
    this.panel.style.backgroundColor = xt
}, setTransparency: function (uo) {
    this.sE.div.style.filter = "alpha(opacity=" + uo + ");";
    this.sE.div.style.MozOpacity = (uo / 100.0);
    this.sE.div.style.opacity = (uo / 100.0);
    this.sE.div.style.qK = (uo / 100)
}, ql: function () {
    return this.cI
}, setActive: function (cT) {
    this.cI = cT
}, onkeydown: function (e) {
    var l8 = (e) ? e : (window.event) ? window.event : null;
    if (l8) {
        var qJ = (l8.fG) ? l8.fG : ((l8.keyCode) ? l8.keyCode : ((l8.which) ? l8.which : 0));
        if (qJ == "37" || qJ == "38" || qJ == "39" || qJ == "40") {
            if (this.ql()) {
                if (l8.target && ((l8.target.nodeName == "INPUT" && l8.target.getAttribute("type").toLowerCase() == "text") || l8.target.nodeName == "TEXTAREA")) {
                    return
                }
                if (l8.srcElement && ((l8.srcElement.tagName == "INPUT" && l8.srcElement.type == "text") || l8.srcElement.tagName == "TEXTAREA")) {
                    return
                }
                if (l8.shiftKey || l8.ctrlKey) {
                    if (qJ == "37") {
                        this.setRotation(this.rotation - 15);
                        this.refresh()
                    }
                    if (qJ == "39") {
                        this.setRotation(this.rotation + 15);
                        this.refresh()
                    }
                } else {
                    if (qJ == "37")this.panTo(this.width / 2, 0);
                    if (qJ == "38")this.panTo(0, this.height / 2);
                    if (qJ == "39")this.panTo(-this.width / 2, 0);
                    if (qJ == "40")this.panTo(0, -this.height / 2)
                }
            }
        }
    }
}, getMaxBubbleSize: function () {
    var ix = 0;
    var iy = 0;
    var ax = this.width;
    var ay = this.height;
    var n34 = this.getOverviewRect();
    var LeT7 = {tn: n34.min.x, Wl1: n34.max.x, width: n34.max.x - n34.min.x};
    var f2yF7 = this.getControlRect();
    var gkxG = {tn: f2yF7.min.x, Wl1: f2yF7.max.x};
    if (this.controlCanvas) {
        with (this.controlCanvas) {
            if (isVisible()) {
                if (options.location.type == Maplet.LEFT_TOP || options.location.type == Maplet.LEFT_BOTTOM) {
                    ix = Math.max(ix, f2yF7.max.x)
                } else {
                    ax = Math.min(ax, f2yF7.min.x)
                }
            }
        }
    }
    if (this.overview) {
        with (this.overview) {
            if (fg) {
                if (location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM) {
                    ix = Math.max(ix, n34.max.x + location.marginx)
                } else {
                    ax = Math.min(ax, n34.min.x)
                }
            }
        }
    }
    var w = ax - ix;
    var h = ay - iy;
    if (!isNaN(parseInt(avBubble.H8Y0)) && parseInt(avBubble.H8Y0) < w)w = parseInt(avBubble.H8Y0);
    if (!isNaN(parseInt(avBubble.lJ0m)) && parseInt(avBubble.lJ0m) < h)h = parseInt(avBubble.lJ0m);
    return{min: {x: ix, y: iy}, max: {x: ax, y: ay}, width: w, height: h, f0: gkxG, overview: LeT7}
}, j3L4: function (random) {
    this.wB3 = true;
    var d = new Date();
    new iBl8Y(bpp[0] + "/poireport.txt" + (GOLDPOI_TXTRQT_RANDOM ? "?" + (d.getYear() > 1900 ? d.getYear() - 1900 : d.getYear()) + d.getMonth() + d.getDay() : ""), this.R3Q, null, null, this, this.R3Q).PYl()
}, R3Q: function () {
    if (typeof basepoilist == "object" && basepoilist)this.refresh();
    this.wB3 = false
}, setTrajectory: function (marker, $AM9, uv, lX) {
    this.ux = (uv == null || uv == "undefined") ? 5 : parseInt(uv);
    this.pid = marker;
    this.lX = lX;
    var aU = $AM9.pts;
    if (aU != null && aU.length > 0) {
        var qI = 0;
        this.zf = new Array();
        this.zg = new Array();
        this.p9 = 0;
        for (var i = 0; i < aU.length; i++) {
            {
                var pt = cq.vp(aU[i].getPid());
                this.zg[qI] = parseFloat(pt[0]);
                this.zf[qI] = parseFloat(pt[1]);
                qI++;
                pt = null
            }
        }
        aU = null
    }
}, rotate: function (fy) {
    if (this.uw <= this.t9) {
        this.uw = Math.min(this.t9, this.uw + this.xe)
    } else if (this.uw >= this.t9) {
        this.uw = Math.max(this.t9, this.uw - this.xe)
    }
    this.setRotation(this.uw);
    this.refresh();
    if (this.uw == this.t9) {
        setTimeout(fy, 100)
    } else {
        setTimeout("maplet.rotate(\"" + fy + "\")", 100)
    }
}, doEmulation: function () {
    try {
        if (this.p9 == 0) {
            this.wY = this.zf[0];
            this.wZ = this.zg[0];
            this.py = this.p9;
            this.p9++
        }
        if (this.p9 < this.zf.length) {
            this.vh = null;
            if (this.pid.icon.div.parentNode != this.lA) {
                this.lA.appendChild(this.pid.icon.div.parentNode);
                this.pid.icon.div.style.zIndex = 200
            }
            if (this.nT == 1 && rs && this.py != this.p9) {
                this.py = this.p9;
                if (typeof this.lY == "undefined" || this.lY == null) {
                    this.lY = document.createElement("div");
                    this.lY.style.position = "absolute";
                    this.lY.style.zIndex = 1000;
                    this.lY.style.width = parseFloat(this.pid.icon.div.style.width) + "px";
                    this.lY.style.height = parseFloat(this.pid.icon.div.style.height) + "px";
                    this.lY.style.left = (this.width / 2 - parseFloat(this.pid.icon.div.style.width) / 2) + "px";
                    this.lY.style.top = (this.height / 2 - parseFloat(this.pid.icon.div.style.height) / 2) + "px";
                    this.lY.innerHTML = "<img src='" + this.pid.icon.imgUrl + "' width='" + parseFloat(this.pid.icon.div.style.width) + "px' height='" + this.pid.icon.div.style.height + "px'>";
                    this.map.appendChild(this.lY)
                }
                var v0 = -90 + parseFloat(180 * Math.atan2(this.zf[this.p9] - this.zf[this.p9 - 1], 0.8 * (this.zg[this.p9] - this.zg[this.p9 - 1])) / Math.PI);
                if (v0 < 0) {
                    v0 += 360
                }
                v0 = v0 % 360;
                if ((Math.abs(v0 - this.rotation) % 360) > 180) {
                    this.rotation += 360
                }
                if (this.rotation - 180 - 360 > 0) {
                    this.rotation = (this.rotation - 720)
                }
                this.uw = this.rotation;
                this.t9 = v0;
                if (this.p9 == 1) {
                    this.setRotation(v0);
                    this.setCenter(this.wY, this.wZ)
                } else {
                    this.setCenter(this.wY, this.wZ);
                    setTimeout("maplet.rotate(\"maplet.doEmulation()\")", 500);
                    return
                }
            }
            var yi = this.zl(this.zg[this.p9 - 1], this.zf[this.p9 - 1]);
            var yj = this.zm(this.zf[this.p9 - 1], this.zg[this.p9 - 1]);
            var l4 = this.zl(this.zg[this.p9], this.zf[this.p9]);
            var l5 = this.zm(this.zf[this.p9], this.zg[this.p9]);
            var w1 = this.zl(this.wZ, this.wY);
            var w2 = this.zm(this.wY, this.wZ);
            var zx = parseFloat(Math.sqrt((l4 - yi) * (l4 - yi) + (l5 - yj) * (l5 - yj)));
            var tN = parseFloat(Math.sqrt((w1 - yi) * (w1 - yi) + (w2 - yj) * (w2 - yj))) + this.ux;
            if (tN <= (zx - this.ux)) {
                w1 = yi + tN * (l4 - yi) / zx;
                w2 = yj + tN * (l5 - yj) / zx;
                this.wZ = this.zg[this.p9 - 1] + tN * (this.zg[this.p9] - this.zg[this.p9 - 1]) / zx;
                this.wY = this.zf[this.p9 - 1] + tN * (this.zf[this.p9] - this.zf[this.p9 - 1]) / zx
            } else {
                w1 = l4;
                w2 = l5;
                this.wZ = this.zg[this.p9];
                this.wY = this.zf[this.p9];
                this.p9++
            }
            if (this.nT == 0) {
                this.pid.icon.div.style.top = (w2 - parseFloat(this.pid.icon.div.style.height)) + "px";
                this.pid.icon.div.style.left = (w1 - parseFloat(this.pid.icon.div.style.width) / 2) + "px"
            }
            if (this.nT == 1 && rs) {
                this.sF.div.style.top = parseFloat(this.sF.div.style.top) + this.ux;
                this.vh = getTimeout(this, this.doEmulation, 100)
            } else {
                if (w1 < 0) {
                    this.panTo(this.width / 2, this.height / 2 - w2, "maplet.doEmulation()")
                } else if (w1 > this.width) {
                    this.panTo(-this.width / 2, this.height / 2 - w2, "maplet.doEmulation()")
                } else if (w2 < 0) {
                    this.panTo(this.width / 2 - w1, this.height / 2, "maplet.doEmulation()")
                } else if (w2 > this.height) {
                    this.panTo(this.width / 2 - w1, -this.height / 2, "maplet.doEmulation()")
                } else {
                    this.vh = getTimeout(this, this.doEmulation, 10)
                }
            }
        } else {
            this.vh = null;
            this.zf = null;
            this.zg = null;
            this.pid.icon.div.style.zIndex = 1;
            if (this.lY) {
                if (this.lY.parentNode) {
                    this.lY.parentNode.removeChild(this.lY);
                    this.lY = null
                }
            }
            this.setRotation(0);
            this.refresh();
            if (this.lX != null || this.lX != "undefined") {
                this.lX()
            }
        }
    } catch (nf) {
    }
}, stopEmulation: function () {
    if (this.p9 && this.zf)this.p9 = this.zf.length
}, getMarkersInPolygon: function (G833) {
    var sIp = [];
    var pts = [];
    for (var i = 0; i < G833.pts.length; i++) {
        pts.push({x: G833.pts[i].mapX, y: G833.pts[i].mapY})
    }
    var cJg8 = this.getMarkers();
    for (var i = 0; i < cJg8.length; i++) {
        var pt = {x: cJg8[i].pt.mapX, y: cJg8[i].pt.mapY};
        if (_isInsidePolygon(pt, pts))sIp.push(cJg8[i])
    }
    return sIp
}, getMarkerPolygons: function (jB840) {
    var v717 = this.getPolylines(2);
    var sIp = [];
    if (v717.length > 0) {
        var pt = {x: jB840.pt.mapX, y: jB840.pt.mapY};
        for (var i = 0; i < v717.length; i++) {
            var pts = [];
            var G833 = v717[i];
            for (var k3n1 = 0; k3n1 < G833.pts.length; k3n1++)pts.push({x: G833.pts[k3n1].mapX, y: G833.pts[k3n1].mapY});
            if (_isInsidePolygon(pt, pts))sIp.push(G833)
        }
    }
    return sIp
}, C92: function (x, y) {
    return this.pdp[(x % 2) < 0 ? 0 : x % 2][(y % 2) < 0 ? 0 : y % 2]
}, xf7: function (detail) {
    var w = parseInt(this.HAw82.Wp6[0].style.borderTopWidth);
    if (this.HAw82.yN != null && ((detail < 0 && w == 0) || (detail > 0 && w == 2))) {
        return
    }
    var QJg3 = {left: this.moveX, top: this.moveY};
    var size = null;
    var fun = null;
    if (detail < 0) {
        fun = this.jHR;
        size = this.HAw82.GC3p9;
        this.M6I6M(true)
    } else {
        fun = this.T4Gy;
        size = this.HAw82.Qkv;
        this.M6I6M(false)
    }
    QJg3.left -= size.width / 2;
    QJg3.top -= size.height / 2;
    this.ly20K(true, size, QJg3);
    this.HAw82.yN = getTimeout(this, fun, this.HAw82.interval)
}, M6I6M: function (zoomout) {
    var Wp6 = this.HAw82.Wp6;
    if (zoomout) {
        Wp6[0].style.borderWidth = "0px 2px 2px 0px";
        Wp6[1].style.borderWidth = "0px 0px 2px 2px";
        Wp6[2].style.borderWidth = "2px 2px 0px 0px";
        Wp6[3].style.borderWidth = "2px 0px 0px 2px"
    } else {
        Wp6[0].style.borderWidth = "2px 0px 0px 2px";
        Wp6[1].style.borderWidth = "2px 2px 0px 0px";
        Wp6[2].style.borderWidth = "0px 0px 2px 2px";
        Wp6[3].style.borderWidth = "0px 2px 2px 0px"
    }
}, T4Gy: function () {
    this.JO31(false)
}, jHR: function () {
    this.JO31(true)
}, JO31: function (zoomout) {
    if (this.HAw82.Ye8 <= this.HAw82._MF) {
        var c = this.HAw82.container;
        var xd = this.HAw82.xd * this.HAw82.Ye8;
        var jvO7B = c.offsetWidth * xd;
        c.style.left = (zoomout ? c.offsetLeft + jvO7B / 2 : c.offsetLeft - jvO7B / 2) + "px";
        c.style.width = (zoomout ? c.offsetWidth - jvO7B : c.offsetWidth + jvO7B) + "px";
        jvO7B = c.offsetHeight * xd;
        c.style.top = (zoomout ? c.offsetTop + jvO7B / 2 : c.offsetTop - jvO7B / 2) + "px";
        c.style.height = (zoomout ? c.offsetHeight - jvO7B : c.offsetHeight + jvO7B) + "px";
        this.ONEA0();
        this.HAw82.Ye8++;
        this.HAw82.yN = getTimeout(this, (zoomout ? this.jHR : this.T4Gy), this.HAw82.interval - this.HAw82.interval * this.HAw82.xd)
    } else {
        this.ly20K(false)
    }
}, ONEA0: function () {
    var c = this.HAw82.container;
    var i = 4;
    var w = c.offsetWidth;
    var h = c.offsetHeight;
    this.HAw82.Wp6[1].style.left = w - i + "px";
    this.HAw82.Wp6[2].style.top = h - i + "px";
    this.HAw82.Wp6[3].style.left = w - i + "px";
    this.HAw82.Wp6[3].style.top = h - i + "px"
}, ly20K: function (visible, size, QJg3) {
    var c = this.HAw82.container;
    c.style.left = "100px";
    c.style.top = "100px";
    if (this.HAw82.yN) {
        window.clearTimeout(this.HAw82.yN);
        this.HAw82.yN = null
    }
    this.HAw82.Ye8 = 1;
    this.HAw82.container.style.display = visible ? "" : "none";
    var c = this.HAw82.container;
    if (typeof QJg3 == "object" && QJg3) {
        c.style.left = QJg3.left + "px";
        c.style.top = QJg3.top + "px"
    }
    if (typeof size == "object" && size) {
        c.style.width = size.width + "px";
        c.style.height = size.height + "px";
        this.ONEA0()
    }
}, getControlRect: function () {
    var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}};
    if (this.controlCanvas) {
        with (this.controlCanvas) {
            var f2yF7 = getRect();
            if (isVisible()) {
                r.min = f2yF7.kEP7;
                r.max = f2yF7.bxj
            }
        }
    }
    return r
}, getOverviewRect: function () {
    var r = {min: {x: 0, y: 0}, max: {x: 0, y: 0}};
    if (this.overview)r = this.overview.getRect();
    if (r.min.x == 0 && r.max.x == 0)r = {min: {x: this.width, y: this.height}, max: {x: this.width, y: this.height}};
    return r
}, X9i: function (rect, I53l, Y_cq) {
    if (typeof I53l != "boolean")I53l = true;
    if (typeof Y_cq != "boolean")Y_cq = true;
    var ix = rect.$7AJ;
    var iy = rect.niX;
    var ax = rect.N4k4;
    var ay = rect.$sk;
    var vj = 0;
    var vk = 0;
    var PDOI = 0;
    var h99eL = 0;
    var fEkN = this.width;
    var Uh82k = this.height;
    if (I53l || Y_cq) {
        var r = {min: {x: rect.$7AJ, y: rect.niX}, max: {x: rect.N4k4, y: rect.$sk}, width: rect.N4k4 - rect.$7AJ, height: rect.$sk - rect.niX};
        var uH9, l, yw;
        if (Y_cq && this.controlCanvas) {
            var i7P8$ = this.getControlRect();
            uH9 = this.controlCanvas.options.location;
            l = (uH9.type == Maplet.LEFT_TOP || uH9.type == Maplet.LEFT_BOTTOM);
            yw = (uH9.type == Maplet.LEFT_TOP || uH9.type == Maplet.RIGHT_TOP);
            if (_isRectint(r, i7P8$)) {
                if (l) {
                    PDOI = i7P8$.max.x
                } else fEkN = i7P8$.min.x
            } else {
                if (l) {
                    if (yw && r.min.x < i7P8$.max.x && (r.min.y < i7P8$.max.y || (r.height > this.height - i7P8$.max.y))) {
                        PDOI = i7P8$.max.x
                    } else if (!yw && r.min.x < i7P8$.max.x && (r.max.y > i7P8$.min.y || (r.height > i7P8$.min.y))) {
                        PDOI = i7P8$.max.x
                    }
                } else {
                    if (yw && r.max.x > i7P8$.min.x && (r.min.y < i7P8$.max.y || (r.height > this.height - i7P8$.max.y))) {
                        fEkN = i7P8$.min.x
                    } else if (!yw && r.max.x > i7P8$.min.x && (r.max.y > i7P8$.min.y || (r.height > i7P8$.min.y))) {
                        fEkN = i7P8$.min.x
                    }
                }
            }
        }
        if (I53l && this.overview) {
            var IR6P = this.getOverviewRect();
            uH9 = this.overview.location;
            l = (uH9.type == Maplet.LEFT_TOP || uH9.type == Maplet.LEFT_BOTTOM);
            yw = (uH9.type == Maplet.LEFT_TOP || uH9.type == Maplet.RIGHT_TOP);
            if (_isRectint(r, IR6P)) {
                if (l)PDOI = Math.max(PDOI, IR6P.max.x); else fEkN = Math.min(fEkN, IR6P.min.x)
            } else {
                if (l) {
                    if (yw && r.min.x < IR6P.max.x && (r.min.y < IR6P.max.y || (r.height > this.height - IR6P.max.y))) {
                        PDOI = Math.max(PDOI, IR6P.max.x)
                    } else if (!yw && r.min.x < IR6P.max.x && (r.max.y > IR6P.min.y || (r.height > IR6P.min.y))) {
                        PDOI = Math.max(PDOI, IR6P.max.x)
                    }
                } else {
                    if (yw && r.max.x > IR6P.min.x && (r.min.y < IR6P.max.y || (r.height > this.height - IR6P.max.y))) {
                        fEkN = Math.min(fEkN, IR6P.min.x)
                    } else if (!yw && r.max.x > IR6P.min.x && (r.max.y > IR6P.min.y || (r.height > IR6P.min.y))) {
                        fEkN = Math.min(fEkN, IR6P.min.x)
                    }
                }
            }
        }
    }
    if (ix < PDOI)vj = ix - PDOI;
    if (iy < h99eL)vk = iy - h99eL;
    if (ax > fEkN) {
        if (vj == 0)vj = ax - fEkN; else vj = 0
    }
    if (ay > Uh82k) {
        if (vk == 0)vk = ay - Uh82k; else vk = 0
    }
    return{_0S: vj, _9Od9: vk}
}, H0pR8: function (rect, J364) {
    if (typeof J364 != "object" || !J364)J364 = {I53l: true, Y_cq: true, CF41: true};
    var dGC1n = this.X9i(rect, J364.I53l, J364.Y_cq, J364.CF41);
    var FB14 = dGC1n._0S;
    var E_25 = dGC1n._9Od9;
    if (FB14 != 0 || E_25 != 0) {
        if (typeof rect.e2S != "number")rect.e2S = 0;
        if (typeof rect.Cf2m7 != "number")rect.Cf2m7 = 0;
        if (FB14 != 0)FB14 = (FB14 < 0 ? FB14 - rect.e2S : FB14 + rect.e2S);
        if (E_25 != 0)E_25 = (E_25 < 0 ? E_25 - rect.Cf2m7 : E_25 + rect.Cf2m7);
        maplet.panTo(-FB14, -E_25)
    }
    return dGC1n
}, viewOverlay: function (overlay, Y5P, oR12) {
    var s = overlay.toString();
    var $q2E = s.indexOf("MMarker") != -1;
    var R109 = s.indexOf("MPolyline") != -1;
    var t3vPp = s.indexOf("MEllipse") != -1;
    var F7RF = s.indexOf("MRoundRect") != -1;
    var ix = 0, iy = 0, ax = 0, ay = 0;
    if ($q2E && overlay.icon) {
        var S5JSl = overlay;
        ix = S5JSl.pt.mapX - S5JSl.icon.anchorX;
        iy = S5JSl.pt.mapY - S5JSl.icon.anchorY;
        ax = ix + parseInt(S5JSl.icon.div.style.width);
        ay = iy + parseInt(S5JSl.icon.div.style.height)
    } else if (R109) {
        var O5g = overlay.getCenterXY();
        ix = O5g.x - 16;
        iy = O5g.y - 16;
        ax = ix + 32;
        ay = iy + 32
    } else if (t3vPp) {
        ix = overlay.gC.mapX - 16;
        iy = overlay.gC.mapY - 16;
        ax = ix + 32;
        ay = iy + 32
    } else if (F7RF) {
        var W1Q1H = overlay.getCenterXY();
        ix = W1Q1H.x - 16;
        iy = W1Q1H.y - 16;
        ax = ix + 32;
        ay = iy + 32
    }
    return this.H0pR8({$7AJ: ix, niX: iy, N4k4: ax, $sk: ay, e2S: Y5P, Cf2m7: oR12})
}, a62: function () {
    this.u_5 = new fD("LayerContainer", 0, 0, this.width, this.height, true, 2, '', this.sF)
}, oA2Ii: function () {
    for (var i in this.layerData) {
        this.layerData[i] = null;
        delete this.layerData[i]
    }
}, getImgByXY: function (x, y, BE8) {
    if (typeof BE8 != "boolean")BE8 = false;
    var img = this.pU[((this.AG).toString(16) + (this.gD).toString(16) + 'l' + (this.gE).toString(16)).toLowerCase()];
    if (typeof img == "object" && img) {
        var ix = Math.floor((x - parseInt(img.style.left)) / this.imgWidth);
        var iy = -Math.floor((y - parseInt(img.style.top) + (BE8 ? w8[this.AG] : 0)) / this.imgHeight);
        return((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase()
    }
    return null
}, $T9R7: function (visible, left, top) {
    with (this.w41r9) {
        if (typeof left != "undefined")fC.div.style.left = left + "px";
        if (typeof top != "undefined")fC.div.style.top = top + "px";
        if (fC.div.parentNode != this.panel) {
            this.panel.appendChild(fC.div);
            fC.div.style.zIndex = 2
        }
        if (fC.div.style.display != (visible ? "" : "none")) {
            fC.div.style.display = (visible ? "" : "none")
        }
        if (overlay) {
            overlay.$HwrS();
            overlay = null
        }
    }
}, B7aNf: function () {
    if (!this.Nw$) {
        this.Nw$ = document.createElement("div");
        this.Nw$.id = HMum5 ? 'vCanvasSVG' : 'vCanvasVML';
        this.Nw$.style.position = "absolute";
        this.Nw$.unselectable = "on";
        this.Nw$.style.zIndex = 0;
        this.Nw$.style.MozUserSelect = "none";
        this.lA.appendChild(this.Nw$);
        if (HMum5) {
            var tG7 = this.tG7 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            tG7.setAttribute("id", "LayerDrawSVG");
            tG7.setAttribute("version", "1.1");
            tG7.setAttribute("overflow", "visible");
            tG7.setAttribute("viewBox", "-" + this.width + " -" + this.height + " " + this.width * 3 + " " + this.height * 3);
            tG7.setAttribute("style", "position: absolute; left: -" + this.width + "px; top: -" + this.height + "px; z-index: 0;");
            tG7.setAttribute("height", this.height * 3 + "px");
            tG7.setAttribute("width", this.width * 3 + "px");
            tG7.setAttribute(Ux3q, "true");
            var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
            arrow.setAttribute("d", px ? "M 0 0 L 40 20 L 0 40 L 16 20 Z" : "M 0 0 L 10 5 L 0 10 L 4 5 z");
            arrow.setAttribute("fill", this.brush.color);
            arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
            var zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
            zY.setAttribute("id", "svgArrow");
            zY.setAttribute("viewBox", px ? "0 0 40 40" : "0 0 10 10");
            zY.setAttribute("refX", px ? "24" : "6");
            zY.setAttribute("refY", px ? "20" : "5");
            zY.setAttribute("markerUnits", "strokeWidth");
            zY.setAttribute("orient", "auto");
            zY.appendChild(arrow);
            tG7.appendChild(zY);
            this.Nw$.appendChild(tG7)
        }
    }
    return this.Nw$
}, u5B: function (x, y) {
    if (this.NXn > this.ignoreMoveRange || this.NXn < -this.ignoreMoveRange) {
        x = Math.abs(x);
        if (this.NXn < 0)this.NXn = Math.abs(this.NXn)
    }
    this.NXn += x;
    if (this.$839 > this.ignoreMoveRange || this.$839 < -this.ignoreMoveRange) {
        y = Math.abs(y);
        if (this.$839 < 0)this.$839 = Math.abs(this.$839)
    }
    this.$839 += y
}, autoZoomLogo: function () {
}, clearMeasurePaths: function () {
    if (this.wtd.length > 0) {
        for (var i = 0; i < this.wtd.length; i++)this.removeMeasurePath(i, false)
    }
    this.wtd = []
}, removeMeasurePath: function (pn, removeItem) {
    if (this.wtd.length > pn) {
        if (typeof removeItem != "boolean")removeItem = true;
        var path = this.wtd[pn];
        if (path.O698) {
            MEvent.removeBuiltInListener(path.O698, "click", path.q9);
            path.O698 = null
        }
        for (var i = 0; i < path.diep.length; i++) {
            var n74e = path.diep[i];
            n74e.marker.finalize();
            n74e.marker = null;
            n74e.point = null
        }
        if (path.wq2p) {
            path.wq2p.finalize();
            path.wq2p = null
        }
        if (removeItem)_removeArrayItem(this.wtd, pn, pn)
    }
}, _V7: function (pt, start) {
    if (typeof start != "boolean")start = false;
    var k__6 = this.isHeX;
    var D28S = null;
    if (start) {
        D28S = {diep: [], wq2p: null};
        if (this.wtd.length == 0)this.wtd[0] = D28S; else this.wtd.push(D28S)
    } else {
        D28S = this.wtd[this.wtd.length - 1]
    }
    var e29 = 0;
    var tip = "";
    if (D28S.diep.length > 0) {
        var AF1 = D28S.diep[D28S.diep.length - 1];
        if (AF1.point._galt() == pt._galt() && AF1.point._galn() == pt._galn())return;
        e29 = this.measDistance([AF1.point, pt]);
        e29 = AF1.L1tq + e29;
        tip = k__6.TP68E.replace(k__6.SU_, (e29 < 1000) ? e29 + "\u7c73" : parseInt(e29 / 100) / 10 + "\u516c\u91cc")
    } else {
        tip = k__6.Y192
    }
    tip = k__6.tip.replace(k__6.MBn4, tip);
    var S5JSl = new MMarker(pt, new MIcon(k__6.fbN1j, 11, 11), null, new MLabel(tip, 15, undefined, undefined, {enableStyle: false}));
    S5JSl.autoHide = false;
    S5JSl.creator = MLayer.SYSTEM;
    this.addOverlay(S5JSl);
    D28S.diep.push({point: pt, L1tq: e29, marker: S5JSl})
}, closeMeasureCurrPath: function () {
    if (this.wtd.length == 0)return;
    var e29 = 0;
    var pts = [];
    var D28S = this.wtd[this.wtd.length - 1];
    var k__6 = this.isHeX;
    if (D28S.wq2p)return;
    if (D28S.diep.length == 1) {
        this.removeMeasurePath(this.wtd.length - 1);
        return
    }
    for (var i = 0; i < D28S.diep.length; i++) {
        pts.push(D28S.diep[i].point);
        if (i == D28S.diep.length - 1)e29 = D28S.diep[i].L1tq
    }
    var wq2p = new MPolyline(pts, k__6.SSW);
    wq2p.creator = MLayer.SYSTEM;
    this.addOverlay(wq2p);
    var tip = k__6.tS0x5.replace(k__6.SU_, (e29 < 1000) ? e29 + "\u7c73" : parseInt(e29 / 100) / 10 + "\u516c\u91cc");
    tip = k__6.tip.replace(k__6.MBn4, tip);
    var marker = D28S.diep[D28S.diep.length - 1].marker;
    marker.label.resetLabel({content: tip});
    D28S.O698 = marker.label.div.firstChild.firstChild.firstChild;
    D28S.q9 = MEvent.bindDom(D28S.O698, "click", this, this.N03);
    D28S.wq2p = wq2p
}, N03: function (e) {
    tM8(e);
    for (var i = 0; i < this.wtd.length; i++) {
        if (e.target == this.wtd[i].O698) {
            this.removeMeasurePath(i)
        }
    }
}};
Maplet.prototype.toString = function () {
    return "com.mapbar.maplet.Maplet"
};
Maplet.prototype.setIwStdSize = function (w, h) {
    if (typeof w != "number")w = 260;
    if (typeof h != "number")h = 240;
    if (w < avBubble.minWidth)w = avBubble.minWidth;
    if (h < avBubble.minHeight)h = avBubble.minHeight;
    avBubble.width = w;
    avBubble.height = h
};
Maplet.prototype.setIwZoomInSize = function (w, h) {
    if (typeof w != "number")w = "";
    if (typeof h != "number")h = "";
    if (w < avBubble.width)w = "";
    if (h < avBubble.height)h = "";
    avBubble.H8Y0 = w;
    avBubble.lJ0m = h
};
Maplet.prototype.addLayer = function (layer) {
    if (layer && layer instanceof MLayer) {
        if (!this.qS[layer.id]) {
            layer.initialize(this);
            this.qS[layer.id] = layer;
            var i = layer.options.zindex + 10;
            if (typeof this.M0D[i] != "undefined") {
                this.M0D[i].push(layer)
            } else {
                this.M0D[i] = [layer]
            }
            this.refresh()
        }
    } else {
        return false
    }
    return true
};
Maplet.prototype.removeLayer = function (layer, finalize) {
    if (typeof finalize != "boolean")finalize = false;
    if (layer && layer instanceof MLayer && this.qS[layer.id] && typeof layer.remove == "function") {
        if (this.$5Sn && this.$70 == layer) {
            if (MEvent.contains(this, "layer_mouseout") > 0) {
                MEvent.trigger(this, "layer_mouseout", {layer: this.$70, pid: this.$5Sn.p, area: this.$5Sn.l, data: this.$5Sn.d, name: this.$5Sn.n, rect: this.$5Sn.rect})
            }
            this.$5Sn = null;
            this.$70 = null
        }
        this.qS[layer.id].remove(finalize);
        this.qS[layer.id] = null;
        delete this.qS[layer.id];
        var pn = layer.options.zindex + 10;
        if (typeof this.M0D[pn] != "undefined") {
            var a = this.M0D[pn];
            if (a.length == 1) {
                this.M0D[pn] = undefined
            } else {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] == layer) {
                        a.splice(i, 1)
                    }
                }
            }
        }
    }
};
Maplet.prototype.clearLayers = function (finalize) {
    if (!this.u_5)return;
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER)this.removeLayer(this.qS[i], finalize)
    }
    if (!this.traffic && !this.d54) {
        this.u_5.clear();
        _removeNode(this.u_5.div);
        this.u_5 = null;
        this.M0D = []
    }
};
Maplet.prototype.getLayers = function () {
    var qS = [];
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER)qS.push(this.qS[i])
    }
    return qS
};
Maplet.prototype.vq6 = function (layer) {
    if (typeof layer == "object" && layer && layer instanceof MLayer) {
        for (var i = this.M0D.length - 1; i >= 0; i--) {
            if (typeof this.M0D[i] != "undefined") {
                var c = this.M0D[i];
                for (var k3n1 = c.length - 1; k3n1 >= 0; k3n1--) {
                    if (c[k3n1] == layer) {
                        if (c.length == 1)this.M0D[i] = undefined; else c.splice(k3n1, 1)
                    }
                }
            }
        }
        var i = layer.options.zindex + 10;
        if (typeof this.M0D[i] != "undefined") {
            this.M0D[i].push(layer)
        } else {
            this.M0D[i] = [layer]
        }
    }
};
Maplet.prototype.setLayerDataPassiveUrl = function (url) {
    if (typeof url != "string" || !url)return;
    this.layerDataPassiveUrl = url
};
Maplet.prototype.loadLayerDataOfPassiveMode = function (grid) {
    if (this.layerData[grid] && this.layerData[grid].passiveLoadStatus == Maplet.UNLOAD) {
        if (!this.layerDataPassiveUrl) {
            this.layerData[grid].passiveLoadStatus = Maplet.gqQ_R;
            return
        } else {
            this.layerData[grid].passiveLoadStatus = Maplet.LOADING
        }
        var L396V = this.layerData[grid];
        var s689$ = [];
        for (var i in this.qS) {
            var layer = this.qS[i];
            if (layer.options.needData && layer.inZoomRange(this.AG) && layer.options.dataLoadMode == MLayer.DL_PASSIVE && !layer.data[grid] && layer.g8n82[grid]) {
                if (layer.options.serverPathType == MLayer.PT_COMBINER)s689$.push("[" + layer.options.combinerParas + "|" + layer.EM6() + "]"); else s689$.push(layer.EM6())
            }
        }
        if (s689$.length > 0) {
            new iBl8Y(this.layerDataPassiveUrl + "?n=" + s689$.join(";") + "&p=" + sI[this.AG] + "/" + L396V.dirname + "/" + L396V.xyname + ".js&g=" + grid, this.iS45, false, true, this, undefined, [grid]).PYl()
        } else {
            this.layerData[grid].passiveLoadStatus = Maplet.LOADED
        }
    }
};
Maplet.prototype.iS45 = function (grid, Y85) {
    if (this.layerData[grid]) {
        var g = this.layerData[grid];
        g.passiveLoadStatus = Maplet.LOADED;
        var Nq440 = "__lgd" + grid;
        var uy = eval("typeof " + Nq440 + "==\"undefined\"?null:" + Nq440);
        if (uy) {
            for (var i in this.qS) {
                var l = this.qS[i];
                Nq440 = l.EM6() + g.dirname + "_" + g.xyname;
                if (typeof uy[Nq440] == "object" && uy)l.N0PA(grid, uy[Nq440])
            }
            uy = null
        }
    }
    _removeNode(aa(Y85))
};
Maplet.prototype.addPanel = function (panel) {
    if (panel && panel instanceof MPanel) {
        if (this.ht4D[panel.id])return true;
        panel.initialize(this);
        this.ht4D[panel.id] = panel
    } else {
        return false
    }
};
Maplet.prototype.removePanel = function (panel, finalize) {
    if (typeof finalize != "boolean")finalize = false;
    if (typeof panel == "object") {
        if (this.ht4D[panel.id]) {
            panel.remove(finalize);
            this.ht4D[panel.id] = null;
            delete this.ht4D[panel.id]
        } else if (typeof panel.remove == "function") {
            panel.remove(finalize)
        }
    } else if (typeof panel == "string") {
        if (this.ht4D[panel]) {
            this.ht4D[panel].remove(finalize);
            this.ht4D[panel] = null;
            delete this.ht4D[panel]
        }
    }
};
Maplet.prototype.getPanels = function () {
    var ht4D = [];
    for (var i in this.ht4D) {
        if (this.ht4D[i].options.creator == MPanel.USER)ht4D.push(this.ht4D[i])
    }
    return ht4D
};
Maplet.prototype.clearPanels = function (finalize) {
    for (var i in this.ht4D) {
        if (this.ht4D[i].options.creator == MPanel.USER)this.removePanel(this.ht4D[i], finalize)
    }
};
Maplet.prototype.addOverlay = function (overlay) {
    if (typeof overlay == "object") {
        if (this.u5[overlay.id]) {
            return
        }
        overlay.initialize(this);
        this.u5[overlay.id] = overlay;
        this.u5.length++
    }
};
Maplet.prototype.getZoomLevel = function () {
    return this.AG
};
Maplet.prototype.clearOverlays = function (finalize) {
    if (typeof finalize != "boolean")finalize = false;
    this.hideBubble(this);
    for (var id in this.u5) {
        var w9L = this.u5[id];
        if (w9L && w9L.remove && w9L.creator == MLayer.USER) {
            w9L.remove(finalize);
            this.u5[id] = null;
            w9L = null;
            delete this.u5[id]
        }
    }
};
Maplet.prototype.removeOverlay = function (overlay, finalize) {
    if (typeof finalize != "boolean")finalize = false;
    if (typeof overlay == "object") {
        if (this.u5[overlay.id]) {
            this.u5[overlay.id].remove(finalize);
            this.u5[overlay.id] = null;
            delete this.u5[overlay.id];
            this.u5.length--
        } else if (typeof overlay.remove == "function") {
            overlay.remove(finalize)
        }
    } else if (typeof overlay == "string" && overlay != 'length') {
        if (this.u5[overlay]) {
            this.u5[overlay].remove(finalize);
            this.u5[overlay] = null;
            delete this.u5[overlay];
            this.u5.length--
        }
    }
};
Maplet.prototype.clearCache = function () {
    cq.pu = null;
    cq.pu = {}
};
Maplet.prototype.setAutoZoom = function (min, max) {
    if (!min && !max && this.u5.length == 0)return;
    if (!this.bInitialized)return;
    if (_xY34(min)) {
        var c7 = this.getOverlaysBound(min);
        min = c7.min;
        max = c7.max
    }
    var rt = this.getFitZoomLevel(min, max);
    if (rt.center && rt.level) {
        this.centerAndZoom(rt.center, rt.level)
    } else {
        if (rt.center)this.setCenter(rt.center);
        if (rt.level)this.setZoomLevel(rt.level)
    }
};
Maplet.prototype.getFitZoomLevel = function (min, max) {
    var rt = {center: null, level: null};
    if ((min instanceof MPoint && !min._da68()) || (max instanceof MPoint && !max._da68()))return rt; else if ((typeof min == "string" && !min) && (typeof max == "string" && !max))return rt;
    if (typeof min == "string" && min) {
        min = new MPoint(min);
        if (!min._da68())return rt
    }
    if (typeof max == "string" && max) {
        max = new MPoint(max);
        if (!max._da68())return rt
    }
    var c6f$I, Ovn4b, r5kt, eg494;
    var pts = [];
    if (!min || !max) {
        for (var i in this.u5) {
            var w9L = this.u5[i];
            if (w9L instanceof MMarker) {
                pts.push(w9L.pt)
            } else if (w9L instanceof MPolyline) {
                for (var qC = 0; qC < w9L.pts.length; qC++) {
                    pts.push(w9L.pts[qC])
                }
            }
        }
    } else {
        pts.push(min);
        pts.push(max)
    }
    for (var i = 0; i < pts.length; i++) {
        var pt = pts[i];
        if (!i) {
            r5kt = c6f$I = pt._galn();
            eg494 = Ovn4b = pt._galt()
        } else {
            c6f$I = Math.min(c6f$I, pt._galn());
            Ovn4b = Math.min(Ovn4b, pt._galt());
            r5kt = Math.max(r5kt, pt._galn());
            eg494 = Math.max(eg494, pt._galt())
        }
    }
    if (!c6f$I) {
        c6f$I = r5kt = this.gA;
        Ovn4b = eg494 = this.gx
    }
    var size = this.getMaxBubbleSize();
    var ix = size.min.x, iy = size.max.y, ax = size.max.x, ay = size.min.y;
    var fy4 = this.zp(ix, iy);
    var s7m24 = this.zo(ix, iy);
    var b3I0 = this.zp(ax, ay);
    var P610 = this.zo(ax, ay);
    var jW0U7 = c6f$I > fy4 && Ovn4b > s7m24 && r5kt < b3I0 && eg494 < P610;
    var b = (r5kt - c6f$I < b3I0 - fy4) && (eg494 - Ovn4b < P610 - s7m24);
    if (!jW0U7 && !b) {
        for (var i = this.AG - 1; i >= MIN_ZOOM_LEVEL; i--) {
            fy4 = this.zp(ix, iy, i);
            s7m24 = this.zo(ix, iy, i);
            b3I0 = this.zp(ax, ay, i);
            P610 = this.zo(ax, ay, i);
            if ((r5kt - c6f$I < b3I0 - fy4) && (eg494 - Ovn4b < P610 - s7m24)) {
                rt.level = i;
                break
            }
        }
    } else if (this.AG < MAX_ZOOM_LEVEL && !(c6f$I == r5kt && Ovn4b == eg494)) {
        var E41 = false;
        for (var i = this.AG + 1; i <= MAX_ZOOM_LEVEL; i++) {
            fy4 = this.zp(ix, iy, i);
            s7m24 = this.zo(ix, iy, i);
            b3I0 = this.zp(ax, ay, i);
            P610 = this.zo(ax, ay, i);
            if ((r5kt - c6f$I > b3I0 - fy4) || (eg494 - Ovn4b > P610 - s7m24)) {
                if (i - 1 != this.AG)rt.level = i - 1;
                E41 = true;
                break
            }
        }
        if (!E41 && !rt.level)rt.level = MAX_ZOOM_LEVEL
    }
    if (!jW0U7 || rt.level)rt.center = new MPoint((c6f$I + r5kt) / 2, (Ovn4b + eg494) / 2, false);
    return rt
};
Maplet.prototype.getOverlaysBound = function (u5) {
    var pts = [];
    var c7 = {min: null, max: null};
    u5 = _xY34(u5) ? u5 : this.u5;
    for (var i in u5) {
        var w9L = u5[i];
        if (typeof w9L !== 'undefined' && w9L) {
            if (typeof w9L === 'string') {
                pts.push(new MPoint(w9L))
            } else if (w9L instanceof MPoint) {
                pts.push(w9L)
            } else if (w9L instanceof MMarker) {
                pts.push(w9L.pt)
            } else if (w9L instanceof MPolyline) {
                for (var qC = 0; qC < w9L.pts.length; qC++) {
                    pts.push(w9L.pts[qC])
                }
            }
        }
    }
    if (pts.length) {
        var c6f$I, Ovn4b, r5kt, eg494;
        for (var i = 0; i < pts.length; i++) {
            var pt = pts[i];
            if (!i) {
                r5kt = c6f$I = pt._galn();
                eg494 = Ovn4b = pt._galt()
            } else {
                c6f$I = Math.min(c6f$I, pt._galn());
                Ovn4b = Math.min(Ovn4b, pt._galt());
                r5kt = Math.max(r5kt, pt._galn());
                eg494 = Math.max(eg494, pt._galt())
            }
        }
        c7.min = new MPoint(c6f$I, Ovn4b, false);
        c7.min.initialize(this);
        c7.max = new MPoint(r5kt, eg494, false);
        c7.max.initialize(this)
    }
    return c7
};
Maplet.prototype.setZoomLevel = function (AB, fb, j692T) {
    AB = parseInt(AB);
    if (AB < MIN_ZOOM_LEVEL) {
        AB = MIN_ZOOM_LEVEL
    }
    if (AB > MAX_ZOOM_LEVEL) {
        AB = MAX_ZOOM_LEVEL
    }
    if (fb != undefined && !fb) {
        return AB
    }
    var Nr1 = false;
    if (this.markerDragAnimation) {
        with (this.w41r9) {
            if (overlay != null && !overlay.ls)this.$T9R7(false)
        }
    }
    if (AB != this.AG) {
        if (typeof j692T != "boolean" || j692T)this.PD7();
        Nr1 = true;
        for (var i in this.ht4D) {
            var p = this.ht4D[i];
            if (p.options.zoomhide && p.isVisible())p.setVisible(false)
        }
        this.lA.hide()
    } else {
        this.a2m95()
    }
    if (this.u_5)MLayer.setTipVisible(false);
    if (iToolTipStyle == 0)hideToolTipMenu();
    if (this.controlCanvas != null) {
        this.controlCanvas.update(AB)
    }
    if (this.gc != null) {
        for (var n8 in this.gc) {
            if (this.gc[n8].nR)this.gc[n8].nR.controlCanvas.div.update(AB)
        }
    }
    if (this.ff)this.nI().setZoomLevel(AB);
    if (ContentInfo && ContentInfo.isVisible()) {
        var Qp9 = this.toScreenCoordinate(avBubble.E6539);
        if (_isInsideRect({x: Qp9[0], y: Qp9[1]}, {min: {x: 0, y: 0}, max: {x: this.width, y: this.height}})) {
            this.N8Uw = "infowindow";
            this.$q506 = avBubble.E6539;
            this.Q6G8F = Qp9[0];
            this.t$qb7 = Qp9[1]
        }
    }
    this.eC_K = this.AG;
    this.AG = AB;
    this.xg = sj[this.AG];
    this.xf = qP[this.AG];
    this.sR = sI[this.AG] + "/";
    if (this.$q506 != "") {
        var g4 = this.Q6G8F - this.width / 2;
        var g5 = this.t$qb7 - this.height / 2;
        var Qp9 = this.toScreenCoordinate(this.$q506);
        var b04 = Qp9[0] - g4;
        var e$2 = Qp9[1] - g5;
        this.gA = this.zp(b04, e$2);
        this.gx = this.zo(b04, e$2);
        this.Q6G8F = -1;
        this.t$qb7 = -1;
        this.$q506 = "";
        this.N8Uw = ""
    }
    this.gD = Math.floor((this.gA) / this.xg);
    this.gE = Math.floor((this.gx) / this.xf);
    if (this.gD < 0)this.gD += 1;
    this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
    if (this.gx >= 0) {
        this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    } else {
        this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    }
    this.jx6();
    this.refresh();
    if (Nr1) {
        if (apiType == 1)MEvent.trigger(this, "zoom", AB); else MEvent.trigger(this, "zoom", "&act=zoom&zm=" + AB);
        var YT2 = this.eC_K > this.AG ? 'zoomout' : 'zoomin';
        MEvent.trigger(this, YT2, this.AG)
    }
    this.lA.show();
    if (this.u_5)this.u_5.setVisible(true);
    for (var i in this.ht4D) {
        var p = this.ht4D[i];
        if (p.options.zoomhide && !p.isVisible() && !p.Y2837.N$UU1)p.setVisible(true)
    }
};
Maplet.prototype.setCenter = function (lf, li, fb, EX0) {
    if (!this.C1_o) {
        this.no();
        this.C1_o = true
    }
    var xR = lf;
    if (typeof lf == "object") {
        if (!lf.encrypt && !lf.pid) {
            if (!lf.maplet)lf.initialize(this);
            if (!lf.pid)lf.getPid()
        }
        xR = lf.pid
    }
    if (isNaN(parseFloat(xR)) || (typeof xR == "string" && xR.indexOf(',') > 0)) {
        var lh = cq.vp(xR);
        lf = lh[1];
        li = lh[0]
    }
    this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(lf)));
    this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(li) % 360));
    if (typeof basepoilist != "object" && !this.wB3 && this.h0D)this.h0D = false;
    if (fb == undefined || fb) {
        this.setZoomLevel(this.AG)
    }
    if (EX0 == undefined || EX0) {
        if (apiType == 1) {
            MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)))
        } else {
            MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2))
        }
    }
};
Maplet.prototype.moveTo = function (left, top) {
    this.top = parseInt(top);
    this.left = parseInt(left);
    this.panel.style.top = parseInt(top) + "px";
    this.panel.style.left = parseInt(left) + "px"
};
Maplet.prototype.getCenter = function () {
    if (apiType == 1) {
        return new MPoint(this.getCurrentMap().split(",").slice(1, 3).join(","))
    } else {
        return this.getCurrentMap().split(",")[1]
    }
};
Maplet.prototype.enableTraffic = function (options) {
    if (typeof options != "object" || !options)options = {};
    if (!this.traffic) {
        this.traffic = new MTraffic(options);
        this.traffic.initialize(this)
    }
    return this.traffic
};
Maplet.prototype.disableTraffic = function () {
    if (this.traffic) {
        this.traffic.remove(true);
        this.traffic = null
    }
};
Maplet.prototype.enablePOILayer = function (options) {
    if (typeof options != "object" || !options)options = {};
    if (!this.d54) {
        this.d54 = new MPOILayer(options);
        this.d54.initialize(this)
    }
    return this.d54
};
Maplet.prototype.disablePOILayer = function () {
    if (this.d54) {
        this.d54.remove(true);
        this.d54 = null
    }
};
Maplet.prototype.resize = function (w, h) {
    w = parseInt(w);
    h = parseInt(h);
    if (w < 0 || h < 0)return;
    if (w == this.width && h == this.height)return;
    aa("myalert").style.display = "none";
    if (this.snapshotBox.isVisible())this.snapshotBox.hide();
    if (this.xc)this.xc.hide();
    this.hideBubble();
    this.width = w;
    this.height = h;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.panel.style.width = w + "px";
    this.panel.style.height = h + "px";
    this.panel.style.clip = 'rect(0px,' + this.width + 'px,' + this.height + 'px, 0px)';
    this.sF.resize(w, h);
    this.sE.resize(w, h);
    this.vx.resize(w, h);
    if (this.u_5) {
        this.u_5.resize(w, h);
        for (var i in this.qS) {
            this.qS[i].resize(w, h)
        }
    }
    if (this.ff) {
        this.nI().resize(h);
        this.nI().moveTo(this.width - 16, 0)
    }
    this.rb4();
    this.onresize();
    var An = (navigator.appVersion.match(new RegExp("6.", "i")) == '6.') ? 0 : 2;
    this.lA.resize(w, h);
    this.setZoomLevel(this.AG);
    if (this.u_5) {
        for (var i in this.qS)this.qS[i].refreshDataXY()
    }
    for (var pf in this.gc) {
        if (this.gc[pf] && this.gc[pf].onresize) {
            this.gc[pf].onresize(this)
        }
    }
    this.overview.onresize()
};
Maplet.prototype.zoomIn = function () {
    if (this.AG >= MAX_ZOOM_LEVEL)return;
    if (ContentInfo && ContentInfo.isVisible())this.setZoomLevel(this.AG + 1); else this.zoomTo(Math.min(MAX_ZOOM_LEVEL, this.AG + 1))
};
Maplet.prototype.zoomOut = function () {
    if (this.AG <= MIN_ZOOM_LEVEL)return;
    if (ContentInfo && ContentInfo.isVisible())this.setZoomLevel(this.AG - 1); else this.zoomTo(Math.max(0, this.AG - 1))
};
Maplet.prototype.centerAndZoom = function (pt, AB) {
    this.setCenter(pt, "", false);
    if (typeof this.sF == "undefined") {
        this.AG = this.setZoomLevel(AB, false);
        this.showMap()
    } else {
        this.setZoomLevel(AB)
    }
};
Maplet.prototype.zoomTo = function (qB, fy, x, y) {
    if (fy) {
        this.fy = fy
    }
    ;
    if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
        if (this.AZ != null) {
            clearTimeout(this.AZ)
        }
        ;
        this.AZ = null;
        if (typeof qB != "undefined") {
            this.AT = parseInt(qB);
            if (typeof x == "undefined") {
                this.vc = 0
            } else {
                this.vc = parseInt(x)
            }
            if (typeof y == "undefined") {
                this.vd = 0
            } else {
                this.vd = parseInt(y)
            }
            this.AZ = getTimeout(this, this.zoomTo, 200)
        } else {
            var vG = new Number();
            if (this.AT > this.getZoomLevel()) {
                if (this.AS <= (this.AT - this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() + this.AY
                    } else {
                        this.AS += this.AY
                    }
                    vG = (this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * vG, 2 * this.vd * vG);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible())ContentInfo.setVisible(avBubble.s277u());
                        eval(this.fy)
                    }
                }
            } else if (this.AT < this.getZoomLevel()) {
                if (this.AS == -1 || this.AS >= (this.AT + this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() - this.AY
                    } else {
                        this.AS -= this.AY
                    }
                    vG = Math.abs(this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * vG, 2 * this.vd * vG);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible())ContentInfo.setVisible(avBubble.s277u());
                        eval(this.fy)
                    }
                }
            }
        }
    } else {
        this.setZoomLevel(qB)
    }
};
Maplet.prototype.panTo = function (x, y, fy) {
    if (this.fa)return;
    this.xoffset = parseFloat(x);
    this.yoffset = parseFloat(y);
    this.Aq = 0;
    this.Aw = 0;
    this.fy = fy;
    this.ve = this.zo(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.vf = this.zp(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.va = parseInt(Math.sqrt(this.xoffset * this.xoffset + this.yoffset * this.yoffset));
    if (!this.fa) {
        this.doPan()
    }
};
Maplet.prototype.toMapCoordinate = function (x, y) {
    cq.li = this.zp(x, y);
    cq.lf = this.zo(x, y);
    return cq.zn()
};
Maplet.prototype.toScreenCoordinate = function (xQ) {
    var Qp9 = [null, null];
    try {
        var AVH = cq.vp(xQ);
        Qp9[0] = this.zl(AVH[0], AVH[1]);
        Qp9[1] = this.zm(AVH[1], AVH[0])
    } catch (e) {
        throw e
    }
    return Qp9
};
Maplet.prototype.showLogo = function (c2) {
    if (c2) {
        this.$374j.style.display = "block"
    } else {
        this.$374j.style.display = "none"
    }
    this.Et18P()
};
Maplet.prototype.showScale = function (c2, x4, xG, yb) {
    this.fe = c2;
    if (this.fe) {
        this.u8()
    } else {
        if (this.wq != null)this.wq.hide()
    }
};
Maplet.prototype.showOverview = function (c2, c3) {
    if (c2) {
        this.overview.show();
        if (c3) {
            this.overview.open()
        } else {
            this.overview.close()
        }
    } else {
        this.overview.hide();
        this.overview.close()
    }
};
Maplet.prototype.setOverviewLocation = function (location) {
    this.overview.setLocation(location);
    this.Et18P();
    this.rb4()
};
Maplet.prototype.resizeOverview = function (w, h) {
    this.overview.resizeTo(w, h);
    this.Et18P();
    this.rb4()
};
Maplet.prototype.showControl = function (c2) {
    this.fj = c2;
    if (this.fj) {
        if (this.controlCanvas)this.controlCanvas.show()
    } else {
        if (this.controlCanvas)this.controlCanvas.hide()
    }
    this.Et18P();
    this.rb4()
};
Maplet.prototype.getViewBound = function () {
    return{"LeftUp": this.toMapCoordinate(0, 0), "LeftDown": this.toMapCoordinate(0, this.height), "RightUp": this.toMapCoordinate(this.width, 0), "RightDown": this.toMapCoordinate(this.width, this.height)}
};
Maplet.prototype.calcPointsCt = function (pts) {
    var wp3D3 = Number.MAX_VALUE, Xjqc = wp3D3, ax = -Number.MAX_VALUE, ay = ax;
    for (var qC = 0; qC < pts.length; qC++) {
        if (!pts[qC].maplet)pts[qC].initialize(this);
        wp3D3 = Math.min(wp3D3, pts[qC].mapX);
        Xjqc = Math.min(Xjqc, pts[qC].mapY);
        ax = Math.max(ax, pts[qC].mapX);
        ay = Math.max(ay, pts[qC].mapY)
    }
    if (wp3D3 != Number.MAX_VALUE)return new MPoint(this.toMapCoordinate(wp3D3 + (ax - wp3D3) / 2, Xjqc + (ay - Xjqc) / 2)); else return null
};
Maplet.prototype.u0 = function (S1335) {
    if (S1335) {
        this.eavj8();
        return
    }
    if (!this.wO$ && this.tpe())return;
    if (this.c0) {
        return
    }
    if (this.fs) {
        return
    }
    this.c0 = true;
    this.fs = true;
    if (this.r4FB.length > 0) {
        if (((this.u2 != null && this.u2 == "traffic") || this.AG != this.eC_K) || bpp[0] != this.OciYx) {
            for (var p = 0; p < this.r4FB.length; p++) {
                this.r4FB[p].onmousedown = null;
                _removeNode(this.r4FB[p])
            }
            this.r4FB = []
        }
        this.OciYx = bpp[0]
    }
    this.i2y();
    var pT = '';
    if (this.u_5)this.oA2Ii();
    var pw = 0;
    var yk = this.yl;
    var uY = (this.u2 == "undefined" || this.u2 == null) ? "poi" : this.u2;
    var nL = nM[this.AG];
    this.sZ = 0;
    this.s1 = 0;
    this.tf1 = this.width;
    this.tg = this.height;
    this.s2 = parseInt(this.gD);
    this.s3 = parseInt(this.gE);
    this.th = parseInt(this.gD);
    this.ti = parseInt(this.gE);
    var uZ = new Array();
    var u4 = new Array();
    var t1 = parseInt(new Date().getTime() / 60000);
    var s8 = (360 / sj[this.AG]);
    var GsM = this.getZoomLevel() - 1;
    if (this.AG == this.eC_K)this.sE.clean(); else if (typeof basepoilist != "object" && !this.wB3 && this.h0D)this.h0D = false;
    for (var ix = -this.z4 - 1; ix <= this.z4; ix++) {
        for (var iy = -this.z5 - 1; iy <= this.z5; iy++) {
            try {
                var qy = parseInt(this.gD + ix);
                var qA = parseInt(this.gE + iy);
                qy = (qy) % s8;
                if (qy >= (s8 / 2))qy -= s8;
                if (qy < (-s8 / 2))qy += s8;
                var dirx = parseInt(Math.floor((qy) / nL));
                var diry = parseInt(Math.floor((qA) / nL));
                {
                    if (dirx < 0)dirx += 1;
                    if (diry < 0)diry += 1
                }
                var AOvOc = (qy) - dirx * nL;
                var o9U0j = (qA) - diry * nL;
                var pM = this.u8d.replace("img", "img" + this.C92(AOvOc, o9U0j)) + this.sR;
                var pQ = this.strImgUrl + "mapbank/" + uY + "/" + this.sR;
                var pG = this.strImgUrl + "mapbank/base/" + this.sR;
                if (this.AG >= 14)pM += dirx + "/";
                pQ += dirx + "_" + diry + "/";
                pG += dirx + "_" + diry + "/";
                pM += dirx + "_" + diry + "/";
                pQ += AOvOc + "_" + o9U0j + ".png";
                pG += AOvOc + "_" + o9U0j + ".js";
                pM += AOvOc + "_" + o9U0j + "." + this.xK;
                var p1 = (ix * this.imgWidth) + parseInt(this.mapX);
                var p3 = (-(iy * this.imgHeight) + parseInt(this.mapY));
                var p4 = p3;
                if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                    p3 = p3 + w8[this.AG]
                }
                var Ga6W = false;
                var $D2 = true;
                var f9mJC = true;
                if ((p1 < -this.imgWidth || p1 > this.width || p3 > this.height || p3 < -this.imgHeight))Ga6W = true;
                if (this.u2 != null && this.u2 == "traffic" && w8[this.AG] != 0 && ((p4 < this.height || p4 <= 0))) {
                    $D2 = false;
                    if (Ga6W)pM = null
                }
                if (this.u_5 && w8[this.AG] != 0 && ((p4 < this.height || p4 <= 0))) {
                    f9mJC = false;
                    if (Ga6W)pM = null
                }
                if (Ga6W && $D2 && f9mJC)continue;
                if (pM) {
                    if (this.sZ < (p1 + this.imgWidth)) {
                        this.sZ = (p1 + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.s1 < (p3 + this.imgHeight)) {
                        this.s1 = (p3 + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(iy)
                    }
                    if (this.tf1 > p1) {
                        this.tf1 = p1;
                        this.th = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.tg > p3) {
                        this.tg = p3;
                        this.s3 = parseInt(this.gE) + parseInt(iy)
                    }
                }
                var xY = ((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase();
                if (pw == 0) {
                    pw = 1
                }
                if (pM && pM.indexOf("NaN") < 0) {
                    if (this.pU[xY] == null) {
                        if (!rs || !px) {
                            this.pU[xY] = new Image();
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].style.MozUserSelect = "none"
                        } else {
                            this.pU[xY] = document.createElement("v:Image");
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].cE = "f";
                            this.pU[xY].style.rotation = this.rotation;
                            this.pU[xY].style.width = this.imgWidth;
                            this.pU[xY].style.height = this.imgHeight
                        }
                        if (px)this.pU[xY].style.filter = "alpha(opacity=0);"; else this.pU[xY].style.opacity = "0";
                        f1.nk(this.pU[xY], pM, this.imgWidth, this.imgHeight)
                    } else {
                        if (px && rs) {
                            this.pU[xY].style.rotation = this.rotation
                        }
                    }
                    var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                    var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                    this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
                    this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
                    this.pU[xY].c2 = true;
                    this.pU[xY].setAttribute("origy", parseInt(p5 - this.imgHeight / 2));
                    this.pU[xY].setAttribute("origx", parseInt(p2 - this.imgWidth / 2))
                }
                if (this.u2 != null && this.u2 == "traffic") {
                    if (!__mapbar_magic_id)__mapbar_magic_id = "";
                    var pV = bpp[0] + __mapbar_magic_id + "/" + GsM + "/o" + xY + ".png";
                    if (m9o43) {
                        var eDgf = document.createElement("v:image");
                        eDgf.setAttribute("unselectable", "on");
                        eDgf.id = "o" + xY;
                        eDgf.setAttribute("name", xY);
                        eDgf.setAttribute("traffic", "yes");
                        eDgf.style.cssText = "position:absolute;top:" + p4 + "px;left:" + p1 + "px;width:300px;height:300px";
                        eDgf.src = pV;
                        this.r4FB.push(eDgf)
                    } else {
                        var img = document.createElement("IMG");
                        img.id = "o" + xY;
                        img.setAttribute("name", xY);
                        img.src = pV;
                        img.ntry = "0";
                        img.unselectable = "on";
                        img.onerror = function () {
                            imageTileError(this)
                        };
                        img.onload = function () {
                            imageTileOk(this)
                        };
                        img.onmousedown = function () {
                            return false
                        };
                        img.style.cssText = "position:absolute;top:" + p4 + "px;left:" + p1 + "px;-moz-user-select: none;";
                        img.setAttribute("traffic", "yes");
                        this.r4FB.push(img)
                    }
                    uZ[uZ.length] = 'o' + xY;
                    u4[u4.length] = dirx + "_" + diry + "/";
                } else if (this.u2 != null && this.u2 != "undefined" && pQ && pQ.indexOf("NaN") < 0) {
                    if (this.pU[xY]) {
                        var id = "o" + xY;
                        var path = dirx + "_" + diry + "/";
                        if (((typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + path + id + ".png"])) || d7q58) {
                            var div = aa(id);
                            if (!div) {
                                div = document.createElement("DIV");
                                div.setAttribute("unselectable", "on");
                                div.id = id;
                                div.setAttribute("name", xY);
                                div.style.cssText = "position:absolute;width:0px;height:0px;";
                                this.r4FB.push(div)
                            }
                            div.style.left = p1 + "px";
                            div.style.top = p4 + "px";
                            uZ[uZ.length] = id;
                            u4[u4.length] = path
                        }
                    }
                }
                if (this.u_5) {
                    var Xcg$p = maplet.toMapCoordinate(p1, p4).split(',');
                    this.layerData[xY] = {passiveLoadStatus: Maplet.UNLOAD, filename: this.sR + dirx + "_" + diry + "/" + AOvOc + "_" + o9U0j, dirx: dirx, diry: diry, grid: xY, AOvOc: AOvOc, o9U0j: o9U0j, dirname: dirx + "_" + diry, xyname: AOvOc + "_" + o9U0j, x: p1, y: p4, qy: qy, qA: qA, gridx: qy, gridy: qA}
                }
                pM = null;
                pQ = null
            } catch (e) {
                throw(e)
            }
        }
    }
    for (var qI in this.pU) {
        var img = this.pU[qI];
        if (img != null && typeof img == "object") {
            if ((typeof img.c2 == "boolean" && img.c2) || img.c2 == "true") {
                if (img.parentNode != this.sE.div) {
                    if (img.parentNode != null)img.parentNode.removeChild(img);
                    this.sE.div.appendChild(img)
                }
            } else if (img.parentNode != this.sG.div) {
                if (img.parentNode != null)_removeNode(img);
                img.onerror = null;
                img.onload = null;
                img = null;
                delete this.pU[qI]
            }
        }
    }
    if (!(this.u2 != null && this.u2 == "traffic") && this.r4FB.length > 0) {
        var s = uZ.join(",");
        for (var k3n1 = this.r4FB.length - 1; k3n1 >= 0; k3n1--) {
            if (s.indexOf(this.r4FB[k3n1].id) == -1) {
                if (this.r4FB[k3n1].parentNode) {
                    _removeNode(this.r4FB[k3n1])
                }
                this.r4FB.splice(k3n1, 1)
            }
        }
        for (var k3n1 = uZ.length - 1; k3n1 >= 0; k3n1--) {
            if (aa(uZ[k3n1]))uZ.splice(k3n1, 1)
        }
    }
    if (this.r4FB.length > 0) {
        for (var q = 0; q < this.r4FB.length; q++) {
            this.lA.div.appendChild(this.r4FB[q])
        }
    }
    pT = null;
    for (var pid in this.ht4D) {
        var p = this.ht4D[pid];
        if (p.paint)p.paint()
    }
    if (this.u_5) {
        for (var i in this.qS) {
            if (this.qS[i].inZoomRange(this.AG))this.qS[i].update(); else this.qS[i].clear()
        }
    }
    if (this.sE.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.sE.div)
    }
    if (this.vx.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.vx.div)
    }
    if ((typeof this.fo == "boolean" && this.fo) && document.getElementById("LayerMap") && document.getElementById("LayerMap").filters && document.getElementById("LayerMap").filters.length > 0) {
        document.getElementById("LayerMap").filters[0].apply();
        document.getElementById("LayerMap").filters[0].vu()
    }
    if (this.aN.length > 0) {
        for (var qk = 0; qk < this.aN.length; qk++) {
            this.aN[qk].paint()
        }
    }
    if (this.zy != null) {
        this.zy.paint();
        if (this.tG != null) {
            this.tG.paint()
        }
    }
    if (this.aO.length > 0) {
        for (qk = 0; qk < this.aO.length; qk++) {
            this.aO[qk].u9(this.vx.div);
            this.aO[qk].paint(this.lA.div)
        }
    }
    if (this.yG.length > 0) {
        if (!px)this.yG[this.yG.length - 1].label(this.lA.graphics)
    } else {
        if (iToolTipStyle == 0)hideToolTipMenu()
    }
    if (this.lA.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.lA.div)
    }
    if (this.aE.length > 0) {
        this.aG = null;
        this.aH = null;
        this.aF = null;
        for (qk = 0; qk < this.aE.length; qk++) {
            if (this.AG >= this.aE[qk].AJ && this.AG <= this.aE[qk].AI) {
                var w4 = this.zl(this.aE[qk].li, this.aE[qk].lf);
                var w5 = this.zm(this.aE[qk].lf, this.aE[qk].li);
                if (w4 >= 0 && w4 <= this.width && w5 >= 0 && w5 <= this.height) {
                    if (this.aG == null) {
                        this.aG = new Array();
                        this.aH = new Array();
                        this.aF = new Array()
                    }
                    this.aG[this.aG.length] = w4;
                    this.aH[this.aH.length] = w5;
                    this.aF[this.aF.length] = qk
                }
            }
        }
    }
    if (!this.bInitialized) {
        this.bInitialized = true
    }
    if (this.u2 != null && this.u2 != "undefined") {
        if (this.u2 == "base") {
            if (this.AG >= parseInt(bpp[1]) && this.AG <= parseInt(bpp[2])) {
                if (!this.h0D && !d7q58) {
                    this.j3L4();
                    this.h0D = true
                }
                var i = 0;
                for (var l in uZ) {
                    try {
                        if (typeof uZ[l] == "string") {
                            if (typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + u4[l] + uZ[l] + ".png"]) {
                                if (!d7q58)new iBl8Y(bpp[0] + sI[this.AG] + "/" + u4[l] + uZ[l] + ".png", parseInt, false, true).PYl()
                            }
                            i++
                        }
                    } catch (lN) {
                        throw(lN)
                    }
                    uZ[l] = null;
                    u4[l] = null
                }
            } else {
                for (var su in uZ) {
                    try {
                        if (typeof uZ[su] == "string" && document.getElementById(uZ[su]) && document.getElementById(uZ[su]).parentNode) {
                            if (!d7q58)_removeNode(aa(uZ[su]))
                        }
                    } catch (e) {
                        throw(e)
                    }
                    uZ[su] = null;
                    u4[su] = null
                }
            }
        } else {
            t1 = parseInt(new Date().getTime() / 60000);
            for (var uD in uZ) {
                try {
                    if ((this.u2 != "traffic") && typeof uZ[uD] == "string") {
                        XMLHttp.sendReq('GET', 'maplite/' + this.u2 + '.jsp?' + this.u3 + '&oid=' + uZ[uD] + '&epoch=' + t1, '', vB, uZ[uD])
                    }
                } catch (e) {
                    throw(e)
                }
                uZ[uD] = null;
                u4[uD] = null
            }
        }
        uZ.length = 0;
        uZ = null;
        u4.length = 0;
        u4 = null
    }
    this.c0 = false;
    this.fs = false;
    for (var i = 0; i < 2; i++) {
        for (var qi in this.u5) {
            if (this.u5[qi] && this.u5[qi].paint) {
                if (i == 0 && this.u5[qi] instanceof MMarker && !this.u5[qi].ls)this.u5[qi].paint(); else if (i == 1 && this.u5[qi].tL2)this.u5[qi].paint()
            }
        }
    }
    avBubble.h16();
    if (this.overview)this.overview.paint();
    cq.lf = this.gx;
    cq.li = this.gA;
    var gz = cq.zn();
    this.yu = gz + "@" + this.AG;
    if (ALLOW_MV) {
        try {
            var ww = "@mapbar" + (new Date().getTime() % 86400).toString(36);
            sB.src = "http://mv.mapbar.com/?" + this.yu + "@" + this.yt + "@" + this.width.toString(36).toUpperCase() + "@" + this.height.toString(36).toUpperCase() + "@" + this.sS.toString(36).toUpperCase() + "@" + c75 + "@" + strLicenseKey.toString(36).toUpperCase() + "@" + this.yl + "@" + ((bp) ? 1 : 0) + "@" + ((this.u2) ? this.u2 : "") + ww
        } catch (e) {
            throw(e)
        }
    }
    this.sF.moveTo(0, 0);
    this.vx.moveTo(0, 0);
    this.lA.moveTo(0, 0);
    MEvent.trigger(this, "update", this.yu);
    this.pNt = 0;
    this.$5D2 = 0
};
Maplet.prototype.getEllipse = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MEllipse)r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getRoundRect = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MRoundRect)r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getMarkers = function () {
    var r = [];
    for (var i in this.u5) {
        var w9L = this.u5[i];
        if (w9L instanceof MMarker && w9L.creator == MLayer.USER)r.push(w9L)
    }
    return r
};
Maplet.prototype.getPolylines = function (T1roC) {
    if (typeof T1roC != "number")T1roC = 1;
    var r = [];
    for (var i in this.u5) {
        var w9L = this.u5[i];
        if (w9L instanceof MPolyline && w9L.creator == MLayer.USER) {
            if (T1roC == 2 && !w9L.U53())continue; else if (T1roC == 3 && w9L.U53())continue;
            r.push(w9L)
        }
    }
    return r
};
Maplet.prototype.equalsLLCoords = function (f8y, vbn4, N0X) {
    if (typeof f8y == "string" && f8y && typeof vbn4 == "string" && vbn4) {
        try {
            if (f8y == vbn4)return true;
            if (typeof N0X != "number")N0X = 0;
            var l25WK = maplet.toScreenCoordinate(f8y);
            var S6skp = maplet.toScreenCoordinate(vbn4);
            if ((l25WK[0] == S6skp[0] || Math.abs(l25WK[0] - S6skp[0]) <= N0X) && (l25WK[1] == S6skp[1] || Math.abs(l25WK[1] - S6skp[1]) <= N0X))return true
        } catch (nc) {
        }
    }
    return false
};
Maplet.prototype.Ah1e4 = function (d) {
    return d * Math.PI / 180
};
Maplet.prototype.C3$59 = function (H$8_, u3U, V07, D03) {
    var MJ496 = this.Ah1e4(H$8_), S70 = this.Ah1e4(V07), a = MJ496 - S70, b = this.Ah1e4(u3U) - this.Ah1e4(D03), s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(MJ496) * Math.cos(S70) * Math.pow(Math.sin(b / 2), 2)));
    return s * sGF34
};
Maplet.prototype.measDistance = function (pts) {
    try {
        var g0 = 0;
        var ur = pts.length;
        for (var su = 1; su < ur; su++) {
            var $r6Y_ = cq.vp(pts[su - 1].getPid());
            var c6FY9 = cq.vp(pts[su].getPid());
            g0 += this.C3$59($r6Y_[1], $r6Y_[0], c6FY9[1], c6FY9[0])
        }
        return parseInt(g0)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.measArea = function (pts) {
    try {
        var area = 0;
        var ur = pts.length;
        var qC = 2;
        var qI = 0;
        for (var i = 1; i <= ur; i++) {
            var qj = (qC % ur);
            var pC = (qI % ur);
            var lon = parseFloat(cq.vp(pts[(i % ur)].getPid())[0]);
            var lat = parseFloat(cq.vp(pts[qj].getPid())[1]);
            var V07 = parseFloat(cq.vp(pts[pC].getPid())[1]);
            area += lon * (lat - V07);
            qC++;
            qI++
        }
        return parseInt(Math.abs(area / 2) * this.gM * this.gM * 100000 * 100000)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.decodeLine = function (pts, Su5OD) {
    var rt = [];
    if (typeof pts != "string" || !pts || typeof Su5OD != "string" || !Su5OD || Su5OD.indexOf(",") == -1)return rt;
    var g2E14 = this.rT11f(pts);
    var FM9k1 = this.m849(Su5OD);
    for (var i = 0; i < g2E14.length; i++) {
        rt.push(new MPoint(g2E14[i][1] * 0.00001, g2E14[i][0] * 0.00001, false, typeof FM9k1[i] == "undefined" ? 0 : FM9k1[i]));
        rt[i].initialize(this)
    }
    return rt
};
Maplet.prototype.rT11f = function (SD1yi) {
    var sIp = [];
    if (typeof SD1yi == "string" && SD1yi) {
        var qt = R2K70(SD1yi);
        var x = qt[0];
        var y = qt[1];
        sIp.push([x, y]);
        for (var i = 2; i < qt.length; i += 2) {
            x += qt[i];
            y += qt[i + 1];
            sIp.push([x, y])
        }
    }
    return sIp
};
Maplet.prototype.m849 = function (SD1yi) {
    var sIp = {};
    if (typeof SD1yi == "string" && SD1yi && SD1yi.indexOf(",") != -1) {
        var qt = SD1yi.split(",");
        for (var i = 0; i < qt.length; i++) {
            var r = R2K70(qt[i]);
            var t9n2 = 0;
            for (var qC = 0; qC < r.length; qC++) {
                t9n2 += r[qC];
                sIp[t9n2] = i + 1
            }
        }
    }
    return sIp
};
Maplet.prototype.getLevelGroup = function () {
    var level = this.AG;
    if (level >= 0 && level <= 3)return 3; else if (level >= 4 && level <= 7)return 2; else if (level >= 8 && level <= 11)return 1; else if (level >= 12 && level <= 18)return 0; else return 3
};
Maplet.prototype.setMapBound = function (c7) {
    if (!c7.min || !(c7.min instanceof MPoint) || !c7.max || !(c7.max instanceof MPoint))return;
    if (!c7.min.maplet)c7.min.initialize(this);
    if (!c7.max.maplet)c7.max.initialize(this);
    c7.qUE3 = c7.min.clone();
    c7.QB6 = c7.max.clone();
    c7.c6f$I = c7.min._galn();
    c7.Ovn4b = c7.min._galt();
    c7.r5kt = c7.max._galn();
    c7.eg494 = c7.max._galt();
    c7._96 = c7.c6f$I + (c7.r5kt - c7.c6f$I) / 2;
    c7.$n5P = c7.Ovn4b - (c7.Ovn4b - c7.eg494) / 2;
    c7.Nr208 = new MPoint(c7._96, c7.$n5P, false);
    c7.Nr208.initialize(this);
    this.mapBound = c7;
    this.tpe()
};
Maplet.prototype.getMapBound = function () {
    return this.mapBound
};
Maplet.prototype.tpe = function () {
    this.wO$ = true;
    var lpK86 = false;
    if (!this.fa && this.mapBound) {
        var H26 = this.mapBound;
        H26.qUE3.recalcScreenCoords();
        H26.QB6.recalcScreenCoords();
        H26.Nr208.recalcScreenCoords();
        var ix = H26.c6f$I;
        var iy = H26.Ovn4b;
        var ax = H26.r5kt;
        var ay = H26.eg494;
        var w = H26.QB6.mapX - H26.qUE3.mapX;
        var h = H26.QB6.mapY - H26.qUE3.mapY;
        var lon = this.gA;
        var lat = this.gx;
        var gC = new MPoint(this.gA, this.gx, false);
        gC.initialize(this);
        if (w > this.width && h > this.height) {
            var AE18 = this._Wk16.tl;
            var I33 = this._Wk16.s4;
            var d8fqx = this._Wk16.s6;
            var k2$8 = this._Wk16.tj;
            if (ix > AE18)lon = this.gA + (ix - AE18); else if (ax < d8fqx)lon = this.gA - (d8fqx - ax);
            if (iy < I33)lat = this.gx - (I33 - iy); else if (ay > k2$8)lat = this.gx + (ay - k2$8)
        } else {
            if (gC.mapX != H26.Nr208.mapX || gC.mapY != H26.Nr208.mapY) {
                lon = H26._96;
                lat = H26.$n5P
            }
        }
        var f65 = new MPoint(lon, lat, false);
        f65.initialize(this);
        if (gC.mapX != f65.mapX || gC.mapY != f65.mapY) {
            this.MT$ = false;
            this.setCenter(new MPoint(lon, lat, false));
            lpK86 = true
        }
    }
    this.wO$ = false;
    return lpK86
};
Maplet.prototype.finalize = function () {
    this.clearOverlays(true);
    this.clearPanels(true);
    if (ContentInfo)ContentInfo.finalize();
    ContentInfo = null;
    this.disablePOILayer();
    this.disableTraffic();
    this.clearLayers(true);
    this.oA2Ii();
    for (var i in this.pU) {
        try {
            if (this.pU[i] != null && typeof this.pU[i] == "object") {
                this.pU[i].c2 = false
            }
        } catch (e) {
        }
    }
    this.fL();
    if (this.zP)clearTimeout(this.zP);
    if (this.controlCanvas)this.controlCanvas.g1();
    if (this.overview)this.overview.g1();
    if (this.snapshotBox)this.snapshotBox.finalize();
    MEvent.removeBuiltInListener(this.map, "mousemove", this.ir0["map_mousemove"]);
    MEvent.removeBuiltInListener(this.map, "mousedown", this.ir0["map_mousedown"]);
    MEvent.removeBuiltInListener(this.map, "mouseup", this.ir0["map_mouseup"]);
    MEvent.removeBuiltInListener(this.map, "click", this.ir0["map_click"]);
    MEvent.removeBuiltInListener(this.map, "dblclick", this.ir0["map_dblclick"]);
    MEvent.removeBuiltInListener(this.map, "mouseout", this.ir0["map_mouseout"]);
    MEvent.removeBuiltInListener(this.map, "drag", this.ir0["map_drag"]);
    MEvent.removeBuiltInListener(this.map, "dragstart", this.ir0["map_dragstart"]);
    MEvent.removeBuiltInListener(this.map, "dragend", this.ir0["map_dragend"]);
    MEvent.removeBuiltInListener(this.map, "mouseover", this.ir0["map_mouseover"]);
    MEvent.removeBuiltInListener(this.map, "mousewheel", this.ir0["map_mousewheel"]);
    MEvent.removeBuiltInListener(this.map, "DOMMouseScroll", this.ir0["map_DOMMouseScroll"]);
    if (kp)MEvent.removeBuiltInListener(document, "keydown", this.ir0["document_keydown"]);
    t892(this.ir0);
    this.sG.finalize();
    this.sF.finalize();
    this.zs.finalize();
    this.sE.finalize();
    this.vx.finalize();
    this.wq.finalize();
    this.sD.finalize();
    _removeNode(this.HAw82.container);
    this.w41r9.fC.finalize();
    this.lA.finalize();
    this.$374j.onclick = null;
    _removeNode(this.$374j);
    _removeNode(this.r81);
    this.clearCache();
    t892(this);
    document['mapbar-maplet'] = null
};
Maplet.prototype.setBasemapImgUrl = function (url, format) {
    url = url || strImgsvrUrl + 'mapbank/mapbar/';
    format = format || 'png';
    if (url === this.u8d && format === this.xK) {
        return
    }
    this.u8d = url;
    this.xK = format;
    if (this.bInitialized) {
        this.refresh(true)
    }
};
Maplet.prototype.setOverviewImgUrl = function (url, format) {
    url = url || strImgsvrUrl + 'mapbank/mapbar/';
    format = format || 'png';
    if (url === this.B1X && format === this.nG0J) {
        return
    }
    this.B1X = url;
    this.nG0J = format;
    if (this.overview.fg) {
        this.overview.paint(true)
    }
};
function a8(id, lf, li, label, minLevel, maxLevel) {
    this.id = id;
    this.li = li;
    this.lf = lf;
    this.AJ = minLevel;
    this.AI = maxLevel;
    this.xP = label
};
Maplet.prototype.aZ = function (e) {
    if (maplet.snapshotBox.mT3) {
        maplet.snapshotBox.mT3 = false;
        return
    }
    if (this.xc) {
        this.xc.hide()
    }
    var l6 = (px) ? event.srcElement.id : e.target.id;
    var target = (px) ? event.srcElement : e.target;
    var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    this.l6 = l6;
    this.fS = Ap - this.left;
    this.fT = Av - this.top;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) {
        return false
    }
    if (this.ff && this.nI().qn(this.fS, this.fT)) {
        this.AP.tC(this.fS, this.fT);
        return
    }
    if (this.aY()) {
        var fR = this.zp(this.fS, this.fT);
        var fO = this.zo(this.fS, this.fT);
        if (this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && this.downX == this.zQ && this.downY == this.zR && MEvent.contains(maplet, "click") > 0) {
            var lm9S = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
            if (apiType == 1) {
                var pt = new MPoint(lm9S);
                pt.initialize(this);
                MEvent.trigger(this, 'click', e, pt)
            } else MEvent.trigger(this, 'click', e, lm9S)
        }
        var cV = false;
        if ((this.sS == 7)) {
            this.addOrigin(fO, fR)
        } else if ((this.sS == 8)) {
            this.addDestination(fO, fR)
        } else if ((this.sS == 6)) {
            cq.lf = fO;
            cq.li = fR;
            var fQ = cq.zn();
            nX();
            if (apiType == 1)MEvent.trigger(this, "bookmark", {action: "add", point: new MPoint(fQ), zoom: this.AG}); else MEvent.trigger(this, "bookmark", "&act=add&latlon=" + fQ + "&zm=" + this.AG)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if ((new Date().getTime() - this.tD) >= 500) {
                this.tD = new Date().getTime();
                if (this.cQ) {
                    this.cQ = false
                } else {
                    var b = false;
                    var yw = (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (target.parentNode && target.parentNode.id == "LayerMap") || (target.id && target.id.indexOf("OverlayBg") >= 0) || (target.getAttribute && target.getAttribute(M9wA)));
                    if (!this.cn && yw) {
                        if (this.w367I)return;
                        if (iToolTipStyle == 0)hideToolTipMenu();
                        b = true
                    }
                    if (yw && !this.t41 && this.u_5) {
                        var img = null;
                        if (img = this.getImgByXY(this.moveX, this.moveY, true)) {
                            var G2_5 = false;
                            for (var i = this.M0D.length - 1; i >= 0; i--) {
                                if (typeof this.M0D[i] != "undefined") {
                                    for (var k3n1 = this.M0D[i].length - 1; k3n1 >= 0; k3n1--) {
                                        if (!this.M0D[i][k3n1].inZoomRange(this.AG))continue;
                                        var r = this.M0D[i][k3n1].click(img, this.moveX, this.moveY);
                                        b = r.center2map;
                                        if (r.data) {
                                            if (r.firevent && MEvent.contains(this, "layer_click") > 0) {
                                                MEvent.trigger(this, "layer_click", {layer: this.M0D[i][k3n1], pid: r.data.p, area: r.data.l, data: r.data.d, name: r.data.n, rect: r.data.rect});
                                                b = false
                                            }
                                            G2_5 = true;
                                            break
                                        }
                                    }
                                }
                                if (G2_5)break
                            }
                        }
                    }
                    if (this.clickToCenter && b) {
                        if (this.d23yh != null)this.hideBubble();
                        this.waitPan(this.width / 2 - this.fS, -this.fT + this.height / 2)
                    }
                }
                this.cn = false
            } else {
                this.tD = new Date().getTime()
            }
        } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.u0S$) {
            if (this.allowDrawingDragMap && !this._H7) {
                this._H7 = true;
                return false
            }
            if (this.l6 != null && this.l6.indexOf("ctrl") >= 0)return false;
            if (this.sS == ts.u0S$) {
                with (this.h4nA) {
                    if (diep.length && target && target.getAttribute(P1uR9) == "marker" && target.getAttribute("oid") == diep[diep.length - 1].id) {
                        if (diep.length > 1) {
                            var n = diep;
                            var l = P440;
                            gsGY = 0;
                            if (this.vA != "undefined")this.setMode(this.vA);
                            if (MEvent.contains(this, "roadline") > 0) {
                                MEvent.trigger(this, "roadline", n, l)
                            }
                        }
                    } else {
                        var pt = new MPoint(fR, fO, false);
                        if (diep.length)this.f788y(pt, true);
                        this.r_6_0(pt);
                        this.$31X()
                    }
                }
            } else {
                if (!this.zy) {
                    var cr = this.sS == ts.ly || this.sS == ts.ta;
                    var EF98 = new MBrush(this.brush.color, this.brush.stroke, this.brush.style, cr, this.brush.bgcolor, this.brush.transparency, this.brush.bgtransparency, this.brush.arrow);
                    if (this.sS == ts.tb)EF98 = this.isHeX.SSW;
                    var dE717 = new MPoint(cq.zn(fR, fO));
                    this.zy = new MPolyline([dE717], EF98, null, null);
                    this.zy.initialize(this, false);
                    this.sv++;
                    if (this.sS == ts.tb)EF98 = this.isHeX.X0Y;
                    this.tG = new MPolyline([dE717, dE717], EF98, null, null);
                    this.tG.initialize(this, false);
                    this.sv++;
                    if (this.sS == ts.tb) {
                        this._V7(dE717, true);
                        nX()
                    }
                } else {
                    var M11mc = new MPoint(cq.zn(fR, fO));
                    this.zy.pts.push(M11mc);
                    this.zy.update();
                    this.tG.pts[0] = M11mc;
                    this.tG.pts[1] = new MPoint(cq.zn(fR, fO));
                    this.tG.update();
                    if (this.sS == ts.tb)this._V7(M11mc)
                }
            }
            cV = true
        }
        if (l6 == "LayerDrawMap" && !cV) {
            if (this.aG != null && this.aH != null) {
                for (var qk = 0; qk < this.aG.length; qk++) {
                    if (Math.abs(this.aG[qk] - this.fS) < HOTSPOT_SIZE && Math.abs(this.aH[qk] - this.fT) < HOTSPOT_SIZE) {
                        var yg = "";
                        if (apiType == 1)yg = this.aE[this.aF[qk]].xP; else yg = "&hotspot=" + this.aE[this.aF[qk]].xP;
                        this.vi = 0;
                        MEvent.trigger(this, "hotspot", yg);
                        if (hs) {
                            this.setCenter(this.aE[this.aF[qk]].lf, this.aE[this.aF[qk]].li);
                            this.setZoomLevel(8)
                        }
                        break
                    }
                }
            }
        }
    }
};
Maplet.prototype.a1 = function (e) {
    var l6 = (px) ? event.srcElement.id : e.target.id;
    var target = (px) ? event.srcElement : e.target;
    this.l6 = l6;
    nX();
    if (this.l6 != null && this.l6.toString().indexOf("ctrl") >= 0)return false;
    if (this.aY()) {
        if (this.sS != ts.tz && this.sS != ts.tA && this.sS != ts.X420D)this.$_T("default", this.map);
        var lm9S = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
        if (apiType == 1) {
            var pt = new MPoint(lm9S);
            pt.initialize(this);
            MEvent.trigger(this, 'dbclick', e, pt)
        } else {
            MEvent.trigger(this, 'dbclick', e, lm9S)
        }
        if (this.sS == ts.tb || this.sS == ts.ta) {
            var g0 = 0;
            var area = 0;
            var D28S = this.wtd[this.wtd.length - 1];
            if (this.zy) {
                var ur = this.zy.pts.length;
                if (!px)ur = ur - 1;
                if (this.sS == ts.tb) {
                    g0 = D28S.diep[D28S.diep.length - 1].L1tq;
                    this.closeMeasureCurrPath()
                } else {
                    this.zy.pts[ur] = this.zy.pts[0];
                    area = this.measArea(this.zy.pts)
                }
                if (this.zy.zX.parentNode == this.lA.div)this.zy.remove(true)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div)this.tG.remove(true);
            this.zy = null;
            this.tG = null;
            if (!px)this.refresh();
            if (g0.toString() == eval("Number.NaN.toString()"))g0 = 0;
            if (area.toString() == eval("Number.NaN.toString()"))area = 0;
            if (this.sS == ts.ta) {
                var xk = "";
                if (area > 1000000) {
                    area = Math.round((area / 10000 / 10 / 10) * 100) / 100;
                    xk = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + area + tX("%u5E77%uC42C%uB725%uE338") : "Total area:" + area + "km2"
                } else {
                    area = Math.round(area * 100) / 100;
                    xk = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + area + tX("%u5E76%uC42C%uE22C") : "Total area:" + area + "m2"
                }
                if (this.vA != "undefined")this.setMode(this.vA);
                sC(this.width / 2 + this.left + this.offsetX, this.height / 2 + this.top + this.offsetY, xk);
                if (apiType == 1)MEvent.trigger(this, "measarea", area); else MEvent.trigger(this, "measarea", "&act=measarea&area=" + area + tX("%u5E77%uC42C%uB725%uE338"))
            } else {
                if (apiType == 1)MEvent.trigger(this, "measure", g0); else MEvent.trigger(this, "measure", "&act=measure&dist=" + g0 + tX("%u516E%uE338"))
            }
            this.setMode('pan')
        } else if (this.sS == ts.lz || this.sS == ts.ly) {
            var yg = null;
            if (this.zy) {
                var jq8 = this.zy.pts.length;
                if (!px)jq8 = jq8 - 1;
                this.zy.pts.length = jq8;
                if (this.zy.zX.parentNode == this.lA.div)this.zy.remove(true);
                if (apiType == 1) {
                    yg = this.zy.zn();
                    yg.zoom = this.AG
                } else yg = ("&act=add&pline=" + this.zy.zn() + "&zm=" + this.AG)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) {
                this.tG.remove(true)
            }
            this.zy = null;
            this.tG = null;
            if (!px)this.refresh();
            var nb = (this.sS == ts.lz) ? "drawline" : "drawarea";
            if (this.vA != "undefined")this.setMode(this.vA);
            MEvent.trigger(this, nb, yg)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (!DISABLE_DBCLICK_ZOOM && this.l6 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || target.parentNode.id == "LayerMap" || target.id.indexOf("OverlayBg") >= 0 || this.l6.substring(0, "mk_shadow_".length) == "mk_shadow_" || target.getAttribute("traffic") == "yes") || (target.getAttribute(M9wA))) {
                this.vi = 0;
                if (this.getZoomLevel() < MAX_ZOOM_LEVEL)this.zoomTo(this.getZoomLevel() + 1, void(0), this.width / 2 - this.fS, -this.fT + this.height / 2); else if (this.getZoomLevel() == MAX_ZOOM_LEVEL)this.panTo(this.width / 2 - this.fS, -this.fT + this.height / 2)
            }
        }
    }
};
Maplet.prototype.a2 = function (e) {
    if (this.sS != ts.ty)this.hideBubble();
    if (this.markerDragAnimation)this.$T9R7(false);
    var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    if (!px && this.panel.style.position != "absolute") {
    }
    ;
    this.downX = Ap - this.left;
    this.downY = Av - this.top;
    this.H5cW = new Date().getTime();
    this.NXn = this.$839 = 0;
    this.t41 = false;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0 && this.controlCanvas != null) {
        this.controlCanvas.onmousedown(e);
        return
    }
    if (e.type == "mousedown" && this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && MEvent.contains(maplet, "mousedown") > 0) {
        MEvent.trigger(this, 'mousedown', e)
    }
    this.tQ = '';
    if (this.ff && this.nI().qn(this.downX, this.downY)) {
        this.AP.tE(this.downX, this.downY);
        return false
    } else {
        var w9L = px ? event.srcElement : e.target;
        this.cL = (w9L.getAttribute(Ux3q) || w9L.getAttribute("traffic")) ? true : false;
        if (this.aY() && this.cS) {
            if (this.sS == ts.X420D && !this.snapshotBox.A$27p) {
                this.snapshotBox.show();
                this.snapshotBox.A$27p = true
            } else {
                this.sD.resize(1, 1);
                this.sD.show()
            }
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (px && (this.l6.indexOf("MPolyline") == this.l6.length - 9)) {
                this.$_T("move", event.srcElement)
            } else {
                eval(document.body.scrollTop);
                this.$_T("move", this.map)
            }
        }
    }
    if (this.cO && this.cL) {
        if (px || i079) {
            this.map.setCapture && this.map.setCapture()
        } else {
            e.p7K4e && e.p7K4e();
            e.D7f8 && e.D7f8()
        }
    }
};
Maplet.prototype.a5 = function (e) {
    if (!this.map)return;
    var Dl8t;
    if (this.map.getBoundingClientRect) {
        var r = this.map.getBoundingClientRect();
        Dl8t = [r.left, r.top]
    } else {
        Dl8t = E43(this.map);
        Dl8t[0] = Dl8t[0] - O4sk();
        Dl8t[1] = Dl8t[1] - YK2b()
    }
    this.offsetX = Dl8t[0] - this.left;
    this.offsetY = Dl8t[1] - this.top
};
Maplet.prototype.a4 = function (e) {
    MEvent.trigger(this, 'mouseout', e);
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    if (!px || (px && event.clientX != -1)) {
        var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
        var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
        if (this.cL) {
            this.u5B(Ap - this.left - (px ? 1 : 0) - this.moveX, Av - this.top - (px ? 1 : 0) - this.moveY)
        }
        this.moveX = Ap - this.left - (px ? 1 : 0);
        this.moveY = Av - this.top - (px ? 1 : 0);
        this.pNt = _8y63(this.moveX - this.downX);
        this.$5D2 = _8y63(this.moveY - this.downY)
    }
    if (this.$5Sn && MEvent.contains(this, "layer_mouseout") > 0) {
        MEvent.trigger(this, "layer_mouseout", {layer: this.$70, pid: this.$5Sn.p, area: this.$5Sn.l, data: this.$5Sn.d, name: this.$5Sn.n, rect: this.$5Sn.rect});
        this.$5Sn = null;
        this.$70 = null
    }
    this.cI = false;
    if (px)document.onmousewheel = new Function("return true");
    clearInterval(this.u28);
    this.u28 = undefined
};
Maplet.prototype.a3 = function (e) {
    if (this.cL && this.xc)this.xc.hide();
    this.cI = true;
    if (!this.cL)this.a5(e);
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    if (this.cL) {
        this.u5B((Ap) - this.left - this.moveX, (Av) - this.top - this.moveY)
    }
    this.moveX = (Ap) - this.left;
    this.moveY = (Av) - this.top;
    if (this.controlCanvas != null) {
        if (this.controlCanvas.onmousemove(e)) {
            return
        }
    }
    if (this.gc != null) {
        for (var n8 in this.gc) {
            if (this.gc[n8].toString().indexOf("MStandardControl") > 0 && this.gc[n8].nR && this.gc[n8].nR.onmousemove(e)) {
                return
            }
        }
    }
    if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly) {
        var x0 = "";
        if (this.sS == ts.tb) {
            if (!this.zy) {
                x0 = (en) ? "Double click to finish" : this.isHeX.sS55
            }
            showMouseTipBox(this.moveX + 6, this.moveY - 3, x0, this.map)
        } else {
            x0 = (en) ? "Double click to finish" : tX("%u8BFC%uDFC3%uA5C7%uD0CE%uE632");
            showMouseTipBox(this.moveX, this.moveY, x0, this.map)
        }
    } else if (this.sS == ts.tw) {
        if (this.gJ != null && this.gJ != "undefined" && this.gJ != "null" && this.gJ != "") {
            showMouseTipBox(this.moveX - this.gI.width / 2 - 10 - 1, this.moveY - this.gI.height - 2 - 18, "<img src='" + this.gI.src + "'>", this.map)
        } else {
            nX()
        }
    } else {
        nX()
    }
    if (this.ff && this.nI().tF(this.l6, this.moveX, this.moveY))return;
    if (this.sS == ts.ty && !this.cN) {
        var cF = false;
        if (this.aG != null && this.aH != null) {
            for (var qk = 0; qk < this.aG.length; qk++) {
                if (Math.abs(this.aG[qk] - this.moveX) < HOTSPOT_SIZE && Math.abs(this.aH[qk] - this.moveY) < HOTSPOT_SIZE) {
                    cF = true;
                    break
                }
            }
        }
        if (cF) {
            this.$_T("pointer", this.map)
        } else if (!this.cL) {
            this.$_T("default", this.map)
        }
        if (this.u_5 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (e.target.parentNode && e.target.parentNode.id == "LayerMap") || e.target.id.indexOf("OverlayBg") >= 0 || e.target.getAttribute(M9wA))) {
            var img = null;
            if (img = this.getImgByXY(this.moveX, this.moveY, true)) {
                this.loadLayerDataOfPassiveMode(img);
                var b = false;
                for (var i = this.M0D.length - 1; i >= 0; i--) {
                    if (typeof this.M0D[i] != "undefined") {
                        for (var k3n1 = this.M0D[i].length - 1; k3n1 >= 0; k3n1--) {
                            var QjG = this.M0D[i][k3n1];
                            if (!QjG.inZoomRange(this.AG))continue;
                            var d = QjG.C2$6Y(img, this.moveX, this.moveY);
                            if (d) {
                                if (this.$5Sn && this.$5Sn != d && MEvent.contains(this, "layer_mouseout") > 0) {
                                    MEvent.trigger(this, "layer_mouseout", {layer: QjG, pid: this.$5Sn.p, area: this.$5Sn.l, data: this.$5Sn.d, name: this.$5Sn.n, rect: this.$5Sn.rect})
                                }
                                if (this.$5Sn != d && MEvent.contains(this, "layer_mouseover") > 0) {
                                    this.$5Sn = d;
                                    this.$70 = QjG;
                                    MEvent.trigger(this, "layer_mouseover", {layer: QjG, pid: d.p, area: d.l, data: d.d, name: d.n, rect: d.rect})
                                }
                                if (MEvent.contains(this, "layer_mousemove") > 0)MEvent.trigger(this, "layer_mousemove", {layer: QjG, pid: d.p, area: d.l, data: d.d, name: d.n, rect: d.rect});
                                b = true;
                                break
                            } else if (this.$5Sn && this.$70 == QjG && MEvent.contains(this, "layer_mouseout") > 0) {
                                MEvent.trigger(this, "layer_mouseout", {layer: QjG, pid: this.$5Sn.p, area: this.$5Sn.l, data: this.$5Sn.d, name: this.$5Sn.n, rect: this.$5Sn.rect});
                                this.$5Sn = null;
                                this.$70 = null
                            }
                        }
                    }
                    if (b)break
                }
            }
        }
        if (MEvent.contains(maplet, "mousemove") > 0) {
            var pt = new MPoint(this.toMapCoordinate(this.moveX, this.moveY));
            MEvent.trigger(this, "mousemove", e, pt)
        }
    }
    if (this.cO && this.cL) {
        if (this.w367I)return;
        if (!this.C1_o) {
            this.no();
            this.C1_o = true
        }
        if (px) {
            if (!document.getElementById("_map_marker_speeder")) {
                var j7O1 = document.createElement("DIV");
                j7O1.id = "_map_marker_speeder";
                j7O1.style.display = "none";
                document.body.appendChild(j7O1)
            }
            document.getElementById("_map_marker_speeder").innerHTML = ""
        }
        if (iToolTipStyle == 0)hideToolTipMenu();
        if (iToolTipStyle == 0) {
            hideToolTipMenu()
        }
        this.pNt = _8y63(this.moveX - this.downX);
        this.$5D2 = _8y63(this.moveY - this.downY);
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo._A0(true)
        }
        this.sF.moveTo(this.pNt, this.$5D2);
        this.cN = true;
        this.cn = true;
        e.p7K4e && e.p7K4e();
        e.D7f8 && e.D7f8()
    } else if (this.cS && this.cL) {
        if (this.aY()) {
            this.cR = true;
            this.lu()
        }
    } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.u0S$) {
        var tP = this.zp(this.moveX, this.moveY);
        var tO = this.zo(this.moveX, this.moveY);
        if (this.sS == ts.u0S$) {
            if (this.h4nA.diep.length) {
                with (this.h4nA) {
                    if (u$_c._96 != tP || u$_c.$n5P != tO) {
                        u$_c._96 = tP;
                        u$_c.$n5P = tO;
                        if (!this.h4nA._49) {
                            u$_c.Cx9Q0 = tP;
                            u$_c.W2L8 = tO;
                            this.f788y(new MPoint(tP, tO, false))
                        }
                    }
                }
            }
            if (!this.h4nA.diep.length)this.$31X()
        } else if (this.zy != null) {
            if (this.sS == ts.tb) {
                var scrollX = 0, scrollY = 0, j9q3 = this.moveX, hwf0 = this.moveY, wD2 = this.l19S * 2, KO38 = this;
                if (j9q3 < wD2)scrollX = 50;
                if (j9q3 > (this.width - wD2))scrollX = -50;
                if (hwf0 < wD2)scrollY = 50;
                if (hwf0 > (this.height - wD2))scrollY = -50;
                if (scrollX != 0 || scrollY != 0) {
                    if (!this.u28) {
                        this.u28 = setInterval(function () {
                            KO38.panTo(scrollX, scrollY)
                        }, 100)
                    }
                } else {
                    if (this.u28) {
                        clearInterval(this.u28);
                        this.u28 = undefined;
                        this.tG.pts[1] = new MPoint(cq.zn(tP, tO));
                        this.tG.update()
                    }
                }
                var x0 = "";
                var D28S = this.wtd[this.wtd.length - 1];
                var AF1 = D28S.diep[D28S.diep.length - 1];
                var py8Q3 = AF1.L1tq;
                var L1tq = AF1.L1tq + this.measDistance([AF1.point, new MPoint(tP, tO, false)]);
                var tip = this.isHeX.F5g.replace(this.isHeX.SU_, (L1tq < 1000) ? L1tq + "\u7c73" : parseInt(L1tq / 100) / 10 + "\u516c\u91cc");
                x0 = (en) ? "Double click to finish" : tip;
                nX();
                showMouseTipBox(this.moveX + 6, this.moveY - 3, x0, this.map)
            }
            if (!this.u28) {
                this.tG.pts[1] = new MPoint(cq.zn(tP, tO));
                if (this.zy.brush.fill) {
                    this.tG.pts[2] = this.zy.pts[0]
                }
                this.tG.update()
            }
        }
    } else {
        if (this.l6 == "LayerDrawMap" && iToolTipStyle == 0) {
            hideToolTipMenu()
        }
    }
};
Maplet.prototype.a6 = function (e, l6, Ap, Av) {
    if (!this.cL)return;
    var wL = 0;
    var wM = 0;
    var li = 0;
    var lf = 0;
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    this.zQ = this.moveX;
    this.zR = this.moveY;
    this.dc3f = new Date().getTime();
    this.cL = false;
    if (this.l6.indexOf("MPolyline") != -1) {
        this.cn = false
    }
    if (e.type == "mouseup") {
        if (this.NXn < -this.ignoreMoveRange || this.NXn > this.ignoreMoveRange || this.$839 < -this.ignoreMoveRange || this.$839 > this.ignoreMoveRange)this.t41 = true
    } else {
        this.t41 = true
    }
    if (this.l6 != null) {
        if (this.l6.indexOf("ctrl") >= 0)this.sD.hide(); else if (e.type == "mouseup" && this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && MEvent.contains(maplet, "mouseup") > 0) {
            MEvent.trigger(this, 'mouseup', e)
        }
    }
    if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
        this.$_T("default", this.map)
    }
    if (this.ff && this.nI().tJ(this.zQ, this.zR)) {
        this.setZoomLevel(parseInt(this.AP.getZoomLevel()));
        return
    }
    if ((this.cN || this.cR) && (this.cS || this.cO)) {
        this.cN = false;
        this.cR = false;
        if (this.cO) {
            if (true || this.AG > 0) {
                wL = -(this.zQ - this.downX);
                wM = (this.zR - this.downY);
                li = this.zp(wL + this.width / 2, -wM + this.height / 2);
                lf = this.zo(wL + this.width / 2, -wM + this.height / 2);
                this.gA = li;
                this.gx = lf
            }
            var w9L = (px) ? event.srcElement : e.target;
            if (w9L.getAttribute(Ux3q)) {
                if (w9L.getAttribute(P1uR9) == "polyline")this.R9sb = true;
                if (w9L.getAttribute(P1uR9) == "marker")this.r8r1 = true
            }
            if (typeof basepoilist != "object" && !this.wB3 && this.h0D)this.h0D = false;
            this.MT$ = true;
            this.__RH = new Date().getTime();
            maplet.setZoomLevel(maplet.AG);
            this.MT$ = false;
            if (apiType == 1)MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2))); else MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2));
            if (this.allowDrawingDragMap && this.t41 && ((this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.u0S$)))this._H7 = false
        } else {
            var gX = 1;
            var gW = Math.max(1, Math.abs(this.zQ - this.downX));
            if (this.sS == 1) {
                {
                    wL = (this.zQ + this.downX) / 2;
                    wM = (this.zR + this.downY) / 2;
                    li = this.zp(wL, wM);
                    lf = this.zo(wL, wM);
                    this.gA = li;
                    this.gx = lf
                }
                if (gW < this.imgWidth) {
                    gX = Math.min(MAX_ZOOM_LEVEL - this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / gW) / Math.log(2))))
                }
                this.setZoomLevel(this.AG + gX);
                if (apiType == 1)MEvent.trigger(this, "zoomin", this.AG); else MEvent.trigger(this, "zoomin", "&act=zoomin&zm=" + this.AG)
            } else if (this.sS == 2) {
                wL = (this.zQ + this.downX) / 2;
                wM = (this.zR + this.downY) / 2;
                li = this.zp(wL, wM);
                lf = this.zo(wL, wM);
                this.gA = li;
                this.gx = lf;
                if (gW < this.imgWidth) {
                    gX = Math.min(this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / gW) / Math.log(2))))
                }
                this.setZoomLevel(this.AG - gX);
                if (apiType == 1)MEvent.trigger(this, "zoomout", this.AG); else MEvent.trigger(this, "zoomout", "&act=zoomout&zm=" + this.AG)
            } else if (this.sS == ts.tv) {
                var s6 = this.gA + (Math.max(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var s4 = this.gx - (Math.min(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = s6;
                cq.lf = s4;
                var s5 = cq.zn();
                var tl = this.gA + (Math.min(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var tj = this.gx - (Math.max(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = tl;
                cq.lf = tj;
                var tk = cq.zn();
                cq.li = tl;
                cq.lf = s4;
                var tm = cq.zn();
                cq.li = s6;
                cq.lf = tj;
                var s7 = cq.zn();
                var yg = "&act=lookup&max=" + s5 + "&min=" + tk + "&mmx=" + tm + "&mxm=" + s7;
                if (this.vA != "undefined")this.setMode(this.vA);
                this.cQ = true;
                if (apiType == 1) {
                    MEvent.trigger(this, "lookup", {action: "lookup", max: new MPoint(s5), min: new MPoint(tk), mmx: new MPoint(tm), mxm: new MPoint(s7)})
                } else {
                    MEvent.trigger(this, "lookup", yg)
                }
            } else if (this.sS == ts.X420D) {
                this.snapshotBox.mS52();
                this.snapshotBox.A$27p = false
            }
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
    }
    if (this.cO) {
        if (px || i079) {
            this.map.releaseCapture && this.map.releaseCapture()
        } else {
            e.p7K4e && e.p7K4e();
            e.D7f8 && e.D7f8()
        }
    }
};
Maplet.prototype.a7 = function (e) {
    if (!MOUSEWHEEL)return;
    function p8v() {
        if (this.yo47 == null) {
            this.yo47 = this.AG;
            p8v.apply(this)
        } else if (this.yo47 != this.Ai) {
            var xd = Math.abs(this.Ai - this.AG) / 10;
            var _4y = 0.25;
            xd = xd < _4y ? _4y : xd;
            if (this.tK < 0) {
                this.yo47 -= xd;
                if (this.yo47 <= this.Ai + 0.05) {
                    this.yo47 = this.Ai
                }
            } else {
                this.yo47 += xd;
                if (this.yo47 >= this.Ai - 0.1) {
                    this.yo47 = this.Ai
                }
            }
            if (this.yo47 != this.Ai) {
                var AK = Math.pow(2, this.yo47) / Math.pow(2, this.AG);
                var WFJ$ = (this.width / 2 - this.Q6G8F) * (AK - 1);
                var vr$ = (this.height / 2 - this.t$qb7) * (AK - 1);
                this.AN(this.yo47, WFJ$, vr$)
            }
            if (this.yo47 == this.Ai)p8v.apply(this); else getTimeout(this, p8v, 0)
        } else {
            this.yo47 = null;
            this.tK = 0;
            this.setZoomLevel(this.Ai);
            this.Ai = 0
        }
    };
    var l8 = e || window.event;
    if (typeof l8 == "object" && l8) {
        if (typeof l8.wheelDelta == "undefined")l8.wheelDelta = -l8.detail;
        if (typeof l8.srcElement == "undefined")l8.srcElement = l8.target;
        if (l8.wheelDelta == 0 || (this.AG == MIN_ZOOM_LEVEL && l8.wheelDelta < 0) || (this.AG == MAX_ZOOM_LEVEL && l8.wheelDelta > 0))return;
        if (this.fa)return;
        if (typeof this.tK == "undefined")this.tK = 0;
        if (typeof this.Ai == "undefined")this.Ai = 0;
        var r = uP5(l8.srcElement, oiY1);
        if (!r || r == "false") {
            tM8(l8);
            var i = l8.wheelDelta < 0 ? -1 : 1;
            this.tK += i < 0 ? Math.floor(i) : Math.ceil(i);
            if (this.tK == 0)return;
            var A4r3w = true;
            if (ContentInfo && ContentInfo.isVisible()) {
                var Qp9 = this.toScreenCoordinate(avBubble.E6539);
                if (_isInsideRect({x: Qp9[0], y: Qp9[1]}, {min: {x: 0, y: 0}, max: {x: this.width, y: this.height}})) {
                    A4r3w = false
                }
            }
            if (A4r3w) {
                this.N8Uw = "wheel";
                if (typeof this.l6 == "undefined")this.a3(l8);
                this.Q6G8F = this.moveX;
                this.t$qb7 = this.moveY;
                this.$q506 = this.toMapCoordinate(this.Q6G8F, this.t$qb7);
                this.xf7(l8.wheelDelta)
            }
            this.Ai = parseInt(this.AG + this.tK);
            if (this.Ai < MIN_ZOOM_LEVEL)this.Ai = MIN_ZOOM_LEVEL;
            if (this.Ai > MAX_ZOOM_LEVEL)this.Ai = MAX_ZOOM_LEVEL;
            if (ZOOM_TRANSITION && this.yo47 == null) {
                if (ContentInfo && ContentInfo.isVisible()) {
                    this.yo47 = this.Ai
                }
                p8v.apply(this)
            }
        }
    }
};
Maplet.prototype.u28 = undefined;
var px = false;
var m9o43 = false;
var Q48 = false;
var uoiR2 = false;
var i079 = false;
var ukX = false;
var xA5 = false;
var s_k2 = false;
var s;
var V77 = navigator.userAgent.toLowerCase();
if (s = V77.match(new RegExp("msie ([\\d.]+)"))) {
    px = true;
    if (Y32k(s[1], 0) == 6)m9o43 = true; else if (Y32k(s[1], 0) == 7)Q48 = true; else if (Y32k(s[1], 0) == 8)uoiR2 = true
} else if (s = V77.match(new RegExp("firefox\/([\\d.]+)"))) {
    i079 = true
} else if (s = V77.match(new RegExp("chrome\/([\\d.]+)"))) {
    ukX = true
} else if (s = V77.match(new RegExp("opera.([\\d.]+)"))) {
    s_k2 = true
} else if (s = V77.match(new RegExp("version\/([\\d.]+).*safari"))) {
    xA5 = true
}
var HMum5 = true;
if (px)HMum5 = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0") || document.implementation.hasFeature("org.w3c.svg", "1.0");
var K6_ = document.compatMode == "CSS1Compat";
var ut = document.qS ? 1 : 0;
var lm = (px) ? "document.all." : "document.";
var yj = (px) ? ".style" : "";
if (px && !HMum5) {
    document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
    document.write("<style>v\\:shape,v\\:stroke,v\\:fill,v\\:roundrect,v\\:oval,v\\:image {behavior:url(#default#VML)}</style>")
}
document.write("<style type='text/css'> ");
document.write(".ptlabel {  ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".tooltiptitle {");
document.write("  color: #CC5522; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-weight: bold; ");
document.write("  font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".tooltipcontent { ");
document.write("  color: #000000; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".hotspotlabel {");
document.write("  position: absolute;");
document.write("  color: #000; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".editableimg { ");
document.write("  position: absolute;");
document.write("  overflow: hidden;  ");
document.write("  cursor: pointer;");
document.write("  border: 1px solid #fff;  ");
document.write("  z-index: 1000;  ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 0px; ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write(".buffering {");
document.write("  position: absolute;");
document.write("  height: 16px;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 12px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 0px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 0px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write(".tiplabel { ");
document.write("  position: absolute;");
document.write("  height: 12px;");
document.write("  z-index: 0; white-space: nowrap; ");
document.write("  display: block; ");
document.write("  background-color: #FFFFCC;  ");
document.write("  border: 1px solid #f00;  ");
document.write("  color: #f00; ");
document.write("  font-size: 12px;");
document.write("  font-weight: bold; ");
document.write("}  ");
document.write("");
document.write("#ToolTip {  ");
document.write("  position: absolute;");
if (px) {
    document.write("  filter: alpha( opacity = 80 );")
} else {
    document.write("  opacity: 0.8;  ")
}
document.write("  width: 100px;");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  z-index: 24; ");
document.write("  visibility: hidden;");
document.write("}  ");
document.write("");
document.write("#loading {  ");
document.write("  position: absolute;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 13px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 0px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 4px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write("#mbglabel { ");
document.write("  position: absolute;");
document.write("  z-index: 0;  ");
document.write("  white-space: nowrap;  ");
document.write("  display: block; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mfglabel { ");
document.write("  position: absolute;");
document.write("  z-index: 0;  ");
document.write("  white-space: nowrap;  ");
document.write("  display: block; ");
document.write("  visibility: visible;  ");
document.write("  background-color: #FFFFCC;  ");
document.write("}  ");
document.write("");
document.write("#stylelabel {  ");
document.write("  position: absolute;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 80 );")
} else {
    document.write("  opacity: 0.8;  ")
}
document.write("  font-size: 13px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 1px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 4px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewport {");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 10; ");
document.write("  font-size: 0px; ");
if (m9o43 || Q48 || uoiR2) {
    document.write("  filter: alpha( opacity = 50 );")
} else {
    document.write("  opacity: 0.5;  ")
}
document.write("  background-color: white;  ");
document.write("  border: 2px solid white;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewframe {  ");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 11; ");
document.write("  font-size: 0px; ");
document.write("  border: 2px solid #D50F1E;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewpad_ctrl { ");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 12; ");
document.write("  font-size: 0px; ");
document.write("  border: 2px solid #D50F1E;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-bordertop {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-top: 1px solid #949694; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderbtm {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-bottom: 1px solid #949694; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderlft {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-left: 1px solid #949694;");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderrgt {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-right: 1px solid #949694;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write(".contextmenuitem {");
document.write("  color: #0E347F; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 9pt; ");
document.write("  padding-right: 6px; ");
document.write("  width: 100%; ");
document.write("}  ");
document.write("");
document.write(".contextmenutable {  ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("}  ");
document.write("");
document.write(".mapcontextmenu { ");
document.write("  position: absolute;");
document.write("  background-color: #FFFFFF; ");
document.write("  padding: 1px; ");
document.write("  border: 1px outset #cccccc; ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  z-index: 24; ");
document.write("  visibility: hidden;");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT, ");
document.write("  .mapCirEdging .borB { ");
document.write("  height: 1px; ");
document.write("  margin: 0 1px;  ");
document.write("  border-bottom: 1px solid #8F8F8F; ");
document.write("  line-height: 1px;  ");
document.write("  font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borB {");
document.write("  border: 0;");
document.write("  border-top: 1px solid #8F8F8F; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT2, .mapCirEdging .borB2 { ");
document.write("  height: 1px; ");
document.write("  border: 1px solid #BCBCBC;  ");
document.write("  border-top: 0;  ");
document.write("  border-bottom: 0;  ");
document.write("  line-height: 1px;  ");
document.write("  font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPBox2 { ");
document.write("  height: auto;");
document.write("  border: 1px solid #8F8F8F;  ");
document.write("  border-top: 0;  ");
document.write("  border-bottom: 0;  ");
document.write("  background: #fff;  ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPbox {  ");
document.write("  margin: 3px; ");
document.write("  font-size: 12px;");
document.write("  text-align: left;  ");
document.write("}  ");
document.write(".snapshotTextBtn {  ");
document.write("  padding-top: 3px; ");
document.write("  padding-bottom: 3px; ");
document.write("  padding-left: 4px; ");
document.write("  padding-right: 4px; ");
document.write("  margin-left: 2px; ");
document.write("  font-family: \u5b8b\u4f53; ");
document.write("  font-size: 13px;");
document.write("  text-align: center;  ");
document.write("  font-weight: normal;  ");
document.write("  letter-spacing: 1px;  ");
document.write("  background: #0E347F;  ");
document.write("  color: white;  ");
document.write("}  ");
document.write(".roadlineTip {  ");
document.write("  padding: 2px; ");
document.write("  font-family: \u5b8b\u4f53; ");
document.write("  font-size: 13px;");
document.write("  color: #666666;");
document.write("  border: 1px solid #666666;  ");
document.write("  background: none repeat scroll 0 0 #FFFFFF;  ");
document.write("  white-space: nowrap;  ");
document.write("}  ");
document.write(".roadlineTip_distance {  ");
document.write("  color: black;");
document.write("  white-space: nowrap;  ");
document.write("}  ");
document.write(".pointBox{position:absolute;z-index:100}");
document.write(".pointBox .PMain{padding:0 10px;border: 2px solid rgb(14, 52, 127); background:#fff }");
document.write(".pointBox .pointer{overflow:hidden;width:15px;height:14px;margin:-4px 0 0;background:url(images/pointBg.png) no-repeat;_background:none}");
document.write(".pointBox .pointer img{display:none;_display:block;width:15px;height:14px;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBg.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".pointBox .BoxBg{position:absolute;z-index:-1;width:100%;margin:auto 0 0 8px;padding-top:5px;background:#666;filter:alpha(opacity=60);opacity:0.6}");
document.write(".rightThis .pointer{width:auto;margin:-4px 0 0;background-position:100% -16px!important;_background:none}");
document.write(".rightThis .pointer img{_position:absolute;_right:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBgR.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".rightThis .BoxBg{margin:auto 15px 0 0;left:-5px}");
document.write("</style>");
if (typeof xl == "undefined")var xl = strImgsvrUrl;
if (typeof ds == "undefined")var ds = "mapbar";
if (typeof en == "undefined")var en = 0;
if (typeof rs == "undefined")var rs = 0;
if (typeof apiType == "undefined")var apiType = 0;
if (typeof hs == "undefined")var hs = false;
if (typeof MOUSEWHEEL == "undefined")var MOUSEWHEEL = true;
if (typeof kp == "undefined")var kp = true;
if (typeof bDefaultControlOn == "undefined")var bDefaultControlOn = false;
if (typeof hbo == "undefined")var hbo = false;
if (typeof otp == "undefined")var otp = false;
if (typeof ZOOM_TRANSITION == "undefined")var ZOOM_TRANSITION = true;
if (typeof bsc == "undefined")var bsc = true;
if (typeof __mapbar_magic_id == "undefined")var __mapbar_magic_id = "";
if (typeof REFRESH_MK_INDEX != "boolean")var REFRESH_MK_INDEX = true;
if (typeof SNAPSHOT_SERVER != "string")var SNAPSHOT_SERVER = "http://staticmap.mapbar.com/staticmap/";
if (typeof SNAPSHOT_MAPIMG_URI_PREFIX != "string")var SNAPSHOT_MAPIMG_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/";
if (typeof SNAPSHOT_MARKER_URI_PREFIX != "string")var SNAPSHOT_MARKER_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/mapbank/ditu/";
var SNAPSHOT_OPTIONS = {mode: "fullscreen", format: "png", depth: 0, processMode: "event"};
if (typeof ALLOW_MV != "boolean")var ALLOW_MV = true;
if (typeof Ux3q != "string")var Ux3q = "_dragmap";
if (typeof P1uR9 != "string")var P1uR9 = "_overlay";
if (typeof oiY1 != "string")var oiY1 = "_disable_mw";
if (typeof M9wA != "string")var M9wA = "_mlayer";
var c75 = 0;
var ac = null;
var ad = true;
if (typeof bp == "undefined")var bp = true;
if (typeof oo == "undefined")var oo = true;
if (typeof bmc == "undefined")var bmc = false;
if (typeof OVER_LOCATION != "object" || OVER_LOCATION)var OVER_LOCATION = null;
if (typeof STD_BUBBLE_WIDTH == "undefined")var STD_BUBBLE_WIDTH = 217;
if (typeof MIN_BUBBLE_HEIGHT == "undefined")var MIN_BUBBLE_HEIGHT = 120;
if (typeof OVER_WIN_WIDTH != "number") {
    OVER_WIN_WIDTH = 150
} else {
    if (OVER_WIN_WIDTH < 100)OVER_WIN_WIDTH = 100; else if (OVER_WIN_WIDTH > 210)OVER_WIN_WIDTH = 210
}
if (typeof OVER_WIN_HEIGHT != "number") {
    OVER_WIN_HEIGHT = 120
} else {
    if (OVER_WIN_HEIGHT < 100)OVER_WIN_HEIGHT = 100; else if (OVER_WIN_HEIGHT > 210)OVER_WIN_HEIGHT = 210
}
if (typeof MAX_BUBBLE_HEIGHT == "undefined")var MAX_BUBBLE_HEIGHT = 380;
var sX = strImgsvrUrl + "images/mask.gif";
var ul = strImgsvrUrl + "images/node.gif";
var lV = strImgsvrUrl + "images/wmk.gif";
if (typeof LPN_HOVERING_TIME == "undefined")var LPN_HOVERING_TIME = 100;
if (typeof HOTSPOT_SIZE == "undefined")var HOTSPOT_SIZE = 8;
if (typeof DISABLE_DBCLICK_ZOOM == "undefined")var DISABLE_DBCLICK_ZOOM = false;
var $05D6 = null;
if (typeof gQ == "undefined")gQ = 0;
var xz = '';
var AB = "";
document.write('<img id="sendmapload" style="display:none;visibility:hidden;" />');
document.writeln('<div id="myalert" style="position:absolute;z-index:100000;filter:alpha(opacity=85);opacity:0.85;display:none;background-color:white;padding:1px;"></div>');
if (typeof bArrow == "undefined") {
    var bArrow = 0
}
var sB = new Image();
var initialize = 0;
var xN = (en == 0) ? new Array(tX('%u5415%uDD90%uE7F2%uD86E'), tX('%u5415%uA728%uB18A%uD86E'), tX('%u5415%uA22D%uAC8F%uD86E'), tX('%u5415%uA768%uB1CA%uD86E'), tX('%u6D4F%uFF1A%u1FAC%u0798'), tX('%u70BF%uC2B4%uE1D6%u1827%u0775%uE467'), tX('%u6540%uBE65'), tX('%u7F2B%uDB38'), tX('%u62D1%uB571%uC179%uC628%uE732%u1827%u0775%uE467')) : new Array('Go left', 'Go up', 'Go right', 'Go down', 'Measure distance', 'Click to zoom', 'Zoom In', 'Zoom Out', 'Drag to zoom');
var lt = (en == 0) ? "\u62D6\u62FD\u6B64\u70B9" : "drag to move this point";
var pe = new Array();
var pa = new Array();
var pF = 2;
var sI = new Array('W', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
var sj = new Array(90, 40, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01, 0.005, 0.002, 0.001);
var qP = new Array(90 * 0.8, 40 * 0.8, 20 * 0.8, 10 * 0.8, 5 * 0.8, 2 * 0.8, 0.8, 0.5 * 0.8, 0.2 * 0.8, 0.1 * 0.8, 0.05 * 0.8, 0.02 * 0.8, 0.01 * 0.8, 0.005 * 0.8, 0.002 * 0.8, 0.001 * 0.8);
var nM = new Array(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 50, 50, 50, 50, 50, 50);
var w8 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, -150, 0, 0, 0, 0);
if (typeof DEFAULT_MAX_ZOOM_LEVEL != "number")var DEFAULT_MAX_ZOOM_LEVEL = 14;
if (typeof DEFAULT_MIN_ZOOM_LEVEL != "number")var DEFAULT_MIN_ZOOM_LEVEL = 0;
var MAX_ZOOM_LEVEL = DEFAULT_MAX_ZOOM_LEVEL;
var MIN_ZOOM_LEVEL = DEFAULT_MIN_ZOOM_LEVEL;
var wp = 100000;
var sw = 105;
var sx = 35;
var sz = new Array(-360, 360);
var sy = new Array(-90, 90);
var FjJ3 = null;
var uU = 8;
var uS = 15;
var uT = strImgsvrUrl + 'images/overclose.gif';
var uV = strImgsvrUrl + 'images/overopen.gif';
if (!otp) {
    uT = strImgsvrUrl + 'images/overclose2.gif';
    uV = strImgsvrUrl + 'images/overopen2.gif'
}
var uW = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var bpp = [xl + "mapbank/base/", 13, 14];
var vs = strMapsvrUrl + "images/done.gif";
var vt = strMapsvrUrl + "images/edit.gif";
var v3 = strMapsvrUrl + "images/stretch.gif";
var at = 0;
var as = 1;
var au = 2;
var av = 0;
var ar = 2;
var s9 = 1001;
if (typeof TRAFFIC_REFRESH_INTERVAL != "number")var TRAFFIC_REFRESH_INTERVAL = 5 * 60;
if (typeof TRAFFIC_MIN_LEVEL != "number")var TRAFFIC_MIN_LEVEL = 8;
if (typeof TRAFFIC_MAX_LEVEL != "number")var TRAFFIC_MAX_LEVEL = MAX_ZOOM_LEVEL;
if (typeof kN41 != "number")var kN41 = 9;
if (typeof g23t != "number")var g23t = MAX_ZOOM_LEVEL;
if (typeof d7q58 != "boolean")var d7q58 = false;
if (typeof GOLDPOI_TXTRQT_RANDOM != "boolean")var GOLDPOI_TXTRQT_RANDOM = true;
var sGF34 = 6371393;

