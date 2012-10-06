/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.2
build: 3.7.2
*/
YUI.add("base-core",function(e,t){function v(e){this._BaseInvoked||(this._BaseInvoked=!0,this._initBase(e))}var n=e.Object,r=e.Lang,i=".",s="initialized",o="destroyed",u="initializer",a="value",f=Object.prototype.constructor,l="deep",c="shallow",h="destructor",p=e.AttributeCore,d=function(e,t,n){var r;for(r in t)n[r]&&(e[r]=t[r]);return e};v._ATTR_CFG=p._ATTR_CFG.concat("cloneDefaultValue"),v._ATTR_CFG_HASH=e.Array.hash(v._ATTR_CFG),v._NON_ATTRS_CFG=["plugins"],v.NAME="baseCore",v.ATTRS={initialized:{readOnly:!0,value:!1},destroyed:{readOnly:!0,value:!1}},v.prototype={_initBase:function(t){e.stamp(this),this._initAttribute(t);var n=e.Plugin&&e.Plugin.Host;this._initPlugins&&n&&n.call(this),this._lazyAddAttrs!==!1&&(this._lazyAddAttrs=!0),this.name=this.constructor.NAME,this.init.apply(this,arguments)},_initAttribute:function(){p.apply(this)},init:function(e){return this._baseInit(e),this},_baseInit:function(e){this._initHierarchy(e),this._initPlugins&&this._initPlugins(e),this._set(s,!0)},destroy:function(){return this._baseDestroy(),this},_baseDestroy:function(){this._destroyPlugins&&this._destroyPlugins(),this._destroyHierarchy(),this._set(o,!0)},_getClasses:function(){return this._classes||this._initHierarchyData(),this._classes},_getAttrCfgs:function(){return this._attrs||this._initHierarchyData(),this._attrs},_filterAttrCfgs:function(e,t){var n=null,r,i=e.ATTRS;if(i)for(r in i)t[r]&&(n=n||{},n[r]=t[r],t[r]=null);return n},_filterAdHocAttrs:function(e,t){var n,r=this._nonAttrs,i;if(t){n={};for(i in t)!e[i]&&!r[i]&&t.hasOwnProperty(i)&&(n[i]={value:t[i]})}return n},_initHierarchyData:function(){var e=this.constructor,t,n,r,i=this._allowAdHocAttrs?{}:null,s=[],o=[];while(e){s[s.length]=e,e.ATTRS&&(o[o.length]=e.ATTRS);if(this._allowAdHocAttrs){r=e._NON_ATTRS_CFG;if(r)for(t=0,n=r.length;t<n;t++)i[r[t]]=!0}e=e.superclass?e.superclass.constructor:null}this._classes=s,this._nonAttrs=i,this._attrs=this._aggregateAttrs(o)},_attrCfgHash:function(){return v._ATTR_CFG_HASH},_aggregateAttrs:function(t){var s,o,u,h,p,v,m,g=this._attrCfgHash(),y,b={};if(t)for(v=t.length-1;v>=0;--v){o=t[v];for(s in o)o.hasOwnProperty(s)&&(u=d({},o[s],g),h=u.value,m=u.cloneDefaultValue,h&&(m===undefined&&(f===h.constructor||r.isArray(h))||m===l||m===!0?u.value=e.clone(h):m===c&&(u.value=e.merge(h))),p=null,s.indexOf(i)!==-1&&(p=s.split(i),s=p.shift()),y=b[s],p&&y&&y.value?n.setValue(y.value,p,h):p||(y?(y.valueFn&&a in u&&(y.valueFn=null),d(y,u,g)):b[s]=u))}return b},_initHierarchy:function(e){var t=this._lazyAddAttrs,n,r,i,s,o,a,f,l=this._getClasses(),c=this._getAttrCfgs(),h=l.length-1;for(i=h;i>=0;i--){n=l[i],r=n.prototype,f=n._yuibuild&&n._yuibuild.exts;if(f)for(s=0,o=f.length;s<o;s++)f[s].apply(this,arguments);this.addAttrs(this._filterAttrCfgs(n,c),e,t),this._allowAdHocAttrs&&i===h&&this.addAttrs(this._filterAdHocAttrs(c,e),e,t),r.hasOwnProperty(u)&&r.initializer.apply(this,arguments);if(f)for(s=0;s<o;s++)a=f[s].prototype,a.hasOwnProperty(u)&&a.initializer.apply(this,arguments)}},_destroyHierarchy:function(){var e,t,n,r,i,s,o,u,a=this._getClasses();for(n=0,r=a.length;n<r;n++){e=a[n],t=e.prototype,o=e._yuibuild&&e._yuibuild.exts;if(o)for(i=0,s=o.length;i<s;i++)u=o[i].prototype,u.hasOwnProperty(h)&&u.destructor.apply(this,arguments);t.hasOwnProperty(h)&&t.destructor.apply(this,arguments)}},toString:function(){return this.name+"["+e.stamp(this,!0)+"]"}},e.mix(v,p,!1,null,1),v.prototype.constructor=v,e.BaseCore=v},"3.7.2",{requires:["attribute-core"]});
