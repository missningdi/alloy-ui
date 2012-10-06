/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.2
build: 3.7.2
*/
YUI.add("base-base",function(e,t){function l(){u.apply(this,arguments)}var n=e.Lang,r="destroy",i="init",s="bubbleTargets",o="_bubbleTargets",u=e.BaseCore,a=e.AttributeCore,f=e.Attribute;l._ATTR_CFG=f._ATTR_CFG.concat("cloneDefaultValue"),l._ATTR_CFG_HASH=e.Array.hash(l._ATTR_CFG),l._NON_ATTRS_CFG=u._NON_ATTRS_CFG.concat(["on","after","bubbleTargets"]),l.NAME="base",l.ATTRS=a.prototype._protectAttrs(u.ATTRS),l.prototype={_initBase:function(t){this._eventPrefix=this.constructor.EVENT_PREFIX||this.constructor.NAME,e.BaseCore.prototype._initBase.call(this,t)},_initAttribute:function(e){f.call(this),this._yuievt.config.prefix=this._eventPrefix},_attrCfgHash:function(){return l._ATTR_CFG_HASH},init:function(e){return this.publish(i,{queuable:!1,fireOnce:!0,defaultTargetOnly:!0,defaultFn:this._defInitFn}),this._preInitEventCfg(e),this.fire(i,{cfg:e}),this},_preInitEventCfg:function(e){e&&(e.on&&this.on(e.on),e.after&&this.after(e.after));var t,r,i,u=e&&s in e;if(u||o in this){i=u?e&&e.bubbleTargets:this._bubbleTargets;if(n.isArray(i))for(t=0,r=i.length;t<r;t++)this.addTarget(i[t]);else i&&this.addTarget(i)}},destroy:function(){return this.publish(r,{queuable:!1,fireOnce:!0,defaultTargetOnly:!0,defaultFn:this._defDestroyFn}),this.fire(r),this.detachAll(),this},_defInitFn:function(e){this._baseInit(e.cfg)},_defDestroyFn:function(e){this._baseDestroy(e.cfg)}},e.mix(l,f,!1,null,1),e.mix(l,u,!1,null,1),l.prototype.constructor=l,e.Base=l},"3.7.2",{requires:["base-core","attribute-base"]});
