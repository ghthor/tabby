(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{51587:function(e,r,t){Promise.resolve().then(t.bind(t,20726))},20726:function(e,r,t){"use strict";t.r(r),t.d(r,{Mail:function(){return k}});var n=t(57437),l=t(2265),s=t(60106),a=t(7820),i=t(93111),o=t(52373);let d=e=>{let{className:r}=e;return(0,n.jsx)(o.b,{className:r,children:"Configuring SMTP information will enable users to receive database reports via email, such as slow query weekly reports."})};var c=t(38110),u=t(42910),m=t(61865),f=t(71424),x=t(74578),p=t(70349),h=t(87516),j=t(93023),g=t(41315),v=t(51908),N=t(58094);let w=(0,s.BX)("\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n"),y=(0,s.BX)("\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n"),b=x.Ry({smtpUsername:x.Z_(),smtpPassword:x.Z_(),smtpServer:x.Z_(),smtpPort:x.oQ.number(),fromAddress:x.Z_(),encryption:x.jb(p.dW),authMethod:x.jb(p.Hi)}),S=l.forwardRef((e,r)=>{let{isNew:t,onSuccess:s,onDelete:i,defaultValues:o}=e,d=l.useMemo(()=>({encryption:p.dW.None,authMethod:p.Hi.None,...o||{}}),[o]),x=(0,m.cI)({resolver:(0,c.F)(b),defaultValues:d}),S=!(0,u.Z)(x.formState.dirtyFields),[_,C]=l.useState(!1),R=(0,a.Db)(w,{onCompleted(e){(null==e?void 0:e.updateEmailSetting)&&(null==s||s(),f.A.success("Email configuration is updated."))}}),I=(0,a.Db)(y,{onCompleted(e){(null==e?void 0:e.deleteEmailSetting)&&(null==i||i())},onError(e){f.A.error(e.message)}}),E=async e=>{e.preventDefault(),await I()},z=async e=>{await R({input:{...e,smtpPassword:e.smtpPassword!==(null==o?void 0:o.smtpPassword)?e.smtpPassword:void 0}})};return l.useImperativeHandle(r,()=>({form:x}),[x]),(0,n.jsx)(g.l0,{...x,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:x.handleSubmit(z),children:[(0,n.jsxs)("div",{className:"flex flex-col gap-6 lg:flex-row",children:[(0,n.jsx)(g.Wi,{control:x.control,name:"smtpServer",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"SMTP Server Host"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(v.I,{placeholder:"e.g. smtp.gmail.com",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsx)(g.Wi,{control:x.control,name:"smtpPort",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"SMTP Server Port"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(v.I,{type:"number",placeholder:"e.g. 25",className:"w-80 min-w-max",...r})}),(0,n.jsx)(g.zG,{})]})}})]}),(0,n.jsx)(g.Wi,{control:x.control,name:"fromAddress",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"From"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(v.I,{placeholder:"e.g. from@gmail.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsx)(g.Wi,{control:x.control,name:"authMethod",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"Authentication Method"}),(0,n.jsxs)(N.Ph,{onValueChange:r.onChange,defaultValue:r.value,name:r.name,children:[(0,n.jsx)(g.NI,{children:(0,n.jsx)(N.i4,{className:"w-80 min-w-max",children:(0,n.jsx)(N.ki,{placeholder:"Select a method"})})}),(0,n.jsxs)(N.Bw,{children:[(0,n.jsx)(N.Ql,{value:p.Hi.None,children:"NONE"}),(0,n.jsx)(N.Ql,{value:p.Hi.Plain,children:"PLAIN"}),(0,n.jsx)(N.Ql,{value:p.Hi.Login,children:"LOGIN"})]})]}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex flex-col gap-6 lg:flex-row",children:[(0,n.jsx)(g.Wi,{control:x.control,name:"smtpUsername",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"SMTP Username"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(v.I,{type:"string",placeholder:"e.g. support@yourcompany.com",autoCapitalize:"none",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsx)(g.Wi,{control:x.control,name:"smtpPassword",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"SMTP Password"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(v.I,{type:"password",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(g.zG,{})]})}})]}),(0,n.jsx)(g.Wi,{control:x.control,name:"encryption",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"Encryption"}),(0,n.jsxs)(N.Ph,{onValueChange:r.onChange,defaultValue:r.value,name:r.name,children:[(0,n.jsx)(g.NI,{children:(0,n.jsx)(N.i4,{className:"w-80 min-w-max",children:(0,n.jsx)(N.ki,{placeholder:"Select an encryption"})})}),(0,n.jsxs)(N.Bw,{children:[(0,n.jsx)(N.Ql,{value:p.dW.None,children:"NONE"}),(0,n.jsx)(N.Ql,{value:p.dW.SslTls,children:"SSL/TLS"}),(0,n.jsx)(N.Ql,{value:p.dW.StartTls,children:"STARTTLS"})]})]}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[!t&&(0,n.jsxs)(h.aR,{open:_,onOpenChange:C,children:[(0,n.jsx)(h.vW,{asChild:!0,children:(0,n.jsx)(j.z,{variant:"hover-destructive",children:"Delete"})}),(0,n.jsxs)(h._T,{children:[(0,n.jsxs)(h.fY,{children:[(0,n.jsx)(h.f$,{children:"Are you absolutely sure?"}),(0,n.jsx)(h.yT,{children:"This action cannot be undone. It will permanently delete the current setting."})]}),(0,n.jsxs)(h.xo,{children:[(0,n.jsx)(h.le,{children:"Cancel"}),(0,n.jsx)(h.OL,{className:(0,j.d)({variant:"destructive"}),onClick:E,children:"Yes, delete it"})]})]})]}),(0,n.jsx)(j.z,{type:"submit",disabled:!t&&!S,children:t?"Create":"Update"})]})]}),(0,n.jsx)(g.zG,{className:"text-center"})]})})});S.displayName="MailForm";var _=t(61985),C=t(46591),R=t(84168),I=t(66672);let E=(0,C.B)("\n  mutation SendTestEmail($to: String!) {\n    sendTestEmail(to: $to)\n  }\n"),z=x.Ry({to:x.Z_().email("Invalid email address")});function D(e){let{onSuccess:r}=e,t=(0,m.cI)({resolver:(0,c.F)(z)}),{isSubmitting:l}=t.formState,s=(0,a.Db)(E,{form:t});return(0,n.jsx)(g.l0,{...t,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:t.handleSubmit(e=>s(e).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.sendTestEmail)&&(f.A.info("A test email has been sent. If your configuration is correct, you should receive an email shortly."),null==r||r())})),children:[(0,n.jsx)(I._,{children:"Send Test Email To"}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(g.Wi,{control:t.control,name:"to",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.NI,{children:(0,n.jsx)(v.I,{placeholder:"e.g. ".concat(_.o),type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",className:"w-80",...r})}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsxs)(j.z,{className:"self-start",type:"submit",disabled:l,children:[l&&(0,n.jsx)(R.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Send"]})]})]}),(0,n.jsx)(g.zG,{className:"text-center"})]})})}let A=(0,s.BX)("\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n"),P="********************************",k=()=>{var e,r;let[t,s]=l.useState(),[o,c]=l.useState(!1),u=l.useRef(null),m=()=>a.Lp.query(A,{}).toPromise().then(e=>(s(e),c(!0),e)),f=!(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.emailSetting),x=f?{}:{...null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.emailSetting,smtpPassword:P};return l.useEffect(()=>{m()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),o?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-8 border-b pb-4",children:(0,n.jsx)(S,{defaultValues:x,isNew:f,onSuccess:()=>{m().then(e=>{var r,t,n;let l=null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.emailSetting;l&&(null===(n=u.current)||void 0===n||null===(t=n.form)||void 0===t||t.reset({...l,smtpPassword:P}))})},onDelete:()=>{c(!1),m()},ref:u})}),(0,n.jsx)(D,{})]}):(0,n.jsx)(i.c,{})]})}},93111:function(e,r,t){"use strict";t.d(r,{P:function(){return i},c:function(){return a}});var n=t(57437),l=t(39311),s=t(25645);let a=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,l.cn)("space-y-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},i=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,l.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})}},52373:function(e,r,t){"use strict";t.d(r,{b:function(){return o}});var n=t(57437);t(2265);var l=t(61396),s=t.n(l),a=t(39311),i=t(84168);let o=e=>{let{className:r,externalLink:t,externalLinkText:l="Learn more",children:o}=e;return(0,n.jsx)("div",{className:(0,a.cn)("mb-4 flex items-center gap-4",r),children:(0,n.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[o,!!t&&(0,n.jsxs)(s(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:t,target:"_blank",children:[l,(0,n.jsx)(i.IconExternalLink,{className:"ml-1"})]})]})})}},87516:function(e,r,t){"use strict";t.d(r,{OL:function(){return j},_T:function(){return m},aR:function(){return o},f$:function(){return p},fY:function(){return f},le:function(){return g},vW:function(){return d},xo:function(){return x},yT:function(){return h}});var n=t(57437),l=t(2265),s=t(52506),a=t(39311),i=t(93023);let o=s.fC,d=s.xz,c=e=>{let{className:r,children:t,...l}=e;return(0,n.jsx)(s.h_,{className:(0,a.cn)(r),...l,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:t})})};c.displayName=s.h_.displayName;let u=l.forwardRef((e,r)=>{let{className:t,children:l,...i}=e;return(0,n.jsx)(s.aV,{className:(0,a.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",t),...i,ref:r})});u.displayName=s.aV.displayName;let m=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsx)(s.VY,{ref:r,className:(0,a.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",t),...l})]})});m.displayName=s.VY.displayName;let f=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("flex flex-col space-y-2 text-center sm:text-left",r),...t})};f.displayName="AlertDialogHeader";let x=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};x.displayName="AlertDialogFooter";let p=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.Dx,{ref:r,className:(0,a.cn)("text-lg font-semibold",t),...l})});p.displayName=s.Dx.displayName;let h=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.dk,{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...l})});h.displayName=s.dk.displayName;let j=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.aU,{ref:r,className:(0,a.cn)((0,i.d)(),t),...l})});j.displayName=s.aU.displayName;let g=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.$j,{ref:r,className:(0,a.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...l})});g.displayName=s.$j.displayName},93023:function(e,r,t){"use strict";t.d(r,{d:function(){return o},z:function(){return d}});var n=t(57437),l=t(2265),s=t(67256),a=t(7404),i=t(39311);let o=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=l.forwardRef((e,r)=>{let{className:t,variant:l,size:a,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(o({variant:l,size:a,className:t})),ref:r,...c})});d.displayName="Button"},41315:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return d},lX:function(){return p},pf:function(){return j},xJ:function(){return x},zG:function(){return g}});var n=t(57437),l=t(2265),s=t(67256),a=t(61865),i=t(39311),o=t(66672);let d=a.RV,c=l.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(a.Qr,{...r})})},m=()=>{let e=l.useContext(c),r=l.useContext(f),{getFieldState:t,formState:n}=(0,a.Gc)(),s=e.name||"root",i=t(s,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:o}=r;return{id:o,name:s,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...i}},f=l.createContext({}),x=l.forwardRef((e,r)=>{let{className:t,...s}=e,a=l.useId();return(0,n.jsx)(f.Provider,{value:{id:a},children:(0,n.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...s})})});x.displayName="FormItem";let p=l.forwardRef((e,r)=>{let{className:t,required:l,...s}=e,{error:a,formItemId:d}=m();return(0,n.jsx)(o._,{ref:r,className:(0,i.cn)(a&&"text-destructive",l&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:d,...s})});p.displayName="FormLabel";let h=l.forwardRef((e,r)=>{let{...t}=e,{error:l,formItemId:a,formDescriptionId:i,formMessageId:o}=m();return(0,n.jsx)(s.g7,{ref:r,id:a,"aria-describedby":l?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!l,...t})});h.displayName="FormControl";let j=l.forwardRef((e,r)=>{let{className:t,...l}=e,{formDescriptionId:s}=m();return(0,n.jsx)("p",{ref:r,id:s,className:(0,i.cn)("text-sm text-muted-foreground",t),...l})});j.displayName="FormDescription";let g=l.forwardRef((e,r)=>{let{className:t,children:l,...s}=e,{error:a,formMessageId:o}=m(),d=a?String(null==a?void 0:a.message):l;return d?(0,n.jsx)("p",{ref:r,id:o,className:(0,i.cn)("text-sm font-medium text-destructive",t),...s,children:d}):null});g.displayName="FormMessage"},51908:function(e,r,t){"use strict";t.d(r,{I:function(){return a}});var n=t(57437),l=t(2265),s=t(39311);let a=l.forwardRef((e,r)=>{let{className:t,type:l,...a}=e;return(0,n.jsx)("input",{type:l,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...a})});a.displayName="Input"},66672:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(57437),l=t(2265),s=t(36743),a=t(7404),i=t(39311);let o=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.f,{ref:r,className:(0,i.cn)(o(),t),...l})});d.displayName=s.f.displayName},58094:function(e,r,t){"use strict";t.d(r,{Bw:function(){return u},Ph:function(){return o},Ql:function(){return f},i4:function(){return c},ki:function(){return d}});var n=t(57437),l=t(2265),s=t(98608),a=t(39311),i=t(84168);let o=s.fC;s.ZA;let d=s.B4,c=l.forwardRef((e,r)=>{let{className:t,children:l,...o}=e;return(0,n.jsxs)(s.xz,{ref:r,className:(0,a.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...o,children:[l,(0,n.jsx)(s.JO,{asChild:!0,children:(0,n.jsx)(i.IconChevronUpDown,{className:"opacity-50"})})]})});c.displayName=s.xz.displayName;let u=l.forwardRef((e,r)=>{let{className:t,children:l,position:i="popper",...o}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsx)(s.VY,{ref:r,className:(0,a.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===i&&"translate-y-1",t),position:i,...o,children:(0,n.jsx)(s.l_,{className:(0,a.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:l})})})});u.displayName=s.VY.displayName;let m=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.__,{ref:r,className:(0,a.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...l})});m.displayName=s.__.displayName;let f=l.forwardRef((e,r)=>{let{className:t,children:l,isPlaceHolder:o,...d}=e;return(0,n.jsxs)(s.ck,{ref:r,className:(0,a.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...d,children:[!o&&(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(i.IconCheck,{className:"h-4 w-4"})})}),(0,n.jsx)(s.eT,{children:l})]})});f.displayName=s.ck.displayName;let x=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)(s.Z0,{ref:r,className:(0,a.cn)("-mx-1 my-1 h-px bg-muted",t),...l})});x.displayName=s.Z0.displayName},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var n=t(57437),l=t(39311);function s(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,l.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},61985:function(e,r,t){"use strict";t.d(r,{L:function(){return l},o:function(){return n}});let n="name@yourcompany.com",l=20},52506:function(e,r,t){"use strict";t.d(r,{$j:function(){return z},Dx:function(){return D},VY:function(){return I},aU:function(){return E},aV:function(){return R},dk:function(){return A},fC:function(){return S},h_:function(){return C},xz:function(){return _}});var n=t(13428),l=t(2265),s=t(56989),a=t(42210),i=t(71713),o=t(85744),d=t(67256);let[c,u]=(0,s.b)("AlertDialog",[i.p8]),m=(0,i.p8)(),f=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,...s}=e,a=m(t);return(0,l.createElement)(i.xz,(0,n.Z)({},a,s,{ref:r}))}),x=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,...s}=e,a=m(t);return(0,l.createElement)(i.aV,(0,n.Z)({},a,s,{ref:r}))}),p="AlertDialogContent",[h,j]=c(p),g=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,children:s,...c}=e,u=m(t),f=(0,l.useRef)(null),x=(0,a.e)(r,f),j=(0,l.useRef)(null);return(0,l.createElement)(i.jm,{contentName:p,titleName:v,docsSlug:"alert-dialog"},(0,l.createElement)(h,{scope:t,cancelRef:j},(0,l.createElement)(i.VY,(0,n.Z)({role:"alertdialog"},u,c,{ref:x,onOpenAutoFocus:(0,o.M)(c.onOpenAutoFocus,e=>{var r;e.preventDefault(),null===(r=j.current)||void 0===r||r.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),(0,l.createElement)(d.A4,null,s),!1)))}),v="AlertDialogTitle",N=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,...s}=e,a=m(t);return(0,l.createElement)(i.Dx,(0,n.Z)({},a,s,{ref:r}))}),w=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,...s}=e,a=m(t);return(0,l.createElement)(i.dk,(0,n.Z)({},a,s,{ref:r}))}),y=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,...s}=e,a=m(t);return(0,l.createElement)(i.x8,(0,n.Z)({},a,s,{ref:r}))}),b=(0,l.forwardRef)((e,r)=>{let{__scopeAlertDialog:t,...s}=e,{cancelRef:o}=j("AlertDialogCancel",t),d=m(t),c=(0,a.e)(r,o);return(0,l.createElement)(i.x8,(0,n.Z)({},d,s,{ref:c}))}),S=e=>{let{__scopeAlertDialog:r,...t}=e,s=m(r);return(0,l.createElement)(i.fC,(0,n.Z)({},s,t,{modal:!0}))},_=f,C=e=>{let{__scopeAlertDialog:r,...t}=e,s=m(r);return(0,l.createElement)(i.h_,(0,n.Z)({},s,t))},R=x,I=g,E=y,z=b,D=N,A=w},8281:function(e,r,t){"use strict";t.d(r,{T:function(){return a},f:function(){return i}});var n=t(13428),l=t(2265),s=t(9381);let a=(0,l.forwardRef)((e,r)=>(0,l.createElement)(s.WV.span,(0,n.Z)({},e,{ref:r,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=a}},function(e){e.O(0,[3529,4762,1424,3072,2363,9233,2699,3714,6410,1713,3952,7753,4168,2445,2971,7864,1744],function(){return e(e.s=51587)}),_N_E=e.O()}]);