(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer_mobile","this.Container_7B625D2A_6188_816C_41AE_DCFD6A81FF65_mobile","this.Container_6D25C29F_738B_D85F_41D6_42C675A272BF_mobile","this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile","this.Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile","this.Container_72F51EB0_6DA5_8DE9_41D9_8FFA57FEA011_mobile"],"backgroundColorRatios":[0],"class":"Player","layout":"absolute","watermark":false,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist]); this.syncPlaylists([this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist,this.mainPlayList])","minHeight":20,"id":"rootPlayer","data":{"initialScale":0.5,"history":{},"defaultLocale":"ru","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false},"surfaceSelectionHotspotMode":"hotspotEnabled","name":"Player18403","displayTooltipInTouchScreens":true,"locales":{"ru":"locale/ru.txt"}},"hash": "21506af9304fca478ebbd81b2301ec6377007894d77051447e5b4fd1ee1724fd", "definitions": [{"layout":"horizontal","class":"Container","minHeight":1,"id":"Container_6D25C29F_738B_D85F_41D6_42C675A272BF_mobile","minWidth":1,"scrollBarOpacity":0,"left":0,"backgroundOpacity":0,"right":0,"verticalAlign":"middle","data":{"name":"\u043a\u043d\u043e\u043f\u043a\u0438 \u042d\u0422\u0410\u0416\u0418"},"scrollBarColor":"#000000","horizontalAlign":"center","scrollBarWidth":5,"bottom":40,"height":40,"visible":false,"gap":4,"scrollBarMargin":1,"overflow":"hidden","children":["this.IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262_mobile","this.IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52_mobile"]},{"enterPointingToHorizon":true,"id":"panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_camera","initialPosition":{"pitch":0.34,"class":"PanoramaCameraPosition","hfov":115,"yaw":-78.38},"class":"PanoramaCamera"},{"enterPointingToHorizon":true,"id":"panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_camera","initialPosition":{"pitch":-0.12,"class":"PanoramaCameraPosition","hfov":115,"yaw":-110.13},"class":"PanoramaCamera"},{"itemThumbnailBorderSize":0,"layout":"horizontal","toolTipFontFamily":"Arial","backgroundColorRatios":[0],"class":"ThumbnailList","itemBackgroundColorDirection":"vertical","minHeight":10,"itemThumbnailOpacity":1,"rollOverItemBackgroundOpacity":0,"minWidth":10,"itemLabelFontStyle":"normal","itemLabelFontFamily":"Arial","left":"0%","itemMode":"thumbnail-only","rollOverItemThumbnailShadow":false,"itemThumbnailWidth":94,"data":{"name":"ThumbnailList35762"},"itemPaddingTop":3,"toolTipBorderColor":"#767676","scrollBarWidth":2,"toolTipShadowBlurRadius":1,"itemThumbnailHeight":70,"itemLabelFontWeight":"normal","selectedItemLabelFontColor":"#FFCC00","toolTipShadowColor":"#333333","toolTipBorderRadius":1,"toolTipFontSize":6,"toolTipTextShadowBlurRadius":1,"selectedItemLabelFontWeight":"bold","itemBackgroundOpacity":0,"toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","toolTipDisplayTime":5000,"itemThumbnailShadowOpacity":0.16,"itemBackgroundColorRatios":[],"itemThumbnailShadowBlurRadius":8,"playList":"this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist","itemPaddingRight":3,"scrollBarOpacity":0.3,"id":"ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile","rollOverItemLabelFontWeight":"normal","backgroundColor":["#000000"],"backgroundOpacity":0.04,"itemBackgroundColor":[],"itemThumbnailBorderRadius":21,"itemThumbnailShadow":false,"itemThumbnailShadowSpread":1,"horizontalAlign":"center","scrollBarColor":"#FFFFFF","itemLabelGap":0,"propagateClick":false,"itemThumbnailShadowColor":"#000000","paddingLeft":5,"toolTipBackgroundColor":"#F6F6F6","itemThumbnailScaleMode":"fit_outside","toolTipPaddingRight":3,"top":"0%","itemBorderRadius":0,"toolTipPaddingLeft":3,"paddingRight":5,"itemLabelFontColor":"#FFFFFF","height":102.65,"itemPaddingBottom":3,"itemLabelTextDecoration":"none","itemPaddingLeft":3,"scrollBarMargin":0.5,"itemLabelFontSize":7,"width":"100%"},{"class":"IconButton","iconURL":"skin/IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF.png","minHeight":1,"id":"IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u0431\u043b\u0438\u0436\u0435"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":25,"width":25},{"overlays":["this.overlay_B226AFCD_BDE2_BCBF_41AB_BA9F00A67F4B","this.overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E"],"hfov":360,"hfovMax":130,"class":"Panorama","label":trans('panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3.label'),"thumbnailUrl":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_t.jpg","id":"panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3","frames":[{"thumbnailUrl":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":9,"width":27648,"url":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_0/{face}/0/{row}_{column}.jpg","colCount":54,"height":4608,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":5,"width":15360,"url":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_0/{face}/1/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":3,"width":9216,"url":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_0/{face}/2/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":2,"width":6144,"url":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_0/{face}/3/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":1,"width":3072,"url":"media/panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_0/{face}/4/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}],"class":"ImageResource"}}],"adjacentPanoramas":[{"data":{"overlayID":"overlay_B226AFCD_BDE2_BCBF_41AB_BA9F00A67F4B"},"yaw":126.89,"panorama":"this.panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA","distance":100,"backwardYaw":-78.32,"class":"AdjacentPanorama","select":"this.overlay_B226AFCD_BDE2_BCBF_41AB_BA9F00A67F4B.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E"},"yaw":-52.95,"panorama":"this.panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63","distance":100,"backwardYaw":69.17,"class":"AdjacentPanorama","select":"this.overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"2"},"vfov":180,"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0"},{"class":"IconButton","iconURL":"skin/IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7.png","minHeight":1,"id":"IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u0432\u0432\u0435\u0440\u0445"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":25,"width":25},{"class":"IconButton","iconURL":"skin/IconButton_78F6A9BF_6189_8163_41D0_BB865E015852.png","minHeight":1,"id":"IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u0434\u0430\u043b\u044c\u0448\u0435"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":25,"width":25},{"scaleMode":"fit_inside","class":"Image","click":"this.toggleVR()","minHeight":1,"id":"Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"Image16028"},"backgroundOpacity":0,"url":trans('Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile.url'),"propagateClick":false,"horizontalAlign":"center","height":20,"width":20,"cursor":"hand"},{"class":"ViewerArea","progressBottom":0,"subtitlesTextShadowOpacity":1,"displayTooltipInSurfaceSelection":false,"minHeight":25,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","minWidth":50,"width":"100%","progressBarBorderSize":0,"playbackBarHeadShadowBlurRadius":1.5,"progressLeft":0,"playbackBarHeadBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"progressBackgroundColor":["#666666"],"subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleOpacity":0.13,"toolTipBorderColor":"#767676","progressBarBorderRadius":0,"firstTransitionDuration":0,"progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderRadius":0,"subtitlesFontFamily":"Arial","toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"playbackBarBackgroundOpacity":1,"toolTipFontSize":"6px","toolTipShadowColor":"#333333","playbackBarHeadShadowOpacity":0.7,"subtitlesEnabled":false,"toolTipTextShadowBlurRadius":1,"playbackBarHeadShadow":true,"toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","progressBorderSize":0,"progressBorderRadius":0,"vrPointerColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressRight":0,"toolTipDisplayTime":5000,"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FFFF00","subtitlesGap":0,"playbackBarBottom":5,"id":"MainViewer_mobile","playbackBarBorderColor":"#FFFFFF","playbackBarHeight":10,"toolTipOpacity":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","vrPointerSelectionTime":1800,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColor":["#000000"],"propagateClick":false,"toolTipPaddingRight":3,"progressHeight":2,"toolTipBackgroundColor":"transparent","playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarProgressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarRight":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","toolTipPaddingLeft":3,"playbackBarHeadWidth":6,"height":"100%","progressBorderColor":"#000000","playbackBarBorderSize":0},{"overflow":"hidden","backgroundColorRatios":[1],"class":"Container","layout":"horizontal","minHeight":1,"id":"Container_72F51EB0_6DA5_8DE9_41D9_8FFA57FEA011_mobile","minWidth":1,"scrollBarOpacity":0,"backgroundColor":["#CC0000"],"left":0,"backgroundOpacity":0.95,"verticalAlign":"middle","data":{"name":"Container16271"},"horizontalAlign":"center","scrollBarColor":"#000000","propagateClick":false,"scrollBarWidth":5,"bottom":0,"height":40,"gap":4,"scrollBarMargin":0,"cursor":"hand","children":["this.Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile"],"width":40},{"overlays":["this.overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE","this.overlay_AF201900_BDE1_A5A5_4196_C5743F510EF8"],"hfov":360,"hfovMax":130,"class":"Panorama","label":trans('panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63.label'),"thumbnailUrl":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_t.jpg","id":"panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63","frames":[{"thumbnailUrl":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":9,"width":27648,"url":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_0/{face}/0/{row}_{column}.jpg","colCount":54,"height":4608,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":5,"width":15360,"url":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_0/{face}/1/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":3,"width":9216,"url":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_0/{face}/2/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":2,"width":6144,"url":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_0/{face}/3/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":1,"width":3072,"url":"media/panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_0/{face}/4/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}],"class":"ImageResource"}}],"adjacentPanoramas":[{"data":{"overlayID":"overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE"},"yaw":69.17,"panorama":"this.panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3","distance":12.23,"backwardYaw":-52.95,"class":"AdjacentPanorama","select":"this.overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"3"},"vfov":180,"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0"},{"items":[{"camera":"this.panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_camera","media":"this.panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},"this.PanoramaPlayListItem_DD94B78D_D35F_C620_41DB_3F86FBC9A87A",{"camera":"this.panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_camera","media":"this.panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList","id":"mainPlayList"},{"class":"IconButton","iconURL":"skin/IconButton_78F17661_6188_831F_41C5_D05323306B82.png","minHeight":1,"id":"IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u0432\u043d\u0438\u0437"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":25,"width":25},{"click":"this.set('fullscreenEnabled', true); this.set('fullscreenEnabled', false)","class":"IconButton","iconURL":"skin/IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529.png","minHeight":1,"id":"IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"vr"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":25,"width":25},{"selectedBackgroundColor":"#202020","rollOverFontColor":"#FFFFFF","rollOverBackgroundColor":"#000000","fontFamily":"Arial","backgroundColor":"#404040","opacity":0.4,"class":"Menu","label":trans('Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0.label'),"distance":2,"fontColor":"#FFFFFF","children":["this.MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275","this.MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C","this.MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3"],"selectedFontColor":"#FFFFFF","rollOverOpacity":0.8,"id":"Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0"},{"enterPointingToHorizon":true,"id":"panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_camera","initialPosition":{"pitch":-0.22,"class":"PanoramaCameraPosition","hfov":115,"yaw":126.61},"class":"PanoramaCamera"},{"scaleMode":"fit_inside","class":"Image","minHeight":1,"id":"Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"Image11314"},"backgroundOpacity":0,"right":4.89,"propagateClick":false,"horizontalAlign":"center","url":trans('Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile.url'),"bottom":1.5,"height":30,"visible":false,"cursor":"hand","width":60},{"class":"IconButton","iconURL":"skin/IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4.png","minHeight":1,"id":"IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u043f\u0440\u0430\u0432\u043e"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":25,"width":25},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DD94B78D_D35F_C620_41DB_3F86FBC9A87A, -78.3902236487307, 0.34254310946455624, 115 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"IconButton","iconURL":"skin/IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262.png","minHeight":1,"id":"IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u0432\u0432\u0435\u0440\u0445"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":35,"width":35,"visible":false},{"layout":"horizontal","class":"Container","minHeight":1,"id":"Container_7B625D2A_6188_816C_41AE_DCFD6A81FF65_mobile","minWidth":1,"scrollBarOpacity":0,"left":0,"backgroundOpacity":0,"right":0,"verticalAlign":"middle","data":{"name":"\u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438"},"scrollBarColor":"#000000","horizontalAlign":"center","scrollBarWidth":5,"bottom":0,"height":40,"gap":4,"scrollBarMargin":1,"overflow":"hidden","children":["this.IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","this.IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","this.IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","this.IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","this.IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","this.IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","this.IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529_mobile"]},{"class":"IconButton","iconURL":"skin/IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52.png","minHeight":1,"id":"IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u0432\u043d\u0438\u0437"},"backgroundOpacity":0,"transparencyActive":true,"propagateClick":false,"horizontalAlign":"center","height":35,"width":35},{"overlays":["this.overlay_623616E0_7398_79E1_41D3_279E22DFA418","this.overlay_51EC3805_7389_C823_41B4_C65AF5E847E1"],"hfov":360,"hfovMax":130,"class":"Panorama","label":trans('panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA.label'),"thumbnailUrl":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_t.jpg","id":"panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA","frames":[{"thumbnailUrl":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":9,"width":27648,"url":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_0/{face}/0/{row}_{column}.jpg","colCount":54,"height":4608,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":5,"width":15360,"url":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_0/{face}/1/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":3,"width":9216,"url":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_0/{face}/2/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":2,"width":6144,"url":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_0/{face}/3/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand"},{"rowCount":1,"width":3072,"url":"media/panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_0/{face}/4/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}],"class":"ImageResource"}}],"adjacentPanoramas":[{"data":{"overlayID":"overlay_51EC3805_7389_C823_41B4_C65AF5E847E1"},"yaw":-78.32,"panorama":"this.panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3","distance":6.6,"backwardYaw":126.89,"class":"AdjacentPanorama","select":"this.overlay_51EC3805_7389_C823_41B4_C65AF5E847E1.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"1"},"vfov":180,"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0"},{"items":[{"camera":"this.panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63_camera","class":"PanoramaPlayListItem","media":"this.panorama_B0E7ADB7_BDEF_BCEA_41CC_EE0A8F058C63","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_camera","class":"PanoramaPlayListItem","media":"this.panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3_camera","class":"PanoramaPlayListItem","media":"this.panorama_B096FCE7_BDEF_9C6B_41D2_8199452381E3","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList","id":"ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist"},{"class":"IconButton","iconURL":"skin/IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086.png","minHeight":1,"id":"IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u043b\u0435\u0432\u043e"},"backgroundOpacity":0,"transparencyActive":true,"horizontalAlign":"center","height":25,"width":25},{"arrowKeysAction":"translate","buttonMoveRight":"this.IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","viewerArea":"this.MainViewer_mobile","buttonMoveUp":"this.IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","surfaceSelectionVerticalAngle":61.2,"class":"PanoramaPlayer","buttonMoveLeft":"this.IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","buttonZoomOut":"this.IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","surfaceSelectionHorizontalAngle":30.6,"buttonMoveDown":"this.IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","displayPlaybackBar":true,"surfaceSelectionEnabled":true,"aaEnabled":true,"buttonZoomIn":"this.IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"class":"PlayerMenuItem","label":trans('TDVAuthor.label'),"id":"TDVAuthor"},{"data":{"label":"spot0"},"items":[{"pitch":0.27,"offsetY":22.5,"yaw":126.89,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","width":45,"data":{"label":"spot0"},"offsetX":22.5}],"maps":[],"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"areas":["this.FlatHotspotPanoramaOverlayArea_B2278FCE_BDE2_BCBD_41A6_D3F482929395"],"id":"overlay_B226AFCD_BDE2_BCBF_41AB_BA9F00A67F4B","enabledInCardboard":true},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-0.84,"offsetY":22.5,"yaw":-52.95,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","width":45,"data":{"label":"spot0"},"offsetX":22.5}],"maps":[],"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"areas":["this.FlatHotspotPanoramaOverlayArea_B2187A1E_BDE2_E7DD_41E3_FDE9D77073E5"],"id":"overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E","enabledInCardboard":true},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-7.91,"offsetY":22.5,"yaw":69.17,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","width":45,"data":{"label":"spot0"},"offsetX":22.5}],"maps":[],"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"areas":["this.FlatHotspotPanoramaOverlayArea_B20BB228_BDE2_67E5_41CF_41E549ADFA9E"],"id":"overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE","enabledInCardboard":true},{"pitch":34.38,"class":"LensFlarePanoramaOverlay","yaw":-35.55,"bleaching":0.7,"id":"overlay_AF201900_BDE1_A5A5_4196_C5743F510EF8"},{"camera":"this.panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA_camera","media":"this.panorama_B3B79C6D_BDE1_FC7F_41D7_8C0DF29F97FA","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_DD94B78D_D35F_C620_41DB_3F86FBC9A87A"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"MenuItem","label":trans('MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275.label'),"id":"MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"MenuItem","label":trans('MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C.label'),"id":"MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"MenuItem","label":trans('MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3.label'),"id":"MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3"},{"pitch":42.21,"class":"LensFlarePanoramaOverlay","yaw":4.93,"bleaching":0.7,"id":"overlay_623616E0_7398_79E1_41D3_279E22DFA418"},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-14.43,"offsetY":22.5,"yaw":-78.32,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","width":45,"data":{"label":"spot0"},"offsetX":22.5}],"maps":[],"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"areas":["this.FlatHotspotPanoramaOverlayArea_51E5E818_7389_C821_41D2_497FA04A1B69"],"id":"overlay_51EC3805_7389_C823_41B4_C65AF5E847E1","enabledInCardboard":true},{"class":"ImageResource","levels":[{"width":90,"url":"media/res_57CE420E_738B_D821_41A0_94D5D57E8CE6_0.png","height":90,"class":"ImageResourceLevel"}],"id":"res_57CE420E_738B_D821_41A0_94D5D57E8CE6"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","id":"FlatHotspotPanoramaOverlayArea_B2278FCE_BDE2_BCBD_41A6_D3F482929395"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","id":"FlatHotspotPanoramaOverlayArea_B2187A1E_BDE2_E7DD_41E3_FDE9D77073E5"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","id":"FlatHotspotPanoramaOverlayArea_B20BB228_BDE2_67E5_41CF_41E549ADFA9E"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","id":"FlatHotspotPanoramaOverlayArea_51E5E818_7389_C821_41D2_497FA04A1B69"}],"backgroundColor":["#000000"],"minWidth":20,"defaultVRPointer":"gaze","left":447.5,"vrPolyfillScale":0.96,"scrollBarColor":"#000000","propagateClick":false,"scripts":{"enableVR":TDV.Tour.Script.enableVR,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"shareSocial":TDV.Tour.Script.shareSocial,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"toggleVR":TDV.Tour.Script.toggleVR,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"disableVR":TDV.Tour.Script.disableVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeJS":TDV.Tour.Script.executeJS,"quizShowScore":TDV.Tour.Script.quizShowScore,"initAnalytics":TDV.Tour.Script.initAnalytics,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"existsKey":TDV.Tour.Script.existsKey,"setValue":TDV.Tour.Script.setValue,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"init":TDV.Tour.Script.init,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showWindow":TDV.Tour.Script.showWindow,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getKey":TDV.Tour.Script.getKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"isPanorama":TDV.Tour.Script.isPanorama,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initQuiz":TDV.Tour.Script.initQuiz,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"translate":TDV.Tour.Script.translate,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"createTween":TDV.Tour.Script.createTween,"mixObject":TDV.Tour.Script.mixObject,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia},"height":"100%","menu":["this.TDVAuthor"],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"scrollBarMargin":2,"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.18.js.map
})();
//Generated with v2024.0.18, Mon Oct 28 2024