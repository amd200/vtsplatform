(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67585,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let a=e.r(32061);function r({reason:e,children:t}){if("undefined"==typeof window)throw Object.defineProperty(new a.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},9885,(e,t,i)=>{"use strict";function a(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"encodeURIPath",{enumerable:!0,get:function(){return a}})},52157,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"PreloadChunks",{enumerable:!0,get:function(){return o}});let a=e.r(43476),r=e.r(74080),s=e.r(63599),n=e.r(9885);function o({moduleIds:e}){if("undefined"!=typeof window)return null;let t=s.workAsyncStorage.getStore();if(void 0===t)return null;let i=[];if(t.reactLoadableManifest&&e){let a=t.reactLoadableManifest;for(let t of e){if(!a[t])continue;let e=a[t].files;i.push(...e)}}return 0===i.length?null:(0,a.jsx)(a.Fragment,{children:i.map(e=>{let i=`${t.assetPrefix}/_next/${(0,n.encodeURIPath)(e)}`;return e.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:i,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,r.preload)(i,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return d}});let a=e.r(43476),r=e.r(71645),s=e.r(67585),n=e.r(52157);function o(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...l,...e},i=(0,r.lazy)(()=>t.loader().then(o)),d=t.loading;function u(e){let o=d?(0,a.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,l=!t.ssr||!!t.loading,u=l?r.Suspense:r.Fragment,h=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(n.PreloadChunks,{moduleIds:t.modules}):null,(0,a.jsx)(i,{...e})]}):(0,a.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(i,{...e})});return(0,a.jsx)(u,{...l?{fallback:o}:{},children:h})}return u.displayName="LoadableComponent",u}},70703,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return r}});let a=e.r(55682)._(e.r(69093));function r(e,t){let i={};"function"==typeof e&&(i.loader=e);let r={...i,...t};return(0,a.default)({...r,modules:r.loadableGenerated?.modules})}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},55838,(e,t,i)=>{"use strict";var a=e.r(71645),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=a.useState,n=a.useEffect,o=a.useLayoutEffect,l=a.useDebugValue;function d(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!r(e,i)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),a=s({inst:{value:i,getSnapshot:t}}),r=a[0].inst,u=a[1];return o(function(){r.value=i,r.getSnapshot=t,d(r)&&u({inst:r})},[e,i,t]),n(function(){return d(r)&&u({inst:r}),e(function(){d(r)&&u({inst:r})})},[e]),l(i),i};i.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:u},2239,(e,t,i)=>{"use strict";t.exports=e.r(55838)},72734,e=>{"use strict";let t,i,a,r,s,n,o,l;var d,u,h,c,m,p,v,b,g,E,f,w,y,A,k,I,T,M,_,S,x,L,C,R,D,N,P,U,O,H,W,$,B,V,j,G,F,q,z,Q,Z,K,Y,X,J,ee,et,ei,ea,er,es,en,eo,el,ed,eu,eh,ec,em,ep,ev,eb,eg,eE,ef,ew,ey,eA,ek,eI,eT,eM,e_,eS,ex,eL,eC,eR,eD,eN,eP,eU,eO,eH,eW,e$,eB,eV,ej,eG,eF,eq,ez,eQ,eZ,eK,eY,eX,eJ,e0,e1,e2,e5,e3,e4,e7,e8,e6,e9,te,tt,ti,ta,tr,ts,tn,to,tl,td,tu,th,tc,tm,tp,tv,tb,tg,tE,tf,tw,ty,tA,tk,tI,tT,tM,t_,tS,tx,tL,tC,tR,tD,tN,tP,tU,tO,tH,tW,t$,tB,tV,tj,tG,tF,tq,tz,tQ,tZ,tK,tY,tX,tJ,t0,t1,t2,t5,t3,t4,t7,t8,t6,t9,ie,it,ii,ia,ir,is,io,il,id,iu,ih,ic,im,ip,iv,ib,ig,iE,iw,iy,iA,ik,iI,iT,iM,i_,iS,ix,iL,iC,iR,iD,iN,iP,iU,iO,iH,iW,i$,iB,iV,ij,iG,iF,iq,iz,iQ,iZ,iK,iY,iX,iJ,i0,i1,i2,i5,i3,i4,i7,i8,i6,i9,ae,at,ai,aa,ar,as,an,ao,al,ad,au,ah,ac,am,ap,av,ab,ag,aE,af,aw,ay,aA,ak,aI,aT,aM,a_,aS,ax,aL,aC,aR,aD,aN,aP,aU,aO,aH,aW,a$,aB,aV,aj,aG,aF,aq,az,aQ,aZ,aK,aY,aX,aJ,a0,a1,a2,a5,a3,a4,a7,a8,a6,a9,re,rt,ri,ra,rr,rs,rn,ro,rl,rd,ru,rh,rc,rm,rp,rv,rb,rg,rE,rf,rw,ry,rA,rk,rI,rT,rM,r_,rS,rx,rL,rC,rR,rD,rN,rP,rU,rO,rH,rW,r$,rB,rV,rj,rG,rF,rq,rz,rQ,rZ,rK,rY,rX,rJ,r0,r1,r2,r5,r3,r4,r7,r8,r6,r9,se,st,si,sa,sr,ss,sn,so,sl,sd,su,sh,sc,sm,sp,sv,sb,sg,sE,sf,sw,sy,sA,sk,sI,sT,sM,s_,sS,sx,sL,sC,sR,sD,sN,sP,sU,sO,sH,sW,s$,sB,sV,sj,sG,sF,sq,sz,sQ,sZ,sK,sY,sX,sJ,s0,s1,s2,s5,s3,s4,s7,s8,s6,s9,ne,nt,ni,na,nr,ns,nn,no,nl,nd,nu,nh,nc,nm,np,nv,nb,ng,nE,nf,nw,ny,nA,nk,nI,nT,nM,n_,nS,nx,nL,nC,nR,nD,nN,nP,nU,nO,nH,nW,n$=e.i(43476),nB=e.i(71645),nV=e.i(19455),nj=e.i(18566),nG=e.i(22016),nF=e.i(70703),nq=e.i(73443),nz=e.i(78113),nQ=e.i(59660),nZ=e.i(89814),nK=e.i(20783),nY=e.i(30030),nX=e.i(81140),nJ=e.i(69340),n0=e.i(99682),n1=e.i(35804),n2=e.i(96626),n5=e.i(48425),n3="Checkbox",[n4,n7]=(0,nY.createContextScope)(n3),[n8,n6]=n4(n3);function n9(e){let{__scopeCheckbox:t,checked:i,children:a,defaultChecked:r,disabled:s,form:n,name:o,onCheckedChange:l,required:d,value:u="on",internal_do_not_use_render:h}=e,[c,m]=(0,nJ.useControllableState)({prop:i,defaultProp:r??!1,onChange:l,caller:n3}),[p,v]=nB.useState(null),[b,g]=nB.useState(null),E=nB.useRef(!1),f=!p||!!n||!!p.closest("form"),w={checked:c,disabled:s,setChecked:m,control:p,setControl:v,name:o,form:n,value:u,hasConsumerStoppedPropagationRef:E,required:d,defaultChecked:!oo(r)&&r,isFormControl:f,bubbleInput:b,setBubbleInput:g};return(0,n$.jsx)(n8,{scope:t,...w,children:"function"==typeof h?h(w):a})}var oe="CheckboxTrigger",ot=nB.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:i,...a},r)=>{let{control:s,value:n,disabled:o,checked:l,required:d,setControl:u,setChecked:h,hasConsumerStoppedPropagationRef:c,isFormControl:m,bubbleInput:p}=n6(oe,e),v=(0,nK.useComposedRefs)(r,u),b=nB.useRef(l);return nB.useEffect(()=>{let e=s?.form;if(e){let t=()=>h(b.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[s,h]),(0,n$.jsx)(n5.Primitive.button,{type:"button",role:"checkbox","aria-checked":oo(l)?"mixed":l,"aria-required":d,"data-state":ol(l),"data-disabled":o?"":void 0,disabled:o,value:n,...a,ref:v,onKeyDown:(0,nX.composeEventHandlers)(t,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,nX.composeEventHandlers)(i,e=>{h(e=>!!oo(e)||!e),p&&m&&(c.current=e.isPropagationStopped(),c.current||e.stopPropagation())})})});ot.displayName=oe;var oi=nB.forwardRef((e,t)=>{let{__scopeCheckbox:i,name:a,checked:r,defaultChecked:s,required:n,disabled:o,value:l,onCheckedChange:d,form:u,...h}=e;return(0,n$.jsx)(n9,{__scopeCheckbox:i,checked:r,defaultChecked:s,disabled:o,required:n,onCheckedChange:d,name:a,form:u,value:l,internal_do_not_use_render:({isFormControl:e})=>(0,n$.jsxs)(n$.Fragment,{children:[(0,n$.jsx)(ot,{...h,ref:t,__scopeCheckbox:i}),e&&(0,n$.jsx)(on,{__scopeCheckbox:i})]})})});oi.displayName=n3;var oa="CheckboxIndicator",or=nB.forwardRef((e,t)=>{let{__scopeCheckbox:i,forceMount:a,...r}=e,s=n6(oa,i);return(0,n$.jsx)(n2.Presence,{present:a||oo(s.checked)||!0===s.checked,children:(0,n$.jsx)(n5.Primitive.span,{"data-state":ol(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:t,style:{pointerEvents:"none",...e.style}})})});or.displayName=oa;var os="CheckboxBubbleInput",on=nB.forwardRef(({__scopeCheckbox:e,...t},i)=>{let{control:a,hasConsumerStoppedPropagationRef:r,checked:s,defaultChecked:n,required:o,disabled:l,name:d,value:u,form:h,bubbleInput:c,setBubbleInput:m}=n6(os,e),p=(0,nK.useComposedRefs)(i,m),v=(0,n0.usePrevious)(s),b=(0,n1.useSize)(a);nB.useEffect(()=>{if(!c)return;let e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set,t=!r.current;if(v!==s&&e){let i=new Event("click",{bubbles:t});c.indeterminate=oo(s),e.call(c,!oo(s)&&s),c.dispatchEvent(i)}},[c,v,s,r]);let g=nB.useRef(!oo(s)&&s);return(0,n$.jsx)(n5.Primitive.input,{type:"checkbox","aria-hidden":!0,defaultChecked:n??g.current,required:o,disabled:l,name:d,value:u,form:h,...t,tabIndex:-1,ref:p,style:{...t.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});function oo(e){return"indeterminate"===e}function ol(e){return oo(e)?"indeterminate":e?"checked":"unchecked"}on.displayName=os;var od=e.i(78784),ou=e.i(75157);function oh({className:e,...t}){return(0,n$.jsx)(oi,{"data-slot":"checkbox",className:(0,ou.cn)("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,n$.jsx)(or,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:(0,n$.jsx)(od.CheckIcon,{className:"size-3.5"})})})}var oc=e.i(78716);let om=function({executionId:e,lessonId:t,onLessonsLoaded:i}){let{data:a}=(0,nQ.useGetCourseDetailsQuery)(e);return(0,nB.useEffect)(()=>{if(a?.Data?.Chapters){let e=[];a.Data.Chapters.forEach(t=>{t.Lessons?.forEach(t=>{e.push(t)})}),i?.(e)}},[a]),(0,n$.jsx)("div",{className:"lg:col-span-4 col-span-12 ",children:(0,n$.jsxs)("div",{className:"shadow-sm p-4 rounded h-full max-h-[500px] overflow-y-auto",children:[(0,n$.jsx)("h3",{className:"text-lg",children:"تفاصيل الكورس"}),(0,n$.jsx)("div",{children:(0,n$.jsx)(nq.Accordion,{type:"single",collapsible:!0,children:a&&a.Data?.Chapters&&a.Data.Chapters.map(i=>(0,n$.jsxs)(nq.AccordionItem,{value:`item-${i.Id}`,children:[(0,n$.jsxs)(nq.AccordionTrigger,{className:"relative",children:[i.Title,(0,n$.jsx)("div",{className:"absolute end-8 flex items-center gap-x-3",children:(0,n$.jsxs)("div",{className:"flex items-end px-1 py-1 pb-2 rounded text-gray-500 gap-x-1",children:[(0,n$.jsx)(oc.Video,{className:"size-3 text-primary/80"}),(0,n$.jsxs)("span",{className:"text-xs",children:[i.Lessons?.length," درس"]})]})})]}),(0,n$.jsx)(nq.AccordionContent,{children:(0,n$.jsxs)("div",{className:"relative",children:[(0,n$.jsx)("div",{className:"absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"}),(0,n$.jsx)("div",{className:"space-y-2",children:i.Lessons?.map(i=>{let a=(0,nZ.default)(String(e),i.Id,i.ContentType),r=nz.ContentType[i.ContentType],s=i.Id===t;return(0,n$.jsxs)("div",{className:"relative flex flex-col group",children:[(0,n$.jsx)("div",{className:"absolute start-2 top-1/2 -translate-y-1/2 bg-white py-1",children:(0,n$.jsx)(oh,{})}),(0,n$.jsx)("div",{className:"mr-5 flex-1 cursor-pointer p-4",children:(0,n$.jsxs)("div",{className:"flex justify-between items-start",children:[(0,n$.jsxs)("div",{className:"flex-1",children:[(0,n$.jsx)("h3",{className:"text-sm text-gray-800",children:i.Title}),(0,n$.jsxs)("div",{className:"flex items-center gap-x-2 mt-1 text-sm text-gray-600",children:[(0,n$.jsx)("span",{className:"size-2 rounded-full bg-primary"}),(0,n$.jsxs)("span",{className:"text-xs",children:["20 دقيقة | ",r]})]})]}),(0,n$.jsx)(nV.Button,{size:"sm",className:"px-3 text-sm",asChild:!0,children:s?(0,n$.jsx)("span",{className:"",children:"أنت هنا"}):(0,n$.jsx)(nG.default,{href:a,children:"ابدأ"})})]})})]},i.Id)})})]})})]},i.Id))})})]})})},op=function({htmlContent:e}){return(0,n$.jsx)("div",{className:"prose w-full [&_iframe]:w-full [&_iframe]:h-[500px]",dangerouslySetInnerHTML:{__html:e||""}})},ov={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},ob={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},og={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},oE=Object.entries(og),of=oE.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),ow=oE.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),oy=Object.entries(ow).reduce((e,[t,i])=>{let a=of[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),oA=Object.entries(of).reduce((e,[t,i])=>{let a=ow[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),ok={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},oI={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},oT={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},oM={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},o_={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},oS={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ox={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},oL={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function oC(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function oR(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function oD(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function oN(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function oP(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function oU(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",()=>oA,"AvailabilityStates",()=>o_,"MediaStateChangeEvents",()=>ow,"MediaStateReceiverAttributes",()=>ob,"MediaUIAttributes",()=>of,"MediaUIEvents",()=>ov,"MediaUIProps",()=>og,"PointerTypes",()=>oM,"ReadyStates",()=>oT,"StateChangeEventToAttributeMap",()=>oy,"StreamTypes",()=>oS,"TextTrackKinds",()=>ok,"TextTrackModes",()=>oI,"VolumeLevels",()=>ox,"WebkitPresentationModes",()=>oL],83481),e.i(83481);let oO=e=>new Promise(t=>setTimeout(t,e)),oH=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],oW=e=>{if(!oP(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?oH[t].singular:oH[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function o$(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),s=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(s=r=a="0"),r=(((s=s>0||o>0?s+":":"")||n>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+s+r+(a=a<10?"0"+a:a)}let oB=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function oV(e=oB){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}e.s(["emptyTimeRanges",()=>oB,"formatAsTimePhrase",()=>oW,"formatTime",()=>o$,"serializeTimeRanges",()=>oV],11020),e.i(11020);let oj={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},oG=(null==(d=globalThis.navigator)?void 0:d.language)||"en",oF=(e,t={})=>(e=>{var t,i,a;let[r]=oG.split("-");return(null==(t=oj[oG])?void 0:t[e])||(null==(i=oj[r])?void 0:i[e])||(null==(a=oj.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class oq{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class oz extends oq{}class oQ extends oz{constructor(){super(...arguments),this.role=null}}let oZ={createElement:function(){return new oK.HTMLElement},createElementNS:function(){return new oK.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},oK={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:oZ,Node:oz,Element:oQ,HTMLElement:class extends oQ{constructor(){super(...arguments),this.innerHTML=""}get content(){return new oK.DocumentFragment}},DocumentFragment:class extends oq{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},oY="undefined"==typeof window||void 0===window.customElements,oX=Object.keys(oK).every(e=>e in globalThis),oJ=oY&&!oX?oK:globalThis,o0=oY&&!oX?oZ:globalThis.document,o1=new WeakMap,o2=e=>{let t=o1.get(e);return t||o1.set(e,t=new Set),t},o5=new oJ.ResizeObserver(e=>{for(let t of e)for(let e of o2(t.target))e(t)});function o3(e,t){o2(e).add(t),o5.observe(e)}function o4(e,t){let i=o2(e);i.delete(t),i.size||o5.unobserve(e)}function o7(e){let t={};for(let i of e)t[i.name]=i.value;return t}function o8(e){var t;return null!=(t=o6(e))?t:li(e,"media-controller")}function o6(e){var t;let{MEDIA_CONTROLLER:i}=ob,a=e.getAttribute(i);if(a)return null==(t=lr(e))?void 0:t.getElementById(a)}let o9=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},le=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},lt=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||lt(e,t.getRootNode().host)),li=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||li(e.getRootNode().host,t)};function la(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=la(i.shadowRoot))?t:i:null}function lr(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function ls(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function ln(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||lo(e,t)}function lo(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],s=null==r?void 0:r[r.length-1];return(null==s?void 0:s.sheet)?(null==s||s.sheet.insertRule(`${t}{}`,s.sheet.cssRules.length),null==(a=s.sheet.cssRules)?void 0:a[s.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ll(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function ld(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}ll(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function lu(e,t){return e.hasAttribute(t)}function lh(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}lu(e,t)!=i&&e.toggleAttribute(t,i)}function lc(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function lm(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;lc(e,t,void 0)!==a&&e.setAttribute(t,a)}var lp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lv=(e,t,i)=>(lp(e,t,"read from private field"),i?i.call(e):t.get(e)),lb=(e,t,i,a)=>(lp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lg extends oJ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ob.MEDIA_CONTROLLER,of.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===ob.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lv(this,u))?void 0:a.unassociateElement)||r.call(a,this),lb(this,u,null)),i&&this.isConnected&&(lb(this,u,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=lv(this,u))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i,a,r,s;let n;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),lb(this,u,(r=this,(n=r.getAttribute(ob.MEDIA_CONTROLLER))?null==(s=r.getRootNode())?void 0:s.getElementById(n):li(r,"media-controller"))),this.getAttribute(ob.MEDIA_CONTROLLER)&&(null==(t=null==(e=lv(this,u))?void 0:e.associateElement)||t.call(e,this)),null==(i=lv(this,u))||i.addEventListener("pointerdown",this),null==(a=lv(this,u))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(ob.MEDIA_CONTROLLER)&&(null==(t=null==(e=lv(this,u))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=lv(this,u))||i.removeEventListener("pointerdown",this),null==(a=lv(this,u))||a.removeEventListener("click",this),lb(this,u,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:s,height:n}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>s||l>n||0===s&&0===n)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===oM.TOUCH)return void this.handleTap(e);if(d===oM.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return lu(this,of.MEDIA_PAUSED)}set mediaPaused(e){lh(this,of.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?ov.MEDIA_PLAY_REQUEST:ov.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new oJ.CustomEvent(t,{composed:!0,bubbles:!0}))}}u=new WeakMap,lg.shadowRootOptions={mode:"open"},lg.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},oJ.customElements.get("media-gesture-receiver")||oJ.customElements.define("media-gesture-receiver",lg);var lE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lf=(e,t,i)=>(lE(e,t,"read from private field"),i?i.call(e):t.get(e)),lw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ly=(e,t,i,a)=>(lE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lA=(e,t,i)=>(lE(e,t,"access private method"),i);let lk="audio",lI="autohide",lT="breakpoints",lM="gesturesdisabled",l_="keyboardcontrol",lS="noautohide",lx="userinactive",lL="autohideovercontrols",lC=Object.values(of);function lR(e,t){var i,a,r;if(!e.isConnected)return;let s=Object.fromEntries((null!=(i=e.getAttribute(lT))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=s,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(s).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(ow.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(ow.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class lD extends oJ.HTMLElement{constructor(){if(super(),lw(this,b),lw(this,w),lw(this,A),lw(this,I),lw(this,M),lw(this,S),lw(this,h,0),lw(this,c,null),lw(this,m,null),lw(this,p,void 0),this.breakpointsComputed=!1,lw(this,v,new MutationObserver(lA(this,b,g).bind(this))),lw(this,E,!1),lw(this,f,e=>{lf(this,E)||(setTimeout(()=>{lR(e.target,e.contentRect.width),ly(this,E,!1)},0),ly(this,E,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){lf(this,c)&&this.mediaUnsetCallback(lf(this,c));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[lI,lM].concat(lC).filter(e=>![of.MEDIA_RENDITION_LIST,of.MEDIA_AUDIO_TRACK_LIST,of.MEDIA_CHAPTERS_CUES,of.MEDIA_WIDTH,of.MEDIA_HEIGHT,of.MEDIA_ERROR,of.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==lI&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(ly(this,c,e),e.localName.includes("-")&&await oJ.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;lf(this,v).observe(this,{childList:!0,subtree:!0}),o3(this,lf(this,f));let t=null!=this.getAttribute(lk)?oF("audio player"):oF("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(lx,""),lR(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=oJ.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;lf(this,v).disconnect(),o4(this,lf(this,f)),this.media&&this.mediaUnsetCallback(this.media),null==(e=oJ.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){ly(this,c,null)}handleEvent(e){switch(e.type){case"pointerdown":ly(this,h,e.timeStamp);break;case"pointermove":lA(this,w,y).call(this,e);break;case"pointerup":lA(this,A,k).call(this,e);break;case"mouseleave":lA(this,I,T).call(this);break;case"mouseup":this.removeAttribute(l_);break;case"keyup":lA(this,S,x).call(this),this.setAttribute(l_,"")}}set autohide(e){let t=Number(e);ly(this,p,isNaN(t)?0:t)}get autohide(){return(void 0===lf(this,p)?2:lf(this,p)).toString()}get breakpoints(){return lc(this,lT)}set breakpoints(e){lm(this,lT,e)}get audio(){return lu(this,lk)}set audio(e){lh(this,lk,e)}get gesturesDisabled(){return lu(this,lM)}set gesturesDisabled(e){lh(this,lM,e)}get keyboardControl(){return lu(this,l_)}set keyboardControl(e){lh(this,l_,e)}get noAutohide(){return lu(this,lS)}set noAutohide(e){lh(this,lS,e)}get autohideOverControls(){return lu(this,lL)}set autohideOverControls(e){lh(this,lL,e)}get userInteractive(){return lu(this,lx)}set userInteractive(e){lh(this,lx,e)}}h=new WeakMap,c=new WeakMap,m=new WeakMap,p=new WeakMap,v=new WeakMap,b=new WeakSet,g=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},E=new WeakMap,f=new WeakMap,w=new WeakSet,y=function(e){if("mouse"!==e.pointerType&&e.timeStamp-lf(this,h)<250)return;lA(this,M,_).call(this),clearTimeout(lf(this,m));let t=this.hasAttribute(lL);([this,this.media].includes(e.target)||t)&&lA(this,S,x).call(this)},A=new WeakSet,k=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(lx);[this,this.media].includes(e.target)&&t?lA(this,I,T).call(this):lA(this,S,x).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&lA(this,S,x).call(this)},I=new WeakSet,T=function(){if(0>lf(this,p)||this.hasAttribute(lx))return;this.setAttribute(lx,"");let e=new oJ.CustomEvent(ow.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},M=new WeakSet,_=function(){if(!this.hasAttribute(lx))return;this.removeAttribute(lx);let e=new oJ.CustomEvent(ow.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},S=new WeakSet,x=function(){lA(this,M,_).call(this),clearTimeout(lf(this,m));let e=parseInt(this.autohide);e<0||ly(this,m,setTimeout(()=>{lA(this,I,T).call(this)},1e3*e))},lD.shadowRootOptions={mode:"open"},lD.getTemplateHTML=function(e){return`
    <style>
      
      :host([${of.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${lk}])) [part~=layer]:not([part~=media-layer]) {
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

      
      :host([${lk}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${lk}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${lk}])[${lM}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${lk}])[${lM}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${lk}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${lk}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${lk}])) media-gesture-receiver[slot=gestures-chrome] {
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

      
      :host(:not([${lk}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${lS}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${lx}]:not([${of.MEDIA_PAUSED}]):not([${of.MEDIA_IS_AIRPLAYING}]):not([${of.MEDIA_IS_CASTING}]):not([${lk}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${lS}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${lx}]:not([${lS}]):not([${of.MEDIA_PAUSED}]):not([${of.MEDIA_IS_CASTING}]):not([${lk}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${lx}][${lL}]:not([${lS}]):not([${of.MEDIA_PAUSED}]):not([${of.MEDIA_IS_CASTING}]):not([${lk}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${lk}])[${of.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${lg.shadowRootOptions.mode}">
          ${lg.getTemplateHTML({})}
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
  `},oJ.customElements.get("media-container")||oJ.customElements.define("media-container",lD);var lN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lP=(e,t,i)=>(lN(e,t,"read from private field"),i?i.call(e):t.get(e)),lU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lO=(e,t,i,a)=>(lN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lH{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){lU(this,N),lU(this,L,void 0),lU(this,C,void 0),lU(this,R,void 0),lU(this,D,new Set),lO(this,L,e),lO(this,C,t),lO(this,R,new Set(i))}[Symbol.iterator](){return lP(this,N,P).values()}get length(){return lP(this,N,P).size}get value(){var e;return null!=(e=[...lP(this,N,P)].join(" "))?e:""}set value(e){var t;e!==this.value&&(lO(this,D,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...lP(this,N,P)][e]}values(){return lP(this,N,P).values()}forEach(e,t){lP(this,N,P).forEach(e,t)}add(...e){var t,i;e.forEach(e=>lP(this,D).add(e)),(""!==this.value||(null==(t=lP(this,L))?void 0:t.hasAttribute(`${lP(this,C)}`)))&&(null==(i=lP(this,L))||i.setAttribute(`${lP(this,C)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>lP(this,D).delete(e)),null==(t=lP(this,L))||t.setAttribute(`${lP(this,C)}`,`${this.value}`)}contains(e){return lP(this,N,P).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}L=new WeakMap,C=new WeakMap,R=new WeakMap,D=new WeakMap,N=new WeakSet,P=function(){return lP(this,D).size?lP(this,D):lP(this,R)};let lW=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?ok.CAPTIONS:ok.SUBTITLES,language:i,label:r}},l$=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=lW(e);return{...t,...i}}),lB=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?lW(e):e):"string"==typeof e?l$(e):[e]:[],lV=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,lj=(e=[])=>Array.prototype.map.call(e,lV).join(" "),lG=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},lF=(e,t=[],i=[])=>{let a=lB(i).map(lG);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},lq=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:lG(t);return Array.from(e.textTracks).filter(i)},lz=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(of.MEDIA_SUBTITLES_SHOWING)},lQ="exitFullscreen"in o0?"exitFullscreen":"webkitExitFullscreen"in o0?"webkitExitFullscreen":"webkitCancelFullScreen"in o0?"webkitCancelFullScreen":void 0,lZ="fullscreenElement"in o0?"fullscreenElement":"webkitFullscreenElement"in o0?"webkitFullscreenElement":void 0,lK="fullscreenEnabled"in o0?"fullscreenEnabled":"webkitFullscreenEnabled"in o0?"webkitFullscreenEnabled":void 0,lY=()=>{var e;return t||(t=null==(e=null==o0?void 0:o0.createElement)?void 0:e.call(o0,"video"))},lX=async(e=lY())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([lJ(e,i.signal),l0(e,t)]);return i.abort(),a},lJ=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),l0=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await oO(10)}return e.volume!==t},l1=/.*Version\/.*Safari\/.*/.test(oJ.navigator.userAgent),l2=(e=lY())=>(!oJ.matchMedia("(display-mode: standalone)").matches||!l1)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),l5=(e=lY())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[lK])||i&&"webkitSupportsFullscreen"in i})({documentElement:o0,media:e}),l3=l5(),l4=l2(),l7=!!oJ.WebKitPlaybackTargetAvailabilityEvent,l8=!!oJ.chrome,l6=e=>lq(e.media,e=>[ok.SUBTITLES,ok.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),l9=e=>lq(e.media,e=>e.mode===oI.SHOWING&&[ok.SUBTITLES,ok.CAPTIONS].includes(e.kind)),de=(e,t)=>{let i=l6(e),a=l9(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)lF(oI.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:s,label:n,kind:o}=t;lF(oI.DISABLED,i,a),lF(oI.SHOWING,i,[{language:s,label:n,kind:o}])}}},dt=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?di(e,t):Object.entries(e).every(([e,i])=>e in t&&dt(i,t[e])))),di=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>dt(e,t[i])))},da=Object.values(oS),dr=lX().then(e=>i=e),ds=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof oJ.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=oJ.customElements.get(t);i&&e instanceof i||(await oJ.customElements.whenDefined(t),oJ.customElements.upgrade(e))}))},dn=new oJ.DOMParser,dl={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{oJ.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===oJ.localStorage.getItem("media-chrome-pref-muted");dl.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?oJ.localStorage.removeItem("media-chrome-pref-volume"):oJ.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=oJ.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;dl.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&oP(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[oS.LIVE,oS.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(da.includes(r))return r===oS.UNKNOWN?a:r;let s=t.duration;return s===1/0?oS.LIVE:Number.isFinite(s)?oS.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=dl.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===oS.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(dl.mediaStreamType.get(e)!==oS.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>l6(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>l9(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:s}=t;if(!r)return;let n=e=>{var i;s.defaultSubtitles&&(e&&![ok.CAPTIONS,ok.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||de(t,!0))};return r.addEventListener("loadstart",n),null==(i=r.textTracks)||i.addEventListener("addtrack",n),null==(a=r.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;r.removeEventListener("loadstart",n),null==(e=r.textTracks)||e.removeEventListener("addtrack",n),null==(t=r.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=lq(i,{kind:ok.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&dn.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==s||s.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==s||s.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&lt(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!o0.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else o0.pictureInPictureElement&&o0.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let s=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[lZ];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===oL.FULLSCREEN?i:a})(e);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let e=s.shadowRoot;if(!(lZ in e))return lt(s,r);for(;null==e?void 0:e[lZ];){if(e[lZ]===r)return!0;e=null==(t=e[lZ])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(lQ){let e=null==(t=null==i?void 0:i[lQ])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&oJ.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!l3||!l5(t))return o_.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!l4||!l2(t))return o_.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return o_.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&dr.then(t=>e(t?void 0:o_.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return l8&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?o_.UNAVAILABLE:void 0:o_.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>l7?(null==t?void 0:t.availability)==="not-available"?o_.UNAVAILABLE:void 0:o_.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:o_.UNAVAILABLE:o_.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?o_.UNAVAILABLE:void 0:o_.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},dd={[ov.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,s;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=lq(l,{kind:ok.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(s=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:s.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[ov.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[ov.MEDIA_PLAY_REQUEST](e,t){var i,a,r,s;let n=e.mediaStreamType.get(t)===oS.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(s=null==(r=t.options)?void 0:r.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[ov.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[ov.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[ov.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[ov.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[ov.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[ov.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let s=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(s)))return;let n=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(s-n,t)},[ov.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,s=l6(t),n=lB(i),o=null==(a=n[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&oJ.localStorage.setItem("media-chrome-pref-subtitles-lang",o),lF(oI.SHOWING,s,n)},[ov.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=l6(t);lF(oI.DISABLED,a,null!=i?i:[])},[ov.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){de(t,i)},[ov.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[ov.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[ov.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[ov.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[ov.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[ov.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[ov.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[ov.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[ov.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var du=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dh=(e,t,i)=>(du(e,t,"read from private field"),i?i.call(e):t.get(e)),dc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dm=(e,t,i,a)=>(du(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dp=(e,t,i)=>(du(e,t,"access private method"),i);let dv=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],db="defaultsubtitles",dg="defaultstreamtype",dE="defaultduration",df="fullscreenelement",dw="hotkeys",dy="keysused",dA="liveedgeoffset",dk="seektoliveoffset",dI="noautoseektolive",dT="nohotkeys",dM="novolumepref",d_="nosubtitleslangpref",dS="nodefaultstore",dx="keyboardforwardseekoffset",dL="keyboardbackwardseekoffset",dC="lang";U=new WeakMap,O=new WeakMap,H=new WeakMap,W=new WeakMap,$=new WeakMap,B=new WeakMap,V=new WeakSet,j=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=dl,requestMap:r=dd,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...s}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0==e||dt(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,s,u,p,v,b,g,E,f,w,y,A,k,I,T;let M=!!o;if(o={...d,...null!=o?o:{},...e},M)return;await ds(...Object.values(e));let _=l.length>0&&0===t&&n,S=d.media!==o.media,x=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(s=d.media)?void 0:s.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),C=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),R=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),D=d.documentElement!==o.documentElement,N=!!d.media&&(S||_),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(x||_),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(L||_),O=!!(null==(w=d.media)?void 0:w.audioTracks)&&(C||_),H=!!(null==(y=d.media)?void 0:y.remote)&&(R||_),W=!!d.documentElement&&(D||_),$=N||P||U||O||H||W,B=0===l.length&&1===t&&n,V=!!o.media&&(S||B),j=!!(null==(A=o.media)?void 0:A.textTracks)&&(x||B),G=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||B),F=!!(null==(I=o.media)?void 0:I.audioTracks)&&(C||B),q=!!(null==(T=o.media)?void 0:T.remote)&&(R||B),z=!!o.documentElement&&(D||B),Q=V||j||G||F||q||z;if(!($||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:s=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),j&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,s.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),F&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),q&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&W&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),z&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&$&&v(),Q&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:s}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?h(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(db),defaultDuration:this.hasAttribute(dE)?+this.getAttribute(dE):void 0,defaultStreamType:null!=(e=this.getAttribute(dg))?e:void 0,liveEdgeOffset:this.hasAttribute(dA)?+this.getAttribute(dA):void 0,seekToLiveOffset:this.hasAttribute(dk)?+this.getAttribute(dk):this.hasAttribute(dA)?+this.getAttribute(dA):void 0,noAutoSeekToLive:this.hasAttribute(dI),noVolumePref:this.hasAttribute(dM),noSubtitlesLangPref:this.hasAttribute(d_)}})},G=new WeakSet,F=function(e){let{key:t}=e;dv.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",dp(this,G,F))},q=new WeakSet,z=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!dv.includes(a)?this.removeEventListener("keyup",dp(this,G,F)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(dh(this,U).contains(`no${a.toLowerCase()}`)||" "===a&&dh(this,U).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",dp(this,G,F),{once:!0}))};let dR=Object.values(of),dD=Object.values(og),dN=e=>{var t,i,a,r;let{observedAttributes:s}=e.constructor;!s&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(oJ.customElements.upgrade(e),{observedAttributes:s}=e.constructor);let n=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,ob.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(s||n)?(s||n).filter(e=>dR.includes(e)):[]},dP=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&oJ.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof oJ.customElements.get(e.nodeName.toLowerCase()))&&oJ.customElements.upgrade(e),dD.some(t=>t in e)||!!dN(e).length},dU=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},dO={[of.MEDIA_SUBTITLES_LIST]:lj,[of.MEDIA_SUBTITLES_SHOWING]:lj,[of.MEDIA_SEEKABLE]:dU,[of.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(dU).join(" "),[of.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[of.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(oC).join(" ")},[of.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(oD).join(" ")}},dH=async(e,t,i)=>{var a,r;if(e.isConnected||await oO(0),"boolean"==typeof i||null==i)return lh(e,t,i);if("number"==typeof i)return ld(e,t,i);if("string"==typeof i)return lm(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let s=null!=(r=null==(a=dO[t])?void 0:a.call(dO,i))?r:i;return e.setAttribute(t,s)},dW=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;dP(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>dW(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!dP(e)?oJ.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},d$=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=dN(e),r=t.toLowerCase();a.includes(r)&&dH(e,r,i)})};oJ.customElements.get("media-controller")||oJ.customElements.define("media-controller",class extends lD{constructor(){super(),dc(this,V),dc(this,G),dc(this,q),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,dc(this,U,new lH(this,dw)),dc(this,O,void 0),dc(this,H,void 0),dc(this,W,void 0),dc(this,$,void 0),dc(this,B,e=>{var t;null==(t=dh(this,H))||t.dispatch(e)}),this.associateElement(this);let e={};dm(this,W,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new oJ.CustomEvent(oA[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(dT,dw,dg,db,dE,dC)}get mediaStore(){return dh(this,H)}set mediaStore(e){var t,i;(dh(this,H)&&(null==(t=dh(this,$))||t.call(this),dm(this,$,void 0)),dm(this,H,e),dh(this,H)||this.hasAttribute(dS))?dm(this,$,null==(i=dh(this,H))?void 0:i.subscribe(dh(this,W))):dp(this,V,j).call(this)}get fullscreenElement(){var e;return null!=(e=dh(this,O))?e:this}set fullscreenElement(e){var t;this.hasAttribute(df)&&this.removeAttribute(df),dm(this,O,e),null==(t=dh(this,H))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return lu(this,db)}set defaultSubtitles(e){lh(this,db,e)}get defaultStreamType(){return lc(this,dg)}set defaultStreamType(e){lm(this,dg,e)}get defaultDuration(){return ll(this,dE)}set defaultDuration(e){ld(this,dE,e)}get noHotkeys(){return lu(this,dT)}set noHotkeys(e){lh(this,dT,e)}get keysUsed(){return lc(this,dy)}set keysUsed(e){lm(this,dy,e)}get liveEdgeOffset(){return ll(this,dA)}set liveEdgeOffset(e){ld(this,dA,e)}get noAutoSeekToLive(){return lu(this,dI)}set noAutoSeekToLive(e){lh(this,dI,e)}get noVolumePref(){return lu(this,dM)}set noVolumePref(e){lh(this,dM,e)}get noSubtitlesLangPref(){return lu(this,d_)}set noSubtitlesLangPref(e){lh(this,d_,e)}get noDefaultStore(){return lu(this,dS)}set noDefaultStore(e){lh(this,dS,e)}attributeChangedCallback(e,t,i){var a,r,s,n,o,l,d,u;(super.attributeChangedCallback(e,t,i),e===dT)?i!==t&&""===i?(this.hasAttribute(dw)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys():e===dw?dh(this,U).value=i:e===db&&i!==t?null==(a=dh(this,H))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(db)}}):e===dg?null==(s=dh(this,H))||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(dg))?r:void 0}}):e===dA?null==(n=dh(this,H))||n.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(dA)?+this.getAttribute(dA):void 0,seekToLiveOffset:this.hasAttribute(dk)?void 0:+this.getAttribute(dA)}}):e===dk?null==(o=dh(this,H))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(dk)?+this.getAttribute(dk):void 0}}):e===dI?null==(l=dh(this,H))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(dI)}}):e===df?(dm(this,O,i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0),null==(u=dh(this,H))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):e===dC&&i!==t&&(oG=i)}connectedCallback(){var e,t;dh(this,H)||this.hasAttribute(dS)||dp(this,V,j).call(this),null==(e=dh(this,H))||e.dispatch({type:"documentelementchangerequest",detail:o0}),super.connectedCallback(),dh(this,H)&&!dh(this,$)&&dm(this,$,null==(t=dh(this,H))?void 0:t.subscribe(dh(this,W))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),dh(this,H)&&(null==(t=dh(this,H))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=dh(this,H))||i.dispatch({type:ov.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),dh(this,$)&&(null==(a=dh(this,$))||a.call(this),dm(this,$,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=dh(this,H))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=dh(this,H))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){d$(this.mediaStateReceivers,e,t)}associateElement(e){var t,i,a;let r,s,n,o,l;if(!e)return;let{associatedElementSubscriptions:d}=this;if(d.has(e))return;let u=this.registerMediaStateReceiver.bind(this),h=(t=e,i=u,a=this.unregisterMediaStateReceiver.bind(this),dW(t,i),r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},s=e=>{var t;a(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},t.addEventListener(ov.REGISTER_MEDIA_STATE_RECEIVER,r),t.addEventListener(ov.UNREGISTER_MEDIA_STATE_RECEIVER,s),n=[],o=e=>{let t=e.target;"media"!==t.name&&(n.forEach(e=>dW(e,a)),(n=[...t.assignedElements({flatten:!0})]).forEach(e=>dW(e,i)))},t.addEventListener("slotchange",o),(l=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:t=[],removedNodes:r=[],type:s,target:n,attributeName:o}=e;"childList"===s?(Array.prototype.forEach.call(t,e=>dW(e,i)),Array.prototype.forEach.call(r,e=>dW(e,a))):"attributes"===s&&o===ob.MEDIA_CHROME_ATTRIBUTES&&(dP(n)?i(n):a(n))})})).observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{dW(t,a),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(ov.REGISTER_MEDIA_STATE_RECEIVER,r),t.removeEventListener(ov.UNREGISTER_MEDIA_STATE_RECEIVER,s)});Object.values(ov).forEach(t=>{e.addEventListener(t,dh(this,B))}),d.set(e,h)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(ov).forEach(t=>{e.removeEventListener(t,dh(this,B))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),dh(this,H)&&Object.entries(dh(this,H).getState()).forEach(([t,i])=>{d$([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",dp(this,q,z))}disableHotkeys(){this.removeEventListener("keydown",dp(this,q,z)),this.removeEventListener("keyup",dp(this,G,F))}get hotkeys(){return lc(this,dw)}set hotkeys(e){lm(this,dw,e)}keyboardShortcutHandler(e){var t,i,a,r,s;let n,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(dy))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||dh(this,U).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&dh(this,U).contains("nospace")))switch(e.key){case" ":case"k":n=dh(this,H).getState().mediaPaused?ov.MEDIA_PLAY_REQUEST:ov.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new oJ.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.mediaStore.getState().mediaVolumeLevel?ov.MEDIA_UNMUTE_REQUEST:ov.MEDIA_MUTE_REQUEST,this.dispatchEvent(new oJ.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?ov.MEDIA_EXIT_FULLSCREEN_REQUEST:ov.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new oJ.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new oJ.CustomEvent(ov.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(dL)?+this.getAttribute(dL):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new oJ.CustomEvent(ov.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(dx)?+this.getAttribute(dx):10;o=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),l=new oJ.CustomEvent(ov.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}});let dB="placement",dV="bounds";class dj extends oJ.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!ls(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=li(this,"#"+this.bounds))?e:o8(this);if(!a)return;let{x:r,width:s}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-r+d-h,m=n+o-(r+s)+d+h;c<0?this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[dB,dV]}get placement(){return lc(this,dB)}set placement(e){lm(this,dB,e)}get bounds(){return lc(this,dV)}set bounds(e){lm(this,dV,e)}}dj.shadowRootOptions={mode:"open"},dj.getTemplateHTML=function(e){return`
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
  `},oJ.customElements.get("media-tooltip")||oJ.customElements.define("media-tooltip",dj);var dG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dF=(e,t,i)=>(dG(e,t,"read from private field"),i?i.call(e):t.get(e)),dq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dz=(e,t,i,a)=>(dG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dQ="tooltipplacement",dZ="disabled",dK="notooltip";class dY extends oJ.HTMLElement{constructor(){if(super(),dq(this,J),dq(this,Q,void 0),this.preventClick=!1,this.tooltipEl=null,dq(this,Z,e=>{this.preventClick||this.handleClick(e),setTimeout(dF(this,K),0)}),dq(this,K,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),dq(this,Y,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",dF(this,Y))}),dq(this,X,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",dF(this,Y)):this.addEventListener("keyup",dF(this,Y),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",dQ,ob.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",dF(this,Z)),this.addEventListener("keydown",dF(this,X)),this.tabIndex=0}disable(){this.removeEventListener("click",dF(this,Z)),this.removeEventListener("keydown",dF(this,X)),this.removeEventListener("keyup",dF(this,Y)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===ob.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=dF(this,Q))?void 0:a.unassociateElement)||r.call(a,this),dz(this,Q,null)),i&&this.isConnected&&(dz(this,Q,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=dF(this,Q))?void 0:n.associateElement)||o.call(n,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===dQ&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),dF(this,K).call(this)}connectedCallback(){var e,t,i;let{style:a}=ln(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(ob.MEDIA_CONTROLLER);r&&(dz(this,Q,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=dF(this,Q))?void 0:t.associateElement)||i.call(t,this)),oJ.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=J,t=ee,dG(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=dF(this,Q))?void 0:e.unassociateElement)||t.call(e,this),dz(this,Q,null),this.removeEventListener("mouseenter",dF(this,K)),this.removeEventListener("focus",dF(this,K)),this.removeEventListener("click",dF(this,Z))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return lc(this,dQ)}set tooltipPlacement(e){lm(this,dQ,e)}get mediaController(){return lc(this,ob.MEDIA_CONTROLLER)}set mediaController(e){lm(this,ob.MEDIA_CONTROLLER,e)}get disabled(){return lu(this,dZ)}set disabled(e){lh(this,dZ,e)}get noTooltip(){return lu(this,dK)}set noTooltip(e){lh(this,dK,e)}handleClick(e){}}Q=new WeakMap,Z=new WeakMap,K=new WeakMap,Y=new WeakMap,X=new WeakMap,J=new WeakSet,ee=function(){this.addEventListener("mouseenter",dF(this,K)),this.addEventListener("focus",dF(this,K)),this.addEventListener("click",dF(this,Z));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},dY.shadowRootOptions={mode:"open"},dY.getTemplateHTML=function(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${dj.shadowRootOptions.mode}">
          ${dj.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},dY.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},dY.getTooltipContentHTML=function(){return""},oJ.customElements.get("media-chrome-button")||oJ.customElements.define("media-chrome-button",dY);let dX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,dJ=e=>{let t=e.mediaIsAirplaying?oF("stop airplay"):oF("start airplay");e.setAttribute("aria-label",t)};class d0 extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_IS_AIRPLAYING,of.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_IS_AIRPLAYING&&dJ(this)}get mediaIsAirplaying(){return lu(this,of.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){lh(this,of.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return lc(this,of.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){lm(this,of.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new oJ.CustomEvent(ov.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}d0.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${of.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${of.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${of.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${of.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${dX}</slot>
      <slot name="exit">${dX}</slot>
    </slot>
  `},d0.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oF("start airplay")}</slot>
    <slot name="tooltip-exit">${oF("stop airplay")}</slot>
  `},oJ.customElements.get("media-airplay-button")||oJ.customElements.define("media-airplay-button",d0);let d1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,d2=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,d5=e=>{e.setAttribute("aria-checked",lz(e).toString())};class d3 extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_SUBTITLES_LIST,of.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",oF("closed captions")),d5(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_SUBTITLES_SHOWING&&d5(this)}get mediaSubtitlesList(){return d4(this,of.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){d7(this,of.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return d4(this,of.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){d7(this,of.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new oJ.CustomEvent(ov.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}d3.getSlotTemplateHTML=function(e){return`
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
      <slot name="on">${d1}</slot>
      <slot name="off">${d2}</slot>
    </slot>
  `},d3.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${oF("Enable captions")}</slot>
    <slot name="tooltip-disable">${oF("Disable captions")}</slot>
  `};let d4=(e,t)=>{let i=e.getAttribute(t);return i?l$(i):[]},d7=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=lj(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};oJ.customElements.get("media-captions-button")||oJ.customElements.define("media-captions-button",d3);let d8=e=>{let t=e.mediaIsCasting?oF("stop casting"):oF("start casting");e.setAttribute("aria-label",t)};class d6 extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_IS_CASTING,of.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),d8(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_IS_CASTING&&d8(this)}get mediaIsCasting(){return lu(this,of.MEDIA_IS_CASTING)}set mediaIsCasting(e){lh(this,of.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return lc(this,of.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){lm(this,of.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?ov.MEDIA_EXIT_CAST_REQUEST:ov.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new oJ.CustomEvent(e,{composed:!0,bubbles:!0}))}}d6.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${of.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${of.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${of.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${of.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},d6.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oF("Start casting")}</slot>
    <slot name="tooltip-exit">${oF("Stop casting")}</slot>
  `},oJ.customElements.get("media-cast-button")||oJ.customElements.define("media-cast-button",d6);var d9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ue=(e,t,i)=>(d9(e,t,"read from private field"),i?i.call(e):t.get(e)),ut=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ui=(e,t,i,a)=>(d9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ua=(e,t,i)=>(d9(e,t,"access private method"),i);let ur="open";class us extends oJ.HTMLElement{constructor(){super(),ut(this,er),ut(this,en),ut(this,el),ut(this,eu),ut(this,ec),ut(this,ep),ut(this,et,!1),ut(this,ei,null),ut(this,ea,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[ur,"anchor"]}get open(){return lu(this,ur)}set open(e){lh(this,ur,e)}handleEvent(e){switch(e.type){case"invoke":ua(this,eu,eh).call(this,e);break;case"focusout":ua(this,ec,em).call(this,e);break;case"keydown":ua(this,ep,ev).call(this,e)}}connectedCallback(){ua(this,er,es).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){ua(this,er,es).call(this),e===ur&&i!==t&&(this.open?ua(this,en,eo).call(this):ua(this,el,ed).call(this))}focus(){ui(this,ei,la());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}et=new WeakMap,ei=new WeakMap,ea=new WeakMap,er=new WeakSet,es=function(){if(!ue(this,et)&&(ui(this,et,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=ln(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},en=new WeakSet,eo=function(){var e;null==(e=ue(this,ea))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},el=new WeakSet,ed=function(){var e;null==(e=ue(this,ea))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},eu=new WeakSet,eh=function(e){ui(this,ea,e.relatedTarget),lt(this,e.relatedTarget)||(this.open=!this.open)},ec=new WeakSet,em=function(e){var t;!lt(this,e.relatedTarget)&&(null==(t=ue(this,ei))||t.focus(),ue(this,ea)&&ue(this,ea)!==e.relatedTarget&&this.open&&(this.open=!1))},ep=new WeakSet,ev=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===n&&(null==(s=ue(this,ei))||s.focus(),this.open=!1))},us.shadowRootOptions={mode:"open"},us.getTemplateHTML=function(e){return`
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
    ${this.getSlotTemplateHTML(e)}
  `},us.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},oJ.customElements.get("media-chrome-dialog")||oJ.customElements.define("media-chrome-dialog",us);var un=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uo=(e,t,i)=>(un(e,t,"read from private field"),i?i.call(e):t.get(e)),ul=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ud=(e,t,i,a)=>(un(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uu=(e,t,i)=>(un(e,t,"access private method"),i);class uh extends oJ.HTMLElement{constructor(){if(super(),ul(this,eT),ul(this,e_),ul(this,ex),ul(this,eC),ul(this,eD),ul(this,eP),ul(this,eO),ul(this,eW),ul(this,eb,void 0),ul(this,eg,void 0),ul(this,eE,void 0),ul(this,ef,void 0),ul(this,ew,{}),ul(this,ey,[]),ul(this,eA,()=>{if(this.range.matches(":focus-visible")){let{style:e}=ln(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),ul(this,ek,()=>{let{style:e}=ln(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),ul(this,eI,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),ud(this,eE,this.shadowRoot.querySelector("#startpoint")),ud(this,ef,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",ob.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===ob.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=uo(this,eb))?void 0:a.unassociateElement)||r.call(a,this),ud(this,eb,null)),i&&this.isConnected&&(ud(this,eb,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=uo(this,eb))?void 0:n.associateElement)||o.call(n,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),uu(this,e_,eS).call(this)):(this.range.setAttribute(e,i),uu(this,ex,eL).call(this)))}connectedCallback(){var e,t,i;let{style:a}=ln(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),uo(this,ew).pointer=ln(this.shadowRoot,"#pointer"),uo(this,ew).progress=ln(this.shadowRoot,"#progress"),uo(this,ew).thumb=ln(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),uo(this,ew).activeSegment=ln(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(ob.MEDIA_CONTROLLER);r&&(ud(this,eb,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=uo(this,eb))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",uo(this,eA)),this.shadowRoot.addEventListener("focusout",uo(this,ek)),uu(this,e_,eS).call(this),o3(this.container,uo(this,eI))}disconnectedCallback(){var e,t;uu(this,ex,eL).call(this),null==(t=null==(e=uo(this,eb))?void 0:e.unassociateElement)||t.call(e,this),ud(this,eb,null),this.shadowRoot.removeEventListener("focusin",uo(this,eA)),this.shadowRoot.removeEventListener("focusout",uo(this,ek)),o4(this.container,uo(this,eI))}updatePointerBar(e){var t;null==(t=uo(this,ew).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=uo(this,ew).progress)||e.style.setProperty("width",`${i}%`),null==(t=uo(this,ew).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ud(this,ey,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[s,n]=[0===e,e===i.length-1],o=s?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=n?a:i[e+1],d=`calc(${(l-r)*100}%${s||n?"":" - var(--segments-gap)"})`,u=o0.createElementNS("http://www.w3.org/2000/svg","rect"),h=ln(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let s,n,o;return t=e.clientX,i=e.clientY,a=uo(this,eE).getBoundingClientRect(),s=(r=uo(this,ef).getBoundingClientRect()).x-a.x,0==(o=s*s+(n=r.y-a.y)*n)?0:Math.max(0,Math.min(1,((t-a.x)*s+(i-a.y)*n)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":uu(this,eW,e$).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":uu(this,eD,eN).call(this,e);break;case"pointerdown":uu(this,eC,eR).call(this,e);break;case"pointerup":uu(this,eP,eU).call(this);break;case"pointerleave":uu(this,eO,eH).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}eb=new WeakMap,eg=new WeakMap,eE=new WeakMap,ef=new WeakMap,ew=new WeakMap,ey=new WeakMap,eA=new WeakMap,ek=new WeakMap,eI=new WeakMap,eT=new WeakSet,eM=function(e){let t=uo(this,ew).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=uo(this,ey).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},e_=new WeakSet,eS=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ex=new WeakSet,eL=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=oJ.window)||e.removeEventListener("pointerup",this),null==(t=oJ.window)||t.removeEventListener("pointermove",this)},eC=new WeakSet,eR=function(e){var t;ud(this,eg,e.composedPath().includes(this.range)),null==(t=oJ.window)||t.addEventListener("pointerup",this)},eD=new WeakSet,eN=function(e){var t;"mouse"!==e.pointerType&&uu(this,eC,eR).call(this,e),this.addEventListener("pointerleave",this),null==(t=oJ.window)||t.addEventListener("pointermove",this)},eP=new WeakSet,eU=function(){var e;null==(e=oJ.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eO=new WeakSet,eH=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=oJ.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=uo(this,ew).activeSegment)||t.style.removeProperty("transform")},eW=new WeakSet,e$=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),uu(this,eT,eM).call(this,e),this.dragging&&("mouse"!==e.pointerType||!uo(this,eg))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},uh.shadowRootOptions={mode:"open"},uh.getTemplateHTML=function(e){return`
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
  `},oJ.customElements.get("media-chrome-range")||oJ.customElements.define("media-chrome-range",uh);var uc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},um=(e,t,i)=>(uc(e,t,"read from private field"),i?i.call(e):t.get(e)),up=(e,t,i,a)=>(uc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class uv extends oJ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eB,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ob.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===ob.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=um(this,eB))?void 0:a.unassociateElement)||r.call(a,this),up(this,eB,null)),i&&this.isConnected&&(up(this,eB,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=um(this,eB))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(ob.MEDIA_CONTROLLER);a&&(up(this,eB,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=um(this,eB))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=um(this,eB))?void 0:e.unassociateElement)||t.call(e,this),up(this,eB,null)}}eB=new WeakMap,uv.shadowRootOptions={mode:"open"},uv.getTemplateHTML=function(e){return`
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
  `},oJ.customElements.get("media-control-bar")||oJ.customElements.define("media-control-bar",uv);var ub=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ug=(e,t,i)=>(ub(e,t,"read from private field"),i?i.call(e):t.get(e)),uE=(e,t,i,a)=>(ub(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class uf extends oJ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eV,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ob.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===ob.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ug(this,eV))?void 0:a.unassociateElement)||r.call(a,this),uE(this,eV,null)),i&&this.isConnected&&(uE(this,eV,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=ug(this,eV))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let{style:a}=ln(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(ob.MEDIA_CONTROLLER);r&&(uE(this,eV,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ug(this,eV))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ug(this,eV))?void 0:e.unassociateElement)||t.call(e,this),uE(this,eV,null)}}eV=new WeakMap,uf.shadowRootOptions={mode:"open"},uf.getTemplateHTML=function(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}
  `},uf.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},oJ.customElements.get("media-text-display")||oJ.customElements.define("media-text-display",uf);var uw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uy=(e,t,i)=>(uw(e,t,"read from private field"),i?i.call(e):t.get(e));class uA extends uf{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ej,void 0),((e,t,i,a)=>(uw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ej,this.shadowRoot.querySelector("slot")),uy(this,ej).textContent=o$(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===of.MEDIA_DURATION&&(uy(this,ej).textContent=o$(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return ll(this,of.MEDIA_DURATION)}set mediaDuration(e){ld(this,of.MEDIA_DURATION,e)}}ej=new WeakMap,uA.getSlotTemplateHTML=function(e,t){return`
    <slot>${o$(t.mediaDuration)}</slot>
  `},oJ.customElements.get("media-duration-display")||oJ.customElements.define("media-duration-display",uA);let uk={2:oF("Network Error"),3:oF("Decode Error"),4:oF("Source Not Supported"),5:oF("Encryption Error")},uI={2:oF("A network error caused the media download to fail."),3:oF("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:oF("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:oF("The media is encrypted and there are no keys to decrypt it.")},uT=e=>{var t,i;return 1===e.code?null:{title:null!=(t=uk[e.code])?t:`Error ${e.code}`,message:null!=(i=uI[e.code])?i:e.message}};var uM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function u_(e){var t;let{title:i,message:a}=null!=(t=uT(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let uS=[of.MEDIA_ERROR_CODE,of.MEDIA_ERROR_MESSAGE];class ux extends us{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eG,null)}static get observedAttributes(){return[...super.observedAttributes,...uS]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!uS.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==uT(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return uM(this,e=eG,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;uM(this,t=eG,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return ll(this,"mediaerrorcode")}set mediaErrorCode(e){ld(this,"mediaerrorcode",e)}get mediaErrorMessage(){return lc(this,"mediaerrormessage")}set mediaErrorMessage(e){lm(this,"mediaerrormessage",e)}}eG=new WeakMap,ux.getSlotTemplateHTML=function(e){return`
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
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${u_({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},ux.formatErrorMessage=u_,oJ.customElements.get("media-error-dialog")||oJ.customElements.define("media-error-dialog",ux);let uL=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,uC=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,uR=e=>{let t=e.mediaIsFullscreen?oF("exit fullscreen mode"):oF("enter fullscreen mode");e.setAttribute("aria-label",t)};class uD extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_IS_FULLSCREEN,of.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),uR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_IS_FULLSCREEN&&uR(this)}get mediaFullscreenUnavailable(){return lc(this,of.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){lm(this,of.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return lu(this,of.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){lh(this,of.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?ov.MEDIA_EXIT_FULLSCREEN_REQUEST:ov.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new oJ.CustomEvent(e,{composed:!0,bubbles:!0}))}}uD.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${of.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${of.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${of.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${of.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${uL}</slot>
      <slot name="exit">${uC}</slot>
    </slot>
  `},uD.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oF("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${oF("Exit fullscreen mode")}</slot>
  `},oJ.customElements.get("media-fullscreen-button")||oJ.customElements.define("media-fullscreen-button",uD);let{MEDIA_TIME_IS_LIVE:uN,MEDIA_PAUSED:uP}=of,{MEDIA_SEEK_TO_LIVE_REQUEST:uU,MEDIA_PLAY_REQUEST:uO}=ov,uH=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?oF("seek to live"):oF("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class uW extends dY{static get observedAttributes(){return[...super.observedAttributes,uN,uP]}connectedCallback(){super.connectedCallback(),uH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),uH(this)}get mediaPaused(){return lu(this,of.MEDIA_PAUSED)}set mediaPaused(e){lh(this,of.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return lu(this,of.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){lh(this,of.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new oJ.CustomEvent(uU,{composed:!0,bubbles:!0})),this.hasAttribute(uP)&&this.dispatchEvent(new oJ.CustomEvent(uO,{composed:!0,bubbles:!0})))}}uW.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${uN}]:not([${uP}])) slot[name=indicator] > *,
      :host([${uN}]:not([${uP}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${uN}]:not([${uP}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${oF("live")}</slot>
  `},oJ.customElements.get("media-live-button")||oJ.customElements.define("media-live-button",uW);var u$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uB=(e,t,i)=>(u$(e,t,"read from private field"),i?i.call(e):t.get(e)),uV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uj=(e,t,i,a)=>(u$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let uG="loadingdelay",uF="noautohide",uq=`
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
`;class uz extends oJ.HTMLElement{constructor(){if(super(),uV(this,eF,void 0),uV(this,eq,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ob.MEDIA_CONTROLLER,of.MEDIA_PAUSED,of.MEDIA_LOADING,uG]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===uG&&t!==i?this.loadingDelay=Number(i):e===ob.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=uB(this,eF))?void 0:a.unassociateElement)||r.call(a,this),uj(this,eF,null)),i&&this.isConnected&&(uj(this,eF,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=uB(this,eF))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(ob.MEDIA_CONTROLLER);a&&(uj(this,eF,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=uB(this,eF))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=uB(this,eF))?void 0:e.unassociateElement)||t.call(e,this),uj(this,eF,null)}get loadingDelay(){return uB(this,eq)}set loadingDelay(e){uj(this,eq,e);let{style:t}=ln(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return lu(this,of.MEDIA_PAUSED)}set mediaPaused(e){lh(this,of.MEDIA_PAUSED,e)}get mediaLoading(){return lu(this,of.MEDIA_LOADING)}set mediaLoading(e){lh(this,of.MEDIA_LOADING,e)}get mediaController(){return lc(this,ob.MEDIA_CONTROLLER)}set mediaController(e){lm(this,ob.MEDIA_CONTROLLER,e)}get noAutohide(){return lu(this,uF)}set noAutohide(e){lh(this,uF,e)}}eF=new WeakMap,eq=new WeakMap,uz.shadowRootOptions={mode:"open"},uz.getTemplateHTML=function(e){return`
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

      :host([${of.MEDIA_LOADING}]:not([${of.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${of.MEDIA_LOADING}]:not([${of.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${of.MEDIA_LOADING}]:not([${of.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${uq}</slot>
    <div id="status" role="status" aria-live="polite">${oF("media loading")}</div>
  `},oJ.customElements.get("media-loading-indicator")||oJ.customElements.define("media-loading-indicator",uz);let uQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,uZ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,uK=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,uY=e=>{let t="off"===e.mediaVolumeLevel?oF("unmute"):oF("mute");e.setAttribute("aria-label",t)};class uX extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),uY(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_VOLUME_LEVEL&&uY(this)}get mediaVolumeLevel(){return lc(this,of.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){lm(this,of.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?ov.MEDIA_UNMUTE_REQUEST:ov.MEDIA_MUTE_REQUEST;this.dispatchEvent(new oJ.CustomEvent(e,{composed:!0,bubbles:!0}))}}uX.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${of.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${of.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${of.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${of.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${of.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${of.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${of.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${uQ}</slot>
      <slot name="low">${uZ}</slot>
      <slot name="medium">${uZ}</slot>
      <slot name="high">${uK}</slot>
    </slot>
  `},uX.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${oF("Mute")}</slot>
    <slot name="tooltip-unmute">${oF("Unmute")}</slot>
  `},oJ.customElements.get("media-mute-button")||oJ.customElements.define("media-mute-button",uX);let uJ=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,u0=e=>{let t=e.mediaIsPip?oF("exit picture in picture mode"):oF("enter picture in picture mode");e.setAttribute("aria-label",t)};class u1 extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_IS_PIP,of.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),u0(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_IS_PIP&&u0(this)}get mediaPipUnavailable(){return lc(this,of.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){lm(this,of.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return lu(this,of.MEDIA_IS_PIP)}set mediaIsPip(e){lh(this,of.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?ov.MEDIA_EXIT_PIP_REQUEST:ov.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new oJ.CustomEvent(e,{composed:!0,bubbles:!0}))}}u1.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${of.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${of.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${of.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${of.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${uJ}</slot>
      <slot name="exit">${uJ}</slot>
    </slot>
  `},u1.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${oF("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${oF("Exit picture in picture mode")}</slot>
  `},oJ.customElements.get("media-pip-button")||oJ.customElements.define("media-pip-button",u1);var u2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let u5="rates",u3=[1,1.2,1.5,1.7,2];class u4 extends dY{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ez,new lH(this,u5,{defaultValue:u3})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PLAYBACK_RATE,u5]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===u5&&(u2(this,ez).value=i),e===of.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",oF("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return u2(this,ez)}set rates(e){e?Array.isArray(e)?u2(this,ez).value=e.join(" "):"string"==typeof e&&(u2(this,ez).value=e):u2(this,ez).value=""}get mediaPlaybackRate(){return ll(this,of.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ld(this,of.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(u2(this,ez).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new oJ.CustomEvent(ov.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}ez=new WeakMap,u4.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},u4.getTooltipContentHTML=function(){return oF("Playback rate")},oJ.customElements.get("media-playback-rate-button")||oJ.customElements.define("media-playback-rate-button",u4);let u7=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,u8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,u6=e=>{let t=e.mediaPaused?oF("play"):oF("pause");e.setAttribute("aria-label",t)};class u9 extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PAUSED,of.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),u6(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_PAUSED&&u6(this)}get mediaPaused(){return lu(this,of.MEDIA_PAUSED)}set mediaPaused(e){lh(this,of.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?ov.MEDIA_PLAY_REQUEST:ov.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new oJ.CustomEvent(e,{composed:!0,bubbles:!0}))}}u9.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${of.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${of.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${of.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${of.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${u7}</slot>
      <slot name="pause">${u8}</slot>
    </slot>
  `},u9.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${oF("Play")}</slot>
    <slot name="tooltip-pause">${oF("Pause")}</slot>
  `},oJ.customElements.get("media-play-button")||oJ.customElements.define("media-play-button",u9);let he="placeholdersrc";class ht extends oJ.HTMLElement{static get observedAttributes(){return[he,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===he)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return lc(this,he)}set placeholderSrc(e){lm(this,"src",e)}get src(){return lc(this,"src")}set src(e){lm(this,"src",e)}}ht.shadowRootOptions={mode:"open"},ht.getTemplateHTML=function(e){return`
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
  `},oJ.customElements.get("media-poster-image")||oJ.customElements.define("media-poster-image",ht);var hi=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};eQ=new WeakMap,oJ.customElements.get("media-preview-chapter-display")||oJ.customElements.define("media-preview-chapter-display",class extends uf{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eQ,void 0),((e,t,i,a)=>(hi(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eQ,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===of.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a;(hi(this,eQ,"read from private field"),a?a.call(this):eQ.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return lc(this,of.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){lm(this,of.MEDIA_PREVIEW_CHAPTER,e)}});var ha=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hr=(e,t,i)=>(ha(e,t,"read from private field"),i?i.call(e):t.get(e)),hs=(e,t,i,a)=>(ha(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class hn extends oJ.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eZ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ob.MEDIA_CONTROLLER,of.MEDIA_PREVIEW_IMAGE,of.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(ob.MEDIA_CONTROLLER);a&&(hs(this,eZ,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=hr(this,eZ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=hr(this,eZ))?void 0:e.unassociateElement)||t.call(e,this),hs(this,eZ,null)}attributeChangedCallback(e,t,i){var a,r,s,n,o;[of.MEDIA_PREVIEW_IMAGE,of.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===ob.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=hr(this,eZ))?void 0:a.unassociateElement)||r.call(a,this),hs(this,eZ,null)),i&&this.isConnected&&(hs(this,eZ,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=hr(this,eZ))?void 0:n.associateElement)||o.call(n,this)))}get mediaPreviewImage(){return lc(this,of.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){lm(this,of.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(of.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(of.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(of.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,s]=e,n=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/r,parseInt(l)/s),c=Math.max(parseInt(d)/r,parseInt(u)/s),m=h<1,p=m?h:c>1?c:1,{style:v}=ln(this.shadowRoot,":host"),b=ln(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${s*p}px`;let f=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==n&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=n,f()),f(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}eZ=new WeakMap,hn.shadowRootOptions={mode:"open"},hn.getTemplateHTML=function(e){return`
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
  `},oJ.customElements.get("media-preview-thumbnail")||oJ.customElements.define("media-preview-thumbnail",hn);var ho=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hl=(e,t,i)=>(ho(e,t,"read from private field"),i?i.call(e):t.get(e));eK=new WeakMap,oJ.customElements.get("media-preview-time-display")||oJ.customElements.define("media-preview-time-display",class extends uf{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eK,void 0),((e,t,i,a)=>(ho(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eK,this.shadowRoot.querySelector("slot")),hl(this,eK).textContent=o$(0)}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_PREVIEW_TIME&&null!=i&&(hl(this,eK).textContent=o$(parseFloat(i)))}get mediaPreviewTime(){return ll(this,of.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ld(this,of.MEDIA_PREVIEW_TIME,e)}});let hd="seekoffset";class hu extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_CURRENT_TIME,hd]}connectedCallback(){super.connectedCallback(),this.seekOffset=ll(this,hd,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===hd&&(this.seekOffset=ll(this,hd,30))}get seekOffset(){return ll(this,hd,30)}set seekOffset(e){ld(this,hd,e),this.setAttribute("aria-label",oF("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),o9(le(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ll(this,of.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){ld(this,of.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new oJ.CustomEvent(ov.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}hu.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},hu.getTooltipContentHTML=function(){return oF("Seek backward")},oJ.customElements.get("media-seek-backward-button")||oJ.customElements.define("media-seek-backward-button",hu);let hh="seekoffset";class hc extends dY{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_CURRENT_TIME,hh]}connectedCallback(){super.connectedCallback(),this.seekOffset=ll(this,hh,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===hh&&(this.seekOffset=ll(this,hh,30))}get seekOffset(){return ll(this,hh,30)}set seekOffset(e){ld(this,hh,e),this.setAttribute("aria-label",oF("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),o9(le(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ll(this,of.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){ld(this,of.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new oJ.CustomEvent(ov.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}hc.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},hc.getTooltipContentHTML=function(){return oF("Seek forward")},oJ.customElements.get("media-seek-forward-button")||oJ.customElements.define("media-seek-forward-button",hc);var hm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hp=(e,t,i)=>(hm(e,t,"read from private field"),i?i.call(e):t.get(e));let hv={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},hb=[...Object.values(hv),of.MEDIA_CURRENT_TIME,of.MEDIA_DURATION,of.MEDIA_SEEKABLE],hg=["Enter"," "],hE="&nbsp;/&nbsp;",hf=(e,{timesSep:t=hE}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,s]=null!=(a=e.mediaSeekable)?a:[],n=0;Number.isFinite(e.mediaDuration)?n=e.mediaDuration:Number.isFinite(s)&&(n=s);let o=e.remaining?o$(0-(n-r)):o$(r);return e.showDuration?`${o}${t}${o$(n)}`:o};class hw extends uf{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eY,void 0),((e,t,i,a)=>(hm(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eY,this.shadowRoot.querySelector("slot")),hp(this,eY).innerHTML=`${hf(this)}`}static get observedAttributes(){return[...super.observedAttributes,...hb,"disabled"]}connectedCallback(){let{style:e}=ln(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",oF("playback time"));let t=e=>{let{key:i}=e;hg.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;i||a||!hg.includes(r)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){hb.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return lu(this,hv.REMAINING)}set remaining(e){lh(this,hv.REMAINING,e)}get showDuration(){return lu(this,hv.SHOW_DURATION)}set showDuration(e){lh(this,hv.SHOW_DURATION,e)}get noToggle(){return lu(this,hv.NO_TOGGLE)}set noToggle(e){lh(this,hv.NO_TOGGLE,e)}get mediaDuration(){return ll(this,of.MEDIA_DURATION)}set mediaDuration(e){ld(this,of.MEDIA_DURATION,e)}get mediaCurrentTime(){return ll(this,of.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ld(this,of.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(of.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(of.MEDIA_SEEKABLE):this.setAttribute(of.MEDIA_SEEKABLE,e.join(":"))}update(){let e=hf(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let s=e.remaining?oW(0-(r-i)):oW(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",s);let n=oW(r),o=`${s} of ${n}`;e.setAttribute("aria-valuetext",o)})(this),e!==hp(this,eY).innerHTML&&(hp(this,eY).innerHTML=e)}}eY=new WeakMap,hw.getSlotTemplateHTML=function(e,t){return`
    <slot>${hf(t)}</slot>
  `},oJ.customElements.get("media-time-display")||oJ.customElements.define("media-time-display",hw);var hy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hA=(e,t,i)=>(hy(e,t,"read from private field"),i?i.call(e):t.get(e)),hk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hI=(e,t,i,a)=>(hy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class hT{constructor(e,t,i){hk(this,eX,void 0),hk(this,eJ,void 0),hk(this,e0,void 0),hk(this,e1,void 0),hk(this,e2,void 0),hk(this,e5,void 0),hk(this,e3,void 0),hk(this,e4,void 0),hk(this,e7,0),hk(this,e8,(e=performance.now())=>{hI(this,e7,requestAnimationFrame(hA(this,e8))),hI(this,e1,performance.now()-hA(this,e0));let t=1e3/this.fps;if(hA(this,e1)>t){let i,a,r,s;hI(this,e0,e-hA(this,e1)%t);let n=1e3/((e-hA(this,eJ))/++(i=this,a=e2,{set _(value){hI(i,a,value,r)},get _(){return hA(i,a,s)}})._),o=(e-hA(this,e5))/1e3/this.duration,l=hA(this,e3)+o*this.playbackRate;l-hA(this,eX).valueAsNumber>0?hI(this,e4,this.playbackRate/this.duration/n):(hI(this,e4,.995*hA(this,e4)),l=hA(this,eX).valueAsNumber+hA(this,e4)),this.callback(l)}}),hI(this,eX,e),this.callback=t,this.fps=i}start(){0===hA(this,e7)&&(hI(this,e0,performance.now()),hI(this,eJ,hA(this,e0)),hI(this,e2,0),hA(this,e8).call(this))}stop(){0!==hA(this,e7)&&(cancelAnimationFrame(hA(this,e7)),hI(this,e7,0))}update({start:e,duration:t,playbackRate:i}){let a=e-hA(this,eX).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),hI(this,e3,e),hI(this,e5,performance.now()),this.duration=t,this.playbackRate=i}}eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e3=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap;var hM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h_=(e,t,i)=>(hM(e,t,"read from private field"),i?i.call(e):t.get(e)),hS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hx=(e,t,i,a)=>(hM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hL=(e,t,i)=>(hM(e,t,"access private method"),i);let hC=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},hR=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class hD extends uh{constructor(){super(),hS(this,to),hS(this,td),hS(this,tc),hS(this,tp),hS(this,tb),hS(this,tE),hS(this,tw),hS(this,tA),hS(this,e6,void 0),hS(this,e9,void 0),hS(this,te,void 0),hS(this,tt,void 0),hS(this,ti,void 0),hS(this,ta,void 0),hS(this,tr,void 0),hS(this,ts,void 0),hS(this,tn,void 0),hS(this,th,e=>{this.dragging||(oP(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),hx(this,te,this.shadowRoot.querySelectorAll('[part~="box"]')),hx(this,ti,this.shadowRoot.querySelector('[part~="preview-box"]')),hx(this,ta,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);hx(this,tr,parseInt(e.getPropertyValue("--media-box-padding-left"))),hx(this,ts,parseInt(e.getPropertyValue("--media-box-padding-right"))),hx(this,e9,new hT(this.range,h_(this,th),60))}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PAUSED,of.MEDIA_DURATION,of.MEDIA_SEEKABLE,of.MEDIA_CURRENT_TIME,of.MEDIA_PREVIEW_IMAGE,of.MEDIA_PREVIEW_TIME,of.MEDIA_PREVIEW_CHAPTER,of.MEDIA_BUFFERED,of.MEDIA_PLAYBACK_RATE,of.MEDIA_LOADING,of.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",oF("seek")),hL(this,to,tl).call(this),hx(this,e6,this.getRootNode()),null==(e=h_(this,e6))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),hL(this,to,tl).call(this),null==(e=h_(this,e6))||e.removeEventListener("transitionstart",this),hx(this,e6,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===of.MEDIA_CURRENT_TIME||e===of.MEDIA_PAUSED||e===of.MEDIA_ENDED||e===of.MEDIA_LOADING||e===of.MEDIA_DURATION||e===of.MEDIA_SEEKABLE){let e,t,i,a;h_(this,e9).update({start:hC(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),hL(this,to,tl).call(this),e=this.range,t=oW(+hR(this)),i=oW(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===of.MEDIA_BUFFERED&&this.updateBufferedBar();(e===of.MEDIA_DURATION||e===of.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=h_(this,tn),this.updateBar())}}get mediaChaptersCues(){return h_(this,tn)}set mediaChaptersCues(e){var t;hx(this,tn,e),this.updateSegments(null==(t=h_(this,tn))?void 0:t.map(e=>({start:hC(this,e.startTime),end:hC(this,e.endTime)})))}get mediaPaused(){return lu(this,of.MEDIA_PAUSED)}set mediaPaused(e){lh(this,of.MEDIA_PAUSED,e)}get mediaLoading(){return lu(this,of.MEDIA_LOADING)}set mediaLoading(e){lh(this,of.MEDIA_LOADING,e)}get mediaDuration(){return ll(this,of.MEDIA_DURATION)}set mediaDuration(e){ld(this,of.MEDIA_DURATION,e)}get mediaCurrentTime(){return ll(this,of.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ld(this,of.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ll(this,of.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ld(this,of.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(of.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(of.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(of.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(of.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(of.MEDIA_SEEKABLE):this.setAttribute(of.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return lc(this,of.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){lm(this,of.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ll(this,of.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ld(this,of.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return lu(this,of.MEDIA_ENDED)}set mediaEnded(e){lh(this,of.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=hC(this,r)}let{style:a}=ln(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=ln(this.shadowRoot,"#current-rail"),t=ln(this.shadowRoot,'[part~="current-box"]'),i=hL(this,tc,tm).call(this,h_(this,ta)),a=hL(this,tp,tv).call(this,i,this.range.valueAsNumber),r=hL(this,tb,tg).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":hL(this,tA,tk).call(this);break;case"pointermove":hL(this,tE,tf).call(this,e);break;case"pointerup":case"pointerleave":hL(this,tw,ty).call(this,null);break;case"transitionstart":lt(e.target,this)&&setTimeout(()=>hL(this,to,tl).call(this),0)}}}e6=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakMap,tr=new WeakMap,ts=new WeakMap,tn=new WeakMap,to=new WeakSet,tl=function(){hL(this,td,tu).call(this)?h_(this,e9).start():h_(this,e9).stop()},td=new WeakSet,tu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ls(this)},th=new WeakMap,tc=new WeakSet,tm=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?li(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,s=-(a.left-i.left-r/2),n=i.right-a.left-r/2;return{box:{width:r,min:s,max:n},bounds:i,range:a}},tp=new WeakSet,tv=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:s}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tb=new WeakSet,tg=function(e,t){let{width:i,min:a,max:r}=e.box,s=t*e.range.width;if(s<a+h_(this,tr)){let t=e.range.left-e.bounds.left-h_(this,tr);return`${s-i/2+t}px`}if(s>r-h_(this,ts)){let t=e.bounds.right-e.range.right-h_(this,ts);return`${s+i/2-t-e.range.width}px`}return 0},tE=new WeakSet,tf=function(e){let t=[...h_(this,te)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void hL(this,tw,ty).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=ln(this.shadowRoot,"#preview-rail"),r=ln(this.shadowRoot,'[part~="preview-box"]'),s=hL(this,tc,tm).call(this,h_(this,ti)),n=(e.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));let o=hL(this,tp,tv).call(this,s,n),l=hL(this,tb,tg).call(this,s,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${s.box.width}px`),1>Math.abs(Math.round(h_(this,tt))-Math.round(n*i))&&n>.01&&n<.99||(hx(this,tt,n*i),hL(this,tw,ty).call(this,h_(this,tt)))},tw=new WeakSet,ty=function(e){this.dispatchEvent(new oJ.CustomEvent(ov.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tA=new WeakSet,tk=function(){h_(this,e9).stop();let e=hR(this);this.dispatchEvent(new oJ.CustomEvent(ov.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},hD.shadowRootOptions={mode:"open"},hD.getTemplateHTML=function(e){return`
    ${uh.getTemplateHTML(e)}
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

      :host(:is([${of.MEDIA_PREVIEW_IMAGE}], [${of.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${of.MEDIA_PREVIEW_IMAGE}], [${of.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${of.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${of.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${of.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${of.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${of.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${of.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${of.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${of.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${of.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${of.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${of.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${of.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${hn.shadowRootOptions.mode}">
            ${hn.getTemplateHTML({})}
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
  `},oJ.customElements.get("media-time-range")||oJ.customElements.define("media-time-range",hD),oJ.customElements.get("media-volume-range")||oJ.customElements.define("media-volume-range",class extends uh{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_VOLUME,of.MEDIA_MUTED,of.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new oJ.CustomEvent(ov.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",oF("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===of.MEDIA_VOLUME||e===of.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return ll(this,of.MEDIA_VOLUME,1)}set mediaVolume(e){ld(this,of.MEDIA_VOLUME,e)}get mediaMuted(){return lu(this,of.MEDIA_MUTED)}set mediaMuted(e){lh(this,of.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return lc(this,of.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){lm(this,of.MEDIA_VOLUME_UNAVAILABLE,e)}});var hN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hP=(e,t,i)=>(hN(e,t,"read from private field"),i?i.call(e):t.get(e)),hU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hO=(e,t,i,a)=>(hN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let hH={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof hq&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof hq?a.element[a.attributeName]=t:a.value=t}}}};class hW extends oJ.DocumentFragment{constructor(e,t,i=hH){var a;super(),hU(this,tI,void 0),hU(this,tT,void 0),this.append(e.content.cloneNode(!0)),hO(this,tI,h$(this)),hO(this,tT,i),null==(a=i.createCallback)||a.call(i,this,hP(this,tI),t),i.processCallback(this,hP(this,tI),t)}update(e){hP(this,tT).processCallback(this,hP(this,tI),e)}}tI=new WeakMap,tT=new WeakMap;let h$=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let s=new hF;for([i,a]of hV(r.value))if(i){let i=new hq(e,r.name,r.namespaceURI);s.append(i),t.push([a,i])}else s.append(a);r.value=s.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let s=r.data;if(1===r.nodeType||s.includes("{{")){let n=[];if(s)for([i,a]of hV(s))if(i){let i=new hz(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new hQ(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else h$(r,t);return t},hB={},hV=e=>{let t="",i=0,a=hB[e],r=0,s;if(a)return a;for(a=[];s=e[r];r++)"{"===s&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==s||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=s||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),hB[e]=a};class hj{get value(){return""}set value(e){}toString(){return this.value}}let hG=new WeakMap;class hF{constructor(){hU(this,tM,[])}[Symbol.iterator](){return hP(this,tM).values()}get length(){return hP(this,tM).length}item(e){return hP(this,tM)[e]}append(...e){for(let t of e)t instanceof hq&&hG.set(t,this),hP(this,tM).push(t)}toString(){return hP(this,tM).join("")}}tM=new WeakMap;class hq extends hj{constructor(e,t,i){super(),hU(this,tC),hU(this,t_,""),hU(this,tS,void 0),hU(this,tx,void 0),hU(this,tL,void 0),hO(this,tS,e),hO(this,tx,t),hO(this,tL,i)}get attributeName(){return hP(this,tx)}get attributeNamespace(){return hP(this,tL)}get element(){return hP(this,tS)}get value(){return hP(this,t_)}set value(e){hP(this,t_)!==e&&(hO(this,t_,e),hP(this,tC,tR)&&1!==hP(this,tC,tR).length?hP(this,tS).setAttributeNS(hP(this,tL),hP(this,tx),hP(this,tC,tR).toString()):null==e?hP(this,tS).removeAttributeNS(hP(this,tL),hP(this,tx)):hP(this,tS).setAttributeNS(hP(this,tL),hP(this,tx),e))}get booleanValue(){return hP(this,tS).hasAttributeNS(hP(this,tL),hP(this,tx))}set booleanValue(e){if(hP(this,tC,tR)&&1!==hP(this,tC,tR).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}t_=new WeakMap,tS=new WeakMap,tx=new WeakMap,tL=new WeakMap,tC=new WeakSet,tR=function(){return hG.get(this)};class hz extends hj{constructor(e,t){super(),hU(this,tD,void 0),hU(this,tN,void 0),hO(this,tD,e),hO(this,tN,t?[...t]:[new Text])}get replacementNodes(){return hP(this,tN)}get parentNode(){return hP(this,tD)}get nextSibling(){return hP(this,tN)[hP(this,tN).length-1].nextSibling}get previousSibling(){return hP(this,tN)[0].previousSibling}get value(){return hP(this,tN).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),hO(this,tN,function(e,t,i,a=null){let r=0,s,n,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(s=t[r];r<l;)o=i[r++],n=s?s.nextSibling:a,s==o?s=n:r<l&&i[r]==n?(e.replaceChild(o,s),s=n):e.insertBefore(o,s);for(;s!=a;)n=s.nextSibling,e.removeChild(s),s=n}return i}(hP(this,tN)[0].parentNode,hP(this,tN),t,this.nextSibling))}}tD=new WeakMap,tN=new WeakMap;class hQ extends hz{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let hZ={string:e=>String(e)};class hK{constructor(e){this.template=e,this.state=void 0}}let hY=new WeakMap,hX=new WeakMap,hJ={partial:(e,t)=>{t[e.expression]=new hK(e.template)},if:(e,t)=>{var i;if(h5(e.expression,t))if(hY.get(e)!==e.template){hY.set(e,e.template);let i=new hW(e.template,t,h1);e.replace(i),hX.set(e,i)}else null==(i=hX.get(e))||i.update(t);else e.replace(""),hY.delete(e),hX.delete(e)}},h0=Object.keys(hJ),h1={processCallback(e,t,i){var a,r;if(i)for(let[e,s]of t){if(s instanceof hQ){if(!s.directive){let e=h0.find(e=>s.template.hasAttribute(e));e&&(s.directive=e,s.expression=s.template.getAttribute(e))}null==(a=hJ[s.directive])||a.call(hJ,s,i);continue}let t=h5(e,i);if(t instanceof hK){hY.get(s)!==t.template?(hY.set(s,t.template),s.value=t=new hW(t.template,t.state,h1),hX.set(s,t)):null==(r=hX.get(s))||r.update(t.state);continue}t?(s instanceof hq&&s.attributeName.startsWith("aria-")&&(t=String(t)),s instanceof hq?"boolean"==typeof t?s.booleanValue=t:"function"==typeof t?s.element[s.attributeName]=t:s.value=t:(s.value=t,hY.delete(s),hX.delete(s))):s instanceof hq?s.value=void 0:(s.value=void 0,hY.delete(s),hX.delete(s))}}},h2={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=hZ[t])?void 0:i.call(hZ,e)}};function h5(e,t={}){var i,a,r,s,n,o,l;let d=(function(e,t){let i,a,r,s=[];for(;e;){for(let s in r=null,i=e.length,t)(a=t[s].exec(e))&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&s.push({token:e.substr(0,i),type:void 0}),r&&s.push(r),e=e.substr(i+(r?r.token.length:0))}return s})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return h3(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return h3(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(s=l[e+1])?void 0:s.token,d=null==(n=l[e+2])?void 0:n.token;i&&"="===a&&(o[i]=h7(d,t))}return i}if(1===d.length)return h4(d[0])?h7(d[0].token,t):h3(e);if(2===d.length){let i=h2[null==(o=d[0])?void 0:o.token];return i&&h4(d[1])?i(h7(d[1].token,t)):h3(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=h2[i];if(!a||!h4(d[0])||!h4(d[2]))return h3(e);let r=h7(d[0].token,t);return a(r,"|"===i?d[2].token:h7(d[2].token,t))}}function h3(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function h4({type:e}){return["number","boolean","string","param"].includes(e)}function h7(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):oU(e)?parseFloat(e):t[e]}var h8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h6=(e,t,i)=>(h8(e,t,"read from private field"),i?i.call(e):t.get(e)),h9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ce=(e,t,i,a)=>(h8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ct=(e,t,i)=>(h8(e,t,"access private method"),i);let ci={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},ca=o0.createElement("template");ca.innerHTML=`
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
`;class cr extends oJ.HTMLElement{constructor(){super(),h9(this,tH),h9(this,t$),h9(this,tP,void 0),h9(this,tU,void 0),h9(this,tO,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(ci[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ow.BREAKPOINTS_COMPUTED,this.render),ct(this,tH,tW).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=h6(this,tP))?e:this.constructor.template}set template(e){ce(this,tO,null),ce(this,tP,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>ci[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=ci[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(oU(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&ct(this,t$,tB).call(this)}connectedCallback(){ct(this,t$,tB).call(this)}createRenderer(){this.template&&this.template!==h6(this,tU)&&(ce(this,tU,this.template),this.renderer=new hW(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(ca.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function cs(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function cn(e){return e.split("-")[0]}tP=new WeakMap,tU=new WeakMap,tO=new WeakMap,tH=new WeakSet,tW=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},t$=new WeakSet,tB=function(){var e;let t=this.getAttribute("template");if(!t||t===h6(this,tO))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){ce(this,tO,t),ce(this,tP,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(ce(this,tO,t),cs(t).then(e=>{let t=o0.createElement("template");t.innerHTML=e,ce(this,tP,t),this.createRenderer()}).catch(console.error))},cr.observedAttributes=["template"],cr.processor=h1,oJ.customElements.get("media-theme")||oJ.customElements.define("media-theme",cr);class co extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class cl extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var cd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cu=(e,t,i)=>(cd(e,t,"read from private field"),i?i.call(e):t.get(e)),ch=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cc=(e,t,i,a)=>(cd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cm=(e,t,i)=>(cd(e,t,"access private method"),i);function cp({type:e,text:t,value:i,checked:a}){let r=o0.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let s=o0.createElement("span");return s.textContent=t,r.append(s),r}function cv(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let cb="style",cg="hidden",cE="disabled";class cf extends oJ.HTMLElement{constructor(){if(super(),ch(this,tZ),ch(this,tX),ch(this,t0),ch(this,t2),ch(this,t3),ch(this,t6),ch(this,ie),ch(this,ii),ch(this,ir),ch(this,io),ch(this,id),ch(this,ih),ch(this,im),ch(this,iv),ch(this,ig),ch(this,iw),ch(this,iA),ch(this,tV,null),ch(this,tj,null),ch(this,tG,null),ch(this,tF,new Set),ch(this,tq,void 0),ch(this,tz,!1),ch(this,tQ,null),ch(this,tY,()=>{let e=cu(this,tF),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));cc(this,tF,t)}),ch(this,t7,()=>{cm(this,t6,t9).call(this),cm(this,ie,it).call(this,!1)}),ch(this,t8,()=>{cm(this,t6,t9).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),cc(this,tq,new MutationObserver(cu(this,tY))),cu(this,tq).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[cE,cg,cb,"anchor",ob.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":cm(this,tZ,tK).call(this,e);break;case"invoke":cm(this,t0,t1).call(this,e);break;case"click":cm(this,ii,ia).call(this,e);break;case"toggle":cm(this,io,il).call(this,e);break;case"focusout":cm(this,ih,ic).call(this,e);break;case"keydown":cm(this,im,ip).call(this,e)}}connectedCallback(){var e,t;cc(this,tQ,lo(this.shadowRoot,":host")),cm(this,tX,tJ).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),cc(this,tV,o6(this)),null==(t=null==(e=cu(this,tV))?void 0:e.associateElement)||t.call(e,this),this.hidden||(o3(cy(this),cu(this,t7)),o3(this,cu(this,t8)))}disconnectedCallback(){var e,t;o4(cy(this),cu(this,t7)),o4(this,cu(this,t8)),this.disable(),null==(t=null==(e=cu(this,tV))?void 0:e.unassociateElement)||t.call(e,this),cc(this,tV,null)}attributeChangedCallback(e,t,i){var a,r,s,n;e===cg&&i!==t?(cu(this,tz)||cc(this,tz,!0),this.hidden?cm(this,t3,t4).call(this):cm(this,t2,t5).call(this),this.dispatchEvent(new cl({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===ob.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=cu(this,tV))?void 0:a.unassociateElement)||r.call(a,this),cc(this,tV,null)),i&&this.isConnected&&(cc(this,tV,o6(this)),null==(n=null==(s=cu(this,tV))?void 0:s.associateElement)||n.call(s,this))):e===cE&&i!==t?null==i?this.enable():this.disable():e===cb&&i!==t&&cm(this,tX,tJ).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=lr(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(cw)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&cm(this,iA,ik).call(this,t)}focus(){if(cc(this,tj,la()),this.items.length){cm(this,iw,iy).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=cm(this,iv,ib).call(this,e);i&&(cm(this,iA,ik).call(this,i,"checkbox"===i.type),cu(this,tG)&&!this.hidden&&(null==(t=cu(this,tj))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,s=null!=(i=null!=(t=cm(this,iv,ib).call(this,e))?t:cm(this,ig,iE).call(this))?i:r[0],n=Math.max(0,r.indexOf(s));"ArrowDown"===a?n++:"ArrowUp"===a?n--:"Home"===e.key?n=0:"End"===e.key&&(n=r.length-1),n<0&&(n=r.length-1),n>r.length-1&&(n=0),cm(this,iw,iy).call(this,r[n]),r[n].focus()}}function cw(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function cy(e){var t;return null!=(t=e.getAttribute("bounds")?li(e,`#${e.getAttribute("bounds")}`):o8(e)||e.parentElement)?t:e}tV=new WeakMap,tj=new WeakMap,tG=new WeakMap,tF=new WeakMap,tq=new WeakMap,tz=new WeakMap,tQ=new WeakMap,tZ=new WeakSet,tK=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||cu(this,tY).call(this)},tY=new WeakMap,tX=new WeakSet,tJ=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},t0=new WeakSet,t1=function(e){cc(this,tG,e.relatedTarget),lt(this,e.relatedTarget)||(this.hidden=!this.hidden)},t2=new WeakSet,t5=function(){var e;null==(e=cu(this,tG))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),o3(cy(this),cu(this,t7)),o3(this,cu(this,t8))},t3=new WeakSet,t4=function(){var e;null==(e=cu(this,tG))||e.setAttribute("aria-expanded","false"),o4(cy(this),cu(this,t7)),o4(this,cu(this,t8))},t7=new WeakMap,t8=new WeakMap,t6=new WeakSet,t9=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(cn(i))?"y":"x")?"y":"x",s="y"===r?"height":"width",n=cn(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[s]/2-t[s]/2;switch(n){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let s,n;return{anchor:(i=e,a=t.offsetParent,s=i.getBoundingClientRect(),n=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:s.x-n.x,y:s.y-n.y,width:s.width,height:s.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=cy(this).getBoundingClientRect(),r=a.width-t-e,s=a.height-i-this.offsetHeight,{style:n}=cu(this,tQ);n.setProperty("position","absolute"),n.setProperty("right",`${Math.max(0,r)}px`),n.setProperty("--_menu-bottom",`${s}px`);let o=getComputedStyle(this),l=n.getPropertyValue("--_menu-bottom")===o.bottom?s:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},ie=new WeakSet,it=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=cu(this,tQ);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),cm(this,t6,t9).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),cm(this,t6,t9).call(this);a.removeProperty("--media-menu-transition-in")},ii=new WeakSet,ia=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(cu(this,ir,is))){null==(t=cu(this,tj))||t.focus(),this.hidden=!0;return}let i=cm(this,iv,ib).call(this,e);!i||i.hasAttribute("disabled")||(cm(this,iw,iy).call(this,i),this.handleSelect(e))},ir=new WeakSet,is=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},io=new WeakSet,il=function(e){if(e.target===this)return;cm(this,id,iu).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new co({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);cm(this,ie,it).call(this,!0)},id=new WeakSet,iu=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},ih=new WeakSet,ic=function(e){var t;lt(this,e.relatedTarget)||(cu(this,tz)&&(null==(t=cu(this,tj))||t.focus()),cu(this,tG)&&cu(this,tG)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},im=new WeakSet,ip=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(n))if(e.preventDefault(),e.stopPropagation(),"Tab"===n){if(cu(this,tz)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===n?(null==(s=cu(this,tj))||s.focus(),cu(this,tz)&&(this.hidden=!0)):"Enter"===n||" "===n?this.handleSelect(e):this.handleMove(e)},iv=new WeakSet,ib=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},ig=new WeakSet,iE=function(){return this.items.find(e=>0===e.tabIndex)},iw=new WeakSet,iy=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},iA=new WeakSet,ik=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},cf.shadowRootOptions={mode:"open"},cf.getTemplateHTML=function(e){return`
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
  `},oJ.customElements.get("media-chrome-menu")||oJ.customElements.define("media-chrome-menu",cf);var cA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ck=(e,t,i)=>(cA(e,t,"read from private field"),i?i.call(e):t.get(e)),cI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cT=(e,t,i,a)=>(cA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cM=(e,t,i)=>(cA(e,t,"access private method"),i);let c_="type",cS="value",cx="checked",cL="disabled";class cC extends oJ.HTMLElement{constructor(){if(super(),cI(this,iM),cI(this,iS),cI(this,iL),cI(this,iD),cI(this,iP),cI(this,iO),cI(this,iI,!1),cI(this,iT,void 0),cI(this,iR,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,s=o0.createElement("span");s.textContent=null!=r?r:"",i.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=o7(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[c_,cL,cx,cS]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),cR(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":cM(this,iM,i_).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":cM(this,iP,iU).call(this,e);break;case"keyup":cM(this,iD,iN).call(this,e)}}attributeChangedCallback(e,t,i){e===cx&&cR(this)&&!ck(this,iI)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===c_&&i!==t?this.role="menuitem"+i:e===cL&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(cL)||this.enable(),this.role="menuitem"+this.type,cT(this,iT,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),cM(this,iO,iH).call(this)}disconnectedCallback(){this.disable(),cM(this,iO,iH).call(this),cT(this,iT,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=lr(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(c_))?e:""}set type(e){this.setAttribute(c_,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(cS))?e:this.text}set value(e){this.setAttribute(cS,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(cR(this))return"true"===this.getAttribute("aria-checked")}set checked(e){cR(this)&&(cT(this,iI,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!cR(this)&&this.invokeTargetElement&&lt(this,e.target)&&this.invokeTargetElement.dispatchEvent(new co({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function cR(e){return"radio"===e.type||"checkbox"===e.type}iI=new WeakMap,iT=new WeakMap,iM=new WeakSet,i_=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?cM(this,iS,ix).call(this):cM(this,iL,iC).call(this))},iS=new WeakSet,ix=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",ck(this,iR)),this.submenuElement.addEventListener("addmenuitem",ck(this,iR)),this.submenuElement.addEventListener("removemenuitem",ck(this,iR)),ck(this,iR).call(this)},iL=new WeakSet,iC=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",ck(this,iR)),this.submenuElement.removeEventListener("addmenuitem",ck(this,iR)),this.submenuElement.removeEventListener("removemenuitem",ck(this,iR)),ck(this,iR).call(this)},iR=new WeakMap,iD=new WeakSet,iN=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",cM(this,iD,iN))},iP=new WeakSet,iU=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",cM(this,iD,iN)):this.addEventListener("keyup",cM(this,iD,iN),{once:!0})},iO=new WeakSet,iH=function(){var e;let t=null==(e=ck(this,iT))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},cC.shadowRootOptions={mode:"open"},cC.getTemplateHTML=function(e){return`
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
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},cC.getSuffixSlotInnerHTML=function(e){return""},oJ.customElements.get("media-chrome-menu-item")||oJ.customElements.define("media-chrome-menu-item",cC);class cD extends cf{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:o8(this).querySelector("media-settings-menu-button")}}cD.getTemplateHTML=function(e){return`
    ${cf.getTemplateHTML(e)}
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
  `},oJ.customElements.get("media-settings-menu")||oJ.customElements.define("media-settings-menu",cD);class cN extends cC{}cN.shadowRootOptions={mode:"open"},cN.getTemplateHTML=function(e){return`
    ${cC.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},cN.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},oJ.customElements.get("media-settings-menu-item")||oJ.customElements.define("media-settings-menu-item",cN);class cP extends dY{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=lr(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new co({relatedTarget:this}))}}oJ.customElements.get("media-chrome-menu-button")||oJ.customElements.define("media-chrome-menu-button",cP);class cU extends cP{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",oF("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:o8(this).querySelector("media-settings-menu")}}cU.getSlotTemplateHTML=function(){return`
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
  `},cU.getTooltipContentHTML=function(){return oF("Settings")},oJ.customElements.get("media-settings-menu-button")||oJ.customElements.define("media-settings-menu-button",cU);var cO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cH=(e,t,i)=>(cO(e,t,"read from private field"),i?i.call(e):t.get(e)),cW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},c$=(e,t,i,a)=>(cO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cB=(e,t,i)=>(cO(e,t,"access private method"),i);iW=new WeakMap,i$=new WeakMap,iB=new WeakSet,iV=function(){if(cH(this,i$)===JSON.stringify(this.mediaAudioTrackList))return;c$(this,i$,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=cp({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(cv(this,"checked-indicator")),this.defaultSlot.append(e)}},ij=new WeakSet,iG=function(){if(null==this.value)return;let e=new oJ.CustomEvent(ov.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},oJ.customElements.get("media-audio-track-menu")||oJ.customElements.define("media-audio-track-menu",class extends cf{constructor(){super(...arguments),cW(this,iB),cW(this,ij),cW(this,iW,[]),cW(this,i$,void 0)}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_AUDIO_TRACK_LIST,of.MEDIA_AUDIO_TRACK_ENABLED,of.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===of.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===of.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;c$(this,iW,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(oN)),cB(this,iB,iV).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cB(this,ij,iG))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cB(this,ij,iG))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=o8(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return cH(this,iW)}set mediaAudioTrackList(e){c$(this,iW,e),cB(this,iB,iV).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=lc(this,of.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){lm(this,of.MEDIA_AUDIO_TRACK_ENABLED,e)}});let cV=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class cj extends cP{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_AUDIO_TRACK_ENABLED,of.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",oF("Audio"))}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=o8(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=lc(this,of.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){lm(this,of.MEDIA_AUDIO_TRACK_ENABLED,e)}}cj.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${cV}</slot>
  `},cj.getTooltipContentHTML=function(){return oF("Audio")},oJ.customElements.get("media-audio-track-menu-button")||oJ.customElements.define("media-audio-track-menu-button",cj);var cG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cq=(e,t,i)=>(cG(e,t,"access private method"),i);let cz=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class cQ extends cf{constructor(){super(...arguments),cF(this,iq),cF(this,iQ),cF(this,iF,void 0)}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_SUBTITLES_LIST,of.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_SUBTITLES_LIST&&t!==i?cq(this,iq,iz).call(this):e===of.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cq(this,iQ,iZ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cq(this,iQ,iZ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:o8(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return cZ(this,of.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){cK(this,of.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return cZ(this,of.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){cK(this,of.MEDIA_SUBTITLES_SHOWING,e)}}iF=new WeakMap,iq=new WeakSet,iz=function(){var e,t,i,a,r,s;if(cG(this,t=iF,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=iF,r=JSON.stringify(this.mediaSubtitlesList),cG(this,a,"write to private field"),s?s.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let n=!this.value,o=cp({type:"radio",text:this.formatMenuItemText(oF("Off")),value:"off",checked:n});for(let t of(o.prepend(cv(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=cp({type:"radio",text:this.formatMenuItemText(t.label,t),value:lV(t),checked:this.value==lV(t)});i.prepend(cv(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(cv(this,"captions-indicator")),this.defaultSlot.append(i)}},iQ=new WeakSet,iZ=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(of.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new oJ.CustomEvent(ov.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new oJ.CustomEvent(ov.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},cQ.getTemplateHTML=function(e){return`
    ${cf.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${cz}</slot>
  `};let cZ=(e,t)=>{let i=e.getAttribute(t);return i?l$(i):[]},cK=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=lj(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};oJ.customElements.get("media-captions-menu")||oJ.customElements.define("media-captions-menu",cQ);let cY=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,cX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,cJ=e=>{e.setAttribute("aria-checked",lz(e).toString())};class c0 extends cP{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_SUBTITLES_LIST,of.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",oF("closed captions")),cJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_SUBTITLES_SHOWING&&cJ(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=o8(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return c1(this,of.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){c2(this,of.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return c1(this,of.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){c2(this,of.MEDIA_SUBTITLES_SHOWING,e)}}c0.getSlotTemplateHTML=function(){return`
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
      <slot name="on">${cY}</slot>
      <slot name="off">${cX}</slot>
    </slot>
  `},c0.getTooltipContentHTML=function(){return oF("Captions")};let c1=(e,t)=>{let i=e.getAttribute(t);return i?l$(i):[]},c2=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=lj(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};oJ.customElements.get("media-captions-menu-button")||oJ.customElements.define("media-captions-menu-button",c0);var c5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},c3=(e,t,i)=>(c5(e,t,"read from private field"),i?i.call(e):t.get(e)),c4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},c7=(e,t,i)=>(c5(e,t,"access private method"),i);let c8="rates";iK=new WeakMap,iY=new WeakSet,iX=function(){for(let e of(this.defaultSlot.textContent="",c3(this,iK))){let t=cp({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(cv(this,"checked-indicator")),this.defaultSlot.append(t)}},iJ=new WeakSet,i0=function(){if(!this.value)return;let e=new oJ.CustomEvent(ov.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},oJ.customElements.get("media-playback-rate-menu")||oJ.customElements.define("media-playback-rate-menu",class extends cf{constructor(){super(),c4(this,iY),c4(this,iJ),c4(this,iK,new lH(this,c8,{defaultValue:u3})),c7(this,iY,iX).call(this)}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PLAYBACK_RATE,c8]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===of.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===c8&&t!=i&&(c3(this,iK).value=i,c7(this,iY,iX).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",c7(this,iJ,i0))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",c7(this,iJ,i0))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:o8(this).querySelector("media-playback-rate-menu-button")}get rates(){return c3(this,iK)}set rates(e){e?Array.isArray(e)?c3(this,iK).value=e.join(" "):"string"==typeof e&&(c3(this,iK).value=e):c3(this,iK).value="",c7(this,iY,iX).call(this)}get mediaPlaybackRate(){return ll(this,of.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ld(this,of.MEDIA_PLAYBACK_RATE,e)}});class c6 extends cP{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===of.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",oF("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:o8(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ll(this,of.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ld(this,of.MEDIA_PLAYBACK_RATE,e)}}c6.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},c6.getTooltipContentHTML=function(){return oF("Playback rate")},oJ.customElements.get("media-playback-rate-menu-button")||oJ.customElements.define("media-playback-rate-menu-button",c6);var c9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},me=(e,t,i)=>(c9(e,t,"read from private field"),i?i.call(e):t.get(e)),mt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mi=(e,t,i,a)=>(c9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ma=(e,t,i)=>(c9(e,t,"access private method"),i);i1=new WeakMap,i2=new WeakMap,i5=new WeakSet,i3=function(){if(me(this,i2).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&me(this,i2).mediaHeight===this.mediaHeight)return;me(this,i2).mediaRenditionList=JSON.stringify(this.mediaRenditionList),me(this,i2).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=cp({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(cv(this,"checked-indicator")),this.defaultSlot.append(e)}let i=cp({type:"radio",text:t?this.formatMenuItemText(`${oF("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(oF("Auto")),value:"auto",checked:t}),a=this.mediaHeight>0?`${oF("Auto")} (${this.mediaHeight}p)`:oF("Auto");i.dataset.description=a,i.prepend(cv(this,"checked-indicator")),this.defaultSlot.append(i)},i4=new WeakSet,i7=function(){if(null==this.value)return;let e=new oJ.CustomEvent(ov.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},oJ.customElements.get("media-rendition-menu")||oJ.customElements.define("media-rendition-menu",class extends cf{constructor(){super(...arguments),mt(this,i5),mt(this,i4),mt(this,i1,[]),mt(this,i2,{})}static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_RENDITION_LIST,of.MEDIA_RENDITION_SELECTED,of.MEDIA_RENDITION_UNAVAILABLE,of.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===of.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",ma(this,i5,i3).call(this);else if(e===of.MEDIA_RENDITION_LIST&&t!==i)mi(this,i1,null==i?void 0:i.split(/\s+/).map(oR)),ma(this,i5,i3).call(this);else e===of.MEDIA_HEIGHT&&t!==i&&ma(this,i5,i3).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ma(this,i4,i7))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ma(this,i4,i7))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:o8(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return me(this,i1)}set mediaRenditionList(e){mi(this,i1,e),ma(this,i5,i3).call(this)}get mediaRenditionSelected(){return lc(this,of.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){lm(this,of.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ll(this,of.MEDIA_HEIGHT)}set mediaHeight(e){ld(this,of.MEDIA_HEIGHT,e)}});let mr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class ms extends cP{static get observedAttributes(){return[...super.observedAttributes,of.MEDIA_RENDITION_SELECTED,of.MEDIA_RENDITION_UNAVAILABLE,of.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",oF("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:o8(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return lc(this,of.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){lm(this,of.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ll(this,of.MEDIA_HEIGHT)}set mediaHeight(e){ld(this,of.MEDIA_HEIGHT,e)}}ms.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${mr}</slot>
  `},ms.getTooltipContentHTML=function(){return oF("Quality")},oJ.customElements.get("media-rendition-menu-button")||oJ.customElements.define("media-rendition-menu-button",ms);let mn=oJ.document?.createElement?.("template");mn&&(mn.innerHTML=`
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

  `);class mo extends cr{static template=mn}oJ.customElements&&!oJ.customElements.get("media-theme-sutro")&&oJ.customElements.define("media-theme-sutro",mo);var ml=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),md={className:"class",htmlFor:"for"};function mu(e,t,i){e[t]=i,null==i&&t in(globalThis.HTMLElement?.prototype??{})&&e.removeAttribute(t)}var mh=function({react:e,tagName:t,elementClass:i,events:a,displayName:r,toAttributeName:s=function(e){return e.toLowerCase()},toAttributeValue:n=function(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:"object"!=typeof e||null===e?e:void 0}}){let o=Number.parseInt(e.version)>=19,l=e.forwardRef((r,l)=>{let d=e.useRef(null),u=e.useRef(new Map),h={},c={},m={},p={};for(let[e,t]of Object.entries(r)){if(ml.has(e)){m[e]=t;continue}let a=s(md[e]??e);if(e in i.prototype&&!(e in(globalThis.HTMLElement?.prototype??{}))&&!i.observedAttributes?.some(e=>e===a)){p[e]=t;continue}if(e.startsWith("on")){h[e]=t;continue}let r=n(t);a&&null!=r&&(c[a]=String(r),o||(m[a]=r)),a&&o&&(m[a]=t)}if("undefined"!=typeof window){for(let t in h){let i=h[t],r=t.endsWith("Capture"),s=(a?.[t]??t.slice(2).toLowerCase()).slice(0,r?-7:void 0);e.useLayoutEffect(()=>{let e=d?.current;if(e&&"function"==typeof i)return e.addEventListener(s,i,r),()=>{e.removeEventListener(s,i,r)}},[d?.current,i])}e.useLayoutEffect(()=>{if(null===d.current)return;let e=new Map;for(let t in p)mu(d.current,t,p[t]),u.current.delete(t),e.set(t,p[t]);for(let[e,t]of u.current)mu(d.current,e,void 0);u.current=e})}if("undefined"==typeof window&&i?.getTemplateHTML&&i?.shadowRootOptions){let{mode:t,delegatesFocus:a}=i.shadowRootOptions;m.children=[e.createElement("template",{shadowrootmode:t,shadowrootdelegatesfocus:a,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(c)}}),m.children]}return e.createElement(t,{...m,ref:e.useCallback(e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)},[l])})});return l.displayName=r??i.name,l}({react:nB.default,tagName:"media-theme-sutro",elementClass:mo});let mc="mux.com";function mm(e,t){let i=mp(e);if(!i)return e;let a=e.providerMetadata?.mux?.thumbnailTime??t?.thumbnailTime??t?.startTime,r={...e,sources:[{src:`https://stream.${t?.customDomain??mc}/${i}.m3u8`,type:"application/x-mpegURL"}],poster:mv(i,{thumbnailTime:a,customDomain:t?.customDomain,token:t?.tokens?.thumbnail})};return a>=0&&(r.thumbnailTime=a),r}function mp(e){let t=e.providerMetadata?.mux??e.externalIds;return t?.playbackId}let mv=(e,{token:t,thumbnailTime:i,width:a,customDomain:r=mc}={})=>{let s,n=null==t?i:void 0,{aud:o}=(s=(t??"").split(".")[1])?JSON.parse(decodeURIComponent(atob(s.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{};if(!t||"t"===o){let i;return`https://image.${r}/${e}/thumbnail.webp${(i=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})({token:t,time:n,width:a}).toString())?"?"+i:""}`}};e.s(["getPlaybackId",()=>mp,"getPosterURLFromPlaybackId",()=>mv,"transform",()=>mm],59206);let mb=JSON.parse(e.i(47167).default.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??'{"path":"/api/video","folder":"videos","provider":"mux"}'??"{}"),mg=`${mb.folder??"videos"}/`;function mE(e){if("string"==typeof e)return e.split(/[#?]/)[0].split(".").pop()?.trim()}let mf=(0,nB.forwardRef)((t,i)=>{if("string"==typeof t.playbackId)return a??(a=(0,nB.lazy)(()=>e.A(56423))),(0,n$.jsx)(a,{ref:i,...t,controls:!1});let n=mE(t.src);return"m3u8"===n?(r??(r=(0,nB.lazy)(()=>e.A(52953))),(0,n$.jsx)(r,{ref:i,...t,controls:!1})):"mpd"===n?(s??(s=(0,nB.lazy)(()=>e.A(64594))),(0,n$.jsx)(s,{ref:i,...t,controls:!1})):(0,n$.jsx)("video",{ref:i,...t,controls:!1})}),mw=(0,nB.forwardRef)((e,t)=>{let i,a,{style:r,children:s,asset:n,controls:o=!0,poster:l,blurDataURL:d,theme:u=mh,...h}=e,c=nB.Children.toArray(s).find(e=>"object"==typeof e&&"type"in e&&"poster"===e.props.slot);(0,nB.isValidElement)(c)&&(l="",d=void 0,i=c,s=nB.Children.toArray(s).filter(e=>e!==c));let m={},p=n?mp(n):void 0,v=!0;if(p&&n?.status==="ready"&&(h.src=void 0,h.playbackId=p,l&&((v=l!==mv(p,h))||(a=`${mv(p,{...h,width:480})} 480w,${mv(p,{...h,width:640})} 640w,${mv(p,{...h,width:960})} 960w,${mv(p,{...h,width:1280})} 1280w,${mv(p,{...h,width:1600})} 1600w,${mv(p,{...h})} 1920w`))),d){let e=!v&&d===n?.blurDataURL,t=v&&d!==n?.blurDataURL;if(e||t){var b;m.gridArea="1/1",m.width="100%",m.height="100%",m.color="transparent",m.backgroundSize="cover",m.backgroundPosition="center",m.backgroundRepeat="no-repeat",m.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${b=d,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${b}"/></g></svg>`.replace(/#/g,"%23")}')`}}if(delete h.thumbnailTime,o&&u){let e=h["data-next-video"];return l&&(i=(0,n$.jsx)("img",{slot:"poster",src:v?l:void 0,srcSet:a,style:m,decoding:"async","aria-hidden":"true"}),l=""),(0,n$.jsxs)(u,{"data-next-video":e,style:{display:"grid",...r},children:[i,(0,n$.jsx)(nB.Suspense,{fallback:null,children:(0,n$.jsxs)(mf,{suppressHydrationWarning:!0,ref:t,style:{gridArea:"1/1"},slot:"media",poster:l,crossOrigin:"",...h,children:[p&&(0,n$.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${p}/storyboard.vtt`}),s]})})]})}return(0,n$.jsx)(nB.Suspense,{fallback:null,children:(0,n$.jsxs)(mf,{suppressHydrationWarning:!0,ref:t,style:{gridArea:"1/1",...r},controls:!1!==o||void 0,poster:l,crossOrigin:"",...h,children:[p&&(0,n$.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${p}/storyboard.vtt`}),s]})})});function my({status:e,hidden:t}){let i="",a="";switch(e){case"error":i="Error",a="An error occurred while uploading your video. Please check the CLI logs for more info.";break;case"sourced":i="Video is not processing",a="Make sure to run next-video sync. The currently loaded video is the source file.";break;default:i="Upload in progress...",a="Your video file is being uploaded. The currently loaded video is the source file."}return(0,n$.jsxs)(n$.Fragment,{children:[(0,n$.jsx)("style",{children:`
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
        `}),(0,n$.jsxs)("div",{role:"alert",className:`next-video-alert next-video-alert-${e}`,hidden:t,children:["error"===e?(0,n$.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,n$.jsx)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}):(0,n$.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,n$.jsx)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,n$.jsx)("h5",{children:i}),(0,n$.jsx)("div",{children:a})]})]})}async function mA({config:e,src:t,width:i,height:a}){let r=`${e.path}?url=${encodeURIComponent(`${t}`)}`;return i&&(r+=`&w=${i}`),a&&(r+=`&h=${a}`),`${r}`}var mk=e.i(59206);function mI(e){let t=e.providerMetadata?.["vercel-blob"]??e.externalIds;if(!t)return e;let i={src:t.url};return t.contentType&&(i.type=t.contentType),{...e,sources:[i]}}e.s(["transform",()=>mI],95286);var mT=e.i(95286);function mM(e){let t=e.providerMetadata?.backblaze;if(!t)return e;let i=new URL(t.endpoint);i.hostname=`${t.bucket}.${i.hostname}`,i.pathname=t.key;let a={src:`${i}`};return{...e,sources:[a]}}e.s(["transform",()=>mM],56394);var m_=e.i(56394);function mS(e){let t=e.providerMetadata?.["amazon-s3"];if(!t)return e;let i=new URL(t.endpoint);i.hostname=`${t.bucket}.${i.hostname}`,i.pathname=t.key;let a={src:`${i}`};return{...e,sources:[a]}}e.s(["transform",()=>mS],42808);var mx=e.i(42808);function mL(e){let t=e.providerMetadata?.["cloudflare-r2"];if(!t)return e;let i=new URL(t.bucketUrlPublic);i.pathname=t.key;let a={src:`${i}`};return{...e,sources:[a]}}e.s(["transform",()=>mL],72657);var mC=e.i(72657);e.s([],28617),e.i(28617),e.s(["amazonS3",0,mx,"backblaze",0,m_,"cloudflareR2",0,mC,"mux",0,mk,"vercelBlob",0,mT],60223);var mR=e.i(60223);let mD=(0,nB.forwardRef)((e,t)=>{var i,a,r;let s,{as:n=mw,loader:o=mA,transform:l=mN,className:d,style:u,src:h,width:c,height:m}=e,[p,v]=(0,nB.useState)("object"==typeof h?h:void 0),[b,g]=(0,nB.useState)(!1);"object"==typeof h&&(p=h,h=void 0);let E={src:h,width:c,height:m},f=(i=e=>v(e),async e=>{if("string"==typeof E.src)try{let t=await o({...E,config:mb}),a=await fetch(t,{signal:e}),r=await a.json();if(a.ok)i(r);else{let e=`[next-video] The request to ${a.url} failed. `;throw e+=`Did you configure the \`${mb.path}\` route to handle video API requests?
`,Error(e)}}catch(t){e.aborted||console.error(t)}}),w=p?.status,y=mE(h);!function(e,t=5e3){var i,a;let r,s=(0,nB.useRef)(new AbortController);(0,nB.useEffect)(()=>(s.current=new AbortController,e(s.current.signal),()=>{s.current.abort()}),[]),i=(0,nB.useCallback)(()=>e(s.current.signal),[]),a=t,r=(0,nB.useRef)(null),(0,nB.useEffect)(()=>{r.current=i}),(0,nB.useEffect)(()=>{let e=async()=>{await r.current?.()};if(null!=a){let t=setInterval(e,a);return()=>clearInterval(t)}},[a])}(f,"string"!=typeof h||"ready"==w||["m3u8","mpd"].includes(y??"")?null:1e3);let A=function(e,t){let{asset:i}=t,{controls:a=!0,as:r,className:s,style:n,src:o,poster:l,blurDataURL:d,loader:u,transform:h,...c}=e,m={src:o,poster:l,controls:a,blurDataURL:d,...c};if("object"==typeof l&&(m.poster=l.src,m.blurDataURL??(m.blurDataURL=l.blurDataURL)),i)if("ready"===i.status){m.blurDataURL??(m.blurDataURL=i.blurDataURL);let e=h(i,m);e&&(m.src=e.sources?.[0]?.src,m.poster??(m.poster=e.poster),m.thumbnailTime??(m.thumbnailTime=e.thumbnailTime))}else{var p;p=i.originalFilePath,m.src=p?.startsWith(mg)?p?.replace(mg,"_next-video/"):p}return m}({...e,transform:l,src:h},{asset:p});return"function"==typeof(a=n)&&(s=Object.getPrototypeOf(a)).prototype&&s.prototype.isReactComponent||"function"==typeof n||"object"==typeof(r=n)&&"symbol"==typeof r.$$typeof&&["react.memo","react.forward_ref"].includes(r.$$typeof.description)||console.warn("The `as` property is not a valid component:",n),(0,n$.jsxs)("div",{className:`${d?`${d} `:""}next-video-container`,style:u,children:[(0,n$.jsx)("style",{children:`
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
        `}),(0,n$.jsx)(n,{ref:t,"data-next-video":w??"",style:{width:c,height:m},asset:p,onPlaying:()=>g(!0),onPause:()=>g(!1),...A}),(0,n$.jsx)(my,{hidden:!!(b||!w||"ready"===w),status:w})]})});function mN(e,t){let i=e.provider??mb.provider;for(let[a,r]of Object.entries(mR))if(a===i.toLowerCase().replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()))return r.transform(e,t)}let mP=function({videoUrl:e,lessonTitle:t,onStatsUpdate:i}){let a=(0,nB.useRef)(null),[r,s]=(0,nB.useState)({currentTime:0,duration:0,playCount:0,volume:1});(0,nB.useEffect)(()=>{i(r)},[r]);let n=`video_${t}_time`;return(0,nB.useEffect)(()=>{let e=localStorage.getItem(n);if(e&&a.current){let t=parseFloat(e);a.current.onloadedmetadata=()=>{isNaN(t)||(a.current.currentTime=t)}}},[e]),(0,n$.jsx)("div",{className:"w-full max-w-full relative",dir:"ltr",children:(0,n$.jsx)(mD,{ref:a,src:e,height:500,controls:!0,style:{width:"100%",maxWidth:"100%"},onLoadedMetadata:e=>{let t=e.currentTarget.duration;s(e=>({...e,duration:t}))},onVolumeChange:e=>{let t=e.currentTarget.volume;s(e=>({...e,volume:t}))},onPlay:()=>{s(e=>({...e,playCount:e.playCount+1}))},onTimeUpdate:e=>{let t=e.currentTarget.currentTime;s(e=>({...e,currentTime:t})),localStorage.setItem(n,t.toString())},onEnded:()=>{s(e=>({...e,currentTime:0})),localStorage.removeItem(n)}})})},mU={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},mO={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},mH={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},mW=Object.entries(mH),m$=mW.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),mB=mW.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),mV=Object.entries(mB).reduce((e,[t,i])=>{let a=m$[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),mj=Object.entries(m$).reduce((e,[t,i])=>{let a=mB[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),mG={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},mF={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},mq={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},mz={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},mQ={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},mZ={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},mK={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},mY={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function mX(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function mJ(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function m0(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function m1(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function m2(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function m5(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",()=>mj,"AvailabilityStates",()=>mQ,"MediaStateChangeEvents",()=>mB,"MediaStateReceiverAttributes",()=>mO,"MediaUIAttributes",()=>m$,"MediaUIEvents",()=>mU,"MediaUIProps",()=>mH,"PointerTypes",()=>mz,"ReadyStates",()=>mq,"StateChangeEventToAttributeMap",()=>mV,"StreamTypes",()=>mZ,"TextTrackKinds",()=>mG,"TextTrackModes",()=>mF,"VolumeLevels",()=>mK,"WebkitPresentationModes",()=>mY],23204),e.i(23204);let m3=e=>new Promise(t=>setTimeout(t,e)),m4=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],m7=e=>{if(!m2(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?m4[t].singular:m4[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function m8(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),s=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(s=r=a="0"),r=(((s=s>0||o>0?s+":":"")||n>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+s+r+(a=a<10?"0"+a:a)}let m6=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function m9(e=m6){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}e.s(["emptyTimeRanges",()=>m6,"formatAsTimePhrase",()=>m7,"formatTime",()=>m8,"serializeTimeRanges",()=>m9],46686),e.i(46686);let pe={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},pt=(null==(i8=globalThis.navigator)?void 0:i8.language)||"en",pi=(e,t={})=>(e=>{var t,i,a;let[r]=pt.split("-");return(null==(t=pe[pt])?void 0:t[e])||(null==(i=pe[r])?void 0:i[e])||(null==(a=pe.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class pa{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class pr extends pa{}class ps extends pr{constructor(){super(...arguments),this.role=null}}let pn={createElement:function(){return new po.HTMLElement},createElementNS:function(){return new po.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},po={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:pn,Node:pr,Element:ps,HTMLElement:class extends ps{constructor(){super(...arguments),this.innerHTML=""}get content(){return new po.DocumentFragment}},DocumentFragment:class extends pa{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},pl="undefined"==typeof window||void 0===window.customElements,pd=Object.keys(po).every(e=>e in globalThis),pu=pl&&!pd?po:globalThis,ph=pl&&!pd?pn:globalThis.document,pc=new WeakMap,pm=e=>{let t=pc.get(e);return t||pc.set(e,t=new Set),t},pp=new pu.ResizeObserver(e=>{for(let t of e)for(let e of pm(t.target))e(t)});function pv(e,t){pm(e).add(t),pp.observe(e)}function pb(e,t){let i=pm(e);i.delete(t),i.size||pp.unobserve(e)}function pg(e){let t={};for(let i of e)t[i.name]=i.value;return t}function pE(e){var t;return null!=(t=pf(e))?t:pk(e,"media-controller")}function pf(e){var t;let{MEDIA_CONTROLLER:i}=mO,a=e.getAttribute(i);if(a)return null==(t=pT(e))?void 0:t.getElementById(a)}let pw=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},py=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},pA=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||pA(e,t.getRootNode().host)),pk=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||pk(e.getRootNode().host,t)};function pI(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=pI(i.shadowRoot))?t:i:null}function pT(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function pM(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function p_(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||pS(e,t)}function pS(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],s=null==r?void 0:r[r.length-1];return(null==s?void 0:s.sheet)?(null==s||s.sheet.insertRule(`${t}{}`,s.sheet.cssRules.length),null==(a=s.sheet.cssRules)?void 0:a[s.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function px(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function pL(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}px(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function pC(e,t){return e.hasAttribute(t)}function pR(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}pC(e,t)!=i&&e.toggleAttribute(t,i)}function pD(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function pN(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;pD(e,t,void 0)!==a&&e.setAttribute(t,a)}var pP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pU=(e,t,i)=>(pP(e,t,"read from private field"),i?i.call(e):t.get(e)),pO=(e,t,i,a)=>(pP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class pH extends pu.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,i6,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[mO.MEDIA_CONTROLLER,m$.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===mO.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=pU(this,i6))?void 0:a.unassociateElement)||r.call(a,this),pO(this,i6,null)),i&&this.isConnected&&(pO(this,i6,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=pU(this,i6))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i,a,r,s;let n;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),pO(this,i6,(r=this,(n=r.getAttribute(mO.MEDIA_CONTROLLER))?null==(s=r.getRootNode())?void 0:s.getElementById(n):pk(r,"media-controller"))),this.getAttribute(mO.MEDIA_CONTROLLER)&&(null==(t=null==(e=pU(this,i6))?void 0:e.associateElement)||t.call(e,this)),null==(i=pU(this,i6))||i.addEventListener("pointerdown",this),null==(a=pU(this,i6))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(mO.MEDIA_CONTROLLER)&&(null==(t=null==(e=pU(this,i6))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=pU(this,i6))||i.removeEventListener("pointerdown",this),null==(a=pU(this,i6))||a.removeEventListener("click",this),pO(this,i6,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:s,height:n}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>s||l>n||0===s&&0===n)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===mz.TOUCH)return void this.handleTap(e);if(d===mz.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return pC(this,m$.MEDIA_PAUSED)}set mediaPaused(e){pR(this,m$.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?mU.MEDIA_PLAY_REQUEST:mU.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new pu.CustomEvent(t,{composed:!0,bubbles:!0}))}}i6=new WeakMap,pH.shadowRootOptions={mode:"open"},pH.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},pu.customElements.get("media-gesture-receiver")||pu.customElements.define("media-gesture-receiver",pH);var pW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},p$=(e,t,i)=>(pW(e,t,"read from private field"),i?i.call(e):t.get(e)),pB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},pV=(e,t,i,a)=>(pW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),pj=(e,t,i)=>(pW(e,t,"access private method"),i);let pG="audio",pF="autohide",pq="breakpoints",pz="gesturesdisabled",pQ="keyboardcontrol",pZ="noautohide",pK="userinactive",pY="autohideovercontrols",pX=Object.values(m$);function pJ(e,t){var i,a,r;if(!e.isConnected)return;let s=Object.fromEntries((null!=(i=e.getAttribute(pq))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=s,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(s).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(mB.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(mB.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class p0 extends pu.HTMLElement{constructor(){if(super(),pB(this,ar),pB(this,al),pB(this,au),pB(this,ac),pB(this,ap),pB(this,ab),pB(this,i9,0),pB(this,ae,null),pB(this,at,null),pB(this,ai,void 0),this.breakpointsComputed=!1,pB(this,aa,new MutationObserver(pj(this,ar,as).bind(this))),pB(this,an,!1),pB(this,ao,e=>{p$(this,an)||(setTimeout(()=>{pJ(e.target,e.contentRect.width),pV(this,an,!1)},0),pV(this,an,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){p$(this,ae)&&this.mediaUnsetCallback(p$(this,ae));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[pF,pz].concat(pX).filter(e=>![m$.MEDIA_RENDITION_LIST,m$.MEDIA_AUDIO_TRACK_LIST,m$.MEDIA_CHAPTERS_CUES,m$.MEDIA_WIDTH,m$.MEDIA_HEIGHT,m$.MEDIA_ERROR,m$.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==pF&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(pV(this,ae,e),e.localName.includes("-")&&await pu.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;p$(this,aa).observe(this,{childList:!0,subtree:!0}),pv(this,p$(this,ao));let t=null!=this.getAttribute(pG)?pi("audio player"):pi("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(pK,""),pJ(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=pu.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;p$(this,aa).disconnect(),pb(this,p$(this,ao)),this.media&&this.mediaUnsetCallback(this.media),null==(e=pu.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){pV(this,ae,null)}handleEvent(e){switch(e.type){case"pointerdown":pV(this,i9,e.timeStamp);break;case"pointermove":pj(this,al,ad).call(this,e);break;case"pointerup":pj(this,au,ah).call(this,e);break;case"mouseleave":pj(this,ac,am).call(this);break;case"mouseup":this.removeAttribute(pQ);break;case"keyup":pj(this,ab,ag).call(this),this.setAttribute(pQ,"")}}set autohide(e){let t=Number(e);pV(this,ai,isNaN(t)?0:t)}get autohide(){return(void 0===p$(this,ai)?2:p$(this,ai)).toString()}get breakpoints(){return pD(this,pq)}set breakpoints(e){pN(this,pq,e)}get audio(){return pC(this,pG)}set audio(e){pR(this,pG,e)}get gesturesDisabled(){return pC(this,pz)}set gesturesDisabled(e){pR(this,pz,e)}get keyboardControl(){return pC(this,pQ)}set keyboardControl(e){pR(this,pQ,e)}get noAutohide(){return pC(this,pZ)}set noAutohide(e){pR(this,pZ,e)}get autohideOverControls(){return pC(this,pY)}set autohideOverControls(e){pR(this,pY,e)}get userInteractive(){return pC(this,pK)}set userInteractive(e){pR(this,pK,e)}}i9=new WeakMap,ae=new WeakMap,at=new WeakMap,ai=new WeakMap,aa=new WeakMap,ar=new WeakSet,as=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},an=new WeakMap,ao=new WeakMap,al=new WeakSet,ad=function(e){if("mouse"!==e.pointerType&&e.timeStamp-p$(this,i9)<250)return;pj(this,ap,av).call(this),clearTimeout(p$(this,at));let t=this.hasAttribute(pY);([this,this.media].includes(e.target)||t)&&pj(this,ab,ag).call(this)},au=new WeakSet,ah=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(pK);[this,this.media].includes(e.target)&&t?pj(this,ac,am).call(this):pj(this,ab,ag).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&pj(this,ab,ag).call(this)},ac=new WeakSet,am=function(){if(0>p$(this,ai)||this.hasAttribute(pK))return;this.setAttribute(pK,"");let e=new pu.CustomEvent(mB.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},ap=new WeakSet,av=function(){if(!this.hasAttribute(pK))return;this.removeAttribute(pK);let e=new pu.CustomEvent(mB.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},ab=new WeakSet,ag=function(){pj(this,ap,av).call(this),clearTimeout(p$(this,at));let e=parseInt(this.autohide);e<0||pV(this,at,setTimeout(()=>{pj(this,ac,am).call(this)},1e3*e))},p0.shadowRootOptions={mode:"open"},p0.getTemplateHTML=function(e){return`
    <style>
      
      :host([${m$.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${pG}])) [part~=layer]:not([part~=media-layer]) {
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

      
      :host([${pG}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${pG}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${pG}])[${pz}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${pG}])[${pz}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${pG}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${pG}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${pG}])) media-gesture-receiver[slot=gestures-chrome] {
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

      
      :host(:not([${pG}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${pZ}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${pK}]:not([${m$.MEDIA_PAUSED}]):not([${m$.MEDIA_IS_AIRPLAYING}]):not([${m$.MEDIA_IS_CASTING}]):not([${pG}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${pZ}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${pK}]:not([${pZ}]):not([${m$.MEDIA_PAUSED}]):not([${m$.MEDIA_IS_CASTING}]):not([${pG}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${pK}][${pY}]:not([${pZ}]):not([${m$.MEDIA_PAUSED}]):not([${m$.MEDIA_IS_CASTING}]):not([${pG}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${pG}])[${m$.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${pH.shadowRootOptions.mode}">
          ${pH.getTemplateHTML({})}
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
  `},pu.customElements.get("media-container")||pu.customElements.define("media-container",p0);var p1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},p2=(e,t,i)=>(p1(e,t,"read from private field"),i?i.call(e):t.get(e)),p5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},p3=(e,t,i,a)=>(p1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class p4{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){p5(this,aA),p5(this,aE,void 0),p5(this,af,void 0),p5(this,aw,void 0),p5(this,ay,new Set),p3(this,aE,e),p3(this,af,t),p3(this,aw,new Set(i))}[Symbol.iterator](){return p2(this,aA,ak).values()}get length(){return p2(this,aA,ak).size}get value(){var e;return null!=(e=[...p2(this,aA,ak)].join(" "))?e:""}set value(e){var t;e!==this.value&&(p3(this,ay,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...p2(this,aA,ak)][e]}values(){return p2(this,aA,ak).values()}forEach(e,t){p2(this,aA,ak).forEach(e,t)}add(...e){var t,i;e.forEach(e=>p2(this,ay).add(e)),(""!==this.value||(null==(t=p2(this,aE))?void 0:t.hasAttribute(`${p2(this,af)}`)))&&(null==(i=p2(this,aE))||i.setAttribute(`${p2(this,af)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>p2(this,ay).delete(e)),null==(t=p2(this,aE))||t.setAttribute(`${p2(this,af)}`,`${this.value}`)}contains(e){return p2(this,aA,ak).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}aE=new WeakMap,af=new WeakMap,aw=new WeakMap,ay=new WeakMap,aA=new WeakSet,ak=function(){return p2(this,ay).size?p2(this,ay):p2(this,aw)};let p7=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?mG.CAPTIONS:mG.SUBTITLES,language:i,label:r}},p8=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=p7(e);return{...t,...i}}),p6=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?p7(e):e):"string"==typeof e?p8(e):[e]:[],p9=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ve=(e=[])=>Array.prototype.map.call(e,p9).join(" "),vt=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},vi=(e,t=[],i=[])=>{let a=p6(i).map(vt);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},va=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:vt(t);return Array.from(e.textTracks).filter(i)},vr=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(m$.MEDIA_SUBTITLES_SHOWING)},vs="exitFullscreen"in ph?"exitFullscreen":"webkitExitFullscreen"in ph?"webkitExitFullscreen":"webkitCancelFullScreen"in ph?"webkitCancelFullScreen":void 0,vn="fullscreenElement"in ph?"fullscreenElement":"webkitFullscreenElement"in ph?"webkitFullscreenElement":void 0,vo="fullscreenEnabled"in ph?"fullscreenEnabled":"webkitFullscreenEnabled"in ph?"webkitFullscreenEnabled":void 0,vl=()=>{var e;return n||(n=null==(e=null==ph?void 0:ph.createElement)?void 0:e.call(ph,"video"))},vd=async(e=vl())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([vu(e,i.signal),vh(e,t)]);return i.abort(),a},vu=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),vh=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await m3(10)}return e.volume!==t},vc=/.*Version\/.*Safari\/.*/.test(pu.navigator.userAgent),vm=(e=vl())=>(!pu.matchMedia("(display-mode: standalone)").matches||!vc)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),vp=(e=vl())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[vo])||i&&"webkitSupportsFullscreen"in i})({documentElement:ph,media:e}),vv=vp(),vb=vm(),vg=!!pu.WebKitPlaybackTargetAvailabilityEvent,vE=!!pu.chrome,vf=e=>va(e.media,e=>[mG.SUBTITLES,mG.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),vw=e=>va(e.media,e=>e.mode===mF.SHOWING&&[mG.SUBTITLES,mG.CAPTIONS].includes(e.kind)),vy=(e,t)=>{let i=vf(e),a=vw(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)vi(mF.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:s,label:n,kind:o}=t;vi(mF.DISABLED,i,a),vi(mF.SHOWING,i,[{language:s,label:n,kind:o}])}}},vA=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?vk(e,t):Object.entries(e).every(([e,i])=>e in t&&vA(i,t[e])))),vk=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>vA(e,t[i])))},vI=Object.values(mZ),vT=vd().then(e=>o=e),vM=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof pu.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=pu.customElements.get(t);i&&e instanceof i||(await pu.customElements.whenDefined(t),pu.customElements.upgrade(e))}))},v_=new pu.DOMParser,vS={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){if(!i.hasAttribute("muted")&&!a)try{pu.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===pu.localStorage.getItem("media-chrome-pref-muted");vS.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?pu.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||pu.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=pu.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;vS.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&m2(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[mZ.LIVE,mZ.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(vI.includes(r))return r===mZ.UNKNOWN?a:r;let s=t.duration;return s===1/0?mZ.LIVE:Number.isFinite(s)?mZ.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=vS.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===mZ.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(vS.mediaStreamType.get(e)!==mZ.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>vf(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>vw(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:s}=t;if(!r)return;let n=e=>{var i;s.defaultSubtitles&&(e&&![mG.CAPTIONS,mG.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||vy(t,!0))};return r.addEventListener("loadstart",n),null==(i=r.textTracks)||i.addEventListener("addtrack",n),null==(a=r.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;r.removeEventListener("loadstart",n),null==(e=r.textTracks)||e.removeEventListener("addtrack",n),null==(t=r.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=va(i,{kind:mG.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&v_.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==s||s.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==s||s.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&pA(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!ph.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else ph.pictureInPictureElement&&ph.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let s=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[vn];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===mY.FULLSCREEN?i:a})(e);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let e=s.shadowRoot;if(!(vn in e))return pA(s,r);for(;null==e?void 0:e[vn];){if(e[vn]===r)return!0;e=null==(t=e[vn])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(vs){let e=null==(t=null==i?void 0:i[vs])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&pu.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!vv||!vp(t))return mQ.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return vb&&vm(t)?(null==t?void 0:t.disablePictureInPicture)?mQ.UNAVAILABLE:void 0:mQ.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===o||(null==t?void 0:t.volume)==void 0)return mQ.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==o&&vT.then(t=>e(t?void 0:mQ.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return vE&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?mQ.UNAVAILABLE:void 0:mQ.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>vg?(null==t?void 0:t.availability)==="not-available"?mQ.UNAVAILABLE:void 0:mQ.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:mQ.UNAVAILABLE:mQ.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?mQ.UNAVAILABLE:void 0:mQ.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},vx={[mU.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,s;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=va(l,{kind:mG.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(s=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:s.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[mU.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[mU.MEDIA_PLAY_REQUEST](e,t){var i,a,r,s;let n=e.mediaStreamType.get(t)===mZ.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(s=null==(r=t.options)?void 0:r.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[mU.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[mU.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[mU.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[mU.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[mU.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[mU.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let s=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(s)))return;let n=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(s-n,t)},[mU.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,s=vf(t),n=p6(i),o=null==(a=n[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&pu.localStorage.setItem("media-chrome-pref-subtitles-lang",o),vi(mF.SHOWING,s,n)},[mU.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=vf(t);vi(mF.DISABLED,a,null!=i?i:[])},[mU.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){vy(t,i)},[mU.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[mU.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[mU.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[mU.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[mU.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[mU.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[mU.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[mU.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[mU.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var vL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},vC=(e,t,i)=>(vL(e,t,"read from private field"),i?i.call(e):t.get(e)),vR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},vD=(e,t,i,a)=>(vL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),vN=(e,t,i)=>(vL(e,t,"access private method"),i);let vP=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],vU="defaultsubtitles",vO="defaultstreamtype",vH="defaultduration",vW="fullscreenelement",v$="hotkeys",vB="keysused",vV="liveedgeoffset",vj="seektoliveoffset",vG="noautoseektolive",vF="nohotkeys",vq="novolumepref",vz="nomutedpref",vQ="nosubtitleslangpref",vZ="nodefaultstore",vK="keyboardforwardseekoffset",vY="keyboardbackwardseekoffset",vX="lang";aI=new WeakMap,aT=new WeakMap,aM=new WeakMap,a_=new WeakMap,aS=new WeakMap,ax=new WeakMap,aL=new WeakSet,aC=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=vS,requestMap:r=vx,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...s}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0==e||vA(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,s,u,p,v,b,g,E,f,w,y,A,k,I,T;let M=!!o;if(o={...d,...null!=o?o:{},...e},M)return;await vM(...Object.values(e));let _=l.length>0&&0===t&&n,S=d.media!==o.media,x=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(s=d.media)?void 0:s.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),C=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),R=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),D=d.documentElement!==o.documentElement,N=!!d.media&&(S||_),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(x||_),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(L||_),O=!!(null==(w=d.media)?void 0:w.audioTracks)&&(C||_),H=!!(null==(y=d.media)?void 0:y.remote)&&(R||_),W=!!d.documentElement&&(D||_),$=N||P||U||O||H||W,B=0===l.length&&1===t&&n,V=!!o.media&&(S||B),j=!!(null==(A=o.media)?void 0:A.textTracks)&&(x||B),G=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||B),F=!!(null==(I=o.media)?void 0:I.audioTracks)&&(C||B),q=!!(null==(T=o.media)?void 0:T.remote)&&(R||B),z=!!o.documentElement&&(D||B),Q=V||j||G||F||q||z;if(!($||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:s=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),j&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,s.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),F&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),q&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&W&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),z&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&$&&v(),Q&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:s}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?h(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),c())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(vU),defaultDuration:this.hasAttribute(vH)?+this.getAttribute(vH):void 0,defaultStreamType:null!=(e=this.getAttribute(vO))?e:void 0,liveEdgeOffset:this.hasAttribute(vV)?+this.getAttribute(vV):void 0,seekToLiveOffset:this.hasAttribute(vj)?+this.getAttribute(vj):this.hasAttribute(vV)?+this.getAttribute(vV):void 0,noAutoSeekToLive:this.hasAttribute(vG),noVolumePref:this.hasAttribute(vq),noMutedPref:this.hasAttribute(vz),noSubtitlesLangPref:this.hasAttribute(vQ)}})},aR=new WeakSet,aD=function(e){let{key:t}=e;vP.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",vN(this,aR,aD))},aN=new WeakSet,aP=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!vP.includes(a)?this.removeEventListener("keyup",vN(this,aR,aD)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(vC(this,aI).contains(`no${a.toLowerCase()}`)||" "===a&&vC(this,aI).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",vN(this,aR,aD),{once:!0}))};let vJ=Object.values(m$),v0=Object.values(mH),v1=e=>{var t,i,a,r;let{observedAttributes:s}=e.constructor;!s&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(pu.customElements.upgrade(e),{observedAttributes:s}=e.constructor);let n=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,mO.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(s||n)?(s||n).filter(e=>vJ.includes(e)):[]},v2=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&pu.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof pu.customElements.get(e.nodeName.toLowerCase()))&&pu.customElements.upgrade(e),v0.some(t=>t in e)||!!v1(e).length},v5=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},v3={[m$.MEDIA_SUBTITLES_LIST]:ve,[m$.MEDIA_SUBTITLES_SHOWING]:ve,[m$.MEDIA_SEEKABLE]:v5,[m$.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(v5).join(" "),[m$.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[m$.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(mX).join(" ")},[m$.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(m0).join(" ")}},v4=async(e,t,i)=>{var a,r;if(e.isConnected||await m3(0),"boolean"==typeof i||null==i)return pR(e,t,i);if("number"==typeof i)return pL(e,t,i);if("string"==typeof i)return pN(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let s=null!=(r=null==(a=v3[t])?void 0:a.call(v3,i))?r:i;return e.setAttribute(t,s)},v7=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;v2(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>v7(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!v2(e)?pu.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},v8=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=v1(e),r=t.toLowerCase();a.includes(r)&&v4(e,r,i)})};pu.customElements.get("media-controller")||pu.customElements.define("media-controller",class extends p0{constructor(){super(),vR(this,aL),vR(this,aR),vR(this,aN),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,vR(this,aI,new p4(this,v$)),vR(this,aT,void 0),vR(this,aM,void 0),vR(this,a_,void 0),vR(this,aS,void 0),vR(this,ax,e=>{var t;null==(t=vC(this,aM))||t.dispatch(e)}),this.associateElement(this);let e={};vD(this,a_,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new pu.CustomEvent(mj[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.hasAttribute(vF)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(vF,v$,vO,vU,vH,vX)}get mediaStore(){return vC(this,aM)}set mediaStore(e){var t,i;(vC(this,aM)&&(null==(t=vC(this,aS))||t.call(this),vD(this,aS,void 0)),vD(this,aM,e),vC(this,aM)||this.hasAttribute(vZ))?vD(this,aS,null==(i=vC(this,aM))?void 0:i.subscribe(vC(this,a_))):vN(this,aL,aC).call(this)}get fullscreenElement(){var e;return null!=(e=vC(this,aT))?e:this}set fullscreenElement(e){var t;this.hasAttribute(vW)&&this.removeAttribute(vW),vD(this,aT,e),null==(t=vC(this,aM))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return pC(this,vU)}set defaultSubtitles(e){pR(this,vU,e)}get defaultStreamType(){return pD(this,vO)}set defaultStreamType(e){pN(this,vO,e)}get defaultDuration(){return px(this,vH)}set defaultDuration(e){pL(this,vH,e)}get noHotkeys(){return pC(this,vF)}set noHotkeys(e){pR(this,vF,e)}get keysUsed(){return pD(this,vB)}set keysUsed(e){pN(this,vB,e)}get liveEdgeOffset(){return px(this,vV)}set liveEdgeOffset(e){pL(this,vV,e)}get noAutoSeekToLive(){return pC(this,vG)}set noAutoSeekToLive(e){pR(this,vG,e)}get noVolumePref(){return pC(this,vq)}set noVolumePref(e){pR(this,vq,e)}get noMutedPref(){return pC(this,vz)}set noMutedPref(e){pR(this,vz,e)}get noSubtitlesLangPref(){return pC(this,vQ)}set noSubtitlesLangPref(e){pR(this,vQ,e)}get noDefaultStore(){return pC(this,vZ)}set noDefaultStore(e){pR(this,vZ,e)}attributeChangedCallback(e,t,i){var a,r,s,n,o,l,d,u,h;(super.attributeChangedCallback(e,t,i),e===vF)?i!==t&&""===i?(this.hasAttribute(v$)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys():e===v$?vC(this,aI).value=i:e===vU&&i!==t?null==(a=vC(this,aM))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(vU)}}):e===vO?null==(s=vC(this,aM))||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(vO))?r:void 0}}):e===vV?null==(n=vC(this,aM))||n.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(vV)?+this.getAttribute(vV):void 0,seekToLiveOffset:this.hasAttribute(vj)?void 0:+this.getAttribute(vV)}}):e===vj?null==(o=vC(this,aM))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(vj)?+this.getAttribute(vj):void 0}}):e===vG?null==(l=vC(this,aM))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(vG)}}):e===vW?(vD(this,aT,i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0),null==(u=vC(this,aM))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):e===vX&&i!==t&&(pt=i,null==(h=vC(this,aM))||h.dispatch({type:"optionschangerequest",detail:{mediaLang:i}}))}connectedCallback(){var e,t;vC(this,aM)||this.hasAttribute(vZ)||vN(this,aL,aC).call(this),null==(e=vC(this,aM))||e.dispatch({type:"documentelementchangerequest",detail:ph}),super.connectedCallback(),vC(this,aM)&&!vC(this,aS)&&vD(this,aS,null==(t=vC(this,aM))?void 0:t.subscribe(vC(this,a_))),this.hasAttribute(vF)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),vC(this,aM)&&(null==(t=vC(this,aM))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=vC(this,aM))||i.dispatch({type:mU.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),vC(this,aS)&&(null==(a=vC(this,aS))||a.call(this),vD(this,aS,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=vC(this,aM))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=vC(this,aM))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){v8(this.mediaStateReceivers,e,t)}associateElement(e){var t,i,a;let r,s,n,o,l;if(!e)return;let{associatedElementSubscriptions:d}=this;if(d.has(e))return;let u=this.registerMediaStateReceiver.bind(this),h=(t=e,i=u,a=this.unregisterMediaStateReceiver.bind(this),v7(t,i),r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},s=e=>{var t;a(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},t.addEventListener(mU.REGISTER_MEDIA_STATE_RECEIVER,r),t.addEventListener(mU.UNREGISTER_MEDIA_STATE_RECEIVER,s),n=[],o=e=>{let t=e.target;"media"!==t.name&&(n.forEach(e=>v7(e,a)),(n=[...t.assignedElements({flatten:!0})]).forEach(e=>v7(e,i)))},t.addEventListener("slotchange",o),(l=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:t=[],removedNodes:r=[],type:s,target:n,attributeName:o}=e;"childList"===s?(Array.prototype.forEach.call(t,e=>v7(e,i)),Array.prototype.forEach.call(r,e=>v7(e,a))):"attributes"===s&&o===mO.MEDIA_CHROME_ATTRIBUTES&&(v2(n)?i(n):a(n))})})).observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{v7(t,a),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(mU.REGISTER_MEDIA_STATE_RECEIVER,r),t.removeEventListener(mU.UNREGISTER_MEDIA_STATE_RECEIVER,s)});Object.values(mU).forEach(t=>{e.addEventListener(t,vC(this,ax))}),d.set(e,h)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(mU).forEach(t=>{e.removeEventListener(t,vC(this,ax))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),vC(this,aM)&&Object.entries(vC(this,aM).getState()).forEach(([t,i])=>{v8([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",vN(this,aN,aP))}disableHotkeys(){this.removeEventListener("keydown",vN(this,aN,aP)),this.removeEventListener("keyup",vN(this,aR,aD))}get hotkeys(){return pD(this,v$)}set hotkeys(e){pN(this,v$,e)}keyboardShortcutHandler(e){var t,i,a,r,s;let n,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(vB))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||vC(this,aI).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&vC(this,aI).contains("nospace")))switch(e.key){case" ":case"k":n=vC(this,aM).getState().mediaPaused?mU.MEDIA_PLAY_REQUEST:mU.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new pu.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.mediaStore.getState().mediaVolumeLevel?mU.MEDIA_UNMUTE_REQUEST:mU.MEDIA_MUTE_REQUEST,this.dispatchEvent(new pu.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?mU.MEDIA_EXIT_FULLSCREEN_REQUEST:mU.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new pu.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new pu.CustomEvent(mU.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(vY)?+this.getAttribute(vY):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new pu.CustomEvent(mU.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(vK)?+this.getAttribute(vK):10;o=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),l=new pu.CustomEvent(mU.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}});let v6="placement",v9="bounds";class be extends pu.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!pM(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=pk(this,"#"+this.bounds))?e:pE(this);if(!a)return;let{x:r,width:s}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-r+d-h,m=n+o-(r+s)+d+h;c<0?this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[v6,v9]}get placement(){return pD(this,v6)}set placement(e){pN(this,v6,e)}get bounds(){return pD(this,v9)}set bounds(e){pN(this,v9,e)}}be.shadowRootOptions={mode:"open"},be.getTemplateHTML=function(e){return`
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
  `},pu.customElements.get("media-tooltip")||pu.customElements.define("media-tooltip",be);var bt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bi=(e,t,i)=>(bt(e,t,"read from private field"),i?i.call(e):t.get(e)),ba=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},br=(e,t,i,a)=>(bt(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let bs="tooltipplacement",bn="disabled",bo="notooltip";class bl extends pu.HTMLElement{constructor(){if(super(),ba(this,aB),ba(this,aU,void 0),this.preventClick=!1,this.tooltipEl=null,ba(this,aO,e=>{this.preventClick||this.handleClick(e),setTimeout(bi(this,aH),0)}),ba(this,aH,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),ba(this,aW,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",bi(this,aW))}),ba(this,a$,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",bi(this,aW)):this.addEventListener("keyup",bi(this,aW),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",bs,mO.MEDIA_CONTROLLER,m$.MEDIA_LANG]}enable(){this.addEventListener("click",bi(this,aO)),this.addEventListener("keydown",bi(this,a$)),this.tabIndex=0}disable(){this.removeEventListener("click",bi(this,aO)),this.removeEventListener("keydown",bi(this,a$)),this.removeEventListener("keyup",bi(this,aW)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===mO.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=bi(this,aU))?void 0:a.unassociateElement)||r.call(a,this),br(this,aU,null)),i&&this.isConnected&&(br(this,aU,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=bi(this,aU))?void 0:n.associateElement)||o.call(n,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===bs&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===m$.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),bi(this,aH).call(this)}connectedCallback(){var e,t,i;let{style:a}=p_(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(mO.MEDIA_CONTROLLER);r&&(br(this,aU,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=bi(this,aU))?void 0:t.associateElement)||i.call(t,this)),pu.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=aB,t=aV,bt(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=bi(this,aU))?void 0:e.unassociateElement)||t.call(e,this),br(this,aU,null),this.removeEventListener("mouseenter",bi(this,aH)),this.removeEventListener("focus",bi(this,aH)),this.removeEventListener("click",bi(this,aO))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return pD(this,bs)}set tooltipPlacement(e){pN(this,bs,e)}get mediaController(){return pD(this,mO.MEDIA_CONTROLLER)}set mediaController(e){pN(this,mO.MEDIA_CONTROLLER,e)}get disabled(){return pC(this,bn)}set disabled(e){pR(this,bn,e)}get noTooltip(){return pC(this,bo)}set noTooltip(e){pR(this,bo,e)}handleClick(e){}}aU=new WeakMap,aO=new WeakMap,aH=new WeakMap,aW=new WeakMap,a$=new WeakMap,aB=new WeakSet,aV=function(){this.addEventListener("mouseenter",bi(this,aH)),this.addEventListener("focus",bi(this,aH)),this.addEventListener("click",bi(this,aO));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},bl.shadowRootOptions={mode:"open"},bl.getTemplateHTML=function(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${be.shadowRootOptions.mode}">
          ${be.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},bl.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},bl.getTooltipContentHTML=function(){return""},pu.customElements.get("media-chrome-button")||pu.customElements.define("media-chrome-button",bl);let bd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,bu=e=>{let t=e.mediaIsAirplaying?pi("stop airplay"):pi("start airplay");e.setAttribute("aria-label",t)};class bh extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_IS_AIRPLAYING,m$.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),bu(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_IS_AIRPLAYING&&bu(this)}get mediaIsAirplaying(){return pC(this,m$.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){pR(this,m$.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return pD(this,m$.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){pN(this,m$.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new pu.CustomEvent(mU.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}bh.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${m$.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${m$.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m$.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${m$.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${bd}</slot>
      <slot name="exit">${bd}</slot>
    </slot>
  `},bh.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pi("start airplay")}</slot>
    <slot name="tooltip-exit">${pi("stop airplay")}</slot>
  `},pu.customElements.get("media-airplay-button")||pu.customElements.define("media-airplay-button",bh);let bc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,bm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,bp=e=>{e.setAttribute("aria-checked",vr(e).toString())};class bv extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_SUBTITLES_LIST,m$.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",pi("closed captions")),bp(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_SUBTITLES_SHOWING&&bp(this)}get mediaSubtitlesList(){return bb(this,m$.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){bg(this,m$.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return bb(this,m$.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){bg(this,m$.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new pu.CustomEvent(mU.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}bv.getSlotTemplateHTML=function(e){return`
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
      <slot name="on">${bc}</slot>
      <slot name="off">${bm}</slot>
    </slot>
  `},bv.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${pi("Enable captions")}</slot>
    <slot name="tooltip-disable">${pi("Disable captions")}</slot>
  `};let bb=(e,t)=>{let i=e.getAttribute(t);return i?p8(i):[]},bg=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ve(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};pu.customElements.get("media-captions-button")||pu.customElements.define("media-captions-button",bv);let bE=e=>{let t=e.mediaIsCasting?pi("stop casting"):pi("start casting");e.setAttribute("aria-label",t)};class bf extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_IS_CASTING,m$.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),bE(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_IS_CASTING&&bE(this)}get mediaIsCasting(){return pC(this,m$.MEDIA_IS_CASTING)}set mediaIsCasting(e){pR(this,m$.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return pD(this,m$.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){pN(this,m$.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?mU.MEDIA_EXIT_CAST_REQUEST:mU.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new pu.CustomEvent(e,{composed:!0,bubbles:!0}))}}bf.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${m$.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${m$.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m$.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${m$.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},bf.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pi("Start casting")}</slot>
    <slot name="tooltip-exit">${pi("Stop casting")}</slot>
  `},pu.customElements.get("media-cast-button")||pu.customElements.define("media-cast-button",bf);var bw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},by=(e,t,i)=>(bw(e,t,"read from private field"),i?i.call(e):t.get(e)),bA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bk=(e,t,i,a)=>(bw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bI=(e,t,i)=>(bw(e,t,"access private method"),i);let bT="open";class bM extends pu.HTMLElement{constructor(){super(),bA(this,aq),bA(this,aQ),bA(this,aK),bA(this,aX),bA(this,a0),bA(this,a2),bA(this,aj,!1),bA(this,aG,null),bA(this,aF,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[bT,"anchor"]}get open(){return pC(this,bT)}set open(e){pR(this,bT,e)}handleEvent(e){switch(e.type){case"invoke":bI(this,aX,aJ).call(this,e);break;case"focusout":bI(this,a0,a1).call(this,e);break;case"keydown":bI(this,a2,a5).call(this,e)}}connectedCallback(){bI(this,aq,az).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){bI(this,aq,az).call(this),e===bT&&i!==t&&(this.open?bI(this,aQ,aZ).call(this):bI(this,aK,aY).call(this))}focus(){bk(this,aG,pI());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}aj=new WeakMap,aG=new WeakMap,aF=new WeakMap,aq=new WeakSet,az=function(){if(!by(this,aj)&&(bk(this,aj,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=p_(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},aQ=new WeakSet,aZ=function(){var e;null==(e=by(this,aF))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},aK=new WeakSet,aY=function(){var e;null==(e=by(this,aF))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},aX=new WeakSet,aJ=function(e){bk(this,aF,e.relatedTarget),pA(this,e.relatedTarget)||(this.open=!this.open)},a0=new WeakSet,a1=function(e){var t;!pA(this,e.relatedTarget)&&(null==(t=by(this,aG))||t.focus(),by(this,aF)&&by(this,aF)!==e.relatedTarget&&this.open&&(this.open=!1))},a2=new WeakSet,a5=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===n&&(null==(s=by(this,aG))||s.focus(),this.open=!1))},bM.shadowRootOptions={mode:"open"},bM.getTemplateHTML=function(e){return`
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
    ${this.getSlotTemplateHTML(e)}
  `},bM.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},pu.customElements.get("media-chrome-dialog")||pu.customElements.define("media-chrome-dialog",bM);var b_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bS=(e,t,i)=>(b_(e,t,"read from private field"),i?i.call(e):t.get(e)),bx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bL=(e,t,i,a)=>(b_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bC=(e,t,i)=>(b_(e,t,"access private method"),i);class bR extends pu.HTMLElement{constructor(){if(super(),bx(this,ra),bx(this,rs),bx(this,ro),bx(this,rd),bx(this,rh),bx(this,rm),bx(this,rv),bx(this,rg),bx(this,a3,void 0),bx(this,a4,void 0),bx(this,a7,void 0),bx(this,a8,void 0),bx(this,a6,{}),bx(this,a9,[]),bx(this,re,()=>{if(this.range.matches(":focus-visible")){let{style:e}=p_(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),bx(this,rt,()=>{let{style:e}=p_(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),bx(this,ri,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),bL(this,a7,this.shadowRoot.querySelector("#startpoint")),bL(this,a8,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",mO.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===mO.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=bS(this,a3))?void 0:a.unassociateElement)||r.call(a,this),bL(this,a3,null)),i&&this.isConnected&&(bL(this,a3,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=bS(this,a3))?void 0:n.associateElement)||o.call(n,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),bC(this,rs,rn).call(this)):(this.range.setAttribute(e,i),bC(this,ro,rl).call(this)))}connectedCallback(){var e,t,i;let{style:a}=p_(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),bS(this,a6).pointer=p_(this.shadowRoot,"#pointer"),bS(this,a6).progress=p_(this.shadowRoot,"#progress"),bS(this,a6).thumb=p_(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),bS(this,a6).activeSegment=p_(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(mO.MEDIA_CONTROLLER);r&&(bL(this,a3,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=bS(this,a3))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",bS(this,re)),this.shadowRoot.addEventListener("focusout",bS(this,rt)),bC(this,rs,rn).call(this),pv(this.container,bS(this,ri))}disconnectedCallback(){var e,t;bC(this,ro,rl).call(this),null==(t=null==(e=bS(this,a3))?void 0:e.unassociateElement)||t.call(e,this),bL(this,a3,null),this.shadowRoot.removeEventListener("focusin",bS(this,re)),this.shadowRoot.removeEventListener("focusout",bS(this,rt)),pb(this.container,bS(this,ri))}updatePointerBar(e){var t;null==(t=bS(this,a6).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=bS(this,a6).progress)||e.style.setProperty("width",`${i}%`),null==(t=bS(this,a6).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];bL(this,a9,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[s,n]=[0===e,e===i.length-1],o=s?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=n?a:i[e+1],d=`calc(${(l-r)*100}%${s||n?"":" - var(--segments-gap)"})`,u=ph.createElementNS("http://www.w3.org/2000/svg","rect"),h=p_(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let s,n,o;return t=e.clientX,i=e.clientY,a=bS(this,a7).getBoundingClientRect(),s=(r=bS(this,a8).getBoundingClientRect()).x-a.x,0==(o=s*s+(n=r.y-a.y)*n)?0:Math.max(0,Math.min(1,((t-a.x)*s+(i-a.y)*n)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":bC(this,rg,rE).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":bC(this,rh,rc).call(this,e);break;case"pointerdown":bC(this,rd,ru).call(this,e);break;case"pointerup":bC(this,rm,rp).call(this);break;case"pointerleave":bC(this,rv,rb).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}a3=new WeakMap,a4=new WeakMap,a7=new WeakMap,a8=new WeakMap,a6=new WeakMap,a9=new WeakMap,re=new WeakMap,rt=new WeakMap,ri=new WeakMap,ra=new WeakSet,rr=function(e){let t=bS(this,a6).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=bS(this,a9).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},rs=new WeakSet,rn=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ro=new WeakSet,rl=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=pu.window)||e.removeEventListener("pointerup",this),null==(t=pu.window)||t.removeEventListener("pointermove",this)},rd=new WeakSet,ru=function(e){var t;bL(this,a4,e.composedPath().includes(this.range)),null==(t=pu.window)||t.addEventListener("pointerup",this)},rh=new WeakSet,rc=function(e){var t;"mouse"!==e.pointerType&&bC(this,rd,ru).call(this,e),this.addEventListener("pointerleave",this),null==(t=pu.window)||t.addEventListener("pointermove",this)},rm=new WeakSet,rp=function(){var e;null==(e=pu.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},rv=new WeakSet,rb=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=pu.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=bS(this,a6).activeSegment)||t.style.removeProperty("transform")},rg=new WeakSet,rE=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),bC(this,ra,rr).call(this,e),this.dragging&&("mouse"!==e.pointerType||!bS(this,a4))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},bR.shadowRootOptions={mode:"open"},bR.getTemplateHTML=function(e){return`
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
  `},pu.customElements.get("media-chrome-range")||pu.customElements.define("media-chrome-range",bR);var bD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bN=(e,t,i)=>(bD(e,t,"read from private field"),i?i.call(e):t.get(e)),bP=(e,t,i,a)=>(bD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class bU extends pu.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rf,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[mO.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===mO.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=bN(this,rf))?void 0:a.unassociateElement)||r.call(a,this),bP(this,rf,null)),i&&this.isConnected&&(bP(this,rf,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=bN(this,rf))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(mO.MEDIA_CONTROLLER);a&&(bP(this,rf,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=bN(this,rf))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=bN(this,rf))?void 0:e.unassociateElement)||t.call(e,this),bP(this,rf,null)}}rf=new WeakMap,bU.shadowRootOptions={mode:"open"},bU.getTemplateHTML=function(e){return`
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
  `},pu.customElements.get("media-control-bar")||pu.customElements.define("media-control-bar",bU);var bO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bH=(e,t,i)=>(bO(e,t,"read from private field"),i?i.call(e):t.get(e)),bW=(e,t,i,a)=>(bO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class b$ extends pu.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rw,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[mO.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===mO.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=bH(this,rw))?void 0:a.unassociateElement)||r.call(a,this),bW(this,rw,null)),i&&this.isConnected&&(bW(this,rw,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=bH(this,rw))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let{style:a}=p_(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(mO.MEDIA_CONTROLLER);r&&(bW(this,rw,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=bH(this,rw))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=bH(this,rw))?void 0:e.unassociateElement)||t.call(e,this),bW(this,rw,null)}}rw=new WeakMap,b$.shadowRootOptions={mode:"open"},b$.getTemplateHTML=function(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}
  `},b$.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},pu.customElements.get("media-text-display")||pu.customElements.define("media-text-display",b$);var bB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bV=(e,t,i)=>(bB(e,t,"read from private field"),i?i.call(e):t.get(e));class bj extends b${constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ry,void 0),((e,t,i,a)=>(bB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ry,this.shadowRoot.querySelector("slot")),bV(this,ry).textContent=m8(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===m$.MEDIA_DURATION&&(bV(this,ry).textContent=m8(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return px(this,m$.MEDIA_DURATION)}set mediaDuration(e){pL(this,m$.MEDIA_DURATION,e)}}ry=new WeakMap,bj.getSlotTemplateHTML=function(e,t){return`
    <slot>${m8(t.mediaDuration)}</slot>
  `},pu.customElements.get("media-duration-display")||pu.customElements.define("media-duration-display",bj);let bG={2:pi("Network Error"),3:pi("Decode Error"),4:pi("Source Not Supported"),5:pi("Encryption Error")},bF={2:pi("A network error caused the media download to fail."),3:pi("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:pi("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:pi("The media is encrypted and there are no keys to decrypt it.")},bq=e=>{var t,i;return 1===e.code?null:{title:null!=(t=bG[e.code])?t:`Error ${e.code}`,message:null!=(i=bF[e.code])?i:e.message}};var bz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function bQ(e){var t;let{title:i,message:a}=null!=(t=bq(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let bZ=[m$.MEDIA_ERROR_CODE,m$.MEDIA_ERROR_MESSAGE];class bK extends bM{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rA,null)}static get observedAttributes(){return[...super.observedAttributes,...bZ]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!bZ.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==bq(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return bz(this,e=rA,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;bz(this,t=rA,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return px(this,"mediaerrorcode")}set mediaErrorCode(e){pL(this,"mediaerrorcode",e)}get mediaErrorMessage(){return pD(this,"mediaerrormessage")}set mediaErrorMessage(e){pN(this,"mediaerrormessage",e)}}rA=new WeakMap,bK.getSlotTemplateHTML=function(e){return`
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
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${bQ({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},bK.formatErrorMessage=bQ,pu.customElements.get("media-error-dialog")||pu.customElements.define("media-error-dialog",bK);let bY=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,bX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,bJ=e=>{let t=e.mediaIsFullscreen?pi("exit fullscreen mode"):pi("enter fullscreen mode");e.setAttribute("aria-label",t)};class b0 extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_IS_FULLSCREEN,m$.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),bJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_IS_FULLSCREEN&&bJ(this)}get mediaFullscreenUnavailable(){return pD(this,m$.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){pN(this,m$.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return pC(this,m$.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){pR(this,m$.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?mU.MEDIA_EXIT_FULLSCREEN_REQUEST:mU.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new pu.CustomEvent(e,{composed:!0,bubbles:!0}))}}b0.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${m$.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${m$.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m$.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${m$.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${bY}</slot>
      <slot name="exit">${bX}</slot>
    </slot>
  `},b0.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pi("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${pi("Exit fullscreen mode")}</slot>
  `},pu.customElements.get("media-fullscreen-button")||pu.customElements.define("media-fullscreen-button",b0);let{MEDIA_TIME_IS_LIVE:b1,MEDIA_PAUSED:b2}=m$,{MEDIA_SEEK_TO_LIVE_REQUEST:b5,MEDIA_PLAY_REQUEST:b3}=mU,b4=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?pi("seek to live"):pi("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=pi("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class b7 extends bl{static get observedAttributes(){return[...super.observedAttributes,b1,b2]}connectedCallback(){super.connectedCallback(),b4(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),b4(this)}get mediaPaused(){return pC(this,m$.MEDIA_PAUSED)}set mediaPaused(e){pR(this,m$.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return pC(this,m$.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){pR(this,m$.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new pu.CustomEvent(b5,{composed:!0,bubbles:!0})),this.hasAttribute(b2)&&this.dispatchEvent(new pu.CustomEvent(b3,{composed:!0,bubbles:!0})))}}b7.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${b1}]:not([${b2}])) slot[name=indicator] > *,
      :host([${b1}]:not([${b2}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${b1}]:not([${b2}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${pi("live")}</slot>
  `},pu.customElements.get("media-live-button")||pu.customElements.define("media-live-button",b7);var b8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},b6=(e,t,i)=>(b8(e,t,"read from private field"),i?i.call(e):t.get(e)),b9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ge=(e,t,i,a)=>(b8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let gt="loadingdelay",gi="noautohide",ga=`
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
`;class gr extends pu.HTMLElement{constructor(){if(super(),b9(this,rk,void 0),b9(this,rI,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[mO.MEDIA_CONTROLLER,m$.MEDIA_PAUSED,m$.MEDIA_LOADING,gt]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===gt&&t!==i?this.loadingDelay=Number(i):e===mO.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=b6(this,rk))?void 0:a.unassociateElement)||r.call(a,this),ge(this,rk,null)),i&&this.isConnected&&(ge(this,rk,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=b6(this,rk))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(mO.MEDIA_CONTROLLER);a&&(ge(this,rk,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=b6(this,rk))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=b6(this,rk))?void 0:e.unassociateElement)||t.call(e,this),ge(this,rk,null)}get loadingDelay(){return b6(this,rI)}set loadingDelay(e){ge(this,rI,e);let{style:t}=p_(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return pC(this,m$.MEDIA_PAUSED)}set mediaPaused(e){pR(this,m$.MEDIA_PAUSED,e)}get mediaLoading(){return pC(this,m$.MEDIA_LOADING)}set mediaLoading(e){pR(this,m$.MEDIA_LOADING,e)}get mediaController(){return pD(this,mO.MEDIA_CONTROLLER)}set mediaController(e){pN(this,mO.MEDIA_CONTROLLER,e)}get noAutohide(){return pC(this,gi)}set noAutohide(e){pR(this,gi,e)}}rk=new WeakMap,rI=new WeakMap,gr.shadowRootOptions={mode:"open"},gr.getTemplateHTML=function(e){return`
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

      :host([${m$.MEDIA_LOADING}]:not([${m$.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${m$.MEDIA_LOADING}]:not([${m$.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${m$.MEDIA_LOADING}]:not([${m$.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${ga}</slot>
    <div id="status" role="status" aria-live="polite">${pi("media loading")}</div>
  `},pu.customElements.get("media-loading-indicator")||pu.customElements.define("media-loading-indicator",gr);let gs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,gn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,go=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,gl=e=>{let t="off"===e.mediaVolumeLevel?pi("unmute"):pi("mute");e.setAttribute("aria-label",t)};class gd extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),gl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_VOLUME_LEVEL&&gl(this)}get mediaVolumeLevel(){return pD(this,m$.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){pN(this,m$.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?mU.MEDIA_UNMUTE_REQUEST:mU.MEDIA_MUTE_REQUEST;this.dispatchEvent(new pu.CustomEvent(e,{composed:!0,bubbles:!0}))}}gd.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${m$.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${m$.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${m$.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${m$.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${m$.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${m$.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${m$.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${gs}</slot>
      <slot name="low">${gn}</slot>
      <slot name="medium">${gn}</slot>
      <slot name="high">${go}</slot>
    </slot>
  `},gd.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${pi("Mute")}</slot>
    <slot name="tooltip-unmute">${pi("Unmute")}</slot>
  `},pu.customElements.get("media-mute-button")||pu.customElements.define("media-mute-button",gd);let gu=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,gh=e=>{let t=e.mediaIsPip?pi("exit picture in picture mode"):pi("enter picture in picture mode");e.setAttribute("aria-label",t)};class gc extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_IS_PIP,m$.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_IS_PIP&&gh(this)}get mediaPipUnavailable(){return pD(this,m$.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){pN(this,m$.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return pC(this,m$.MEDIA_IS_PIP)}set mediaIsPip(e){pR(this,m$.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?mU.MEDIA_EXIT_PIP_REQUEST:mU.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new pu.CustomEvent(e,{composed:!0,bubbles:!0}))}}gc.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${m$.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${m$.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m$.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${m$.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gu}</slot>
      <slot name="exit">${gu}</slot>
    </slot>
  `},gc.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${pi("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${pi("Exit picture in picture mode")}</slot>
  `},pu.customElements.get("media-pip-button")||pu.customElements.define("media-pip-button",gc);var gm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let gp="rates",gv=[1,1.2,1.5,1.7,2];class gb extends bl{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rT,new p4(this,gp,{defaultValue:gv})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PLAYBACK_RATE,gp]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===gp&&(gm(this,rT).value=i),e===m$.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",pi("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return gm(this,rT)}set rates(e){e?Array.isArray(e)?gm(this,rT).value=e.join(" "):"string"==typeof e&&(gm(this,rT).value=e):gm(this,rT).value=""}get mediaPlaybackRate(){return px(this,m$.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){pL(this,m$.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(gm(this,rT).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new pu.CustomEvent(mU.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}rT=new WeakMap,gb.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},gb.getTooltipContentHTML=function(){return pi("Playback rate")},pu.customElements.get("media-playback-rate-button")||pu.customElements.define("media-playback-rate-button",gb);let gg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,gE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,gf=e=>{let t=e.mediaPaused?pi("play"):pi("pause");e.setAttribute("aria-label",t)};class gw extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PAUSED,m$.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),gf(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===m$.MEDIA_PAUSED||e===m$.MEDIA_LANG)&&gf(this)}get mediaPaused(){return pC(this,m$.MEDIA_PAUSED)}set mediaPaused(e){pR(this,m$.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?mU.MEDIA_PLAY_REQUEST:mU.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new pu.CustomEvent(e,{composed:!0,bubbles:!0}))}}gw.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${m$.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${m$.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${m$.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${m$.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${gg}</slot>
      <slot name="pause">${gE}</slot>
    </slot>
  `},gw.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${pi("Play")}</slot>
    <slot name="tooltip-pause">${pi("Pause")}</slot>
  `},pu.customElements.get("media-play-button")||pu.customElements.define("media-play-button",gw);let gy="placeholdersrc";class gA extends pu.HTMLElement{static get observedAttributes(){return[gy,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===gy)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return pD(this,gy)}set placeholderSrc(e){pN(this,"src",e)}get src(){return pD(this,"src")}set src(e){pN(this,"src",e)}}gA.shadowRootOptions={mode:"open"},gA.getTemplateHTML=function(e){return`
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
  `},pu.customElements.get("media-poster-image")||pu.customElements.define("media-poster-image",gA);var gk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};rM=new WeakMap,pu.customElements.get("media-preview-chapter-display")||pu.customElements.define("media-preview-chapter-display",class extends b${constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rM,void 0),((e,t,i,a)=>(gk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,rM,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PREVIEW_CHAPTER,m$.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===m$.MEDIA_PREVIEW_CHAPTER||e===m$.MEDIA_LANG)&&i!==t&&null!=i){var a;if((gk(this,rM,"read from private field"),a?a.call(this):rM.get(this)).textContent=i,""!==i){let e=pi("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return pD(this,m$.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){pN(this,m$.MEDIA_PREVIEW_CHAPTER,e)}});var gI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gT=(e,t,i)=>(gI(e,t,"read from private field"),i?i.call(e):t.get(e)),gM=(e,t,i,a)=>(gI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class g_ extends pu.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,r_,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[mO.MEDIA_CONTROLLER,m$.MEDIA_PREVIEW_IMAGE,m$.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(mO.MEDIA_CONTROLLER);a&&(gM(this,r_,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=gT(this,r_))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=gT(this,r_))?void 0:e.unassociateElement)||t.call(e,this),gM(this,r_,null)}attributeChangedCallback(e,t,i){var a,r,s,n,o;[m$.MEDIA_PREVIEW_IMAGE,m$.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===mO.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=gT(this,r_))?void 0:a.unassociateElement)||r.call(a,this),gM(this,r_,null)),i&&this.isConnected&&(gM(this,r_,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=gT(this,r_))?void 0:n.associateElement)||o.call(n,this)))}get mediaPreviewImage(){return pD(this,m$.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){pN(this,m$.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(m$.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(m$.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(m$.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,s]=e,n=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/r,parseInt(l)/s),c=Math.max(parseInt(d)/r,parseInt(u)/s),m=h<1,p=m?h:c>1?c:1,{style:v}=p_(this.shadowRoot,":host"),b=p_(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${s*p}px`;let f=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==n&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=n,f()),f(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}r_=new WeakMap,g_.shadowRootOptions={mode:"open"},g_.getTemplateHTML=function(e){return`
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
  `},pu.customElements.get("media-preview-thumbnail")||pu.customElements.define("media-preview-thumbnail",g_);var gS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gx=(e,t,i)=>(gS(e,t,"read from private field"),i?i.call(e):t.get(e));rS=new WeakMap,pu.customElements.get("media-preview-time-display")||pu.customElements.define("media-preview-time-display",class extends b${constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rS,void 0),((e,t,i,a)=>(gS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,rS,this.shadowRoot.querySelector("slot")),gx(this,rS).textContent=m8(0)}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_PREVIEW_TIME&&null!=i&&(gx(this,rS).textContent=m8(parseFloat(i)))}get mediaPreviewTime(){return px(this,m$.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){pL(this,m$.MEDIA_PREVIEW_TIME,e)}});let gL="seekoffset";class gC extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_CURRENT_TIME,gL]}connectedCallback(){super.connectedCallback(),this.seekOffset=px(this,gL,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===gL&&(this.seekOffset=px(this,gL,30))}get seekOffset(){return px(this,gL,30)}set seekOffset(e){pL(this,gL,e),this.setAttribute("aria-label",pi("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),pw(py(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return px(this,m$.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){pL(this,m$.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new pu.CustomEvent(mU.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}gC.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},gC.getTooltipContentHTML=function(){return pi("Seek backward")},pu.customElements.get("media-seek-backward-button")||pu.customElements.define("media-seek-backward-button",gC);let gR="seekoffset";class gD extends bl{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_CURRENT_TIME,gR]}connectedCallback(){super.connectedCallback(),this.seekOffset=px(this,gR,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===gR&&(this.seekOffset=px(this,gR,30))}get seekOffset(){return px(this,gR,30)}set seekOffset(e){pL(this,gR,e),this.setAttribute("aria-label",pi("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),pw(py(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return px(this,m$.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){pL(this,m$.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new pu.CustomEvent(mU.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}gD.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},gD.getTooltipContentHTML=function(){return pi("Seek forward")},pu.customElements.get("media-seek-forward-button")||pu.customElements.define("media-seek-forward-button",gD);var gN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gP=(e,t,i)=>(gN(e,t,"read from private field"),i?i.call(e):t.get(e));let gU={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},gO=[...Object.values(gU),m$.MEDIA_CURRENT_TIME,m$.MEDIA_DURATION,m$.MEDIA_SEEKABLE],gH=["Enter"," "],gW="&nbsp;/&nbsp;",g$=(e,{timesSep:t=gW}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,s]=null!=(a=e.mediaSeekable)?a:[],n=0;Number.isFinite(e.mediaDuration)?n=e.mediaDuration:Number.isFinite(s)&&(n=s);let o=e.remaining?m8(0-(n-r)):m8(r);return e.showDuration?`${o}${t}${m8(n)}`:o};class gB extends b${constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,rx,void 0),((e,t,i,a)=>(gN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,rx,this.shadowRoot.querySelector("slot")),gP(this,rx).innerHTML=`${g$(this)}`}static get observedAttributes(){return[...super.observedAttributes,...gO,"disabled"]}connectedCallback(){let{style:e}=p_(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",pi("playback time"));let t=e=>{let{key:i}=e;gH.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;i||a||!gH.includes(r)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){gO.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return pC(this,gU.REMAINING)}set remaining(e){pR(this,gU.REMAINING,e)}get showDuration(){return pC(this,gU.SHOW_DURATION)}set showDuration(e){pR(this,gU.SHOW_DURATION,e)}get noToggle(){return pC(this,gU.NO_TOGGLE)}set noToggle(e){pR(this,gU.NO_TOGGLE,e)}get mediaDuration(){return px(this,m$.MEDIA_DURATION)}set mediaDuration(e){pL(this,m$.MEDIA_DURATION,e)}get mediaCurrentTime(){return px(this,m$.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){pL(this,m$.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(m$.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(m$.MEDIA_SEEKABLE):this.setAttribute(m$.MEDIA_SEEKABLE,e.join(":"))}update(){let e=g$(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let s=e.remaining?m7(0-(r-i)):m7(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",s);let n=m7(r),o=`${s} of ${n}`;e.setAttribute("aria-valuetext",o)})(this),e!==gP(this,rx).innerHTML&&(gP(this,rx).innerHTML=e)}}rx=new WeakMap,gB.getSlotTemplateHTML=function(e,t){return`
    <slot>${g$(t)}</slot>
  `},pu.customElements.get("media-time-display")||pu.customElements.define("media-time-display",gB);var gV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gj=(e,t,i)=>(gV(e,t,"read from private field"),i?i.call(e):t.get(e)),gG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},gF=(e,t,i,a)=>(gV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class gq{constructor(e,t,i){gG(this,rL,void 0),gG(this,rC,void 0),gG(this,rR,void 0),gG(this,rD,void 0),gG(this,rN,void 0),gG(this,rP,void 0),gG(this,rU,void 0),gG(this,rO,void 0),gG(this,rH,0),gG(this,rW,(e=performance.now())=>{gF(this,rH,requestAnimationFrame(gj(this,rW))),gF(this,rD,performance.now()-gj(this,rR));let t=1e3/this.fps;if(gj(this,rD)>t){let i,a,r,s;gF(this,rR,e-gj(this,rD)%t);let n=1e3/((e-gj(this,rC))/++(i=this,a=rN,{set _(value){gF(i,a,value,r)},get _(){return gj(i,a,s)}})._),o=(e-gj(this,rP))/1e3/this.duration,l=gj(this,rU)+o*this.playbackRate;l-gj(this,rL).valueAsNumber>0?gF(this,rO,this.playbackRate/this.duration/n):(gF(this,rO,.995*gj(this,rO)),l=gj(this,rL).valueAsNumber+gj(this,rO)),this.callback(l)}}),gF(this,rL,e),this.callback=t,this.fps=i}start(){0===gj(this,rH)&&(gF(this,rR,performance.now()),gF(this,rC,gj(this,rR)),gF(this,rN,0),gj(this,rW).call(this))}stop(){0!==gj(this,rH)&&(cancelAnimationFrame(gj(this,rH)),gF(this,rH,0))}update({start:e,duration:t,playbackRate:i}){let a=e-gj(this,rL).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),gF(this,rU,e),gF(this,rP,performance.now()),this.duration=t,this.playbackRate=i}}rL=new WeakMap,rC=new WeakMap,rR=new WeakMap,rD=new WeakMap,rN=new WeakMap,rP=new WeakMap,rU=new WeakMap,rO=new WeakMap,rH=new WeakMap,rW=new WeakMap;var gz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gQ=(e,t,i)=>(gz(e,t,"read from private field"),i?i.call(e):t.get(e)),gZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},gK=(e,t,i,a)=>(gz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),gY=(e,t,i)=>(gz(e,t,"access private method"),i);let gX=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},gJ=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class g0 extends bR{constructor(){super(),gZ(this,rK),gZ(this,rX),gZ(this,r1),gZ(this,r5),gZ(this,r4),gZ(this,r8),gZ(this,r9),gZ(this,st),gZ(this,r$,void 0),gZ(this,rB,void 0),gZ(this,rV,void 0),gZ(this,rj,void 0),gZ(this,rG,void 0),gZ(this,rF,void 0),gZ(this,rq,void 0),gZ(this,rz,void 0),gZ(this,rQ,void 0),gZ(this,rZ,void 0),gZ(this,r0,e=>{!this.dragging&&(m2(e)&&(this.range.valueAsNumber=e),gQ(this,rZ)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),gK(this,rV,this.shadowRoot.querySelectorAll('[part~="box"]')),gK(this,rG,this.shadowRoot.querySelector('[part~="preview-box"]')),gK(this,rF,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);gK(this,rq,parseInt(e.getPropertyValue("--media-box-padding-left"))),gK(this,rz,parseInt(e.getPropertyValue("--media-box-padding-right"))),gK(this,rB,new gq(this.range,gQ(this,r0),60))}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PAUSED,m$.MEDIA_DURATION,m$.MEDIA_SEEKABLE,m$.MEDIA_CURRENT_TIME,m$.MEDIA_PREVIEW_IMAGE,m$.MEDIA_PREVIEW_TIME,m$.MEDIA_PREVIEW_CHAPTER,m$.MEDIA_BUFFERED,m$.MEDIA_PLAYBACK_RATE,m$.MEDIA_LOADING,m$.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",pi("seek")),gY(this,rK,rY).call(this),gK(this,r$,this.getRootNode()),null==(e=gQ(this,r$))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),gY(this,rK,rY).call(this),null==(e=gQ(this,r$))||e.removeEventListener("transitionstart",this),gK(this,r$,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===m$.MEDIA_CURRENT_TIME||e===m$.MEDIA_PAUSED||e===m$.MEDIA_ENDED||e===m$.MEDIA_LOADING||e===m$.MEDIA_DURATION||e===m$.MEDIA_SEEKABLE){let e,t,i,a;gQ(this,rB).update({start:gX(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),gY(this,rK,rY).call(this),e=this.range,t=m7(+gJ(this)),i=m7(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===m$.MEDIA_BUFFERED&&this.updateBufferedBar();(e===m$.MEDIA_DURATION||e===m$.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=gQ(this,rQ),this.updateBar())}}get mediaChaptersCues(){return gQ(this,rQ)}set mediaChaptersCues(e){var t;gK(this,rQ,e),this.updateSegments(null==(t=gQ(this,rQ))?void 0:t.map(e=>({start:gX(this,e.startTime),end:gX(this,e.endTime)})))}get mediaPaused(){return pC(this,m$.MEDIA_PAUSED)}set mediaPaused(e){pR(this,m$.MEDIA_PAUSED,e)}get mediaLoading(){return pC(this,m$.MEDIA_LOADING)}set mediaLoading(e){pR(this,m$.MEDIA_LOADING,e)}get mediaDuration(){return px(this,m$.MEDIA_DURATION)}set mediaDuration(e){pL(this,m$.MEDIA_DURATION,e)}get mediaCurrentTime(){return px(this,m$.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){pL(this,m$.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return px(this,m$.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){pL(this,m$.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(m$.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(m$.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(m$.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(m$.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(m$.MEDIA_SEEKABLE):this.setAttribute(m$.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return pD(this,m$.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){pN(this,m$.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return px(this,m$.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){pL(this,m$.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return pC(this,m$.MEDIA_ENDED)}set mediaEnded(e){pR(this,m$.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=gX(this,r)}let{style:a}=p_(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=p_(this.shadowRoot,"#current-rail"),t=p_(this.shadowRoot,'[part~="current-box"]'),i=gY(this,r1,r2).call(this,gQ(this,rF)),a=gY(this,r5,r3).call(this,i,this.range.valueAsNumber),r=gY(this,r4,r7).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":gY(this,st,si).call(this);break;case"pointermove":gY(this,r8,r6).call(this,e);break;case"pointerup":gQ(this,rZ)&&gK(this,rZ,!1);break;case"pointerdown":gK(this,rZ,!0);break;case"pointerleave":gY(this,r9,se).call(this,null);break;case"transitionstart":pA(e.target,this)&&setTimeout(()=>gY(this,rK,rY).call(this),0)}}}r$=new WeakMap,rB=new WeakMap,rV=new WeakMap,rj=new WeakMap,rG=new WeakMap,rF=new WeakMap,rq=new WeakMap,rz=new WeakMap,rQ=new WeakMap,rZ=new WeakMap,rK=new WeakSet,rY=function(){gY(this,rX,rJ).call(this)?gQ(this,rB).start():gQ(this,rB).stop()},rX=new WeakSet,rJ=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&pM(this)},r0=new WeakMap,r1=new WeakSet,r2=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?pk(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,s=-(a.left-i.left-r/2),n=i.right-a.left-r/2;return{box:{width:r,min:s,max:n},bounds:i,range:a}},r5=new WeakSet,r3=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:s}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},r4=new WeakSet,r7=function(e,t){let{width:i,min:a,max:r}=e.box,s=t*e.range.width;if(s<a+gQ(this,rq)){let t=e.range.left-e.bounds.left-gQ(this,rq);return`${s-i/2+t}px`}if(s>r-gQ(this,rz)){let t=e.bounds.right-e.range.right-gQ(this,rz);return`${s+i/2-t-e.range.width}px`}return 0},r8=new WeakSet,r6=function(e){let t=[...gQ(this,rV)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void gY(this,r9,se).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=p_(this.shadowRoot,"#preview-rail"),r=p_(this.shadowRoot,'[part~="preview-box"]'),s=gY(this,r1,r2).call(this,gQ(this,rG)),n=(e.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));let o=gY(this,r5,r3).call(this,s,n),l=gY(this,r4,r7).call(this,s,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${s.box.width}px`),1>Math.abs(Math.round(gQ(this,rj))-Math.round(n*i))&&n>.01&&n<.99||(gK(this,rj,n*i),gY(this,r9,se).call(this,gQ(this,rj)))},r9=new WeakSet,se=function(e){this.dispatchEvent(new pu.CustomEvent(mU.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},st=new WeakSet,si=function(){gQ(this,rB).stop();let e=gJ(this);this.dispatchEvent(new pu.CustomEvent(mU.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},g0.shadowRootOptions={mode:"open"},g0.getTemplateHTML=function(e){return`
    ${bR.getTemplateHTML(e)}
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

      :host(:is([${m$.MEDIA_PREVIEW_IMAGE}], [${m$.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${m$.MEDIA_PREVIEW_IMAGE}], [${m$.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${m$.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${m$.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${m$.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${m$.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${m$.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${m$.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${m$.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${m$.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${m$.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${m$.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${m$.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${m$.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${g_.shadowRootOptions.mode}">
            ${g_.getTemplateHTML({})}
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
  `},pu.customElements.get("media-time-range")||pu.customElements.define("media-time-range",g0),pu.customElements.get("media-volume-range")||pu.customElements.define("media-volume-range",class extends bR{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_VOLUME,m$.MEDIA_MUTED,m$.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new pu.CustomEvent(mU.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",pi("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===m$.MEDIA_VOLUME||e===m$.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return px(this,m$.MEDIA_VOLUME,1)}set mediaVolume(e){pL(this,m$.MEDIA_VOLUME,e)}get mediaMuted(){return pC(this,m$.MEDIA_MUTED)}set mediaMuted(e){pR(this,m$.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return pD(this,m$.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){pN(this,m$.MEDIA_VOLUME_UNAVAILABLE,e)}});var g1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},g2=(e,t,i)=>(g1(e,t,"read from private field"),i?i.call(e):t.get(e)),g5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},g3=(e,t,i,a)=>(g1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let g4={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof Ea&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof Ea?a.element[a.attributeName]=t:a.value=t}}}};class g7 extends pu.DocumentFragment{constructor(e,t,i=g4){var a;super(),g5(this,sa,void 0),g5(this,sr,void 0),this.append(e.content.cloneNode(!0)),g3(this,sa,g8(this)),g3(this,sr,i),null==(a=i.createCallback)||a.call(i,this,g2(this,sa),t),i.processCallback(this,g2(this,sa),t)}update(e){g2(this,sr).processCallback(this,g2(this,sa),e)}}sa=new WeakMap,sr=new WeakMap;let g8=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let s=new Ei;for([i,a]of g9(r.value))if(i){let i=new Ea(e,r.name,r.namespaceURI);s.append(i),t.push([a,i])}else s.append(a);r.value=s.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let s=r.data;if(1===r.nodeType||s.includes("{{")){let n=[];if(s)for([i,a]of g9(s))if(i){let i=new Er(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new Es(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else g8(r,t);return t},g6={},g9=e=>{let t="",i=0,a=g6[e],r=0,s;if(a)return a;for(a=[];s=e[r];r++)"{"===s&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==s||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=s||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),g6[e]=a};class Ee{get value(){return""}set value(e){}toString(){return this.value}}let Et=new WeakMap;class Ei{constructor(){g5(this,ss,[])}[Symbol.iterator](){return g2(this,ss).values()}get length(){return g2(this,ss).length}item(e){return g2(this,ss)[e]}append(...e){for(let t of e)t instanceof Ea&&Et.set(t,this),g2(this,ss).push(t)}toString(){return g2(this,ss).join("")}}ss=new WeakMap;class Ea extends Ee{constructor(e,t,i){super(),g5(this,su),g5(this,sn,""),g5(this,so,void 0),g5(this,sl,void 0),g5(this,sd,void 0),g3(this,so,e),g3(this,sl,t),g3(this,sd,i)}get attributeName(){return g2(this,sl)}get attributeNamespace(){return g2(this,sd)}get element(){return g2(this,so)}get value(){return g2(this,sn)}set value(e){g2(this,sn)!==e&&(g3(this,sn,e),g2(this,su,sh)&&1!==g2(this,su,sh).length?g2(this,so).setAttributeNS(g2(this,sd),g2(this,sl),g2(this,su,sh).toString()):null==e?g2(this,so).removeAttributeNS(g2(this,sd),g2(this,sl)):g2(this,so).setAttributeNS(g2(this,sd),g2(this,sl),e))}get booleanValue(){return g2(this,so).hasAttributeNS(g2(this,sd),g2(this,sl))}set booleanValue(e){if(g2(this,su,sh)&&1!==g2(this,su,sh).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}sn=new WeakMap,so=new WeakMap,sl=new WeakMap,sd=new WeakMap,su=new WeakSet,sh=function(){return Et.get(this)};class Er extends Ee{constructor(e,t){super(),g5(this,sc,void 0),g5(this,sm,void 0),g3(this,sc,e),g3(this,sm,t?[...t]:[new Text])}get replacementNodes(){return g2(this,sm)}get parentNode(){return g2(this,sc)}get nextSibling(){return g2(this,sm)[g2(this,sm).length-1].nextSibling}get previousSibling(){return g2(this,sm)[0].previousSibling}get value(){return g2(this,sm).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),g3(this,sm,function(e,t,i,a=null){let r=0,s,n,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(s=t[r];r<l;)o=i[r++],n=s?s.nextSibling:a,s==o?s=n:r<l&&i[r]==n?(e.replaceChild(o,s),s=n):e.insertBefore(o,s);for(;s!=a;)n=s.nextSibling,e.removeChild(s),s=n}return i}(g2(this,sm)[0].parentNode,g2(this,sm),t,this.nextSibling))}}sc=new WeakMap,sm=new WeakMap;class Es extends Er{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let En={string:e=>String(e)};class Eo{constructor(e){this.template=e,this.state=void 0}}let El=new WeakMap,Ed=new WeakMap,Eu={partial:(e,t)=>{t[e.expression]=new Eo(e.template)},if:(e,t)=>{var i;if(Ep(e.expression,t))if(El.get(e)!==e.template){El.set(e,e.template);let i=new g7(e.template,t,Ec);e.replace(i),Ed.set(e,i)}else null==(i=Ed.get(e))||i.update(t);else e.replace(""),El.delete(e),Ed.delete(e)}},Eh=Object.keys(Eu),Ec={processCallback(e,t,i){var a,r;if(i)for(let[e,s]of t){if(s instanceof Es){if(!s.directive){let e=Eh.find(e=>s.template.hasAttribute(e));e&&(s.directive=e,s.expression=s.template.getAttribute(e))}null==(a=Eu[s.directive])||a.call(Eu,s,i);continue}let t=Ep(e,i);if(t instanceof Eo){El.get(s)!==t.template?(El.set(s,t.template),s.value=t=new g7(t.template,t.state,Ec),Ed.set(s,t)):null==(r=Ed.get(s))||r.update(t.state);continue}t?(s instanceof Ea&&s.attributeName.startsWith("aria-")&&(t=String(t)),s instanceof Ea?"boolean"==typeof t?s.booleanValue=t:"function"==typeof t?s.element[s.attributeName]=t:s.value=t:(s.value=t,El.delete(s),Ed.delete(s))):s instanceof Ea?s.value=void 0:(s.value=void 0,El.delete(s),Ed.delete(s))}}},Em={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=En[t])?void 0:i.call(En,e)}};function Ep(e,t={}){var i,a,r,s,n,o,l;let d=(function(e,t){let i,a,r,s=[];for(;e;){for(let s in r=null,i=e.length,t)(a=t[s].exec(e))&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&s.push({token:e.substr(0,i),type:void 0}),r&&s.push(r),e=e.substr(i+(r?r.token.length:0))}return s})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return Ev(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return Ev(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(s=l[e+1])?void 0:s.token,d=null==(n=l[e+2])?void 0:n.token;i&&"="===a&&(o[i]=Eg(d,t))}return i}if(1===d.length)return Eb(d[0])?Eg(d[0].token,t):Ev(e);if(2===d.length){let i=Em[null==(o=d[0])?void 0:o.token];return i&&Eb(d[1])?i(Eg(d[1].token,t)):Ev(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=Em[i];if(!a||!Eb(d[0])||!Eb(d[2]))return Ev(e);let r=Eg(d[0].token,t);return a(r,"|"===i?d[2].token:Eg(d[2].token,t))}}function Ev(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Eb({type:e}){return["number","boolean","string","param"].includes(e)}function Eg(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):m5(e)?parseFloat(e):t[e]}var EE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ef=(e,t,i)=>(EE(e,t,"read from private field"),i?i.call(e):t.get(e)),Ew=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ey=(e,t,i,a)=>(EE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),EA=(e,t,i)=>(EE(e,t,"access private method"),i);let Ek={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},EI=ph.createElement("template");EI.innerHTML=`
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
`;class ET extends pu.HTMLElement{constructor(){super(),Ew(this,sg),Ew(this,sf),Ew(this,sp,void 0),Ew(this,sv,void 0),Ew(this,sb,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(Ek[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(mB.BREAKPOINTS_COMPUTED,this.render),EA(this,sg,sE).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=Ef(this,sp))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(Ey(this,sp,e),Ey(this,sb,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>Ek[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=Ek[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(m5(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&EA(this,sf,sw).call(this)}connectedCallback(){EA(this,sf,sw).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Ef(this,sv)&&(Ey(this,sv,this.template),this.renderer=new g7(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(EI.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function EM(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function E_(e){return e.split("-")[0]}sp=new WeakMap,sv=new WeakMap,sb=new WeakMap,sg=new WeakSet,sE=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},sf=new WeakSet,sw=function(){var e;let t=this.getAttribute("template");if(!t||t===Ef(this,sb))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){Ey(this,sb,t),Ey(this,sp,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(Ey(this,sb,t),EM(t).then(e=>{let t=ph.createElement("template");t.innerHTML=e,Ey(this,sp,t),this.createRenderer()}).catch(console.error))},ET.observedAttributes=["template"],ET.processor=Ec,pu.customElements.get("media-theme")||pu.customElements.define("media-theme",ET);class ES extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class Ex extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var EL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},EC=(e,t,i)=>(EL(e,t,"read from private field"),i?i.call(e):t.get(e)),ER=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ED=(e,t,i,a)=>(EL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),EN=(e,t,i)=>(EL(e,t,"access private method"),i);function EP({type:e,text:t,value:i,checked:a}){let r=ph.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let s=ph.createElement("span");return s.textContent=t,r.append(s),r}function EU(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let EO="style",EH="hidden",EW="disabled";class E$ extends pu.HTMLElement{constructor(){if(super(),ER(this,sS),ER(this,sL),ER(this,sD),ER(this,sP),ER(this,sO),ER(this,sW),ER(this,sj),ER(this,sF),ER(this,sz),ER(this,sZ),ER(this,sY),ER(this,sJ),ER(this,s1),ER(this,s5),ER(this,s4),ER(this,s8),ER(this,s9),ER(this,nt),ER(this,sy,null),ER(this,sA,null),ER(this,sk,null),ER(this,sI,new Set),ER(this,sT,void 0),ER(this,sM,!1),ER(this,s_,null),ER(this,sR,()=>{let e=EC(this,sI),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ED(this,sI,t)}),ER(this,sB,()=>{EN(this,sj,sG).call(this),EN(this,sF,sq).call(this,!1)}),ER(this,sV,()=>{EN(this,sj,sG).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),ED(this,sT,new MutationObserver(EC(this,sR))),EC(this,sT).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[EW,EH,EO,"anchor",mO.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":EN(this,sS,sx).call(this,e);break;case"invoke":EN(this,sP,sU).call(this,e);break;case"click":EN(this,sz,sQ).call(this,e);break;case"toggle":EN(this,sY,sX).call(this,e);break;case"focusout":EN(this,s1,s2).call(this,e);break;case"keydown":EN(this,s5,s3).call(this,e)}}connectedCallback(){var e,t;ED(this,s_,pS(this.shadowRoot,":host")),EN(this,sD,sN).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ED(this,sy,pf(this)),null==(t=null==(e=EC(this,sy))?void 0:e.associateElement)||t.call(e,this),this.hidden||(pv(EV(this),EC(this,sB)),pv(this,EC(this,sV))),EN(this,sL,sC).call(this)}disconnectedCallback(){var e,t;pb(EV(this),EC(this,sB)),pb(this,EC(this,sV)),this.disable(),null==(t=null==(e=EC(this,sy))?void 0:e.unassociateElement)||t.call(e,this),ED(this,sy,null)}attributeChangedCallback(e,t,i){var a,r,s,n;e===EH&&i!==t?(EC(this,sM)||ED(this,sM,!0),this.hidden?EN(this,sW,s$).call(this):EN(this,sO,sH).call(this),this.dispatchEvent(new Ex({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===mO.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=EC(this,sy))?void 0:a.unassociateElement)||r.call(a,this),ED(this,sy,null)),i&&this.isConnected&&(ED(this,sy,pf(this)),null==(n=null==(s=EC(this,sy))?void 0:s.associateElement)||n.call(s,this))):e===EW&&i!==t?null==i?this.enable():this.disable():e===EO&&i!==t&&EN(this,sD,sN).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=pT(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(EB)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&EN(this,nt,ni).call(this,t)}focus(){if(ED(this,sA,pI()),this.items.length){EN(this,s9,ne).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=EN(this,s4,s7).call(this,e);i&&(EN(this,nt,ni).call(this,i,"checkbox"===i.type),EC(this,sk)&&!this.hidden&&(null==(t=EC(this,sA))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,s=null!=(i=null!=(t=EN(this,s4,s7).call(this,e))?t:EN(this,s8,s6).call(this))?i:r[0],n=Math.max(0,r.indexOf(s));"ArrowDown"===a?n++:"ArrowUp"===a?n--:"Home"===e.key?n=0:"End"===e.key&&(n=r.length-1),n<0&&(n=r.length-1),n>r.length-1&&(n=0),EN(this,s9,ne).call(this,r[n]),r[n].focus()}}function EB(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function EV(e){var t;return null!=(t=e.getAttribute("bounds")?pk(e,`#${e.getAttribute("bounds")}`):pE(e)||e.parentElement)?t:e}sy=new WeakMap,sA=new WeakMap,sk=new WeakMap,sI=new WeakMap,sT=new WeakMap,sM=new WeakMap,s_=new WeakMap,sS=new WeakSet,sx=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&EN(this,sL,sC).call(this),t.name||EC(this,sR).call(this)},sL=new WeakSet,sC=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},sR=new WeakMap,sD=new WeakSet,sN=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},sP=new WeakSet,sU=function(e){ED(this,sk,e.relatedTarget),pA(this,e.relatedTarget)||(this.hidden=!this.hidden)},sO=new WeakSet,sH=function(){var e;null==(e=EC(this,sk))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),pv(EV(this),EC(this,sB)),pv(this,EC(this,sV))},sW=new WeakSet,s$=function(){var e;null==(e=EC(this,sk))||e.setAttribute("aria-expanded","false"),pb(EV(this),EC(this,sB)),pb(this,EC(this,sV))},sB=new WeakMap,sV=new WeakMap,sj=new WeakSet,sG=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(E_(i))?"y":"x")?"y":"x",s="y"===r?"height":"width",n=E_(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[s]/2-t[s]/2;switch(n){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let s,n;return{anchor:(i=e,a=t.offsetParent,s=i.getBoundingClientRect(),n=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:s.x-n.x,y:s.y-n.y,width:s.width,height:s.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=EV(this).getBoundingClientRect(),r=a.width-t-e,s=a.height-i-this.offsetHeight,{style:n}=EC(this,s_);n.setProperty("position","absolute"),n.setProperty("right",`${Math.max(0,r)}px`),n.setProperty("--_menu-bottom",`${s}px`);let o=getComputedStyle(this),l=n.getPropertyValue("--_menu-bottom")===o.bottom?s:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},sF=new WeakSet,sq=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=EC(this,s_);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),EN(this,sj,sG).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),EN(this,sj,sG).call(this);a.removeProperty("--media-menu-transition-in")},sz=new WeakSet,sQ=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(EC(this,sZ,sK))){null==(t=EC(this,sA))||t.focus(),this.hidden=!0;return}let i=EN(this,s4,s7).call(this,e);!i||i.hasAttribute("disabled")||(EN(this,s9,ne).call(this,i),this.handleSelect(e))},sZ=new WeakSet,sK=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},sY=new WeakSet,sX=function(e){if(e.target===this)return;EN(this,sJ,s0).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new ES({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);EN(this,sF,sq).call(this,!0)},sJ=new WeakSet,s0=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},s1=new WeakSet,s2=function(e){var t;pA(this,e.relatedTarget)||(EC(this,sM)&&(null==(t=EC(this,sA))||t.focus()),EC(this,sk)&&EC(this,sk)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},s5=new WeakSet,s3=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(n))if(e.preventDefault(),e.stopPropagation(),"Tab"===n){if(EC(this,sM)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===n?(null==(s=EC(this,sA))||s.focus(),EC(this,sM)&&(this.hidden=!0)):"Enter"===n||" "===n?this.handleSelect(e):this.handleMove(e)},s4=new WeakSet,s7=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},s8=new WeakSet,s6=function(){return this.items.find(e=>0===e.tabIndex)},s9=new WeakSet,ne=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},nt=new WeakSet,ni=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},E$.shadowRootOptions={mode:"open"},E$.getTemplateHTML=function(e){return`
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
  `},pu.customElements.get("media-chrome-menu")||pu.customElements.define("media-chrome-menu",E$);var Ej=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},EG=(e,t,i)=>(Ej(e,t,"read from private field"),i?i.call(e):t.get(e)),EF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Eq=(e,t,i,a)=>(Ej(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ez=(e,t,i)=>(Ej(e,t,"access private method"),i);let EQ="type",EZ="value",EK="checked",EY="disabled";class EX extends pu.HTMLElement{constructor(){if(super(),EF(this,ns),EF(this,no),EF(this,nd),EF(this,nc),EF(this,np),EF(this,nb),EF(this,na,!1),EF(this,nr,void 0),EF(this,nh,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,s=ph.createElement("span");s.textContent=null!=r?r:"",i.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=pg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[EQ,EY,EK,EZ]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),EJ(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Ez(this,ns,nn).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Ez(this,np,nv).call(this,e);break;case"keyup":Ez(this,nc,nm).call(this,e)}}attributeChangedCallback(e,t,i){e===EK&&EJ(this)&&!EG(this,na)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===EQ&&i!==t?this.role="menuitem"+i:e===EY&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(EY)||this.enable(),this.role="menuitem"+this.type,Eq(this,nr,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),Ez(this,nb,ng).call(this),this.submenuElement&&Ez(this,no,nl).call(this)}disconnectedCallback(){this.disable(),Ez(this,nb,ng).call(this),Eq(this,nr,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=pT(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(EQ))?e:""}set type(e){this.setAttribute(EQ,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(EZ))?e:this.text}set value(e){this.setAttribute(EZ,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(EJ(this))return"true"===this.getAttribute("aria-checked")}set checked(e){EJ(this)&&(Eq(this,na,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!EJ(this)&&this.invokeTargetElement&&pA(this,e.target)&&this.invokeTargetElement.dispatchEvent(new ES({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function EJ(e){return"radio"===e.type||"checkbox"===e.type}na=new WeakMap,nr=new WeakMap,ns=new WeakSet,nn=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?Ez(this,no,nl).call(this):Ez(this,nd,nu).call(this))},no=new WeakSet,nl=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",EG(this,nh)),this.submenuElement.addEventListener("addmenuitem",EG(this,nh)),this.submenuElement.addEventListener("removemenuitem",EG(this,nh)),EG(this,nh).call(this)},nd=new WeakSet,nu=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",EG(this,nh)),this.submenuElement.removeEventListener("addmenuitem",EG(this,nh)),this.submenuElement.removeEventListener("removemenuitem",EG(this,nh)),EG(this,nh).call(this)},nh=new WeakMap,nc=new WeakSet,nm=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",Ez(this,nc,nm))},np=new WeakSet,nv=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",Ez(this,nc,nm)):this.addEventListener("keyup",Ez(this,nc,nm),{once:!0})},nb=new WeakSet,ng=function(){var e;let t=null==(e=EG(this,nr))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},EX.shadowRootOptions={mode:"open"},EX.getTemplateHTML=function(e){return`
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
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},EX.getSuffixSlotInnerHTML=function(e){return""},pu.customElements.get("media-chrome-menu-item")||pu.customElements.define("media-chrome-menu-item",EX);class E0 extends E${get anchorElement(){return"auto"!==this.anchor?super.anchorElement:pE(this).querySelector("media-settings-menu-button")}}E0.getTemplateHTML=function(e){return`
    ${E$.getTemplateHTML(e)}
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
  `},pu.customElements.get("media-settings-menu")||pu.customElements.define("media-settings-menu",E0);class E1 extends EX{}E1.shadowRootOptions={mode:"open"},E1.getTemplateHTML=function(e){return`
    ${EX.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},E1.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},pu.customElements.get("media-settings-menu-item")||pu.customElements.define("media-settings-menu-item",E1);class E2 extends bl{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=pT(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new ES({relatedTarget:this}))}}pu.customElements.get("media-chrome-menu-button")||pu.customElements.define("media-chrome-menu-button",E2);class E5 extends E2{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",pi("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:pE(this).querySelector("media-settings-menu")}}E5.getSlotTemplateHTML=function(){return`
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
  `},E5.getTooltipContentHTML=function(){return pi("Settings")},pu.customElements.get("media-settings-menu-button")||pu.customElements.define("media-settings-menu-button",E5);var E3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},E4=(e,t,i)=>(E3(e,t,"read from private field"),i?i.call(e):t.get(e)),E7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},E8=(e,t,i,a)=>(E3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),E6=(e,t,i)=>(E3(e,t,"access private method"),i);nE=new WeakMap,nf=new WeakMap,nw=new WeakSet,ny=function(){if(E4(this,nf)===JSON.stringify(this.mediaAudioTrackList))return;E8(this,nf,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=EP({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(EU(this,"checked-indicator")),this.defaultSlot.append(e)}},nA=new WeakSet,nk=function(){if(null==this.value)return;let e=new pu.CustomEvent(mU.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},pu.customElements.get("media-audio-track-menu")||pu.customElements.define("media-audio-track-menu",class extends E${constructor(){super(...arguments),E7(this,nw),E7(this,nA),E7(this,nE,[]),E7(this,nf,void 0)}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_AUDIO_TRACK_LIST,m$.MEDIA_AUDIO_TRACK_ENABLED,m$.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===m$.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===m$.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;E8(this,nE,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(m1)),E6(this,nw,ny).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",E6(this,nA,nk))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",E6(this,nA,nk))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=pE(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return E4(this,nE)}set mediaAudioTrackList(e){E8(this,nE,e),E6(this,nw,ny).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=pD(this,m$.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){pN(this,m$.MEDIA_AUDIO_TRACK_ENABLED,e)}});let E9=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,fe=e=>{let t=pi("Audio");e.setAttribute("aria-label",t)};class ft extends E2{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_AUDIO_TRACK_ENABLED,m$.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fe(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_LANG&&fe(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=pE(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=pD(this,m$.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){pN(this,m$.MEDIA_AUDIO_TRACK_ENABLED,e)}}ft.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${E9}</slot>
  `},ft.getTooltipContentHTML=function(){return pi("Audio")},pu.customElements.get("media-audio-track-menu-button")||pu.customElements.define("media-audio-track-menu-button",ft);var fi=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fr=(e,t,i)=>(fi(e,t,"access private method"),i);let fs=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class fn extends E${constructor(){super(...arguments),fa(this,nT),fa(this,n_),fa(this,nI,void 0)}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_SUBTITLES_LIST,m$.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_SUBTITLES_LIST&&t!==i?fr(this,nT,nM).call(this):e===m$.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",fr(this,n_,nS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",fr(this,n_,nS))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:pE(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return fo(this,m$.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){fl(this,m$.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return fo(this,m$.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){fl(this,m$.MEDIA_SUBTITLES_SHOWING,e)}}nI=new WeakMap,nT=new WeakSet,nM=function(){var e,t,i,a,r,s;if(fi(this,t=nI,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=nI,r=JSON.stringify(this.mediaSubtitlesList),fi(this,a,"write to private field"),s?s.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let n=!this.value,o=EP({type:"radio",text:this.formatMenuItemText(pi("Off")),value:"off",checked:n});for(let t of(o.prepend(EU(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=EP({type:"radio",text:this.formatMenuItemText(t.label,t),value:p9(t),checked:this.value==p9(t)});i.prepend(EU(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(EU(this,"captions-indicator")),this.defaultSlot.append(i)}},n_=new WeakSet,nS=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(m$.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new pu.CustomEvent(mU.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new pu.CustomEvent(mU.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},fn.getTemplateHTML=function(e){return`
    ${E$.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${fs}</slot>
  `};let fo=(e,t)=>{let i=e.getAttribute(t);return i?p8(i):[]},fl=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ve(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};pu.customElements.get("media-captions-menu")||pu.customElements.define("media-captions-menu",fn);let fd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,fu=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,fh=e=>{e.setAttribute("data-captions-enabled",vr(e).toString())},fc=e=>{e.setAttribute("aria-label",pi("closed captions"))};class fm extends E2{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_SUBTITLES_LIST,m$.MEDIA_SUBTITLES_SHOWING,m$.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),fc(this),fh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_SUBTITLES_SHOWING?fh(this):e===m$.MEDIA_LANG&&fc(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=pE(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return fp(this,m$.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){fv(this,m$.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return fp(this,m$.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){fv(this,m$.MEDIA_SUBTITLES_SHOWING,e)}}fm.getSlotTemplateHTML=function(){return`
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
      <slot name="on">${fd}</slot>
      <slot name="off">${fu}</slot>
    </slot>
  `},fm.getTooltipContentHTML=function(){return pi("Captions")};let fp=(e,t)=>{let i=e.getAttribute(t);return i?p8(i):[]},fv=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ve(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};pu.customElements.get("media-captions-menu-button")||pu.customElements.define("media-captions-menu-button",fm);var fb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fg=(e,t,i)=>(fb(e,t,"read from private field"),i?i.call(e):t.get(e)),fE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ff=(e,t,i)=>(fb(e,t,"access private method"),i);let fw="rates";nx=new WeakMap,nL=new WeakSet,nC=function(){for(let e of(this.defaultSlot.textContent="",fg(this,nx))){let t=EP({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(EU(this,"checked-indicator")),this.defaultSlot.append(t)}},nR=new WeakSet,nD=function(){if(!this.value)return;let e=new pu.CustomEvent(mU.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},pu.customElements.get("media-playback-rate-menu")||pu.customElements.define("media-playback-rate-menu",class extends E${constructor(){super(),fE(this,nL),fE(this,nR),fE(this,nx,new p4(this,fw,{defaultValue:gv})),ff(this,nL,nC).call(this)}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PLAYBACK_RATE,fw]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===m$.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===fw&&t!=i&&(fg(this,nx).value=i,ff(this,nL,nC).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ff(this,nR,nD))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ff(this,nR,nD))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:pE(this).querySelector("media-playback-rate-menu-button")}get rates(){return fg(this,nx)}set rates(e){e?Array.isArray(e)?fg(this,nx).value=e.join(" "):"string"==typeof e&&(fg(this,nx).value=e):fg(this,nx).value="",ff(this,nL,nC).call(this)}get mediaPlaybackRate(){return px(this,m$.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){pL(this,m$.MEDIA_PLAYBACK_RATE,e)}});class fy extends E2{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===m$.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",pi("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:pE(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return px(this,m$.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){pL(this,m$.MEDIA_PLAYBACK_RATE,e)}}fy.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},fy.getTooltipContentHTML=function(){return pi("Playback rate")},pu.customElements.get("media-playback-rate-menu-button")||pu.customElements.define("media-playback-rate-menu-button",fy);var fA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},fk=(e,t,i)=>(fA(e,t,"read from private field"),i?i.call(e):t.get(e)),fI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fT=(e,t,i,a)=>(fA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),fM=(e,t,i)=>(fA(e,t,"access private method"),i);nN=new WeakMap,nP=new WeakMap,nU=new WeakSet,nO=function(){if(fk(this,nP).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&fk(this,nP).mediaHeight===this.mediaHeight)return;fk(this,nP).mediaRenditionList=JSON.stringify(this.mediaRenditionList),fk(this,nP).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let i of e)i.selected=i===t;this.defaultSlot.textContent="";let i=!this.mediaRenditionSelected;for(let t of e){let e=EP({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!i});e.prepend(EU(this,"checked-indicator")),this.defaultSlot.append(e)}let a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${pi("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${pi("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(pi("Auto")),s=EP({type:"radio",text:r,value:"auto",checked:i});s.dataset.description=r,s.prepend(EU(this,"checked-indicator")),this.defaultSlot.append(s)},nH=new WeakSet,nW=function(){if(null==this.value)return;let e=new pu.CustomEvent(mU.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},pu.customElements.get("media-rendition-menu")||pu.customElements.define("media-rendition-menu",class extends E${constructor(){super(...arguments),fI(this,nU),fI(this,nH),fI(this,nN,[]),fI(this,nP,{})}static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_RENDITION_LIST,m$.MEDIA_RENDITION_SELECTED,m$.MEDIA_RENDITION_UNAVAILABLE,m$.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===m$.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",fM(this,nU,nO).call(this);else if(e===m$.MEDIA_RENDITION_LIST&&t!==i)fT(this,nN,null==i?void 0:i.split(/\s+/).map(mJ)),fM(this,nU,nO).call(this);else e===m$.MEDIA_HEIGHT&&t!==i&&fM(this,nU,nO).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",fM(this,nH,nW))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",fM(this,nH,nW))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:pE(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return fk(this,nN)}set mediaRenditionList(e){fT(this,nN,e),fM(this,nU,nO).call(this)}get mediaRenditionSelected(){return pD(this,m$.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){pN(this,m$.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return px(this,m$.MEDIA_HEIGHT)}set mediaHeight(e){pL(this,m$.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}});let f_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class fS extends E2{static get observedAttributes(){return[...super.observedAttributes,m$.MEDIA_RENDITION_SELECTED,m$.MEDIA_RENDITION_UNAVAILABLE,m$.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",pi("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:pE(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return pD(this,m$.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){pN(this,m$.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return px(this,m$.MEDIA_HEIGHT)}set mediaHeight(e){pL(this,m$.MEDIA_HEIGHT,e)}}fS.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${f_}</slot>
  `},fS.getTooltipContentHTML=function(){return pi("Quality")},pu.customElements.get("media-rendition-menu-button")||pu.customElements.define("media-rendition-menu-button",fS);let fx=pu.document?.createElement?.("template");fx&&(fx.innerHTML=`
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

  `);class fL extends ET{static template=fx}pu.customElements&&!pu.customElements.get("media-theme-tailwind-audio")&&pu.customElements.define("media-theme-tailwind-audio",fL);var fC=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),fR={className:"class",htmlFor:"for"};function fD(e,t,i){e[t]=i,null==i&&t in(globalThis.HTMLElement?.prototype??{})&&e.removeAttribute(t)}var fN=function({react:e,tagName:t,elementClass:i,events:a,displayName:r,toAttributeName:s=function(e){return e.toLowerCase()},toAttributeValue:n=function(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:"object"!=typeof e||null===e?e:void 0}}){let o=Number.parseInt(e.version)>=19,l=e.forwardRef((r,l)=>{let d=e.useRef(null),u=e.useRef(new Map),h={},c={},m={},p={};for(let[e,t]of Object.entries(r)){if(fC.has(e)){m[e]=t;continue}let a=s(fR[e]??e);if(e in i.prototype&&!(e in(globalThis.HTMLElement?.prototype??{}))&&!i.observedAttributes?.some(e=>e===a)){p[e]=t;continue}if(e.startsWith("on")){h[e]=t;continue}let r=n(t);a&&null!=r&&(c[a]=String(r),o||(m[a]=r)),a&&o&&(m[a]=t)}if("undefined"!=typeof window){for(let t in h){let i=h[t],r=t.endsWith("Capture"),s=(a?.[t]??t.slice(2).toLowerCase()).slice(0,r?-7:void 0);e.useLayoutEffect(()=>{let e=d?.current;if(e&&"function"==typeof i)return e.addEventListener(s,i,r),()=>{e.removeEventListener(s,i,r)}},[d?.current,i])}e.useLayoutEffect(()=>{if(null===d.current)return;let e=new Map;for(let t in p)fD(d.current,t,p[t]),u.current.delete(t),e.set(t,p[t]);for(let[e,t]of u.current)fD(d.current,e,void 0);u.current=e})}if("undefined"==typeof window&&i?.getTemplateHTML&&i?.shadowRootOptions){let{mode:t,delegatesFocus:a}=i.shadowRootOptions;m.children=[e.createElement("template",{shadowrootmode:t,shadowrootdelegatesfocus:a,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(c)}}),m.children]}return e.createElement(t,{...m,ref:e.useCallback(e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)},[l])})});return l.displayName=r??i.name,l}({react:nB.default,tagName:"media-theme-tailwind-audio",elementClass:fL});let fP=function({audioUrl:e}){return(0,n$.jsxs)("div",{className:"w-full max-w-full relative",dir:"ltr",children:[(0,n$.jsx)(fN,{style:{width:"100%","--media-accent-color":"var(--primary)"},children:(0,n$.jsx)("audio",{slot:"media",src:e,playsInline:!0,crossOrigin:"anonymous"})})," "]})};var fU=e.i(46696),fO=e.i(75254);let fH=(0,fO.default)("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);var fW=e.i(15288),f$=e.i(30207),fB=e.i(34620);e.i(74080);var fV=e.i(91918),fj=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=(0,fV.createSlot)(`Primitive.${t}`),a=nB.forwardRef((e,a)=>{let{asChild:r,...s}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n$.jsx)(r?i:t,{...s,ref:a})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{}),fG=e.i(2239);function fF(){return()=>{}}var fq="Avatar",[fz,fQ]=function(e,t=[]){let i=[],a=()=>{let t=i.map(e=>nB.createContext(e));return function(i){let a=i?.[e]||t;return nB.useMemo(()=>({[`__scope${e}`]:{...i,[e]:a}}),[i,a])}};return a.scopeName=e,[function(t,a){let r=nB.createContext(a);r.displayName=t+"Context";let s=i.length;i=[...i,a];let n=t=>{let{scope:i,children:a,...n}=t,o=i?.[e]?.[s]||r,l=nB.useMemo(()=>n,Object.values(n));return(0,n$.jsx)(o.Provider,{value:l,children:a})};return n.displayName=t+"Provider",[n,function(i,n){let o=n?.[e]?.[s]||r,l=nB.useContext(o);if(l)return l;if(void 0!==a)return a;throw Error(`\`${i}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let i=()=>{let i=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=i.reduce((t,{useScope:i,scopeName:a})=>{let r=i(e)[`__scope${a}`];return{...t,...r}},{});return nB.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return i.scopeName=t.scopeName,i}(a,...t)]}(fq),[fZ,fK]=fz(fq),fY=nB.forwardRef((e,t)=>{let{__scopeAvatar:i,...a}=e,[r,s]=nB.useState("idle");return(0,n$.jsx)(fZ,{scope:i,imageLoadingStatus:r,onImageLoadingStatusChange:s,children:(0,n$.jsx)(fj.span,{...a,ref:t})})});fY.displayName=fq;var fX="AvatarImage",fJ=nB.forwardRef((e,t)=>{let{__scopeAvatar:i,src:a,onLoadingStatusChange:r=()=>{},...s}=e,n=fK(fX,i),o=function(e,{referrerPolicy:t,crossOrigin:i}){let a=(0,fG.useSyncExternalStore)(fF,()=>!0,()=>!1),r=nB.useRef(null),s=a?(r.current||(r.current=new window.Image),r.current):null,[n,o]=nB.useState(()=>f2(s,e));return(0,fB.useLayoutEffect)(()=>{o(f2(s,e))},[s,e]),(0,fB.useLayoutEffect)(()=>{let e=e=>()=>{o(e)};if(!s)return;let a=e("loaded"),r=e("error");return s.addEventListener("load",a),s.addEventListener("error",r),t&&(s.referrerPolicy=t),"string"==typeof i&&(s.crossOrigin=i),()=>{s.removeEventListener("load",a),s.removeEventListener("error",r)}},[s,i,t]),n}(a,s),l=(0,f$.useCallbackRef)(e=>{r(e),n.onImageLoadingStatusChange(e)});return(0,fB.useLayoutEffect)(()=>{"idle"!==o&&l(o)},[o,l]),"loaded"===o?(0,n$.jsx)(fj.img,{...s,ref:t,src:a}):null});fJ.displayName=fX;var f0="AvatarFallback",f1=nB.forwardRef((e,t)=>{let{__scopeAvatar:i,delayMs:a,...r}=e,s=fK(f0,i),[n,o]=nB.useState(void 0===a);return nB.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>o(!0),a);return()=>window.clearTimeout(e)}},[a]),n&&"loaded"!==s.imageLoadingStatus?(0,n$.jsx)(fj.span,{...r,ref:t}):null});function f2(e,t){return e?t?(e.src!==t&&(e.src=t),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function f5({className:e,...t}){return(0,n$.jsx)(fY,{"data-slot":"avatar",className:(0,ou.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full",e),...t})}function f3({className:e,...t}){return(0,n$.jsx)(fJ,{"data-slot":"avatar-image",className:(0,ou.cn)("aspect-square size-full",e),...t})}function f4({className:e,...t}){return(0,n$.jsx)(f1,{"data-slot":"avatar-fallback",className:(0,ou.cn)("bg-muted flex size-full items-center justify-center rounded-full",e),...t})}f1.displayName=f0;var f7=e.i(24687),f8=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=(0,fV.createSlot)(`Primitive.${t}`),a=nB.forwardRef((e,a)=>{let{asChild:r,...s}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n$.jsx)(r?i:t,{...s,ref:a})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{}),f6="horizontal",f9=["horizontal","vertical"],we=nB.forwardRef((e,t)=>{var i;let{decorative:a,orientation:r=f6,...s}=e,n=(i=r,f9.includes(i))?r:f6;return(0,n$.jsx)(f8.div,{"data-orientation":n,...a?{role:"none"}:{"aria-orientation":"vertical"===n?n:void 0,role:"separator"},...s,ref:t})});function wt({className:e,orientation:t="horizontal",decorative:i=!0,...a}){return(0,n$.jsx)(we,{"data-slot":"separator",decorative:i,orientation:t,className:(0,ou.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...a})}we.displayName="Separator";var wi=e.i(68687),wa=e.i(46579),wr=e.i(26732);let ws=(0,fO.default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);function wn({executionId:e,lessonId:t,comments:i}){let[a,{isLoading:r}]=(0,wi.useAddCommentMutation)(),[s]=(0,wi.useDeleteCommentMutation)(),[n,o]=(0,nB.useState)(""),[l,d]=(0,nB.useState)([]),{success:u,error:h}=(0,wa.useToastMessage)(),{data:c}=(0,wr.useSession)();(0,nB.useEffect)(()=>{i?.length>0&&d(i)},[i]);let m=async()=>{let i=n.trim();if(i)try{let r,s,n,l=await a({ExecutionId:e,LessonId:t,Comment:i}).unwrap();console.log(l),u("تمت إضافة تعليقك بنجاح"),o("");let h={Id:crypto.randomUUID(),CommentId:l.Data?.CommentId||"",Comment:i,Date:(s=(r=new Date).toLocaleDateString("en-CA"),n=r.toLocaleTimeString("ar-EG",{hour:"2-digit",minute:"2-digit",hour12:!0}),`${s} ${n}`),LessonId:t,UserId:c?.user?.UserId||"",PersonName:c?.user?.StudentName||"user",Image:c?.user?.StudentImage||""};d(e=>[h,...e])}catch(e){console.log(e)}};console.log(c?.user?.UserId);let p=async i=>{try{let a=await s({CommentId:i,ExecutionId:e,LessonId:t}).unwrap();console.log(a),a?.Status==!0&&d(e=>e.filter(e=>e.Id!==i)),u("تم حذف التعليق بنجاح")}catch(e){h(e?.Message||"حدث خطأ يرجى المحاولة مرة اخرى")}};return(0,n$.jsxs)(fW.Card,{className:"w-full mt-6 shadow-none",children:[(0,n$.jsx)(fW.CardHeader,{children:(0,n$.jsx)("h3",{className:"text-xl font-semibold",children:"التعليقات"})}),(0,n$.jsxs)(fW.CardContent,{className:"space-y-5",children:[(0,n$.jsxs)("div",{className:"flex gap-3",children:[(0,n$.jsx)(f5,{children:c?.user?.StudentImage?(0,n$.jsx)(f3,{src:c.user.StudentImage}):(0,n$.jsx)(f4,{children:"أ"})}),(0,n$.jsxs)("div",{className:"w-full",children:[(0,n$.jsx)(f7.Textarea,{placeholder:"اكتب تعليقك هنا...",value:n,onChange:e=>o(e.target.value),rows:3}),(0,n$.jsx)("div",{className:"flex justify-end mt-2",children:(0,n$.jsx)(nV.Button,{type:"button",onClick:m,disabled:0===n.trim().length,children:"إضافة تعليق"})})]})]}),(0,n$.jsx)(wt,{}),(0,n$.jsx)("div",{className:"space-y-4",children:l.map(e=>(0,n$.jsxs)("div",{className:"flex gap-3 items-start justify-between",children:[(0,n$.jsxs)("div",{className:"flex gap-3",children:[(0,n$.jsxs)(f5,{children:[(0,n$.jsx)(f3,{src:e?.Image}),(0,n$.jsx)(f4,{children:e?.PersonName[0]})]}),(0,n$.jsxs)("div",{children:[(0,n$.jsxs)("p",{dir:"rtl",className:"font-medium text-start",children:[e.PersonName," • ",(0,n$.jsx)("span",{className:"text-sm text-muted-foreground",children:e.Date})]}),(0,n$.jsx)("p",{className:"text-sm mt-1 whitespace-pre-line",children:e.Comment})]})]}),c?.user?.UserId==e.UserId&&(0,n$.jsx)(nV.Button,{variant:"ghost",size:"icon",onClick:()=>p(e.Id),className:"text-red-500 hover:text-red-700 hover:bg-red-50",children:(0,n$.jsx)(ws,{size:18})})]},e.Id))})]})]})}e.s([],82928);let wo="meet.jit.si",wl=0,wd=e=>`${e}-${wl++}`,wu=({domain:e=wo,roomName:t,configOverwrite:i,interfaceConfigOverwrite:a,jwt:r,invitees:s,devices:n,userInfo:o,release:d,lang:u,spinner:h,onApiReady:c,onReadyToClose:m,getIFrameRef:p})=>{let[v,b]=(0,nB.useState)(!0),[g,E]=(0,nB.useState)(!1),f=(0,nB.useRef)(),w=(0,nB.useRef)(),y=(0,nB.useRef)(null),A=(0,nB.useMemo)(()=>wd("jitsiMeeting"),[wd]);(0,nB.useEffect)(()=>{((e=wo,t,i)=>{var a,r,s,n;return l?l:(a=void 0,r=void 0,s=void 0,n=function*(){return new Promise((a,r)=>{if(window.JitsiMeetExternalAPI)return a(window.JitsiMeetExternalAPI);let s=document.createElement("script"),n=t?`?release=${t}`:"",o=i?`${i}/`:"";s.async=!0,s.src=`https://${e}/${o}external_api.js${n}`,s.onload=()=>a(window.JitsiMeetExternalAPI),s.onerror=()=>r(Error(`Script load error: ${s.src}`)),document.head.appendChild(s)})},l=new(s||(s=Promise))(function(e,t){function i(e){try{l(n.next(e))}catch(e){t(e)}}function o(e){try{l(n.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):((a=t.value)instanceof s?a:new s(function(e){e(a)})).then(i,o)}l((n=n.apply(a,r||[])).next())}))})(e,d,(e=>{let t=e.split("/");if(!(t.length<=1))return t[0]})(t)).then(e=>{f.current=e,E(!0)}).catch(e=>console.error(e.message))},[]);let k=(0,nB.useCallback)(l=>{w.current=new l(e,{roomName:t,configOverwrite:i,interfaceConfigOverwrite:a,jwt:r,invitees:s,devices:n,userInfo:o,release:d,lang:u,parentNode:y.current}),b(!1),w.current&&("function"==typeof c&&c(w.current),w.current.on("readyToClose",()=>{"function"==typeof m&&m()}),y.current&&"function"==typeof p&&p(y.current))},[w,y,c,m,p,e,t,i,a,r,s,n,o,d,u]);(0,nB.useEffect)(()=>{g&&!w.current&&f.current&&k(f.current)},[g,k]);let I=(0,nB.useCallback)(()=>h&&v&&!w.current?(0,n$.jsx)(h,{},void 0):null,[h,w.current]);return(0,n$.jsxs)(n$.Fragment,{children:[I(),(0,n$.jsx)("div",{id:A,ref:y},A)]},void 0)};e.i(82928);let wh=function(){let[e]=(0,wi.useJoinMeetingMutation)(),[t,i]=(0,nB.useState)(null),[a,r]=(0,nB.useState)(null);return((0,nB.useEffect)(()=>{(async()=>{try{let t=await e().unwrap();console.log("JOIN RESPONSE:",t),i(t.token),r(t.room)}catch(e){console.error("JOIN ERROR:",e)}})()},[e]),t&&a)?(0,n$.jsx)("div",{className:"w-full max-w-full relative",dir:"ltr",children:(0,n$.jsx)(wu,{domain:"vpaas-magic-cookie-adf1099659c94340a841dcc60ff4d3da.8x8.vc",roomName:a,jwt:t,configOverwrite:{startWithAudioMuted:!0,disableModeratorIndicator:!0,startScreenSharing:!0,enableEmailInStats:!1},interfaceConfigOverwrite:{DISABLE_JOIN_LEAVE_NOTIFICATIONS:!0},getIFrameRef:e=>{e.style.height="450px"}})}):(0,n$.jsx)("div",{children:"Loading meeting..."})},wc=(0,nF.default)(()=>e.A(63839),{loadableGenerated:{modules:[95981]},ssr:!1});e.s(["default",0,function(){let e=(0,nj.useParams)(),t=e.type,i=Array.isArray(e.executionId)?e.executionId[0]:e.executionId,a=Array.isArray(e.id)?e.id[0]:e.id,[r,s]=(0,nB.useState)(null),[n,o]=(0,nB.useState)(!1),{error:l}=(0,wa.useToastMessage)(),[d]=(0,wi.useLazyShowVideoQuery)(),[u]=(0,wi.useLazyShowPdfQuery)(),[h]=(0,wi.useLazyShowRichTextQuery)(),[c]=(0,wi.useLazyShowAudioQuery)();(0,nB.useEffect)(()=>{!async function(){o(!0);try{let e;e="video"===t?await d({Id:i,LessonId:a}).unwrap():"pdf"===t?await u({Id:i,LessonId:a}).unwrap():"sound"===t?await c({Id:i,LessonId:a}).unwrap():await h({Id:i,LessonId:a}).unwrap(),s(e.Data??null)}catch(e){console.log(e),l(e?.Message||"حدث خطأ ")}o(!1)}()},[t,i,a]),(0,nB.useEffect)(()=>{console.log(r)},[r]);let[m,p]=(0,nB.useState)([]),[v,b]=(0,nB.useState)({currentTime:0,duration:0,playCount:0,volume:1}),g=async()=>{try{await navigator.clipboard.writeText(window.location.href),fU.toast.success("تم النسخ بنجاح",{description:"يمكنك الآن مشاركة الرابط مع زملائك بسهولة."})}catch{}},E=r?.LessonTitle||"",f=r?.Contents||"",w=r?.Comments||[],y=m.findIndex(e=>String(e.Id)===a),A=y>0?m[y-1]:null,k=-1!==y&&y<m.length-1?m[y+1]:null,I=A?(0,nZ.default)(i,A.Id,A.ContentType):null,T=k?(0,nZ.default)(i,k.Id,k.ContentType):null;return(0,n$.jsx)("section",{className:"py-8 font-ar-medium",children:(0,n$.jsxs)("div",{className:"container grid lg:grid-cols-12 grid-cols-1 lg:gap-x-12 gap-y-8",children:[(0,n$.jsxs)("div",{className:"lg:col-span-8",children:[(0,n$.jsxs)("div",{className:"flex items-center mb-4 justify-between",children:[(0,n$.jsx)("h1",{className:"text-2xl font-bold ",children:E}),(0,n$.jsx)(nV.Button,{onClick:g,children:(0,n$.jsx)(fH,{})})]}),(()=>{switch(t){case"video":return(0,n$.jsx)(mP,{videoUrl:f,lessonTitle:E,onStatsUpdate:b});case"pdf":return(0,n$.jsx)(wc,{pdfUrl:f});case"sound":return(0,n$.jsx)(fP,{audioUrl:f});case"meeting":return(0,n$.jsx)(wh,{});default:return(0,n$.jsx)(op,{htmlContent:f})}})(),(0,n$.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[I&&(0,n$.jsx)(nG.default,{href:I,children:(0,n$.jsx)(nV.Button,{variant:"ghost",children:"السابق"})}),T&&(0,n$.jsx)(nG.default,{href:T,children:(0,n$.jsx)(nV.Button,{children:"التالي"})})]}),r?.AllowComment&&(0,n$.jsx)(wn,{comments:w,lessonId:a,executionId:i})]}),(0,n$.jsx)(om,{lessonId:a,executionId:i,onLessonsLoaded:p})]})})}],72734)}]);