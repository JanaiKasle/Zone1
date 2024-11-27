import{I as n,J as p,K as O,en as H,jj as E,jk as M,aM as P,bj as m,dy as D,jl as $,aU as f,b7 as U,d8 as G,jm as u,m as A,e as I,h as T,d5 as w,d9 as S,jn as j,b1 as y}from"./index.8c0c1e38.js";import{s as b}from"./drawUtils.c1133cd8.js";import{C as L}from"./GraphicManipulator.743d3586.js";let _=class extends H{constructor(t){super(t),this.view=null}get count(){return this.handles.size}add(t){const i=Array.isArray(t)?t:[t];t!=null&&i&&i.length&&i.forEach(e=>this._highlight(e))}remove(t){const i=Array.isArray(t)?t:[t];t!=null&&i&&i.length&&i.forEach(e=>this._unhighlight(e))}removeAll(){this.handles.removeAll()}_highlight(t){const i=E(this.view,t.layer);M(i)&&this.handles.add(i.highlight(t),`feature-${t.getObjectId()}`)}_unhighlight(t){t&&this.handles.remove(`feature-${t.getObjectId()}`)}};n([p({readOnly:!0})],_.prototype,"count",null),n([p()],_.prototype,"view",void 0),n([p()],_.prototype,"add",null),_=n([O("esri.views.draw.support.HighlightHelper")],_);const V=_;class C{constructor(i,e,h,r,s){this.graphic=i,this.index=e,this.x=h,this.y=r,this.viewEvent=s,this.type="graphic-click"}}class z{constructor(i,e,h,r,s){this.graphic=i,this.index=e,this.x=h,this.y=r,this.viewEvent=s,this.type="graphic-double-click"}}class q{constructor(i,e,h,r,s,a,c,d,v,g){this.graphic=i,this.allGraphics=e,this.index=h,this.x=r,this.y=s,this.dx=a,this.dy=c,this.totalDx=d,this.totalDy=v,this.viewEvent=g,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class F{constructor(i,e,h,r,s,a,c,d,v,g){this.graphic=i,this.allGraphics=e,this.index=h,this.x=r,this.y=s,this.dx=a,this.dy=c,this.totalDx=d,this.totalDy=v,this.viewEvent=g,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class J{constructor(i,e,h,r,s,a,c,d,v,g){this.graphic=i,this.allGraphics=e,this.index=h,this.x=r,this.y=s,this.dx=a,this.dy=c,this.totalDx=d,this.totalDy=v,this.viewEvent=g,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class K{constructor(i,e,h,r,s){this.graphic=i,this.index=e,this.x=h,this.y=r,this.viewEvent=s,this.type="graphic-pointer-over"}}class x{constructor(i,e,h,r,s){this.graphic=i,this.index=e,this.x=h,this.y=r,this.viewEvent=s,this.type="graphic-pointer-out"}}class N{constructor(i,e,h,r,s){this.graphic=i,this.index=e,this.x=h,this.y=r,this.viewEvent=s,this.type="graphic-pointer-down"}}class X{constructor(i,e,h,r,s){this.graphic=i,this.index=e,this.x=h,this.y=r,this.viewEvent=s,this.type="graphic-pointer-up"}}const k="indicator-symbols";let l=class extends P.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._handles=new m,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._viewHandles=new m,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!1,this.layer=new D({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){$(this.view,this.layer),this._highlightHelper=new V({view:this.view}),this.refresh(),this._handles.add([f(()=>{var t;return[this.graphics,(t=this.graphics)==null?void 0:t.length]},()=>this.refresh()),U(()=>{var t;return(t=this.view)==null?void 0:t.ready},()=>{this._viewHandles.add([this.view.on("immediate-click",t=>this._clickHandler(t),y.TOOL),this.view.on("double-click",t=>this._doubleClickHandler(t),y.TOOL),this.view.on("pointer-down",t=>this._pointerDownHandler(t),y.TOOL),this.view.on("pointer-move",t=>this._pointerMoveHandler(t),y.TOOL),this.view.on("pointer-up",t=>this._pointerUpHandler(t),y.TOOL),this.view.on("drag",t=>this._dragHandler(t),y.TOOL),this.view.on("key-down",t=>this._keyDownHandler(t),y.TOOL)])},{once:!0,initial:!0}),f(()=>this.view,t=>{this._highlightHelper.removeAll(),this._highlightHelper.view=t})])}destroy(){var t;this._removeIndicators(),(t=this.view.map)==null||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach(i=>i.destroy()),this._manipulators=null,this._handles=G(this._handles),this._viewHandles=G(this._viewHandles)}set highlightsEnabled(t){var i,e;(i=this._highlightHelper)==null||i.removeAll(),this._set("highlightsEnabled",t),t&&((e=this._highlightHelper)==null||e.add(this.graphics))}get state(){const t=!!this.get("view.ready"),i=!!this.get("graphics.length"),e=this._activeGraphic;return t&&i?e?"moving":"active":t?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(t,i){const e=this.graphics[t];e&&(e.set("geometry",i),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(t){const i=this._findTargetGraphic(u(t));if(i){const e=new C(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}_doubleClickHandler(t){const i=this._findTargetGraphic(u(t));if(i){const e=new z(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}_pointerDownHandler(t){const i=this._findTargetGraphic(u(t));if(i){this._activeGraphic=i;const{x:e,y:h}=t,r=new N(i,this.graphics.indexOf(i),e,h,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:e}=t,h=this.graphics.indexOf(this._activeGraphic),r=new X(this._activeGraphic,h,i,e,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic(u(t));if(i){const{x:e,y:h}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const a=this.graphics.indexOf(this._hoverGraphic),c=new x(this.graphics[a],a,e,h,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",c),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(c)}const r=this.graphics.indexOf(i),s=new K(i,r,e,h,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",s),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(s))}if(this._hoverGraphic){const{x:e,y:h}=t,r=this.graphics.indexOf(this._hoverGraphic),s=new x(this.graphics[r],r,e,h,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",s),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(s)}}_dragHandler(t){if(t.action!=="start"&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.action==="start"&&this._removeIndicators(),t.stopPropagation();const{action:i,x:e,y:h}=t,r=this.graphics.indexOf(this._activeGraphic),s=this._dragEvent?e-this._dragEvent.x:0,a=this._dragEvent?h-this._dragEvent.y:0,c=e-t.origin.x,d=h-t.origin.y,v=i==="start"?this._activeGraphic.geometry:this._initialDragGeometry,g=b(v,c,d,this.view);if(this._activeGraphic.geometry=g,this.enableMoveAllGraphics&&this.graphics.forEach(o=>{o!==this._activeGraphic&&(o.geometry=b(o.geometry,s,a,this.view))}),this._dragEvent=t,i==="start"){this._initialDragGeometry=A(v);const o=new q(this._activeGraphic,this.graphics,r,e,h,s,a,c,d,t);this.emit("graphic-move-start",o),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(o),o.defaultPrevented&&this._activeGraphic.set("geometry",v)}else if(i==="update"){const o=new F(this._activeGraphic,this.graphics,r,e,h,s,a,c,d,t);this.emit("graphic-move",o),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(o),o.defaultPrevented&&(this._activeGraphic.geometry=v)}else{const o=new J(this._activeGraphic,this.graphics,r,e,h,s,a,c,d,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",o),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(o),o.defaultPrevented&&(this.graphics[r].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){t.key!=="a"&&t.key!=="d"&&t.key!=="n"||this.state!=="moving"||t.stopPropagation()}_findTargetGraphic(t){const i=this.view.toMap(t);let e=null,h=Number.MAX_VALUE;this._syncLayerViews();const r=this._layerViews.flatMap(s=>"graphicsViews"in s?Array.from(s.graphicsViews(),a=>a.hitTest(i)).flat():s.graphicsView.hitTest(i)).filter(s=>this.graphics.includes(s));return r.length?r[0]:(this._manipulators.forEach(s=>{const a=s.intersectionDistance(t);I(a)&&a<h&&(h=a,e=s.graphic)}),e)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const i of this.graphics){const e=E(this.view,i.layer);e&&t.add(e)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach(e=>e.destroy()),this._manipulators=t!=null&&t.length?t.map(e=>new L({graphic:e,view:i})):[]}_setUpHighlights(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const t of this.graphics){const i=t.clone();i.symbol=this._getSymbolForIndicator(t),this._indicators.push(i),this._handles.add(f(()=>t.symbol,()=>this._setUpIndicators()),k)}this.layer.addMany(this._indicators)}}_removeIndicators(){this._handles.remove(k),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach(t=>t.destroy()),this._indicators=[])}_getSymbolForIndicator(t){if(T(t.symbol))return null;switch(t.symbol.type){case"cim":return new w({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:e,yoffset:h,height:r,width:s}=t.symbol,a=r===s?s:Math.max(r,s);return new w({xoffset:e,yoffset:h,size:a,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:e,yoffset:h,size:r,style:s}=t.symbol;return new w({xoffset:e,yoffset:h,style:s==="circle"?"circle":"square",size:r+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new j({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new S({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:h}=t.symbol;return new w({xoffset:e,yoffset:h,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};n([p()],l.prototype,"_activeGraphic",void 0),n([p({readOnly:!0})],l.prototype,"type",void 0),n([p()],l.prototype,"callbacks",void 0),n([p()],l.prototype,"enableMoveAllGraphics",void 0),n([p()],l.prototype,"graphics",void 0),n([p({value:!1})],l.prototype,"highlightsEnabled",null),n([p()],l.prototype,"indicatorsEnabled",void 0),n([p()],l.prototype,"layer",void 0),n([p({readOnly:!0})],l.prototype,"state",null),n([p()],l.prototype,"view",void 0),l=n([O("esri.views.draw.support.GraphicMover")],l);const B=l,Y=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{B as D,Y as G,V as h};
