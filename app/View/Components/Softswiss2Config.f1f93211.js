(window.webpackJsonp = window.webpackJsonp || []).push([
    [164, 104], {
        678: function(t, s, e) {
            "use strict";
            var r = e(2),
                a = r(e(3)),
                i = r(e(4)),
                l = r(e(80)),
                u = r(e(8)),
                o = r(e(9)),
                n = r(e(7));

            function c(t) {
                var s = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var e, r = (0, n.default)(t);
                    if (s) {
                        var a = (0, n.default)(this).constructor;
                        e = Reflect.construct(r, arguments, a)
                    } else e = r.apply(this, arguments);
                    return (0, o.default)(this, e)
                }
            }
            var f = e(677),
                h = e(229),
                p = function(t) {
                    (0, u.default)(e, t);
                    var s = c(e);

                    function e() {
                        return (0, a.default)(this, e), s.apply(this, arguments)
                    }
                    return (0, i.default)(e, [{
                        key: "_parseServer",
                        value: function() {
                            (0, l.default)((0, n.default)(e.prototype), "_parseServer", this).call(this);
                            var t = {
                                playMode: "real" === this._urlParams.playMode ? "real" : "demo",
                                sessionId: this._urlParams.token || "",
                                userData: {
                                    lang: this._urlParams.lang || "",
                                    affiliate: this._urlParams.affiliate || "",
                                    channel: this._urlParams.channel || ""
                                },
                                custom: {
                                    siteId: this._urlParams.casino || "",
                                    extras: this._urlParams.extras || ""
                                }
                            };
                            this._cfg.server.launchParams = h(this._cfg.server.launchParams, t)
                        }
                    }, {
                        key: "_parseBridge",
                        value: function() {
                            (0, l.default)((0, n.default)(e.prototype), "_parseBridge", this).call(this), this._cfg.bridge.redirects = {
                                realityCheckHistory: !0,
                                realityCheckExit: !0,
                                lobby: !0,
                                deposit: !0
                            }
                        }
                    }, {
                        key: "_parseBars",
                        value: function() {
                            (0, l.default)((0, n.default)(e.prototype), "_parseBars", this).call(this);
                            var t = "real" === this._urlParams.playMode,
                                s = {
                                    freeBets: "false" !== this._urlParams.hasFreeBets,
                                    history: this._isTrue("hasHistory", this._urlParams),
                                    roundId: this._isTrue("hasRoundId", this._urlParams),
                                    fullScreen: "false" !== this._urlParams.fullScreen,
                                    depositButton: Boolean(this._urlParams.depositURL),
                                    delegateMessages: !1,
                                    lobby: Boolean(this._urlParams.lobbyUrl),
                                    lobbyURL: this._urlParams.lobbyUrl ? decodeURIComponent(this._urlParams.lobbyUrl) : "",
                                    depositURL: this._urlParams.depositURL || "",
                                    hasAutoplayRestart: !0,
                                    hasTurboMode: "false" !== this._urlParams.hasTurboMode,
                                    autoPlayFields: {
                                        totalSpins: !t || this._isTrue("hasAutoplayTotalSpins", this._urlParams),
                                        limitLoss: !t || this._isTrue("hasAutoplayLimitLoss", this._urlParams),
                                        singleWinLimit: !t || this._isTrue("hasAutoplaySingleWinLimit", this._urlParams),
                                        stopOnJackpot: !t || this._isTrue("hasAutoplayStopOnJackpot", this._urlParams),
                                        stopOnBonus: !t || this._isTrue("hasAutoplayStopOnBonus", this._urlParams)
                                    }
                                };
                            this._cfg.bars.options = h(this._cfg.bars.options, s)
                        }
                    }]), e
                }(f);
            t.exports = p
        },
        767: function(t, s, e) {
            "use strict";
            var r = e(2),
                a = r(e(3)),
                i = r(e(4)),
                l = r(e(80)),
                u = r(e(8)),
                o = r(e(9)),
                n = r(e(7));

            function c(t) {
                var s = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var e, r = (0, n.default)(t);
                    if (s) {
                        var a = (0, n.default)(this).constructor;
                        e = Reflect.construct(r, arguments, a)
                    } else e = r.apply(this, arguments);
                    return (0, o.default)(this, e)
                }
            }
            var f = function(t) {
                (0, u.default)(e, t);
                var s = c(e);

                function e() {
                    return (0, a.default)(this, e), s.apply(this, arguments)
                }
                return (0, i.default)(e, [{
                    key: "_parseWidgets",
                    value: function() {
                        (0, l.default)((0, n.default)(e.prototype), "_parseWidgets", this).call(this), this._setJackpot({
                            skin: "softswiss2"
                        })
                    }
                }]), e
            }(e(678));
            t.exports = f
        }
    }
]);