import{I as o,J as a,j6 as S,cA as E,j7 as H,K as D,d3 as C,hI as I,j8 as O,j9 as b,c8 as N,e as u,a6 as F,d2 as m,m as l}from"./index.8c0c1e38.js";var w;const M=new WeakMap;let P=0,c=w=class extends C{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,r,n){if(t instanceof HTMLImageElement){const s={type:"image-element",src:I(t.src,n),crossOrigin:t.crossOrigin};e[r]=s}else if(t instanceof HTMLCanvasElement){const s=t.getContext("2d").getImageData(0,0,t.width,t.height),g={type:"canvas-element",imageData:this._encodeImageData(s)};e[r]=g}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:I(t.src,n),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[r]=s}else{const s={type:"image-data",imageData:this._encodeImageData(t)};e[r]=s}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),r=document.createElement("canvas");return r.width=e.width,r.height=e.height,r.getContext("2d").putImageData(e,0,0),r}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const r=e.substr(e.length-4,4).toLowerCase(),n=e.substr(0,15).toLocaleLowerCase();if(r===".png"||n==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(r="")=>`d:${r},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(M.has(this.data)||M.set(this.data,++P),e(M.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new w(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const r=this.clone();return t.set(this,r),r}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let r=0;r<t.data.length;r++)e+=String.fromCharCode(t.data[r]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),r=new Uint8ClampedArray(e.length);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return O(r,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new w({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new w({data:t}):b(w,t)}};o([a({type:String,json:{write:S}})],c.prototype,"url",null),o([a({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),a()],c.prototype,"data",null),o([E("data")],c.prototype,"writeData",null),o([H("data")],c.prototype,"readData",null),o([a({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],c.prototype,"transparent",null),o([a({json:{write:!0}})],c.prototype,"wrap",void 0),o([a({readOnly:!0})],c.prototype,"contentHash",null),c=w=o([D("esri.geometry.support.MeshTexture")],c);const x=c;var A;let p=A=class extends C{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const r=u(t)?t.get(this):null;if(r)return r;const n=new A(this.clonePropertiesWithDeduplication(e));return u(t)&&t.set(this,n),n}clonePropertiesWithDeduplication(t){return{color:u(this.color)?this.color.clone():null,colorTexture:u(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:u(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};o([a({type:N,json:{write:!0}})],p.prototype,"color",void 0),o([a({type:x,json:{write:!0}})],p.prototype,"colorTexture",void 0),o([a({type:x,json:{write:!0}})],p.prototype,"normalTexture",void 0),o([a({nonNullable:!0,json:{write:!0}})],p.prototype,"alphaMode",void 0),o([a({nonNullable:!0,json:{write:!0}})],p.prototype,"alphaCutoff",void 0),o([a({nonNullable:!0,json:{write:!0}})],p.prototype,"doubleSided",void 0),p=A=o([D("esri.geometry.support.MeshMaterial")],p);const _=p;var W;let h=W=class extends _{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const r=u(t)?t.get(this):null;if(r)return r;const n=new W(this.clonePropertiesWithDeduplication(e));return u(t)&&t.set(this,n),n}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:u(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:u(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:u(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:u(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null}}};o([a({type:N,json:{write:!0}})],h.prototype,"emissiveColor",void 0),o([a({type:x,json:{write:!0}})],h.prototype,"emissiveTexture",void 0),o([a({type:x,json:{write:!0}})],h.prototype,"occlusionTexture",void 0),o([a({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],h.prototype,"metallic",void 0),o([a({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],h.prototype,"roughness",void 0),o([a({type:x,json:{write:!0}})],h.prototype,"metallicRoughnessTexture",void 0),h=W=o([D("esri.geometry.support.MeshMaterialMetallicRoughness")],h);const R=h;var j;const y=F.getLogger("esri.geometry.support.MeshVertexAttributes");let i=j=class extends C{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return f(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},y)}castPosition(t){return t&&t instanceof Float32Array&&y.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),f(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},y)}castUv(t){return f(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},y)}castNormal(t){return f(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},y)}castTangent(t){return f(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},y)}clone(){const t={position:l(this.position),uv:l(this.uv),normal:l(this.normal),tangent:l(this.tangent),color:l(this.color)};return new j(t)}clonePositional(){const t={position:l(this.position),normal:l(this.normal),tangent:l(this.tangent),uv:this.uv,color:this.color};return new j(t)}};function $(t,e,r,n){const{loggerTag:s,stride:g}=e;return t.length%g!=0?(n.error(s,`Invalid array length, expected a multiple of ${g}`),new r([])):t}function f(t,e,r,n,s){if(!t)return t;if(t instanceof e)return $(t,n,e,s);for(const g of r)if(t instanceof g)return $(new e(t),n,e,s);if(Array.isArray(t))return $(new e(t),n,e,s);{const g=r.map(L=>`'${L.name}'`);return s.error(`Failed to set property, expected one of ${g}, but got ${t.constructor.name}`),new e([])}}function v(t,e,r){e[r]=U(t)}function U(t){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=t[r];return e}o([a({json:{write:v}})],i.prototype,"color",void 0),o([m("color")],i.prototype,"castColor",null),o([a({nonNullable:!0,json:{write:v}})],i.prototype,"position",void 0),o([m("position")],i.prototype,"castPosition",null),o([a({json:{write:v}})],i.prototype,"uv",void 0),o([m("uv")],i.prototype,"castUv",null),o([a({json:{write:v}})],i.prototype,"normal",void 0),o([m("normal")],i.prototype,"castNormal",null),o([a({json:{write:v}})],i.prototype,"tangent",void 0),o([m("tangent")],i.prototype,"castTangent",null),i=j=o([D("esri.geometry.support.MeshVertexAttributes")],i);var T;const V=F.getLogger("esri.geometry.support.MeshComponent");let d=T=class extends C{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return b(T,t)}castFaces(t){return f(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},V)}castMaterial(t){return b(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?R:_,t)}clone(){return new T({faces:l(this.faces),shading:this.shading,material:l(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const r={faces:l(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new T(r)}};o([a({json:{write:!0}})],d.prototype,"faces",void 0),o([m("faces")],d.prototype,"castFaces",null),o([a({type:_,json:{write:!0}})],d.prototype,"material",void 0),o([m("material")],d.prototype,"castMaterial",null),o([a({type:String,json:{write:!0}})],d.prototype,"shading",void 0),o([a({type:Boolean})],d.prototype,"trustSourceNormals",void 0),d=T=o([D("esri.geometry.support.MeshComponent")],d);const B=d;export{R as c,B as f,x as m,i as p};
