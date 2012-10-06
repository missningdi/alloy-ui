/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.2
build: 3.7.2
*/
YUI.add("yql",function(e,t){var n=function(t,n,r,i){r||(r={}),r.q=t,r.format||(r.format=e.YQLRequest.FORMAT),r.env||(r.env=e.YQLRequest.ENV),this._context=this,i&&i.context&&(this._context=i.context,delete i.context),r&&r.context&&(this._context=r.context,delete r.context),this._params=r,this._opts=i,this._callback=n};n.prototype={_jsonp:null,_opts:null,_callback:null,_params:null,_context:null,_internal:function(){this._callback.apply(this._context,arguments)},send:function(){var t=[],n=this._opts&&this._opts.proto?this._opts.proto:e.YQLRequest.PROTO,r;return e.each(this._params,function(e,n){t.push(n+"="+encodeURIComponent(e))}),t=t.join("&"),n+=(this._opts&&this._opts.base?this._opts.base:e.YQLRequest.BASE_URL)+t,r=e.Lang.isFunction(this._callback)?{on:{success:this._callback}}:this._callback,r.on=r.on||{},this._callback=r.on.success,r.on.success=e.bind(this._internal,this),r.allowCache!==!1&&(r.allowCache=!0),this._jsonp?(this._jsonp.url=n,r.on&&r.on.success&&(this._jsonp._config.on.success=r.on.success),this._jsonp.send()):this._jsonp=e.jsonp(n,r),this}},n.FORMAT="json",n.PROTO="http",n.BASE_URL="://query.yahooapis.com/v1/public/yql?",n.ENV="http://datatables.org/alltables.env",e.YQLRequest=n,e.YQL=function(t,n,r,i){return(new e.YQLRequest(t,n,r,i)).send()}},"3.7.2",{requires:["jsonp","jsonp-url"]});
