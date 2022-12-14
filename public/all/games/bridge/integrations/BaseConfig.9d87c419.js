(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        677: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(28)),
                r = n(a(3)),
                i = n(a(4)),
                o = n(a(6)),
                c = n(a(873)),
                u = n(a(874)),
                l = n(a(870));

            function p(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(a), !0).forEach((function(t) {
                        (0, o.default)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var d = a(230).getURLParams(),
                f = a(878),
                h = a(879),
                m = a(880),
                b = a(881),
                _ = a(882),
                v = a(883),
                y = a(884),
                k = a(885),
                P = a(886),
                w = a(887),
                T = a(888),
                O = a(890),
                R = function() {
                    function e(t, a) {
                        var n = this,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        (0, r.default)(this, e), this._cfg = this._preParse(a), this._operator = t, this._settings = null, this._abTest = i.abTest, this._urlParams = d, this.name = i.name, this._cfg.bridge && this._cfg.bridge.postParams && "object" === (0, s.default)(this._cfg.bridge.postParams) && Object.keys(this._cfg.bridge.postParams).forEach((function(e) {
                            n._urlParams[e] = n._cfg.bridge.postParams[e]
                        }))
                    }
                    return (0, i.default)(e, [{
                        key: "parse",
                        value: function() {
                            this._isRTG = "com.casino.game" === this._cfg.game.namespace, this._isCayetano = "com.cayetano.game" === this._cfg.game.namespace, this._isNSG = "com.nsg.game" === this._cfg.game.namespace, this._isNetent = "com.netent.game" === this._cfg.game.namespace, this._isDemo = this._cfg.server.launchParams && "demo" === this._cfg.server.launchParams.playMode, this._isSlot = "slot" === this._cfg.game.preconfig.gameType, this._isTouch = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), this._isIOS10 = document.querySelector("html").classList.contains("ios10"), this._brand = this._cfg.server.launchParams.custom && this._cfg.server.launchParams.custom.siteId, this._parse()
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return this._cfg[e] || console.warn("[bridge] #BaseConfig: You are trying to access undefined prop ".concat(e, "?!?!?!")), this._cfg[e]
                        }
                    }, {
                        key: "setSettings",
                        value: function(e) {
                            this._settings = e, this._parse()
                        }
                    }, {
                        key: "parseLaunch",
                        value: function(e) {
                            var t = e.launcherConfig;
                            t.debug && (com.casino.debug = {
                                enabled: !0
                            }), this._cfg = {
                                bundle: t.bundle,
                                bridge: h.parseLaunch(t),
                                server: T.parseLaunch(t),
                                game: m.parseLaunch(t),
                                bars: f.parseLaunch(t),
                                analytics: w.parseLaunch(t)
                            }, t && t.bundle && (this._cfg = P.parseLaunch(t, this._cfg), t.params && (this._urlParams = g(g({}, this._urlParams), t.params)))
                        }
                    }, {
                        key: "parseSkinConfig",
                        value: function(e) {
                            var t = e.source,
                                a = e.skin,
                                n = e.originGameId;
                            a && (this._cfg.game.preconfig = g(g({}, this._cfg.game.preconfig), {}, {
                                cdn: this._cfg.game.preconfig.cdn.replace(n, t),
                                skin: a,
                                gameAppId: t,
                                mappedSkin: Boolean(a)
                            }), this._cfg.bars.basePath = this._cfg.bars.basePath.replace(n, t))
                        }
                    }, {
                        key: "_preParse",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return e
                        }
                    }, {
                        key: "_parse",
                        value: function() {
                            this._parseAnalytics(), this._parseRedirects(), this._parseErrors(), this._parseBridge(), this._parseServer(), this._brand = this._cfg.server.launchParams.custom && this._cfg.server.launchParams.custom.siteId, this._isDemo = this._cfg.server.launchParams && "demo" === this._cfg.server.launchParams.playMode, this._parseBars(), this._parseGame(), this._parseGamble(), this._parseWidgets(), this._parseJackpot(), this._parseTournament(), this._parseBonus(), this._parseRegulations(), this._cfg.bundle && this._parseBundle(), this.isRTG || this._override()
                        }
                    }, {
                        key: "_parseAnalytics",
                        value: function() {
                            this._cfg.analytics = w.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseRedirects",
                        value: function() {
                            this._cfg.redirects = {
                                realityCheckHistory: !1,
                                realityCheckExit: !1,
                                lobby: !1,
                                deposit: !1
                            }
                        }
                    }, {
                        key: "_parseErrors",
                        value: function() {
                            this._cfg.errors = O.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseBridge",
                        value: function() {
                            this._cfg.bridge = h.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseServer",
                        value: function() {
                            this._cfg.server = T.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseBars",
                        value: function() {
                            this._cfg.bars = f.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseGame",
                        value: function() {
                            this._cfg.game = m.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseGamble",
                        value: function() {
                            this._cfg.gamble = b.parse(this._cfg, this._settings, this.options), window.com.casino.piePath = this._cfg.gamble && this._cfg.gamble.basePath
                        }
                    }, {
                        key: "_parseWidgets",
                        value: function() {
                            this._cfg.widgets = v.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseJackpot",
                        value: function() {
                            this._cfg.jackpotPanel = y.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseTournament",
                        value: function() {
                            this._cfg.tournament = k.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_parseBonus",
                        value: function() {
                            this._cfg.bonus = _.parse(this._cfg, this._settings, this.options), this._cfg.bonusWheel = _.parseWheel(this._cfg, this._settings, this.options), window.com.casino.bonusPath = this._cfg.bonus && this._cfg.bonus.basePath
                        }
                    }, {
                        key: "_parseRegulations",
                        value: function() {
                            if (this._settings && this._settings.user.country) {
                                this.userSpinDuration = this._settings.user.limits && this._settings.user.limits.spinDuration, this.userSpinDuration && this._setRegulations([{
                                    name: e.regulationTypes.MIN_ROUND_DURATION,
                                    options: {
                                        duration: this.userSpinDuration,
                                        hasSpinProgress: !1
                                    }
                                }]);
                                var t = this._settings.user.country.toUpperCase();
                                this._setRegulations(u.default.create(t))
                            }
                        }
                    }, {
                        key: "_parseBundle",
                        value: function() {
                            this._cfg = P.parse(this._cfg, this._settings, this.options)
                        }
                    }, {
                        key: "_override",
                        value: function() {
                            switch (this._cfg.game.namespace) {
                                case "com.cayetano.game":
                                    this._cfg.bars.skin = "cayetano", this._cfg.bars.options.totalStake = this.isTable, this._cfg.bars.options.paid = this.isTable, this._cfg.bars.options.hasTurboMode = !1, this._settings && (this._cfg.gamble = {
                                        enabled: this._settings.game.hasGambleGame
                                    }, this._cfg.bonus = g(g({}, this._cfg.bonus), {}, {
                                        hasGamble: this._settings.game.hasGambleGame
                                    }));
                                    break;
                                case "com.nsg.game":
                                    this._cfg.bonus.enabled = !1
                            }
                        }
                    }, {
                        key: "_isTrue",
                        value: function(e, t) {
                            return "true" === t[e] || "1" === t[e]
                        }
                    }, {
                        key: "_setRegulations",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            t.length && (this._cfg.bars.options.hasRegulations = !0, t.forEach((function(t) {
                                return e._setRegulation(t)
                            })))
                        }
                    }, {
                        key: "_setRegulation",
                        value: function(e) {
                            switch (e.name) {
                                case "drag":
                                    this._isSlot && (this._cfg.game.preconfig.dragEnabled = !1);
                                    break;
                                case "version":
                                    this._cfg.bars.options.hasVersions = !0;
                                    break;
                                case "help":
                                    this._cfg.bars.options.hasHelp = !0;
                                    break;
                                case "turbo":
                                    this._cfg.bars.options.hasTurboMode = !1;
                                    break;
                                case "min_round_duration":
                                    var t = e.options.duration,
                                        a = void 0 !== e.options.hasSpinProgress ? e.options.hasSpinProgress : this._isSlot;
                                    this.userSpinDuration && this.userSpinDuration > e.options.duration && (t = this.userSpinDuration), this._cfg.bars.options.minRoundDuration = t, this._cfg.bridge.minRoundDuration = t, this._cfg.game.preconfig.minRoundDuration = t, this._cfg.bridge.hasSpinProgress = a, this._cfg.bars.options.hasSpinProgress = a;
                                    break;
                                case "skip_animation":
                                    this._cfg.bridge.hasAnimationSkip = !1, this._cfg.bars.options.hasAnimationSkip = !1;
                                    break;
                                case "turbo_spin":
                                    this._cfg.bars.hasTurboSpin = !1;
                                    break;
                                case "win_rates":
                                    this._cfg.bars.options.hasWinRates = !0;
                                    break;
                                case "wheel_win_only":
                                    this._cfg.jackpotWheel && (this._cfg.jackpotWheel.wheelWinOnly = !0);
                                    break;
                                case "max_multiplier_text":
                                    this._cfg.bars.hasMaxMultiplierText = !1;
                                    break;
                                case "payout_example_text_no_multiline":
                                    this._cfg.bars.options.hasPayoutExampleTextNoMultiline = !0;
                                    break;
                                case "game_session":
                                    this._cfg.bars.options.hasGameSession = !0;
                                    break;
                                case "stop_autoplay":
                                    this._cfg.bars.options.hasAutoplay = !1;
                                    break;
                                case "has_stop":
                                    this._cfg.bars.options.hasStop = !1;
                                    break;
                                case "hide_turbo_tooltip":
                                    this._cfg.bars.options.hasTurboTooltip = !1;
                                    break;
                                case "help_max_multiplier":
                                    this._cfg.bars.hasHelpMaxMultiplier = !1;
                                    break;
                                case "feature_buy_confirmation":
                                    this._cfg.bars.options.hasFeatureBuyConfirmation = !0;
                                    break;
                                case "force_resolution":
                                    this._cfg.game.preconfig.forceResolution = "SD";
                                    break;
                                case "added_anticipation":
                                    this._cfg.game.preconfig.addedAnticipation = !1;
                                    break;
                                case "help_additional_explanation":
                                    this._cfg.bars.options.hasAdditionalExplanation = !0;
                                    break;
                                default:
                                    console.warn("this type of regulation is not handled yet!")
                            }
                        }
                    }, {
                        key: "_setTournament",
                        value: function(e) {
                            var t = e.skin;
                            if (!this._isSlot) return console.warn("[bridge] #BaseConfig: You're trying to enable tournament while not in slot game!!!");
                            if (this._isDemo) return console.warn("[bridge] #BaseConfig: You're trying to enable tournament in demo mode!!!");
                            if (!t) return console.warn("[bridge] #BaseConfig: You're trying to set a tournament config without skin!!!");
                            if (this._isNetent || this._isNSG) return console.warn("[bridge] #BaseConfig: You're trying to set a tournament on netent or nsg!!!");
                            this._cfg.widgets.enabled = !0;
                            var a = "".concat(this._cfg.game.preconfig.cdn, "../../widgets/").concat(t, "/");
                            if ("true" === d.inReview || this._cfg.bridge.inReview) {
                                var n = d.tournamentBranch || "dev";
                                a = "".concat(this._cfg.game.preconfig.cdn, "../../../../../widgets/").concat(t, "/").concat(n, "/dist/")
                            }
                            this._cfg.widgets.tournaments = {
                                enabled: !0,
                                base: a,
                                assets: "assets/",
                                main: "app.min.js",
                                leaderboardUrl: "".concat(this._cfg.bridge.feedUrl, "/tournaments/leaderboard/"),
                                timestamp: this._cfg.bridge.timestamp
                            }
                        }
                    }, {
                        key: "_setJackpot",
                        value: function(e) {
                            var t = e.skin,
                                a = e.hasWheel,
                                n = void 0 === a || a,
                                s = e.wheelWinOnly,
                                r = this._cfg.bridge.timestamp,
                                i = this._cfg.jackpotPanel && this._cfg.jackpotPanel.skipJackpotMapping;
                            if ("network" !== t || i || (t = c.default.networkSkinMapping()), this._cfg.jackpotPanel = {
                                    enabled: !1,
                                    basePath: "".concat(this._cfg.game.preconfig.cdn, "../../widgets/jackpots/base-jackpot/"),
                                    main: "app.js",
                                    styles: "app.css",
                                    timestamp: r,
                                    skin: "base-jackpot",
                                    version: "jackpotNext",
                                    hasShuffleAnimation: !1,
                                    hasWinAnimation: !1,
                                    feedUrl: "".concat(this._cfg.bridge.feedUrl, "/"),
                                    assets: "assets/",
                                    skipJackpotMapping: i
                                }, !this._isSlot) return console.warn("[bridge] #BaseConfig: You're trying to enable jackpot while not in slot game!!!");
                            n = n && !this._isCayetano;
                            var o = "true" === d.inReview || this._cfg.bridge.inReview;
                            if (!t) return console.warn("[bridge] #BaseConfig: You're trying to set a jackpot config without skin!!!");
                            if (this._cfg.game.preconfig.skipJackpotWin = n, this._settings && this._settings.jackpots && this._settings.jackpots.jackpotId) {
                                this._cfg.widgets.enabled = !0;
                                var u = n ? "WHEEL" : "GAME",
                                    l = n && !s ? t : "base-wheel",
                                    p = "".concat(this._cfg.game.preconfig.cdn, "../../widgets/jackpots/").concat(t, "/"),
                                    g = "games/scenes/jackpot-wheels/".concat(l, "/");
                                if (o) {
                                    var f = d.jackpotBranch || "dev",
                                        h = d.jackpotWheelBranch || "dev";
                                    p = "".concat(this._cfg.game.preconfig.cdn, "../../../../../widgets/jackpots/").concat(t, "/").concat(f, "/dist/"), g = "../../../games/scenes/jackpot-wheels/".concat(l, "/").concat(h, "/dist/")
                                }
                                this._cfg.jackpotPanel = {
                                    enabled: !0,
                                    basePath: p,
                                    main: "app.js",
                                    styles: "app.css",
                                    timestamp: r,
                                    skin: t,
                                    skinVersion: this._settings.jackpots.version,
                                    version: "jackpotNext",
                                    hasShuffleAnimation: !n,
                                    hasWinAnimation: !n,
                                    feedUrl: "".concat(this._cfg.bridge.feedUrl, "/"),
                                    assets: "assets/",
                                    winType: u,
                                    skipJackpotMapping: i
                                }, this._cfg.jackpotWheel = {
                                    enabled: n,
                                    basePath: g,
                                    cdn: "".concat(this._cfg.game.preconfig.cdn, "../../../"),
                                    skin: t,
                                    wheelWinOnly: s,
                                    timestamp: r
                                }
                            }
                        }
                    }, {
                        key: "getHelp",
                        value: function(e) {
                            var t, a, n, s = this._settings || {},
                                r = {},
                                i = e.help,
                                o = this._cfg.bridge,
                                c = this._cfg.bars,
                                u = this._cfg.gamble && !0 === this._cfg.gamble.enabled,
                                l = "slot" === this._cfg.game.preconfig.gameType,
                                p = !("com.cayetano.game" === this._cfg.game.namespace),
                                d = e.helpURL,
                                f = e.rtp,
                                h = e.isStateful,
                                m = !1 !== c.options.hasRtp && 0 !== f,
                                b = s.game && s.game.gameType,
                                _ = s.game && ("slot" === b || "scratch" === b) && !1 !== c.hasMaxMultiplierText && (!1 !== c.hasHelpMaxMultiplier ? s.game.maxMultiplierHelp : s.game.maxMultiplier),
                                v = s.game && s.game.pendingRoundDays,
                                y = c.options.hasVersions,
                                k = c.options.hasGameSession,
                                P = c.help && c.help.jackpots && !0 === c.help.jackpots.hasDynamicTimeJackpot,
                                w = c.help && c.help.jackpots && c.help.jackpots.dynamicTimeJackpotValue,
                                T = s.jackpots && !0 === s.jackpots.dynamicAllocation,
                                O = T && s.jackpots.stakeCaps,
                                R = c.options.hasPayoutExampleTextNoMultiline || !1,
                                S = "com.casino.game" === this._cfg.game.namespace && ("blackjack" === this._cfg.game.preconfig.gameType || "roulette" === this._cfg.game.preconfig.gameType),
                                I = c.options.hasFeatureBuy,
                                j = c.options.hasAdditionalExplanation;
                            c.options.hasWinRates && (t = s.game && s.game.maxWinlineHitRate && !isNaN(s.game.maxWinlineHitRate) ? s.game.maxWinlineHitRate : null, a = s.game && s.game.maxMultiplierHitRate && !isNaN(s.game.maxMultiplierHitRate) ? s.game.maxMultiplierHitRate : null, n = m);
                            var A = s.user && s.user.stakes && s.user.stakes.types;
                            if (s.jackpots && s.jackpots.pots && s.jackpots.pots.length) {
                                var U = function(e, t) {
                                    return Boolean(e.find((function(e) {
                                        return e.type === t
                                    })))
                                };
                                r = {
                                    pots: s.jackpots.pots.map((function(e) {
                                        return {
                                            name: e.name,
                                            id: e.id,
                                            seedAmount: e.seedAmount,
                                            seedNextAmount: e.seedNextAmount,
                                            type: e.type
                                        }
                                    })),
                                    hasTimeJackpot: U(s.jackpots.pots, "time"),
                                    hasFixedJackpot: U(s.jackpots.pots, "fixed"),
                                    hasCeilingJackpot: U(s.jackpots.pots, "ceiling"),
                                    hasProgressiveJackpot: U(s.jackpots.pots, "progressive"),
                                    hasDynamicTimeJackpot: T || P,
                                    dynamicTimeJackpotValue: O || w,
                                    wheelWinOnly: this._cfg.jackpotWheel && this._cfg.jackpotWheel.wheelWinOnly
                                }
                            }
                            var E = i && void 0 !== i.hasAutoplaySettings ? e.hasAutoplaySettings : !c.options.autoPlayFields || c.options.autoPlayFields && c.options.autoPlayFields.singleWinLimit || c.options.autoPlayFields && c.options.autoPlayFields.stopOnJackpot || c.options.autoPlayFields && c.options.autoPlayFields.stopOnBonus,
                                N = {
                                    hasAutoplay: i && void 0 !== i.hasAutoplay ? i.hasAutoplay : !1 !== e.hasAutoplay,
                                    hasStake: i && void 0 !== i.hasStake ? i.hasStake : !1 !== e.hasStake,
                                    hasGamble: i && void 0 !== i.hasGamble && !0 === u ? i.hasGamble : u,
                                    gambleType: this._cfg.gamble && this._cfg.gamble.type,
                                    hasTurboSpin: i && void 0 !== i.hasTurboSpin ? i.hasTurboSpin : !1 !== e.hasTurboSpin,
                                    hasJackpotPanel: i && void 0 !== i.hasJackpotPanel ? i.hasJackpotPanel : this._cfg.bars.options.hasJackpotPanel,
                                    hasInternalJackpot: i && void 0 !== i.hasInternalJackpot ? i.hasInternalJackpot : !0 === e.hasInternalJackpot,
                                    hasFreeSpins: i && void 0 !== i.hasFreeSpins ? i.hasFreeSpins : !0 === e.hasFreeSpins,
                                    hasGameSession: i && void 0 !== i.hasGameSession ? i.hasGameSession : !0 === this._cfg.bars.options.hasGameSession
                                };
                            (!1 === o.hasAnimationSkip || !1 === c.hasTurboSpin || o.minRoundDuration > 0) && (N.hasTurboSpin = !1);
                            var C = ["CA"],
                                D = this.settings && this.settings.user && "string" == typeof this.settings.user.country && this.settings.user.country.split("-")[0],
                                M = {
                                    game: s.game && s.game.version,
                                    launcher: C.includes(D) ? null : s.launcher && s.launcher.version || s.platform && s.platform.version,
                                    manufacturer: C.includes(D)
                                };
                            return g(g({}, N), {}, {
                                hasAutoplaySettings: E,
                                jackpots: r,
                                hasSlotText: l,
                                hasGenericText: p,
                                helpURL: d,
                                rtp: f,
                                hasRtp: m,
                                maxMultiplier: _,
                                gameType: b,
                                pendingRoundDays: v,
                                versions: M,
                                hasVersions: y,
                                isStateful: h,
                                maxWinlineHitRate: t,
                                maxMultiplierHitRate: a,
                                avgPayoutRate: n,
                                hasPayoutExampleTextNoMultiline: R,
                                hasGameSession: k,
                                hasFeatureBuy: I,
                                rtpTable: S,
                                stakeSteps: A,
                                hasAdditionalExplanation: j
                            })
                        }
                    }, {
                        key: "getPreloaderOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this._settings && this._settings.user && this.settings.user.country,
                                a = {
                                    client: e.client,
                                    powered: e.powered,
                                    studio: e.studio,
                                    publisher: e.publisher,
                                    collaborator: e.collaborator
                                },
                                n = {
                                    background: e.background || "#000000"
                                };
                            switch (t) {
                                case "GR":
                                    return this._getEvoPreloaderOptions({
                                        values: a,
                                        styles: n
                                    });
                                default:
                                    return {
                                        values: a,
                                        styles: n
                                    }
                            }
                        }
                    }, {
                        key: "_getEvoPreloaderOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return "netent" === e.values.client && (e.values.collaborator = "netent"), "fashiontv" !== e.values.powered && (e.values.powered = null), e.values.client = "red-tiger", e.additionalOptions = {
                                bottomText: "Powered by Evolution"
                            }, e
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return {
                                namespace: this._cfg.game.namespace,
                                isDemo: this.isDemo,
                                isSlot: this.isSlot,
                                isTable: this.isTable,
                                isRTG: this.isRTG,
                                isCayetano: this.isCayetano,
                                isNetent: this.isNetent,
                                isNsg: this.isNsg,
                                isIOS10: this._isIOS10,
                                urlParams: this._urlParams,
                                abTest: this._abTest,
                                isDevEnvironment: this.isDevEnvironment
                            }
                        }
                    }, {
                        key: "settings",
                        get: function() {
                            return this._settings
                        }
                    }, {
                        key: "isDemo",
                        get: function() {
                            return this._isDemo
                        }
                    }, {
                        key: "isRTG",
                        get: function() {
                            return this._isRTG
                        }
                    }, {
                        key: "isCayetano",
                        get: function() {
                            return this._isCayetano
                        }
                    }, {
                        key: "isNsg",
                        get: function() {
                            return this._isNSG
                        }
                    }, {
                        key: "isNetent",
                        get: function() {
                            return this._isNetent
                        }
                    }, {
                        key: "isSlot",
                        get: function() {
                            return this._isSlot
                        }
                    }, {
                        key: "isBlackJack",
                        get: function() {
                            return "blackjack" === this._cfg.game.preconfig.gameType
                        }
                    }, {
                        key: "isRoulette",
                        get: function() {
                            return "roulette" === this._cfg.game.preconfig.gameType
                        }
                    }, {
                        key: "isBaccarat",
                        get: function() {
                            return "baccarat" === this._cfg.game.preconfig.gameType
                        }
                    }, {
                        key: "isTable",
                        get: function() {
                            return "blackjack" === this._cfg.game.preconfig.gameType || "roulette" === this._cfg.game.preconfig.gameType || "threecardbrag" === this._cfg.game.preconfig.gameType || "baccarat" === this._cfg.game.preconfig.gameType
                        }
                    }, {
                        key: "isScratch",
                        get: function() {
                            return "scratch" === this._cfg.game.preconfig.gameType
                        }
                    }, {
                        key: "isDevEnvironment",
                        get: function() {
                            return com.casino && void 0 !== com.casino.debug
                        }
                    }, {
                        key: "raw",
                        get: function() {
                            return this._cfg
                        }
                    }]), e
                }();
            (0, o.default)(R, "regulationTypes", l.default), e.exports = R
        },
        870: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                DRAG: "drag",
                VERSION: "version",
                HELP: "help",
                TURBO: "turbo",
                MIN_ROUND_DURATION: "min_round_duration",
                SKIP_ANIMATION: "skip_animation",
                TURBO_SPIN: "turbo_spin",
                WIN_RATES: "win_rates",
                WHEEL_WIN_ONLY: "wheel_win_only",
                MAX_MULTIPLIER_TEXT: "max_multiplier_text",
                PAYOUT_EXAMPLE_TEXT_NO_MULTILINE: "payout_example_text_no_multiline",
                GAME_SESSION: "game_session",
                STOP_AUTOPLAY: "stop_autoplay",
                HAS_STOP: "has_stop",
                HIDE_TURBO_TOOLTIP: "hide_turbo_tooltip",
                HELP_MAX_MULTIPLIER: "help_max_multiplier",
                FEATURE_BUY_COMFIRMATION: "feature_buy_confirmation",
                FORCE_RESOLUTION: "force_resolution",
                ADDED_ANTICIPATION: "added_anticipation",
                HELP_ADDITIONAL_EXPLANATION: "help_additional_explanation"
            }
        },
        872: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = n(a(870)),
                r = [{
                    countryCode: ["CH"],
                    regulations: [{
                        name: s.default.VERSION
                    }]
                }, {
                    countryCode: ["US"],
                    regulations: [{
                        name: s.default.DRAG
                    }, {
                        name: s.default.MAX_MULTIPLIER_TEXT
                    }, {
                        name: s.default.PAYOUT_EXAMPLE_TEXT_NO_MULTILINE
                    }]
                }, {
                    countryCode: ["SE", "DK"],
                    regulations: [{
                        name: s.default.HELP
                    }, {
                        name: s.default.TURBO
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 3
                        }
                    }]
                }, {
                    countryCode: ["GR"],
                    regulations: [{
                        name: s.default.HELP
                    }, {
                        name: s.default.TURBO
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 2
                        }
                    }, {
                        name: s.default.MAX_MULTIPLIER_TEXT
                    }]
                }, {
                    countryCode: ["ES"],
                    regulations: [{
                        name: s.default.HELP
                    }, {
                        name: s.default.TURBO
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 3
                        }
                    }, {
                        name: s.default.WHEEL_WIN_ONLY
                    }]
                }, {
                    countryCode: ["UK", "GB"],
                    regulations: [{
                        name: s.default.TURBO
                    }, {
                        name: s.default.TURBO_SPIN
                    }, {
                        name: s.default.SKIP_ANIMATION
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 2.5
                        }
                    }, {
                        name: s.default.STOP_AUTOPLAY
                    }]
                }, {
                    countryCode: ["CA"],
                    regulations: [{
                        name: s.default.DRAG
                    }, {
                        name: s.default.MAX_MULTIPLIER_TEXT
                    }, {
                        name: s.default.VERSION
                    }]
                }, {
                    countryCode: ["NL"],
                    regulations: [{
                        name: s.default.TURBO_SPIN
                    }]
                }, {
                    countryCode: ["CO"],
                    regulations: [{
                        name: s.default.TURBO
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 3
                        }
                    }]
                }, {
                    countryCode: ["LT"],
                    regulations: [{
                        name: s.default.TURBO
                    }, {
                        name: s.default.TURBO_SPIN
                    }, {
                        name: s.default.SKIP_ANIMATION
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 1
                        }
                    }, {
                        name: s.default.STOP_AUTOPLAY
                    }]
                }, {
                    countryCode: ["PT"],
                    regulations: [{
                        name: s.default.TURBO
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 3
                        }
                    }]
                }, {
                    countryCode: ["CZ"],
                    regulations: [{
                        name: s.default.TURBO
                    }, {
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 2
                        }
                    }, {
                        name: s.default.HELP_MAX_MULTIPLIER
                    }]
                }];
            t.default = r
        },
        873: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = a(0),
                o = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "networkSkinMapping",
                        value: function() {
                            var e = new Date,
                                t = "2020-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
                            return i(t).isBetween("2020-02-03", "2020-02-16", [], []) ? "networkValentine" : i(t).isBetween("2020-03-10", "2020-03-21", [], []) ? "networkStPatrick" : i(t).isBetween("2020-04-07", "2020-04-20", [], []) ? "networkEaster" : i(t).isBetween("2020-06-01", "2020-08-31", [], []) ? "networkSummer" : i(t).isBetween("2020-10-17", "2020-10-31", [], []) ? "networkHalloween" : i(t).isBetween("2020-11-30", "2020-12-18", [], []) ? "networkFifaQatar" : i(t).isBetween("2020-12-19", "2020-12-31", [], []) || i(t).isBetween("2020-01-01", "2020-01-08", [], []) ? "networkChristmas" : "network"
                        }
                    }]), e
                }();
            e.exports = o
        },
        874: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = n(a(53)),
                r = n(a(72)),
                i = n(a(3)),
                o = n(a(4)),
                c = n(a(875)),
                u = n(a(877)),
                l = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                        key: "create",
                        value: function(e) {
                            var t = "string" == typeof e ? (0, s.default)(e.split("-")) : ["", ""],
                                a = (0, r.default)(t, 2),
                                n = a[0],
                                i = a[1];
                            return i ? (0, c.default)(n, i) : (0, u.default)(n)
                        }
                    }]), e
                }();
            t.default = l
        },
        875: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = n(a(53)),
                r = n(a(872)),
                i = n(a(876)),
                o = function(e, t) {
                    var a = i.default.find((function(a) {
                            return a.regionCode === t && a.countryCode === e
                        })),
                        n = r.default.find((function(t) {
                            return t.countryCode.includes(e)
                        })),
                        o = a ? a.regulations : [],
                        c = n ? n.regulations : [];
                    return [].concat((0, s.default)(c), (0, s.default)(o))
                };
            t.default = o
        },
        876: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = n(a(870)),
                r = [{
                    countryCode: "US",
                    regionCode: "PA",
                    regulations: [{
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 2.5
                        }
                    }, {
                        name: s.default.TURBO
                    }]
                }, {
                    countryCode: "CA",
                    regionCode: "LQ",
                    regulations: [{
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 3
                        }
                    }, {
                        name: s.default.VERSION
                    }, {
                        name: s.default.TURBO
                    }]
                }, {
                    countryCode: "CA",
                    regionCode: "ON",
                    regulations: [{
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 2.5
                        }
                    }, {
                        name: s.default.TURBO
                    }, {
                        name: s.default.TURBO_SPIN
                    }, {
                        name: s.default.SKIP_ANIMATION
                    }]
                }, {
                    countryCode: "CA",
                    regionCode: "BC",
                    regulations: [{
                        name: s.default.MIN_ROUND_DURATION,
                        options: {
                            duration: 3
                        }
                    }, {
                        name: s.default.TURBO
                    }]
                }];
            t.default = r
        },
        877: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = n(a(53)),
                r = n(a(872)),
                i = function(e) {
                    var t = r.default.find((function(t) {
                            return t.countryCode.includes(e)
                        })),
                        a = t ? t.regulations : [];
                    return (0, s.default)(a)
                };
            t.default = i
        },
        878: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = a(354),
                o = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parseLaunch",
                        value: function(e) {
                            return {
                                basePath: "".concat(e.cdn, "bars-next/"),
                                assetsPath: "",
                                options: {}
                            }
                        }
                    }, {
                        key: "parse",
                        value: function(e, t, a) {
                            e.bars.namespace = e.game.namespace, e.bars.timestamp = e.bridge.timestamp, e.bars.options.hasTurboMode = Boolean(e.bars.options.hasTurboMode), e.bars.gameType = e.game.preconfig.gameType, e.bars.options.hasExtras = i.hasExtras, e.bars.options.totalStake = a.isTable, a.isRTG && (e.bars.options.hasPreloader = !0), void 0 === e.bars.options.hasSlideUp && (e.bars.options.hasSlideUp = !0), (a.urlParams.inApp || a.urlParams.inapp) && (e.bars.options.inApp = !0), e.bars.options.inApp && (e.bars.options.hasSlideUp = !1, e.bars.options.fullScreen = !1), e.bars.assetsPath || (e.bars.assetsPath = "".concat(e.game.preconfig.cdn, "../../assets/")), e.bars.provider = e.bridge.provider;
                            var n = {};
                            if (t && t.user && (n = {
                                    sessionCode: t.user.aamsSessionId,
                                    participationCode: t.user.aamsParticipationId,
                                    balanceCash: t.user.balance.cash,
                                    balanceSession: t.user.balance.session,
                                    maxDeposit: t.user.maxDeposit,
                                    depositedAmount: t.user.depositedAmount
                                }, e.bridge.providerParams && !0 === e.bridge.providerParams.hasSessionBalance && (e.bars.isLegacy = !0), void 0 !== t.user.autoplay && (e.bars.options.autoplay = t.user.autoplay), e.gamble && e.gamble.enabled)) {
                                ["kindred", "leovegas", "skillonnet", "mrgreen", "casinobet", "rank"].includes(e.bridge.operator) && !a.abTest.generate({
                                    chance: 50
                                }) && (console.log("[bridge] - AB tests for gamble activated"), e.bars.options.hasGambleNext = !0)
                            }
                            switch (t && t.game && (e.bars.options.hasFeatureBuy = Boolean(t.game.hasFeatureBuy)), e.bars.session = n, e.game.preconfig.gameAppId) {
                                case "NFTMegaWays":
                                    e.bars.skin = "nftmegaways"
                            }
                            return e.bars
                        }
                    }]), e
                }();
            e.exports = o
        },
        879: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(6)),
                r = n(a(3)),
                i = n(a(4));

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var c = function() {
                function e() {
                    (0, r.default)(this, e)
                }
                return (0, i.default)(e, null, [{
                    key: "parseLaunch",
                    value: function(e) {
                        return {
                            operator: e.operator,
                            provider: e.provider,
                            timestamp: "?t=".concat(e.cacheBust),
                            feedUrl: e.feed,
                            cdn: e.cdn,
                            gameProvider: e.gameProvider,
                            realityCheck: {}
                        }
                    }
                }, {
                    key: "parse",
                    value: function(e, t, a) {
                        var n = e.bridge.realityCheck || {},
                            r = a.urlParams.lobbyURL || a.urlParams.lobbyUrl || a.urlParams.lobbyurl || a.urlParams.realityCheckLobbyUrl,
                            i = a.urlParams.depositUrl || a.urlParams.depositURL || a.urlParams.depositurl,
                            c = a.urlParams.historyUrl || a.urlParams.historyURL || a.urlParams.historyurl || a.urlParams.realityCheckHistoryUrl;
                        return e.bridge.hasSkip = !0, e.bridge.hasAnimationSkip = !0, e.bridge.hasErrorTracking = !(e.bundle || "true" !== a.urlParams.hasErrorTracking && a.isDevEnvironment), e.bridge.realityCheck = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(a), !0).forEach((function(t) {
                                    (0, s.default)(e, t, a[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                                }))
                            }
                            return e
                        }({
                            minutes: parseFloat(a.urlParams.realityCheckMinutes) || 0,
                            elapsedMinutes: parseFloat(a.urlParams.realityCheckElapsedMinutes) || 0,
                            lobbyUrl: r,
                            depositUrl: i,
                            historyUrl: c
                        }, n), e.bridge.userActivity = {
                            enabled: !1,
                            minutes: 20
                        }, e.bridge.userActivity = {
                            enabled: !1,
                            minutes: 20
                        }, e.bridge
                    }
                }]), e
            }();
            e.exports = c
        },
        880: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parseLaunch",
                        value: function(t) {
                            var a = e.getGameDirectory({
                                type: t.gameType,
                                provider: t.gameProvider
                            });
                            return {
                                namespace: "com.".concat(t.gameProvider, ".game"),
                                preconfig: {
                                    cdn: "".concat(t.cdn).concat(a, "/").concat(t.gameId, "/"),
                                    defaultLang: t.defaultLanguage,
                                    disclaimer: t.disclaimer,
                                    gameType: t.gameType,
                                    timestamp: "".concat(t.cacheBust, "1")
                                }
                            }
                        }
                    }, {
                        key: "parse",
                        value: function(e, t, a) {
                            var n = e.bridge.timestamp;
                            return e.game.preconfig.hasRtp = e.bars.options.hasRtp, e.game.preconfig.increaseSpeedByPercent = 0, e.game.preconfig.skipJackpotWin = !0, e.game.preconfig.timestamp = "".concat(n.substr(3), "1"), e.bars.options.hasPreloader && (e.game.preconfig.splash = !1, delete e.game.preconfig.disclaimer), a.isSlot && a.isRTG && !e.game.preconfig.mappedSkin && delete e.game.preconfig.skin, e.game
                        }
                    }, {
                        key: "getGameDirectory",
                        value: function(e) {
                            var t = e.type,
                                a = e.provider,
                                n = "slot" === t ? "slots" : "table";
                            return "casino" !== a && (n = "slots-".concat(a)), n
                        }
                    }]), e
                }();
            e.exports = i
        },
        881: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parse",
                        value: function(e, t, a) {
                            if (t) {
                                if (a.isRTG && (!e.gamble || !e.gamble.type)) {
                                    e.gamble = {
                                        type: "pie",
                                        enabled: t.game.hasGambleGame,
                                        basePath: "".concat(e.game.preconfig.cdn, "../../gambles/").concat("pie", "/")
                                    }
                                }
                                a.isRTG && !0 === e.gamble.enabled && (e.gamble.enabled = !a.isIOS10)
                            }
                            return e.gamble
                        }
                    }]), e
                }();
            e.exports = i
        },
        882: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = n(a(6));

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach((function(t) {
                        (0, i.default)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var u = function() {
                function e() {
                    (0, s.default)(this, e)
                }
                return (0, r.default)(e, null, [{
                    key: "parse",
                    value: function(t, a, n) {
                        var s = void 0 !== t.bridge.operator && !e.BONUS_BLACK_LIST.includes(t.bridge.operator) && void 0 !== t.bridge.provider && !e.PROVIDERS_BONUS_BLACK_LIST.includes(t.bridge.provider),
                            r = !n.isDemo && s && !n.isScratch && !n.isNsg && !(n.isRTG && n.isTable);
                        return t.bridge.inReview || (t.bonus = {
                            enabled: r,
                            provider: t.bridge.provider,
                            basePath: "".concat(t.game.preconfig.cdn, "../../widgets/bonus/"),
                            cdnPath: "".concat(t.game.preconfig.cdn, "../../../"),
                            assetsPath: "".concat(t.game.preconfig.cdn, "../../assets/")
                        }, r && (t.widgets.enabled = !0)), t.bonus = c(c({}, t.bonus), {}, {
                            hasTurboMode: t.bars.options.hasTurboMode,
                            hasGamble: t.gamble && t.gamble.enabled,
                            isBlackJack: n.isBlackJack,
                            timestamp: t.bridge.timestamp,
                            gameId: t.server.launchParams.gameId,
                            hasBonusLinks: Boolean(!0 === t.bars.options.hasBonusLinks),
                            hasFeatureBuy: t.bars.options.hasFeatureBuy
                        }), t.bonus
                    }
                }, {
                    key: "parseWheel",
                    value: function(e) {
                        return e.bonusWheel || (e.bonusWheel = {
                            cdn: e.game.preconfig.cdn,
                            basePath: "../../scenes/bonus-wheels/bonus-wheel/",
                            skin: "bonus-wheel",
                            enabled: !0
                        }), e.bonusWheel
                    }
                }]), e
            }();
            (0, i.default)(u, "BONUS_BLACK_LIST", ["approv", "slotsmillion", "coingaming", "soft4you", "parimatch", "betlive", "maxentertainment", "williamhill-es", "cyberplay", "caliente", "nektan", "casino888", "sbtech", "grandcasinobaden", "betway", "microgaming", "ogs", "ogs-alderney", "ogs-mga", "stars", "starsqa", "stars-pa", "queenmaker1", "queenmaker2", "queenmaker3", "bingo888", "bayton", "veikkaus", "veikkaus-staging", "dazzletag", "invicta", "win2day", "groove-mga", "partouche", "hurrah", "mfl-as", "b4725-mga", "b365", "b365-gi"]), (0, i.default)(u, "PROVIDERS_BONUS_BLACK_LIST", ["evolution"]), e.exports = u
        },
        883: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parse",
                        value: function(e) {
                            return e.widgets || (e.widgets = {
                                enabled: !1,
                                enablePanel: !1,
                                panel: {
                                    base: "".concat(e.game.preconfig.cdn, "../../widgets/panel/"),
                                    main: "app.min.js"
                                },
                                tournaments: {
                                    base: "".concat(e.game.preconfig.cdn, "../../widgets/tournaments/"),
                                    assets: "assets/",
                                    main: "app.min.js",
                                    leaderboardUrl: "".concat(e.bridge.feedUrl, "/tournaments/leaderboard/")
                                },
                                view: {
                                    backgroundColor: 19860
                                },
                                splash: {
                                    assets: "assets/",
                                    lang: "en",
                                    waitTime: 0
                                },
                                timestamp: e.bridge.timestamp
                            }), e.widgets.timestamp || (e.widgets.timestamp = e.bridge.timestamp), e.widgets && e.widgets.portrait && e.widgets.portrait.topBarHeight && (e.widgets.portrait.topBarHeight = 41), e.bridge.inReview || (e.widgets.enabled = !1), e.widgets
                        }
                    }]), e
                }();
            e.exports = i
        },
        884: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parse",
                        value: function(e) {
                            var t = e.bridge.timestamp;
                            return e.jackpotPanel || (e.jackpotPanel = {
                                enabled: !1,
                                basePath: "".concat(e.game.preconfig.cdn, "../../widgets/jackpots/base-jackpot/"),
                                main: "app.js",
                                styles: "app.css",
                                timestamp: t,
                                skin: "base-jackpot",
                                version: "jackpotNext",
                                hasShuffleAnimation: !1,
                                hasWinAnimation: !1,
                                feedUrl: "".concat(e.bridge.feedUrl, "/"),
                                assets: "assets/"
                            }), e.jackpotPanel.feedUrl || (e.jackpotPanel.feedUrl = "".concat(e.bridge.feedUrl, "/")), e.jackpotPanel.timestamp || (e.jackpotPanel.timestamp = t), e.jackpotPanel.feedInterval = 30, e.jackpotPanel
                        }
                    }, {
                        key: "parseWheel",
                        value: function(e) {
                            var t = e.bridge.timestamp;
                            return e.jackpotWheel = {
                                enabled: !1,
                                basePath: "games/scenes/jackpot-wheels/base-wheel/",
                                cdn: "".concat(e.game.preconfig.cdn, "../../../"),
                                skin: "base-wheel",
                                wheelWinOnly: !0,
                                timestamp: t
                            }, e.jackpotWheel
                        }
                    }]), e
                }();
            e.exports = i
        },
        885: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parse",
                        value: function(e) {
                            var t = e.bridge.timestamp,
                                a = e.server.rgsApi;
                            return e.tournament || (e.tournament = {
                                enabled: !1,
                                basePath: "".concat(e.game.preconfig.cdn, "../../widgets/base-tournament/"),
                                main: "app.min.js",
                                styles: "app.min.css",
                                timestamp: t,
                                skin: "base-tournament",
                                leaderboardUrl: "".concat(a, "tournaments/leaderboard/")
                            }), e.tournament.timestamp || (e.tournament.timestamp = t), e.tournament
                        }
                    }]), e
                }();
            e.exports = i
        },
        886: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = n(a(6)),
                o = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parseLaunch",
                        value: function(e, t) {
                            return this.omnibarPath = e.omnibarPath, this.bundlerGameId = e.bundlerGameId ? e.bundlerGameId : null, t
                        }
                    }, {
                        key: "parse",
                        value: function(t, a, n) {
                            var s = e.CDN_MAP[n.urlParams.environment || "production"],
                                r = "".concat(s, "games/assets/"),
                                i = t.jackpotPanel,
                                o = t.jackpotWheel,
                                c = t.gamble,
                                u = t.bonus,
                                l = t.widgets,
                                p = "stars" === t.bridge.provider ? "".concat(t.bridge.cdn, "gameloader") : "".concat(t.bridge.cdn, "core"),
                                g = this.bundlerGameId ? "".concat(t.bridge.cdn, "games.").concat(this.bundlerGameId) : "".concat(t.bridge.cdn, "games.").concat(t.server.launchParams.gameId),
                                d = t.server.launchParams.userData.lang;
                            if (d ? ["zh-TW", "es-PE", "pt-BR"].includes(d) || (d = d.substr(0, 2)) : (console.warn("[bridge] #BundleParser: unsupported lang ".concat(d, ", falling back to 'en'!")), d = "en"), t.bars.basePath = n.urlParams.barsURL || "".concat(p, "/games.bars-next/"), t.bars.assetsPath = r, t.game.preconfig.cdn = "".concat(g, ".").concat(d, "/"), t.game.preconfig.forceResolution = "MD", t.game.preconfig.gameAppId = t.server.launchParams.gameId, t.game.preconfig.isBundleEnv = !0, n.isCayetano) {
                                var f = this.omnibarPath || "".concat(p, "/games.omnibar/");
                                t.game.preconfig.cdn = "".concat(g, "/"), t.game.preconfig.dependencies = {
                                    game: "".concat(g, "/"),
                                    lang: "".concat(g, ".").concat(d, "/"),
                                    omnibar: f
                                }
                            }
                            if (t.widgets) {
                                l.panel.base = "".concat(p, "/games.widgets.panel/");
                                var h = t.widgets.tournaments;
                                if (h) {
                                    var m = h.base.match(/widgets\/(.+)\//);
                                    m && m[1] && (h.base = "".concat(p, "/games.widgets.").concat(m[1], "/"))
                                }
                            }
                            if (o) {
                                var b = !n.isCayetano && !o.wheelWinOnly ? o.skin : "base-wheel";
                                o.basePath = "".concat(p, "/games.scenes.jackpot-wheels.").concat(b, "/"), o.cdn = "".concat(g, "/")
                            }
                            return i && (i.basePath = "".concat(p, "/games.widgets.jackpots.").concat(i.skin, "/")), u && (u.basePath = "".concat(p, "/games.widgets.bonus/"), u.assetsPath = r, window.com.casino.bonusPath = u.basePath), c && (c.basePath = "".concat(p, "/games.gambles.pie/"), window.com.casino.piePath = c.basePath), t
                        }
                    }]), e
                }();
            (0, i.default)(o, "defaultLang", "en"), (0, i.default)(o, "CDN_MAP", {
                dev: "https://cdn.dopamine-gaming.com/dev/",
                production: "http://51.89.41.151:22777/all/"
            }), e.exports = o
        },
        887: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(6)),
                r = n(a(3)),
                i = n(a(4));

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var c = function() {
                function e() {
                    (0, r.default)(this, e)
                }
                return (0, i.default)(e, null, [{
                    key: "parseLaunch",
                    value: function(e) {
                        return {
                            gaTrackingIds: e.gaTrackingIds
                        }
                    }
                }, {
                    key: "parse",
                    value: function(e) {
                        return e.analytics = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(a), !0).forEach((function(t) {
                                    (0, s.default)(e, t, a[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                                }))
                            }
                            return e
                        }({
                            gaTrackingIds: [],
                            sendUsageData: !0,
                            isFake: !1
                        }, e.analytics), e.analytics
                    }
                }]), e
            }();
            e.exports = c
        },
        888: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = a(229),
                o = a(889),
                c = !1,
                u = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parseLaunch",
                        value: function(e) {
                            return {
                                rgsApi: e.platform,
                                launchParams: {
                                    gameId: e.gameId,
                                    lang: e.lang
                                }
                            }
                        }
                    }, {
                        key: "parse",
                        value: function(e) {
                            return c || (c = !0, e.server.launchParams.userData = i(e.server.launchParams.userData, {
                                fingerprint: o()
                            })), e.server
                        }
                    }]), e
                }();
            e.exports = u
        },
        889: function(e, t, a) {
            "use strict";
            var n = a(2)(a(53)),
                s = a(895),
                r = s.v4,
                i = s.v1,
                o = a(25),
                c = !1,
                u = [{
                    "info-texts": r()
                }, {
                    reels: r()
                }, {
                    "timer._": r()
                }],
                l = o.getBrowser().name;
            e.exports = function() {
                var e = localStorage.getItem("#rtg_t@ken::user_f1ng@rpr1nt"),
                    t = localStorage.getItem("::_sounds.");
                if (t) {
                    var a = o.decrypt("::_sounds.", t);
                    t = a.includes("=#") ? a : t
                } else t = r();
                if (e && (t = e, localStorage.removeItem("#rtg_t@ken::user_f1ng@rpr1nt")), t.includes("=#")) {
                    for (var s = t.split("=#"), p = !0, g = 0; g < u.length; g++) {
                        var d = Object.keys(u[g])[0],
                            f = localStorage.getItem(d) || r();
                        u[g][d] = f, f !== s[g + 2] && (p = !1)
                    }
                    t = s[1] === l && p ? s[0] : r()
                }
                var h = "".concat(t).concat("=#").concat(l).concat("=#").concat(u.reduce((function(e, t) {
                    return [].concat((0, n.default)(e), [Object.values(t).map((function(e) {
                        return e
                    }))])
                }), []).join("=#"));
                if (localStorage.getItem("::_sounds.") || localStorage.setItem("::_sounds.", o.crypt("::_sounds.", h)), u.forEach((function(e) {
                        var t = Object.keys(e)[0],
                            a = e[t];
                        localStorage.getItem(t) || localStorage.setItem(t, a)
                    })), !c) {
                    var m = i() + r();
                    document.cookie = "userId=".concat(m), c = !0
                }
                return t
            }
        },
        890: function(e, t, a) {
            "use strict";
            var n = a(2),
                s = n(a(3)),
                r = n(a(4)),
                i = n(a(6)),
                o = function() {
                    function e() {
                        (0, s.default)(this, e)
                    }
                    return (0, r.default)(e, null, [{
                        key: "parse",
                        value: function(t, a, n) {
                            return t.errors = {
                                connection: {
                                    nonRecoverable: Boolean(n.isNetent) || Boolean(n.isRTG && n.isTable)
                                },
                                list: e.errors.map((function(e) {
                                    return {
                                        match: e,
                                        type: "operator",
                                        isSilent: !0
                                    }
                                }))
                            }, t.errors
                        }
                    }]), e
                }();
            (0, i.default)(o, "errors", ["TypeError: Cannot read property 'wrapperResponse' of undefined", "Cannot read property 'wrapperResponse' of undefined", 'Cannot read property "wrapperResponse" of undefined', "vanillaApp is not defined", "ReferenceError: Can't find variable: dla", "Can't find variable: dla", "ReferenceError: Can't find variable: dla", "Can't find variable: dla", "Uncaught ReferenceError: dla is not defined", "dla is not defined", "Uncaught ReferenceError: require is not defined", "ReferenceError: require is not defined", "Android wrapper script already exist", "Uncaught ReferenceError: jBone is not defined", "jBone is not defined", "TypeError: Cannot read property 'h' of undefined", "Cannot read property 'h' of undefined", "Uncaught InvalidStateError: Failed to read the 'responseText' property from 'XMLHttpRequest'", "Failed to read the 'responseText' property from 'XMLHttpRequest'", "news_page", "The current window does not have permission to navigate the target frame to 'https://www.volcanobet.me//casino'", "https://m.volcanobet.me//casino", "ReferenceError: Can't find variable: AppSwitched", "Can't find variable: AppSwitched", "TypeError: undefined is not an object (evaluating 'document.getElementsByClassName('gotya1')[0].value')", "TypeError: undefined is not an object (evaluating 'document.getElementsByClassName('gotya2')[0].value')", "ReferenceError: Can't find variable: UserInfo", "ReferenceError: Can't find variable: PlatformJWTManager", "Uncaught ReferenceError: AppCallbackInterface is not defined", "TypeError: undefined is not an object (evaluating 'window.ucbrowser.smWeather.changecity')", "window.ucbrowser.smWeather.changecity", "ReferenceError: Can't find variable: AppInterface", "ReferenceError: Can't find variable: onGetInfoComplete_v2", "Uncaught ReferenceError: x5onSkinSwitch is not defined", "TypeError: undefined is not an object (evaluating 'SogouMse.videoPauseTool.pauseVideo')", "SogouMse.videoPauseTool.pauseVideo", "ReferenceError: Can't find variable: AppRestored", "TypeError: null is not an object (evaluating 'window.mttLongPressVar.tagName')", "window.mttLongPressVar.tagName", 'JSON Parse error: Unexpected identifier "object', "t.unbind is not a function", "Cannot read property 'gameResized' of null", "this.commonUI is null", "angular is not defined", "Could not find a theme for operator defaultTheme, reverting to default theme", "Get source language error: received empty value or error callback from getPageLanguage", "window.realWalletUpdate is not a function.", "window.bonusWalletUpdate is not a function", "TypeError: Failed to fetch", "TypeError: NetworkError when attempting to fetch resource.", "TypeError: Cancelled", "ReferenceError: Can't find variable: WH", "Can't find variable: WH", "WebGL not available for compressed textures. Silently failing."]), e.exports = o
        },
        895: function(e, t, a) {
            "use strict";
            var n;
            a.r(t), a.d(t, "v1", (function() {
                return h
            })), a.d(t, "v3", (function() {
                return O
            })), a.d(t, "v4", (function() {
                return R
            })), a.d(t, "v5", (function() {
                return j
            })), a.d(t, "NIL", (function() {
                return A
            })), a.d(t, "version", (function() {
                return U
            })), a.d(t, "validate", (function() {
                return o
            })), a.d(t, "stringify", (function() {
                return g
            })), a.d(t, "parse", (function() {
                return m
            }));
            var s = new Uint8Array(16);

            function r() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(s)
            }
            var i = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            for (var o = function(e) {
                    return "string" == typeof e && i.test(e)
                }, c = [], u = 0; u < 256; ++u) c.push((u + 256).toString(16).substr(1));
            var l, p, g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        a = (c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]).toLowerCase();
                    if (!o(a)) throw TypeError("Stringified UUID is invalid");
                    return a
                },
                d = 0,
                f = 0;
            var h = function(e, t, a) {
                var n = t && a || 0,
                    s = t || new Array(16),
                    i = (e = e || {}).node || l,
                    o = void 0 !== e.clockseq ? e.clockseq : p;
                if (null == i || null == o) {
                    var c = e.random || (e.rng || r)();
                    null == i && (i = l = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]), null == o && (o = p = 16383 & (c[6] << 8 | c[7]))
                }
                var u = void 0 !== e.msecs ? e.msecs : Date.now(),
                    h = void 0 !== e.nsecs ? e.nsecs : f + 1,
                    m = u - d + (h - f) / 1e4;
                if (m < 0 && void 0 === e.clockseq && (o = o + 1 & 16383), (m < 0 || u > d) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                d = u, f = h, p = o;
                var b = (1e4 * (268435455 & (u += 122192928e5)) + h) % 4294967296;
                s[n++] = b >>> 24 & 255, s[n++] = b >>> 16 & 255, s[n++] = b >>> 8 & 255, s[n++] = 255 & b;
                var _ = u / 4294967296 * 1e4 & 268435455;
                s[n++] = _ >>> 8 & 255, s[n++] = 255 & _, s[n++] = _ >>> 24 & 15 | 16, s[n++] = _ >>> 16 & 255, s[n++] = o >>> 8 | 128, s[n++] = 255 & o;
                for (var v = 0; v < 6; ++v) s[n + v] = i[v];
                return t || g(s)
            };
            var m = function(e) {
                if (!o(e)) throw TypeError("Invalid UUID");
                var t, a = new Uint8Array(16);
                return a[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, a[1] = t >>> 16 & 255, a[2] = t >>> 8 & 255, a[3] = 255 & t, a[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, a[5] = 255 & t, a[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, a[7] = 255 & t, a[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, a[9] = 255 & t, a[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, a[11] = t / 4294967296 & 255, a[12] = t >>> 24 & 255, a[13] = t >>> 16 & 255, a[14] = t >>> 8 & 255, a[15] = 255 & t, a
            };
            var b = function(e, t, a) {
                function n(e, n, s, r) {
                    if ("string" == typeof e && (e = function(e) {
                            e = unescape(encodeURIComponent(e));
                            for (var t = [], a = 0; a < e.length; ++a) t.push(e.charCodeAt(a));
                            return t
                        }(e)), "string" == typeof n && (n = m(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var i = new Uint8Array(16 + e.length);
                    if (i.set(n), i.set(e, n.length), (i = a(i))[6] = 15 & i[6] | t, i[8] = 63 & i[8] | 128, s) {
                        r = r || 0;
                        for (var o = 0; o < 16; ++o) s[r + o] = i[o];
                        return s
                    }
                    return g(i)
                }
                try {
                    n.name = e
                } catch (e) {}
                return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n
            };

            function _(e) {
                return 14 + (e + 64 >>> 9 << 4) + 1
            }

            function v(e, t) {
                var a = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a
            }

            function y(e, t, a, n, s, r) {
                return v((i = v(v(t, e), v(n, r))) << (o = s) | i >>> 32 - o, a);
                var i, o
            }

            function k(e, t, a, n, s, r, i) {
                return y(t & a | ~t & n, e, t, s, r, i)
            }

            function P(e, t, a, n, s, r, i) {
                return y(t & n | a & ~n, e, t, s, r, i)
            }

            function w(e, t, a, n, s, r, i) {
                return y(t ^ a ^ n, e, t, s, r, i)
            }

            function T(e, t, a, n, s, r, i) {
                return y(a ^ (t | ~n), e, t, s, r, i)
            }
            var O = b("v3", 48, (function(e) {
                if ("string" == typeof e) {
                    var t = unescape(encodeURIComponent(e));
                    e = new Uint8Array(t.length);
                    for (var a = 0; a < t.length; ++a) e[a] = t.charCodeAt(a)
                }
                return function(e) {
                    for (var t = [], a = 32 * e.length, n = 0; n < a; n += 8) {
                        var s = e[n >> 5] >>> n % 32 & 255,
                            r = parseInt("0123456789abcdef".charAt(s >>> 4 & 15) + "0123456789abcdef".charAt(15 & s), 16);
                        t.push(r)
                    }
                    return t
                }(function(e, t) {
                    e[t >> 5] |= 128 << t % 32, e[_(t) - 1] = t;
                    for (var a = 1732584193, n = -271733879, s = -1732584194, r = 271733878, i = 0; i < e.length; i += 16) {
                        var o = a,
                            c = n,
                            u = s,
                            l = r;
                        a = k(a, n, s, r, e[i], 7, -680876936), r = k(r, a, n, s, e[i + 1], 12, -389564586), s = k(s, r, a, n, e[i + 2], 17, 606105819), n = k(n, s, r, a, e[i + 3], 22, -1044525330), a = k(a, n, s, r, e[i + 4], 7, -176418897), r = k(r, a, n, s, e[i + 5], 12, 1200080426), s = k(s, r, a, n, e[i + 6], 17, -1473231341), n = k(n, s, r, a, e[i + 7], 22, -45705983), a = k(a, n, s, r, e[i + 8], 7, 1770035416), r = k(r, a, n, s, e[i + 9], 12, -1958414417), s = k(s, r, a, n, e[i + 10], 17, -42063), n = k(n, s, r, a, e[i + 11], 22, -1990404162), a = k(a, n, s, r, e[i + 12], 7, 1804603682), r = k(r, a, n, s, e[i + 13], 12, -40341101), s = k(s, r, a, n, e[i + 14], 17, -1502002290), n = k(n, s, r, a, e[i + 15], 22, 1236535329), a = P(a, n, s, r, e[i + 1], 5, -165796510), r = P(r, a, n, s, e[i + 6], 9, -1069501632), s = P(s, r, a, n, e[i + 11], 14, 643717713), n = P(n, s, r, a, e[i], 20, -373897302), a = P(a, n, s, r, e[i + 5], 5, -701558691), r = P(r, a, n, s, e[i + 10], 9, 38016083), s = P(s, r, a, n, e[i + 15], 14, -660478335), n = P(n, s, r, a, e[i + 4], 20, -405537848), a = P(a, n, s, r, e[i + 9], 5, 568446438), r = P(r, a, n, s, e[i + 14], 9, -1019803690), s = P(s, r, a, n, e[i + 3], 14, -187363961), n = P(n, s, r, a, e[i + 8], 20, 1163531501), a = P(a, n, s, r, e[i + 13], 5, -1444681467), r = P(r, a, n, s, e[i + 2], 9, -51403784), s = P(s, r, a, n, e[i + 7], 14, 1735328473), n = P(n, s, r, a, e[i + 12], 20, -1926607734), a = w(a, n, s, r, e[i + 5], 4, -378558), r = w(r, a, n, s, e[i + 8], 11, -2022574463), s = w(s, r, a, n, e[i + 11], 16, 1839030562), n = w(n, s, r, a, e[i + 14], 23, -35309556), a = w(a, n, s, r, e[i + 1], 4, -1530992060), r = w(r, a, n, s, e[i + 4], 11, 1272893353), s = w(s, r, a, n, e[i + 7], 16, -155497632), n = w(n, s, r, a, e[i + 10], 23, -1094730640), a = w(a, n, s, r, e[i + 13], 4, 681279174), r = w(r, a, n, s, e[i], 11, -358537222), s = w(s, r, a, n, e[i + 3], 16, -722521979), n = w(n, s, r, a, e[i + 6], 23, 76029189), a = w(a, n, s, r, e[i + 9], 4, -640364487), r = w(r, a, n, s, e[i + 12], 11, -421815835), s = w(s, r, a, n, e[i + 15], 16, 530742520), n = w(n, s, r, a, e[i + 2], 23, -995338651), a = T(a, n, s, r, e[i], 6, -198630844), r = T(r, a, n, s, e[i + 7], 10, 1126891415), s = T(s, r, a, n, e[i + 14], 15, -1416354905), n = T(n, s, r, a, e[i + 5], 21, -57434055), a = T(a, n, s, r, e[i + 12], 6, 1700485571), r = T(r, a, n, s, e[i + 3], 10, -1894986606), s = T(s, r, a, n, e[i + 10], 15, -1051523), n = T(n, s, r, a, e[i + 1], 21, -2054922799), a = T(a, n, s, r, e[i + 8], 6, 1873313359), r = T(r, a, n, s, e[i + 15], 10, -30611744), s = T(s, r, a, n, e[i + 6], 15, -1560198380), n = T(n, s, r, a, e[i + 13], 21, 1309151649), a = T(a, n, s, r, e[i + 4], 6, -145523070), r = T(r, a, n, s, e[i + 11], 10, -1120210379), s = T(s, r, a, n, e[i + 2], 15, 718787259), n = T(n, s, r, a, e[i + 9], 21, -343485551), a = v(a, o), n = v(n, c), s = v(s, u), r = v(r, l)
                    }
                    return [a, n, s, r]
                }(function(e) {
                    if (0 === e.length) return [];
                    for (var t = 8 * e.length, a = new Uint32Array(_(t)), n = 0; n < t; n += 8) a[n >> 5] |= (255 & e[n / 8]) << n % 32;
                    return a
                }(e), 8 * e.length))
            }));
            var R = function(e, t, a) {
                var n = (e = e || {}).random || (e.rng || r)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                    a = a || 0;
                    for (var s = 0; s < 16; ++s) t[a + s] = n[s];
                    return t
                }
                return g(n)
            };

            function S(e, t, a, n) {
                switch (e) {
                    case 0:
                        return t & a ^ ~t & n;
                    case 1:
                        return t ^ a ^ n;
                    case 2:
                        return t & a ^ t & n ^ a & n;
                    case 3:
                        return t ^ a ^ n
                }
            }

            function I(e, t) {
                return e << t | e >>> 32 - t
            }
            var j = b("v5", 80, (function(e) {
                    var t = [1518500249, 1859775393, 2400959708, 3395469782],
                        a = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof e) {
                        var n = unescape(encodeURIComponent(e));
                        e = [];
                        for (var s = 0; s < n.length; ++s) e.push(n.charCodeAt(s))
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (var r = e.length / 4 + 2, i = Math.ceil(r / 16), o = new Array(i), c = 0; c < i; ++c) {
                        for (var u = new Uint32Array(16), l = 0; l < 16; ++l) u[l] = e[64 * c + 4 * l] << 24 | e[64 * c + 4 * l + 1] << 16 | e[64 * c + 4 * l + 2] << 8 | e[64 * c + 4 * l + 3];
                        o[c] = u
                    }
                    o[i - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = 8 * (e.length - 1) & 4294967295;
                    for (var p = 0; p < i; ++p) {
                        for (var g = new Uint32Array(80), d = 0; d < 16; ++d) g[d] = o[p][d];
                        for (var f = 16; f < 80; ++f) g[f] = I(g[f - 3] ^ g[f - 8] ^ g[f - 14] ^ g[f - 16], 1);
                        for (var h = a[0], m = a[1], b = a[2], _ = a[3], v = a[4], y = 0; y < 80; ++y) {
                            var k = Math.floor(y / 20),
                                P = I(h, 5) + S(k, m, b, _) + v + t[k] + g[y] >>> 0;
                            v = _, _ = b, b = I(m, 30) >>> 0, m = h, h = P
                        }
                        a[0] = a[0] + h >>> 0, a[1] = a[1] + m >>> 0, a[2] = a[2] + b >>> 0, a[3] = a[3] + _ >>> 0, a[4] = a[4] + v >>> 0
                    }
                    return [a[0] >> 24 & 255, a[0] >> 16 & 255, a[0] >> 8 & 255, 255 & a[0], a[1] >> 24 & 255, a[1] >> 16 & 255, a[1] >> 8 & 255, 255 & a[1], a[2] >> 24 & 255, a[2] >> 16 & 255, a[2] >> 8 & 255, 255 & a[2], a[3] >> 24 & 255, a[3] >> 16 & 255, a[3] >> 8 & 255, 255 & a[3], a[4] >> 24 & 255, a[4] >> 16 & 255, a[4] >> 8 & 255, 255 & a[4]]
                })),
                A = "00000000-0000-0000-0000-000000000000";
            var U = function(e) {
                if (!o(e)) throw TypeError("Invalid UUID");
                return parseInt(e.substr(14, 1), 16)
            }
        }
    }
]);