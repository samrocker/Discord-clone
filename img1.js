(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([["43426"], {
    583227: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return u
            }
        }),
        s("222007"),
        s("506083");
        var n = s("37983")
          , i = s("884691")
          , a = s("77078")
          , o = s("782340")
          , l = s("579993");
        class r extends i.PureComponent {
            render() {
                let {title: e, actionText: t, children: s, transitionState: r} = this.props
                  , {error: u, isLoading: d, value: h} = this.state
                  , c = i.Children.count(s) > 0 ? (0,
                n.jsx)(a.Card, {
                    type: a.Card.Types.WARNING,
                    className: l.card,
                    children: (0,
                    n.jsx)(a.Text, {
                        className: l.warning,
                        variant: "text-md/normal",
                        children: s
                    })
                }) : null;
                return (0,
                n.jsx)(a.ModalRoot, {
                    transitionState: r,
                    children: (0,
                    n.jsxs)("form", {
                        onSubmit: this.handleSubmit,
                        children: [(0,
                        n.jsx)(a.ModalHeader, {
                            separator: !1,
                            children: (0,
                            n.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                children: e
                            })
                        }), (0,
                        n.jsxs)(a.ModalContent, {
                            children: [c, (0,
                            n.jsxs)(a.FormItem, {
                                title: o.default.Messages.FORM_LABEL_PASSWORD,
                                className: l.spacing,
                                children: [(0,
                                n.jsx)(a.TextInput, {
                                    type: "password",
                                    autoComplete: "off",
                                    autoFocus: !0,
                                    value: h,
                                    onChange: this.handlePasswordChange
                                }), null != u && "" !== u ? (0,
                                n.jsxs)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    className: l.error,
                                    children: [" ", u, " "]
                                }) : null]
                            })]
                        }), (0,
                        n.jsxs)(a.ModalFooter, {
                            children: [(0,
                            n.jsx)(a.Button, {
                                type: "submit",
                                disabled: d || 0 === h.length,
                                children: null != t ? t : o.default.Messages.CONFIRM
                            }), (0,
                            n.jsx)(a.Button, {
                                onClick: this.handleCancel,
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                children: o.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
            constructor(...e) {
                super(...e),
                this.state = {
                    value: "",
                    error: null,
                    isLoading: !1
                },
                this.handleSubmit = e=>{
                    e.preventDefault();
                    let {value: t} = this.state
                      , {handleSubmit: s, onClose: n, onError: i} = this.props;
                    this.setState({
                        isLoading: !0
                    }),
                    s(t).then(e=>n(null != e ? e : void 0), e=>{
                        if (null != e.body)
                            null == i || i(e.body),
                            !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
                                error: e.body.password,
                                isLoading: !1
                            }) : e.body.message && this.setState({
                                error: e.body.message,
                                isLoading: !1
                            }))
                    }
                    ).finally(()=>this.setState({
                        isLoading: !1
                    }))
                }
                ,
                this.shouldSkipErrorMsgRender = e=>{
                    let {skipErrorMsgAbortCode: t} = this.props;
                    return null != t && (null == e ? void 0 : e.code) === t
                }
                ,
                this.handleCancel = ()=>{
                    let {onClose: e} = this.props;
                    e()
                }
                ,
                this.handlePasswordChange = e=>{
                    let {onPasswordChange: t} = this.props;
                    null == t || t(e),
                    this.setState({
                        value: e
                    })
                }
            }
        }
        r.key = ()=>"password-confirm-modal";
        var u = r
    },
    189613: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return n
            }
        }),
        s("881410");
        var n, i = s("37983"), a = s("884691"), o = s("414456"), l = s.n(o), r = s("448105"), u = s.n(r), d = s("917351"), h = s.n(d), c = s("592861"), E = s("77078"), R = s("988415"), f = s("145131"), p = s("782340"), I = s("803853"), m = s("212029");
        n = class extends a.PureComponent {
            renderItems() {
                let {query: e} = this.state
                  , t = c.default.flatMap((e,t)=>{
                    let {alpha2: s, phoneCountryCodes: n, name: a} = e
                      , o = (0,
                    R.getI18NCountryName)(s);
                    return n.map(e=>({
                        key: "".concat(t, "-").concat(e),
                        name: a,
                        translatedName: o,
                        countryData: {
                            name: a,
                            alpha2: s,
                            code: e
                        },
                        children: (0,
                        i.jsxs)(f.default, {
                            className: I.countryItem,
                            justify: f.default.Justify.CENTER,
                            align: f.default.Align.CENTER,
                            children: [(0,
                            i.jsx)(f.default.Child, {
                                className: I.countryName,
                                children: o
                            }), (0,
                            i.jsx)(f.default.Child, {
                                className: I.countryCode,
                                grow: 0,
                                shrink: 0,
                                children: e
                            })]
                        })
                    }))
                }
                )
                  , s = h(t).filter(t=>0 === e.length || u(e.toLowerCase(), t.name.toLowerCase()) || u(e.toLowerCase(), t.translatedName.toLowerCase())).map(e=>(0,
                a.createElement)(E.PopoutList.Item, {
                    ...e,
                    key: e.key,
                    onClick: ()=>this.onClick(e.countryData)
                })).value();
                return 0 === s.length ? (0,
                i.jsx)(E.PopoutList.Empty, {
                    children: p.default.Messages.NONE
                }) : (0,
                i.jsx)(E.ScrollerAuto, {
                    className: I.phoneFieldScroller,
                    children: s
                })
            }
            render() {
                let {className: e} = this.props;
                return (0,
                i.jsxs)(E.PopoutList, {
                    className: l(I.phoneFieldPopout, m.elevationBorderLow, e),
                    children: [(0,
                    i.jsx)(E.PopoutList.SearchBar, {
                        query: this.state.query,
                        placeholder: p.default.Messages.SEARCH_COUNTRY,
                        onChange: this.onChangeQuery,
                        onClear: this.onClearQuery,
                        autoComplete: "off"
                    }), (0,
                    i.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
                })
            }
            constructor(e) {
                super(e),
                this.onChangeQuery = e=>{
                    this.setState({
                        query: e
                    })
                }
                ,
                this.onClearQuery = ()=>{
                    this.setState({
                        query: ""
                    })
                }
                ,
                this.onClick = e=>{
                    var t, s;
                    null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e)
                }
                ,
                this.state = {
                    query: ""
                }
            }
        }
    },
    892313: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return E
            }
        });
        var n = s("917351")
          , i = s.n(n)
          , a = s("49111")
          , o = s("782340");
        let {CAPTCHA: l, EMAIL: r, PHONE: u, REVERIFY_EMAIL: d, REVERIFY_PHONE: h} = a.VerificationTypes
          , c = {
            [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [r],
            [a.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
            [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
            [a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [h],
            [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, u],
            [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
            [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, h],
            [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, h],
            [a.UserRequiredActions.REQUIRE_CAPTCHA]: [l],
            [a.UserRequiredActions.AGREEMENTS]: []
        };
        var E = {
            isPhoneReverification: (e,t)=>void 0 !== e && e.isPhoneVerified() && (t === a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
            isEmailReverification: e=>e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
            getVerificationTypes: e=>null == e || "symbol" == typeof e ? [] : c[e],
            getButtonTitle(e) {
                switch (e) {
                case a.VerificationTypes.EMAIL:
                    return o.default.Messages.VERIFY_BY_EMAIL;
                case a.VerificationTypes.PHONE:
                    return o.default.Messages.START_PHONE_VERIFICATION_BUTTON;
                case a.VerificationTypes.REVERIFY_EMAIL:
                    return o.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
                case a.VerificationTypes.REVERIFY_PHONE:
                    return o.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
                default:
                    return o.default.Messages.START_VERIFICATION_BUTTON
                }
            },
            areVerificationTypesEqual: (e,t)=>i.isEqual(e, t)
        }
    },
    601745: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return R
            }
        }),
        s("222007");
        var n = s("37983")
          , i = s("884691")
          , a = s("446674")
          , o = s("583227")
          , l = s("599417")
          , r = s("878720")
          , u = s("330387")
          , d = s("697218")
          , h = s("419522")
          , c = s("892313")
          , E = s("782340")
          , R = i.forwardRef(function(e, t) {
            let {onAddedPhone: s, onClose: R, transitionState: f, reason: p} = e
              , I = (0,
            a.useStateFromStores)([d.default], ()=>d.default.getCurrentUser())
              , m = (0,
            a.useStateFromStores)([u.default], ()=>u.default.getAction())
              , [C,_] = i.useState(null)
              , [g,N] = i.useState(null)
              , [y,A] = i.useState(null)
              , [P,T] = i.useState(!1)
              , x = i.useCallback(async e=>{
                T(!0);
                try {
                    c.default.isPhoneReverification(I, m) ? await r.default.beginReverifyPhone(e, p) : await r.default.beginAddPhone(e, p),
                    A(null),
                    _(e)
                } catch (e) {
                    A(new l.default(e))
                }
                T(!1)
            }
            , [I, p, m])
              , S = i.useCallback(async e=>{
                if (null != C && null != I) {
                    T(!0);
                    try {
                        let {token: t} = await r.default.verifyPhone(C, e);
                        A(null),
                        N(t)
                    } catch (e) {
                        A(new l.default(e))
                    }
                    T(!1)
                }
            }
            , [I, C])
              , v = i.useCallback(async e=>{
                null != g && (c.default.isPhoneReverification(I, m) ? await r.default.reverifyPhone(g, e, p) : await r.default.addPhone(g, e, p),
                null == s || s(),
                R())
            }
            , [s, R, g, p, I, m]);
            return null != g ? (0,
            n.jsx)(o.default, {
                onClose: R,
                transitionState: f,
                title: E.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
                handleSubmit: v
            }) : (0,
            n.jsx)(h.default, {
                onClose: R,
                transitionState: f,
                error: null == y ? void 0 : y.getAnyErrorMessage(),
                working: P,
                validPhone: null != C,
                onAddPhone: x,
                onVerifyPhone: S
            })
        })
    },
    794538: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return h
            }
        }),
        s("222007"),
        s("424973");
        var n = s("37983")
          , i = s("884691")
          , a = s("414456")
          , o = s.n(a)
          , l = s("145131")
          , r = s("616389");
        class u extends i.PureComponent {
            render() {
                let {className: e} = this.props;
                return (0,
                n.jsx)("input", {
                    ref: this.setCodeBlockRef,
                    className: o(r.input, e),
                    maxLength: 1,
                    value: null != this.props.code ? this.props.code : void 0,
                    autoFocus: this.props.autoFocus,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange
                })
            }
            focus() {
                var e;
                null === (e = this._codeBlockRef) || void 0 === e || e.focus()
            }
            blur() {
                var e;
                null === (e = this._codeBlockRef) || void 0 === e || e.blur()
            }
            constructor(...e) {
                super(...e),
                this.setCodeBlockRef = e=>{
                    this._codeBlockRef = e
                }
                ,
                this.handleKeyDown = e=>{
                    let t = 8 === e.which || 37 === e.which || 39 === e.which
                      , s = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                    !t && !s && e.preventDefault();
                    let {onKeyDown: n} = this.props;
                    null == n || n(e)
                }
                ,
                this.handleChange = e=>{
                    let {onChange: t} = this.props;
                    null == t || t(e.currentTarget.value)
                }
            }
        }
        u.defaultProps = {
            autoFocus: !1
        };
        class d extends i.PureComponent {
            render() {
                let {className: e, inputClassName: t} = this.props
                  , {codes: s} = this.state
                  , i = [];
                for (let e = 0; e < s.length; e++)
                    e === s.length / 2 && i.push((0,
                    n.jsx)("div", {
                        className: r.spacer
                    }, "spacer")),
                    i.push((0,
                    n.jsx)(u, {
                        ref: t=>this.setCodeBlockRef(e, t),
                        code: s[e],
                        autoFocus: 0 === e,
                        onChange: t=>this.handleChange(e, t),
                        onKeyDown: t=>this.handleKeyDown(e, t),
                        className: t
                    }, e));
                return (0,
                n.jsx)(l.default, {
                    align: l.default.Align.CENTER,
                    justify: l.default.Justify.CENTER,
                    className: e,
                    children: i
                })
            }
            setCodeBlockRef(e, t) {
                this._codeBlockRefs[e] = t
            }
            handleChange(e, t) {
                this.state.codes[e] = t;
                let s = this.getCodeOrFirstEmptyIndex();
                if ("string" == typeof s)
                    this.submit(s);
                else {
                    let e = this._codeBlockRefs[s];
                    null == e || e.focus()
                }
            }
            handleKeyDown(e, t) {
                let {codes: s} = this.state;
                if (8 === t.which && e > 0 && (null == s[e] || 0 === s[e].length)) {
                    let t = e - 1;
                    s[t] = "";
                    let n = this._codeBlockRefs[t];
                    null == n || n.focus()
                }
            }
            getCodeOrFirstEmptyIndex() {
                let {codes: e} = this.state
                  , t = "";
                for (let s = 0; s < e.length; s++) {
                    if (isNaN(parseInt(e[s])))
                        return s;
                    t += e[s]
                }
                return t
            }
            submit(e) {
                let {onSubmit: t} = this.props;
                null == t || t(e)
            }
            constructor(e) {
                super(e),
                this._codeBlockRefs = Array(this.props.count),
                this.state = {
                    codes: Array(e.count)
                }
            }
        }
        d.defaultProps = {
            count: 6
        };
        var h = d
    },
    794851: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return I
            }
        }),
        s("222007");
        var n = s("37983")
          , i = s("884691")
          , a = s("414456")
          , o = s.n(a)
          , l = s("592861")
          , r = s("77078")
          , u = s("189613")
          , d = s("145131")
          , h = s("461380")
          , c = s("782340")
          , E = s("323299")
          , R = s("212029")
          , f = s("926622");
        class p extends i.PureComponent {
            render() {
                let {countryCode: e, phone: t, open: s} = this.state
                  , {className: i, submitting: a} = this.props
                  , [,l] = e.split("+");
                return (0,
                n.jsxs)(d.default, {
                    className: o(E.phoneField, R.elevationLow, i),
                    align: d.default.Align.CENTER,
                    grow: 0,
                    children: [(0,
                    n.jsxs)(r.Button, {
                        size: r.ButtonSizes.SMALL,
                        className: E.countryButton,
                        color: r.ButtonColors.PRIMARY,
                        innerClassName: E.countryButtonInner,
                        onClick: this.handleTogglePopout,
                        children: [(0,
                        n.jsxs)(d.default, {
                            className: o(E.countryCodeContainer, f.marginReset),
                            justify: d.default.Justify.CENTER,
                            children: [(0,
                            n.jsx)("div", {
                                className: E.plusSign,
                                children: "+"
                            }), (0,
                            n.jsx)("div", {
                                className: E.countryCode,
                                children: l
                            })]
                        }), (0,
                        n.jsx)(h.default, {
                            foreground: E.phoneFieldExpand,
                            expanded: s,
                            width: 16,
                            height: 16
                        })]
                    }), (0,
                    n.jsx)("input", {
                        "aria-label": c.default.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                        className: E.inputField,
                        value: t,
                        onChange: this.handleChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }), (0,
                    n.jsx)(r.Button, {
                        className: E.sendButton,
                        size: r.ButtonSizes.SMALL,
                        submitting: a,
                        onClick: this.handleSubmit,
                        children: c.default.Messages.SEND
                    }), s ? (0,
                    n.jsx)(u.default, {
                        onClick: this.handleClick
                    }) : null]
                })
            }
            closePopout() {
                this.state.open && this.setState({
                    open: !1
                })
            }
            constructor(e) {
                super(e),
                this.handleChange = e=>{
                    this.closePopout(),
                    this.setState({
                        phone: e.currentTarget.value
                    })
                }
                ,
                this.handleKeyPress = e=>{
                    this.closePopout(),
                    13 === e.which && (e.preventDefault(),
                    this.handleSubmit())
                }
                ,
                this.handleSubmit = ()=>{
                    let {onSubmit: e, submitting: t} = this.props
                      , {countryCode: s, phone: n} = this.state;
                    !t && (null == e || e("".concat(s).concat(n)))
                }
                ,
                this.handleTogglePopout = ()=>{
                    this.setState({
                        open: !this.state.open
                    })
                }
                ,
                this.handleClick = e=>{
                    let[t,s] = e.code.split(" ");
                    this.setState({
                        open: !1,
                        countryCode: t,
                        phone: null != s ? s : ""
                    })
                }
                ;
                let t = l.default.find(e=>"United States" === e.name)
                  , [s,n] = t.phoneCountryCode.split(" ");
                this.state = {
                    countryCode: s,
                    phone: null != n ? n : "",
                    open: !1
                }
            }
        }
        var I = p
    },
    419522: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return m
            }
        }),
        s("222007");
        var n = s("37983")
          , i = s("884691")
          , a = s("414456")
          , o = s.n(a)
          , l = s("748820")
          , r = s("759843")
          , u = s("77078")
          , d = s("794538")
          , h = s("145131")
          , c = s("794851")
          , E = s("782340")
          , R = s("922833")
          , f = s("173791")
          , p = s("926622");
        class I extends i.PureComponent {
            async componentDidMount() {
                let[e,{default: t}] = await Promise.all([s.el("432201").then(s.t.bind(s, "432201", 19)), s.el("245749").then(s.t.bind(s, "245749", 23))]);
                this._animItem = t.loadAnimation({
                    container: this._lottieRef,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !1,
                    animationData: e
                })
            }
            componentWillUnmount() {
                null != this._animItem && (this._animItem.destroy(),
                this._animItem = void 0)
            }
            render() {
                let e, t, s;
                let {error: i, working: a, transitionState: l, validPhone: I} = this.props;
                return e = null != i && "" !== i ? (0,
                n.jsx)("div", {
                    className: o(R.description, R.error, p.marginBottom20),
                    children: i
                }) : I ? (0,
                n.jsx)("div", {
                    className: o(R.description, p.marginBottom20),
                    children: E.default.Messages.VERIFICATION_PHONE_DESCRIPTION
                }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: o(R.description, p.marginBottom20),
                        children: E.default.Messages.ENTER_PHONE_DESCRIPTION
                    }), (0,
                    n.jsx)("div", {
                        className: o(R.description, p.marginBottom20),
                        children: E.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
                    })]
                }),
                t = I ? (0,
                n.jsxs)(h.default, {
                    className: R.field,
                    direction: h.default.Direction.VERTICAL,
                    align: h.default.Align.CENTER,
                    children: [(0,
                    n.jsx)(d.default, {
                        onSubmit: this.handleVerifyPhone
                    }), (0,
                    n.jsx)(u.Button, {
                        className: p.marginTop8,
                        size: u.ButtonSizes.SMALL,
                        look: u.ButtonLooks.LINK,
                        color: u.ButtonColors.PRIMARY,
                        onClick: this.handleResendCode,
                        children: E.default.Messages.RESEND_CODE
                    })]
                }) : (0,
                n.jsx)(c.default, {
                    className: R.field,
                    onSubmit: this.handleAddPhone,
                    submitting: a
                }),
                s = I ? E.default.Messages.VERIFICATION_PHONE_TITLE : E.default.Messages.ENTER_PHONE_TITLE,
                (0,
                n.jsxs)(u.ModalRoot, {
                    impression: {
                        impressionName: r.ImpressionNames.USER_VERIFY_PHONE
                    },
                    transitionState: l,
                    className: o(R.phoneVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, p.marginTop60),
                    "aria-labelledby": this.headerId,
                    children: [(0,
                    n.jsx)("div", {
                        className: R.animationContainer,
                        ref: this.setLottieRef
                    }), (0,
                    n.jsx)("div", {
                        className: o(R.title, p.marginBottom8),
                        id: this.headerId,
                        children: s
                    }), e, t]
                })
            }
            constructor(e) {
                super(e),
                this._animItem = null,
                this.headerId = (0,
                l.v4)(),
                this.setLottieRef = e=>{
                    this._lottieRef = e
                }
                ,
                this.handleAddPhone = e=>{
                    this.state.animated || null == this._animItem ? this.setState({
                        phone: e
                    }) : (this._animItem.play(),
                    this.setState({
                        animated: !0,
                        phone: e
                    }));
                    let {onAddPhone: t} = this.props;
                    null == t || t(e)
                }
                ,
                this.handleVerifyPhone = e=>{
                    let {onVerifyPhone: t} = this.props;
                    null == t || t(e)
                }
                ,
                this.handleResendCode = ()=>{
                    let {onAddPhone: e} = this.props;
                    null == e || e(this.state.phone)
                }
                ,
                this.state = {
                    animated: !1,
                    phone: ""
                }
            }
        }
        var m = I
    }
}]);
//# sourceMappingURL=0df8e087fb13668ec463.js.map
