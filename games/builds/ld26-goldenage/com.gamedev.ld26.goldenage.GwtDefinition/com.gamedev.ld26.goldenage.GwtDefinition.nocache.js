function com_gamedev_ld26_goldenage_GwtDefinition(){
  var $intern_0 = '', $intern_36 = '" for "gwt:onLoadErrorFn"', $intern_34 = '" for "gwt:onPropertyErrorFn"', $intern_21 = '"><\/script>', $intern_10 = '#', $intern_60 = '.cache.html', $intern_12 = '/', $intern_24 = '//', $intern_54 = '0BB0CA05022BBD04FA695A88DFF6A79F', $intern_55 = '4229EE92C13E87767B07F6324C994EB2', $intern_59 = ':', $intern_28 = '::', $intern_73 = '<script defer="defer">com_gamedev_ld26_goldenage_GwtDefinition.onInjectionDone(\'com.gamedev.ld26.goldenage.GwtDefinition\')<\/script>', $intern_20 = '<script id="', $intern_69 = '<script language="javascript" src="', $intern_31 = '=', $intern_11 = '?', $intern_56 = 'A1A55B94E0B009A1BC0BC14F7D9AD2DA', $intern_33 = 'Bad handler "', $intern_67 = 'DOMContentLoaded', $intern_57 = 'E58F44082A7D89BB2A2D426F77D3E5E2', $intern_58 = 'FB4B9BAC6A6AE40D32E94205B9A21B16', $intern_22 = 'SCRIPT', $intern_19 = '__gwt_marker_com.gamedev.ld26.goldenage.GwtDefinition', $intern_23 = 'base', $intern_15 = 'baseUrl', $intern_4 = 'begin', $intern_3 = 'bootstrap', $intern_14 = 'clear.cache.gif', $intern_1 = 'com.gamedev.ld26.goldenage.GwtDefinition', $intern_17 = 'com.gamedev.ld26.goldenage.GwtDefinition.nocache.js', $intern_27 = 'com.gamedev.ld26.goldenage.GwtDefinition::', $intern_30 = 'content', $intern_9 = 'end', $intern_48 = 'gecko', $intern_49 = 'gecko1_8', $intern_5 = 'gwt.codesvr=', $intern_6 = 'gwt.hosted=', $intern_7 = 'gwt.hybrid', $intern_61 = 'gwt/chrome/chrome.css', $intern_35 = 'gwt:onLoadErrorFn', $intern_32 = 'gwt:onPropertyErrorFn', $intern_29 = 'gwt:property', $intern_66 = 'head', $intern_52 = 'hosted.html?com_gamedev_ld26_goldenage_GwtDefinition', $intern_65 = 'href', $intern_45 = 'ie10', $intern_47 = 'ie8', $intern_46 = 'ie9', $intern_37 = 'iframe', $intern_13 = 'img', $intern_38 = "javascript:''", $intern_62 = 'link', $intern_51 = 'loadExternalRefs', $intern_25 = 'meta', $intern_40 = 'moduleRequested', $intern_8 = 'moduleStartup', $intern_44 = 'msie', $intern_26 = 'name', $intern_39 = 'position:absolute;width:0;height:0;border:none', $intern_63 = 'rel', $intern_43 = 'safari', $intern_16 = 'script', $intern_53 = 'selectingPermutation', $intern_71 = 'soundmanager2-jsmin.js', $intern_72 = 'soundmanager2-jsmin.js"><\/script>', $intern_68 = 'soundmanager2-setup.js', $intern_70 = 'soundmanager2-setup.js"><\/script>', $intern_2 = 'startup', $intern_64 = 'stylesheet', $intern_18 = 'undefined', $intern_50 = 'unknown', $intern_41 = 'user.agent', $intern_42 = 'webkit';
  var $wnd = window, $doc = document, $stats = $wnd.__gwtStatsEvent?function(a){
    return $wnd.__gwtStatsEvent(a);
  }
  :null, $sessionId = $wnd.__gwtStatsSessionId?$wnd.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_4});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd.location.search;
      return (query.indexOf($intern_5) != -1 || (query.indexOf($intern_6) != -1 || $wnd.external && $wnd.external.gwtOnLoad)) && query.indexOf($intern_7) == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc.getElementById($intern_1);
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name_0){
          return computePropValue(name_0);
        }
        ;
      }
      com_gamedev_ld26_goldenage_GwtDefinition = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, $intern_1, base, softPermutationId);
      $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_8, millis:(new Date).getTime(), type:$intern_9});
    }
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_10);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_11);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_12, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_0;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_13);
        img.src = url_0 + $intern_14;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_15);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_0;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_16);
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_17) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_0;
    }

    function tryMarkerScript(){
      var thisScript;
      if (typeof isBodyLoaded == $intern_18 || !isBodyLoaded()) {
        var markerId = $intern_19;
        var markerScript;
        $doc.write($intern_20 + markerId + $intern_21);
        markerScript = $doc.getElementById(markerId);
        thisScript = markerScript && markerScript.previousSibling;
        while (thisScript && thisScript.tagName != $intern_22) {
          thisScript = thisScript.previousSibling;
        }
        if (markerScript) {
          markerScript.parentNode.removeChild(markerScript);
        }
        if (thisScript && thisScript.src) {
          return getDirectoryOfFile(thisScript.src);
        }
      }
      return $intern_0;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_23);
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return $intern_0;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_24 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_0) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_0) {
      tempBase = tryMarkerScript();
    }
    if (tempBase == $intern_0) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_0 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    base = tempBase;
    return tempBase;
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_25);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_26), content;
      if (name_0) {
        name_0 = name_0.replace($intern_27, $intern_0);
        if (name_0.indexOf($intern_28) >= 0) {
          continue;
        }
        if (name_0 == $intern_29) {
          content = meta.getAttribute($intern_30);
          if (content) {
            var value_0, eq = content.indexOf($intern_31);
            if (eq >= 0) {
              name_0 = content.substring(0, eq);
              value_0 = content.substring(eq + 1);
            }
             else {
              name_0 = content;
              value_0 = $intern_0;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_32) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_34);
            }
          }
        }
         else if (name_0 == $intern_35) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_36);
            }
          }
        }
      }
    }
  }

  function __gwt_getMetaProperty(name_0){
    var value_0 = metaProps[name_0];
    return value_0 == null?null:value_0;
  }

  function unflattenKeylistIntoAnswers(propValArray, value_0){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value_0;
  }

  function computePropValue(propName){
    var value_0 = providers[propName](), allowedValuesMap = values[propName];
    if (value_0 in allowedValuesMap) {
      return value_0;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value_0);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc.createElement($intern_37);
      iframe.src = $intern_38;
      iframe.id = $intern_1;
      iframe.style.cssText = $intern_39;
      iframe.tabIndex = -1;
      $doc.body.appendChild(iframe);
      $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_8, millis:(new Date).getTime(), type:$intern_40});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers[$intern_41] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (function(){
      return ua.indexOf($intern_42) != -1;
    }
    ())
      return $intern_43;
    if (function(){
      return ua.indexOf($intern_44) != -1 && $doc.documentMode >= 10;
    }
    ())
      return $intern_45;
    if (function(){
      return ua.indexOf($intern_44) != -1 && $doc.documentMode >= 9;
    }
    ())
      return $intern_46;
    if (function(){
      return ua.indexOf($intern_44) != -1 && $doc.documentMode >= 8;
    }
    ())
      return $intern_47;
    if (function(){
      return ua.indexOf($intern_48) != -1;
    }
    ())
      return $intern_49;
    return $intern_50;
  }
  ;
  values[$intern_41] = {gecko1_8:0, ie10:1, ie8:2, ie9:3, safari:4};
  com_gamedev_ld26_goldenage_GwtDefinition.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  com_gamedev_ld26_goldenage_GwtDefinition.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_51, millis:(new Date).getTime(), type:$intern_9});
    maybeStartModule();
  }
  ;
  processMetas();
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd.external && ($wnd.external.initModule && $wnd.external.initModule($intern_1))) {
      $wnd.location.reload();
      return;
    }
    initialHtml = $intern_52;
    strongName = $intern_0;
  }
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_53});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers([$intern_47], $intern_54);
      unflattenKeylistIntoAnswers([$intern_49], $intern_55);
      unflattenKeylistIntoAnswers([$intern_46], $intern_56);
      unflattenKeylistIntoAnswers([$intern_45], $intern_57);
      unflattenKeylistIntoAnswers([$intern_43], $intern_58);
      strongName = answers[computePropValue($intern_41)];
      var idx = strongName.indexOf($intern_59);
      if (idx != -1) {
        softPermutationId = Number(strongName.substring(idx + 1));
        strongName = strongName.substring(0, idx);
      }
      initialHtml = strongName + $intern_60;
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      if (!__gwt_stylesLoaded[$intern_61]) {
        var l = $doc.createElement($intern_62);
        __gwt_stylesLoaded[$intern_61] = l;
        l.setAttribute($intern_63, $intern_64);
        l.setAttribute($intern_65, base + $intern_61);
        $doc.getElementsByTagName($intern_66)[0].appendChild(l);
      }
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_67, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_67, function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_9});
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_51, millis:(new Date).getTime(), type:$intern_4});
  if (!__gwt_scriptsLoaded[$intern_68]) {
    __gwt_scriptsLoaded[$intern_68] = true;
    document.write($intern_69 + base + $intern_70);
  }
  if (!__gwt_scriptsLoaded[$intern_71]) {
    __gwt_scriptsLoaded[$intern_71] = true;
    document.write($intern_69 + base + $intern_72);
  }
  $doc.write($intern_73);
}

com_gamedev_ld26_goldenage_GwtDefinition();
