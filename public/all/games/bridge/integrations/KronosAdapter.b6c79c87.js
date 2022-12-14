(window.webpackJsonp = window.webpackJsonp || []).push([
    [103], {
        687: function(e, t, s) {
            "use strict";
            var a = s(2),
                n = a(s(6)),
                i = a(s(3)),
                o = a(s(4)),
                r = a(s(80)),
                h = a(s(8)),
                c = a(s(9)),
                u = a(s(7));

            function P(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(s), !0).forEach((function(t) {
                        (0, n.default)(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : P(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function A(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var s, a = (0, u.default)(e);
                    if (t) {
                        var n = (0, u.default)(this).constructor;
                        s = Reflect.construct(a, arguments, n)
                    } else s = a.apply(this, arguments);
                    return (0, c.default)(this, s)
                }
            }
            var p = function(e) {
                (0, h.default)(s, e);
                var t = A(s);

                function s() {
                    return (0, i.default)(this, s), t.apply(this, arguments)
                }
                return (0, o.default)(s, [{
                    key: "subscribe",
                    value: function(e, t, a) {
                        (0, r.default)((0, u.default)(s.prototype), "subscribe", this).call(this, e, t, a), this.GameAPI.on(this.GameAPI.events.LOAD_GAME_PROGRESS, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.LOAD_GAME_COMPLETE, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.GAME_READY, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.GAME_STARTED, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.WINBAR_CHANGE, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.AUTOPLAY_START, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.AUTOPLAY_STOP, this._onGameEvent, this), this.GameAPI.on(this.GameAPI.events.PROPERTY_CHANGED, this._onGameProperty, this), this.GameAPI.on(this.GameAPI.events.STATE_CHANGED, this._onGameState, this), this.BarsAPI.on(t.events.MESSAGE_SHOW, this._onBarsEvent.bind(this)), this.BarsAPI.on(t.events.POPUP_SHOW, this._onBarsEvent.bind(this)), this.BarsAPI.on(t.events.MESSAGE_HIDDEN, this._onBarsEvent.bind(this)), this.BarsAPI.on(t.events.POPUP_HIDDEN, this._onBarsEvent.bind(this))
                    }
                }, {
                    key: "handleBalanceChange",
                    value: function(e) {
                        (0, r.default)((0, u.default)(s.prototype), "handleBalanceChange", this).call(this, e), this._postMessage("balanceChange", {
                            balance: e.cash.toFixed(2),
                            free_balance: e.freeBets.toFixed(2)
                        })
                    }
                }, {
                    key: "_handleRealityCheckContinue",
                    value: function() {
                        this._postMessage("realityCheckContinue")
                    }
                }, {
                    key: "_handleRealityCheckHistory",
                    value: function(e) {
                        this._postMessage("realityCheckHistory"), this.config.redirects && !1 === this.config.redirects.realityCheckHistory || Object.assign(document.createElement("a"), {
                            target: "_blank",
                            href: e.url
                        }).click()
                    }
                }, {
                    key: "_handleRealityCheckExit",
                    value: function(e) {
                        this._postMessage("realityCheckExit"), this.config.redirects && !1 === this.config.redirects.realityCheckExit || (window.top.location = e.url)
                    }
                }, {
                    key: "_onPostMessage",
                    value: function(e) {
                        (0, r.default)((0, u.default)(s.prototype), "_onPostMessage", this).call(this, e);
                        var t = e.data.type,
                            a = e.data.payload;
                        switch (t) {
                            case "startGame":
                                document.dispatchEvent(new KeyboardEvent("keydown", {
                                    keyCode: 32,
                                    which: 32
                                }));
                                break;
                            case "action":
                                this.GameAPI.action(a.action, a.history);
                                break;
                            case "showHelp":
                                this.BarsAPI.showHelp();
                                break;
                            case "showPaytable":
                                this.GameAPI.paytableShow();
                                break;
                            case "soundUnmute":
                                this.GameAPI.soundUnmute();
                                break;
                            case "soundMute":
                                this.GameAPI.soundMute();
                                break;
                            case "updateResize":
                                a && a.size && this.GameAPI.updateResize(l(l({}, a.size), {}, {
                                    overlay: {
                                        bottom: 0,
                                        top: 0,
                                        left: 0,
                                        right: 0
                                    }
                                }));
                                break;
                            case "autoPlayStop":
                                this.inAutoPlay && this.GameAPI.autoPlayStop("manual")
                        }
                    }
                }, {
                    key: "_onGameProperty",
                    value: function(e) {
                        switch (e.prop) {
                            case this.GameAPI.statuses.MUTE:
                                e.value ? this._postMessage("soundMute") : this._postMessage("soundUnmute");
                                break;
                            case this.GameAPI.statuses.GAME_ENABLED:
                                e.value ? this._postMessage("gameEnabled") : this._postMessage("gameDisabled")
                        }
                    }
                }, {
                    key: "_onGameState",
                    value: function(e) {
                        switch (e.state) {
                            case this.GameAPI.states.SPIN_START:
                            case this.GameAPI.states.PLAY_START:
                                this._postMessage("playStart");
                                break;
                            case this.GameAPI.states.SPIN_END:
                            case this.GameAPI.states.PLAY_END:
                                this._postMessage("playEnd")
                        }
                    }
                }, {
                    key: "_onGameEvent",
                    value: function(e) {
                        switch (e.type) {
                            case this.GameAPI.events.LOAD_GAME_COMPLETE:
                                this._postMessage("loadGameComplete");
                                break;
                            case this.GameAPI.events.LOAD_GAME_PROGRESS:
                                this._postMessage("loadGameProgress", {
                                    progress: e.progress
                                });
                                break;
                            case this.GameAPI.events.GAME_READY:
                                this._postMessage("gameReady");
                                break;
                            case this.GameAPI.events.GAME_STARTED:
                                this._postMessage("gameStarted");
                                break;
                            case this.GameAPI.events.WINBAR_CHANGE:
                                this._postMessage("winbarChange", {
                                    amount: e.value.toFixed(2)
                                });
                                break;
                            case this.GameAPI.events.AUTOPLAY_START:
                                this._postMessage("autoPlayStart");
                                break;
                            case this.GameAPI.events.AUTOPLAY_STOP:
                                this._postMessage("autoPlayStop");
                                break;
                            case this.GameAPI.events.PLAY_START:
                            case this.GameAPI.events.SPIN_START:
                                this._postMessage("playStart");
                                break;
                            case this.GameAPI.events.PLAY_END:
                            case this.GameAPI.events.SPIN_END:
                                this._postMessage("playEnd")
                        }
                    }
                }, {
                    key: "_onBarsEvent",
                    value: function(e) {
                        switch (e.type) {
                            case this.BarsAPI.events.MESSAGE_SHOW:
                            case this.BarsAPI.events.POPUP_SHOW:
                                this._postMessage("messageShow");
                                break;
                            case this.BarsAPI.events.MESSAGE_HIDDEN:
                            case this.BarsAPI.events.POPUP_HIDDEN:
                                this._postMessage("messageHide")
                        }
                    }
                }]), s
            }(s(306));
            e.exports = p
        }
    }
]);