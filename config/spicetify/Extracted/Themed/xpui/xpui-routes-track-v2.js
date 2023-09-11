"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4179],{12450:(e,a,i)=>{i.r(a),i.d(a,{default:()=>ki});var t=i(59496),s=i(84875),n=i.n(s),r=i(13841),l=i(51005),c=i(26302),o=i(36389),d=i(93017),u=i(99302),m=i(99767),g=i(31267),k=i(82289),p=i(38730),y=i(68368),x=i(90337),v=i(87664),h=i(41432),j=i(19929),N=i(18384);const b="o2TlnuNKxRO5RnB9BpHB",L="q0Ke_aAvTcc4dO4wCHQt",C="UlKUfS_GcROZmofuafOW",I="I5LORTI1u3A6VoUvRCBf",S="TS85Qkpioa31wR0p4kzT",f="yL1DLXBc05CR_ACv_NhA",A="k5kRkUyoz9znqg_SGOVQ";var R=i(76022),T=i(13743),F=i(64283),P=i(55993),U=i(26960),w=i(4637);let D=function(e){return e.SMALL="small",e.LARGE="large",e}({});const O=({art:e,disabled:a=!1,LinkComponent:i,name:t,size:s=D.SMALL,type:c,uri:o})=>{const m=e?[e]:[],g=s===D.SMALL?(0,T.R)(c):function(e){switch(e){case R.albumType.SINGLE:return u.ag.get("track-page.from-the-single");case R.albumType.EP:return u.ag.get("track-page.from-the-ep");case R.albumType.COMPILATION:return u.ag.get("track-page.from-the-compilation");case R.albumType.ALBUM:default:return u.ag.get("track-page.from-the-album")}}(c),k=(0,r.s0)();return(0,w.jsxs)("div",{className:n()(b,{[C]:s===D.SMALL,[L]:a}),children:[(0,w.jsx)("div",{className:I,children:(0,w.jsx)(F.O,{images:m,size:U.m$.SIZE_80,title:t,type:P.p.ALBUM})}),(0,w.jsxs)("div",{className:S,children:[(0,w.jsx)(l.D,{variant:s===D.SMALL?"mestoBold":"finale",children:g}),(0,w.jsx)(i,{to:o,children:(0,w.jsx)(l.D,{as:"div",className:f,variant:"balladBold",dir:"auto",children:t})})]}),(0,w.jsx)("div",{onClick:()=>{k((0,d.EC)(o).toURLPath(!0))},className:A})]})};var E=i(75024),_=i(17246),B=i(27445),M=i(16391);let G=function(e){return e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE",e}({});const K=(0,M.Uy)(((e,a)=>{switch(a.type){case"LYRICS_LOADING":e[a.uri]={status:G.LOADING};break;case"LYRICS_LOADED":e[a.uri]={status:G.LOADED,data:a.response};break;case"LYRICS_ERROR":e[a.uri]={status:G.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${a.type}`)}}));var $=i(31427),Y=i(58943),z=i(4496);const Z={status:G.LOADING},q={status:G.UNAVAILABLE},V=t.createContext(void 0),W=({children:e,initialState:a={}})=>{const i=t.useReducer(K,a);return(0,w.jsx)(V.Provider,{value:i,children:e})},H=({uri:e,isAnonymous:a,imageForLyricsRequest:i})=>{const s=t.useContext(V);if(void 0===s)throw new Error("useTrackEntityLyrics must be used within a TrackEntityLyricsProvider");if(!e||!(0,d.wj)(e)||a)return q;const[n,r]=s,l=n[e];return l||(r({type:"LYRICS_LOADING",uri:e}),(async({trackUri:e,api:a,imageForLyricsRequest:i})=>{const t=(0,d.EC)(e);try{const e=await Y.Zz.getTrackEntityLyrics(a||$.b.getInstance(),t.id,i||"");return{hasLyrics:!0,syncType:e.lyrics.syncType,lyrics:e.lyrics.lines,provider:e.lyrics.provider,providerDisplayName:e.lyrics.providerDisplayName,providerLyricsId:e.lyrics.providerLyricsId,isRtlLanguage:e.lyrics.isRtlLanguage}}catch(e){if(e instanceof z.m&&404===e.status)return{hasLyrics:!1};throw e}})({trackUri:e,imageForLyricsRequest:i}).then((a=>{r({type:"LYRICS_LOADED",uri:e,response:a})})).catch((()=>{r({type:"LYRICS_ERROR",uri:e})})),Z)};var Q=i(92499),J=i(21696),X=i(54067),ee=i(98779),ae=i(62748),ie=i(71041);const te="oTRKhYD0MZlNPm66W3Tw",se="sc95MwPalcHwYGZ7j3xN",ne="zrCZCfYv4zZiB1HYv9i8",re="RnlxIDmWcYTbbwNSJNjA",le="SHkxfN1vy0wpRMP1hK7I",ce="COXBS6zLyyxKNYuEAzjZ",oe="sR5IpdOUvoUGYKlC9Dk1",de="FHMr3WxshoYjZ7jd3YwI",ue="Evcwc4KM2tf9xrLbfB8B",me="x4_dsi31Cx2SO1L0uYIj",ge="euPDqfFEBILj9KHDNLC1",ke="x6FPRUKK40oDCPP7g6Ls",pe="k3SPcfaKewjfdYumDcGw",ye="t9C7vRiN1OSC9uWfJEr0",xe="Onv6dO4lntCzKUqYa8PE",ve=({richTrack:e})=>{const{search:a}=(0,r.TH)(),i=(0,t.useCallback)((()=>new URLSearchParams(a.slice(1)).get("highlight")||""),[a])(),{tracklistRef:s}=(0,ie.W)(),n=e.albumOfTrack,l=(0,ae.Y)(n?.uri||""),{usePlayContextItem:c}=(0,_.n)({uri:l},{featureIdentifier:"album"}),o=(0,t.useMemo)((()=>({items:[],totalCount:0})),[]);return n?(0,w.jsx)("div",{ref:s,className:oe,children:(0,w.jsx)(ee.L,{ariaLabel:n.name,nrTracks:n.tracks.totalCount,albumUri:n.uri,highlightUri:i,discs:o,usePlayContextItem:c,hasHeaderRow:!1})}):null};var he=i(20274),je=i(41601),Ne=i(74272),be=i(67866),Le=i(27601),Ce=i(16786),Ie=i(47570),Se=i(72484);const fe=t.memo((function({uri:e,togglePlay:a,isPlaying:i,isActive:s,spec:n,logger:r,backgroundColor:l,name:c,isPlayable:o}){const d=(0,Ie.o)(),k=(0,Se.k)(),[p,y]=(0,Le.Z)(e),j=(0,t.useCallback)((async()=>{d({targetUri:e,intent:p?"unsave":"save",type:"click"});const a=n.saveButtonFactory();r.logInteraction(p?a.hitRemoveLike({itemNoLongerLiked:e}):a.hitLike({itemToBeLiked:e}));try{await y(!p)}catch{}}),[d,e,p,n,r,y]),N=(0,t.useCallback)((()=>{const t=(0,v.aK)({isPlaying:i,isActive:s,spec:n.playButtonFactory(),logger:r,uri:e});a({loggingParams:t})}),[s,i,r,n,a,e]),b=(0,t.useCallback)((()=>{r.logInteraction(n.contextButtonFactory().hitUiReveal())}),[r,n]),L=(0,Ce.j)();return(0,w.jsx)(he.o,{backgroundColor:l,children:(0,w.jsxs)(he.F,{children:[(0,w.jsx)(g.rn,{children:(0,w.jsx)(x.$,{onClick:N,isPlaying:i,disabled:!o,size:L,uri:e})}),(0,w.jsx)(g.rn,{children:(0,w.jsx)(je.H,{isAdded:!!p,onClick:j,disabled:!k,size:L})}),(0,w.jsx)(Ne.o,{uri:e,isFollowing:!!p,onFollow:j,size:L}),(0,w.jsx)(h.ClickToggleContextMenu,{menu:(0,w.jsx)(m.$,{uri:e}),onShow:b,children:(0,w.jsx)(be.MoreButton,{label:u.ag.get("more.label.context",c),size:L})})]})})})),Ae="OH5mnpJIVCJozYM3raMt",Re="etw0slM6uVrCi5RR3iDi",Te=({padded:e,providerDisplayName:a})=>a?(0,w.jsx)(l.D,{as:"p",dir:"auto",variant:"finale",className:`${Ae} ${e?Re:""}`,children:u.ag.get("web-player.lyrics.providedBy",a)}):null,Fe=({uri:e,imageForLyricsRequest:a})=>{const{data:i}=H({uri:e,imageForLyricsRequest:a});return i?.hasLyrics?(0,w.jsx)(Te,{providerDisplayName:i.providerDisplayName}):null};var Pe=i(55411),Ue=i(76285);const we="QhDsXG1Gmo7XmQWLggAO",De="bZgWQj7UxvK8GYKWDA7N",Oe="AW61P3tnW5cKJCWtbhFh",Ee=({buttonText:e,onSecondaryButtonClick:a,onPrimaryButtonClick:i,secondaryButtonText:t,text:s})=>(0,w.jsxs)("div",{className:we,"data-testid":"static-activation-trigger",children:[(0,w.jsx)(l.D,{className:De,variant:"cello",children:s}),(0,w.jsxs)("div",{className:Oe,children:[(0,w.jsx)(c.o,{onClick:a,semanticColor:"textBase",children:t}),(0,w.jsx)(Ue.D,{onClick:i,colorSet:"invertedLight",children:e})]})]});var _e=i(91608);const Be="T1nqQ4HEh3heHy4RCCKa",Me="L8zjshPVgUMXyZR4FtOk",Ge="YMn1FWcFmOz9osBrNvhF",Ke="Inbyq3TnvKDOJtcKFTDQ",$e="lWk5se4WETUOJwaEb8D6",Ye="i8DyQbWCmDV_8N5XGJQT",ze="t5WPFlGTY6GCd9UOFfLu",Ze="AGQ3wRyMVK1odq860qnT",qe="ZX_r7uZgPgssaUplfpxT",Ve="qrqctaPu2XBpxsw23nPX",We="XnWidTagai3nQwMPxIMF";var He=i(17533),Qe=i(81767);let Je=function(e){return e.SMALL="small",e.LARGE="large",e}({});const Xe=e=>{const{disabled:a,images:i,LinkComponent:t,name:s,size:c,uri:o,enableI18nRoutes:m,enableI18nAdditionalPages:g}=e,k=c===Je.SMALL,p=(0,r.s0)(),y=(0,d.EC)(o),x=y?.type,v=u.ag.getUrlLocale(),h=(0,He.S9)({localeFeatureFlag:m,entityFeatureFlag:g,urlLocale:v,entity:x,type:"link"});return(0,w.jsxs)("div",{className:n()(Me,{[Ge]:a}),"data-testid":"track-artist-link-card",children:[(0,w.jsx)(F.O,{shape:F.K.CIRCLE,images:i,size:U.m$.SIZE_80,title:s,type:P.p.ARTIST}),(0,w.jsxs)("div",{className:n()($e,{[Ye]:k}),children:[(0,w.jsx)(l.D,{variant:"mestoBold",className:Ke,children:u.ag.get("card.tag.artist")}),(0,w.jsx)(t,{to:o,children:(0,w.jsx)(l.D,{as:"div",dir:"ltr",className:ze,variant:"balladBold",children:s})})]}),(0,w.jsx)("div",{onClick:()=>{const e=y?.toURL(`/${Qe.F0}${v}/`);if(y){const a=h?e:y.toURLPath(!0);p(a)}},className:Ze})]})},ea=({size:e=Je.LARGE,disabled:a=!1,enableI18nRoutes:i,enableI18nAdditionalPages:s,...r})=>{const[o,d]=(0,t.useState)(!1),m=(0,t.useCallback)((()=>{d(!o)}),[o]),g=r.artists;return(0,w.jsxs)("div",{"data-testid":"track-artist-link-card-container",children:[(0,w.jsx)("div",{className:Be,children:g.map(((t,l)=>(0,w.jsx)("div",{className:n()({[Ve]:o&&l>5,[qe]:l>5}),children:(0,w.jsx)(Xe,{name:t.name,uri:t.uri,images:t.images,size:e,LinkComponent:r.LinkComponent,disabled:a,enableI18nRoutes:i,enableI18nAdditionalPages:s},t.id)},`${t.uri}-${l}`)))}),g.length>6&&(0,w.jsx)(c.o,{onClick:m,className:We,children:(0,w.jsx)(l.D,{as:"p",variant:"violaBold",children:o?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})})]})};var aa=i(2597);const ia="EaTxqhHk6J4ecKHwpY5m",ta="dUQl9yd5x_1oWk4L0Ntm",sa="xt5C47eHPYNiriMJxGnC",na=({words:e})=>(0,w.jsx)(l.D,{as:"p",dir:"auto",variant:"ballad",className:sa,children:e});var ra=i(4680);const la=({data:e,eventSender:a,isPlaying:i,playbackId:s,uri:n})=>{const{lyrics:r=[],provider:c,providerLyricsId:o,syncType:d}=e,m=function(e){const{uri:a,provider:i,providerLyricsId:s,syncType:n,eventSender:r,isPlaying:l,playbackId:c}=e,[o,d]=(0,t.useState)(!1),u=(0,t.useMemo)((()=>(0,ra.N)({lyrics_format:"track-page",track_uri:a,provider:i,provider_lyrics_id:s,sync_type:n,playback_id:l?c:void 0})),[a,i,s,n,l,c]);return(0,t.useCallback)((()=>{o||(r?.send(u),d(!0))}),[u,r,o])}({uri:n,provider:c,providerLyricsId:o,syncType:d,eventSender:a,isPlaying:i,playbackId:s});return(0,t.useEffect)((()=>{m()}),[m]),(0,w.jsxs)("div",{className:ia,children:[(0,w.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:ta,children:u.ag.get("web-player.lyrics.title")}),r.map((({words:e},a)=>(0,w.jsx)(na,{words:e},`lyrics-seo-line-${a}`)))]})};var ca=i(33933),oa=i(85120),da=i(46301);const ua=({uri:e,imageForLyricsRequest:a})=>{const{data:i}=H({uri:e,imageForLyricsRequest:a}),t=(0,da.s4)(),{isPaused:s,currentTrackUri:n,playbackId:r}=(0,ca.Y)((e=>({isPaused:e?.isPaused,currentTrackUri:e?.item?.uri,playbackId:e?.playbackId})),oa.V),l=!s&&n===e;return i&&i?.hasLyrics?(0,w.jsx)(la,{data:i,uri:e,eventSender:t,isPlaying:l,playbackId:r}):null};var ma=i(46464),ga=i(31234);const ka=e=>{const{albumArtists:a,columnCount:i,imageForLyricsRequest:s,uri:r}=e,l=i-2,c={"--column-count":i,"--left-column-end":l-2,"--right-column-start":l},{isAnonymous:o}=(0,Pe.v9)(ga.Gg),d=(0,Se.k)(),{data:m,status:g}=H({uri:r,isAnonymous:o,imageForLyricsRequest:s}),k=!!m&&m.hasLyrics&&g!==G.UNAVAILABLE||o,p=(0,Pe.v9)(ma.br),y=(0,Pe.v9)(ma.yE);return(0,w.jsxs)(t.Suspense,{fallback:null,children:[k&&(0,w.jsx)("div",{className:n()(ne,{[re]:i>5}),style:{...c},"data-testid":"lyrics-container",children:o?(0,w.jsx)(Ee,{buttonText:u.ag.get("sign_up"),secondaryButtonText:u.ag.get("login"),text:u.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:aa.L6,onSecondaryButtonClick:aa.h$}):(0,w.jsx)(ua,{uri:r,imageForLyricsRequest:s})}),(0,w.jsx)("div",{className:n()(te,{[se]:i>5&&k}),style:{...c},children:(0,w.jsx)(ea,{artists:a,LinkComponent:_e.default,disabled:!d,enableI18nRoutes:p,enableI18nAdditionalPages:y})})]})};var pa=i(57014),ya=i(79352),xa=i(25702),va=i(46322),ha=i(65669),ja=i(90191),Na=i(6721),ba=i(74854),La=i(80320),Ca=i(77579),Ia=i(89458),Sa=i(81958),fa=i(38080),Aa=i(65899),Ra=i(39893),Ta=i(69855);const Fa="Z9Dr8PkXFtlO8KnnDcxp",Pa="Bm0LUMlhVIcF5qusgdUP",Ua="GIyB7JDkRwjtVL6PSBbg",wa="whTIka0YYAkqhqrs26Wa",Da=t.memo((function({uri:e,name:a,imgUrl:i,artists:t,isExplicit:s,index:n,albumUri:r,contextUri:l,isPlayable:c,usePlayContextItem:o,isMOGEFRestricted:d,totalMilliseconds:g,playcount:k}){const{isActive:p,isPlaying:y,triggerPlay:x,togglePlay:v}=o({uri:e,index:n}),h=(0,ba._)(e),j=(0,Sa.k)(e,c),N=t.map((e=>e.name)).join(u.ag.getSeparator()),{badges:b,hasBadges:L}=(0,La.r)({isMOGEFRestricted:d,downloadAvailability:h,isExplicit:s}),C=t.map((e=>e.name)).join(u.ag.getSeparator()),I=(0,Ia.E)();return(0,w.jsx)(Na.ZP,{value:"row",index:n,children:(0,w.jsx)(xa._,{menu:(0,w.jsx)(m.$,{uri:e,albumUri:r,artists:t,contextUri:l}),children:(0,w.jsxs)(Ta.c,{uri:e,contextUri:l,isPlayable:j,onTriggerPlay:(e,a)=>{x({loggingParams:a})},isActive:p,index:n,ariaRowIndex:n,dragMetadata:{name:a,createdBy:N},children:[(0,w.jsxs)(Aa.vZ,{ariaColIndex:0,children:[(0,w.jsx)(Aa.VG,{uri:e,src:i,onClick:(e,a)=>{v({loggingParams:a})},isLocked:!1,isPlaying:y,isActive:p,playAriaLabel:u.ag.get("tracklist.a11y.play",a,N)}),(0,w.jsxs)(Aa.vm,{children:[(0,w.jsx)(fa.G,{uri:e,enabled:I,className:Ua,children:(0,w.jsx)(Aa.Wh,{titleText:a,children:a})}),L&&(0,w.jsxs)(Aa.g3,{children:[b.download&&(0,w.jsx)(va.G,{size:16}),b.explicit&&(0,w.jsx)(ha.N,{}),b.nineteen&&(0,w.jsx)(ja.X,{className:wa,size:16})]}),(0,w.jsx)(Aa.K9,{children:(0,w.jsx)(Aa.T6,{artists:t})})]})]}),(0,w.jsx)(Aa.UA,{ariaColIndex:1,children:(0,w.jsx)(Ra.B,{playcount:k})}),(0,w.jsxs)(Aa.mU,{ariaColIndex:2,children:[(0,w.jsx)(Ca.f,{uri:e}),(0,w.jsx)(Aa.A$,{duration:g}),(0,w.jsx)(Aa.Zv,{menu:(0,w.jsx)(m.$,{uri:e,albumUri:r,contextUri:l,artists:t}),label:u.ag.get("more.label.track",a,C)})]})]})})})}),((e,a)=>e.uri===a.uri&&e.index===a.index));var Oa=i(85097),Ea=i(74839),_a=i(59175),Ba=i(35354),Ma=i(60433),Ga=i(60163),Ka=i(92627),$a=i(15107);var Ya=i(71876);const za={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"internalLinkRecommenderTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NamedType",name:{kind:"Name",value:"SEORankingStrategy"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"seoRecommended"},arguments:[{kind:"Argument",name:{kind:"Name",value:"seoRecommendedInput"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GenericError"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}},{kind:"Field",name:{kind:"Name",value:"uri"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ilrTrackData"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"ilrTrackData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]};var Za=i(76933);const qa=e=>{return a=e,"NotFound"!==a?.__typename&&"GenericError"!==a?.__typename&&"Track"===e.__typename;var a},Va=t.memo((function({strategy:e,uri:a}){const{data:i}=(s={uri:a,strategy:e},(0,Ya.a)(za,s,n));var s,n;const c=i?.seoRecommended.items,o=(0,t.useMemo)((()=>c?.slice(0,Math.min(c.length,5))),[c]),d=(0,t.useCallback)((e=>e.uri),[]),m=(0,t.useMemo)((()=>[Za.QD.TITLE,Za.QD.ALBUM,Za.QD.DURATION]),[]),g=`${a}|${(e=>e?e.filter((e=>qa(e.data))).map((e=>e.data.uri)):[])(c)}`,{trackId:k=""}=(0,r.UO)();((e,a)=>{const i=(0,Ma.g)(),s=(0,Pe.v9)(ga.n5),n=(0,Pe.v9)(Ka.rZ),r=(0,da.s4)(),l=(0,Pe.v9)($a.a),c=l[a].find((e=>e.experimentId===Ba.Ym.TRACK_INTERNAL_LINK_RECOMMENDER))?.treatment||Ba.tO.CONTROL;(0,t.useEffect)((()=>{const a={category:"track_ilr_exposures",action:"track_page_visit",variant:c,label:"dwp",os:(0,Ga.y)(),context:e,country:s?n:"",sp_t:(0,_a.vQ)("sp_t")};i?r.send((0,Ea.k)(a)):r.send((0,Oa.x)(a))}),[e,n,r,i,s,c])})(g,k);const p=(c||[])?.map((e=>qa(e.data)?{...e.data,provider:null,type:P.p.TRACK,uid:null}:{type:P.p.TRACK,uri:"",uid:null,provider:null})),y=(0,ae.Y)(a),{usePlayContextItem:x}=(0,_.n)({uri:y,pages:[{items:p}]},{featureIdentifier:"track"}),v=(0,t.useCallback)(((e,i)=>{if(!qa(e.data))return(0,w.jsx)(t.Fragment,{});const s=e.data;return(0,w.jsx)(Da,{index:i,contextUri:a,uri:s.uri,name:s.name,totalMilliseconds:s.duration.totalMilliseconds,imgUrl:s.albumOfTrack?.coverArt?.sources[0].url,isPlayable:s.playability.playable,artists:s.artists.items.map((e=>({uri:e.uri,id:e.id,name:e.profile.name}))),albumUri:s?.albumOfTrack?.uri,isExplicit:s.contentRating?.label===X.KS.Explicit,isMOGEFRestricted:s.contentRating?.label===X.KS.NineteenPlus,usePlayContextItem:x,playcount:parseInt(s.playcount||"0",10)},`${i}-${s.uri}`)}),[a,x]);return c?.length?(0,w.jsxs)("div",{className:Fa,children:[(0,w.jsxs)("div",{className:Pa,children:[(0,w.jsx)(l.D,{variant:"canon",semanticColor:"textBase",children:u.ag.get("playlist.extender.recommended.title")}),(0,w.jsx)(l.D,{variant:"mesto",paddingBottom:ya.o7,children:u.ag.get("internal-link-recommender.based-on-this-song")})]}),(0,w.jsx)(Za.Pv,{ariaLabel:u.ag.get("playlist.extender.recommended.title"),nrTracks:Math.min(c.length,5),rowPlaceholder:Za.hU,tracks:o,renderRow:v,resolveUri:d,columns:m},"internal-link-recommender-track-list")]}):null}));var Wa=i(68626),Ha=i(45267);const Qa=({album:e,index:a,artistURI:i})=>(0,w.jsx)(Na.ZP,{value:"card",index:a,children:(0,w.jsx)(Ha.i,{index:a,latest:!1,showType:!0,...(0,Wa.B$)(e,i,e.name)})});var Ja=i(54745);const Xa=({albums:e,artistName:a,artistId:i,artistUri:t,className:s})=>e?(0,w.jsx)(Na.ZP,{value:"shelf/albums",children:(0,w.jsx)(Ja.P,{total:e.totalCount,title:u.ag.get("rich-page.popular-albums-by-artist",{artist:a}),seeAllUri:`${(0,Wa.GJ)(i)}:discography:${X.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:s,children:(0,Wa.Hr)(e.items).map(((e,a)=>(0,w.jsx)(Qa,{album:e,index:a,artistURI:t},e.uri)))})}):null;var ei=i(20016);const ai=({artistId:e,className:a,fansAlsoLike:i,title:t})=>(0,w.jsx)(Na.ZP,{value:"shelf/fans-also-like",children:(0,w.jsx)(Ja.P,{total:i.length,title:t??u.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,Wa.GJ)(e)}:related`,className:a,children:i.map(((e,a)=>(0,w.jsx)(Na.ZP,{value:"card",index:a,children:(0,w.jsx)(ei.I,{index:a,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})},e.uri)))})});var ii=i(53963);const ti=({artistName:e,artistUri:a,headerClassName:i,rowClassName:s,topTracks:n,topTracksTransformer:r,uri:c})=>{const o=(0,t.useMemo)((()=>n?.items.map((e=>r(e,c)))),[n?.items,r,c]),{usePlayContextItem:d}=(0,_.n)({uri:a},{featureIdentifier:"artist"});return o&&o.length>0?(0,w.jsxs)("div",{className:s,children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(l.D,{variant:"mesto",children:u.ag.get("rich-page.popular-tracks")}),(0,w.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:i,children:e})]}),(0,w.jsx)(ii.k,{nrTracks:o.length,initialTracks:o,usePlayContextItem:d})]}):null},si=({artistName:e,artistId:a,artistUri:i,className:t,releases:s,artistImages:n})=>s?(0,w.jsx)(Na.ZP,{value:"shelf/releases",children:(0,w.jsx)(Ja.P,{total:10,title:u.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,Wa.GJ)(a)}:discography:${X.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,listRowHeaderProps:n?{title:e,pretitle:u.ag.get("artist-page.popular"),media:(0,J.o)(n,{desiredSize:48})||""}:null,children:s.items.map(((e,a)=>(0,w.jsx)(Qa,{album:e,index:a,artistURI:i},e.uri)))})}):null,ni=({artistId:e,artistName:a,artistUri:i,className:t,singles:s})=>s?(0,w.jsx)(Na.ZP,{value:"shelf/singles-and-eps",children:(0,w.jsx)(Ja.P,{total:s.totalCount,title:u.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:a}),seeAllUri:`${(0,Wa.GJ)(e)}:discography:${X.VZ.Single.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,children:(0,Wa.Hr)(s.items).map(((e,a)=>(0,w.jsx)(Qa,{album:e,index:a,artistURI:i},e.uri)))})}):null;var ri=i(17946),li=i(37343),ci=i(25143),oi=i(69511);var di=i(18319);const ui=e=>(e.items||[]).map((e=>({name:e.profile.name,images:(e.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.uri,id:e.id}))),mi=e=>(e||[]).map((e=>e.profile.name)),gi=({uri:e,track:a})=>{const i=(0,Se.k)(),s=(0,Ma.g)(),d=(0,ri.k)({type:"locale",uri:e}),{firstArtist:y,otherArtists:b,albumOfTrack:L,duration:C,name:I}=a,S=L?.coverArt,f=L?.copyright.items,A=L?.courtesyLine,R=L?.date?.isoString,T=S?.extractedColors?.colorRaw.hex,F=(S?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),P={uri:L?.uri||"",name:L?.name||""},{trackId:U=""}=(0,r.UO)(),E=(0,ci.GA)(U,"track"),{isCanonicalPoolForTrackILR:M,isOrganicPoolForTrackILR:G}=(e=>{const a=(0,Pe.v9)($a.a);return(0,Ia.E)()?{isCanonicalPoolForTrackILR:(0,oi.F4)(a,e),isOrganicPoolForTrackILR:(0,oi.MP)(a,e)}:{isCanonicalPoolForTrackILR:!1,isOrganicPoolForTrackILR:!1}})(U),K=mi(y.items),$=mi(b.items),Y=ui(y),z=ui(b),Z=[...Y,...z],q=y.items[0],V=a.albumOfTrack,H=V?.playability?.playable,ee={artistId:q?.id,artistName:q?.profile?.name,artistUri:q?.uri},ie=a.albumOfTrack?.coverArt?.sources,te=(0,J.o)(ie||void 0,{desiredLabel:"large",desiredSize:600})??ie?.[0]?.url??"",[se,ne]=(0,t.useState)(!1),re=(0,t.useCallback)((()=>{ne(!se)}),[se]),oe=b&&b.items.length>5,{spec:he,logger:je}=(0,Q.fU)(o.createDesktopTrackEventFactory,{data:{uri:e}}),Ne=a.playability.playable,be=(0,ae.Y)(e),{togglePlay:Le,isPlaying:Ce,isActive:Ie}=(0,_.n)({uri:be},{featureIdentifier:"track"}),Ae=(0,t.useCallback)((()=>(0,B.Zs)({i18n:u.ag,trackArtistsList:[...K,...$].join(u.ag.getSeparator()),trackName:a.name,shouldLocalize:d})),[K,$,d,a.name]),Re=(0,t.useCallback)(((e,a)=>{je.logInteraction(he.headerFactory().artistLinkFactory({position:a.position,uri:a.creator.uri}).hitUiNavigate({destination:a.creator.uri}))}),[je,he]),Te=(0,t.useCallback)((()=>{const a=(0,v.aK)({isPlaying:Ce,isActive:Ie,spec:he.actionBarFactory().playButtonFactory(),logger:je,uri:e});Le({loggingParams:a})}),[Ie,Ce,je,he,Le,e]);return(0,w.jsxs)("section",{"data-testid":"track-page",children:[(0,w.jsx)(pa.$,{children:Ae()}),(0,w.jsxs)(g.gF,{backgroundColor:T,children:[(0,w.jsxs)(k.W,{children:[(0,w.jsx)(x.$,{size:"medium",onClick:Te,disabled:!Ne,isPlaying:Ce,uri:e}),(0,w.jsx)(p.i,{text:I,dragUri:e,dragLabel:I})]}),(0,w.jsx)(h._,{menu:(0,w.jsx)(m.$,{uri:e}),children:(0,w.jsx)(g.Oz,{dragUri:e,images:F,name:I,placeholderType:"album"})}),(0,w.jsxs)(g.sP,{children:[(0,w.jsx)(l.D,{variant:"mestoBold",children:u.ag.get("song")}),(0,w.jsx)(h._,{menu:(0,w.jsx)(m.$,{uri:e}),children:(0,w.jsx)(g.xd,{dragUri:e,dragLabel:I,children:I})}),(0,w.jsx)(g.QS,{creators:Y,releaseDate:R,durationMilliseconds:C.totalMilliseconds,onCreatorClick:Re,isTrack:!0,album:P})]})]}),(0,w.jsx)(fe,{uri:e,togglePlay:Le,isPlaying:Ce,isActive:Ie,spec:(0,t.useMemo)((()=>he.actionBarFactory()),[he]),logger:je,backgroundColor:T,name:I,isPlayable:Ne}),(0,w.jsxs)(W,{children:[(0,w.jsxs)("div",{className:"contentSpacing",children:[(0,w.jsx)("div",{className:le,children:(0,w.jsx)(N.T,{render:({columnCount:a})=>(0,w.jsx)(ka,{imageForLyricsRequest:te,albumArtists:Z,columnCount:a,uri:e})})}),M&&(0,w.jsx)("div",{"data-testid":"canonical-pool-top",children:(0,w.jsx)(Va,{strategy:X.JI.ContentOnly,uri:a.uri})}),G&&(0,w.jsx)("div",{"data-testid":"organic-pool-top",children:(0,w.jsx)(Va,{strategy:X.JI.OrganicTraffic,uri:a.uri})}),(0,w.jsx)(ti,{artistName:q.profile.name,artistUri:q.uri,headerClassName:ue,rowClassName:le,topTracks:q.discography.topTracks,topTracksTransformer:li.X7,uri:a.uri}),(0,w.jsx)(si,{className:de,releases:q?.discography?.popularReleasesAlbums,...ee}),(0,w.jsx)(Xa,{albums:q?.discography?.albums,className:de,...ee}),(0,w.jsx)(ni,{className:de,singles:q?.discography?.singles,...ee}),b&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:ge,children:b.items.map(((e,a)=>(0,w.jsx)(si,{className:n()(me,{[pe]:a>4,[ye]:se&&a>4}),releases:e.discography.popularReleasesAlbums,artistName:e.profile.name,artistId:e.id,artistUri:e.uri,artistImages:e.visuals.avatarImage?.sources},e.id)))}),oe&&(0,w.jsx)(c.o,{onClick:re,className:xe,children:(0,w.jsx)(l.D,{as:"h2",variant:"violaBold",children:se?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})}),(0,w.jsx)(ai,{artistId:q.id,className:n()(de,{[ke]:b.items.length>0}),fansAlsoLike:q.relatedContent.relatedArtists.items,title:u.ag.get("artist-page.fansalsolike")})]}),V&&(0,w.jsx)(O,{art:V.coverArt?.sources[0],disabled:!H||!i,LinkComponent:_e.default,name:V.name,type:V.type,size:D.LARGE,uri:V.uri}),(0,w.jsx)(ve,{richTrack:a})]}),(0,w.jsxs)("div",{className:"contentSpacing",children:[(0,w.jsxs)("div",{className:ce,children:[(0,w.jsx)(j.k,{copyrights:f||[],courtesyLine:A}),!s&&(0,w.jsx)(Fe,{uri:e,imageForLyricsRequest:te})]}),E&&(0,w.jsx)(ci.qj,{uri:e,title:u.ag.get("generative-ai.track.title")})]})]})]})},ki=(0,t.memo)((function(){const{trackId:e=""}=(0,r.UO)(),a=(0,d.tn)(e).toURI(),i=(0,di.QN)({uri:a});return i.loading||"Track"!==i.data?.trackUnion?.__typename?(0,w.jsx)(y.h,{hasError:null!==i.error,errorMessage:u.ag.get("track-page.error")}):(0,w.jsx)(E.fd,{surface:E.Tg.TRACK,uris:[a,i.data.trackUnion.albumOfTrack?.uri??null],children:(0,w.jsx)(gi,{uri:a,track:i.data.trackUnion})})}))}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map