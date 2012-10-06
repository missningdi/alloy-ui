/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.2
build: 3.7.2
*/
YUI.add("calendar",function(e,t){function E(e){E.superclass.constructor.apply(this,arguments)}var n=e.ClassNameManager.getClassName,r="calendar",i=40,s=38,o=37,u=39,a=13,f=32,l=n(r,"header"),c=n(r,"day-selected"),h=n(r,"day-highlighted"),p=n(r,"day"),d=n(r,"prevmonth-day"),v=n(r,"nextmonth-day"),m=n(r,"grid"),g=e.DataType.Date,y=e.delegate,b=n(r,"pane"),w=e.UA.os;e.Calendar=e.extend(E,e.CalendarBase,{_keyEvents:[],_highlightedDateNode:null,_lastSelectedDate:null,initializer:function(){this.plug(e.Plugin.CalendarNavigator),this._keyEvents=[],this._highlightedDateNode=null,this._lastSelectedDate=null},_bindCalendarEvents:function(){var e=this.get("contentBox"),t=e.one("."+b);t.on("selectstart",this._preventSelectionStart),t.delegate("click",this._clickCalendar,"."+p+", ."+d+", ."+v,this),t.delegate("keydown",this._keydownCalendar,"."+m,this),t.delegate("focus",this._focusCalendarGrid,"."+m,this),t.delegate("focus",this._focusCalendarCell,"."+p,this),t.delegate("blur",this._blurCalendarGrid,"."+m+",."+p,this)},_preventSelectionStart:function(e){e.preventDefault()},_highlightDateNode:function(e){this._unhighlightCurrentDateNode();var t=this._dateToNode(e);t.focus(),t.addClass(h)},_unhighlightCurrentDateNode:function(){var e=this.get("contentBox").all("."+h);e&&e.removeClass(h)},_getGridNumber:function(e){var t=e.get("id").split("_").reverse();return parseInt(t[0],10)},_blurCalendarGrid:function(e){this._unhighlightCurrentDateNode()},_focusCalendarCell:function(e){this._highlightedDateNode=e.target,e.stopPropagation()},_focusCalendarGrid:function(e){this._unhighlightCurrentDateNode(),this._highlightedDateNode=null},_keydownCalendar:function(e){var t=this._getGridNumber(e.target),n=this._highlightedDateNode?this._nodeToDate(this._highlightedDateNode):null,r=e.keyCode,l=0,h="";switch(r){case i:l=7,h="s";break;case s:l=-7,h="n";break;case o:l=-1,h="w";break;case u:l=1,h="e";break;case f:case a:e.preventDefault();if(this._highlightedDateNode){var p=this.get("selectionMode");if(p==="single"&&!this._highlightedDateNode.hasClass(c))this._clearSelection(!0),this._addDateToSelection(n);else if(p==="multiple"||p==="multiple-sticky")this._highlightedDateNode.hasClass(c)?this._removeDateFromSelection(n):this._addDateToSelection(n)}}if(r==i||r==s||r==o||r==u){n||(n=g.addMonths(this.get("date"),t),l=0),e.preventDefault();var d=g.addDays(n,l),v=this.get("date"),m=g.addMonths(this.get("date"),this._paneNumber-1),y=new Date(m);m.setDate(g.daysInMonth(m)),g.isInRange(d,v,m)?this._highlightDateNode(d):g.isGreater(v,d)?g.isGreaterOrEqual(this.get("minimumDate"),v)||(this.set("date",g.addMonths(v,-1)),this._highlightDateNode(d)):g.isGreater(d,m)&&(g.isGreaterOrEqual(y,this.get("maximumDate"))||(this.set("date",g.addMonths(v,1)),this._highlightDateNode(d)))}},_clickCalendar:function(e){var t=e.currentTarget,n=t.hasClass(p)&&!t.hasClass(d)&&!t.hasClass(v),r=t.hasClass(c);switch(this.get("selectionMode")){case"single":n&&(r||(this._clearSelection(!0),this._addDateToSelection(this._nodeToDate(t))));break;case"multiple-sticky":n&&(r?this._removeDateFromSelection(this._nodeToDate(t)):this._addDateToSelection(this._nodeToDate(t)));break;case"multiple":if(n)if(!e.metaKey&&!e.ctrlKey&&!e.shiftKey)this._clearSelection(!0),this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate);else if((w=="macintosh"&&e.metaKey||w!="macintosh"&&e.ctrlKey)&&!e.shiftKey)r?(this._removeDateFromSelection(this._nodeToDate(t)),this._lastSelectedDate=null):(this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate));else if((w=="macintosh"&&e.metaKey||w!="macintosh"&&e.ctrlKey)&&e.shiftKey)if(this._lastSelectedDate){var i=this._nodeToDate(t);this._addDateRangeToSelection(i,this._lastSelectedDate),this._lastSelectedDate=i}else this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate);else if(e.shiftKey)if(this._lastSelectedDate){var i=this._nodeToDate(t);this._clearSelection(!0),this._addDateRangeToSelection(i,this._lastSelectedDate),this._lastSelectedDate=i}else this._clearSelection(!0),this._lastSelectedDate=this._nodeToDate(t),this._addDateToSelection(this._lastSelectedDate)}n?this.fire("dateClick",{cell:t,date:this._nodeToDate(t)}):t.hasClass(d)?this.fire("prevMonthClick"):t.hasClass(v)&&this.fire("nextMonthClick")},subtractMonth:function(e){this.set("date",g.addMonths(this.get("date"),-1)),e&&e.halt()},subtractYear:function(e){this.set("date",g.addYears(this.get("date"),-1)),e&&e.halt()},addMonth:function(e){this.set("date",g.addMonths(this.get("date"),1)),e&&e.halt()},addYear:function(e){this.set("date",g.addYears(this.get("date"),1)),e&&e.halt()}},{NAME:"calendar",ATTRS:{selectionMode:{value:"single"},date:{value:new Date,lazyAdd:!1,setter:function(e){var t=this._normalizeDate(e),n=g.addMonths(t,this._paneNumber-1),r=this.get("minimumDate"),i=this.get("maximumDate");if((!r||g.isGreaterOrEqual(t,r))&&(!i||g.isGreaterOrEqual(i,n)))return t;if(r&&g.isGreater(r,t))return r;if(i&&g.isGreater(n,i)){var s=g.addMonths(i,-1*(this._paneNumber-1));return s}}},minimumDate:{value:null,setter:function(e){if(e){var t=this.get("date"),n=this._normalizeDate(e);return t&&!g.isGreaterOrEqual(t,n)&&this.set("date",n),n}return this._normalizeDate(e)}},maximumDate:{value:null,setter:function(e){if(e){var t=this.get("date"),n=this._normalizeDate(e);return t&&!g.isGreaterOrEqual(e,g.addMonths(t,this._paneNumber-1))&&this.set("date",g.addMonths(n,-1*(this._paneNumber-1))),n}return e}}}})},"3.7.2",{requires:["calendar-base","calendarnavigator"],lang:["de","en","fr","ja","nb-NO","pt-BR","ru","zh-HANT-TW"],skinnable:!0});
