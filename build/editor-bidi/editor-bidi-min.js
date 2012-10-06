/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.2
build: 3.7.2
*/
YUI.add("editor-bidi",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)},r="host",i="dir",s="BODY",o="nodeChange",u="bidiContextChange",a=s+" > p",f="style";e.extend(n,e.Base,{lastDirection:null,firstEvent:null,_checkForChange:function(){var e=this.get(r),t=e.getInstance(),i=new t.EditorSelection,s,o;i.isCollapsed?(s=n.blockParent(i.focusNode),s&&(o=s.getStyle("direction"),o!==this.lastDirection&&(e.fire(u,{changedTo:o}),this.lastDirection=o))):(e.fire(u,{changedTo:"select"}),this.lastDirection=null)},_afterNodeChange:function(e){if(this.firstEvent||n.EVENTS[e.changedType])this._checkForChange(),this.firstEvent=!1},_afterMouseUp:function(e){this._checkForChange(),this.firstEvent=!1},initializer:function(){var t=this.get(r);this.firstEvent=!0,t.after(o,e.bind(this._afterNodeChange,this)),t.after("dom:mouseup",e.bind(this._afterMouseUp,this))}},{EVENTS:{"backspace-up":!0,"pageup-up":!0,"pagedown-down":!0,"end-up":!0,"home-up":!0,"left-up":!0,"up-up":!0,"right-up":!0,"down-up":!0,"delete-up":!0},BLOCKS:e.EditorSelection.BLOCKS,DIV_WRAPPER:"<DIV></DIV>",blockParent:function(t,r){var i=t,o,u;return i||(i=e.one(s)),i.test(n.BLOCKS)||(i=i.ancestor(n.BLOCKS)),r&&i.test(s)&&(o=e.Node.create(n.DIV_WRAPPER),i.get("children").each(function(e,t){t===0?u=e:o.append(e)}),u.replace(o),o.prepend(u),i=o),i},_NODE_SELECTED:"bidiSelected",addParents:function(e){var t,r,i;for(t=0;t<e.length;t+=1)e[t].setData(n._NODE_SELECTED,!0);for(t=0;t<e.length;t+=1)r=e[t].get("parentNode"),!r.test(s)&&!r.getData(n._NODE_SELECTED)&&(i=!0,r.get("children").some(function(e){if(!e.getData(n._NODE_SELECTED))return i=!1,!0}),i&&(e.push(r),r.setData(n._NODE_SELECTED,!0)));for(t=0;t<e.length;t+=1)e[t].clearData(n._NODE_SELECTED);return e},NAME:"editorBidi",NS:"editorBidi",ATTRS:{host:{value:!1}},RE_TEXT_ALIGN:/text-align:\s*\w*\s*;/,removeTextAlign:function(e){return e&&(e.getAttribute(f).match(n.RE_TEXT_ALIGN)&&e.setAttribute(f,e.getAttribute(f).replace(n.RE_TEXT_ALIGN,"")),e.hasAttribute("align")&&e.removeAttribute("align")),e}}),e.namespace("Plugin"),e.Plugin.EditorBidi=n,e.Plugin.ExecCommand.COMMANDS.bidi=function(t,s){var o=this.getInstance(),u=new o.EditorSelection,a=this.get(r).get(r).editorBidi,f,l,c,h,p;if(!a){e.error("bidi execCommand is not available without the EditorBiDi plugin.");return}o.EditorSelection.filterBlocks();if(u.isCollapsed){l=n.blockParent(u.anchorNode),l||(l=o.one("body").one(o.EditorSelection.BLOCKS)),l=n.removeTextAlign(l),s||(p=l.getAttribute(i),!p||p=="ltr"?s="rtl":s="ltr"),l.setAttribute(i,s);if(e.UA.ie){var d=l.all("br.yui-cursor");d.size()===1&&l.get("childNodes").size()==1&&d.remove()}f=l}else c=u.getSelected(),h=[],c.each(function(e){h.push(n.blockParent(e))}),h=o.all(n.addParents(h)),h.each(function(e){var t=s;e=n.removeTextAlign(e),t||(p=e.getAttribute(i),!p||p=="ltr"?t="rtl":t="ltr"),e.setAttribute(i,t)}),f=h;return a._checkForChange(),f}},"3.7.2",{requires:["editor-base"]});
