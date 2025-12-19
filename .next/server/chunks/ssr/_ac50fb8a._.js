module.exports=[32245,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"BailoutToCSR",{enumerable:!0,get:function(){return e}});let d=a.r(41997);function e({reason:a,children:b}){throw Object.defineProperty(new d.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})}},7773,(a,b,c)=>{"use strict";function d(a){return a.split("/").map(a=>encodeURIComponent(a)).join("/")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"encodeURIPath",{enumerable:!0,get:function(){return d}})},97458,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"PreloadChunks",{enumerable:!0,get:function(){return h}});let d=a.r(87924),e=a.r(35112),f=a.r(56704),g=a.r(7773);function h({moduleIds:a}){let b=f.workAsyncStorage.getStore();if(void 0===b)return null;let c=[];if(b.reactLoadableManifest&&a){let d=b.reactLoadableManifest;for(let b of a){if(!d[b])continue;let a=d[b].files;c.push(...a)}}return 0===c.length?null:(0,d.jsx)(d.Fragment,{children:c.map(a=>{let c=`${b.assetPrefix}/_next/${(0,g.encodeURIPath)(a)}`;return a.endsWith(".css")?(0,d.jsx)("link",{precedence:"dynamic",href:c,rel:"stylesheet",as:"style",nonce:b.nonce},a):((0,e.preload)(c,{as:"script",fetchPriority:"low",nonce:b.nonce}),null)})})}},69853,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return j}});let d=a.r(87924),e=a.r(72131),f=a.r(32245),g=a.r(97458);function h(a){return{default:a&&"default"in a?a.default:a}}let i={loader:()=>Promise.resolve(h(()=>null)),loading:null,ssr:!0},j=function(a){let b={...i,...a},c=(0,e.lazy)(()=>b.loader().then(h)),j=b.loading;function k(a){let h=j?(0,d.jsx)(j,{isLoading:!0,pastDelay:!0,error:null}):null,i=!b.ssr||!!b.loading,k=i?e.Suspense:e.Fragment,l=b.ssr?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.PreloadChunks,{moduleIds:b.modules}),(0,d.jsx)(c,{...a})]}):(0,d.jsx)(f.BailoutToCSR,{reason:"next/dynamic",children:(0,d.jsx)(c,{...a})});return(0,d.jsx)(k,{...i?{fallback:h}:{},children:l})}return k.displayName="LoadableComponent",k}},19721,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return e}});let d=a.r(33354)._(a.r(69853));function e(a,b){let c={};"function"==typeof a&&(c.loader=a);let e={...c,...b};return(0,d.default)({...e,modules:e.loadableGenerated?.modules})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},47349,(a,b,c)=>{"use strict";var d=a.r(72131);d.useState,d.useEffect,d.useLayoutEffect,d.useDebugValue,c.useSyncExternalStore=void 0!==d.useSyncExternalStore?d.useSyncExternalStore:function(a,b){return b()}},87610,(a,b,c)=>{"use strict";b.exports=a.r(47349)},9268,a=>{"use strict";let b,c,d,e,f,g,h,i;var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b$,b_,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,cA,cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,cT,cU,cV,cW,cX,cY,cZ,c$,c_,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,dA,dB,dC,dD,dE,dF,dG,dH,dI,dJ,dK,dL,dM,dN,dO,dP,dQ,dR,dS,dT,dU,dV,dW,dX,dY,dZ,d$,d_,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,ea,eb,ec,ed,ee,ef,eg,eh,ei,ej,ek,el,em,en,eo,ep,eq,er,es,et,eu,ev,ew,ex,ey,ez,eA,eB,eC,eD,eE,eF,eG,eH,eI,eJ,eK,eL,eM,eN,eO,eP,eQ,eR,eS,eT,eU,eV,eW,eX,eY,eZ,e$,e_,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,fa,fb,fc,fd,fe,ff,fg,fh,fi,fj,fk,fl,fm,fn,fo,fp,fq,fr,fs,ft,fu,fv,fw,fx,fy,fz,fA,fB,fC,fD,fE,fF,fG,fH,fI,fJ,fK,fL,fM,fN,fO,fP,fQ,fR,fS,fT,fU,fV,fW,fX,fY,fZ,f$,f_,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,ga,gb,gc,gd,ge,gf,gg,gh,gi,gj,gk,gl,gm,gn,go,gp,gq,gr,gs,gt,gu,gv,gw,gx,gy,gz,gA,gB,gC,gD,gE,gF,gG,gH,gI,gJ,gK,gL,gM,gN=a.i(87924),gO=a.i(72131),gP=a.i(99570),gQ=a.i(50944),gR=a.i(38246),gS=a.i(19721),gT=a.i(76841),gU=a.i(30709),gV=a.i(79541),gW=a.i(10547),gX=a.i(70121),gY=a.i(50104),gZ=a.i(7554),g$=a.i(25152),g_=a.i(77994),g0=a.i(3688),g1=a.i(77192),g2=a.i(30553),g3="Checkbox",[g4,g5]=(0,gY.createContextScope)(g3),[g6,g7]=g4(g3);function g8(a){let{__scopeCheckbox:b,checked:c,children:d,defaultChecked:e,disabled:f,form:g,name:h,onCheckedChange:i,required:j,value:k="on",internal_do_not_use_render:l}=a,[m,n]=(0,g$.useControllableState)({prop:c,defaultProp:e??!1,onChange:i,caller:g3}),[o,p]=gO.useState(null),[q,r]=gO.useState(null),s=gO.useRef(!1),t=!o||!!g||!!o.closest("form"),u={checked:m,disabled:f,setChecked:n,control:o,setControl:p,name:h,form:g,value:k,hasConsumerStoppedPropagationRef:s,required:j,defaultChecked:!hg(e)&&e,isFormControl:t,bubbleInput:q,setBubbleInput:r};return(0,gN.jsx)(g6,{scope:b,...u,children:"function"==typeof l?l(u):d})}var g9="CheckboxTrigger",ha=gO.forwardRef(({__scopeCheckbox:a,onKeyDown:b,onClick:c,...d},e)=>{let{control:f,value:g,disabled:h,checked:i,required:j,setControl:k,setChecked:l,hasConsumerStoppedPropagationRef:m,isFormControl:n,bubbleInput:o}=g7(g9,a),p=(0,gX.useComposedRefs)(e,k),q=gO.useRef(i);return gO.useEffect(()=>{let a=f?.form;if(a){let b=()=>l(q.current);return a.addEventListener("reset",b),()=>a.removeEventListener("reset",b)}},[f,l]),(0,gN.jsx)(g2.Primitive.button,{type:"button",role:"checkbox","aria-checked":hg(i)?"mixed":i,"aria-required":j,"data-state":hh(i),"data-disabled":h?"":void 0,disabled:h,value:g,...d,ref:p,onKeyDown:(0,gZ.composeEventHandlers)(b,a=>{"Enter"===a.key&&a.preventDefault()}),onClick:(0,gZ.composeEventHandlers)(c,a=>{l(a=>!!hg(a)||!a),o&&n&&(m.current=a.isPropagationStopped(),m.current||a.stopPropagation())})})});ha.displayName=g9;var hb=gO.forwardRef((a,b)=>{let{__scopeCheckbox:c,name:d,checked:e,defaultChecked:f,required:g,disabled:h,value:i,onCheckedChange:j,form:k,...l}=a;return(0,gN.jsx)(g8,{__scopeCheckbox:c,checked:e,defaultChecked:f,disabled:h,required:g,onCheckedChange:j,name:d,form:k,value:i,internal_do_not_use_render:({isFormControl:a})=>(0,gN.jsxs)(gN.Fragment,{children:[(0,gN.jsx)(ha,{...l,ref:b,__scopeCheckbox:c}),a&&(0,gN.jsx)(hf,{__scopeCheckbox:c})]})})});hb.displayName=g3;var hc="CheckboxIndicator",hd=gO.forwardRef((a,b)=>{let{__scopeCheckbox:c,forceMount:d,...e}=a,f=g7(hc,c);return(0,gN.jsx)(g1.Presence,{present:d||hg(f.checked)||!0===f.checked,children:(0,gN.jsx)(g2.Primitive.span,{"data-state":hh(f.checked),"data-disabled":f.disabled?"":void 0,...e,ref:b,style:{pointerEvents:"none",...a.style}})})});hd.displayName=hc;var he="CheckboxBubbleInput",hf=gO.forwardRef(({__scopeCheckbox:a,...b},c)=>{let{control:d,hasConsumerStoppedPropagationRef:e,checked:f,defaultChecked:g,required:h,disabled:i,name:j,value:k,form:l,bubbleInput:m,setBubbleInput:n}=g7(he,a),o=(0,gX.useComposedRefs)(c,n),p=(0,g_.usePrevious)(f),q=(0,g0.useSize)(d);gO.useEffect(()=>{if(!m)return;let a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set,b=!e.current;if(p!==f&&a){let c=new Event("click",{bubbles:b});m.indeterminate=hg(f),a.call(m,!hg(f)&&f),m.dispatchEvent(c)}},[m,p,f,e]);let r=gO.useRef(!hg(f)&&f);return(0,gN.jsx)(g2.Primitive.input,{type:"checkbox","aria-hidden":!0,defaultChecked:g??r.current,required:h,disabled:i,name:j,value:k,form:l,...b,tabIndex:-1,ref:o,style:{...b.style,...q,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});function hg(a){return"indeterminate"===a}function hh(a){return hg(a)?"indeterminate":a?"checked":"unchecked"}hf.displayName=he;var hi=a.i(6406),hj=a.i(68114);function hk({className:a,...b}){return(0,gN.jsx)(hb,{"data-slot":"checkbox",className:(0,hj.cn)("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",a),...b,children:(0,gN.jsx)(hd,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:(0,gN.jsx)(hi.CheckIcon,{className:"size-3.5"})})})}var hl=a.i(64791);let hm=function({executionId:a,lessonId:b,onLessonsLoaded:c}){let{data:d}=(0,gV.useGetCourseDetailsQuery)(a);return(0,gO.useEffect)(()=>{if(d?.Data?.Chapters){let a=[];d.Data.Chapters.forEach(b=>{b.Lessons?.forEach(b=>{a.push(b)})}),c?.(a)}},[d]),(0,gN.jsx)("div",{className:"lg:col-span-4 col-span-12 ",children:(0,gN.jsxs)("div",{className:"shadow-sm p-4 rounded h-full max-h-[500px] overflow-y-auto",children:[(0,gN.jsx)("h3",{className:"text-lg",children:"تفاصيل الكورس"}),(0,gN.jsx)("div",{children:(0,gN.jsx)(gT.Accordion,{type:"single",collapsible:!0,children:d&&d.Data?.Chapters&&d.Data.Chapters.map(c=>(0,gN.jsxs)(gT.AccordionItem,{value:`item-${c.Id}`,children:[(0,gN.jsxs)(gT.AccordionTrigger,{className:"relative",children:[c.Title,(0,gN.jsx)("div",{className:"absolute end-8 flex items-center gap-x-3",children:(0,gN.jsxs)("div",{className:"flex items-end px-1 py-1 pb-2 rounded text-gray-500 gap-x-1",children:[(0,gN.jsx)(hl.Video,{className:"size-3 text-primary/80"}),(0,gN.jsxs)("span",{className:"text-xs",children:[c.Lessons?.length," درس"]})]})})]}),(0,gN.jsx)(gT.AccordionContent,{children:(0,gN.jsxs)("div",{className:"relative",children:[(0,gN.jsx)("div",{className:"absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"}),(0,gN.jsx)("div",{className:"space-y-2",children:c.Lessons?.map(c=>{let d=(0,gW.default)(String(a),c.Id,c.ContentType),e=gU.ContentType[c.ContentType],f=c.Id===b;return(0,gN.jsxs)("div",{className:"relative flex flex-col group",children:[(0,gN.jsx)("div",{className:"absolute start-2 top-1/2 -translate-y-1/2 bg-white py-1",children:(0,gN.jsx)(hk,{})}),(0,gN.jsx)("div",{className:"mr-5 flex-1 cursor-pointer p-4",children:(0,gN.jsxs)("div",{className:"flex justify-between items-start",children:[(0,gN.jsxs)("div",{className:"flex-1",children:[(0,gN.jsx)("h3",{className:"text-sm text-gray-800",children:c.Title}),(0,gN.jsxs)("div",{className:"flex items-center gap-x-2 mt-1 text-sm text-gray-600",children:[(0,gN.jsx)("span",{className:"size-2 rounded-full bg-primary"}),(0,gN.jsxs)("span",{className:"text-xs",children:["20 دقيقة | ",e]})]})]}),(0,gN.jsx)(gP.Button,{size:"sm",className:"px-3 text-sm",asChild:!0,children:f?(0,gN.jsx)("span",{className:"",children:"أنت هنا"}):(0,gN.jsx)(gR.default,{href:d,children:"ابدأ"})})]})})]},c.Id)})})]})})]},c.Id))})})]})})},hn=function({htmlContent:a}){return(0,gN.jsx)("div",{className:"prose w-full [&_iframe]:w-full [&_iframe]:h-[500px]",dangerouslySetInnerHTML:{__html:a||""}})},ho={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},hp={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},hq={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},hr=Object.entries(hq),hs=hr.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),ht=hr.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),hu=Object.entries(ht).reduce((a,[b,c])=>{let d=hs[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"}),hv=Object.entries(hs).reduce((a,[b,c])=>{let d=ht[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),hw={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},hx={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},hy={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},hz={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},hA={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},hB={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},hC={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},hD={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function hE(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function hF(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function hG(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function hH(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function hI(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function hJ(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}a.s(["AttributeToStateChangeEventMap",()=>hv,"AvailabilityStates",()=>hA,"MediaStateChangeEvents",()=>ht,"MediaStateReceiverAttributes",()=>hp,"MediaUIAttributes",()=>hs,"MediaUIEvents",()=>ho,"MediaUIProps",()=>hq,"PointerTypes",()=>hz,"ReadyStates",()=>hy,"StateChangeEventToAttributeMap",()=>hu,"StreamTypes",()=>hB,"TextTrackKinds",()=>hw,"TextTrackModes",()=>hx,"VolumeLevels",()=>hC,"WebkitPresentationModes",()=>hD],1475),a.i(1475);let hK=a=>new Promise(b=>setTimeout(b,a)),hL=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],hM=a=>{if(!hI(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>{let c;return a&&(c=1===a?hL[b].singular:hL[b].plural,`${a} ${c}`)}).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function hN(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}let hO=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function hP(a=hO){return Array.from(a).map((b,c)=>[Number(a.start(c).toFixed(3)),Number(a.end(c).toFixed(3))].join(":")).join(" ")}a.s(["emptyTimeRanges",()=>hO,"formatAsTimePhrase",()=>hM,"formatTime",()=>hN,"serializeTimeRanges",()=>hP],91751),a.i(91751);let hQ={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},hR=(null==(j=globalThis.navigator)?void 0:j.language)||"en",hS=(a,b={})=>(a=>{var b,c,d;let[e]=hR.split("-");return(null==(b=hQ[hR])?void 0:b[a])||(null==(c=hQ[e])?void 0:c[a])||(null==(d=hQ.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class hT{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class hU extends hT{}class hV extends hU{constructor(){super(...arguments),this.role=null}}let hW={createElement:function(){return new hX.HTMLElement},createElementNS:function(){return new hX.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},hX={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:hW,Node:hU,Element:hV,HTMLElement:class extends hV{constructor(){super(...arguments),this.innerHTML=""}get content(){return new hX.DocumentFragment}},DocumentFragment:class extends hT{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},hY=Object.keys(hX).every(a=>a in globalThis),hZ=hY?globalThis:hX,h$=hY?globalThis.document:hW,h_=new WeakMap,h0=a=>{let b=h_.get(a);return b||h_.set(a,b=new Set),b},h1=new hZ.ResizeObserver(a=>{for(let b of a)for(let a of h0(b.target))a(b)});function h2(a,b){h0(a).add(b),h1.observe(a)}function h3(a,b){let c=h0(a);c.delete(b),c.size||h1.unobserve(a)}function h4(a){let b={};for(let c of a)b[c.name]=c.value;return b}function h5(a){var b;return null!=(b=h6(a))?b:ia(a,"media-controller")}function h6(a){var b;let{MEDIA_CONTROLLER:c}=hp,d=a.getAttribute(c);if(d)return null==(b=ic(a))?void 0:b.getElementById(d)}let h7=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},h8=(a,b)=>{let c,d;return(c=`slot[name="${b}"]`,!(d=a.shadowRoot.querySelector(c))?[]:d.children)[0]},h9=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||h9(a,b.getRootNode().host)),ia=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||ia(a.getRootNode().host,b)};function ib(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=ib(c.shadowRoot))?b:c:null}function ic(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function id(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function ie(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||ig(a,b)}function ig(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ih(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function ii(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}ih(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function ij(a,b){return a.hasAttribute(b)}function ik(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}ij(a,b)!=c&&a.toggleAttribute(b,c)}function il(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function im(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;il(a,b,void 0)!==d&&a.setAttribute(b,d)}var io=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ip=(a,b,c)=>(io(a,b,"read from private field"),c?c.call(a):b.get(a)),iq=(a,b,c,d)=>(io(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ir extends hZ.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[hp.MEDIA_CONTROLLER,hs.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===hp.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=ip(this,k))?void 0:d.unassociateElement)||e.call(d,this),iq(this,k,null)),c&&this.isConnected&&(iq(this,k,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=ip(this,k))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d,e,f;let g;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),iq(this,k,(e=this,(g=e.getAttribute(hp.MEDIA_CONTROLLER))?null==(f=e.getRootNode())?void 0:f.getElementById(g):ia(e,"media-controller"))),this.getAttribute(hp.MEDIA_CONTROLLER)&&(null==(b=null==(a=ip(this,k))?void 0:a.associateElement)||b.call(a,this)),null==(c=ip(this,k))||c.addEventListener("pointerdown",this),null==(d=ip(this,k))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(hp.MEDIA_CONTROLLER)&&(null==(b=null==(a=ip(this,k))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=ip(this,k))||c.removeEventListener("pointerdown",this),null==(d=ip(this,k))||d.removeEventListener("click",this),iq(this,k,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let{pointerType:j=this._pointerType}=a;if(this._pointerType=void 0,j===hz.TOUCH)return void this.handleTap(a);if(j===hz.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return ij(this,hs.MEDIA_PAUSED)}set mediaPaused(a){ik(this,hs.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?ho.MEDIA_PLAY_REQUEST:ho.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new hZ.CustomEvent(b,{composed:!0,bubbles:!0}))}}k=new WeakMap,ir.shadowRootOptions={mode:"open"},ir.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},hZ.customElements.get("media-gesture-receiver")||hZ.customElements.define("media-gesture-receiver",ir);var is=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},it=(a,b,c)=>(is(a,b,"read from private field"),c?c.call(a):b.get(a)),iu=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iv=(a,b,c,d)=>(is(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),iw=(a,b,c)=>(is(a,b,"access private method"),c);let ix="audio",iy="autohide",iz="breakpoints",iA="gesturesdisabled",iB="keyboardcontrol",iC="noautohide",iD="userinactive",iE="autohideovercontrols",iF=Object.values(hs);function iG(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(iz))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(ht.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(ht.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class iH extends hZ.HTMLElement{constructor(){if(super(),iu(this,q),iu(this,u),iu(this,w),iu(this,y),iu(this,A),iu(this,C),iu(this,l,0),iu(this,m,null),iu(this,n,null),iu(this,o,void 0),this.breakpointsComputed=!1,iu(this,p,new MutationObserver(iw(this,q,r).bind(this))),iu(this,s,!1),iu(this,t,a=>{it(this,s)||(setTimeout(()=>{iG(a.target,a.contentRect.width),iv(this,s,!1)},0),iv(this,s,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}const a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){it(this,m)&&this.mediaUnsetCallback(it(this,m));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[iy,iA].concat(iF).filter(a=>![hs.MEDIA_RENDITION_LIST,hs.MEDIA_AUDIO_TRACK_LIST,hs.MEDIA_CHAPTERS_CUES,hs.MEDIA_WIDTH,hs.MEDIA_HEIGHT,hs.MEDIA_ERROR,hs.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==iy&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(iv(this,m,a),a.localName.includes("-")&&await hZ.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;it(this,p).observe(this,{childList:!0,subtree:!0}),h2(this,it(this,t));let b=null!=this.getAttribute(ix)?hS("audio player"):hS("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(iD,""),iG(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=hZ.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;it(this,p).disconnect(),h3(this,it(this,t)),this.media&&this.mediaUnsetCallback(this.media),null==(a=hZ.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){iv(this,m,null)}handleEvent(a){switch(a.type){case"pointerdown":iv(this,l,a.timeStamp);break;case"pointermove":iw(this,u,v).call(this,a);break;case"pointerup":iw(this,w,x).call(this,a);break;case"mouseleave":iw(this,y,z).call(this);break;case"mouseup":this.removeAttribute(iB);break;case"keyup":iw(this,C,D).call(this),this.setAttribute(iB,"")}}set autohide(a){let b=Number(a);iv(this,o,isNaN(b)?0:b)}get autohide(){return(void 0===it(this,o)?2:it(this,o)).toString()}get breakpoints(){return il(this,iz)}set breakpoints(a){im(this,iz,a)}get audio(){return ij(this,ix)}set audio(a){ik(this,ix,a)}get gesturesDisabled(){return ij(this,iA)}set gesturesDisabled(a){ik(this,iA,a)}get keyboardControl(){return ij(this,iB)}set keyboardControl(a){ik(this,iB,a)}get noAutohide(){return ij(this,iC)}set noAutohide(a){ik(this,iC,a)}get autohideOverControls(){return ij(this,iE)}set autohideOverControls(a){ik(this,iE,a)}get userInteractive(){return ij(this,iD)}set userInteractive(a){ik(this,iD,a)}}l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p=new WeakMap,q=new WeakSet,r=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},s=new WeakMap,t=new WeakMap,u=new WeakSet,v=function(a){if("mouse"!==a.pointerType&&a.timeStamp-it(this,l)<250)return;iw(this,A,B).call(this),clearTimeout(it(this,n));let b=this.hasAttribute(iE);([this,this.media].includes(a.target)||b)&&iw(this,C,D).call(this)},w=new WeakSet,x=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(iD);[this,this.media].includes(a.target)&&b?iw(this,y,z).call(this):iw(this,C,D).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&iw(this,C,D).call(this)},y=new WeakSet,z=function(){if(0>it(this,o)||this.hasAttribute(iD))return;this.setAttribute(iD,"");let a=new hZ.CustomEvent(ht.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},A=new WeakSet,B=function(){if(!this.hasAttribute(iD))return;this.removeAttribute(iD);let a=new hZ.CustomEvent(ht.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},C=new WeakSet,D=function(){iw(this,A,B).call(this),clearTimeout(it(this,n));let a=parseInt(this.autohide);a<0||iv(this,n,setTimeout(()=>{iw(this,y,z).call(this)},1e3*a))},iH.shadowRootOptions={mode:"open"},iH.getTemplateHTML=function(a){return`
    <style>
      
      :host([${hs.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${ix}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${ix}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${ix}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${ix}])[${iA}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${ix}])[${iA}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${ix}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${ix}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${ix}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${ix}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${iC}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${iD}]:not([${hs.MEDIA_PAUSED}]):not([${hs.MEDIA_IS_AIRPLAYING}]):not([${hs.MEDIA_IS_CASTING}]):not([${ix}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${iC}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${iD}]:not([${iC}]):not([${hs.MEDIA_PAUSED}]):not([${hs.MEDIA_IS_CASTING}]):not([${ix}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${iD}][${iE}]:not([${iC}]):not([${hs.MEDIA_PAUSED}]):not([${hs.MEDIA_IS_CASTING}]):not([${ix}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${ix}])[${hs.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ir.shadowRootOptions.mode}">
          ${ir.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},hZ.customElements.get("media-container")||hZ.customElements.define("media-container",iH);var iI=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iJ=(a,b,c)=>(iI(a,b,"read from private field"),c?c.call(a):b.get(a)),iK=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iL=(a,b,c,d)=>(iI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class iM{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){iK(this,I),iK(this,E,void 0),iK(this,F,void 0),iK(this,G,void 0),iK(this,H,new Set),iL(this,E,a),iL(this,F,b),iL(this,G,new Set(c))}[Symbol.iterator](){return iJ(this,I,J).values()}get length(){return iJ(this,I,J).size}get value(){var a;return null!=(a=[...iJ(this,I,J)].join(" "))?a:""}set value(a){var b;a!==this.value&&(iL(this,H,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...iJ(this,I,J)][a]}values(){return iJ(this,I,J).values()}forEach(a,b){iJ(this,I,J).forEach(a,b)}add(...a){var b,c;a.forEach(a=>iJ(this,H).add(a)),(""!==this.value||(null==(b=iJ(this,E))?void 0:b.hasAttribute(`${iJ(this,F)}`)))&&(null==(c=iJ(this,E))||c.setAttribute(`${iJ(this,F)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>iJ(this,H).delete(a)),null==(b=iJ(this,E))||b.setAttribute(`${iJ(this,F)}`,`${this.value}`)}contains(a){return iJ(this,I,J).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}E=new WeakMap,F=new WeakMap,G=new WeakMap,H=new WeakMap,I=new WeakSet,J=function(){return iJ(this,H).size?iJ(this,H):iJ(this,G)};let iN=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?hw.CAPTIONS:hw.SUBTITLES,language:c,label:e}},iO=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=iN(a);return{...b,...c}}),iP=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?iN(a):a):"string"==typeof a?iO(a):[a]:[],iQ=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,iR=(a=[])=>Array.prototype.map.call(a,iQ).join(" "),iS=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},iT=(a,b=[],c=[])=>{let d=iP(c).map(iS);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},iU=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:iS(b);return Array.from(a.textTracks).filter(c)},iV=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(hs.MEDIA_SUBTITLES_SHOWING)},iW="exitFullscreen"in h$?"exitFullscreen":"webkitExitFullscreen"in h$?"webkitExitFullscreen":"webkitCancelFullScreen"in h$?"webkitCancelFullScreen":void 0,iX="fullscreenElement"in h$?"fullscreenElement":"webkitFullscreenElement"in h$?"webkitFullscreenElement":void 0,iY="fullscreenEnabled"in h$?"fullscreenEnabled":"webkitFullscreenEnabled"in h$?"webkitFullscreenEnabled":void 0,iZ=()=>{var a;return b||(b=null==(a=null==h$?void 0:h$.createElement)?void 0:a.call(h$,"video"))},i$=async(a=iZ())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([i_(a,c.signal),i0(a,b)]);return c.abort(),d},i_=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),i0=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await hK(10)}return a.volume!==b},i1=/.*Version\/.*Safari\/.*/.test(hZ.navigator.userAgent),i2=(a=iZ())=>(!hZ.matchMedia("(display-mode: standalone)").matches||!i1)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),i3=(a=iZ())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[iY])||c&&"webkitSupportsFullscreen"in c})({documentElement:h$,media:a}),i4=i3(),i5=i2(),i6=!!hZ.WebKitPlaybackTargetAvailabilityEvent,i7=!!hZ.chrome,i8=a=>iU(a.media,a=>[hw.SUBTITLES,hw.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),i9=a=>iU(a.media,a=>a.mode===hx.SHOWING&&[hw.SUBTITLES,hw.CAPTIONS].includes(a.kind)),ja=(a,b)=>{let c=i8(a),d=i9(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)iT(hx.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;iT(hx.DISABLED,c,d),iT(hx.SHOWING,c,[{language:f,label:g,kind:h}])}}},jb=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?jc(a,b):Object.entries(a).every(([a,c])=>a in b&&jb(c,b[a])))),jc=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>jb(a,b[c])))},jd=Object.values(hB),je=i$().then(a=>c=a),jf=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof hZ.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=hZ.customElements.get(b);c&&a instanceof c||(await hZ.customElements.whenDefined(b),hZ.customElements.upgrade(a))}))},jg=new hZ.DOMParser,jh={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;!c||Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c}=b;if(c){try{hZ.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===hZ.localStorage.getItem("media-chrome-pref-muted");jh.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c}=b;if(c){try{null==a?hZ.localStorage.removeItem("media-chrome-pref-volume"):hZ.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=hZ.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;jh.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&hI(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[hB.LIVE,hB.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(jd.includes(e))return e===hB.UNKNOWN?d:e;let f=b.duration;return f===1/0?hB.LIVE:Number.isFinite(f)?hB.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=jh.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===hB.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(jh.mediaStreamType.get(a)!==hB.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>i8(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>i9(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![hw.CAPTIONS,hw.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||ja(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=iU(c,{kind:hw.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&jg.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&h9(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!h$.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else h$.pictureInPictureElement&&h$.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[iX];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===hD.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(iX in a))return h9(f,e);for(;null==a?void 0:a[iX];){if(a[iX]===e)return!0;a=null==(b=a[iX])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(iW){let a=null==(b=null==c?void 0:c[iW])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&hZ.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!i4||!i3(b))return hA.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;if(!i5||!i2(b))return hA.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===c||(null==b?void 0:b.volume)==void 0)return hA.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==c&&je.then(b=>a(b?void 0:hA.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return i7&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?hA.UNAVAILABLE:void 0:hA.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>i6?(null==b?void 0:b.availability)==="not-available"?hA.UNAVAILABLE:void 0:hA.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:hA.UNAVAILABLE:hA.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?hA.UNAVAILABLE:void 0:hA.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},ji={[ho.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=iU(i,{kind:hw.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[ho.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[ho.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===hB.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[ho.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[ho.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[ho.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[ho.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[ho.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[ho.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[ho.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=i8(b),g=iP(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&hZ.localStorage.setItem("media-chrome-pref-subtitles-lang",h),iT(hx.SHOWING,f,g)},[ho.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=i8(b);iT(hx.DISABLED,d,null!=c?c:[])},[ho.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){ja(b,c)},[ho.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[ho.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[ho.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[ho.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[ho.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[ho.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[ho.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[ho.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[ho.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var jj=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jk=(a,b,c)=>(jj(a,b,"read from private field"),c?c.call(a):b.get(a)),jl=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jm=(a,b,c,d)=>(jj(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),jn=(a,b,c)=>(jj(a,b,"access private method"),c);let jo=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],jp="defaultsubtitles",jq="defaultstreamtype",jr="defaultduration",js="fullscreenelement",jt="hotkeys",ju="keysused",jv="liveedgeoffset",jw="seektoliveoffset",jx="noautoseektolive",jy="nohotkeys",jz="novolumepref",jA="nosubtitleslangpref",jB="nodefaultstore",jC="keyboardforwardseekoffset",jD="keyboardbackwardseekoffset",jE="lang";K=new WeakMap,L=new WeakMap,M=new WeakMap,N=new WeakMap,O=new WeakMap,P=new WeakMap,Q=new WeakSet,R=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=jh,requestMap:e=ji,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0==a||jb(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k)))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await jf(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&O&&p(),W&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;e[b]&&null==k.mediaErrorCode?l(e[b](d,j,a)):"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b})},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(jp),defaultDuration:this.hasAttribute(jr)?+this.getAttribute(jr):void 0,defaultStreamType:null!=(a=this.getAttribute(jq))?a:void 0,liveEdgeOffset:this.hasAttribute(jv)?+this.getAttribute(jv):void 0,seekToLiveOffset:this.hasAttribute(jw)?+this.getAttribute(jw):this.hasAttribute(jv)?+this.getAttribute(jv):void 0,noAutoSeekToLive:this.hasAttribute(jx),noVolumePref:this.hasAttribute(jz),noSubtitlesLangPref:this.hasAttribute(jA)}})},S=new WeakSet,T=function(a){let{key:b}=a;jo.includes(b)?this.keyboardShortcutHandler(a):this.removeEventListener("keyup",jn(this,S,T))},U=new WeakSet,V=function(a){let{metaKey:b,altKey:c,key:d}=a;b||c||!jo.includes(d)?this.removeEventListener("keyup",jn(this,S,T)):([" ","ArrowLeft","ArrowRight"].includes(d)&&!(jk(this,K).contains(`no${d.toLowerCase()}`)||" "===d&&jk(this,K).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",jn(this,S,T),{once:!0}))};let jF=Object.values(hs),jG=Object.values(hq),jH=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(hZ.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,hp.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>jF.includes(a)):[]},jI=a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&hZ.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof hZ.customElements.get(a.nodeName.toLowerCase()))&&hZ.customElements.upgrade(a),jG.some(b=>b in a)||!!jH(a).length},jJ=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},jK={[hs.MEDIA_SUBTITLES_LIST]:iR,[hs.MEDIA_SUBTITLES_SHOWING]:iR,[hs.MEDIA_SEEKABLE]:jJ,[hs.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(jJ).join(" "),[hs.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[hs.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(hE).join(" ")},[hs.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(hG).join(" ")}},jL=async(a,b,c)=>{var d,e;if(a.isConnected||await hK(0),"boolean"==typeof c||null==c)return ik(a,b,c);if("number"==typeof c)return ii(a,b,c);if("string"==typeof c)return im(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=jK[b])?void 0:d.call(jK,c))?e:c;return a.setAttribute(b,f)},jM=(a,b)=>{var c;if(null==(c=a.closest)?void 0:c.call(a,'*[slot="media"]'))return;let d=(a,b)=>{var c,d;jI(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>jM(a,b))},e=null==a?void 0:a.nodeName.toLowerCase();e.includes("-")&&!jI(a)?hZ.customElements.whenDefined(e).then(()=>{d(a,b)}):d(a,b)},jN=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=jH(a),e=b.toLowerCase();d.includes(e)&&jL(a,e,c)})};hZ.customElements.get("media-controller")||hZ.customElements.define("media-controller",class extends iH{constructor(){super(),jl(this,Q),jl(this,S),jl(this,U),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,jl(this,K,new iM(this,jt)),jl(this,L,void 0),jl(this,M,void 0),jl(this,N,void 0),jl(this,O,void 0),jl(this,P,a=>{var b;null==(b=jk(this,M))||b.dispatch(a)}),this.associateElement(this);let a={};jm(this,N,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new hZ.CustomEvent(hv[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(jy,jt,jq,jp,jr,jE)}get mediaStore(){return jk(this,M)}set mediaStore(a){var b,c;(jk(this,M)&&(null==(b=jk(this,O))||b.call(this),jm(this,O,void 0)),jm(this,M,a),jk(this,M)||this.hasAttribute(jB))?jm(this,O,null==(c=jk(this,M))?void 0:c.subscribe(jk(this,N))):jn(this,Q,R).call(this)}get fullscreenElement(){var a;return null!=(a=jk(this,L))?a:this}set fullscreenElement(a){var b;this.hasAttribute(js)&&this.removeAttribute(js),jm(this,L,a),null==(b=jk(this,M))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ij(this,jp)}set defaultSubtitles(a){ik(this,jp,a)}get defaultStreamType(){return il(this,jq)}set defaultStreamType(a){im(this,jq,a)}get defaultDuration(){return ih(this,jr)}set defaultDuration(a){ii(this,jr,a)}get noHotkeys(){return ij(this,jy)}set noHotkeys(a){ik(this,jy,a)}get keysUsed(){return il(this,ju)}set keysUsed(a){im(this,ju,a)}get liveEdgeOffset(){return ih(this,jv)}set liveEdgeOffset(a){ii(this,jv,a)}get noAutoSeekToLive(){return ij(this,jx)}set noAutoSeekToLive(a){ik(this,jx,a)}get noVolumePref(){return ij(this,jz)}set noVolumePref(a){ik(this,jz,a)}get noSubtitlesLangPref(){return ij(this,jA)}set noSubtitlesLangPref(a){ik(this,jA,a)}get noDefaultStore(){return ij(this,jB)}set noDefaultStore(a){ik(this,jB,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k;(super.attributeChangedCallback(a,b,c),a===jy)?c!==b&&""===c?(this.hasAttribute(jt)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys():a===jt?jk(this,K).value=c:a===jp&&c!==b?null==(d=jk(this,M))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(jp)}}):a===jq?null==(f=jk(this,M))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(jq))?e:void 0}}):a===jv?null==(g=jk(this,M))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(jv)?+this.getAttribute(jv):void 0,seekToLiveOffset:this.hasAttribute(jw)?void 0:+this.getAttribute(jv)}}):a===jw?null==(h=jk(this,M))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(jw)?+this.getAttribute(jw):void 0}}):a===jx?null==(i=jk(this,M))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(jx)}}):a===js?(jm(this,L,c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0),null==(k=jk(this,M))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):a===jE&&c!==b&&(hR=c)}connectedCallback(){var a,b;jk(this,M)||this.hasAttribute(jB)||jn(this,Q,R).call(this),null==(a=jk(this,M))||a.dispatch({type:"documentelementchangerequest",detail:h$}),super.connectedCallback(),jk(this,M)&&!jk(this,O)&&jm(this,O,null==(b=jk(this,M))?void 0:b.subscribe(jk(this,N))),this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),jk(this,M)&&(null==(b=jk(this,M))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=jk(this,M))||c.dispatch({type:ho.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),jk(this,O)&&(null==(d=jk(this,O))||d.call(this),jm(this,O,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=jk(this,M))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=jk(this,M))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){jN(this.mediaStateReceivers,a,b)}associateElement(a){var b,c,d;let e,f,g,h,i;if(!a)return;let{associatedElementSubscriptions:j}=this;if(j.has(a))return;let k=this.registerMediaStateReceiver.bind(this),l=(b=a,c=k,d=this.unregisterMediaStateReceiver.bind(this),jM(b,c),e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)},f=a=>{var b;d(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)},b.addEventListener(ho.REGISTER_MEDIA_STATE_RECEIVER,e),b.addEventListener(ho.UNREGISTER_MEDIA_STATE_RECEIVER,f),g=[],h=a=>{let b=a.target;"media"!==b.name&&(g.forEach(a=>jM(a,d)),(g=[...b.assignedElements({flatten:!0})]).forEach(a=>jM(a,c)))},b.addEventListener("slotchange",h),(i=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:b=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(b,a=>jM(a,c)),Array.prototype.forEach.call(e,a=>jM(a,d))):"attributes"===f&&h===hp.MEDIA_CHROME_ATTRIBUTES&&(jI(g)?c(g):d(g))})})).observe(b,{childList:!0,attributes:!0,subtree:!0}),()=>{jM(b,d),b.removeEventListener("slotchange",h),i.disconnect(),b.removeEventListener(ho.REGISTER_MEDIA_STATE_RECEIVER,e),b.removeEventListener(ho.UNREGISTER_MEDIA_STATE_RECEIVER,f)});Object.values(ho).forEach(b=>{a.addEventListener(b,jk(this,P))}),j.set(a,l)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(ho).forEach(b=>{a.removeEventListener(b,jk(this,P))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),jk(this,M)&&Object.entries(jk(this,M).getState()).forEach(([b,c])=>{jN([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",jn(this,U,V))}disableHotkeys(){this.removeEventListener("keydown",jn(this,U,V)),this.removeEventListener("keyup",jn(this,S,T))}get hotkeys(){return il(this,jt)}set hotkeys(a){im(this,jt,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(ju))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||jk(this,K).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&jk(this,K).contains("nospace")))switch(a.key){case" ":case"k":g=jk(this,M).getState().mediaPaused?ho.MEDIA_PLAY_REQUEST:ho.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new hZ.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?ho.MEDIA_UNMUTE_REQUEST:ho.MEDIA_MUTE_REQUEST,this.dispatchEvent(new hZ.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?ho.MEDIA_EXIT_FULLSCREEN_REQUEST:ho.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new hZ.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new hZ.CustomEvent(ho.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(jD)?+this.getAttribute(jD):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new hZ.CustomEvent(ho.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(jC)?+this.getAttribute(jC):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new hZ.CustomEvent(ho.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}});let jO="placement",jP="bounds";class jQ extends hZ.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!id(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=ia(this,"#"+this.bounds))?a:h5(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;m<0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?this.style.setProperty("--media-tooltip-offset-x",`${n}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[jO,jP]}get placement(){return il(this,jO)}set placement(a){im(this,jO,a)}get bounds(){return il(this,jP)}set bounds(a){im(this,jP,a)}}jQ.shadowRootOptions={mode:"open"},jQ.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},hZ.customElements.get("media-tooltip")||hZ.customElements.define("media-tooltip",jQ);var jR=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jS=(a,b,c)=>(jR(a,b,"read from private field"),c?c.call(a):b.get(a)),jT=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jU=(a,b,c,d)=>(jR(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let jV="tooltipplacement",jW="disabled",jX="notooltip";class jY extends hZ.HTMLElement{constructor(){if(super(),jT(this,_),jT(this,W,void 0),this.preventClick=!1,this.tooltipEl=null,jT(this,X,a=>{this.preventClick||this.handleClick(a),setTimeout(jS(this,Y),0)}),jT(this,Y,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),jT(this,Z,a=>{let{key:b}=a;this.keysUsed.includes(b)?this.preventClick||this.handleClick(a):this.removeEventListener("keyup",jS(this,Z))}),jT(this,$,a=>{let{metaKey:b,altKey:c,key:d}=a;b||c||!this.keysUsed.includes(d)?this.removeEventListener("keyup",jS(this,Z)):this.addEventListener("keyup",jS(this,Z),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",jV,hp.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",jS(this,X)),this.addEventListener("keydown",jS(this,$)),this.tabIndex=0}disable(){this.removeEventListener("click",jS(this,X)),this.removeEventListener("keydown",jS(this,$)),this.removeEventListener("keyup",jS(this,Z)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===hp.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=jS(this,W))?void 0:d.unassociateElement)||e.call(d,this),jU(this,W,null)),c&&this.isConnected&&(jU(this,W,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=jS(this,W))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===jV&&this.tooltipEl&&c!==b&&(this.tooltipEl.placement=c),jS(this,Y).call(this)}connectedCallback(){var a,b,c;let{style:d}=ie(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(hp.MEDIA_CONTROLLER);e&&(jU(this,W,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=jS(this,W))?void 0:b.associateElement)||c.call(b,this)),hZ.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=_,b=aa,jR(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=jS(this,W))?void 0:a.unassociateElement)||b.call(a,this),jU(this,W,null),this.removeEventListener("mouseenter",jS(this,Y)),this.removeEventListener("focus",jS(this,Y)),this.removeEventListener("click",jS(this,X))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return il(this,jV)}set tooltipPlacement(a){im(this,jV,a)}get mediaController(){return il(this,hp.MEDIA_CONTROLLER)}set mediaController(a){im(this,hp.MEDIA_CONTROLLER,a)}get disabled(){return ij(this,jW)}set disabled(a){ik(this,jW,a)}get noTooltip(){return ij(this,jX)}set noTooltip(a){ik(this,jX,a)}handleClick(a){}}W=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,$=new WeakMap,_=new WeakSet,aa=function(){this.addEventListener("mouseenter",jS(this,Y)),this.addEventListener("focus",jS(this,Y)),this.addEventListener("click",jS(this,X));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},jY.shadowRootOptions={mode:"open"},jY.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${jQ.shadowRootOptions.mode}">
          ${jQ.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},jY.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},jY.getTooltipContentHTML=function(){return""},hZ.customElements.get("media-chrome-button")||hZ.customElements.define("media-chrome-button",jY);let jZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,j$=a=>{let b=a.mediaIsAirplaying?hS("stop airplay"):hS("start airplay");a.setAttribute("aria-label",b)};class j_ extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_IS_AIRPLAYING,hs.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),j$(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_IS_AIRPLAYING&&j$(this)}get mediaIsAirplaying(){return ij(this,hs.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){ik(this,hs.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return il(this,hs.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){im(this,hs.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new hZ.CustomEvent(ho.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}j_.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${hs.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${hs.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${hs.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${hs.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${jZ}</slot>
      <slot name="exit">${jZ}</slot>
    </slot>
  `},j_.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${hS("start airplay")}</slot>
    <slot name="tooltip-exit">${hS("stop airplay")}</slot>
  `},hZ.customElements.get("media-airplay-button")||hZ.customElements.define("media-airplay-button",j_);let j0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,j1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,j2=a=>{a.setAttribute("aria-checked",iV(a).toString())};class j3 extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_SUBTITLES_LIST,hs.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",hS("closed captions")),j2(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_SUBTITLES_SHOWING&&j2(this)}get mediaSubtitlesList(){return j4(this,hs.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){j5(this,hs.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return j4(this,hs.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){j5(this,hs.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new hZ.CustomEvent(ho.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}j3.getSlotTemplateHTML=function(a){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${j0}</slot>
      <slot name="off">${j1}</slot>
    </slot>
  `},j3.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${hS("Enable captions")}</slot>
    <slot name="tooltip-disable">${hS("Disable captions")}</slot>
  `};let j4=(a,b)=>{let c=a.getAttribute(b);return c?iO(c):[]},j5=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=iR(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};hZ.customElements.get("media-captions-button")||hZ.customElements.define("media-captions-button",j3);let j6=a=>{let b=a.mediaIsCasting?hS("stop casting"):hS("start casting");a.setAttribute("aria-label",b)};class j7 extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_IS_CASTING,hs.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),j6(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_IS_CASTING&&j6(this)}get mediaIsCasting(){return ij(this,hs.MEDIA_IS_CASTING)}set mediaIsCasting(a){ik(this,hs.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return il(this,hs.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){im(this,hs.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?ho.MEDIA_EXIT_CAST_REQUEST:ho.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new hZ.CustomEvent(a,{composed:!0,bubbles:!0}))}}j7.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${hs.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${hs.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${hs.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${hs.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},j7.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${hS("Start casting")}</slot>
    <slot name="tooltip-exit">${hS("Stop casting")}</slot>
  `},hZ.customElements.get("media-cast-button")||hZ.customElements.define("media-cast-button",j7);var j8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},j9=(a,b,c)=>(j8(a,b,"read from private field"),c?c.call(a):b.get(a)),ka=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},kb=(a,b,c,d)=>(j8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),kc=(a,b,c)=>(j8(a,b,"access private method"),c);let kd="open";class ke extends hZ.HTMLElement{constructor(){super(),ka(this,ae),ka(this,ag),ka(this,ai),ka(this,ak),ka(this,am),ka(this,ao),ka(this,ab,!1),ka(this,ac,null),ka(this,ad,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[kd,"anchor"]}get open(){return ij(this,kd)}set open(a){ik(this,kd,a)}handleEvent(a){switch(a.type){case"invoke":kc(this,ak,al).call(this,a);break;case"focusout":kc(this,am,an).call(this,a);break;case"keydown":kc(this,ao,ap).call(this,a)}}connectedCallback(){kc(this,ae,af).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){kc(this,ae,af).call(this),a===kd&&c!==b&&(this.open?kc(this,ag,ah).call(this):kc(this,ai,aj).call(this))}focus(){kb(this,ac,ib());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}ab=new WeakMap,ac=new WeakMap,ad=new WeakMap,ae=new WeakSet,af=function(){if(!j9(this,ab)&&(kb(this,ab,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=ie(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},ag=new WeakSet,ah=function(){var a;null==(a=j9(this,ad))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ai=new WeakSet,aj=function(){var a;null==(a=j9(this,ad))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},ak=new WeakSet,al=function(a){kb(this,ad,a.relatedTarget),h9(this,a.relatedTarget)||(this.open=!this.open)},am=new WeakSet,an=function(a){var b;!h9(this,a.relatedTarget)&&(null==(b=j9(this,ac))||b.focus(),j9(this,ad)&&j9(this,ad)!==a.relatedTarget&&this.open&&(this.open=!1))},ao=new WeakSet,ap=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=j9(this,ac))||f.focus(),this.open=!1))},ke.shadowRootOptions={mode:"open"},ke.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(a)}
  `},ke.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},hZ.customElements.get("media-chrome-dialog")||hZ.customElements.define("media-chrome-dialog",ke);var kf=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},kg=(a,b,c)=>(kf(a,b,"read from private field"),c?c.call(a):b.get(a)),kh=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ki=(a,b,c,d)=>(kf(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),kj=(a,b,c)=>(kf(a,b,"access private method"),c);class kk extends hZ.HTMLElement{constructor(){if(super(),kh(this,az),kh(this,aB),kh(this,aD),kh(this,aF),kh(this,aH),kh(this,aJ),kh(this,aL),kh(this,aN),kh(this,aq,void 0),kh(this,ar,void 0),kh(this,as,void 0),kh(this,at,void 0),kh(this,au,{}),kh(this,av,[]),kh(this,aw,()=>{if(this.range.matches(":focus-visible")){let{style:a}=ie(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),kh(this,ax,()=>{let{style:a}=ie(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),kh(this,ay,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),ki(this,as,this.shadowRoot.querySelector("#startpoint")),ki(this,at,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",hp.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===hp.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=kg(this,aq))?void 0:d.unassociateElement)||e.call(d,this),ki(this,aq,null)),c&&this.isConnected&&(ki(this,aq,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=kg(this,aq))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),kj(this,aB,aC).call(this)):(this.range.setAttribute(a,c),kj(this,aD,aE).call(this)))}connectedCallback(){var a,b,c;let{style:d}=ie(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),kg(this,au).pointer=ie(this.shadowRoot,"#pointer"),kg(this,au).progress=ie(this.shadowRoot,"#progress"),kg(this,au).thumb=ie(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),kg(this,au).activeSegment=ie(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(hp.MEDIA_CONTROLLER);e&&(ki(this,aq,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=kg(this,aq))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",kg(this,aw)),this.shadowRoot.addEventListener("focusout",kg(this,ax)),kj(this,aB,aC).call(this),h2(this.container,kg(this,ay))}disconnectedCallback(){var a,b;kj(this,aD,aE).call(this),null==(b=null==(a=kg(this,aq))?void 0:a.unassociateElement)||b.call(a,this),ki(this,aq,null),this.shadowRoot.removeEventListener("focusin",kg(this,aw)),this.shadowRoot.removeEventListener("focusout",kg(this,ax)),h3(this.container,kg(this,ay))}updatePointerBar(a){var b;null==(b=kg(this,au).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=kg(this,au).progress)||a.style.setProperty("width",`${c}%`),null==(b=kg(this,au).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];ki(this,av,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=h$.createElementNS("http://www.w3.org/2000/svg","rect"),l=ie(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){var b,c,d,e;let f,g,h;return b=a.clientX,c=a.clientY,d=kg(this,as).getBoundingClientRect(),f=(e=kg(this,at).getBoundingClientRect()).x-d.x,0==(h=f*f+(g=e.y-d.y)*g)?0:Math.max(0,Math.min(1,((b-d.x)*f+(c-d.y)*g)/h))}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":kj(this,aN,aO).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":kj(this,aH,aI).call(this,a);break;case"pointerdown":kj(this,aF,aG).call(this,a);break;case"pointerup":kj(this,aJ,aK).call(this);break;case"pointerleave":kj(this,aL,aM).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}aq=new WeakMap,ar=new WeakMap,as=new WeakMap,at=new WeakMap,au=new WeakMap,av=new WeakMap,aw=new WeakMap,ax=new WeakMap,ay=new WeakMap,az=new WeakSet,aA=function(a){let b=kg(this,au).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=kg(this,av).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},aB=new WeakSet,aC=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},aD=new WeakSet,aE=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=hZ.window)||a.removeEventListener("pointerup",this),null==(b=hZ.window)||b.removeEventListener("pointermove",this)},aF=new WeakSet,aG=function(a){var b;ki(this,ar,a.composedPath().includes(this.range)),null==(b=hZ.window)||b.addEventListener("pointerup",this)},aH=new WeakSet,aI=function(a){var b;"mouse"!==a.pointerType&&kj(this,aF,aG).call(this,a),this.addEventListener("pointerleave",this),null==(b=hZ.window)||b.addEventListener("pointermove",this)},aJ=new WeakSet,aK=function(){var a;null==(a=hZ.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},aL=new WeakSet,aM=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=hZ.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=kg(this,au).activeSegment)||b.style.removeProperty("transform")},aN=new WeakSet,aO=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),kj(this,az,aA).call(this,a),this.dragging&&("mouse"!==a.pointerType||!kg(this,ar))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},kk.shadowRootOptions={mode:"open"},kk.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},hZ.customElements.get("media-chrome-range")||hZ.customElements.define("media-chrome-range",kk);var kl=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},km=(a,b,c)=>(kl(a,b,"read from private field"),c?c.call(a):b.get(a)),kn=(a,b,c,d)=>(kl(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ko extends hZ.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aP,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[hp.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===hp.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=km(this,aP))?void 0:d.unassociateElement)||e.call(d,this),kn(this,aP,null)),c&&this.isConnected&&(kn(this,aP,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=km(this,aP))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(hp.MEDIA_CONTROLLER);d&&(kn(this,aP,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=km(this,aP))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=km(this,aP))?void 0:a.unassociateElement)||b.call(a,this),kn(this,aP,null)}}aP=new WeakMap,ko.shadowRootOptions={mode:"open"},ko.getTemplateHTML=function(a){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},hZ.customElements.get("media-control-bar")||hZ.customElements.define("media-control-bar",ko);var kp=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},kq=(a,b,c)=>(kp(a,b,"read from private field"),c?c.call(a):b.get(a)),kr=(a,b,c,d)=>(kp(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ks extends hZ.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aQ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[hp.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===hp.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=kq(this,aQ))?void 0:d.unassociateElement)||e.call(d,this),kr(this,aQ,null)),c&&this.isConnected&&(kr(this,aQ,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=kq(this,aQ))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=ie(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(hp.MEDIA_CONTROLLER);e&&(kr(this,aQ,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=kq(this,aQ))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=kq(this,aQ))?void 0:a.unassociateElement)||b.call(a,this),kr(this,aQ,null)}}aQ=new WeakMap,ks.shadowRootOptions={mode:"open"},ks.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}
  `},ks.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},hZ.customElements.get("media-text-display")||hZ.customElements.define("media-text-display",ks);var kt=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ku=(a,b,c)=>(kt(a,b,"read from private field"),c?c.call(a):b.get(a));class kv extends ks{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aR,void 0),((a,b,c,d)=>(kt(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aR,this.shadowRoot.querySelector("slot")),ku(this,aR).textContent=hN(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===hs.MEDIA_DURATION&&(ku(this,aR).textContent=hN(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return ih(this,hs.MEDIA_DURATION)}set mediaDuration(a){ii(this,hs.MEDIA_DURATION,a)}}aR=new WeakMap,kv.getSlotTemplateHTML=function(a,b){return`
    <slot>${hN(b.mediaDuration)}</slot>
  `},hZ.customElements.get("media-duration-display")||hZ.customElements.define("media-duration-display",kv);let kw={2:hS("Network Error"),3:hS("Decode Error"),4:hS("Source Not Supported"),5:hS("Encryption Error")},kx={2:hS("A network error caused the media download to fail."),3:hS("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:hS("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:hS("The media is encrypted and there are no keys to decrypt it.")},ky=a=>{var b,c;return 1===a.code?null:{title:null!=(b=kw[a.code])?b:`Error ${a.code}`,message:null!=(c=kx[a.code])?c:a.message}};var kz=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function kA(a){var b;let{title:c,message:d}=null!=(b=ky(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let kB=[hs.MEDIA_ERROR_CODE,hs.MEDIA_ERROR_MESSAGE];class kC extends ke{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aS,null)}static get observedAttributes(){return[...super.observedAttributes,...kB]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!kB.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==ky(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return kz(this,a=aS,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;kz(this,b=aS,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return ih(this,"mediaerrorcode")}set mediaErrorCode(a){ii(this,"mediaerrorcode",a)}get mediaErrorMessage(){return il(this,"mediaerrormessage")}set mediaErrorMessage(a){im(this,"mediaerrormessage",a)}}aS=new WeakMap,kC.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${a.mediaerrorcode}" id="content">
      ${kA({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},kC.formatErrorMessage=kA,hZ.customElements.get("media-error-dialog")||hZ.customElements.define("media-error-dialog",kC);let kD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,kE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,kF=a=>{let b=a.mediaIsFullscreen?hS("exit fullscreen mode"):hS("enter fullscreen mode");a.setAttribute("aria-label",b)};class kG extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_IS_FULLSCREEN,hs.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),kF(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_IS_FULLSCREEN&&kF(this)}get mediaFullscreenUnavailable(){return il(this,hs.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){im(this,hs.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return ij(this,hs.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){ik(this,hs.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?ho.MEDIA_EXIT_FULLSCREEN_REQUEST:ho.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new hZ.CustomEvent(a,{composed:!0,bubbles:!0}))}}kG.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${hs.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${hs.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${hs.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${hs.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${kD}</slot>
      <slot name="exit">${kE}</slot>
    </slot>
  `},kG.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${hS("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${hS("Exit fullscreen mode")}</slot>
  `},hZ.customElements.get("media-fullscreen-button")||hZ.customElements.define("media-fullscreen-button",kG);let{MEDIA_TIME_IS_LIVE:kH,MEDIA_PAUSED:kI}=hs,{MEDIA_SEEK_TO_LIVE_REQUEST:kJ,MEDIA_PLAY_REQUEST:kK}=ho,kL=a=>{let b=a.mediaPaused||!a.mediaTimeIsLive,c=b?hS("seek to live"):hS("playing live");a.setAttribute("aria-label",c),b?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class kM extends jY{static get observedAttributes(){return[...super.observedAttributes,kH,kI]}connectedCallback(){super.connectedCallback(),kL(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),kL(this)}get mediaPaused(){return ij(this,hs.MEDIA_PAUSED)}set mediaPaused(a){ik(this,hs.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return ij(this,hs.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){ik(this,hs.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new hZ.CustomEvent(kJ,{composed:!0,bubbles:!0})),this.hasAttribute(kI)&&this.dispatchEvent(new hZ.CustomEvent(kK,{composed:!0,bubbles:!0})))}}kM.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${kH}]:not([${kI}])) slot[name=indicator] > *,
      :host([${kH}]:not([${kI}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${kH}]:not([${kI}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${hS("live")}</slot>
  `},hZ.customElements.get("media-live-button")||hZ.customElements.define("media-live-button",kM);var kN=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},kO=(a,b,c)=>(kN(a,b,"read from private field"),c?c.call(a):b.get(a)),kP=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},kQ=(a,b,c,d)=>(kN(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let kR="loadingdelay",kS="noautohide",kT=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class kU extends hZ.HTMLElement{constructor(){if(super(),kP(this,aT,void 0),kP(this,aU,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[hp.MEDIA_CONTROLLER,hs.MEDIA_PAUSED,hs.MEDIA_LOADING,kR]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===kR&&b!==c?this.loadingDelay=Number(c):a===hp.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=kO(this,aT))?void 0:d.unassociateElement)||e.call(d,this),kQ(this,aT,null)),c&&this.isConnected&&(kQ(this,aT,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=kO(this,aT))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(hp.MEDIA_CONTROLLER);d&&(kQ(this,aT,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=kO(this,aT))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=kO(this,aT))?void 0:a.unassociateElement)||b.call(a,this),kQ(this,aT,null)}get loadingDelay(){return kO(this,aU)}set loadingDelay(a){kQ(this,aU,a);let{style:b}=ie(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return ij(this,hs.MEDIA_PAUSED)}set mediaPaused(a){ik(this,hs.MEDIA_PAUSED,a)}get mediaLoading(){return ij(this,hs.MEDIA_LOADING)}set mediaLoading(a){ik(this,hs.MEDIA_LOADING,a)}get mediaController(){return il(this,hp.MEDIA_CONTROLLER)}set mediaController(a){im(this,hp.MEDIA_CONTROLLER,a)}get noAutohide(){return ij(this,kS)}set noAutohide(a){ik(this,kS,a)}}aT=new WeakMap,aU=new WeakMap,kU.shadowRootOptions={mode:"open"},kU.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${hs.MEDIA_LOADING}]:not([${hs.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${hs.MEDIA_LOADING}]:not([${hs.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${hs.MEDIA_LOADING}]:not([${hs.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${kT}</slot>
    <div id="status" role="status" aria-live="polite">${hS("media loading")}</div>
  `},hZ.customElements.get("media-loading-indicator")||hZ.customElements.define("media-loading-indicator",kU);let kV=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,kW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,kX=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,kY=a=>{let b="off"===a.mediaVolumeLevel?hS("unmute"):hS("mute");a.setAttribute("aria-label",b)};class kZ extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),kY(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_VOLUME_LEVEL&&kY(this)}get mediaVolumeLevel(){return il(this,hs.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){im(this,hs.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?ho.MEDIA_UNMUTE_REQUEST:ho.MEDIA_MUTE_REQUEST;this.dispatchEvent(new hZ.CustomEvent(a,{composed:!0,bubbles:!0}))}}kZ.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${hs.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${hs.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${hs.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${hs.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${hs.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${hs.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${hs.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${kV}</slot>
      <slot name="low">${kW}</slot>
      <slot name="medium">${kW}</slot>
      <slot name="high">${kX}</slot>
    </slot>
  `},kZ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${hS("Mute")}</slot>
    <slot name="tooltip-unmute">${hS("Unmute")}</slot>
  `},hZ.customElements.get("media-mute-button")||hZ.customElements.define("media-mute-button",kZ);let k$=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,k_=a=>{let b=a.mediaIsPip?hS("exit picture in picture mode"):hS("enter picture in picture mode");a.setAttribute("aria-label",b)};class k0 extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_IS_PIP,hs.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),k_(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_IS_PIP&&k_(this)}get mediaPipUnavailable(){return il(this,hs.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){im(this,hs.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return ij(this,hs.MEDIA_IS_PIP)}set mediaIsPip(a){ik(this,hs.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?ho.MEDIA_EXIT_PIP_REQUEST:ho.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new hZ.CustomEvent(a,{composed:!0,bubbles:!0}))}}k0.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${hs.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${hs.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${hs.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${hs.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${k$}</slot>
      <slot name="exit">${k$}</slot>
    </slot>
  `},k0.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${hS("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${hS("Exit picture in picture mode")}</slot>
  `},hZ.customElements.get("media-pip-button")||hZ.customElements.define("media-pip-button",k0);var k1=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let k2="rates",k3=[1,1.2,1.5,1.7,2];class k4 extends jY{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aV,new iM(this,k2,{defaultValue:k3})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PLAYBACK_RATE,k2]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===k2&&(k1(this,aV).value=c),a===hs.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",hS("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return k1(this,aV)}set rates(a){a?Array.isArray(a)?k1(this,aV).value=a.join(" "):"string"==typeof a&&(k1(this,aV).value=a):k1(this,aV).value=""}get mediaPlaybackRate(){return ih(this,hs.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){ii(this,hs.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(k1(this,aV).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new hZ.CustomEvent(ho.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}aV=new WeakMap,k4.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},k4.getTooltipContentHTML=function(){return hS("Playback rate")},hZ.customElements.get("media-playback-rate-button")||hZ.customElements.define("media-playback-rate-button",k4);let k5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,k6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,k7=a=>{let b=a.mediaPaused?hS("play"):hS("pause");a.setAttribute("aria-label",b)};class k8 extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PAUSED,hs.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),k7(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_PAUSED&&k7(this)}get mediaPaused(){return ij(this,hs.MEDIA_PAUSED)}set mediaPaused(a){ik(this,hs.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?ho.MEDIA_PLAY_REQUEST:ho.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new hZ.CustomEvent(a,{composed:!0,bubbles:!0}))}}k8.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${hs.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${hs.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${hs.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${hs.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${k5}</slot>
      <slot name="pause">${k6}</slot>
    </slot>
  `},k8.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${hS("Play")}</slot>
    <slot name="tooltip-pause">${hS("Pause")}</slot>
  `},hZ.customElements.get("media-play-button")||hZ.customElements.define("media-play-button",k8);let k9="placeholdersrc";class la extends hZ.HTMLElement{static get observedAttributes(){return[k9,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if("src"===a&&(null==c?this.image.removeAttribute("src"):this.image.setAttribute("src",c)),a===k9)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return il(this,k9)}set placeholderSrc(a){im(this,"src",a)}get src(){return il(this,"src")}set src(a){im(this,"src",a)}}la.shadowRootOptions={mode:"open"},la.getTemplateHTML=function(a){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},hZ.customElements.get("media-poster-image")||hZ.customElements.define("media-poster-image",la);var lb=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};aW=new WeakMap,hZ.customElements.get("media-preview-chapter-display")||hZ.customElements.define("media-preview-chapter-display",class extends ks{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aW,void 0),((a,b,c,d)=>(lb(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aW,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hs.MEDIA_PREVIEW_CHAPTER&&c!==b&&null!=c){var d;(lb(this,aW,"read from private field"),d?d.call(this):aW.get(this)).textContent=c,""!==c?this.setAttribute("aria-valuetext",`chapter: ${c}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return il(this,hs.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){im(this,hs.MEDIA_PREVIEW_CHAPTER,a)}});var lc=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ld=(a,b,c)=>(lc(a,b,"read from private field"),c?c.call(a):b.get(a)),le=(a,b,c,d)=>(lc(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class lf extends hZ.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aX,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[hp.MEDIA_CONTROLLER,hs.MEDIA_PREVIEW_IMAGE,hs.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(hp.MEDIA_CONTROLLER);d&&(le(this,aX,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=ld(this,aX))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=ld(this,aX))?void 0:a.unassociateElement)||b.call(a,this),le(this,aX,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[hs.MEDIA_PREVIEW_IMAGE,hs.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===hp.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=ld(this,aX))?void 0:d.unassociateElement)||e.call(d,this),le(this,aX,null)),c&&this.isConnected&&(le(this,aX,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=ld(this,aX))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return il(this,hs.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){im(this,hs.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(hs.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){a?this.setAttribute(hs.MEDIA_PREVIEW_COORDS,a.join(" ")):this.removeAttribute(hs.MEDIA_PREVIEW_COORDS)}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=ie(this.shadowRoot,":host"),q=ie(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}aX=new WeakMap,lf.shadowRootOptions={mode:"open"},lf.getTemplateHTML=function(a){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},hZ.customElements.get("media-preview-thumbnail")||hZ.customElements.define("media-preview-thumbnail",lf);var lg=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},lh=(a,b,c)=>(lg(a,b,"read from private field"),c?c.call(a):b.get(a));aY=new WeakMap,hZ.customElements.get("media-preview-time-display")||hZ.customElements.define("media-preview-time-display",class extends ks{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aY,void 0),((a,b,c,d)=>(lg(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aY,this.shadowRoot.querySelector("slot")),lh(this,aY).textContent=hN(0)}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_PREVIEW_TIME&&null!=c&&(lh(this,aY).textContent=hN(parseFloat(c)))}get mediaPreviewTime(){return ih(this,hs.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){ii(this,hs.MEDIA_PREVIEW_TIME,a)}});let li="seekoffset";class lj extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_CURRENT_TIME,li]}connectedCallback(){super.connectedCallback(),this.seekOffset=ih(this,li,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===li&&(this.seekOffset=ih(this,li,30))}get seekOffset(){return ih(this,li,30)}set seekOffset(a){ii(this,li,a),this.setAttribute("aria-label",hS("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),h7(h8(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ih(this,hs.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){ii(this,hs.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new hZ.CustomEvent(ho.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}lj.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},lj.getTooltipContentHTML=function(){return hS("Seek backward")},hZ.customElements.get("media-seek-backward-button")||hZ.customElements.define("media-seek-backward-button",lj);let lk="seekoffset";class ll extends jY{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_CURRENT_TIME,lk]}connectedCallback(){super.connectedCallback(),this.seekOffset=ih(this,lk,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===lk&&(this.seekOffset=ih(this,lk,30))}get seekOffset(){return ih(this,lk,30)}set seekOffset(a){ii(this,lk,a),this.setAttribute("aria-label",hS("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),h7(h8(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ih(this,hs.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){ii(this,hs.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new hZ.CustomEvent(ho.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}ll.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},ll.getTooltipContentHTML=function(){return hS("Seek forward")},hZ.customElements.get("media-seek-forward-button")||hZ.customElements.define("media-seek-forward-button",ll);var lm=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ln=(a,b,c)=>(lm(a,b,"read from private field"),c?c.call(a):b.get(a));let lo={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},lp=[...Object.values(lo),hs.MEDIA_CURRENT_TIME,hs.MEDIA_DURATION,hs.MEDIA_SEEKABLE],lq=["Enter"," "],lr="&nbsp;/&nbsp;",ls=(a,{timesSep:b=lr}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?hN(0-(g-e)):hN(e);return a.showDuration?`${h}${b}${hN(g)}`:h};class lt extends ks{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aZ,void 0),((a,b,c,d)=>(lm(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aZ,this.shadowRoot.querySelector("slot")),ln(this,aZ).innerHTML=`${ls(this)}`}static get observedAttributes(){return[...super.observedAttributes,...lp,"disabled"]}connectedCallback(){let{style:a}=ie(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",hS("playback time"));let b=a=>{let{key:c}=a;lq.includes(c)?this.toggleTimeDisplay():this.removeEventListener("keyup",b)};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;c||d||!lq.includes(e)?this.removeEventListener("keyup",b):this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){lp.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return ij(this,lo.REMAINING)}set remaining(a){ik(this,lo.REMAINING,a)}get showDuration(){return ij(this,lo.SHOW_DURATION)}set showDuration(a){ik(this,lo.SHOW_DURATION,a)}get noToggle(){return ij(this,lo.NO_TOGGLE)}set noToggle(a){ik(this,lo.NO_TOGGLE,a)}get mediaDuration(){return ih(this,hs.MEDIA_DURATION)}set mediaDuration(a){ii(this,hs.MEDIA_DURATION,a)}get mediaCurrentTime(){return ih(this,hs.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){ii(this,hs.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(hs.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){null==a?this.removeAttribute(hs.MEDIA_SEEKABLE):this.setAttribute(hs.MEDIA_SEEKABLE,a.join(":"))}update(){let a=ls(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?hM(0-(e-c)):hM(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=hM(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==ln(this,aZ).innerHTML&&(ln(this,aZ).innerHTML=a)}}aZ=new WeakMap,lt.getSlotTemplateHTML=function(a,b){return`
    <slot>${ls(b)}</slot>
  `},hZ.customElements.get("media-time-display")||hZ.customElements.define("media-time-display",lt);var lu=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},lv=(a,b,c)=>(lu(a,b,"read from private field"),c?c.call(a):b.get(a)),lw=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},lx=(a,b,c,d)=>(lu(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ly{constructor(a,b,c){lw(this,a$,void 0),lw(this,a_,void 0),lw(this,a0,void 0),lw(this,a1,void 0),lw(this,a2,void 0),lw(this,a3,void 0),lw(this,a4,void 0),lw(this,a5,void 0),lw(this,a6,0),lw(this,a7,(a=performance.now())=>{lx(this,a6,requestAnimationFrame(lv(this,a7))),lx(this,a1,performance.now()-lv(this,a0));let b=1e3/this.fps;if(lv(this,a1)>b){let c,d,e,f;lx(this,a0,a-lv(this,a1)%b);let g=1e3/((a-lv(this,a_))/++(c=this,d=a2,{set _(value){lx(c,d,value,e)},get _(){return lv(c,d,f)}})._),h=(a-lv(this,a3))/1e3/this.duration,i=lv(this,a4)+h*this.playbackRate;i-lv(this,a$).valueAsNumber>0?lx(this,a5,this.playbackRate/this.duration/g):(lx(this,a5,.995*lv(this,a5)),i=lv(this,a$).valueAsNumber+lv(this,a5)),this.callback(i)}}),lx(this,a$,a),this.callback=b,this.fps=c}start(){0===lv(this,a6)&&(lx(this,a0,performance.now()),lx(this,a_,lv(this,a0)),lx(this,a2,0),lv(this,a7).call(this))}stop(){0!==lv(this,a6)&&(cancelAnimationFrame(lv(this,a6)),lx(this,a6,0))}update({start:a,duration:b,playbackRate:c}){let d=a-lv(this,a$).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),lx(this,a4,a),lx(this,a3,performance.now()),this.duration=b,this.playbackRate=c}}a$=new WeakMap,a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakMap,a6=new WeakMap,a7=new WeakMap;var lz=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},lA=(a,b,c)=>(lz(a,b,"read from private field"),c?c.call(a):b.get(a)),lB=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},lC=(a,b,c,d)=>(lz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),lD=(a,b,c)=>(lz(a,b,"access private method"),c);let lE=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},lF=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class lG extends kk{constructor(){super(),lB(this,bh),lB(this,bj),lB(this,bm),lB(this,bo),lB(this,bq),lB(this,bs),lB(this,bu),lB(this,bw),lB(this,a8,void 0),lB(this,a9,void 0),lB(this,ba,void 0),lB(this,bb,void 0),lB(this,bc,void 0),lB(this,bd,void 0),lB(this,be,void 0),lB(this,bf,void 0),lB(this,bg,void 0),lB(this,bl,a=>{this.dragging||(hI(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),lC(this,ba,this.shadowRoot.querySelectorAll('[part~="box"]')),lC(this,bc,this.shadowRoot.querySelector('[part~="preview-box"]')),lC(this,bd,this.shadowRoot.querySelector('[part~="current-box"]'));const a=getComputedStyle(this);lC(this,be,parseInt(a.getPropertyValue("--media-box-padding-left"))),lC(this,bf,parseInt(a.getPropertyValue("--media-box-padding-right"))),lC(this,a9,new ly(this.range,lA(this,bl),60))}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PAUSED,hs.MEDIA_DURATION,hs.MEDIA_SEEKABLE,hs.MEDIA_CURRENT_TIME,hs.MEDIA_PREVIEW_IMAGE,hs.MEDIA_PREVIEW_TIME,hs.MEDIA_PREVIEW_CHAPTER,hs.MEDIA_BUFFERED,hs.MEDIA_PLAYBACK_RATE,hs.MEDIA_LOADING,hs.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",hS("seek")),lD(this,bh,bi).call(this),lC(this,a8,this.getRootNode()),null==(a=lA(this,a8))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),lD(this,bh,bi).call(this),null==(a=lA(this,a8))||a.removeEventListener("transitionstart",this),lC(this,a8,null)}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),b!=c){if(a===hs.MEDIA_CURRENT_TIME||a===hs.MEDIA_PAUSED||a===hs.MEDIA_ENDED||a===hs.MEDIA_LOADING||a===hs.MEDIA_DURATION||a===hs.MEDIA_SEEKABLE){let a,b,c,d;lA(this,a9).update({start:lE(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),lD(this,bh,bi).call(this),a=this.range,b=hM(+lF(this)),c=hM(+this.mediaSeekableEnd),d=b&&c?`${b} of ${c}`:"video not loaded, unknown time.",a.setAttribute("aria-valuetext",d)}else a===hs.MEDIA_BUFFERED&&this.updateBufferedBar();(a===hs.MEDIA_DURATION||a===hs.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=lA(this,bg),this.updateBar())}}get mediaChaptersCues(){return lA(this,bg)}set mediaChaptersCues(a){var b;lC(this,bg,a),this.updateSegments(null==(b=lA(this,bg))?void 0:b.map(a=>({start:lE(this,a.startTime),end:lE(this,a.endTime)})))}get mediaPaused(){return ij(this,hs.MEDIA_PAUSED)}set mediaPaused(a){ik(this,hs.MEDIA_PAUSED,a)}get mediaLoading(){return ij(this,hs.MEDIA_LOADING)}set mediaLoading(a){ik(this,hs.MEDIA_LOADING,a)}get mediaDuration(){return ih(this,hs.MEDIA_DURATION)}set mediaDuration(a){ii(this,hs.MEDIA_DURATION,a)}get mediaCurrentTime(){return ih(this,hs.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){ii(this,hs.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return ih(this,hs.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){ii(this,hs.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(hs.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(hs.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(hs.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(hs.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){null==a?this.removeAttribute(hs.MEDIA_SEEKABLE):this.setAttribute(hs.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return il(this,hs.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){im(this,hs.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return ih(this,hs.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){ii(this,hs.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return ij(this,hs.MEDIA_ENDED)}set mediaEnded(a){ik(this,hs.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=lE(this,e)}let{style:d}=ie(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=ie(this.shadowRoot,"#current-rail"),b=ie(this.shadowRoot,'[part~="current-box"]'),c=lD(this,bm,bn).call(this,lA(this,bd)),d=lD(this,bo,bp).call(this,c,this.range.valueAsNumber),e=lD(this,bq,br).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":lD(this,bw,bx).call(this);break;case"pointermove":lD(this,bs,bt).call(this,a);break;case"pointerup":case"pointerleave":lD(this,bu,bv).call(this,null);break;case"transitionstart":h9(a.target,this)&&setTimeout(()=>lD(this,bh,bi).call(this),0)}}}a8=new WeakMap,a9=new WeakMap,ba=new WeakMap,bb=new WeakMap,bc=new WeakMap,bd=new WeakMap,be=new WeakMap,bf=new WeakMap,bg=new WeakMap,bh=new WeakSet,bi=function(){lD(this,bj,bk).call(this)?lA(this,a9).start():lA(this,a9).stop()},bj=new WeakSet,bk=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&id(this)},bl=new WeakMap,bm=new WeakSet,bn=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?ia(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},bo=new WeakSet,bp=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},bq=new WeakSet,br=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+lA(this,be)){let b=a.range.left-a.bounds.left-lA(this,be);return`${f-c/2+b}px`}if(f>e-lA(this,bf)){let b=a.bounds.right-a.range.right-lA(this,bf);return`${f+c/2-b-a.range.width}px`}return 0},bs=new WeakSet,bt=function(a){let b=[...lA(this,ba)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void lD(this,bu,bv).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=ie(this.shadowRoot,"#preview-rail"),e=ie(this.shadowRoot,'[part~="preview-box"]'),f=lD(this,bm,bn).call(this,lA(this,bc)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=lD(this,bo,bp).call(this,f,g),i=lD(this,bq,br).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(lA(this,bb))-Math.round(g*c))&&g>.01&&g<.99||(lC(this,bb,g*c),lD(this,bu,bv).call(this,lA(this,bb)))},bu=new WeakSet,bv=function(a){this.dispatchEvent(new hZ.CustomEvent(ho.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},bw=new WeakSet,bx=function(){lA(this,a9).stop();let a=lF(this);this.dispatchEvent(new hZ.CustomEvent(ho.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},lG.shadowRootOptions={mode:"open"},lG.getTemplateHTML=function(a){return`
    ${kk.getTemplateHTML(a)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${hs.MEDIA_PREVIEW_IMAGE}], [${hs.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${hs.MEDIA_PREVIEW_IMAGE}], [${hs.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${hs.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${hs.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${hs.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${hs.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${hs.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${hs.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${hs.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${hs.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${hs.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${hs.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${hs.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${hs.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${lf.shadowRootOptions.mode}">
            ${lf.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},hZ.customElements.get("media-time-range")||hZ.customElements.define("media-time-range",lG),hZ.customElements.get("media-volume-range")||hZ.customElements.define("media-volume-range",class extends kk{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_VOLUME,hs.MEDIA_MUTED,hs.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new hZ.CustomEvent(ho.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",hS("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hs.MEDIA_VOLUME||a===hs.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return ih(this,hs.MEDIA_VOLUME,1)}set mediaVolume(a){ii(this,hs.MEDIA_VOLUME,a)}get mediaMuted(){return ij(this,hs.MEDIA_MUTED)}set mediaMuted(a){ik(this,hs.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return il(this,hs.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){im(this,hs.MEDIA_VOLUME_UNAVAILABLE,a)}});var lH=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},lI=(a,b,c)=>(lH(a,b,"read from private field"),c?c.call(a):b.get(a)),lJ=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},lK=(a,b,c,d)=>(lH(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let lL={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof lT&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof lT?d.element[d.attributeName]=b:d.value=b}}}};class lM extends hZ.DocumentFragment{constructor(a,b,c=lL){var d;super(),lJ(this,by,void 0),lJ(this,bz,void 0),this.append(a.content.cloneNode(!0)),lK(this,by,lN(this)),lK(this,bz,c),null==(d=c.createCallback)||d.call(c,this,lI(this,by),b),c.processCallback(this,lI(this,by),b)}update(a){lI(this,bz).processCallback(this,lI(this,by),a)}}by=new WeakMap,bz=new WeakMap;let lN=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new lS;for([c,d]of lP(e.value))if(c){let c=new lT(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of lP(f))if(c){let c=new lU(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new lV(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else lN(e,b);return b},lO={},lP=a=>{let b="",c=0,d=lO[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),lO[a]=d};class lQ{get value(){return""}set value(a){}toString(){return this.value}}let lR=new WeakMap;class lS{constructor(){lJ(this,bA,[])}[Symbol.iterator](){return lI(this,bA).values()}get length(){return lI(this,bA).length}item(a){return lI(this,bA)[a]}append(...a){for(let b of a)b instanceof lT&&lR.set(b,this),lI(this,bA).push(b)}toString(){return lI(this,bA).join("")}}bA=new WeakMap;class lT extends lQ{constructor(a,b,c){super(),lJ(this,bF),lJ(this,bB,""),lJ(this,bC,void 0),lJ(this,bD,void 0),lJ(this,bE,void 0),lK(this,bC,a),lK(this,bD,b),lK(this,bE,c)}get attributeName(){return lI(this,bD)}get attributeNamespace(){return lI(this,bE)}get element(){return lI(this,bC)}get value(){return lI(this,bB)}set value(a){lI(this,bB)!==a&&(lK(this,bB,a),lI(this,bF,bG)&&1!==lI(this,bF,bG).length?lI(this,bC).setAttributeNS(lI(this,bE),lI(this,bD),lI(this,bF,bG).toString()):null==a?lI(this,bC).removeAttributeNS(lI(this,bE),lI(this,bD)):lI(this,bC).setAttributeNS(lI(this,bE),lI(this,bD),a))}get booleanValue(){return lI(this,bC).hasAttributeNS(lI(this,bE),lI(this,bD))}set booleanValue(a){if(lI(this,bF,bG)&&1!==lI(this,bF,bG).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}bB=new WeakMap,bC=new WeakMap,bD=new WeakMap,bE=new WeakMap,bF=new WeakSet,bG=function(){return lR.get(this)};class lU extends lQ{constructor(a,b){super(),lJ(this,bH,void 0),lJ(this,bI,void 0),lK(this,bH,a),lK(this,bI,b?[...b]:[new Text])}get replacementNodes(){return lI(this,bI)}get parentNode(){return lI(this,bH)}get nextSibling(){return lI(this,bI)[lI(this,bI).length-1].nextSibling}get previousSibling(){return lI(this,bI)[0].previousSibling}get value(){return lI(this,bI).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),lK(this,bI,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(lI(this,bI)[0].parentNode,lI(this,bI),b,this.nextSibling))}}bH=new WeakMap,bI=new WeakMap;class lV extends lU{constructor(a,b){const c=b.getAttribute("directive")||b.getAttribute("type");let d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let lW={string:a=>String(a)};class lX{constructor(a){this.template=a,this.state=void 0}}let lY=new WeakMap,lZ=new WeakMap,l$={partial:(a,b)=>{b[a.expression]=new lX(a.template)},if:(a,b)=>{var c;if(l2(a.expression,b))if(lY.get(a)!==a.template){lY.set(a,a.template);let c=new lM(a.template,b,l0);a.replace(c),lZ.set(a,c)}else null==(c=lZ.get(a))||c.update(b);else a.replace(""),lY.delete(a),lZ.delete(a)}},l_=Object.keys(l$),l0={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof lV){if(!f.directive){let a=l_.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=l$[f.directive])||d.call(l$,f,c);continue}let b=l2(a,c);if(b instanceof lX){lY.get(f)!==b.template?(lY.set(f,b.template),f.value=b=new lM(b.template,b.state,l0),lZ.set(f,b)):null==(e=lZ.get(f))||e.update(b.state);continue}b?(f instanceof lT&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof lT?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,lY.delete(f),lZ.delete(f))):f instanceof lT?f.value=void 0:(f.value=void 0,lY.delete(f),lZ.delete(f))}}},l1={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=lW[b])?void 0:c.call(lW,a)}};function l2(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return l3(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return l3(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=l5(j,b))}return c}if(1===j.length)return l4(j[0])?l5(j[0].token,b):l3(a);if(2===j.length){let c=l1[null==(h=j[0])?void 0:h.token];return c&&l4(j[1])?c(l5(j[1].token,b)):l3(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=l1[c];if(!d||!l4(j[0])||!l4(j[2]))return l3(a);let e=l5(j[0].token,b);return d(e,"|"===c?j[2].token:l5(j[2].token,b))}}function l3(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function l4({type:a}){return["number","boolean","string","param"].includes(a)}function l5(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):hJ(a)?parseFloat(a):b[a]}var l6=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},l7=(a,b,c)=>(l6(a,b,"read from private field"),c?c.call(a):b.get(a)),l8=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},l9=(a,b,c,d)=>(l6(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),ma=(a,b,c)=>(l6(a,b,"access private method"),c);let mb={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},mc=h$.createElement("template");mc.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class md extends hZ.HTMLElement{constructor(){super(),l8(this,bM),l8(this,bO),l8(this,bJ,void 0),l8(this,bK,void 0),l8(this,bL,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(mb[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ht.BREAKPOINTS_COMPUTED,this.render),ma(this,bM,bN).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=l7(this,bJ))?a:this.constructor.template}set template(a){l9(this,bL,null),l9(this,bJ,a),this.createRenderer()}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>mb[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=mb[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(hJ(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&ma(this,bO,bP).call(this)}connectedCallback(){ma(this,bO,bP).call(this)}createRenderer(){this.template&&this.template!==l7(this,bK)&&(l9(this,bK,this.template),this.renderer=new lM(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(mc.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function me(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function mf(a){return a.split("-")[0]}bJ=new WeakMap,bK=new WeakMap,bL=new WeakMap,bM=new WeakSet,bN=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},bO=new WeakSet,bP=function(){var a;let b=this.getAttribute("template");if(!b||b===l7(this,bL))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){l9(this,bL,b),l9(this,bJ,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(l9(this,bL,b),me(b).then(a=>{let b=h$.createElement("template");b.innerHTML=a,l9(this,bJ,b),this.createRenderer()}).catch(console.error))},md.observedAttributes=["template"],md.processor=l0,hZ.customElements.get("media-theme")||hZ.customElements.define("media-theme",md);class mg extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class mh extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var mi=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},mj=(a,b,c)=>(mi(a,b,"read from private field"),c?c.call(a):b.get(a)),mk=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ml=(a,b,c,d)=>(mi(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),mm=(a,b,c)=>(mi(a,b,"access private method"),c);function mn({type:a,text:b,value:c,checked:d}){let e=h$.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=h$.createElement("span");return f.textContent=b,e.append(f),e}function mo(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let mp="style",mq="hidden",mr="disabled";class ms extends hZ.HTMLElement{constructor(){if(super(),mk(this,bX),mk(this,b$),mk(this,b0),mk(this,b2),mk(this,b4),mk(this,b8),mk(this,ca),mk(this,cc),mk(this,ce),mk(this,cg),mk(this,ci),mk(this,ck),mk(this,cm),mk(this,co),mk(this,cq),mk(this,cs),mk(this,cu),mk(this,bQ,null),mk(this,bR,null),mk(this,bS,null),mk(this,bT,new Set),mk(this,bU,void 0),mk(this,bV,!1),mk(this,bW,null),mk(this,bZ,()=>{let a=mj(this,bT),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));ml(this,bT,b)}),mk(this,b6,()=>{mm(this,b8,b9).call(this),mm(this,ca,cb).call(this,!1)}),mk(this,b7,()=>{mm(this,b8,b9).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),ml(this,bU,new MutationObserver(mj(this,bZ))),mj(this,bU).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[mr,mq,mp,"anchor",hp.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":mm(this,bX,bY).call(this,a);break;case"invoke":mm(this,b0,b1).call(this,a);break;case"click":mm(this,cc,cd).call(this,a);break;case"toggle":mm(this,cg,ch).call(this,a);break;case"focusout":mm(this,ck,cl).call(this,a);break;case"keydown":mm(this,cm,cn).call(this,a)}}connectedCallback(){var a,b;ml(this,bW,ig(this.shadowRoot,":host")),mm(this,b$,b_).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ml(this,bQ,h6(this)),null==(b=null==(a=mj(this,bQ))?void 0:a.associateElement)||b.call(a,this),this.hidden||(h2(mu(this),mj(this,b6)),h2(this,mj(this,b7)))}disconnectedCallback(){var a,b;h3(mu(this),mj(this,b6)),h3(this,mj(this,b7)),this.disable(),null==(b=null==(a=mj(this,bQ))?void 0:a.unassociateElement)||b.call(a,this),ml(this,bQ,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===mq&&c!==b?(mj(this,bV)||ml(this,bV,!0),this.hidden?mm(this,b4,b5).call(this):mm(this,b2,b3).call(this),this.dispatchEvent(new mh({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===hp.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=mj(this,bQ))?void 0:d.unassociateElement)||e.call(d,this),ml(this,bQ,null)),c&&this.isConnected&&(ml(this,bQ,h6(this)),null==(g=null==(f=mj(this,bQ))?void 0:f.associateElement)||g.call(f,this))):a===mr&&c!==b?null==c?this.enable():this.disable():a===mp&&c!==b&&mm(this,b$,b_).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=ic(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(mt)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&mm(this,cu,cv).call(this,b)}focus(){if(ml(this,bR,ib()),this.items.length){mm(this,cs,ct).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=mm(this,co,cp).call(this,a);c&&(mm(this,cu,cv).call(this,c,"checkbox"===c.type),mj(this,bS)&&!this.hidden&&(null==(b=mj(this,bR))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=mm(this,co,cp).call(this,a))?b:mm(this,cq,cr).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),mm(this,cs,ct).call(this,e[g]),e[g].focus()}}function mt(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function mu(a){var b;return null!=(b=a.getAttribute("bounds")?ia(a,`#${a.getAttribute("bounds")}`):h5(a)||a.parentElement)?b:a}bQ=new WeakMap,bR=new WeakMap,bS=new WeakMap,bT=new WeakMap,bU=new WeakMap,bV=new WeakMap,bW=new WeakMap,bX=new WeakSet,bY=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===b.assignedNodes().length),b.name||mj(this,bZ).call(this)},bZ=new WeakMap,b$=new WeakSet,b_=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},b0=new WeakSet,b1=function(a){ml(this,bS,a.relatedTarget),h9(this,a.relatedTarget)||(this.hidden=!this.hidden)},b2=new WeakSet,b3=function(){var a;null==(a=mj(this,bS))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),h2(mu(this),mj(this,b6)),h2(this,mj(this,b7))},b4=new WeakSet,b5=function(){var a;null==(a=mj(this,bS))||a.setAttribute("aria-expanded","false"),h3(mu(this),mj(this,b6)),h3(this,mj(this,b7))},b6=new WeakMap,b7=new WeakMap,b8=new WeakSet,b9=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(mf(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=mf(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){var c,d,e;let f,g;return{anchor:(c=a,d=b.offsetParent,f=c.getBoundingClientRect(),g=null!=(e=null==d?void 0:d.getBoundingClientRect())?e:{x:0,y:0},{x:f.x-g.x,y:f.y-g.y,width:f.width,height:f.height}),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=mu(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=mj(this,bW);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},ca=new WeakSet,cb=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=mj(this,bW);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),mm(this,b8,b9).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),mm(this,b8,b9).call(this);d.removeProperty("--media-menu-transition-in")},cc=new WeakSet,cd=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(mj(this,ce,cf))){null==(b=mj(this,bR))||b.focus(),this.hidden=!0;return}let c=mm(this,co,cp).call(this,a);!c||c.hasAttribute("disabled")||(mm(this,cs,ct).call(this,c),this.handleSelect(a))},ce=new WeakSet,cf=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},cg=new WeakSet,ch=function(a){if(a.target===this)return;mm(this,ci,cj).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new mg({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);mm(this,ca,cb).call(this,!0)},ci=new WeakSet,cj=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},ck=new WeakSet,cl=function(a){var b;h9(this,a.relatedTarget)||(mj(this,bV)&&(null==(b=mj(this,bR))||b.focus()),mj(this,bS)&&mj(this,bS)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},cm=new WeakSet,cn=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(mj(this,bV)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=mj(this,bR))||f.focus(),mj(this,bV)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},co=new WeakSet,cp=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},cq=new WeakSet,cr=function(){return this.items.find(a=>0===a.tabIndex)},cs=new WeakSet,ct=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},cu=new WeakSet,cv=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},ms.shadowRootOptions={mode:"open"},ms.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},hZ.customElements.get("media-chrome-menu")||hZ.customElements.define("media-chrome-menu",ms);var mv=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},mw=(a,b,c)=>(mv(a,b,"read from private field"),c?c.call(a):b.get(a)),mx=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},my=(a,b,c,d)=>(mv(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),mz=(a,b,c)=>(mv(a,b,"access private method"),c);let mA="type",mB="value",mC="checked",mD="disabled";class mE extends hZ.HTMLElement{constructor(){if(super(),mx(this,cy),mx(this,cA),mx(this,cC),mx(this,cF),mx(this,cH),mx(this,cJ),mx(this,cw,!1),mx(this,cx,void 0),mx(this,cE,()=>{var a,b;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=h$.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=h4(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[mA,mD,mC,mB]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),mF(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":mz(this,cy,cz).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":mz(this,cH,cI).call(this,a);break;case"keyup":mz(this,cF,cG).call(this,a)}}attributeChangedCallback(a,b,c){a===mC&&mF(this)&&!mw(this,cw)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===mA&&c!==b?this.role="menuitem"+c:a===mD&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(mD)||this.enable(),this.role="menuitem"+this.type,my(this,cx,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),mz(this,cJ,cK).call(this)}disconnectedCallback(){this.disable(),mz(this,cJ,cK).call(this),my(this,cx,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=ic(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(mA))?a:""}set type(a){this.setAttribute(mA,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(mB))?a:this.text}set value(a){this.setAttribute(mB,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(mF(this))return"true"===this.getAttribute("aria-checked")}set checked(a){mF(this)&&(my(this,cw,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!mF(this)&&this.invokeTargetElement&&h9(this,a.target)&&this.invokeTargetElement.dispatchEvent(new mg({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function mF(a){return"radio"===a.type||"checkbox"===a.type}cw=new WeakMap,cx=new WeakMap,cy=new WeakSet,cz=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?mz(this,cA,cB).call(this):mz(this,cC,cD).call(this))},cA=new WeakSet,cB=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",mw(this,cE)),this.submenuElement.addEventListener("addmenuitem",mw(this,cE)),this.submenuElement.addEventListener("removemenuitem",mw(this,cE)),mw(this,cE).call(this)},cC=new WeakSet,cD=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",mw(this,cE)),this.submenuElement.removeEventListener("addmenuitem",mw(this,cE)),this.submenuElement.removeEventListener("removemenuitem",mw(this,cE)),mw(this,cE).call(this)},cE=new WeakMap,cF=new WeakSet,cG=function(a){let{key:b}=a;this.keysUsed.includes(b)?this.handleClick(a):this.removeEventListener("keyup",mz(this,cF,cG))},cH=new WeakSet,cI=function(a){let{metaKey:b,altKey:c,key:d}=a;b||c||!this.keysUsed.includes(d)?this.removeEventListener("keyup",mz(this,cF,cG)):this.addEventListener("keyup",mz(this,cF,cG),{once:!0})},cJ=new WeakSet,cK=function(){var a;let b=null==(a=mw(this,cx))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},mE.shadowRootOptions={mode:"open"},mE.getTemplateHTML=function(a){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(a)}
    </slot>
    <slot name="submenu"></slot>
  `},mE.getSuffixSlotInnerHTML=function(a){return""},hZ.customElements.get("media-chrome-menu-item")||hZ.customElements.define("media-chrome-menu-item",mE);class mG extends ms{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:h5(this).querySelector("media-settings-menu-button")}}mG.getTemplateHTML=function(a){return`
    ${ms.getTemplateHTML(a)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},hZ.customElements.get("media-settings-menu")||hZ.customElements.define("media-settings-menu",mG);class mH extends mE{}mH.shadowRootOptions={mode:"open"},mH.getTemplateHTML=function(a){return`
    ${mE.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},mH.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},hZ.customElements.get("media-settings-menu-item")||hZ.customElements.define("media-settings-menu-item",mH);class mI extends jY{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=ic(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new mg({relatedTarget:this}))}}hZ.customElements.get("media-chrome-menu-button")||hZ.customElements.define("media-chrome-menu-button",mI);class mJ extends mI{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",hS("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:h5(this).querySelector("media-settings-menu")}}mJ.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},mJ.getTooltipContentHTML=function(){return hS("Settings")},hZ.customElements.get("media-settings-menu-button")||hZ.customElements.define("media-settings-menu-button",mJ);var mK=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},mL=(a,b,c)=>(mK(a,b,"read from private field"),c?c.call(a):b.get(a)),mM=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},mN=(a,b,c,d)=>(mK(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),mO=(a,b,c)=>(mK(a,b,"access private method"),c);cL=new WeakMap,cM=new WeakMap,cN=new WeakSet,cO=function(){if(mL(this,cM)===JSON.stringify(this.mediaAudioTrackList))return;mN(this,cM,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=mn({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(mo(this,"checked-indicator")),this.defaultSlot.append(a)}},cP=new WeakSet,cQ=function(){if(null==this.value)return;let a=new hZ.CustomEvent(ho.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},hZ.customElements.get("media-audio-track-menu")||hZ.customElements.define("media-audio-track-menu",class extends ms{constructor(){super(...arguments),mM(this,cN),mM(this,cP),mM(this,cL,[]),mM(this,cM,void 0)}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_AUDIO_TRACK_LIST,hs.MEDIA_AUDIO_TRACK_ENABLED,hs.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hs.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===hs.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;mN(this,cL,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(hH)),mO(this,cN,cO).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",mO(this,cP,cQ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",mO(this,cP,cQ))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=h5(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return mL(this,cL)}set mediaAudioTrackList(a){mN(this,cL,a),mO(this,cN,cO).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=il(this,hs.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){im(this,hs.MEDIA_AUDIO_TRACK_ENABLED,a)}});let mP=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class mQ extends mI{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_AUDIO_TRACK_ENABLED,hs.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",hS("Audio"))}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=h5(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=il(this,hs.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){im(this,hs.MEDIA_AUDIO_TRACK_ENABLED,a)}}mQ.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${mP}</slot>
  `},mQ.getTooltipContentHTML=function(){return hS("Audio")},hZ.customElements.get("media-audio-track-menu-button")||hZ.customElements.define("media-audio-track-menu-button",mQ);var mR=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},mS=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},mT=(a,b,c)=>(mR(a,b,"access private method"),c);let mU=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class mV extends ms{constructor(){super(...arguments),mS(this,cS),mS(this,cU),mS(this,cR,void 0)}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_SUBTITLES_LIST,hs.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_SUBTITLES_LIST&&b!==c?mT(this,cS,cT).call(this):a===hs.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",mT(this,cU,cV))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",mT(this,cU,cV))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:h5(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return mW(this,hs.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){mX(this,hs.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return mW(this,hs.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){mX(this,hs.MEDIA_SUBTITLES_SHOWING,a)}}cR=new WeakMap,cS=new WeakSet,cT=function(){var a,b,c,d,e,f;if(mR(this,b=cR,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=cR,e=JSON.stringify(this.mediaSubtitlesList),mR(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=mn({type:"radio",text:this.formatMenuItemText(hS("Off")),value:"off",checked:g});for(let b of(h.prepend(mo(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=mn({type:"radio",text:this.formatMenuItemText(b.label,b),value:iQ(b),checked:this.value==iQ(b)});c.prepend(mo(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(mo(this,"captions-indicator")),this.defaultSlot.append(c)}},cU=new WeakSet,cV=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(hs.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new hZ.CustomEvent(ho.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new hZ.CustomEvent(ho.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},mV.getTemplateHTML=function(a){return`
    ${ms.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${mU}</slot>
  `};let mW=(a,b)=>{let c=a.getAttribute(b);return c?iO(c):[]},mX=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=iR(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};hZ.customElements.get("media-captions-menu")||hZ.customElements.define("media-captions-menu",mV);let mY=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,mZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,m$=a=>{a.setAttribute("aria-checked",iV(a).toString())};class m_ extends mI{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_SUBTITLES_LIST,hs.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",hS("closed captions")),m$(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_SUBTITLES_SHOWING&&m$(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=h5(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return m0(this,hs.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){m1(this,hs.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return m0(this,hs.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){m1(this,hs.MEDIA_SUBTITLES_SHOWING,a)}}m_.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${mY}</slot>
      <slot name="off">${mZ}</slot>
    </slot>
  `},m_.getTooltipContentHTML=function(){return hS("Captions")};let m0=(a,b)=>{let c=a.getAttribute(b);return c?iO(c):[]},m1=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=iR(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};hZ.customElements.get("media-captions-menu-button")||hZ.customElements.define("media-captions-menu-button",m_);var m2=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},m3=(a,b,c)=>(m2(a,b,"read from private field"),c?c.call(a):b.get(a)),m4=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},m5=(a,b,c)=>(m2(a,b,"access private method"),c);let m6="rates";cW=new WeakMap,cX=new WeakSet,cY=function(){for(let a of(this.defaultSlot.textContent="",m3(this,cW))){let b=mn({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(mo(this,"checked-indicator")),this.defaultSlot.append(b)}},cZ=new WeakSet,c$=function(){if(!this.value)return;let a=new hZ.CustomEvent(ho.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},hZ.customElements.get("media-playback-rate-menu")||hZ.customElements.define("media-playback-rate-menu",class extends ms{constructor(){super(),m4(this,cX),m4(this,cZ),m4(this,cW,new iM(this,m6,{defaultValue:k3})),m5(this,cX,cY).call(this)}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PLAYBACK_RATE,m6]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hs.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===m6&&b!=c&&(m3(this,cW).value=c,m5(this,cX,cY).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",m5(this,cZ,c$))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",m5(this,cZ,c$))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:h5(this).querySelector("media-playback-rate-menu-button")}get rates(){return m3(this,cW)}set rates(a){a?Array.isArray(a)?m3(this,cW).value=a.join(" "):"string"==typeof a&&(m3(this,cW).value=a):m3(this,cW).value="",m5(this,cX,cY).call(this)}get mediaPlaybackRate(){return ih(this,hs.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){ii(this,hs.MEDIA_PLAYBACK_RATE,a)}});class m7 extends mI{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hs.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",hS("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:h5(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ih(this,hs.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){ii(this,hs.MEDIA_PLAYBACK_RATE,a)}}m7.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},m7.getTooltipContentHTML=function(){return hS("Playback rate")},hZ.customElements.get("media-playback-rate-menu-button")||hZ.customElements.define("media-playback-rate-menu-button",m7);var m8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},m9=(a,b,c)=>(m8(a,b,"read from private field"),c?c.call(a):b.get(a)),na=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},nb=(a,b,c,d)=>(m8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),nc=(a,b,c)=>(m8(a,b,"access private method"),c);c_=new WeakMap,c0=new WeakMap,c1=new WeakSet,c2=function(){if(m9(this,c0).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&m9(this,c0).mediaHeight===this.mediaHeight)return;m9(this,c0).mediaRenditionList=JSON.stringify(this.mediaRenditionList),m9(this,c0).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort((a,b)=>b.height-a.height);for(let b of a)b.selected=b.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let b=!this.mediaRenditionSelected;for(let c of a){let a=mn({type:"radio",text:this.formatMenuItemText(`${Math.min(c.width,c.height)}p`,c),value:`${c.id}`,checked:c.selected&&!b});a.prepend(mo(this,"checked-indicator")),this.defaultSlot.append(a)}let c=mn({type:"radio",text:b?this.formatMenuItemText(`${hS("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(hS("Auto")),value:"auto",checked:b}),d=this.mediaHeight>0?`${hS("Auto")} (${this.mediaHeight}p)`:hS("Auto");c.dataset.description=d,c.prepend(mo(this,"checked-indicator")),this.defaultSlot.append(c)},c3=new WeakSet,c4=function(){if(null==this.value)return;let a=new hZ.CustomEvent(ho.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},hZ.customElements.get("media-rendition-menu")||hZ.customElements.define("media-rendition-menu",class extends ms{constructor(){super(...arguments),na(this,c1),na(this,c3),na(this,c_,[]),na(this,c0,{})}static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_RENDITION_LIST,hs.MEDIA_RENDITION_SELECTED,hs.MEDIA_RENDITION_UNAVAILABLE,hs.MEDIA_HEIGHT]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hs.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",nc(this,c1,c2).call(this);else if(a===hs.MEDIA_RENDITION_LIST&&b!==c)nb(this,c_,null==c?void 0:c.split(/\s+/).map(hF)),nc(this,c1,c2).call(this);else a===hs.MEDIA_HEIGHT&&b!==c&&nc(this,c1,c2).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nc(this,c3,c4))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nc(this,c3,c4))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:h5(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return m9(this,c_)}set mediaRenditionList(a){nb(this,c_,a),nc(this,c1,c2).call(this)}get mediaRenditionSelected(){return il(this,hs.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){im(this,hs.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return ih(this,hs.MEDIA_HEIGHT)}set mediaHeight(a){ii(this,hs.MEDIA_HEIGHT,a)}});let nd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class ne extends mI{static get observedAttributes(){return[...super.observedAttributes,hs.MEDIA_RENDITION_SELECTED,hs.MEDIA_RENDITION_UNAVAILABLE,hs.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",hS("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:h5(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return il(this,hs.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){im(this,hs.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return ih(this,hs.MEDIA_HEIGHT)}set mediaHeight(a){ii(this,hs.MEDIA_HEIGHT,a)}}ne.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${nd}</slot>
  `},ne.getTooltipContentHTML=function(){return hS("Quality")},hZ.customElements.get("media-rendition-menu-button")||hZ.customElements.define("media-rendition-menu-button",ne);let nf=hZ.document?.createElement?.("template");nf&&(nf.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class ng extends md{static template=nf}hZ.customElements&&!hZ.customElements.get("media-theme-sutro")&&hZ.customElements.define("media-theme-sutro",ng);var nh=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),ni={className:"class",htmlFor:"for"},nj=function({react:a,tagName:b,elementClass:c,events:d,displayName:e,toAttributeName:f=function(a){return a.toLowerCase()},toAttributeValue:g=function(a){return"boolean"==typeof a?a?"":void 0:"function"==typeof a?void 0:"object"!=typeof a||null===a?a:void 0}}){let h=Number.parseInt(a.version)>=19,i=a.forwardRef((d,e)=>{let i=a.useRef(null);a.useRef(new Map);let j={},k={},l={},m={};for(let[a,b]of Object.entries(d)){if(nh.has(a)){l[a]=b;continue}let d=f(ni[a]??a);if(a in c.prototype&&!(a in(globalThis.HTMLElement?.prototype??{}))&&!c.observedAttributes?.some(a=>a===d)){m[a]=b;continue}if(a.startsWith("on")){j[a]=b;continue}let e=g(b);d&&null!=e&&(k[d]=String(e),h||(l[d]=e)),d&&h&&(l[d]=b)}if(c?.getTemplateHTML&&c?.shadowRootOptions){let{mode:b,delegatesFocus:d}=c.shadowRootOptions;l.children=[a.createElement("template",{shadowrootmode:b,shadowrootdelegatesfocus:d,dangerouslySetInnerHTML:{__html:c.getTemplateHTML(k)}}),l.children]}return a.createElement(b,{...l,ref:a.useCallback(a=>{i.current=a,"function"==typeof e?e(a):null!==e&&(e.current=a)},[e])})});return i.displayName=e??c.name,i}({react:gO.default,tagName:"media-theme-sutro",elementClass:ng});let nk="mux.com";function nl(a,b){let c=nm(a);if(!c)return a;let d=a.providerMetadata?.mux?.thumbnailTime??b?.thumbnailTime??b?.startTime,e={...a,sources:[{src:`https://stream.${b?.customDomain??nk}/${c}.m3u8`,type:"application/x-mpegURL"}],poster:nn(c,{thumbnailTime:d,customDomain:b?.customDomain,token:b?.tokens?.thumbnail})};return d>=0&&(e.thumbnailTime=d),e}function nm(a){let b=a.providerMetadata?.mux??a.externalIds;return b?.playbackId}let nn=(a,{token:b,thumbnailTime:c,width:d,customDomain:e=nk}={})=>{let f,g=null==b?c:void 0,{aud:h}=(f=(b??"").split(".")[1])?JSON.parse(decodeURIComponent(atob(f.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{};if(!b||"t"===h){let c;return`https://image.${e}/${a}/thumbnail.webp${(c=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})({token:b,time:g,width:d}).toString())?"?"+c:""}`}};a.s(["getPlaybackId",()=>nm,"getPosterURLFromPlaybackId",()=>nn,"transform",()=>nl],40259);let no=JSON.parse(process.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??'{"path":"/api/video","folder":"videos","provider":"mux"}'??"{}"),np=`${no.folder??"videos"}/`;function nq(a){if("string"==typeof a)return a.split(/[#?]/)[0].split(".").pop()?.trim()}let nr=(0,gO.forwardRef)((b,c)=>{if("string"==typeof b.playbackId)return d??(d=(0,gO.lazy)(()=>a.A(23709))),(0,gN.jsx)(d,{ref:c,...b,controls:!1});let g=nq(b.src);return"m3u8"===g?(e??(e=(0,gO.lazy)(()=>a.A(97632))),(0,gN.jsx)(e,{ref:c,...b,controls:!1})):"mpd"===g?(f??(f=(0,gO.lazy)(()=>a.A(98906))),(0,gN.jsx)(f,{ref:c,...b,controls:!1})):(0,gN.jsx)("video",{ref:c,...b,controls:!1})}),ns=(0,gO.forwardRef)((a,b)=>{let c,d,{style:e,children:f,asset:g,controls:h=!0,poster:i,blurDataURL:j,theme:k=nj,...l}=a,m=gO.Children.toArray(f).find(a=>"object"==typeof a&&"type"in a&&"poster"===a.props.slot);(0,gO.isValidElement)(m)&&(i="",j=void 0,c=m,f=gO.Children.toArray(f).filter(a=>a!==m));let n={},o=g?nm(g):void 0,p=!0;if(o&&g?.status==="ready"&&(l.src=void 0,l.playbackId=o,i&&((p=i!==nn(o,l))||(d=`${nn(o,{...l,width:480})} 480w,${nn(o,{...l,width:640})} 640w,${nn(o,{...l,width:960})} 960w,${nn(o,{...l,width:1280})} 1280w,${nn(o,{...l,width:1600})} 1600w,${nn(o,{...l})} 1920w`))),j){let a=!p&&j===g?.blurDataURL,b=p&&j!==g?.blurDataURL;if(a||b){var q;n.gridArea="1/1",n.width="100%",n.height="100%",n.color="transparent",n.backgroundSize="cover",n.backgroundPosition="center",n.backgroundRepeat="no-repeat",n.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${q=j,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${q}"/></g></svg>`.replace(/#/g,"%23")}')`}}if(delete l.thumbnailTime,h&&k){let a=l["data-next-video"];return i&&(c=(0,gN.jsx)("img",{slot:"poster",src:p?i:void 0,srcSet:d,style:n,decoding:"async","aria-hidden":"true"}),i=""),(0,gN.jsxs)(k,{"data-next-video":a,style:{display:"grid",...e},children:[c,(0,gN.jsx)(gO.Suspense,{fallback:null,children:(0,gN.jsxs)(nr,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1"},slot:"media",poster:i,crossOrigin:"",...l,children:[o&&(0,gN.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})]})}return(0,gN.jsx)(gO.Suspense,{fallback:null,children:(0,gN.jsxs)(nr,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1",...e},controls:!1!==h||void 0,poster:i,crossOrigin:"",...l,children:[o&&(0,gN.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})});function nt({status:a,hidden:b}){let c="",d="";switch(a){case"error":c="Error",d="An error occurred while uploading your video. Please check the CLI logs for more info.";break;case"sourced":c="Video is not processing",d="Make sure to run next-video sync. The currently loaded video is the source file.";break;default:c="Upload in progress...",d="Your video file is being uploaded. The currently loaded video is the source file."}return(0,gN.jsxs)(gN.Fragment,{children:[(0,gN.jsx)("style",{children:`
        .next-video-alert {
          position: absolute;
          inset: 1em;
          bottom: auto;
          padding: .75rem 1rem;
          border-radius: 1rem;
          color: hsl(0, 0%, 100%);
          background-color: hsl(240 10% 3.9% / .7);
          border: 1px solid hsl(240 3.7% 15.9%);
          transition: visibility 0s, opacity .25s;
          visibility: visible;
          opacity: 1;
        }

        .next-video-alert[hidden] {
          display: block;
          transition: visibility 1s, opacity 1s;
          visibility: hidden;
          opacity: 0;
        }

        .next-video-alert svg {
          position: absolute;
        }

        .next-video-alert h5 {
          line-height: 1;
          font-weight: 500;
          margin-bottom: 0.25rem;
          padding-left: 1.75rem;
          font-size: inherit;
        }

        .next-video-alert div {
          padding-left: 1.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        `}),(0,gN.jsxs)("div",{role:"alert",className:`next-video-alert next-video-alert-${a}`,hidden:b,children:["error"===a?(0,gN.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,gN.jsx)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}):(0,gN.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,gN.jsx)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,gN.jsx)("h5",{children:c}),(0,gN.jsx)("div",{children:d})]})]})}async function nu({config:a,src:b,width:c,height:d}){let e=`${a.path}?url=${encodeURIComponent(`${b}`)}`;return c&&(e+=`&w=${c}`),d&&(e+=`&h=${d}`),`${e}`}var nv=a.i(40259);function nw(a){let b=a.providerMetadata?.["vercel-blob"]??a.externalIds;if(!b)return a;let c={src:b.url};return b.contentType&&(c.type=b.contentType),{...a,sources:[c]}}a.s(["transform",()=>nw],37771);var nx=a.i(37771);function ny(a){let b=a.providerMetadata?.backblaze;if(!b)return a;let c=new URL(b.endpoint);c.hostname=`${b.bucket}.${c.hostname}`,c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}a.s(["transform",()=>ny],55178);var nz=a.i(55178);function nA(a){let b=a.providerMetadata?.["amazon-s3"];if(!b)return a;let c=new URL(b.endpoint);c.hostname=`${b.bucket}.${c.hostname}`,c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}a.s(["transform",()=>nA],23947);var nB=a.i(23947);function nC(a){let b=a.providerMetadata?.["cloudflare-r2"];if(!b)return a;let c=new URL(b.bucketUrlPublic);c.pathname=b.key;let d={src:`${c}`};return{...a,sources:[d]}}a.s(["transform",()=>nC],13821);var nD=a.i(13821);a.s([],30986),a.i(30986),a.s(["amazonS3",0,nB,"backblaze",0,nz,"cloudflareR2",0,nD,"mux",0,nv,"vercelBlob",0,nx],67440);var nE=a.i(67440);let nF=(0,gO.forwardRef)((a,b)=>{var c,d,e;let f,{as:g=ns,loader:h=nu,transform:i=nG,className:j,style:k,src:l,width:m,height:n}=a,[o,p]=(0,gO.useState)("object"==typeof l?l:void 0),[q,r]=(0,gO.useState)(!1);"object"==typeof l&&(o=l,l=void 0);let s={src:l,width:m,height:n},t=(c=a=>p(a),async a=>{if("string"==typeof s.src)try{let b=await h({...s,config:no}),d=await fetch(b,{signal:a}),e=await d.json();if(d.ok)c(e);else{let a=`[next-video] The request to ${d.url} failed. `;throw a+=`Did you configure the \`${no.path}\` route to handle video API requests?
`,Error(a)}}catch(b){a.aborted||console.error(b)}}),u=o?.status,v=nq(l);!function(a,b=5e3){var c,d;let e,f=(0,gO.useRef)(new AbortController);(0,gO.useEffect)(()=>(f.current=new AbortController,a(f.current.signal),()=>{f.current.abort()}),[]),c=(0,gO.useCallback)(()=>a(f.current.signal),[]),d=b,e=(0,gO.useRef)(null),(0,gO.useEffect)(()=>{e.current=c}),(0,gO.useEffect)(()=>{let a=async()=>{await e.current?.()};if(null!=d){let b=setInterval(a,d);return()=>clearInterval(b)}},[d])}(t,"string"!=typeof l||"ready"==u||["m3u8","mpd"].includes(v??"")?null:1e3);let w=function(a,b){let{asset:c}=b,{controls:d=!0,as:e,className:f,style:g,src:h,poster:i,blurDataURL:j,loader:k,transform:l,...m}=a,n={src:h,poster:i,controls:d,blurDataURL:j,...m};if("object"==typeof i&&(n.poster=i.src,n.blurDataURL??(n.blurDataURL=i.blurDataURL)),c)if("ready"===c.status){n.blurDataURL??(n.blurDataURL=c.blurDataURL);let a=l(c,n);a&&(n.src=a.sources?.[0]?.src,n.poster??(n.poster=a.poster),n.thumbnailTime??(n.thumbnailTime=a.thumbnailTime))}else{var o;o=c.originalFilePath,n.src=o?.startsWith(np)?o?.replace(np,"_next-video/"):o}return n}({...a,transform:i,src:l},{asset:o});return"function"==typeof(d=g)&&(f=Object.getPrototypeOf(d)).prototype&&f.prototype.isReactComponent||"function"==typeof g||"object"==typeof(e=g)&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)||console.warn("The `as` property is not a valid component:",g),(0,gN.jsxs)("div",{className:`${j?`${j} `:""}next-video-container`,style:k,children:[(0,gN.jsx)("style",{children:`
        .next-video-container {
          display: grid;  /* Fixes a Safari aspect-ratio + height bug. */
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        [data-next-video] {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }

        [data-next-video] img {
          object-fit: var(--media-object-fit, contain);
          object-position: var(--media-object-position, center);
          max-width: 100%;
          max-height: 100%;
          min-width: 100%;
          min-height: 100%;
        }
        `}),(0,gN.jsx)(g,{ref:b,"data-next-video":u??"",style:{width:m,height:n},asset:o,onPlaying:()=>r(!0),onPause:()=>r(!1),...w}),(0,gN.jsx)(nt,{hidden:!!(q||!u||"ready"===u),status:u})]})});function nG(a,b){let c=a.provider??no.provider;for(let[d,e]of Object.entries(nE))if(d===c.toLowerCase().replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()))return e.transform(a,b)}let nH=function({videoUrl:a,lessonTitle:b,onStatsUpdate:c}){let d=(0,gO.useRef)(null),[e,f]=(0,gO.useState)({currentTime:0,duration:0,playCount:0,volume:1});(0,gO.useEffect)(()=>{c(e)},[e]);let g=`video_${b}_time`;return(0,gO.useEffect)(()=>{let a=localStorage.getItem(g);if(a&&d.current){let b=parseFloat(a);d.current.onloadedmetadata=()=>{isNaN(b)||(d.current.currentTime=b)}}},[a]),(0,gN.jsx)("div",{className:"w-full max-w-full relative",dir:"ltr",children:(0,gN.jsx)(nF,{ref:d,src:a,height:500,controls:!0,style:{width:"100%",maxWidth:"100%"},onLoadedMetadata:a=>{let b=a.currentTarget.duration;f(a=>({...a,duration:b}))},onVolumeChange:a=>{let b=a.currentTarget.volume;f(a=>({...a,volume:b}))},onPlay:()=>{f(a=>({...a,playCount:a.playCount+1}))},onTimeUpdate:a=>{let b=a.currentTarget.currentTime;f(a=>({...a,currentTime:b})),localStorage.setItem(g,b.toString())},onEnded:()=>{f(a=>({...a,currentTime:0})),localStorage.removeItem(g)}})})},nI={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},nJ={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},nK={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},nL=Object.entries(nK),nM=nL.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),nN=nL.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),nO=Object.entries(nN).reduce((a,[b,c])=>{let d=nM[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"}),nP=Object.entries(nM).reduce((a,[b,c])=>{let d=nN[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),nQ={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},nR={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},nS={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},nT={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},nU={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},nV={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},nW={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},nX={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function nY(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function nZ(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function n$(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function n_(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function n0(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function n1(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}a.s(["AttributeToStateChangeEventMap",()=>nP,"AvailabilityStates",()=>nU,"MediaStateChangeEvents",()=>nN,"MediaStateReceiverAttributes",()=>nJ,"MediaUIAttributes",()=>nM,"MediaUIEvents",()=>nI,"MediaUIProps",()=>nK,"PointerTypes",()=>nT,"ReadyStates",()=>nS,"StateChangeEventToAttributeMap",()=>nO,"StreamTypes",()=>nV,"TextTrackKinds",()=>nQ,"TextTrackModes",()=>nR,"VolumeLevels",()=>nW,"WebkitPresentationModes",()=>nX],89555),a.i(89555);let n2=a=>new Promise(b=>setTimeout(b,a)),n3=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],n4=a=>{if(!n0(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>{let c;return a&&(c=1===a?n3[b].singular:n3[b].plural,`${a} ${c}`)}).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function n5(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}let n6=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function n7(a=n6){return Array.from(a).map((b,c)=>[Number(a.start(c).toFixed(3)),Number(a.end(c).toFixed(3))].join(":")).join(" ")}a.s(["emptyTimeRanges",()=>n6,"formatAsTimePhrase",()=>n4,"formatTime",()=>n5,"serializeTimeRanges",()=>n7],86782),a.i(86782);let n8={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},n9=(null==(c5=globalThis.navigator)?void 0:c5.language)||"en",oa=(a,b={})=>(a=>{var b,c,d;let[e]=n9.split("-");return(null==(b=n8[n9])?void 0:b[a])||(null==(c=n8[e])?void 0:c[a])||(null==(d=n8.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class ob{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class oc extends ob{}class od extends oc{constructor(){super(...arguments),this.role=null}}let oe={createElement:function(){return new of.HTMLElement},createElementNS:function(){return new of.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},of={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:oe,Node:oc,Element:od,HTMLElement:class extends od{constructor(){super(...arguments),this.innerHTML=""}get content(){return new of.DocumentFragment}},DocumentFragment:class extends ob{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},og=Object.keys(of).every(a=>a in globalThis),oh=og?globalThis:of,oi=og?globalThis.document:oe,oj=new WeakMap,ok=a=>{let b=oj.get(a);return b||oj.set(a,b=new Set),b},ol=new oh.ResizeObserver(a=>{for(let b of a)for(let a of ok(b.target))a(b)});function om(a,b){ok(a).add(b),ol.observe(a)}function on(a,b){let c=ok(a);c.delete(b),c.size||ol.unobserve(a)}function oo(a){let b={};for(let c of a)b[c.name]=c.value;return b}function op(a){var b;return null!=(b=oq(a))?b:ou(a,"media-controller")}function oq(a){var b;let{MEDIA_CONTROLLER:c}=nJ,d=a.getAttribute(c);if(d)return null==(b=ow(a))?void 0:b.getElementById(d)}let or=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},os=(a,b)=>{let c,d;return(c=`slot[name="${b}"]`,!(d=a.shadowRoot.querySelector(c))?[]:d.children)[0]},ot=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||ot(a,b.getRootNode().host)),ou=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||ou(a.getRootNode().host,b)};function ov(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=ov(c.shadowRoot))?b:c:null}function ow(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function ox(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function oy(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||oz(a,b)}function oz(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function oA(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function oB(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}oA(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function oC(a,b){return a.hasAttribute(b)}function oD(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}oC(a,b)!=c&&a.toggleAttribute(b,c)}function oE(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function oF(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;oE(a,b,void 0)!==d&&a.setAttribute(b,d)}var oG=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},oH=(a,b,c)=>(oG(a,b,"read from private field"),c?c.call(a):b.get(a)),oI=(a,b,c,d)=>(oG(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class oJ extends oh.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,c6,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[nJ.MEDIA_CONTROLLER,nM.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===nJ.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=oH(this,c6))?void 0:d.unassociateElement)||e.call(d,this),oI(this,c6,null)),c&&this.isConnected&&(oI(this,c6,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=oH(this,c6))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d,e,f;let g;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),oI(this,c6,(e=this,(g=e.getAttribute(nJ.MEDIA_CONTROLLER))?null==(f=e.getRootNode())?void 0:f.getElementById(g):ou(e,"media-controller"))),this.getAttribute(nJ.MEDIA_CONTROLLER)&&(null==(b=null==(a=oH(this,c6))?void 0:a.associateElement)||b.call(a,this)),null==(c=oH(this,c6))||c.addEventListener("pointerdown",this),null==(d=oH(this,c6))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(nJ.MEDIA_CONTROLLER)&&(null==(b=null==(a=oH(this,c6))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=oH(this,c6))||c.removeEventListener("pointerdown",this),null==(d=oH(this,c6))||d.removeEventListener("click",this),oI(this,c6,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let j=this._pointerType||"mouse";if(this._pointerType=void 0,j===nT.TOUCH)return void this.handleTap(a);if(j===nT.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return oC(this,nM.MEDIA_PAUSED)}set mediaPaused(a){oD(this,nM.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?nI.MEDIA_PLAY_REQUEST:nI.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new oh.CustomEvent(b,{composed:!0,bubbles:!0}))}}c6=new WeakMap,oJ.shadowRootOptions={mode:"open"},oJ.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},oh.customElements.get("media-gesture-receiver")||oh.customElements.define("media-gesture-receiver",oJ);var oK=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},oL=(a,b,c)=>(oK(a,b,"read from private field"),c?c.call(a):b.get(a)),oM=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},oN=(a,b,c,d)=>(oK(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),oO=(a,b,c)=>(oK(a,b,"access private method"),c);let oP="audio",oQ="autohide",oR="breakpoints",oS="gesturesdisabled",oT="keyboardcontrol",oU="noautohide",oV="userinactive",oW="autohideovercontrols",oX=Object.values(nM);function oY(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(oR))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(nN.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(nN.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class oZ extends oh.HTMLElement{constructor(){if(super(),oM(this,dc),oM(this,dg),oM(this,di),oM(this,dk),oM(this,dm),oM(this,dp),oM(this,c7,0),oM(this,c8,null),oM(this,c9,null),oM(this,da,void 0),this.breakpointsComputed=!1,oM(this,db,new MutationObserver(oO(this,dc,dd).bind(this))),oM(this,de,!1),oM(this,df,a=>{oL(this,de)||(setTimeout(()=>{oY(a.target,a.contentRect.width),oN(this,de,!1)},0),oN(this,de,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}const a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){oL(this,c8)&&this.mediaUnsetCallback(oL(this,c8));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[oQ,oS].concat(oX).filter(a=>![nM.MEDIA_RENDITION_LIST,nM.MEDIA_AUDIO_TRACK_LIST,nM.MEDIA_CHAPTERS_CUES,nM.MEDIA_WIDTH,nM.MEDIA_HEIGHT,nM.MEDIA_ERROR,nM.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==oQ&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(oN(this,c8,a),a.localName.includes("-")&&await oh.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;oL(this,db).observe(this,{childList:!0,subtree:!0}),om(this,oL(this,df));let b=null!=this.getAttribute(oP)?oa("audio player"):oa("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(oV,""),oY(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=oh.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;oL(this,db).disconnect(),on(this,oL(this,df)),this.media&&this.mediaUnsetCallback(this.media),null==(a=oh.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){oN(this,c8,null)}handleEvent(a){switch(a.type){case"pointerdown":oN(this,c7,a.timeStamp);break;case"pointermove":oO(this,dg,dh).call(this,a);break;case"pointerup":oO(this,di,dj).call(this,a);break;case"mouseleave":oO(this,dk,dl).call(this);break;case"mouseup":this.removeAttribute(oT);break;case"keyup":oO(this,dp,dq).call(this),this.setAttribute(oT,"")}}set autohide(a){let b=Number(a);oN(this,da,isNaN(b)?0:b)}get autohide(){return(void 0===oL(this,da)?2:oL(this,da)).toString()}get breakpoints(){return oE(this,oR)}set breakpoints(a){oF(this,oR,a)}get audio(){return oC(this,oP)}set audio(a){oD(this,oP,a)}get gesturesDisabled(){return oC(this,oS)}set gesturesDisabled(a){oD(this,oS,a)}get keyboardControl(){return oC(this,oT)}set keyboardControl(a){oD(this,oT,a)}get noAutohide(){return oC(this,oU)}set noAutohide(a){oD(this,oU,a)}get autohideOverControls(){return oC(this,oW)}set autohideOverControls(a){oD(this,oW,a)}get userInteractive(){return oC(this,oV)}set userInteractive(a){oD(this,oV,a)}}c7=new WeakMap,c8=new WeakMap,c9=new WeakMap,da=new WeakMap,db=new WeakMap,dc=new WeakSet,dd=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},de=new WeakMap,df=new WeakMap,dg=new WeakSet,dh=function(a){if("mouse"!==a.pointerType&&a.timeStamp-oL(this,c7)<250)return;oO(this,dm,dn).call(this),clearTimeout(oL(this,c9));let b=this.hasAttribute(oW);([this,this.media].includes(a.target)||b)&&oO(this,dp,dq).call(this)},di=new WeakSet,dj=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(oV);[this,this.media].includes(a.target)&&b?oO(this,dk,dl).call(this):oO(this,dp,dq).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&oO(this,dp,dq).call(this)},dk=new WeakSet,dl=function(){if(0>oL(this,da)||this.hasAttribute(oV))return;this.setAttribute(oV,"");let a=new oh.CustomEvent(nN.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},dm=new WeakSet,dn=function(){if(!this.hasAttribute(oV))return;this.removeAttribute(oV);let a=new oh.CustomEvent(nN.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},dp=new WeakSet,dq=function(){oO(this,dm,dn).call(this),clearTimeout(oL(this,c9));let a=parseInt(this.autohide);a<0||oN(this,c9,setTimeout(()=>{oO(this,dk,dl).call(this)},1e3*a))},oZ.shadowRootOptions={mode:"open"},oZ.getTemplateHTML=function(a){return`
    <style>
      
      :host([${nM.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${oP}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${oP}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${oP}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${oP}])[${oS}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${oP}])[${oS}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${oP}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${oP}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${oP}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${oP}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${oU}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${oV}]:not([${nM.MEDIA_PAUSED}]):not([${nM.MEDIA_IS_AIRPLAYING}]):not([${nM.MEDIA_IS_CASTING}]):not([${oP}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${oU}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${oV}]:not([${oU}]):not([${nM.MEDIA_PAUSED}]):not([${nM.MEDIA_IS_CASTING}]):not([${oP}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${oV}][${oW}]:not([${oU}]):not([${nM.MEDIA_PAUSED}]):not([${nM.MEDIA_IS_CASTING}]):not([${oP}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${oP}])[${nM.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${oJ.shadowRootOptions.mode}">
          ${oJ.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},oh.customElements.get("media-container")||oh.customElements.define("media-container",oZ);var o$=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},o_=(a,b,c)=>(o$(a,b,"read from private field"),c?c.call(a):b.get(a)),o0=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},o1=(a,b,c,d)=>(o$(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class o2{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){o0(this,dv),o0(this,dr,void 0),o0(this,ds,void 0),o0(this,dt,void 0),o0(this,du,new Set),o1(this,dr,a),o1(this,ds,b),o1(this,dt,new Set(c))}[Symbol.iterator](){return o_(this,dv,dw).values()}get length(){return o_(this,dv,dw).size}get value(){var a;return null!=(a=[...o_(this,dv,dw)].join(" "))?a:""}set value(a){var b;a!==this.value&&(o1(this,du,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...o_(this,dv,dw)][a]}values(){return o_(this,dv,dw).values()}forEach(a,b){o_(this,dv,dw).forEach(a,b)}add(...a){var b,c;a.forEach(a=>o_(this,du).add(a)),(""!==this.value||(null==(b=o_(this,dr))?void 0:b.hasAttribute(`${o_(this,ds)}`)))&&(null==(c=o_(this,dr))||c.setAttribute(`${o_(this,ds)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>o_(this,du).delete(a)),null==(b=o_(this,dr))||b.setAttribute(`${o_(this,ds)}`,`${this.value}`)}contains(a){return o_(this,dv,dw).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}dr=new WeakMap,ds=new WeakMap,dt=new WeakMap,du=new WeakMap,dv=new WeakSet,dw=function(){return o_(this,du).size?o_(this,du):o_(this,dt)};let o3=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?nQ.CAPTIONS:nQ.SUBTITLES,language:c,label:e}},o4=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=o3(a);return{...b,...c}}),o5=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?o3(a):a):"string"==typeof a?o4(a):[a]:[],o6=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,o7=(a=[])=>Array.prototype.map.call(a,o6).join(" "),o8=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},o9=(a,b=[],c=[])=>{let d=o5(c).map(o8);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},pa=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:o8(b);return Array.from(a.textTracks).filter(c)},pb=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(nM.MEDIA_SUBTITLES_SHOWING)},pc="exitFullscreen"in oi?"exitFullscreen":"webkitExitFullscreen"in oi?"webkitExitFullscreen":"webkitCancelFullScreen"in oi?"webkitCancelFullScreen":void 0,pd="fullscreenElement"in oi?"fullscreenElement":"webkitFullscreenElement"in oi?"webkitFullscreenElement":void 0,pe="fullscreenEnabled"in oi?"fullscreenEnabled":"webkitFullscreenEnabled"in oi?"webkitFullscreenEnabled":void 0,pf=()=>{var a;return g||(g=null==(a=null==oi?void 0:oi.createElement)?void 0:a.call(oi,"video"))},pg=async(a=pf())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([ph(a,c.signal),pi(a,b)]);return c.abort(),d},ph=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),pi=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await n2(10)}return a.volume!==b},pj=/.*Version\/.*Safari\/.*/.test(oh.navigator.userAgent),pk=(a=pf())=>(!oh.matchMedia("(display-mode: standalone)").matches||!pj)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),pl=(a=pf())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[pe])||c&&"webkitSupportsFullscreen"in c})({documentElement:oi,media:a}),pm=pl(),pn=pk(),po=!!oh.WebKitPlaybackTargetAvailabilityEvent,pp=!!oh.chrome,pq=a=>pa(a.media,a=>[nQ.SUBTITLES,nQ.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),pr=a=>pa(a.media,a=>a.mode===nR.SHOWING&&[nQ.SUBTITLES,nQ.CAPTIONS].includes(a.kind)),ps=(a,b)=>{let c=pq(a),d=pr(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)o9(nR.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;o9(nR.DISABLED,c,d),o9(nR.SHOWING,c,[{language:f,label:g,kind:h}])}}},pt=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?pu(a,b):Object.entries(a).every(([a,c])=>a in b&&pt(c,b[a])))),pu=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>pt(a,b[c])))},pv=Object.values(nV),pw=pg().then(a=>h=a),px=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof oh.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=oh.customElements.get(b);c&&a instanceof c||(await oh.customElements.whenDefined(b),oh.customElements.upgrade(a))}))},py=new oh.DOMParser,pz={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;!c||Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c,options:{noMutedPref:d}={}}=b;if(c){if(!c.hasAttribute("muted")&&!d)try{oh.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===oh.localStorage.getItem("media-chrome-pref-muted");pz.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c,options:{noVolumePref:d}={}}=b;if(c){try{null==a?oh.localStorage.removeItem("media-chrome-pref-volume"):c.hasAttribute("muted")||d||oh.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=oh.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;pz.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&n0(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[nV.LIVE,nV.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(pv.includes(e))return e===nV.UNKNOWN?d:e;let f=b.duration;return f===1/0?nV.LIVE:Number.isFinite(f)?nV.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=pz.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===nV.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(pz.mediaStreamType.get(a)!==nV.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>pq(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>pr(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![nQ.CAPTIONS,nQ.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||ps(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=pa(c,{kind:nQ.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&py.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&ot(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!oi.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else oi.pictureInPictureElement&&oi.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[pd];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===nX.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(pd in a))return ot(f,e);for(;null==a?void 0:a[pd];){if(a[pd]===e)return!0;a=null==(b=a[pd])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(pc){let a=null==(b=null==c?void 0:c[pc])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&oh.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!pm||!pl(b))return nU.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;return pn&&pk(b)?(null==b?void 0:b.disablePictureInPicture)?nU.UNAVAILABLE:void 0:nU.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===h||(null==b?void 0:b.volume)==void 0)return nU.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==h&&pw.then(b=>a(b?void 0:nU.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return pp&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?nU.UNAVAILABLE:void 0:nU.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>po?(null==b?void 0:b.availability)==="not-available"?nU.UNAVAILABLE:void 0:nU.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:nU.UNAVAILABLE:nU.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?nU.UNAVAILABLE:void 0:nU.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(a){let{options:{mediaLang:b}={}}=a;return null!=b?b:"en"}}},pA={[nI.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=pa(i,{kind:nQ.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[nI.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[nI.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===nV.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[nI.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[nI.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[nI.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[nI.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[nI.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[nI.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[nI.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=pq(b),g=o5(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&oh.localStorage.setItem("media-chrome-pref-subtitles-lang",h),o9(nR.SHOWING,f,g)},[nI.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=pq(b);o9(nR.DISABLED,d,null!=c?c:[])},[nI.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){ps(b,c)},[nI.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[nI.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[nI.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[nI.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[nI.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[nI.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[nI.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[nI.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[nI.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var pB=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},pC=(a,b,c)=>(pB(a,b,"read from private field"),c?c.call(a):b.get(a)),pD=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},pE=(a,b,c,d)=>(pB(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),pF=(a,b,c)=>(pB(a,b,"access private method"),c);let pG=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],pH="defaultsubtitles",pI="defaultstreamtype",pJ="defaultduration",pK="fullscreenelement",pL="hotkeys",pM="keysused",pN="liveedgeoffset",pO="seektoliveoffset",pP="noautoseektolive",pQ="nohotkeys",pR="novolumepref",pS="nomutedpref",pT="nosubtitleslangpref",pU="nodefaultstore",pV="keyboardforwardseekoffset",pW="keyboardbackwardseekoffset",pX="lang";dx=new WeakMap,dy=new WeakMap,dz=new WeakMap,dA=new WeakMap,dB=new WeakMap,dC=new WeakMap,dD=new WeakSet,dE=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=pz,requestMap:e=pA,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0==a||pt(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k)))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await px(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&O&&p(),W&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;e[b]&&null==k.mediaErrorCode?l(e[b](d,j,a)):"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&(Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b}),m())},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(pH),defaultDuration:this.hasAttribute(pJ)?+this.getAttribute(pJ):void 0,defaultStreamType:null!=(a=this.getAttribute(pI))?a:void 0,liveEdgeOffset:this.hasAttribute(pN)?+this.getAttribute(pN):void 0,seekToLiveOffset:this.hasAttribute(pO)?+this.getAttribute(pO):this.hasAttribute(pN)?+this.getAttribute(pN):void 0,noAutoSeekToLive:this.hasAttribute(pP),noVolumePref:this.hasAttribute(pR),noMutedPref:this.hasAttribute(pS),noSubtitlesLangPref:this.hasAttribute(pT)}})},dF=new WeakSet,dG=function(a){let{key:b}=a;pG.includes(b)?this.keyboardShortcutHandler(a):this.removeEventListener("keyup",pF(this,dF,dG))},dH=new WeakSet,dI=function(a){let{metaKey:b,altKey:c,key:d}=a;b||c||!pG.includes(d)?this.removeEventListener("keyup",pF(this,dF,dG)):([" ","ArrowLeft","ArrowRight"].includes(d)&&!(pC(this,dx).contains(`no${d.toLowerCase()}`)||" "===d&&pC(this,dx).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",pF(this,dF,dG),{once:!0}))};let pY=Object.values(nM),pZ=Object.values(nK),p$=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(oh.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,nJ.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>pY.includes(a)):[]},p_=a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&oh.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof oh.customElements.get(a.nodeName.toLowerCase()))&&oh.customElements.upgrade(a),pZ.some(b=>b in a)||!!p$(a).length},p0=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},p1={[nM.MEDIA_SUBTITLES_LIST]:o7,[nM.MEDIA_SUBTITLES_SHOWING]:o7,[nM.MEDIA_SEEKABLE]:p0,[nM.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(p0).join(" "),[nM.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[nM.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(nY).join(" ")},[nM.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(n$).join(" ")}},p2=async(a,b,c)=>{var d,e;if(a.isConnected||await n2(0),"boolean"==typeof c||null==c)return oD(a,b,c);if("number"==typeof c)return oB(a,b,c);if("string"==typeof c)return oF(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=p1[b])?void 0:d.call(p1,c))?e:c;return a.setAttribute(b,f)},p3=(a,b)=>{var c;if(null==(c=a.closest)?void 0:c.call(a,'*[slot="media"]'))return;let d=(a,b)=>{var c,d;p_(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>p3(a,b))},e=null==a?void 0:a.nodeName.toLowerCase();e.includes("-")&&!p_(a)?oh.customElements.whenDefined(e).then(()=>{d(a,b)}):d(a,b)},p4=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=p$(a),e=b.toLowerCase();d.includes(e)&&p2(a,e,c)})};oh.customElements.get("media-controller")||oh.customElements.define("media-controller",class extends oZ{constructor(){super(),pD(this,dD),pD(this,dF),pD(this,dH),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,pD(this,dx,new o2(this,pL)),pD(this,dy,void 0),pD(this,dz,void 0),pD(this,dA,void 0),pD(this,dB,void 0),pD(this,dC,a=>{var b;null==(b=pC(this,dz))||b.dispatch(a)}),this.associateElement(this);let a={};pE(this,dA,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new oh.CustomEvent(nP[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.hasAttribute(pQ)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(pQ,pL,pI,pH,pJ,pX)}get mediaStore(){return pC(this,dz)}set mediaStore(a){var b,c;(pC(this,dz)&&(null==(b=pC(this,dB))||b.call(this),pE(this,dB,void 0)),pE(this,dz,a),pC(this,dz)||this.hasAttribute(pU))?pE(this,dB,null==(c=pC(this,dz))?void 0:c.subscribe(pC(this,dA))):pF(this,dD,dE).call(this)}get fullscreenElement(){var a;return null!=(a=pC(this,dy))?a:this}set fullscreenElement(a){var b;this.hasAttribute(pK)&&this.removeAttribute(pK),pE(this,dy,a),null==(b=pC(this,dz))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return oC(this,pH)}set defaultSubtitles(a){oD(this,pH,a)}get defaultStreamType(){return oE(this,pI)}set defaultStreamType(a){oF(this,pI,a)}get defaultDuration(){return oA(this,pJ)}set defaultDuration(a){oB(this,pJ,a)}get noHotkeys(){return oC(this,pQ)}set noHotkeys(a){oD(this,pQ,a)}get keysUsed(){return oE(this,pM)}set keysUsed(a){oF(this,pM,a)}get liveEdgeOffset(){return oA(this,pN)}set liveEdgeOffset(a){oB(this,pN,a)}get noAutoSeekToLive(){return oC(this,pP)}set noAutoSeekToLive(a){oD(this,pP,a)}get noVolumePref(){return oC(this,pR)}set noVolumePref(a){oD(this,pR,a)}get noMutedPref(){return oC(this,pS)}set noMutedPref(a){oD(this,pS,a)}get noSubtitlesLangPref(){return oC(this,pT)}set noSubtitlesLangPref(a){oD(this,pT,a)}get noDefaultStore(){return oC(this,pU)}set noDefaultStore(a){oD(this,pU,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k,l;(super.attributeChangedCallback(a,b,c),a===pQ)?c!==b&&""===c?(this.hasAttribute(pL)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys():a===pL?pC(this,dx).value=c:a===pH&&c!==b?null==(d=pC(this,dz))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(pH)}}):a===pI?null==(f=pC(this,dz))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(pI))?e:void 0}}):a===pN?null==(g=pC(this,dz))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(pN)?+this.getAttribute(pN):void 0,seekToLiveOffset:this.hasAttribute(pO)?void 0:+this.getAttribute(pN)}}):a===pO?null==(h=pC(this,dz))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(pO)?+this.getAttribute(pO):void 0}}):a===pP?null==(i=pC(this,dz))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(pP)}}):a===pK?(pE(this,dy,c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0),null==(k=pC(this,dz))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):a===pX&&c!==b&&(n9=c,null==(l=pC(this,dz))||l.dispatch({type:"optionschangerequest",detail:{mediaLang:c}}))}connectedCallback(){var a,b;pC(this,dz)||this.hasAttribute(pU)||pF(this,dD,dE).call(this),null==(a=pC(this,dz))||a.dispatch({type:"documentelementchangerequest",detail:oi}),super.connectedCallback(),pC(this,dz)&&!pC(this,dB)&&pE(this,dB,null==(b=pC(this,dz))?void 0:b.subscribe(pC(this,dA))),this.hasAttribute(pQ)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),pC(this,dz)&&(null==(b=pC(this,dz))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=pC(this,dz))||c.dispatch({type:nI.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),pC(this,dB)&&(null==(d=pC(this,dB))||d.call(this),pE(this,dB,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=pC(this,dz))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=pC(this,dz))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){p4(this.mediaStateReceivers,a,b)}associateElement(a){var b,c,d;let e,f,g,h,i;if(!a)return;let{associatedElementSubscriptions:j}=this;if(j.has(a))return;let k=this.registerMediaStateReceiver.bind(this),l=(b=a,c=k,d=this.unregisterMediaStateReceiver.bind(this),p3(b,c),e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)},f=a=>{var b;d(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)},b.addEventListener(nI.REGISTER_MEDIA_STATE_RECEIVER,e),b.addEventListener(nI.UNREGISTER_MEDIA_STATE_RECEIVER,f),g=[],h=a=>{let b=a.target;"media"!==b.name&&(g.forEach(a=>p3(a,d)),(g=[...b.assignedElements({flatten:!0})]).forEach(a=>p3(a,c)))},b.addEventListener("slotchange",h),(i=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:b=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(b,a=>p3(a,c)),Array.prototype.forEach.call(e,a=>p3(a,d))):"attributes"===f&&h===nJ.MEDIA_CHROME_ATTRIBUTES&&(p_(g)?c(g):d(g))})})).observe(b,{childList:!0,attributes:!0,subtree:!0}),()=>{p3(b,d),b.removeEventListener("slotchange",h),i.disconnect(),b.removeEventListener(nI.REGISTER_MEDIA_STATE_RECEIVER,e),b.removeEventListener(nI.UNREGISTER_MEDIA_STATE_RECEIVER,f)});Object.values(nI).forEach(b=>{a.addEventListener(b,pC(this,dC))}),j.set(a,l)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(nI).forEach(b=>{a.removeEventListener(b,pC(this,dC))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),pC(this,dz)&&Object.entries(pC(this,dz).getState()).forEach(([b,c])=>{p4([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",pF(this,dH,dI))}disableHotkeys(){this.removeEventListener("keydown",pF(this,dH,dI)),this.removeEventListener("keyup",pF(this,dF,dG))}get hotkeys(){return oE(this,pL)}set hotkeys(a){oF(this,pL,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(pM))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||pC(this,dx).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&pC(this,dx).contains("nospace")))switch(a.key){case" ":case"k":g=pC(this,dz).getState().mediaPaused?nI.MEDIA_PLAY_REQUEST:nI.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new oh.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?nI.MEDIA_UNMUTE_REQUEST:nI.MEDIA_MUTE_REQUEST,this.dispatchEvent(new oh.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?nI.MEDIA_EXIT_FULLSCREEN_REQUEST:nI.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new oh.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new oh.CustomEvent(nI.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(pW)?+this.getAttribute(pW):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new oh.CustomEvent(nI.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(pV)?+this.getAttribute(pV):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new oh.CustomEvent(nI.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}});let p5="placement",p6="bounds";class p7 extends oh.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!ox(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=ou(this,"#"+this.bounds))?a:op(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;m<0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?this.style.setProperty("--media-tooltip-offset-x",`${n}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[p5,p6]}get placement(){return oE(this,p5)}set placement(a){oF(this,p5,a)}get bounds(){return oE(this,p6)}set bounds(a){oF(this,p6,a)}}p7.shadowRootOptions={mode:"open"},p7.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},oh.customElements.get("media-tooltip")||oh.customElements.define("media-tooltip",p7);var p8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},p9=(a,b,c)=>(p8(a,b,"read from private field"),c?c.call(a):b.get(a)),qa=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},qb=(a,b,c,d)=>(p8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let qc="tooltipplacement",qd="disabled",qe="notooltip";class qf extends oh.HTMLElement{constructor(){if(super(),qa(this,dO),qa(this,dJ,void 0),this.preventClick=!1,this.tooltipEl=null,qa(this,dK,a=>{this.preventClick||this.handleClick(a),setTimeout(p9(this,dL),0)}),qa(this,dL,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),qa(this,dM,a=>{let{key:b}=a;this.keysUsed.includes(b)?this.preventClick||this.handleClick(a):this.removeEventListener("keyup",p9(this,dM))}),qa(this,dN,a=>{let{metaKey:b,altKey:c,key:d}=a;b||c||!this.keysUsed.includes(d)?this.removeEventListener("keyup",p9(this,dM)):this.addEventListener("keyup",p9(this,dM),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",qc,nJ.MEDIA_CONTROLLER,nM.MEDIA_LANG]}enable(){this.addEventListener("click",p9(this,dK)),this.addEventListener("keydown",p9(this,dN)),this.tabIndex=0}disable(){this.removeEventListener("click",p9(this,dK)),this.removeEventListener("keydown",p9(this,dN)),this.removeEventListener("keyup",p9(this,dM)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===nJ.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=p9(this,dJ))?void 0:d.unassociateElement)||e.call(d,this),qb(this,dJ,null)),c&&this.isConnected&&(qb(this,dJ,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=p9(this,dJ))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===qc&&this.tooltipEl&&c!==b?this.tooltipEl.placement=c:a===nM.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),p9(this,dL).call(this)}connectedCallback(){var a,b,c;let{style:d}=oy(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(nJ.MEDIA_CONTROLLER);e&&(qb(this,dJ,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=p9(this,dJ))?void 0:b.associateElement)||c.call(b,this)),oh.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=dO,b=dP,p8(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=p9(this,dJ))?void 0:a.unassociateElement)||b.call(a,this),qb(this,dJ,null),this.removeEventListener("mouseenter",p9(this,dL)),this.removeEventListener("focus",p9(this,dL)),this.removeEventListener("click",p9(this,dK))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return oE(this,qc)}set tooltipPlacement(a){oF(this,qc,a)}get mediaController(){return oE(this,nJ.MEDIA_CONTROLLER)}set mediaController(a){oF(this,nJ.MEDIA_CONTROLLER,a)}get disabled(){return oC(this,qd)}set disabled(a){oD(this,qd,a)}get noTooltip(){return oC(this,qe)}set noTooltip(a){oD(this,qe,a)}handleClick(a){}}dJ=new WeakMap,dK=new WeakMap,dL=new WeakMap,dM=new WeakMap,dN=new WeakMap,dO=new WeakSet,dP=function(){this.addEventListener("mouseenter",p9(this,dL)),this.addEventListener("focus",p9(this,dL)),this.addEventListener("click",p9(this,dK));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},qf.shadowRootOptions={mode:"open"},qf.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${p7.shadowRootOptions.mode}">
          ${p7.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},qf.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},qf.getTooltipContentHTML=function(){return""},oh.customElements.get("media-chrome-button")||oh.customElements.define("media-chrome-button",qf);let qg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,qh=a=>{let b=a.mediaIsAirplaying?oa("stop airplay"):oa("start airplay");a.setAttribute("aria-label",b)};class qi extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_IS_AIRPLAYING,nM.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qh(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_IS_AIRPLAYING&&qh(this)}get mediaIsAirplaying(){return oC(this,nM.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){oD(this,nM.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return oE(this,nM.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){oF(this,nM.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new oh.CustomEvent(nI.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}qi.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${nM.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${nM.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nM.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${nM.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${qg}</slot>
      <slot name="exit">${qg}</slot>
    </slot>
  `},qi.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oa("start airplay")}</slot>
    <slot name="tooltip-exit">${oa("stop airplay")}</slot>
  `},oh.customElements.get("media-airplay-button")||oh.customElements.define("media-airplay-button",qi);let qj=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,qk=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ql=a=>{a.setAttribute("aria-checked",pb(a).toString())};class qm extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_SUBTITLES_LIST,nM.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",oa("closed captions")),ql(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_SUBTITLES_SHOWING&&ql(this)}get mediaSubtitlesList(){return qn(this,nM.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){qo(this,nM.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return qn(this,nM.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){qo(this,nM.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new oh.CustomEvent(nI.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}qm.getSlotTemplateHTML=function(a){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${qj}</slot>
      <slot name="off">${qk}</slot>
    </slot>
  `},qm.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${oa("Enable captions")}</slot>
    <slot name="tooltip-disable">${oa("Disable captions")}</slot>
  `};let qn=(a,b)=>{let c=a.getAttribute(b);return c?o4(c):[]},qo=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=o7(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};oh.customElements.get("media-captions-button")||oh.customElements.define("media-captions-button",qm);let qp=a=>{let b=a.mediaIsCasting?oa("stop casting"):oa("start casting");a.setAttribute("aria-label",b)};class qq extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_IS_CASTING,nM.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qp(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_IS_CASTING&&qp(this)}get mediaIsCasting(){return oC(this,nM.MEDIA_IS_CASTING)}set mediaIsCasting(a){oD(this,nM.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return oE(this,nM.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){oF(this,nM.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?nI.MEDIA_EXIT_CAST_REQUEST:nI.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new oh.CustomEvent(a,{composed:!0,bubbles:!0}))}}qq.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${nM.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${nM.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nM.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${nM.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},qq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oa("Start casting")}</slot>
    <slot name="tooltip-exit">${oa("Stop casting")}</slot>
  `},oh.customElements.get("media-cast-button")||oh.customElements.define("media-cast-button",qq);var qr=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},qs=(a,b,c)=>(qr(a,b,"read from private field"),c?c.call(a):b.get(a)),qt=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},qu=(a,b,c,d)=>(qr(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),qv=(a,b,c)=>(qr(a,b,"access private method"),c);let qw="open";class qx extends oh.HTMLElement{constructor(){super(),qt(this,dT),qt(this,dV),qt(this,dX),qt(this,dZ),qt(this,d_),qt(this,d1),qt(this,dQ,!1),qt(this,dR,null),qt(this,dS,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[qw,"anchor"]}get open(){return oC(this,qw)}set open(a){oD(this,qw,a)}handleEvent(a){switch(a.type){case"invoke":qv(this,dZ,d$).call(this,a);break;case"focusout":qv(this,d_,d0).call(this,a);break;case"keydown":qv(this,d1,d2).call(this,a)}}connectedCallback(){qv(this,dT,dU).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){qv(this,dT,dU).call(this),a===qw&&c!==b&&(this.open?qv(this,dV,dW).call(this):qv(this,dX,dY).call(this))}focus(){qu(this,dR,ov());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}dQ=new WeakMap,dR=new WeakMap,dS=new WeakMap,dT=new WeakSet,dU=function(){if(!qs(this,dQ)&&(qu(this,dQ,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=oy(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},dV=new WeakSet,dW=function(){var a;null==(a=qs(this,dS))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},dX=new WeakSet,dY=function(){var a;null==(a=qs(this,dS))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},dZ=new WeakSet,d$=function(a){qu(this,dS,a.relatedTarget),ot(this,a.relatedTarget)||(this.open=!this.open)},d_=new WeakSet,d0=function(a){var b;!ot(this,a.relatedTarget)&&(null==(b=qs(this,dR))||b.focus(),qs(this,dS)&&qs(this,dS)!==a.relatedTarget&&this.open&&(this.open=!1))},d1=new WeakSet,d2=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=qs(this,dR))||f.focus(),this.open=!1))},qx.shadowRootOptions={mode:"open"},qx.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(a)}
  `},qx.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},oh.customElements.get("media-chrome-dialog")||oh.customElements.define("media-chrome-dialog",qx);var qy=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},qz=(a,b,c)=>(qy(a,b,"read from private field"),c?c.call(a):b.get(a)),qA=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},qB=(a,b,c,d)=>(qy(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),qC=(a,b,c)=>(qy(a,b,"access private method"),c);class qD extends oh.HTMLElement{constructor(){if(super(),qA(this,ec),qA(this,ee),qA(this,eg),qA(this,ei),qA(this,ek),qA(this,em),qA(this,eo),qA(this,eq),qA(this,d3,void 0),qA(this,d4,void 0),qA(this,d5,void 0),qA(this,d6,void 0),qA(this,d7,{}),qA(this,d8,[]),qA(this,d9,()=>{if(this.range.matches(":focus-visible")){let{style:a}=oy(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),qA(this,ea,()=>{let{style:a}=oy(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),qA(this,eb,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),qB(this,d5,this.shadowRoot.querySelector("#startpoint")),qB(this,d6,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",nJ.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===nJ.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=qz(this,d3))?void 0:d.unassociateElement)||e.call(d,this),qB(this,d3,null)),c&&this.isConnected&&(qB(this,d3,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=qz(this,d3))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),qC(this,ee,ef).call(this)):(this.range.setAttribute(a,c),qC(this,eg,eh).call(this)))}connectedCallback(){var a,b,c;let{style:d}=oy(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),qz(this,d7).pointer=oy(this.shadowRoot,"#pointer"),qz(this,d7).progress=oy(this.shadowRoot,"#progress"),qz(this,d7).thumb=oy(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),qz(this,d7).activeSegment=oy(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(nJ.MEDIA_CONTROLLER);e&&(qB(this,d3,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=qz(this,d3))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",qz(this,d9)),this.shadowRoot.addEventListener("focusout",qz(this,ea)),qC(this,ee,ef).call(this),om(this.container,qz(this,eb))}disconnectedCallback(){var a,b;qC(this,eg,eh).call(this),null==(b=null==(a=qz(this,d3))?void 0:a.unassociateElement)||b.call(a,this),qB(this,d3,null),this.shadowRoot.removeEventListener("focusin",qz(this,d9)),this.shadowRoot.removeEventListener("focusout",qz(this,ea)),on(this.container,qz(this,eb))}updatePointerBar(a){var b;null==(b=qz(this,d7).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=qz(this,d7).progress)||a.style.setProperty("width",`${c}%`),null==(b=qz(this,d7).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];qB(this,d8,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=oi.createElementNS("http://www.w3.org/2000/svg","rect"),l=oy(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){var b,c,d,e;let f,g,h;return b=a.clientX,c=a.clientY,d=qz(this,d5).getBoundingClientRect(),f=(e=qz(this,d6).getBoundingClientRect()).x-d.x,0==(h=f*f+(g=e.y-d.y)*g)?0:Math.max(0,Math.min(1,((b-d.x)*f+(c-d.y)*g)/h))}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":qC(this,eq,er).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":qC(this,ek,el).call(this,a);break;case"pointerdown":qC(this,ei,ej).call(this,a);break;case"pointerup":qC(this,em,en).call(this);break;case"pointerleave":qC(this,eo,ep).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}d3=new WeakMap,d4=new WeakMap,d5=new WeakMap,d6=new WeakMap,d7=new WeakMap,d8=new WeakMap,d9=new WeakMap,ea=new WeakMap,eb=new WeakMap,ec=new WeakSet,ed=function(a){let b=qz(this,d7).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=qz(this,d8).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},ee=new WeakSet,ef=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},eg=new WeakSet,eh=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=oh.window)||a.removeEventListener("pointerup",this),null==(b=oh.window)||b.removeEventListener("pointermove",this)},ei=new WeakSet,ej=function(a){var b;qB(this,d4,a.composedPath().includes(this.range)),null==(b=oh.window)||b.addEventListener("pointerup",this)},ek=new WeakSet,el=function(a){var b;"mouse"!==a.pointerType&&qC(this,ei,ej).call(this,a),this.addEventListener("pointerleave",this),null==(b=oh.window)||b.addEventListener("pointermove",this)},em=new WeakSet,en=function(){var a;null==(a=oh.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eo=new WeakSet,ep=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=oh.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=qz(this,d7).activeSegment)||b.style.removeProperty("transform")},eq=new WeakSet,er=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),qC(this,ec,ed).call(this,a),this.dragging&&("mouse"!==a.pointerType||!qz(this,d4))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},qD.shadowRootOptions={mode:"open"},qD.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},oh.customElements.get("media-chrome-range")||oh.customElements.define("media-chrome-range",qD);var qE=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},qF=(a,b,c)=>(qE(a,b,"read from private field"),c?c.call(a):b.get(a)),qG=(a,b,c,d)=>(qE(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class qH extends oh.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,es,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[nJ.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===nJ.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=qF(this,es))?void 0:d.unassociateElement)||e.call(d,this),qG(this,es,null)),c&&this.isConnected&&(qG(this,es,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=qF(this,es))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(nJ.MEDIA_CONTROLLER);d&&(qG(this,es,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=qF(this,es))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=qF(this,es))?void 0:a.unassociateElement)||b.call(a,this),qG(this,es,null)}}es=new WeakMap,qH.shadowRootOptions={mode:"open"},qH.getTemplateHTML=function(a){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},oh.customElements.get("media-control-bar")||oh.customElements.define("media-control-bar",qH);var qI=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},qJ=(a,b,c)=>(qI(a,b,"read from private field"),c?c.call(a):b.get(a)),qK=(a,b,c,d)=>(qI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class qL extends oh.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,et,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[nJ.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===nJ.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=qJ(this,et))?void 0:d.unassociateElement)||e.call(d,this),qK(this,et,null)),c&&this.isConnected&&(qK(this,et,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=qJ(this,et))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=oy(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(nJ.MEDIA_CONTROLLER);e&&(qK(this,et,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=qJ(this,et))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=qJ(this,et))?void 0:a.unassociateElement)||b.call(a,this),qK(this,et,null)}}et=new WeakMap,qL.shadowRootOptions={mode:"open"},qL.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}
  `},qL.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},oh.customElements.get("media-text-display")||oh.customElements.define("media-text-display",qL);var qM=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},qN=(a,b,c)=>(qM(a,b,"read from private field"),c?c.call(a):b.get(a));class qO extends qL{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,eu,void 0),((a,b,c,d)=>(qM(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,eu,this.shadowRoot.querySelector("slot")),qN(this,eu).textContent=n5(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===nM.MEDIA_DURATION&&(qN(this,eu).textContent=n5(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return oA(this,nM.MEDIA_DURATION)}set mediaDuration(a){oB(this,nM.MEDIA_DURATION,a)}}eu=new WeakMap,qO.getSlotTemplateHTML=function(a,b){return`
    <slot>${n5(b.mediaDuration)}</slot>
  `},oh.customElements.get("media-duration-display")||oh.customElements.define("media-duration-display",qO);let qP={2:oa("Network Error"),3:oa("Decode Error"),4:oa("Source Not Supported"),5:oa("Encryption Error")},qQ={2:oa("A network error caused the media download to fail."),3:oa("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:oa("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:oa("The media is encrypted and there are no keys to decrypt it.")},qR=a=>{var b,c;return 1===a.code?null:{title:null!=(b=qP[a.code])?b:`Error ${a.code}`,message:null!=(c=qQ[a.code])?c:a.message}};var qS=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function qT(a){var b;let{title:c,message:d}=null!=(b=qR(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let qU=[nM.MEDIA_ERROR_CODE,nM.MEDIA_ERROR_MESSAGE];class qV extends qx{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,ev,null)}static get observedAttributes(){return[...super.observedAttributes,...qU]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!qU.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==qR(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return qS(this,a=ev,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;qS(this,b=ev,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return oA(this,"mediaerrorcode")}set mediaErrorCode(a){oB(this,"mediaerrorcode",a)}get mediaErrorMessage(){return oE(this,"mediaerrormessage")}set mediaErrorMessage(a){oF(this,"mediaerrormessage",a)}}ev=new WeakMap,qV.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${a.mediaerrorcode}" id="content">
      ${qT({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},qV.formatErrorMessage=qT,oh.customElements.get("media-error-dialog")||oh.customElements.define("media-error-dialog",qV);let qW=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,qX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,qY=a=>{let b=a.mediaIsFullscreen?oa("exit fullscreen mode"):oa("enter fullscreen mode");a.setAttribute("aria-label",b)};class qZ extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_IS_FULLSCREEN,nM.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qY(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_IS_FULLSCREEN&&qY(this)}get mediaFullscreenUnavailable(){return oE(this,nM.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){oF(this,nM.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return oC(this,nM.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){oD(this,nM.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?nI.MEDIA_EXIT_FULLSCREEN_REQUEST:nI.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new oh.CustomEvent(a,{composed:!0,bubbles:!0}))}}qZ.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${nM.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${nM.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nM.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${nM.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${qW}</slot>
      <slot name="exit">${qX}</slot>
    </slot>
  `},qZ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oa("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${oa("Exit fullscreen mode")}</slot>
  `},oh.customElements.get("media-fullscreen-button")||oh.customElements.define("media-fullscreen-button",qZ);let{MEDIA_TIME_IS_LIVE:q$,MEDIA_PAUSED:q_}=nM,{MEDIA_SEEK_TO_LIVE_REQUEST:q0,MEDIA_PLAY_REQUEST:q1}=nI,q2=a=>{var b;let c=a.mediaPaused||!a.mediaTimeIsLive,d=c?oa("seek to live"):oa("playing live");a.setAttribute("aria-label",d);let e=null==(b=a.shadowRoot)?void 0:b.querySelector('slot[name="text"]');e&&(e.textContent=oa("live")),c?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class q3 extends qf{static get observedAttributes(){return[...super.observedAttributes,q$,q_]}connectedCallback(){super.connectedCallback(),q2(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),q2(this)}get mediaPaused(){return oC(this,nM.MEDIA_PAUSED)}set mediaPaused(a){oD(this,nM.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return oC(this,nM.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){oD(this,nM.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new oh.CustomEvent(q0,{composed:!0,bubbles:!0})),this.hasAttribute(q_)&&this.dispatchEvent(new oh.CustomEvent(q1,{composed:!0,bubbles:!0})))}}q3.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${q$}]:not([${q_}])) slot[name=indicator] > *,
      :host([${q$}]:not([${q_}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${q$}]:not([${q_}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${oa("live")}</slot>
  `},oh.customElements.get("media-live-button")||oh.customElements.define("media-live-button",q3);var q4=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},q5=(a,b,c)=>(q4(a,b,"read from private field"),c?c.call(a):b.get(a)),q6=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},q7=(a,b,c,d)=>(q4(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let q8="loadingdelay",q9="noautohide",ra=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class rb extends oh.HTMLElement{constructor(){if(super(),q6(this,ew,void 0),q6(this,ex,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[nJ.MEDIA_CONTROLLER,nM.MEDIA_PAUSED,nM.MEDIA_LOADING,q8]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===q8&&b!==c?this.loadingDelay=Number(c):a===nJ.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=q5(this,ew))?void 0:d.unassociateElement)||e.call(d,this),q7(this,ew,null)),c&&this.isConnected&&(q7(this,ew,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=q5(this,ew))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(nJ.MEDIA_CONTROLLER);d&&(q7(this,ew,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=q5(this,ew))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=q5(this,ew))?void 0:a.unassociateElement)||b.call(a,this),q7(this,ew,null)}get loadingDelay(){return q5(this,ex)}set loadingDelay(a){q7(this,ex,a);let{style:b}=oy(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return oC(this,nM.MEDIA_PAUSED)}set mediaPaused(a){oD(this,nM.MEDIA_PAUSED,a)}get mediaLoading(){return oC(this,nM.MEDIA_LOADING)}set mediaLoading(a){oD(this,nM.MEDIA_LOADING,a)}get mediaController(){return oE(this,nJ.MEDIA_CONTROLLER)}set mediaController(a){oF(this,nJ.MEDIA_CONTROLLER,a)}get noAutohide(){return oC(this,q9)}set noAutohide(a){oD(this,q9,a)}}ew=new WeakMap,ex=new WeakMap,rb.shadowRootOptions={mode:"open"},rb.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${nM.MEDIA_LOADING}]:not([${nM.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${nM.MEDIA_LOADING}]:not([${nM.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${nM.MEDIA_LOADING}]:not([${nM.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${ra}</slot>
    <div id="status" role="status" aria-live="polite">${oa("media loading")}</div>
  `},oh.customElements.get("media-loading-indicator")||oh.customElements.define("media-loading-indicator",rb);let rc=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,rd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,re=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,rf=a=>{let b="off"===a.mediaVolumeLevel?oa("unmute"):oa("mute");a.setAttribute("aria-label",b)};class rg extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),rf(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_VOLUME_LEVEL&&rf(this)}get mediaVolumeLevel(){return oE(this,nM.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){oF(this,nM.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?nI.MEDIA_UNMUTE_REQUEST:nI.MEDIA_MUTE_REQUEST;this.dispatchEvent(new oh.CustomEvent(a,{composed:!0,bubbles:!0}))}}rg.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${nM.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${nM.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${nM.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${nM.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${nM.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${nM.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${nM.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${rc}</slot>
      <slot name="low">${rd}</slot>
      <slot name="medium">${rd}</slot>
      <slot name="high">${re}</slot>
    </slot>
  `},rg.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${oa("Mute")}</slot>
    <slot name="tooltip-unmute">${oa("Unmute")}</slot>
  `},oh.customElements.get("media-mute-button")||oh.customElements.define("media-mute-button",rg);let rh=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,ri=a=>{let b=a.mediaIsPip?oa("exit picture in picture mode"):oa("enter picture in picture mode");a.setAttribute("aria-label",b)};class rj extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_IS_PIP,nM.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ri(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_IS_PIP&&ri(this)}get mediaPipUnavailable(){return oE(this,nM.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){oF(this,nM.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return oC(this,nM.MEDIA_IS_PIP)}set mediaIsPip(a){oD(this,nM.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?nI.MEDIA_EXIT_PIP_REQUEST:nI.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new oh.CustomEvent(a,{composed:!0,bubbles:!0}))}}rj.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${nM.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${nM.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nM.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${nM.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rh}</slot>
      <slot name="exit">${rh}</slot>
    </slot>
  `},rj.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oa("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${oa("Exit picture in picture mode")}</slot>
  `},oh.customElements.get("media-pip-button")||oh.customElements.define("media-pip-button",rj);var rk=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let rl="rates",rm=[1,1.2,1.5,1.7,2];class rn extends qf{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,ey,new o2(this,rl,{defaultValue:rm})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PLAYBACK_RATE,rl]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===rl&&(rk(this,ey).value=c),a===nM.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",oa("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return rk(this,ey)}set rates(a){a?Array.isArray(a)?rk(this,ey).value=a.join(" "):"string"==typeof a&&(rk(this,ey).value=a):rk(this,ey).value=""}get mediaPlaybackRate(){return oA(this,nM.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){oB(this,nM.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(rk(this,ey).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new oh.CustomEvent(nI.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}ey=new WeakMap,rn.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},rn.getTooltipContentHTML=function(){return oa("Playback rate")},oh.customElements.get("media-playback-rate-button")||oh.customElements.define("media-playback-rate-button",rn);let ro=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,rq=a=>{let b=a.mediaPaused?oa("play"):oa("pause");a.setAttribute("aria-label",b)};class rr extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PAUSED,nM.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),rq(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),(a===nM.MEDIA_PAUSED||a===nM.MEDIA_LANG)&&rq(this)}get mediaPaused(){return oC(this,nM.MEDIA_PAUSED)}set mediaPaused(a){oD(this,nM.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?nI.MEDIA_PLAY_REQUEST:nI.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new oh.CustomEvent(a,{composed:!0,bubbles:!0}))}}rr.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${nM.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${nM.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${nM.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${nM.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ro}</slot>
      <slot name="pause">${rp}</slot>
    </slot>
  `},rr.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${oa("Play")}</slot>
    <slot name="tooltip-pause">${oa("Pause")}</slot>
  `},oh.customElements.get("media-play-button")||oh.customElements.define("media-play-button",rr);let rs="placeholdersrc";class rt extends oh.HTMLElement{static get observedAttributes(){return[rs,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if("src"===a&&(null==c?this.image.removeAttribute("src"):this.image.setAttribute("src",c)),a===rs)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return oE(this,rs)}set placeholderSrc(a){oF(this,"src",a)}get src(){return oE(this,"src")}set src(a){oF(this,"src",a)}}rt.shadowRootOptions={mode:"open"},rt.getTemplateHTML=function(a){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},oh.customElements.get("media-poster-image")||oh.customElements.define("media-poster-image",rt);var ru=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};ez=new WeakMap,oh.customElements.get("media-preview-chapter-display")||oh.customElements.define("media-preview-chapter-display",class extends qL{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,ez,void 0),((a,b,c,d)=>(ru(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,ez,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PREVIEW_CHAPTER,nM.MEDIA_LANG]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),(a===nM.MEDIA_PREVIEW_CHAPTER||a===nM.MEDIA_LANG)&&c!==b&&null!=c){var d;if((ru(this,ez,"read from private field"),d?d.call(this):ez.get(this)).textContent=c,""!==c){let a=oa("chapter: {chapterName}",{chapterName:c});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return oE(this,nM.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){oF(this,nM.MEDIA_PREVIEW_CHAPTER,a)}});var rv=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},rw=(a,b,c)=>(rv(a,b,"read from private field"),c?c.call(a):b.get(a)),rx=(a,b,c,d)=>(rv(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ry extends oh.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,eA,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[nJ.MEDIA_CONTROLLER,nM.MEDIA_PREVIEW_IMAGE,nM.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(nJ.MEDIA_CONTROLLER);d&&(rx(this,eA,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=rw(this,eA))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=rw(this,eA))?void 0:a.unassociateElement)||b.call(a,this),rx(this,eA,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[nM.MEDIA_PREVIEW_IMAGE,nM.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===nJ.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=rw(this,eA))?void 0:d.unassociateElement)||e.call(d,this),rx(this,eA,null)),c&&this.isConnected&&(rx(this,eA,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=rw(this,eA))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return oE(this,nM.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){oF(this,nM.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(nM.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){a?this.setAttribute(nM.MEDIA_PREVIEW_COORDS,a.join(" ")):this.removeAttribute(nM.MEDIA_PREVIEW_COORDS)}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=oy(this.shadowRoot,":host"),q=oy(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}eA=new WeakMap,ry.shadowRootOptions={mode:"open"},ry.getTemplateHTML=function(a){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},oh.customElements.get("media-preview-thumbnail")||oh.customElements.define("media-preview-thumbnail",ry);var rz=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},rA=(a,b,c)=>(rz(a,b,"read from private field"),c?c.call(a):b.get(a));eB=new WeakMap,oh.customElements.get("media-preview-time-display")||oh.customElements.define("media-preview-time-display",class extends qL{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,eB,void 0),((a,b,c,d)=>(rz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,eB,this.shadowRoot.querySelector("slot")),rA(this,eB).textContent=n5(0)}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_PREVIEW_TIME&&null!=c&&(rA(this,eB).textContent=n5(parseFloat(c)))}get mediaPreviewTime(){return oA(this,nM.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){oB(this,nM.MEDIA_PREVIEW_TIME,a)}});let rB="seekoffset";class rC extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_CURRENT_TIME,rB]}connectedCallback(){super.connectedCallback(),this.seekOffset=oA(this,rB,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===rB&&(this.seekOffset=oA(this,rB,30))}get seekOffset(){return oA(this,rB,30)}set seekOffset(a){oB(this,rB,a),this.setAttribute("aria-label",oa("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),or(os(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oA(this,nM.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){oB(this,nM.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new oh.CustomEvent(nI.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}rC.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},rC.getTooltipContentHTML=function(){return oa("Seek backward")},oh.customElements.get("media-seek-backward-button")||oh.customElements.define("media-seek-backward-button",rC);let rD="seekoffset";class rE extends qf{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_CURRENT_TIME,rD]}connectedCallback(){super.connectedCallback(),this.seekOffset=oA(this,rD,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===rD&&(this.seekOffset=oA(this,rD,30))}get seekOffset(){return oA(this,rD,30)}set seekOffset(a){oB(this,rD,a),this.setAttribute("aria-label",oa("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),or(os(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oA(this,nM.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){oB(this,nM.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new oh.CustomEvent(nI.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}rE.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},rE.getTooltipContentHTML=function(){return oa("Seek forward")},oh.customElements.get("media-seek-forward-button")||oh.customElements.define("media-seek-forward-button",rE);var rF=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},rG=(a,b,c)=>(rF(a,b,"read from private field"),c?c.call(a):b.get(a));let rH={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},rI=[...Object.values(rH),nM.MEDIA_CURRENT_TIME,nM.MEDIA_DURATION,nM.MEDIA_SEEKABLE],rJ=["Enter"," "],rK="&nbsp;/&nbsp;",rL=(a,{timesSep:b=rK}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?n5(0-(g-e)):n5(e);return a.showDuration?`${h}${b}${n5(g)}`:h};class rM extends qL{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,eC,void 0),((a,b,c,d)=>(rF(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,eC,this.shadowRoot.querySelector("slot")),rG(this,eC).innerHTML=`${rL(this)}`}static get observedAttributes(){return[...super.observedAttributes,...rI,"disabled"]}connectedCallback(){let{style:a}=oy(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",oa("playback time"));let b=a=>{let{key:c}=a;rJ.includes(c)?this.toggleTimeDisplay():this.removeEventListener("keyup",b)};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;c||d||!rJ.includes(e)?this.removeEventListener("keyup",b):this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){rI.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return oC(this,rH.REMAINING)}set remaining(a){oD(this,rH.REMAINING,a)}get showDuration(){return oC(this,rH.SHOW_DURATION)}set showDuration(a){oD(this,rH.SHOW_DURATION,a)}get noToggle(){return oC(this,rH.NO_TOGGLE)}set noToggle(a){oD(this,rH.NO_TOGGLE,a)}get mediaDuration(){return oA(this,nM.MEDIA_DURATION)}set mediaDuration(a){oB(this,nM.MEDIA_DURATION,a)}get mediaCurrentTime(){return oA(this,nM.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){oB(this,nM.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(nM.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){null==a?this.removeAttribute(nM.MEDIA_SEEKABLE):this.setAttribute(nM.MEDIA_SEEKABLE,a.join(":"))}update(){let a=rL(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?n4(0-(e-c)):n4(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=n4(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==rG(this,eC).innerHTML&&(rG(this,eC).innerHTML=a)}}eC=new WeakMap,rM.getSlotTemplateHTML=function(a,b){return`
    <slot>${rL(b)}</slot>
  `},oh.customElements.get("media-time-display")||oh.customElements.define("media-time-display",rM);var rN=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},rO=(a,b,c)=>(rN(a,b,"read from private field"),c?c.call(a):b.get(a)),rP=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},rQ=(a,b,c,d)=>(rN(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class rR{constructor(a,b,c){rP(this,eD,void 0),rP(this,eE,void 0),rP(this,eF,void 0),rP(this,eG,void 0),rP(this,eH,void 0),rP(this,eI,void 0),rP(this,eJ,void 0),rP(this,eK,void 0),rP(this,eL,0),rP(this,eM,(a=performance.now())=>{rQ(this,eL,requestAnimationFrame(rO(this,eM))),rQ(this,eG,performance.now()-rO(this,eF));let b=1e3/this.fps;if(rO(this,eG)>b){let c,d,e,f;rQ(this,eF,a-rO(this,eG)%b);let g=1e3/((a-rO(this,eE))/++(c=this,d=eH,{set _(value){rQ(c,d,value,e)},get _(){return rO(c,d,f)}})._),h=(a-rO(this,eI))/1e3/this.duration,i=rO(this,eJ)+h*this.playbackRate;i-rO(this,eD).valueAsNumber>0?rQ(this,eK,this.playbackRate/this.duration/g):(rQ(this,eK,.995*rO(this,eK)),i=rO(this,eD).valueAsNumber+rO(this,eK)),this.callback(i)}}),rQ(this,eD,a),this.callback=b,this.fps=c}start(){0===rO(this,eL)&&(rQ(this,eF,performance.now()),rQ(this,eE,rO(this,eF)),rQ(this,eH,0),rO(this,eM).call(this))}stop(){0!==rO(this,eL)&&(cancelAnimationFrame(rO(this,eL)),rQ(this,eL,0))}update({start:a,duration:b,playbackRate:c}){let d=a-rO(this,eD).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),rQ(this,eJ,a),rQ(this,eI,performance.now()),this.duration=b,this.playbackRate=c}}eD=new WeakMap,eE=new WeakMap,eF=new WeakMap,eG=new WeakMap,eH=new WeakMap,eI=new WeakMap,eJ=new WeakMap,eK=new WeakMap,eL=new WeakMap,eM=new WeakMap;var rS=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},rT=(a,b,c)=>(rS(a,b,"read from private field"),c?c.call(a):b.get(a)),rU=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},rV=(a,b,c,d)=>(rS(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),rW=(a,b,c)=>(rS(a,b,"access private method"),c);let rX=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},rY=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class rZ extends qD{constructor(){super(),rU(this,eX),rU(this,eZ),rU(this,e0),rU(this,e2),rU(this,e4),rU(this,e6),rU(this,e8),rU(this,fa),rU(this,eN,void 0),rU(this,eO,void 0),rU(this,eP,void 0),rU(this,eQ,void 0),rU(this,eR,void 0),rU(this,eS,void 0),rU(this,eT,void 0),rU(this,eU,void 0),rU(this,eV,void 0),rU(this,eW,void 0),rU(this,e_,a=>{!this.dragging&&(n0(a)&&(this.range.valueAsNumber=a),rT(this,eW)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),rV(this,eP,this.shadowRoot.querySelectorAll('[part~="box"]')),rV(this,eR,this.shadowRoot.querySelector('[part~="preview-box"]')),rV(this,eS,this.shadowRoot.querySelector('[part~="current-box"]'));const a=getComputedStyle(this);rV(this,eT,parseInt(a.getPropertyValue("--media-box-padding-left"))),rV(this,eU,parseInt(a.getPropertyValue("--media-box-padding-right"))),rV(this,eO,new rR(this.range,rT(this,e_),60))}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PAUSED,nM.MEDIA_DURATION,nM.MEDIA_SEEKABLE,nM.MEDIA_CURRENT_TIME,nM.MEDIA_PREVIEW_IMAGE,nM.MEDIA_PREVIEW_TIME,nM.MEDIA_PREVIEW_CHAPTER,nM.MEDIA_BUFFERED,nM.MEDIA_PLAYBACK_RATE,nM.MEDIA_LOADING,nM.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",oa("seek")),rW(this,eX,eY).call(this),rV(this,eN,this.getRootNode()),null==(a=rT(this,eN))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),rW(this,eX,eY).call(this),null==(a=rT(this,eN))||a.removeEventListener("transitionstart",this),rV(this,eN,null)}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),b!=c){if(a===nM.MEDIA_CURRENT_TIME||a===nM.MEDIA_PAUSED||a===nM.MEDIA_ENDED||a===nM.MEDIA_LOADING||a===nM.MEDIA_DURATION||a===nM.MEDIA_SEEKABLE){let a,b,c,d;rT(this,eO).update({start:rX(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),rW(this,eX,eY).call(this),a=this.range,b=n4(+rY(this)),c=n4(+this.mediaSeekableEnd),d=b&&c?`${b} of ${c}`:"video not loaded, unknown time.",a.setAttribute("aria-valuetext",d)}else a===nM.MEDIA_BUFFERED&&this.updateBufferedBar();(a===nM.MEDIA_DURATION||a===nM.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=rT(this,eV),this.updateBar())}}get mediaChaptersCues(){return rT(this,eV)}set mediaChaptersCues(a){var b;rV(this,eV,a),this.updateSegments(null==(b=rT(this,eV))?void 0:b.map(a=>({start:rX(this,a.startTime),end:rX(this,a.endTime)})))}get mediaPaused(){return oC(this,nM.MEDIA_PAUSED)}set mediaPaused(a){oD(this,nM.MEDIA_PAUSED,a)}get mediaLoading(){return oC(this,nM.MEDIA_LOADING)}set mediaLoading(a){oD(this,nM.MEDIA_LOADING,a)}get mediaDuration(){return oA(this,nM.MEDIA_DURATION)}set mediaDuration(a){oB(this,nM.MEDIA_DURATION,a)}get mediaCurrentTime(){return oA(this,nM.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){oB(this,nM.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return oA(this,nM.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){oB(this,nM.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(nM.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(nM.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(nM.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(nM.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){null==a?this.removeAttribute(nM.MEDIA_SEEKABLE):this.setAttribute(nM.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return oE(this,nM.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){oF(this,nM.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return oA(this,nM.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){oB(this,nM.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return oC(this,nM.MEDIA_ENDED)}set mediaEnded(a){oD(this,nM.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=rX(this,e)}let{style:d}=oy(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=oy(this.shadowRoot,"#current-rail"),b=oy(this.shadowRoot,'[part~="current-box"]'),c=rW(this,e0,e1).call(this,rT(this,eS)),d=rW(this,e2,e3).call(this,c,this.range.valueAsNumber),e=rW(this,e4,e5).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":rW(this,fa,fb).call(this);break;case"pointermove":rW(this,e6,e7).call(this,a);break;case"pointerup":rT(this,eW)&&rV(this,eW,!1);break;case"pointerdown":rV(this,eW,!0);break;case"pointerleave":rW(this,e8,e9).call(this,null);break;case"transitionstart":ot(a.target,this)&&setTimeout(()=>rW(this,eX,eY).call(this),0)}}}eN=new WeakMap,eO=new WeakMap,eP=new WeakMap,eQ=new WeakMap,eR=new WeakMap,eS=new WeakMap,eT=new WeakMap,eU=new WeakMap,eV=new WeakMap,eW=new WeakMap,eX=new WeakSet,eY=function(){rW(this,eZ,e$).call(this)?rT(this,eO).start():rT(this,eO).stop()},eZ=new WeakSet,e$=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ox(this)},e_=new WeakMap,e0=new WeakSet,e1=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?ou(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},e2=new WeakSet,e3=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},e4=new WeakSet,e5=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+rT(this,eT)){let b=a.range.left-a.bounds.left-rT(this,eT);return`${f-c/2+b}px`}if(f>e-rT(this,eU)){let b=a.bounds.right-a.range.right-rT(this,eU);return`${f+c/2-b-a.range.width}px`}return 0},e6=new WeakSet,e7=function(a){let b=[...rT(this,eP)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void rW(this,e8,e9).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=oy(this.shadowRoot,"#preview-rail"),e=oy(this.shadowRoot,'[part~="preview-box"]'),f=rW(this,e0,e1).call(this,rT(this,eR)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=rW(this,e2,e3).call(this,f,g),i=rW(this,e4,e5).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(rT(this,eQ))-Math.round(g*c))&&g>.01&&g<.99||(rV(this,eQ,g*c),rW(this,e8,e9).call(this,rT(this,eQ)))},e8=new WeakSet,e9=function(a){this.dispatchEvent(new oh.CustomEvent(nI.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},fa=new WeakSet,fb=function(){rT(this,eO).stop();let a=rY(this);this.dispatchEvent(new oh.CustomEvent(nI.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},rZ.shadowRootOptions={mode:"open"},rZ.getTemplateHTML=function(a){return`
    ${qD.getTemplateHTML(a)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${nM.MEDIA_PREVIEW_IMAGE}], [${nM.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${nM.MEDIA_PREVIEW_IMAGE}], [${nM.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${nM.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${nM.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${nM.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${nM.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${nM.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${nM.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${nM.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${nM.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${nM.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${nM.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${nM.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${nM.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${ry.shadowRootOptions.mode}">
            ${ry.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},oh.customElements.get("media-time-range")||oh.customElements.define("media-time-range",rZ),oh.customElements.get("media-volume-range")||oh.customElements.define("media-volume-range",class extends qD{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_VOLUME,nM.MEDIA_MUTED,nM.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new oh.CustomEvent(nI.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",oa("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===nM.MEDIA_VOLUME||a===nM.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return oA(this,nM.MEDIA_VOLUME,1)}set mediaVolume(a){oB(this,nM.MEDIA_VOLUME,a)}get mediaMuted(){return oC(this,nM.MEDIA_MUTED)}set mediaMuted(a){oD(this,nM.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return oE(this,nM.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){oF(this,nM.MEDIA_VOLUME_UNAVAILABLE,a)}});var r$=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},r_=(a,b,c)=>(r$(a,b,"read from private field"),c?c.call(a):b.get(a)),r0=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},r1=(a,b,c,d)=>(r$(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let r2={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof sa&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof sa?d.element[d.attributeName]=b:d.value=b}}}};class r3 extends oh.DocumentFragment{constructor(a,b,c=r2){var d;super(),r0(this,fc,void 0),r0(this,fd,void 0),this.append(a.content.cloneNode(!0)),r1(this,fc,r4(this)),r1(this,fd,c),null==(d=c.createCallback)||d.call(c,this,r_(this,fc),b),c.processCallback(this,r_(this,fc),b)}update(a){r_(this,fd).processCallback(this,r_(this,fc),a)}}fc=new WeakMap,fd=new WeakMap;let r4=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new r9;for([c,d]of r6(e.value))if(c){let c=new sa(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of r6(f))if(c){let c=new sb(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new sc(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else r4(e,b);return b},r5={},r6=a=>{let b="",c=0,d=r5[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),r5[a]=d};class r7{get value(){return""}set value(a){}toString(){return this.value}}let r8=new WeakMap;class r9{constructor(){r0(this,fe,[])}[Symbol.iterator](){return r_(this,fe).values()}get length(){return r_(this,fe).length}item(a){return r_(this,fe)[a]}append(...a){for(let b of a)b instanceof sa&&r8.set(b,this),r_(this,fe).push(b)}toString(){return r_(this,fe).join("")}}fe=new WeakMap;class sa extends r7{constructor(a,b,c){super(),r0(this,fj),r0(this,ff,""),r0(this,fg,void 0),r0(this,fh,void 0),r0(this,fi,void 0),r1(this,fg,a),r1(this,fh,b),r1(this,fi,c)}get attributeName(){return r_(this,fh)}get attributeNamespace(){return r_(this,fi)}get element(){return r_(this,fg)}get value(){return r_(this,ff)}set value(a){r_(this,ff)!==a&&(r1(this,ff,a),r_(this,fj,fk)&&1!==r_(this,fj,fk).length?r_(this,fg).setAttributeNS(r_(this,fi),r_(this,fh),r_(this,fj,fk).toString()):null==a?r_(this,fg).removeAttributeNS(r_(this,fi),r_(this,fh)):r_(this,fg).setAttributeNS(r_(this,fi),r_(this,fh),a))}get booleanValue(){return r_(this,fg).hasAttributeNS(r_(this,fi),r_(this,fh))}set booleanValue(a){if(r_(this,fj,fk)&&1!==r_(this,fj,fk).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}ff=new WeakMap,fg=new WeakMap,fh=new WeakMap,fi=new WeakMap,fj=new WeakSet,fk=function(){return r8.get(this)};class sb extends r7{constructor(a,b){super(),r0(this,fl,void 0),r0(this,fm,void 0),r1(this,fl,a),r1(this,fm,b?[...b]:[new Text])}get replacementNodes(){return r_(this,fm)}get parentNode(){return r_(this,fl)}get nextSibling(){return r_(this,fm)[r_(this,fm).length-1].nextSibling}get previousSibling(){return r_(this,fm)[0].previousSibling}get value(){return r_(this,fm).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),r1(this,fm,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(r_(this,fm)[0].parentNode,r_(this,fm),b,this.nextSibling))}}fl=new WeakMap,fm=new WeakMap;class sc extends sb{constructor(a,b){const c=b.getAttribute("directive")||b.getAttribute("type");let d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let sd={string:a=>String(a)};class se{constructor(a){this.template=a,this.state=void 0}}let sf=new WeakMap,sg=new WeakMap,sh={partial:(a,b)=>{b[a.expression]=new se(a.template)},if:(a,b)=>{var c;if(sl(a.expression,b))if(sf.get(a)!==a.template){sf.set(a,a.template);let c=new r3(a.template,b,sj);a.replace(c),sg.set(a,c)}else null==(c=sg.get(a))||c.update(b);else a.replace(""),sf.delete(a),sg.delete(a)}},si=Object.keys(sh),sj={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof sc){if(!f.directive){let a=si.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=sh[f.directive])||d.call(sh,f,c);continue}let b=sl(a,c);if(b instanceof se){sf.get(f)!==b.template?(sf.set(f,b.template),f.value=b=new r3(b.template,b.state,sj),sg.set(f,b)):null==(e=sg.get(f))||e.update(b.state);continue}b?(f instanceof sa&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof sa?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,sf.delete(f),sg.delete(f))):f instanceof sa?f.value=void 0:(f.value=void 0,sf.delete(f),sg.delete(f))}}},sk={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=sd[b])?void 0:c.call(sd,a)}};function sl(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return sm(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return sm(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=so(j,b))}return c}if(1===j.length)return sn(j[0])?so(j[0].token,b):sm(a);if(2===j.length){let c=sk[null==(h=j[0])?void 0:h.token];return c&&sn(j[1])?c(so(j[1].token,b)):sm(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=sk[c];if(!d||!sn(j[0])||!sn(j[2]))return sm(a);let e=so(j[0].token,b);return d(e,"|"===c?j[2].token:so(j[2].token,b))}}function sm(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function sn({type:a}){return["number","boolean","string","param"].includes(a)}function so(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):n1(a)?parseFloat(a):b[a]}var sp=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},sq=(a,b,c)=>(sp(a,b,"read from private field"),c?c.call(a):b.get(a)),sr=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ss=(a,b,c,d)=>(sp(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),st=(a,b,c)=>(sp(a,b,"access private method"),c);let su={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},sv=oi.createElement("template");sv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class sw extends oh.HTMLElement{constructor(){super(),sr(this,fq),sr(this,fs),sr(this,fn,void 0),sr(this,fo,void 0),sr(this,fp,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(su[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(nN.BREAKPOINTS_COMPUTED,this.render),st(this,fq,fr).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=sq(this,fn))?a:this.constructor.template}set template(a){null===a?this.removeAttribute("template"):"string"==typeof a?this.setAttribute("template",a):a instanceof HTMLTemplateElement&&(ss(this,fn,a),ss(this,fp,null),this.createRenderer())}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>su[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=su[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(n1(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&st(this,fs,ft).call(this)}connectedCallback(){st(this,fs,ft).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==sq(this,fo)&&(ss(this,fo,this.template),this.renderer=new r3(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(sv.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function sx(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function sy(a){return a.split("-")[0]}fn=new WeakMap,fo=new WeakMap,fp=new WeakMap,fq=new WeakSet,fr=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},fs=new WeakSet,ft=function(){var a;let b=this.getAttribute("template");if(!b||b===sq(this,fp))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){ss(this,fp,b),ss(this,fn,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(ss(this,fp,b),sx(b).then(a=>{let b=oi.createElement("template");b.innerHTML=a,ss(this,fn,b),this.createRenderer()}).catch(console.error))},sw.observedAttributes=["template"],sw.processor=sj,oh.customElements.get("media-theme")||oh.customElements.define("media-theme",sw);class sz extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class sA extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var sB=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},sC=(a,b,c)=>(sB(a,b,"read from private field"),c?c.call(a):b.get(a)),sD=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},sE=(a,b,c,d)=>(sB(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),sF=(a,b,c)=>(sB(a,b,"access private method"),c);function sG({type:a,text:b,value:c,checked:d}){let e=oi.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=oi.createElement("span");return f.textContent=b,e.append(f),e}function sH(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let sI="style",sJ="hidden",sK="disabled";class sL extends oh.HTMLElement{constructor(){if(super(),sD(this,fB),sD(this,fD),sD(this,fG),sD(this,fI),sD(this,fK),sD(this,fM),sD(this,fQ),sD(this,fS),sD(this,fU),sD(this,fW),sD(this,fY),sD(this,f$),sD(this,f0),sD(this,f2),sD(this,f4),sD(this,f6),sD(this,f8),sD(this,ga),sD(this,fu,null),sD(this,fv,null),sD(this,fw,null),sD(this,fx,new Set),sD(this,fy,void 0),sD(this,fz,!1),sD(this,fA,null),sD(this,fF,()=>{let a=sC(this,fx),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));sE(this,fx,b)}),sD(this,fO,()=>{sF(this,fQ,fR).call(this),sF(this,fS,fT).call(this,!1)}),sD(this,fP,()=>{sF(this,fQ,fR).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),sE(this,fy,new MutationObserver(sC(this,fF))),sC(this,fy).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[sK,sJ,sI,"anchor",nJ.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":sF(this,fB,fC).call(this,a);break;case"invoke":sF(this,fI,fJ).call(this,a);break;case"click":sF(this,fU,fV).call(this,a);break;case"toggle":sF(this,fY,fZ).call(this,a);break;case"focusout":sF(this,f0,f1).call(this,a);break;case"keydown":sF(this,f2,f3).call(this,a)}}connectedCallback(){var a,b;sE(this,fA,oz(this.shadowRoot,":host")),sF(this,fG,fH).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),sE(this,fu,oq(this)),null==(b=null==(a=sC(this,fu))?void 0:a.associateElement)||b.call(a,this),this.hidden||(om(sN(this),sC(this,fO)),om(this,sC(this,fP))),sF(this,fD,fE).call(this)}disconnectedCallback(){var a,b;on(sN(this),sC(this,fO)),on(this,sC(this,fP)),this.disable(),null==(b=null==(a=sC(this,fu))?void 0:a.unassociateElement)||b.call(a,this),sE(this,fu,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===sJ&&c!==b?(sC(this,fz)||sE(this,fz,!0),this.hidden?sF(this,fM,fN).call(this):sF(this,fK,fL).call(this),this.dispatchEvent(new sA({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===nJ.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=sC(this,fu))?void 0:d.unassociateElement)||e.call(d,this),sE(this,fu,null)),c&&this.isConnected&&(sE(this,fu,oq(this)),null==(g=null==(f=sC(this,fu))?void 0:f.associateElement)||g.call(f,this))):a===sK&&c!==b?null==c?this.enable():this.disable():a===sI&&c!==b&&sF(this,fG,fH).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=ow(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(sM)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&sF(this,ga,gb).call(this,b)}focus(){if(sE(this,fv,ov()),this.items.length){sF(this,f8,f9).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=sF(this,f4,f5).call(this,a);c&&(sF(this,ga,gb).call(this,c,"checkbox"===c.type),sC(this,fw)&&!this.hidden&&(null==(b=sC(this,fv))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=sF(this,f4,f5).call(this,a))?b:sF(this,f6,f7).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),sF(this,f8,f9).call(this,e[g]),e[g].focus()}}function sM(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function sN(a){var b;return null!=(b=a.getAttribute("bounds")?ou(a,`#${a.getAttribute("bounds")}`):op(a)||a.parentElement)?b:a}fu=new WeakMap,fv=new WeakMap,fw=new WeakMap,fx=new WeakMap,fy=new WeakMap,fz=new WeakMap,fA=new WeakMap,fB=new WeakSet,fC=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&sF(this,fD,fE).call(this),b.name||sC(this,fF).call(this)},fD=new WeakSet,fE=function(){let a=this.shadowRoot.querySelector('slot[name="header"]');a.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===a.assignedNodes().length},fF=new WeakMap,fG=new WeakSet,fH=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},fI=new WeakSet,fJ=function(a){sE(this,fw,a.relatedTarget),ot(this,a.relatedTarget)||(this.hidden=!this.hidden)},fK=new WeakSet,fL=function(){var a;null==(a=sC(this,fw))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),om(sN(this),sC(this,fO)),om(this,sC(this,fP))},fM=new WeakSet,fN=function(){var a;null==(a=sC(this,fw))||a.setAttribute("aria-expanded","false"),on(sN(this),sC(this,fO)),on(this,sC(this,fP))},fO=new WeakMap,fP=new WeakMap,fQ=new WeakSet,fR=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(sy(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=sy(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){var c,d,e;let f,g;return{anchor:(c=a,d=b.offsetParent,f=c.getBoundingClientRect(),g=null!=(e=null==d?void 0:d.getBoundingClientRect())?e:{x:0,y:0},{x:f.x-g.x,y:f.y-g.y,width:f.width,height:f.height}),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=sN(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=sC(this,fA);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},fS=new WeakSet,fT=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=sC(this,fA);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),sF(this,fQ,fR).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),sF(this,fQ,fR).call(this);d.removeProperty("--media-menu-transition-in")},fU=new WeakSet,fV=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(sC(this,fW,fX))){null==(b=sC(this,fv))||b.focus(),this.hidden=!0;return}let c=sF(this,f4,f5).call(this,a);!c||c.hasAttribute("disabled")||(sF(this,f8,f9).call(this,c),this.handleSelect(a))},fW=new WeakSet,fX=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},fY=new WeakSet,fZ=function(a){if(a.target===this)return;sF(this,f$,f_).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new sz({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);sF(this,fS,fT).call(this,!0)},f$=new WeakSet,f_=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},f0=new WeakSet,f1=function(a){var b;ot(this,a.relatedTarget)||(sC(this,fz)&&(null==(b=sC(this,fv))||b.focus()),sC(this,fw)&&sC(this,fw)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},f2=new WeakSet,f3=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(sC(this,fz)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=sC(this,fv))||f.focus(),sC(this,fz)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},f4=new WeakSet,f5=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},f6=new WeakSet,f7=function(){return this.items.find(a=>0===a.tabIndex)},f8=new WeakSet,f9=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},ga=new WeakSet,gb=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},sL.shadowRootOptions={mode:"open"},sL.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},oh.customElements.get("media-chrome-menu")||oh.customElements.define("media-chrome-menu",sL);var sO=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},sP=(a,b,c)=>(sO(a,b,"read from private field"),c?c.call(a):b.get(a)),sQ=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},sR=(a,b,c,d)=>(sO(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),sS=(a,b,c)=>(sO(a,b,"access private method"),c);let sT="type",sU="value",sV="checked",sW="disabled";class sX extends oh.HTMLElement{constructor(){if(super(),sQ(this,ge),sQ(this,gg),sQ(this,gi),sQ(this,gl),sQ(this,gn),sQ(this,gp),sQ(this,gc,!1),sQ(this,gd,void 0),sQ(this,gk,()=>{var a,b;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=oi.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const a=oo(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[sT,sW,sV,sU]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),sY(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":sS(this,ge,gf).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":sS(this,gn,go).call(this,a);break;case"keyup":sS(this,gl,gm).call(this,a)}}attributeChangedCallback(a,b,c){a===sV&&sY(this)&&!sP(this,gc)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===sT&&c!==b?this.role="menuitem"+c:a===sW&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(sW)||this.enable(),this.role="menuitem"+this.type,sR(this,gd,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),sS(this,gp,gq).call(this),this.submenuElement&&sS(this,gg,gh).call(this)}disconnectedCallback(){this.disable(),sS(this,gp,gq).call(this),sR(this,gd,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=ow(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(sT))?a:""}set type(a){this.setAttribute(sT,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(sU))?a:this.text}set value(a){this.setAttribute(sU,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(sY(this))return"true"===this.getAttribute("aria-checked")}set checked(a){sY(this)&&(sR(this,gc,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!sY(this)&&this.invokeTargetElement&&ot(this,a.target)&&this.invokeTargetElement.dispatchEvent(new sz({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function sY(a){return"radio"===a.type||"checkbox"===a.type}gc=new WeakMap,gd=new WeakMap,ge=new WeakSet,gf=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?sS(this,gg,gh).call(this):sS(this,gi,gj).call(this))},gg=new WeakSet,gh=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",sP(this,gk)),this.submenuElement.addEventListener("addmenuitem",sP(this,gk)),this.submenuElement.addEventListener("removemenuitem",sP(this,gk)),sP(this,gk).call(this)},gi=new WeakSet,gj=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",sP(this,gk)),this.submenuElement.removeEventListener("addmenuitem",sP(this,gk)),this.submenuElement.removeEventListener("removemenuitem",sP(this,gk)),sP(this,gk).call(this)},gk=new WeakMap,gl=new WeakSet,gm=function(a){let{key:b}=a;this.keysUsed.includes(b)?this.handleClick(a):this.removeEventListener("keyup",sS(this,gl,gm))},gn=new WeakSet,go=function(a){let{metaKey:b,altKey:c,key:d}=a;b||c||!this.keysUsed.includes(d)?this.removeEventListener("keyup",sS(this,gl,gm)):this.addEventListener("keyup",sS(this,gl,gm),{once:!0})},gp=new WeakSet,gq=function(){var a;let b=null==(a=sP(this,gd))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},sX.shadowRootOptions={mode:"open"},sX.getTemplateHTML=function(a){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(a)}
    </slot>
    <slot name="submenu"></slot>
  `},sX.getSuffixSlotInnerHTML=function(a){return""},oh.customElements.get("media-chrome-menu-item")||oh.customElements.define("media-chrome-menu-item",sX);class sZ extends sL{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:op(this).querySelector("media-settings-menu-button")}}sZ.getTemplateHTML=function(a){return`
    ${sL.getTemplateHTML(a)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},oh.customElements.get("media-settings-menu")||oh.customElements.define("media-settings-menu",sZ);class s$ extends sX{}s$.shadowRootOptions={mode:"open"},s$.getTemplateHTML=function(a){return`
    ${sX.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},s$.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},oh.customElements.get("media-settings-menu-item")||oh.customElements.define("media-settings-menu-item",s$);class s_ extends qf{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=ow(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new sz({relatedTarget:this}))}}oh.customElements.get("media-chrome-menu-button")||oh.customElements.define("media-chrome-menu-button",s_);class s0 extends s_{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",oa("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:op(this).querySelector("media-settings-menu")}}s0.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},s0.getTooltipContentHTML=function(){return oa("Settings")},oh.customElements.get("media-settings-menu-button")||oh.customElements.define("media-settings-menu-button",s0);var s1=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},s2=(a,b,c)=>(s1(a,b,"read from private field"),c?c.call(a):b.get(a)),s3=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},s4=(a,b,c,d)=>(s1(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),s5=(a,b,c)=>(s1(a,b,"access private method"),c);gr=new WeakMap,gs=new WeakMap,gt=new WeakSet,gu=function(){if(s2(this,gs)===JSON.stringify(this.mediaAudioTrackList))return;s4(this,gs,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=sG({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(sH(this,"checked-indicator")),this.defaultSlot.append(a)}},gv=new WeakSet,gw=function(){if(null==this.value)return;let a=new oh.CustomEvent(nI.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},oh.customElements.get("media-audio-track-menu")||oh.customElements.define("media-audio-track-menu",class extends sL{constructor(){super(...arguments),s3(this,gt),s3(this,gv),s3(this,gr,[]),s3(this,gs,void 0)}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_AUDIO_TRACK_LIST,nM.MEDIA_AUDIO_TRACK_ENABLED,nM.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===nM.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===nM.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;s4(this,gr,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(n_)),s5(this,gt,gu).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",s5(this,gv,gw))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",s5(this,gv,gw))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=op(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return s2(this,gr)}set mediaAudioTrackList(a){s4(this,gr,a),s5(this,gt,gu).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=oE(this,nM.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){oF(this,nM.MEDIA_AUDIO_TRACK_ENABLED,a)}});let s6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,s7=a=>{let b=oa("Audio");a.setAttribute("aria-label",b)};class s8 extends s_{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_AUDIO_TRACK_ENABLED,nM.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),s7(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_LANG&&s7(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=op(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=oE(this,nM.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){oF(this,nM.MEDIA_AUDIO_TRACK_ENABLED,a)}}s8.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${s6}</slot>
  `},s8.getTooltipContentHTML=function(){return oa("Audio")},oh.customElements.get("media-audio-track-menu-button")||oh.customElements.define("media-audio-track-menu-button",s8);var s9=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ta=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},tb=(a,b,c)=>(s9(a,b,"access private method"),c);let tc=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class td extends sL{constructor(){super(...arguments),ta(this,gy),ta(this,gA),ta(this,gx,void 0)}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_SUBTITLES_LIST,nM.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_SUBTITLES_LIST&&b!==c?tb(this,gy,gz).call(this):a===nM.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tb(this,gA,gB))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tb(this,gA,gB))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:op(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return te(this,nM.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){tf(this,nM.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return te(this,nM.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){tf(this,nM.MEDIA_SUBTITLES_SHOWING,a)}}gx=new WeakMap,gy=new WeakSet,gz=function(){var a,b,c,d,e,f;if(s9(this,b=gx,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=gx,e=JSON.stringify(this.mediaSubtitlesList),s9(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=sG({type:"radio",text:this.formatMenuItemText(oa("Off")),value:"off",checked:g});for(let b of(h.prepend(sH(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=sG({type:"radio",text:this.formatMenuItemText(b.label,b),value:o6(b),checked:this.value==o6(b)});c.prepend(sH(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(sH(this,"captions-indicator")),this.defaultSlot.append(c)}},gA=new WeakSet,gB=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(nM.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new oh.CustomEvent(nI.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new oh.CustomEvent(nI.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},td.getTemplateHTML=function(a){return`
    ${sL.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${tc}</slot>
  `};let te=(a,b)=>{let c=a.getAttribute(b);return c?o4(c):[]},tf=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=o7(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};oh.customElements.get("media-captions-menu")||oh.customElements.define("media-captions-menu",td);let tg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,th=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ti=a=>{a.setAttribute("data-captions-enabled",pb(a).toString())},tj=a=>{a.setAttribute("aria-label",oa("closed captions"))};class tk extends s_{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_SUBTITLES_LIST,nM.MEDIA_SUBTITLES_SHOWING,nM.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),tj(this),ti(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_SUBTITLES_SHOWING?ti(this):a===nM.MEDIA_LANG&&tj(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=op(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return tl(this,nM.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){tm(this,nM.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return tl(this,nM.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){tm(this,nM.MEDIA_SUBTITLES_SHOWING,a)}}tk.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${tg}</slot>
      <slot name="off">${th}</slot>
    </slot>
  `},tk.getTooltipContentHTML=function(){return oa("Captions")};let tl=(a,b)=>{let c=a.getAttribute(b);return c?o4(c):[]},tm=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=o7(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};oh.customElements.get("media-captions-menu-button")||oh.customElements.define("media-captions-menu-button",tk);var tn=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},to=(a,b,c)=>(tn(a,b,"read from private field"),c?c.call(a):b.get(a)),tp=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},tq=(a,b,c)=>(tn(a,b,"access private method"),c);let tr="rates";gC=new WeakMap,gD=new WeakSet,gE=function(){for(let a of(this.defaultSlot.textContent="",to(this,gC))){let b=sG({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(sH(this,"checked-indicator")),this.defaultSlot.append(b)}},gF=new WeakSet,gG=function(){if(!this.value)return;let a=new oh.CustomEvent(nI.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},oh.customElements.get("media-playback-rate-menu")||oh.customElements.define("media-playback-rate-menu",class extends sL{constructor(){super(),tp(this,gD),tp(this,gF),tp(this,gC,new o2(this,tr,{defaultValue:rm})),tq(this,gD,gE).call(this)}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PLAYBACK_RATE,tr]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===nM.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===tr&&b!=c&&(to(this,gC).value=c,tq(this,gD,gE).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tq(this,gF,gG))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tq(this,gF,gG))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:op(this).querySelector("media-playback-rate-menu-button")}get rates(){return to(this,gC)}set rates(a){a?Array.isArray(a)?to(this,gC).value=a.join(" "):"string"==typeof a&&(to(this,gC).value=a):to(this,gC).value="",tq(this,gD,gE).call(this)}get mediaPlaybackRate(){return oA(this,nM.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){oB(this,nM.MEDIA_PLAYBACK_RATE,a)}});class ts extends s_{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===nM.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",oa("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:op(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return oA(this,nM.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){oB(this,nM.MEDIA_PLAYBACK_RATE,a)}}ts.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},ts.getTooltipContentHTML=function(){return oa("Playback rate")},oh.customElements.get("media-playback-rate-menu-button")||oh.customElements.define("media-playback-rate-menu-button",ts);var tt=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},tu=(a,b,c)=>(tt(a,b,"read from private field"),c?c.call(a):b.get(a)),tv=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},tw=(a,b,c,d)=>(tt(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),tx=(a,b,c)=>(tt(a,b,"access private method"),c);gH=new WeakMap,gI=new WeakMap,gJ=new WeakSet,gK=function(){if(tu(this,gI).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&tu(this,gI).mediaHeight===this.mediaHeight)return;tu(this,gI).mediaRenditionList=JSON.stringify(this.mediaRenditionList),tu(this,gI).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort(this.compareRendition.bind(this)),b=a.find(a=>a.id===this.mediaRenditionSelected);for(let c of a)c.selected=c===b;this.defaultSlot.textContent="";let c=!this.mediaRenditionSelected;for(let b of a){let a=sG({type:"radio",text:this.formatRendition(b,{showBitrate:this.showRenditionBitrate(b)}),value:`${b.id}`,checked:b.selected&&!c});a.prepend(sH(this,"checked-indicator")),this.defaultSlot.append(a)}let d=b&&this.showRenditionBitrate(b),e=c?b?this.formatMenuItemText(`${oa("Auto")} \u2022 ${this.formatRendition(b,{showBitrate:d})}`,b):this.formatMenuItemText(`${oa("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(oa("Auto")),f=sG({type:"radio",text:e,value:"auto",checked:c});f.dataset.description=e,f.prepend(sH(this,"checked-indicator")),this.defaultSlot.append(f)},gL=new WeakSet,gM=function(){if(null==this.value)return;let a=new oh.CustomEvent(nI.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},oh.customElements.get("media-rendition-menu")||oh.customElements.define("media-rendition-menu",class extends sL{constructor(){super(...arguments),tv(this,gJ),tv(this,gL),tv(this,gH,[]),tv(this,gI,{})}static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_RENDITION_LIST,nM.MEDIA_RENDITION_SELECTED,nM.MEDIA_RENDITION_UNAVAILABLE,nM.MEDIA_HEIGHT]}static formatMenuItemText(a,b){return super.formatMenuItemText(a,b)}static formatRendition(a,{showBitrate:b=!1}={}){let c=`${Math.min(a.width,a.height)}p`;if(b&&a.bitrate){let b=a.bitrate/1e6,d=`${b.toFixed(+(b<1))} Mbps`;return`${c} (${d})`}return this.formatMenuItemText(c,a)}static compareRendition(a,b){var c,d;return b.height===a.height?(null!=(c=b.bitrate)?c:0)-(null!=(d=a.bitrate)?d:0):b.height-a.height}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===nM.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",tx(this,gJ,gK).call(this);else if(a===nM.MEDIA_RENDITION_LIST&&b!==c)tw(this,gH,null==c?void 0:c.split(/\s+/).map(nZ)),tx(this,gJ,gK).call(this);else a===nM.MEDIA_HEIGHT&&b!==c&&tx(this,gJ,gK).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tx(this,gL,gM))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tx(this,gL,gM))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:op(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return tu(this,gH)}set mediaRenditionList(a){tw(this,gH,a),tx(this,gJ,gK).call(this)}get mediaRenditionSelected(){return oE(this,nM.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){oF(this,nM.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return oA(this,nM.MEDIA_HEIGHT)}set mediaHeight(a){oB(this,nM.MEDIA_HEIGHT,a)}compareRendition(a,b){return this.constructor.compareRendition(a,b)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}formatRendition(a,b){return this.constructor.formatRendition(a,b)}showRenditionBitrate(a){return this.mediaRenditionList.some(b=>b!==a&&b.height===a.height&&b.bitrate!==a.bitrate)}});let ty=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class tz extends s_{static get observedAttributes(){return[...super.observedAttributes,nM.MEDIA_RENDITION_SELECTED,nM.MEDIA_RENDITION_UNAVAILABLE,nM.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",oa("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:op(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return oE(this,nM.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){oF(this,nM.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return oA(this,nM.MEDIA_HEIGHT)}set mediaHeight(a){oB(this,nM.MEDIA_HEIGHT,a)}}tz.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ty}</slot>
  `},tz.getTooltipContentHTML=function(){return oa("Quality")},oh.customElements.get("media-rendition-menu-button")||oh.customElements.define("media-rendition-menu-button",tz);let tA=oh.document?.createElement?.("template");tA&&(tA.innerHTML=`
    <style>
      *,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.relative{position:relative}.left-px{left:1px}.order-first{order:-9999}.m-2{margin:.5rem}.mx-3{margin-left:.75rem;margin-right:.75rem}.mx-4{margin-left:1rem;margin-right:1rem}.block{display:block}.flex{display:flex}.hidden{display:none}.h-10{height:2.5rem}.h-2{height:.5rem}.h-20{height:5rem}.h-5{height:1.25rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-full{height:100%}.min-h-0{min-height:0}.w-10{width:2.5rem}.w-5{width:1.25rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-full{width:100%}.items-center{align-items:center}.justify-between{justify-content:space-between}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border-l{border-left-width:1px}.border-slate-700/10{border-color:rgba(51,65,85,.1)}.bg-secondary{background-color:var(--media-secondary-color,#fff)}.bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252/var(--tw-bg-opacity,1))}.bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity,1))}.fill-none{fill:none}.fill-slate-500{fill:#64748b}.stroke-slate-500{stroke:#64748b}.p-0{padding:0}.p-2{padding:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105/var(--tw-text-opacity,1))}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-black/5{--tw-shadow-color:rgba(0,0,0,.05);--tw-shadow:var(--tw-shadow-colored)}.@container{container-type:inline-size}.hover:bg-slate-900:hover{--tw-bg-opacity:1;background-color:rgb(15 23 42/var(--tw-bg-opacity,1))}.focus:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus:ring-slate-700:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(51 65 85/var(--tw-ring-opacity,1))}.focus:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible:ring-slate-700:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(51 65 85/var(--tw-ring-opacity,1))}.group:hover .group-hover:fill-slate-700{fill:#334155}.group:hover .group-hover:stroke-slate-700{stroke:#334155}@container (min-width: 28rem){.@md:order-none{order:0}.@md:block{display:block}.@md:hidden{display:none}.@md:h-16{height:4rem}.@md:rounded-md{border-radius:.375rem}.@md:ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.@md:ring-slate-700/10{--tw-ring-color:rgba(51,65,85,.1)}}</style>

    <svg class="hidden">
      <symbol
        id="backward"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"
        ></path>
        <path d="M5 15V19"></path>
        <path
          d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523
            10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"
        ></path>
      </symbol>

      <symbol id="play" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0
            3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clip-rule="evenodd"
        />
      </symbol>

      <symbol id="pause" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0
          01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0
          01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
          clip-rule="evenodd"
        />
      </symbol>

      <symbol id="forward" viewBox="0 0 24 24">
        <path
          d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M13 15V19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18
          19H17C16.4477 19 16 18.5523 16 18Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </symbol>

      <symbol id="high" viewBox="0 0 24 24">
        <path
          d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0
          001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276
          2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06
          8.25 8.25 0 000-11.668.75.75 0 010-1.06z"
        ></path>
        <path
          d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0
          010-1.06z"
        ></path>
      </symbol>

      <symbol id="off" viewBox="0 0 24 24">
        <path
          d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0
          001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276
          2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72
          1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"
        />
      </symbol>
    </svg>

    <media-controller
      audio
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
      class="@container block w-full shadow-xl shadow-black/5"
      style="
        --media-background-color: transparent;
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-tooltip-display: none;
      "
    >
      <slot name="media" slot="media"></slot>

      <media-time-range
        class="block @md:hidden w-full h-2 min-h-0 p-0 bg-slate-50 focus-visible:ring-slate-700 focus-visible:ring-2"
        style="
          --media-range-track-background: transparent;
          --media-time-range-buffered-color: rgb(0 0 0 / 0.02);
          --media-range-bar-color: var(--media-accent-color, rgb(79 70 229));
          --media-range-track-height: 0.5rem;
          --media-range-thumb-background: var(--media-accent-color, rgb(79 70 229));
          --media-range-thumb-box-shadow: 0 0 0 2px var(--media-secondary-color, rgb(255 255 255 / 0.9));
          --media-range-thumb-width: 0.25rem;
          --media-range-thumb-height: 1rem;
          --media-preview-time-text-shadow: transparent;
        "
      >
        <media-preview-time-display
          slot="preview"
          class="text-slate-600 text-xs"
        ></media-preview-time-display>
      </media-time-range>

      <media-control-bar
        class="h-20 @md:h-16 px-4 w-full flex items-center justify-between @md:rounded-md @md:ring-1 @md:ring-slate-700/10 bg-secondary"
      >
        <media-seek-backward-button
          seekoffset="10"
          class="w-8 h-8 p-0 group rounded-full focus:outline-none focus-visible:ring-slate-700 focus-visible:ring-2"
        >
          <svg
            slot="icon"
            aria-hidden="true"
            class="w-7 h-7 fill-none stroke-slate-500 group-hover:stroke-slate-700"
          >
            <use href="#backward" />
          </svg>
        </media-seek-backward-button>

        <media-play-button
          class="h-10 w-10 p-2 mx-3 rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700 focus:ring-2 focus:ring-offset-2"
          style="--media-primary-color: #fff"
        >
          <svg slot="play" aria-hidden="true" class="relative left-px">
            <use href="#play" />
          </svg>
          <svg slot="pause" aria-hidden="true">
            <use href="#pause" />
          </svg>
        </media-play-button>

        <media-seek-forward-button
          seekoffset="10"
          class="w-8 h-8 p-0 group relative rounded-full focus:outline-none focus-visible:ring-slate-700 focus-visible:ring-2"
        >
          <svg
            slot="icon"
            aria-hidden="true"
            class="w-7 h-7 fill-none stroke-slate-500 group-hover:stroke-slate-700"
          >
            <use href="#forward" />
          </svg>
        </media-seek-forward-button>

        <div class="hidden @md:block h-full border-l border-slate-700/10 mx-4"></div>

        <media-time-display
          class="hidden @md:block text-slate-500 text-sm rounded-md focus:outline-none focus:ring-slate-700 focus:ring-2"
        ></media-time-display>

        <media-time-range
          class="hidden @md:block h-2 min-h-0 p-0 m-2 rounded-md bg-slate-50 focus-visible:ring-slate-700 focus-visible:ring-2"
          style="
            --media-range-track-background: transparent;
            --media-time-buffered-color: rgb(0 0 0 / 0.02);
            --media-range-bar-color: var(--media-accent-color, rgb(79 70 229));
            --media-range-track-border-radius: 4px;
            --media-range-track-height: 0.5rem;
            --media-range-thumb-background: var(--media-accent-color, rgb(79 70 229));
            --media-range-thumb-box-shadow: 0 0 0 2px var(--media-secondary-color, rgb(255 255 255 / 0.9));
            --media-range-thumb-width: 0.25rem;
            --media-range-thumb-height: 1rem;
            --media-preview-time-text-shadow: transparent;
          "
        >
          <media-preview-time-display
            slot="preview"
            class="text-slate-600 text-xs"
          ></media-preview-time-display>
        </media-time-range>

        <media-duration-display
          class="hidden @md:block text-slate-500 text-sm"
        ></media-duration-display>

        <media-playback-rate-button
          class="text-slate-500 rounded-md focus:outline-none focus-visible:ring-slate-700 focus-visible:ring-2"
        ></media-playback-rate-button>

        <media-mute-button
          class="group relative order-first @md:order-none rounded-md focus:outline-none focus-visible:ring-slate-700 focus-visible:ring-2"
        >
          <svg
            slot="high"
            aria-hidden="true"
            class="h-5 w-5 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
          >
            <use href="#high" />
          </svg>
          <svg
            slot="medium"
            aria-hidden="true"
            class="h-5 w-5 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
          >
            <use href="#high" />
          </svg>
          <svg
            slot="low"
            aria-hidden="true"
            class="h-5 w-5 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
          >
            <use href="#high" />
          </svg>
          <svg
            slot="off"
            aria-hidden="true"
            class="h-5 w-5 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
          >
            <use href="#off" />
          </svg>
        </media-mute-button>
      </media-control-bar>
    </media-controller>

  `);class tB extends sw{static template=tA}oh.customElements&&!oh.customElements.get("media-theme-tailwind-audio")&&oh.customElements.define("media-theme-tailwind-audio",tB);var tC=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),tD={className:"class",htmlFor:"for"},tE=function({react:a,tagName:b,elementClass:c,events:d,displayName:e,toAttributeName:f=function(a){return a.toLowerCase()},toAttributeValue:g=function(a){return"boolean"==typeof a?a?"":void 0:"function"==typeof a?void 0:"object"!=typeof a||null===a?a:void 0}}){let h=Number.parseInt(a.version)>=19,i=a.forwardRef((d,e)=>{let i=a.useRef(null);a.useRef(new Map);let j={},k={},l={},m={};for(let[a,b]of Object.entries(d)){if(tC.has(a)){l[a]=b;continue}let d=f(tD[a]??a);if(a in c.prototype&&!(a in(globalThis.HTMLElement?.prototype??{}))&&!c.observedAttributes?.some(a=>a===d)){m[a]=b;continue}if(a.startsWith("on")){j[a]=b;continue}let e=g(b);d&&null!=e&&(k[d]=String(e),h||(l[d]=e)),d&&h&&(l[d]=b)}if(c?.getTemplateHTML&&c?.shadowRootOptions){let{mode:b,delegatesFocus:d}=c.shadowRootOptions;l.children=[a.createElement("template",{shadowrootmode:b,shadowrootdelegatesfocus:d,dangerouslySetInnerHTML:{__html:c.getTemplateHTML(k)}}),l.children]}return a.createElement(b,{...l,ref:a.useCallback(a=>{i.current=a,"function"==typeof e?e(a):null!==e&&(e.current=a)},[e])})});return i.displayName=e??c.name,i}({react:gO.default,tagName:"media-theme-tailwind-audio",elementClass:tB});let tF=function({audioUrl:a}){return(0,gN.jsxs)("div",{className:"w-full max-w-full relative",dir:"ltr",children:[(0,gN.jsx)(tE,{style:{width:"100%","--media-accent-color":"var(--primary)"},children:(0,gN.jsx)("audio",{slot:"media",src:a,playsInline:!0,crossOrigin:"anonymous"})})," "]})};var tG=a.i(23292),tH=a.i(70106);let tI=(0,tH.default)("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);var tJ=a.i(91119),tK=a.i(46872),tL=a.i(72752);a.i(35112);var tM=a.i(11011),tN=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((a,b)=>{let c=(0,tM.createSlot)(`Primitive.${b}`),d=gO.forwardRef((a,d)=>{let{asChild:e,...f}=a;return(0,gN.jsx)(e?c:b,{...f,ref:d})});return d.displayName=`Primitive.${b}`,{...a,[b]:d}},{}),tO=a.i(87610);function tP(){return()=>{}}var tQ="Avatar",[tR,tS]=function(a,b=[]){let c=[],d=()=>{let b=c.map(a=>gO.createContext(a));return function(c){let d=c?.[a]||b;return gO.useMemo(()=>({[`__scope${a}`]:{...c,[a]:d}}),[c,d])}};return d.scopeName=a,[function(b,d){let e=gO.createContext(d);e.displayName=b+"Context";let f=c.length;c=[...c,d];let g=b=>{let{scope:c,children:d,...g}=b,h=c?.[a]?.[f]||e,i=gO.useMemo(()=>g,Object.values(g));return(0,gN.jsx)(h.Provider,{value:i,children:d})};return g.displayName=b+"Provider",[g,function(c,g){let h=g?.[a]?.[f]||e,i=gO.useContext(h);if(i)return i;if(void 0!==d)return d;throw Error(`\`${c}\` must be used within \`${b}\``)}]},function(...a){let b=a[0];if(1===a.length)return b;let c=()=>{let c=a.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(a){let d=c.reduce((b,{useScope:c,scopeName:d})=>{let e=c(a)[`__scope${d}`];return{...b,...e}},{});return gO.useMemo(()=>({[`__scope${b.scopeName}`]:d}),[d])}};return c.scopeName=b.scopeName,c}(d,...b)]}(tQ),[tT,tU]=tR(tQ),tV=gO.forwardRef((a,b)=>{let{__scopeAvatar:c,...d}=a,[e,f]=gO.useState("idle");return(0,gN.jsx)(tT,{scope:c,imageLoadingStatus:e,onImageLoadingStatusChange:f,children:(0,gN.jsx)(tN.span,{...d,ref:b})})});tV.displayName=tQ;var tW="AvatarImage",tX=gO.forwardRef((a,b)=>{let{__scopeAvatar:c,src:d,onLoadingStatusChange:e=()=>{},...f}=a,g=tU(tW,c),h=function(a,{referrerPolicy:b,crossOrigin:c}){let d=(0,tO.useSyncExternalStore)(tP,()=>!0,()=>!1),e=gO.useRef(null),f=d?(e.current||(e.current=new window.Image),e.current):null,[g,h]=gO.useState(()=>t$(f,a));return(0,tL.useLayoutEffect)(()=>{h(t$(f,a))},[f,a]),(0,tL.useLayoutEffect)(()=>{let a=a=>()=>{h(a)};if(!f)return;let d=a("loaded"),e=a("error");return f.addEventListener("load",d),f.addEventListener("error",e),b&&(f.referrerPolicy=b),"string"==typeof c&&(f.crossOrigin=c),()=>{f.removeEventListener("load",d),f.removeEventListener("error",e)}},[f,c,b]),g}(d,f),i=(0,tK.useCallbackRef)(a=>{e(a),g.onImageLoadingStatusChange(a)});return(0,tL.useLayoutEffect)(()=>{"idle"!==h&&i(h)},[h,i]),"loaded"===h?(0,gN.jsx)(tN.img,{...f,ref:b,src:d}):null});tX.displayName=tW;var tY="AvatarFallback",tZ=gO.forwardRef((a,b)=>{let{__scopeAvatar:c,delayMs:d,...e}=a,f=tU(tY,c),[g,h]=gO.useState(void 0===d);return gO.useEffect(()=>{if(void 0!==d){let a=window.setTimeout(()=>h(!0),d);return()=>window.clearTimeout(a)}},[d]),g&&"loaded"!==f.imageLoadingStatus?(0,gN.jsx)(tN.span,{...e,ref:b}):null});function t$(a,b){return a?b?(a.src!==b&&(a.src=b),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function t_({className:a,...b}){return(0,gN.jsx)(tV,{"data-slot":"avatar",className:(0,hj.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full",a),...b})}function t0({className:a,...b}){return(0,gN.jsx)(tX,{"data-slot":"avatar-image",className:(0,hj.cn)("aspect-square size-full",a),...b})}function t1({className:a,...b}){return(0,gN.jsx)(tZ,{"data-slot":"avatar-fallback",className:(0,hj.cn)("bg-muted flex size-full items-center justify-center rounded-full",a),...b})}tZ.displayName=tY;var t2=a.i(29246),t3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((a,b)=>{let c=(0,tM.createSlot)(`Primitive.${b}`),d=gO.forwardRef((a,d)=>{let{asChild:e,...f}=a;return(0,gN.jsx)(e?c:b,{...f,ref:d})});return d.displayName=`Primitive.${b}`,{...a,[b]:d}},{}),t4="horizontal",t5=["horizontal","vertical"],t6=gO.forwardRef((a,b)=>{var c;let{decorative:d,orientation:e=t4,...f}=a,g=(c=e,t5.includes(c))?e:t4;return(0,gN.jsx)(t3.div,{"data-orientation":g,...d?{role:"none"}:{"aria-orientation":"vertical"===g?g:void 0,role:"separator"},...f,ref:b})});function t7({className:a,orientation:b="horizontal",decorative:c=!0,...d}){return(0,gN.jsx)(t6,{"data-slot":"separator",decorative:c,orientation:b,className:(0,hj.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",a),...d})}t6.displayName="Separator";var t8=a.i(57875),t9=a.i(38298),ua=a.i(18402);let ub=(0,tH.default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);function uc({executionId:a,lessonId:b,comments:c}){let[d,{isLoading:e}]=(0,t8.useAddCommentMutation)(),[f]=(0,t8.useDeleteCommentMutation)(),[g,h]=(0,gO.useState)(""),[i,j]=(0,gO.useState)([]),{success:k,error:l}=(0,t9.useToastMessage)(),{data:m}=(0,ua.useSession)();(0,gO.useEffect)(()=>{c?.length>0&&j(c)},[c]);let n=async()=>{let c=g.trim();if(c)try{let e,f,g,i=await d({ExecutionId:a,LessonId:b,Comment:c}).unwrap();console.log(i),k("تمت إضافة تعليقك بنجاح"),h("");let l={Id:crypto.randomUUID(),CommentId:i.Data?.CommentId||"",Comment:c,Date:(f=(e=new Date).toLocaleDateString("en-CA"),g=e.toLocaleTimeString("ar-EG",{hour:"2-digit",minute:"2-digit",hour12:!0}),`${f} ${g}`),LessonId:b,UserId:m?.user?.UserId||"",PersonName:m?.user?.StudentName||"user",Image:m?.user?.StudentImage||""};j(a=>[l,...a])}catch(a){console.log(a)}};console.log(m?.user?.UserId);let o=async c=>{try{let d=await f({CommentId:c,ExecutionId:a,LessonId:b}).unwrap();console.log(d),d?.Status==!0&&j(a=>a.filter(a=>a.Id!==c)),k("تم حذف التعليق بنجاح")}catch(a){l(a?.Message||"حدث خطأ يرجى المحاولة مرة اخرى")}};return(0,gN.jsxs)(tJ.Card,{className:"w-full mt-6 shadow-none",children:[(0,gN.jsx)(tJ.CardHeader,{children:(0,gN.jsx)("h3",{className:"text-xl font-semibold",children:"التعليقات"})}),(0,gN.jsxs)(tJ.CardContent,{className:"space-y-5",children:[(0,gN.jsxs)("div",{className:"flex gap-3",children:[(0,gN.jsx)(t_,{children:m?.user?.StudentImage?(0,gN.jsx)(t0,{src:m.user.StudentImage}):(0,gN.jsx)(t1,{children:"أ"})}),(0,gN.jsxs)("div",{className:"w-full",children:[(0,gN.jsx)(t2.Textarea,{placeholder:"اكتب تعليقك هنا...",value:g,onChange:a=>h(a.target.value),rows:3}),(0,gN.jsx)("div",{className:"flex justify-end mt-2",children:(0,gN.jsx)(gP.Button,{type:"button",onClick:n,disabled:0===g.trim().length,children:"إضافة تعليق"})})]})]}),(0,gN.jsx)(t7,{}),(0,gN.jsx)("div",{className:"space-y-4",children:i.map(a=>(0,gN.jsxs)("div",{className:"flex gap-3 items-start justify-between",children:[(0,gN.jsxs)("div",{className:"flex gap-3",children:[(0,gN.jsxs)(t_,{children:[(0,gN.jsx)(t0,{src:a?.Image}),(0,gN.jsx)(t1,{children:a?.PersonName[0]})]}),(0,gN.jsxs)("div",{children:[(0,gN.jsxs)("p",{dir:"rtl",className:"font-medium text-start",children:[a.PersonName," • ",(0,gN.jsx)("span",{className:"text-sm text-muted-foreground",children:a.Date})]}),(0,gN.jsx)("p",{className:"text-sm mt-1 whitespace-pre-line",children:a.Comment})]})]}),m?.user?.UserId==a.UserId&&(0,gN.jsx)(gP.Button,{variant:"ghost",size:"icon",onClick:()=>o(a.Id),className:"text-red-500 hover:text-red-700 hover:bg-red-50",children:(0,gN.jsx)(ub,{size:18})})]},a.Id))})]})]})}a.s([],92326);let ud="meet.jit.si",ue=0,uf=a=>`${a}-${ue++}`,ug=({domain:a=ud,roomName:b,configOverwrite:c,interfaceConfigOverwrite:d,jwt:e,invitees:f,devices:g,userInfo:h,release:j,lang:k,spinner:l,onApiReady:m,onReadyToClose:n,getIFrameRef:o})=>{let[p,q]=(0,gO.useState)(!0),[r,s]=(0,gO.useState)(!1),t=(0,gO.useRef)(),u=(0,gO.useRef)(),v=(0,gO.useRef)(null),w=(0,gO.useMemo)(()=>uf("jitsiMeeting"),[uf]);(0,gO.useEffect)(()=>{((a=ud,b,c)=>{var d,e,f,g;return i?i:(d=void 0,e=void 0,f=void 0,g=function*(){return new Promise((d,e)=>{if(window.JitsiMeetExternalAPI)return d(window.JitsiMeetExternalAPI);let f=document.createElement("script"),g=b?`?release=${b}`:"",h=c?`${c}/`:"";f.async=!0,f.src=`https://${a}/${h}external_api.js${g}`,f.onload=()=>d(window.JitsiMeetExternalAPI),f.onerror=()=>e(Error(`Script load error: ${f.src}`)),document.head.appendChild(f)})},i=new(f||(f=Promise))(function(a,b){function c(a){try{i(g.next(a))}catch(a){b(a)}}function h(a){try{i(g.throw(a))}catch(a){b(a)}}function i(b){var d;b.done?a(b.value):((d=b.value)instanceof f?d:new f(function(a){a(d)})).then(c,h)}i((g=g.apply(d,e||[])).next())}))})(a,j,(a=>{let b=a.split("/");if(!(b.length<=1))return b[0]})(b)).then(a=>{t.current=a,s(!0)}).catch(a=>console.error(a.message))},[]);let x=(0,gO.useCallback)(i=>{u.current=new i(a,{roomName:b,configOverwrite:c,interfaceConfigOverwrite:d,jwt:e,invitees:f,devices:g,userInfo:h,release:j,lang:k,parentNode:v.current}),q(!1),u.current&&("function"==typeof m&&m(u.current),u.current.on("readyToClose",()=>{"function"==typeof n&&n()}),v.current&&"function"==typeof o&&o(v.current))},[u,v,m,n,o,a,b,c,d,e,f,g,h,j,k]);(0,gO.useEffect)(()=>{r&&!u.current&&t.current&&x(t.current)},[r,x]);let y=(0,gO.useCallback)(()=>l&&p&&!u.current?(0,gN.jsx)(l,{},void 0):null,[l,u.current]);return(0,gN.jsxs)(gN.Fragment,{children:[y(),(0,gN.jsx)("div",{id:w,ref:v},w)]},void 0)};a.i(92326);let uh=function(){let[a]=(0,t8.useJoinMeetingMutation)(),[b,c]=(0,gO.useState)(null),[d,e]=(0,gO.useState)(null);return((0,gO.useEffect)(()=>{(async()=>{try{let b=await a().unwrap();console.log("JOIN RESPONSE:",b),c(b.token),e(b.room)}catch(a){console.error("JOIN ERROR:",a)}})()},[a]),b&&d)?(0,gN.jsx)("div",{className:"w-full max-w-full relative",dir:"ltr",children:(0,gN.jsx)(ug,{domain:"vpaas-magic-cookie-adf1099659c94340a841dcc60ff4d3da.8x8.vc",roomName:d,jwt:b,configOverwrite:{startWithAudioMuted:!0,disableModeratorIndicator:!0,startScreenSharing:!0,enableEmailInStats:!1},interfaceConfigOverwrite:{DISABLE_JOIN_LEAVE_NOTIFICATIONS:!0},getIFrameRef:a=>{a.style.height="450px"}})}):(0,gN.jsx)("div",{children:"Loading meeting..."})},ui=(0,gS.default)(async()=>{},{loadableGenerated:{modules:[95981]},ssr:!1});a.s(["default",0,function(){let a=(0,gQ.useParams)(),b=a.type,c=Array.isArray(a.executionId)?a.executionId[0]:a.executionId,d=Array.isArray(a.id)?a.id[0]:a.id,[e,f]=(0,gO.useState)(null),[g,h]=(0,gO.useState)(!1),{error:i}=(0,t9.useToastMessage)(),[j]=(0,t8.useLazyShowVideoQuery)(),[k]=(0,t8.useLazyShowPdfQuery)(),[l]=(0,t8.useLazyShowRichTextQuery)(),[m]=(0,t8.useLazyShowAudioQuery)();(0,gO.useEffect)(()=>{!async function(){h(!0);try{let a;a="video"===b?await j({Id:c,LessonId:d}).unwrap():"pdf"===b?await k({Id:c,LessonId:d}).unwrap():"sound"===b?await m({Id:c,LessonId:d}).unwrap():await l({Id:c,LessonId:d}).unwrap(),f(a.Data??null)}catch(a){console.log(a),i(a?.Message||"حدث خطأ ")}h(!1)}()},[b,c,d]),(0,gO.useEffect)(()=>{console.log(e)},[e]);let[n,o]=(0,gO.useState)([]),[p,q]=(0,gO.useState)({currentTime:0,duration:0,playCount:0,volume:1}),r=async()=>{try{await navigator.clipboard.writeText(window.location.href),tG.toast.success("تم النسخ بنجاح",{description:"يمكنك الآن مشاركة الرابط مع زملائك بسهولة."})}catch{}},s=e?.LessonTitle||"",t=e?.Contents||"",u=e?.Comments||[],v=n.findIndex(a=>String(a.Id)===d),w=v>0?n[v-1]:null,x=-1!==v&&v<n.length-1?n[v+1]:null,y=w?(0,gW.default)(c,w.Id,w.ContentType):null,z=x?(0,gW.default)(c,x.Id,x.ContentType):null;return(0,gN.jsx)("section",{className:"py-8 font-ar-medium",children:(0,gN.jsxs)("div",{className:"container grid lg:grid-cols-12 grid-cols-1 lg:gap-x-12 gap-y-8",children:[(0,gN.jsxs)("div",{className:"lg:col-span-8",children:[(0,gN.jsxs)("div",{className:"flex items-center mb-4 justify-between",children:[(0,gN.jsx)("h1",{className:"text-2xl font-bold ",children:s}),(0,gN.jsx)(gP.Button,{onClick:r,children:(0,gN.jsx)(tI,{})})]}),(()=>{switch(b){case"video":return(0,gN.jsx)(nH,{videoUrl:t,lessonTitle:s,onStatsUpdate:q});case"pdf":return(0,gN.jsx)(ui,{pdfUrl:t});case"sound":return(0,gN.jsx)(tF,{audioUrl:t});case"meeting":return(0,gN.jsx)(uh,{});default:return(0,gN.jsx)(hn,{htmlContent:t})}})(),(0,gN.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[y&&(0,gN.jsx)(gR.default,{href:y,children:(0,gN.jsx)(gP.Button,{variant:"ghost",children:"السابق"})}),z&&(0,gN.jsx)(gR.default,{href:z,children:(0,gN.jsx)(gP.Button,{children:"التالي"})})]}),e?.AllowComment&&(0,gN.jsx)(uc,{comments:u,lessonId:d,executionId:c})]}),(0,gN.jsx)(hm,{lessonId:d,executionId:c,onLessonsLoaded:o})]})})}],9268)}];

//# sourceMappingURL=_ac50fb8a._.js.map