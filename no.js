_d("WebBloksDummy", [], (function(a, b, c, d, e, f) {
    function a() {}
    f["default"] = a
}
), 66);
__d("WebBloksFetchAsyncComponent", [], (function(a, b, c, d, e, f) {
    function a(a, b, c, d, e) {
        a.objectSet.componentQueryStore.fetch(b, c, d, e)
    }
    
    f["default"] = a
}
), 66);
__d("WebBloksInvalidateCachedAsyncComponents", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        a.bloksContext.objectSet.componentQueryStore.invalidate(b, c)
    }
    f["default"] = a
}
), 66);
__d("ACQWebBloksPrimitives", ["WebBloksDummy", "WebBloksFetchAsyncComponent", "WebBloksInvalidateCachedAsyncComponents"], (function(a, b, c, d, e, f, g) {
    a = {};
    d = {
        "bk.action.bloks.FetchAsyncComponents": c("WebBloksFetchAsyncComponent"),
        "bk.action.bloks.InvalidateCachedAsyncComponents": c("WebBloksInvalidateCachedAsyncComponents"),
        "bk.versioning.bloks.AsyncComponentAppIdExpression": b = c("WebBloksDummy"),
        "bk.versioning.bloks.AsyncComponentCacheTtlExpression": b,
        "bk.versioning.bloks.AsyncComponentClientParams": b,
        "bk.versioning.bloks.AsyncComponentReleaseV1": b,
        "bk.versioning.bloks.AsyncComponentScoping": b
    };
    e = {};
    g.COMPONENTS = a;
    g.ACTIONS = d;
    g.EXTENSION_HANDLERS = e
}
), 98);
__d("acqTraversalKeys", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b
}
), 66);
__d("ACQWebBloksEnvironmentConfig", ["ACQWebBloksPrimitives", "acqTraversalKeys"], (function(a, b, c, d, e, f, g) {
    a = {
        actions: d("ACQWebBloksPrimitives").ACTIONS,
        components: d("ACQWebBloksPrimitives").COMPONENTS,
        extensionHandlers: d("ACQWebBloksPrimitives").EXTENSION_HANDLERS,
        traversalKeys: c("acqTraversalKeys")
    };
    g.ACQ_ENVIRONMENT_CONFIG = a
}
), 98);
__d("ClientAjaxIdsUpdater", ["CurrentUserInitialData", "MRequestConfig", "cr:8959", "cr:8960"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
        if (!a.ajaxUpdateAfterLogin)
            return;
        a = a.ajaxUpdateAfterLogin;
        (h || (h = c("CurrentUserInitialData"))).USER_ID = a.currentUser;
        b("cr:8959").setToken(a.dtsgToken);
        b("cr:8960").setToken(a.dtsgAsyncGetToken);
        c("MRequestConfig").ajaxResponseToken = a.ajaxResponseToken
    }
    g["default"] = a
}
), 98);
__d("WebBloksErrors", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            var e;
            e = a.call(this) || this;
            e.message = (d === !0 ? "[DEV Only]" : "") + "[WebBloks] " + b + (c ? ": " + c.toString() : "");
            e.name = e.constructor.name;
            c && (e.cause = c,
            c.stack && (e.stack = c.stack));
            e.stack || (typeof process === "undefined" || process.env.JEST_WORKER_ID === void 0) && (e.stack = new Error(e.message).stack);
            return e
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            return a.call(this, "Unable to find component with id=" + b, null, c) || this
        }
        return b
    }(a);
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            return a.call(this, "Error while fetching data: " + b, c, d) || this
        }
        return b
    }(a);
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            b = a.call(this, "Script error: " + b, null, d) || this;
            b.stackFrame = c == null ? void 0 : (d = c.getSourceMapNode()) == null ? void 0 : d.getBloksStackFrame();
            b.stackFrame = g(b.stackFrame);
            return b
        }
        return b
    }(a);
    function g(a) {
        var b = a;
        while (b != null) {
            var c;
            if (b.offset === ((c = b.nextFrame) == null ? void 0 : c.offset)) {
                b.nextFrame = (c = b.nextFrame) == null ? void 0 : c.nextFrame
            } else
                b = b.nextFrame
        }
        return a
    }
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            return a.call(this, "Script parse error at position " + b + ": " + c, null, d) || this
        }
        return b
    }(a);
    var h = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            return b.call(this, 'Action for "' + a + '" was not registered.', null, c) || this
        }
        return a
    }(a)
      , i = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            return b.call(this, 'Component for "' + a + '" was not registered.', null, c) || this
        }
        return a
    }(a)
      , j = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            return b.call(this, "Unsupported feature: " + a, null, c) || this
        }
        return a
    }(a)
      , k = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            return b.call(this, 'Container config for "' + a + '" was not registered.', null, c) || this
        }
        return a
    }(a);
    f.WebBloksError = a;
    f.WebBloksComponentIdNotFoundError = b;
    f.WebBloksNetworkError = c;
    f.WebBloksScriptError = d;
    f.WebBloksScriptParseError = e;
    f.WebBloksUnknownActionError = h;
    f.WebBloksUnknownComponentError = i;
    f.WebBloksUnsupportedFeatureError = j;
    f.WebBloksUnknownContainerConfigError = k
}
), 66);
__d("WebBloksIsUnitTest", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a() {
        var a;
        return typeof process !== "undefined" && ((a = process) == null ? void 0 : (a = a.env) == null ? void 0 : a.NODE_ENV) === "test"
    }
    f["default"] = a
}
), 66);
__d("WebBloksFalcoPolicyData", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    function a(a) {
        Object.keys(a).forEach(function(b) {
            g[b] == null && (g[b] = a[b])
        })
    }
    function b(a) {
        a = g[a];
        return a == null ? {
            r: 1
        } : a
    }
    c = {
        add: a,
        get: b
    };
    f["default"] = c
}
), 66);
__d("WebBloksServerData", ["WebBloksFalcoPolicyData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        (a == null ? void 0 : a.falco_log_policy_map) != null && c("WebBloksFalcoPolicyData").add(a.falco_log_policy_map)
    }
    g.handleWebBloksServerData = a
}
), 98);
__d("AbstractWebBloksAppLoader", ["ClientAjaxIdsUpdater", "WebBloksErrors", "WebBloksIsUnitTest", "WebBloksServerData", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {}
        var e = a.prototype;
        e.fetchAppByUrl = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1)
                    switch (c.prev = c.next) {
                    case 0:
                        this.$1(a);
                        c.t0 = h;
                        c.next = 4;
                        return b("regeneratorRuntime").awrap(this.$2(a, this.makePostRequest(a, {
                            type: "app"
                        })));
                    case 4:
                        c.t1 = c.sent;
                        return c.abrupt("return", c.t0(c.t1));
                    case 6:
                    case "end":
                        return c.stop()
                    }
            }, null, this)
        }
        ;
        e.fetchApp = function(a, c) {
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        d.t0 = h;
                        d.next = 3;
                        return b("regeneratorRuntime").awrap(this.$3(a, c, "app"));
                    case 3:
                        d.t1 = d.sent;
                        return d.abrupt("return", d.t0(d.t1));
                    case 5:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        e.fetchAction = function(a, c) {
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        d.t0 = h;
                        d.next = 3;
                        return b("regeneratorRuntime").awrap(this.$3(a, c, "action"));
                    case 3:
                        d.t1 = d.sent;
                        return d.abrupt("return", d.t0(d.t1));
                    case 5:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        e.fetchComponentQuery = function(a, c) {
            var d;
            return b("regeneratorRuntime").async(function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        return b("regeneratorRuntime").awrap(this.$3(a, c, "app"));
                    case 2:
                        d = e.sent;
                        return e.abrupt("return", {
                            components: d.components,
                            prefetchScript: d.prefetchScript
                        });
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        }
        ;
        e.$3 = function(a, b, c) {
            this.$1(a, b);
            var d = this.getAsyncFetchData(a, b, c);
            return this.$2(a, this.makePostRequest(this.getAsyncFetchURI(a, b, c), d))
        }
        ;
        e.$2 = function(a, e) {
            var f, g, h, i;
            return b("regeneratorRuntime").async(function(j) {
                while (1)
                    switch (j.prev = j.next) {
                    case 0:
                        j.prev = 0;
                        j.next = 3;
                        return b("regeneratorRuntime").awrap(e);
                    case 3:
                        g = j.sent;
                        this.$4(a, g);
                        c("ClientAjaxIdsUpdater")(g);
                        h = (f = g.payload) != null ? f : g;
                        d("WebBloksServerData").handleWebBloksServerData(h.server_data);
                        return j.abrupt("return", h);
                    case 11:
                        j.prev = 11;
                        j.t0 = j["catch"](0);
                        this.$5(a, j.t0);
                        throw j.t0 instanceof d("WebBloksErrors").WebBloksError ? j.t0 : (i = j.t0.toError == null ? void 0 : j.t0.toError()) != null ? i : new (d("WebBloksErrors").WebBloksError)("Fetch failed: " + j.t0,j.t0);
                    case 15:
                    case "end":
                        return j.stop()
                    }
            }, null, this, [[0, 11]])
        }
        ;
        e.makePostRequest = function(a, b) {
            throw new (d("WebBloksErrors").WebBloksError)("Abstract")
        }
        ;
        e.getAsyncFetchURI = function(a, b, c) {
            throw new (d("WebBloksErrors").WebBloksError)("Abstract")
        }
        ;
        e.getAsyncFetchData = function(a, b, c) {
            throw new (d("WebBloksErrors").WebBloksError)("Abstract")
        }
        ;
        e.$1 = function(a, b) {}
        ;
        e.$4 = function(a, b) {}
        ;
        e.$5 = function(a, b) {}
        ;
        return a
    }();
    function h(a) {
        var b, c = a.server_data;
        if (((b = a.layout) == null ? void 0 : b.bloks_payload) != null)
            return babelHelpers["extends"]({}, a.layout.bloks_payload, {
                serverData: c
            });
        a.layout;
        b = a.data;
        var d = babelHelpers.objectWithoutPropertiesLoose(a, ["layout", "data"]);
        return babelHelpers["extends"]({
            data: b || [],
            tree: a.layout,
            serverData: c
        }, d)
    }
    g.AbstractWebBloksAppLoader = a
}
), 98);
__d("ComponentMountUnmountSubspanLogger.react", ["InteractionTracingMetrics", "hero-tracing-placeholder", "performanceNow", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = i || d("react");
    var j = b.useContext
      , k = b.useEffect;
    function a(a) {
        var b = d("react-compiler-runtime").c(4), e = a.description, f = j(d("hero-tracing-placeholder").HeroInteractionIDContext), g;
        b[0] !== e || b[1] !== f ? (a = function() {
            var a = (h || (h = c("performanceNow")))();
            return function() {
                if (f != null) {
                    var b = (h || (h = c("performanceNow")))();
                    c("InteractionTracingMetrics").addSubspan(f, e, "AppTiming", a, b, {})
                }
            }
        }
        ,
        g = [e, f],
        b[0] = e,
        b[1] = f,
        b[2] = a,
        b[3] = g) : (a = b[2],
        g = b[3]);
        k(a, g)
    }
    g["default"] = a
}
), 98);
__d("WebBloksAccessibilityAnnouncement", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = document.createElement("div");
        c.setAttribute("aria-live", "polite");
        c.style.position = "absolute";
        c.style.top = "-10000px";
        c.style.left = "-10000px";
        c.style.width = "500px";
        c.textContent = b;
        (a = document.body) == null ? void 0 : a.appendChild(c);
        window.setTimeout(function() {
            var a;
            (a = document.body) == null ? void 0 : a.removeChild(c)
        }, 100)
    }
    f["default"] = a
}
), 66);
__d("WebBloksAccessibilityUtils", ["react"], (function(a, b, c, d, e, f, g) {
    var h, i = h || c("react");
    b = {
        Button: "button",
        Header: null,
        "Image Button": "button",
        Image: "img",
        "Selected Button": "button",
        Text: null,
        Link: "link",
        Radio: "radio",
        Checkbox: "checkbox",
        "Radio Group": "radiogroup",
        Region: "region",
        Status: "status",
        "Tab Panel": "tabpanel",
        List: "list",
        "List Item": "listitem",
        Alert: "alert"
    };
    var j = ["button", "link", "checkbox", "radio"];
    d = function(a) {
        return j.includes(a) ? {
            tabIndex: 0
        } : {}
    }
    ;
    function a(a, b, c) {
        var d = {};
        b != null && (d["aria-label"] = b);
        switch (a) {
        case 1:
            return i.jsx("h1", babelHelpers["extends"]({}, d, {
                children: c
            }));
        case 2:
            return i.jsx("h2", babelHelpers["extends"]({}, d, {
                children: c
            }));
        case 3:
            return i.jsx("h3", babelHelpers["extends"]({}, d, {
                children: c
            }));
        case 4:
            return i.jsx("h4", babelHelpers["extends"]({}, d, {
                children: c
            }));
        case 5:
            return i.jsx("h5", babelHelpers["extends"]({}, d, {
                children: c
            }));
        case 6:
            return i.jsx("h6", babelHelpers["extends"]({}, d, {
                children: c
            }))
        }
        return c
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.WEBBLOKS_ACCESSIBILITY_ROLE_MAPPING = b;
    g.WEBBLOKS_ACCESSIBILITY_FOCUSABLE_ROLES = j;
    g.getFocusPropsForRole = d;
    g.getHeading = a
}
), 98);
__d("WebBloksBooleanUtils", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return a === !0 || a === 1
    }
    function b(a) {
        return a === !1 || a === 0
    }
    f.isTrue = a;
    f.isFalse = b
}
), 66);
__d("WebBloksAccessibilityExtensionHandler", ["WebBloksAccessibilityUtils", "WebBloksBooleanUtils"], (function(a, b, c, d, e, f, g) {
    var h = {
        Button: "button",
        Header: "heading",
        "Image Button": "button",
        Image: "img",
        "Selected Button": "button",
        Text: "",
        Link: "link"
    };
    a = {
        getProps: function(a) {
            a = a.getValues();
            var b = a.enabled
              , c = a.disabled
              , e = a.role;
            a = a.label;
            var f = {};
            d("WebBloksBooleanUtils").isFalse(b) || (e && (f.role = h[e]),
            a != null && (f["aria-label"] = a));
            f = babelHelpers["extends"]({}, d("WebBloksAccessibilityUtils").getFocusPropsForRole(f.role), f);
            d("WebBloksBooleanUtils").isTrue(c) && (f.disabled = !0,
            f["aria-disabled"] = !0);
            return f
        }
    };
    b = a;
    g["default"] = b
}
), 98);
__d("WebBloksAccessibilitySetFocus", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = (a = b.uiMutableContainer) == null ? void 0 : (b = a.domNode) == null ? void 0 : b.current;
        b = a == null ? void 0 : a.getAttribute("tabindex");
        b == null && (a == null ? void 0 : a.setAttribute("tabindex", "-1"));
        a == null ? void 0 : a.focus()
    }
    f["default"] = a
}
), 66);
__d("WebBloksAsyncActions", ["WebBloksScriptDebuggingUtils", "WebBloksUtils", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    function h(a, c, e, f) {
        var g;
        return b("regeneratorRuntime").async(function(h) {
            while (1)
                switch (h.prev = h.next) {
                case 0:
                    f = d("WebBloksUtils").nullthrows(a.bloksContext.objectSet.environment.appLoader);
                    h.next = 4;
                    return b("regeneratorRuntime").awrap(f.fetchAction(c, e));
                case 4:
                    g = h.sent;
                    return h.abrupt("return", a.executeActionPayload(g));
                case 6:
                case "end":
                    return h.stop()
                }
        }, null, this)
    }
    function a(a, c, e, f) {
        return b("regeneratorRuntime").async(function(g) {
            while (1)
                switch (g.prev = g.next) {
                case 0:
                    g.prev = 0;
                    g.next = 3;
                    return b("regeneratorRuntime").awrap(h(a, c, e, f));
                case 3:
                    return g.abrupt("return", g.sent);
                case 6:
                    g.prev = 6,
                    g.t0 = g["catch"](0),
                    d("WebBloksScriptDebuggingUtils").logScriptError(a.objectSet, g.t0, null, a);
                case 9:
                case "end":
                    return g.stop()
                }
        }, null, this, [[0, 6]])
    }
    g.executeAsyncAction = h;
    g.executeAsyncActionCatch = a
}
), 98);
__d("WebBloksScript", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.getValue = function() {
            return this.$1
        }
        ;
        b.getSourceMapNode = function() {
            return this.$2
        }
        ;
        return a
    }();
    f.WebBloksScript = a
}
), 66);
__d("WebBloksComponentContext", ["Promise", "WebBloksInterpreterEnvironment", "WebBloksScript", "WebBloksScriptDebuggingUtils", "WebBloksScriptExecutor", "WebBloksUtils", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    var h, i, j = i || (i = d("react"));
    e = i;
    f = e.createContext;
    var k = e.useContext;
    e = function(a, e, f) {
        var g = this;
        e === void 0 && (e = null);
        f === void 0 && (f = !1);
        this.execute = function(a, b, e) {
            var f = new (c("WebBloksInterpreterEnvironment"))(g.bloksContext);
            f.scope = (a = a.keyPath) != null ? a : d("WebBloksUtils").EMPTY_KEY_PATH;
            try {
                g.bloksContext.treeManager.beginUpdates();
                if (b instanceof d("WebBloksScript").WebBloksScript) {
                    a = b == null ? void 0 : b.getSourceMapNode();
                    a != null && f.setBaseSourceMapNode(a);
                    return d("WebBloksScriptExecutor").execute(f, b.getValue(), e)
                } else
                    return d("WebBloksScriptExecutor").execute(f, b, e)
            } finally {
                f.setBaseSourceMapNode(null),
                g.bloksContext.treeManager.endUpdates()
            }
        }
        ;
        this.executeCatch = function(a, b, e) {
            try {
                return g.execute(a, b, e)
            } catch (f) {
                e = new (c("WebBloksInterpreterEnvironment"))(g.bloksContext);
                e.scope = (a = a.keyPath) != null ? a : d("WebBloksUtils").EMPTY_KEY_PATH;
                d("WebBloksScriptDebuggingUtils").logScriptError(g.objectSet, f, b.getValue(), e)
            }
        }
        ;
        this.executeOnNextTickCatch = function(a, e, f) {
            (h || (h = b("Promise"))).resolve().then(function() {
                g.execute(a, e, f)
            })["catch"](function(b) {
                var f, h = new (c("WebBloksInterpreterEnvironment"))(g.bloksContext);
                h.scope = (f = a.keyPath) != null ? f : d("WebBloksUtils").EMPTY_KEY_PATH;
                d("WebBloksScriptDebuggingUtils").logScriptError(g.objectSet, b, e == null ? void 0 : e.getValue(), h)
            })
        }
        ;
        this.renderNode = function(a, b) {
            if (!a)
                return null;
            var c = g.objectSet.getComponentForName(a.styleId)
              , d = a.get("visibility");
            return d === "gone" ? null : j.jsx(c, {
                node: a,
                externalStyle: b
            }, a.clientId)
        }
        ;
        this.renderChildren = function(a) {
            return a ? a.map(function(a) {
                return g.renderNode(a)
            }) : null
        }
        ;
        this.bloksContext = a;
        this.ownerContext = e;
        this.isLoadingNode = f
    }
    ;
    Object.defineProperties(e.prototype, {
        objectSet: {
            get: function() {
                return this.bloksContext.objectSet
            },
            enumerable: !1
        },
        treeManager: {
            get: function() {
                return this.bloksContext.treeManager
            },
            enumerable: !1
        }
    });
    var l = f(null);
    function a() {
        var a = d("react-compiler-runtime").c(2), b = k(l), c;
        a[0] !== b ? (c = d("WebBloksUtils").nullthrows(b),
        a[0] = b,
        a[1] = c) : c = a[1];
        return c
    }
    g.WebBloksComponentContext = e;
    g.WebBloksComponentContextContext = l;
    g.useWebBloksContext = a
}
), 98);
__d("WebBloksEnvironmentContext", ["WebBloksUtils", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    var h, i = h || (h = d("react")), j = h.useContext, k = i.createContext(null);
    function a(a) {
        var b = d("react-compiler-runtime").c(3)
          , c = a.children;
        a = a.environment;
        var e;
        b[0] !== c || b[1] !== a ? (e = i.jsx(k.Provider, {
            value: a,
            children: c
        }),
        b[0] = c,
        b[1] = a,
        b[2] = e) : e = b[2];
        return e
    }
    function b() {
        var a = d("react-compiler-runtime").c(2), b = j(k), c;
        a[0] !== b ? (c = d("WebBloksUtils").nullthrows(b),
        a[0] = b,
        a[1] = c) : c = a[1];
        return c
    }
    g.WebBloksEnvironmentContext = k;
    g.WebBloksEnvironmentProvider = a;
    g.useWebBloksEnvironment = b
}
), 98);
__d("WebBloksSourceMapNodeTypes", [], (function(a, b, c, d, e, f) {
    b = function() {
        function a(a, b, c) {
            this.offset = "",
            this.offset = a,
            this.nextFrame = b,
            this.loggingID = c
        }
        var b = a.prototype;
        b.toArray = function() {
            var a = []
              , b = this;
            while (b != null) {
                var c;
                a.push(b.offset);
                b = (c = b) == null ? void 0 : c.nextFrame
            }
            return a
        }
        ;
        return a
    }();
    function a(a) {
        var b = null;
        a = a;
        while (a != null) {
            var c;
            b == null && (b = []);
            (c = b) == null ? void 0 : c.push(a.offset);
            a = a.nextFrame
        }
        return b
    }
    f.WebBloksStackFrame = b;
    f.getBloksStackTrace = a
}
), 66);
__d("WebBloksSourceMapNode", ["WebBloksSourceMapNodeTypes"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            b === void 0 && (b = []),
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.getLoggingID = function() {
            var a;
            return (a = this.$1) == null ? void 0 : a.getLoggingID()
        }
        ;
        b.getSourceMapID = function() {
            var a;
            return (a = this.$1) == null ? void 0 : a.getSourceMapID()
        }
        ;
        b.getParent = function() {
            return this.$1
        }
        ;
        b.getTreePath = function() {
            return this.$2
        }
        ;
        b.makeCopyWithNewParent = function(b) {
            return new a(b,this.$2)
        }
        ;
        b.getBloksStackFrame = function() {
            var a;
            a = (a = this.getParent()) == null ? void 0 : a.getBloksStackFrame();
            if (a == null)
                return null;
            var b = this.getTreePath();
            b != null && (b == null ? void 0 : b.length) > 0 ? b = [a.offset].concat(b).join(":") : b = a.offset;
            return new (d("WebBloksSourceMapNodeTypes").WebBloksStackFrame)(b,a.nextFrame)
        }
        ;
        b.getBloksStackTrace = function() {
            return d("WebBloksSourceMapNodeTypes").getBloksStackTrace(this.getBloksStackFrame())
        }
        ;
        b.addToTreePath = function(a) {
            var b;
            this.$2 = (b = this.$2) == null ? void 0 : b.concat([a]);
            return this
        }
        ;
        return a
    }();
    g["default"] = a
}
), 98);
__d("WebBloksSourceMapPayloadMetadata", [], (function(a, b, c, d, e, f) {
    a = function(a, b, c) {
        this.payloadPath = (a = a) != null ? a : [];
        this.sourceMapID = b;
        this.loggingID = c
    }
    ;
    f["default"] = a
}
), 66);
__d("WebBloksSourceMapRootNode", ["WebBloksSourceMapNodeTypes"], (function(a, b, c, d, e, f, g) {
    var h = "null";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.getLoggingID = function() {
            var a;
            return (a = (a = this.$2) == null ? void 0 : a.loggingID) != null ? a : (a = this.getParent()) == null ? void 0 : a.getLoggingID()
        }
        ;
        b.getSourceMapID = function() {
            var a;
            return (a = (a = this.$2) == null ? void 0 : a.sourceMapID) != null ? a : (a = this.getParent()) == null ? void 0 : a.getSourceMapID()
        }
        ;
        b.getParent = function() {
            return this.$1.getParent == null ? void 0 : this.$1.getParent()
        }
        ;
        b.getTreePath = function() {
            var a;
            return (a = this.$1) == null ? void 0 : a.getTreePath()
        }
        ;
        b.getPayloadPath = function() {
            var a;
            return (a = this.$2) == null ? void 0 : a.payloadPath
        }
        ;
        b.makeCopyWithNewParent = function(b) {
            return new a(this.$1.makeCopyWithNewParent(b),this.$2)
        }
        ;
        b.getBloksStackFrame = function() {
            var a, b = [], c = this.getTreePath();
            a = (a = this.$2) == null ? void 0 : a.payloadPath;
            a != null && b.push.apply(b, a);
            c != null && c.length && b.push.apply(b, c);
            a = ((c = (a = this.$2) == null ? void 0 : a.sourceMapID) != null ? c : h) + "|" + b.join(":");
            c = this.getParent();
            return new (d("WebBloksSourceMapNodeTypes").WebBloksStackFrame)(a,c != null ? c.getBloksStackFrame() : null)
        }
        ;
        b.getBloksStackTrace = function() {
            return d("WebBloksSourceMapNodeTypes").getBloksStackTrace(this.getBloksStackFrame())
        }
        ;
        b.addToTreePath = function(a) {
            this.$1 = this.$1.addToTreePath(a);
            return this
        }
        ;
        return a
    }();
    g["default"] = a
}
), 98);
__d("WebBloksFunctionTableManager", ["WebBloksScriptParser", "WebBloksSourceMapNode", "WebBloksSourceMapPayloadMetadata", "WebBloksSourceMapRootNode", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    a = function() {
        a.getKnownFt = function(a) {
            a = this.$2.get(a);
            return a != null && this.$3.has(a) ? a : null
        }
        ;
        a.cacheFunctionTable = function(a, b) {
            var c = a.split(":")
              , d = c[0];
            c = c[1];
            if (c == null)
                return;
            this.$2.set(d, a);
            this.$3.set(a, b)
        }
        ;
        a.getFunctionTableFromCache = function(a) {
            return this.$3.get(a)
        }
        ;
        function a(a) {
            a === void 0 && (a = d("WebBloksUtils").EMPTY_OBJECT);
            this.$1 = new Map();
            for (var b in a)
                this.$1.set(b, a[b])
        }
        var b = a.prototype;
        b.get = function(a) {
            var b = this.$1.get(a);
            if (typeof b === "string") {
                var c = d("WebBloksScriptParser").parse(b)
                  , e = function(b) {
                    var d = h(b, a);
                    b.setBaseSourceMapNode(d);
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++)
                        f[g - 1] = arguments[g];
                    var i = b.execute(c, f);
                    b.setBaseSourceMapNode(null);
                    return i
                };
                this.$1.set(a, e);
                return e
            }
            return d("WebBloksUtils").nullthrows(b, "Script not found in FunctionTable: " + a)
        }
        ;
        b.entries = function() {
            return this.$1.entries()
        }
        ;
        b.isEmpty = function() {
            return this.$1.size === 0
        }
        ;
        b.combine = function(b) {
            return new a().loadEntries(b.$1).loadEntries(this.$1)
        }
        ;
        b.loadEntries = function(a) {
            var b = this;
            a.forEach(function(a, c) {
                b.$1.set(c, a)
            });
            return this
        }
        ;
        b.equalsTo = function(a) {
            return d("WebBloksUtils").deepEquals(Array.from(this.$1.keys()), Array.from(a.$1.keys()))
        }
        ;
        return a
    }();
    a.$2 = new Map();
    a.$3 = new Map();
    function h(a, b) {
        a = a.getSourceMapNode();
        b = new (c("WebBloksSourceMapRootNode"))(new (c("WebBloksSourceMapNode"))(a,[b]),new (c("WebBloksSourceMapPayloadMetadata"))(["ft"],a == null ? void 0 : a.getSourceMapID(),a == null ? void 0 : a.getLoggingID()));
        return b
    }
    g.WebBloksFunctionTableManager = a
}
), 98);
__d("WebBloksConstants", [], (function(a, b, c, d, e, f) {
    a = "bk.components.internal.Merge";
    b = "bk.components.internal.MergeWithBind";
    c = "bk.components.internal.Shadow";
    d = "bk.components.internal.Action";
    e = "bk.components.Flexbox";
    var g = "flex"
      , h = "bk.components.Image"
      , i = "bk.components.Collection"
      , j = "bk.components.Slider"
      , k = "_style"
      , l = "child_templates"
      , m = "$DESCENDANT_HAS_BIND"
      , n = "on_bind"
      , o = "on_reflow"
      , p = 13
      , q = 32
      , r = 37
      , s = 39
      , t = "bk_context_key_controller_associated_object"
      , u = "text_input_associated_object"
      , v = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
    f.BK_INTERNAL_MERGE = a;
    f.BK_INTERNAL_MERGE_WITH_BIND = b;
    f.BK_INTERNAL_SHADOW = c;
    f.BK_INTERNAL_ACTION = d;
    f.BK_FLEXBOX = e;
    f.BK_FLEX = g;
    f.BK_IMAGE = h;
    f.BK_COLLECTION = i;
    f.BK_SLIDER = j;
    f.BK_STYLE_ATTR = k;
    f.CHILD_TEMPLATES = l;
    f.DESCENDANT_HAS_BIND = m;
    f.ON_BIND = n;
    f.ON_REFLOW = o;
    f.KEY_RETURN = p;
    f.KEY_SPACE = q;
    f.KEY_LEFT = r;
    f.KEY_RIGHT = s;
    f.CONTROLLER_ASSOCIATED_OBJECT = t;
    f.TEXT_INPUT_ASSOCIATED_OBJECT = u;
    f.WEBBLOKS_DEFAULT_FONT_FAMILY = v
}
), 66);
__d("WebBloksInterpreterEnvironment", ["Promise", "WebBloksConstants", "WebBloksErrors", "WebBloksPayloadParser", "WebBloksScopedIds", "WebBloksScriptDebuggingUtils", "WebBloksScriptExecutor", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a(a, c, e) {
            var f = this;
            this.callArgsStack = [];
            this.splicesStack = [];
            this.scope = d("WebBloksUtils").EMPTY_KEY_PATH;
            this.execute = function(a, b) {
                try {
                    f.bloksContext.treeManager.beginUpdates();
                    return d("WebBloksScriptExecutor").execute(f, a, b)
                } finally {
                    f.bloksContext.treeManager.endUpdates()
                }
            }
            ;
            this.executeCatch = function(a, b) {
                try {
                    return f.execute(a, b)
                } catch (b) {
                    d("WebBloksScriptDebuggingUtils").logScriptError(f.objectSet, b, a, f)
                }
            }
            ;
            this.executeOnNextTick = function(a, c) {
                (h || (h = b("Promise"))).resolve().then(function() {
                    f.execute(a, c)
                })["catch"](function(b) {
                    return d("WebBloksScriptDebuggingUtils").logScriptError(f.objectSet, b, a, f)
                })
            }
            ;
            this.bloksContext = a;
            this.$1 = c;
            this.$3 = e
        }
        var c = a.prototype;
        c.getResources = function() {
            var a;
            return (a = this.resources) != null ? a : this.bloksContext.treeManager.getCommittedTreeResources()
        }
        ;
        c.getScriptMode = function() {
            return this.$3
        }
        ;
        c.requireResources = function() {
            return d("WebBloksUtils").nullthrows(this.getResources())
        }
        ;
        c.readVariable = function(a) {
            var b, c = this.requireResources().variables.get(a);
            (b = this.variableAccessLog) == null ? void 0 : b.add(a);
            return c
        }
        ;
        c.readExpandedVariable = function(a) {
            var b, c = this.getExpandedVariablesFromEnvOrTree();
            c = c.get(a);
            (b = this.variableAccessLog) == null ? void 0 : b.add(a);
            return c
        }
        ;
        c.readParameter = function(a) {
            return this.requireResources().parameters[a]
        }
        ;
        c.readValue = function(a) {
            var b = this.requireResources().values.get(a);
            if (!b)
                throw new (d("WebBloksErrors").WebBloksError)("Value for referenced id " + a + " not found!");
            return this.execute(b.expression, d("WebBloksUtils").EMPTY_ARRAY)
        }
        ;
        c.getExpandedVariablesFromEnvOrTree = function() {
            var a;
            return (a = this.expandedVariablesOverride) != null ? a : this.bloksContext.treeManager.getExpandedVariables()
        }
        ;
        c.readManifestEntry = function(a) {
            var b = this.requireResources().variableDefinitions.get(a);
            if (b == null)
                throw new (d("WebBloksErrors").WebBloksError)("Data manifest for referenced internal variable id " + a + " not found!");
            return b
        }
        ;
        c.readPayload = function(a) {
            var b = this.requireResources().payloads.get(a);
            if (b == null)
                throw new (d("WebBloksErrors").WebBloksError)("Payload for referenced embedded payload id " + a + " not found!");
            return b
        }
        ;
        c.executeActionPayload = function(a) {
            var b = this.bloksContext
              , c = b.objectSet;
            b = b.treeManager;
            var e = a.action
              , f = a.tree;
            a = {
                layout: {
                    bloks_payload: a
                }
            };
            b.beginUpdates();
            try {
                var g;
                if (e != null)
                    e = e,
                    g = d("WebBloksPayloadParser").parseAction(a, c.environment.traversalKeys, this.getBaseSourceMapNode());
                else if (f != null) {
                    f = f[d("WebBloksConstants").BK_INTERNAL_ACTION];
                    e = f.handler;
                    g = d("WebBloksPayloadParser").parseTree(a, c.environment.traversalKeys)
                } else
                    throw new (d("WebBloksErrors").WebBloksError)("No bloks action found in response");
                b.synchronouslyAddTreeResources(g);
                return this.execute(e, [this.bloksContext])
            } finally {
                b.endUpdates()
            }
        }
        ;
        c.$4 = function() {
            var b = new a(this.bloksContext,this.getBaseSourceMapNode());
            b.callArgsStack = this.callArgsStack;
            b.resources = this.resources;
            b.expandedVariablesOverride = this.expandedVariablesOverride;
            b.variableAccessLog = this.variableAccessLog;
            return b
        }
        ;
        c.createBloksModelScopedContext = function(a) {
            if (a === this.scope)
                return this;
            var b = this.$4();
            b.scope = (a = a) != null ? a : d("WebBloksUtils").EMPTY_KEY_PATH;
            return b
        }
        ;
        c.createScopedContext = function() {
            var a = this.$4();
            a.scope = d("WebBloksScopedIds").extendKeyPath(this.scope);
            return a
        }
        ;
        c.getBaseSourceMapNode = function() {
            var a;
            return (a = this.$1) == null ? void 0 : a.makeCopyWithNewParent((a = this.$1) == null ? void 0 : a.getParent())
        }
        ;
        c.setBaseSourceMapNode = function(a) {
            this.$1 = a
        }
        ;
        c.getSourceMapNode = function() {
            return this.$2
        }
        ;
        c.setSourceMapNode = function(a) {
            this.$2 = a
        }
        ;
        return a
    }();
    Object.defineProperties(a.prototype, {
        actions: {
            get: function() {
                return this.bloksContext.objectSet.environment.actions
            },
            enumerable: !1
        },
        objectSet: {
            get: function() {
                return this.bloksContext.objectSet
            },
            enumerable: !1
        },
        treeManager: {
            get: function() {
                return this.bloksContext.treeManager
            },
            enumerable: !1
        }
    });
    g["default"] = a
}
), 98);
__d("WebBloksLegacyTraverser", ["WebBloksConstants", "WebBloksErrors", "WebBloksMutations", "WebBloksUpdateTraversal", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    function a(a, b, c) {
        return h(a.snapshotPendingComponent(), new (d("WebBloksMutations").ServerIdTarget)(b), c)
    }
    function h(a, b, c) {
        var d;
        a.traverse(function(a) {
            if (b.targets(a)) {
                d = a;
                return !0
            }
            return !1
        }, c);
        return d
    }
    function b(a, b, c, e) {
        a = a.snapshotPendingComponent();
        var f = null;
        e = d("WebBloksUpdateTraversal").runUpdateTraversal(a, {
            apply: function(a) {
                a.getId() === b && (f = a);
                i(a, b) && (f = a);
                if (f) {
                    var e = a.get(d("WebBloksConstants").ON_REFLOW);
                    e != null && c(e, [a])
                }
                return a
            },
            onUpdatesApplied: function(a) {
                f === a && (f = null)
            }
        }, e);
        if (e !== a)
            throw new (d("WebBloksErrors").WebBloksError)("Reflow traversal produced an updated componnent")
    }
    function c(a, b, c, e) {
        a = a.snapshotPendingComponent();
        var f = null;
        e = d("WebBloksUpdateTraversal").runUpdateTraversal(a, {
            apply: function(a) {
                a.getId() === b && (f = a);
                if (a.shadowParents)
                    for (var e = a.shadowParents, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        var i;
                        if (g) {
                            if (h >= e.length)
                                break;
                            i = e[h++]
                        } else {
                            h = e.next();
                            if (h.done)
                                break;
                            i = h.value
                        }
                        i = i;
                        i.id === b && (f = a);
                        f && i.reduce && c(i.reduce, d("WebBloksUtils").EMPTY_ARRAY)
                    }
                return a
            },
            onUpdatesApplied: function(a) {
                f === a && (f = null)
            }
        }, e);
        if (e !== a)
            throw new (d("WebBloksErrors").WebBloksError)("Reduce traversal produced an updated componnent")
    }
    function i(a, b) {
        return (a = (a = a.shadowParents) == null ? void 0 : a.find(function(a) {
            return a.id === b
        })) != null ? a : null
    }
    function e(a, b, c) {
        var d;
        b.snapshotPendingComponent().traverse(function(a) {
            a = i(a, c);
            if (a) {
                d = a.init_state;
                return !0
            }
            return !1
        }, a);
        return d
    }
    g.findComponentByServerId = a;
    g.findComponent = h;
    g.reflow = b;
    g.reduce = c;
    g.getStateInitializer = e
}
), 98);
__d("WebBloksExpressionParser", ["WebBloksScript", "WebBloksSourceMapNode", "WebBloksSourceMapPayloadMetadata", "WebBloksSourceMapRootNode"], (function(a, b, c, d, e, f, g) {
    function a(a, b, e) {
        var f = null;
        (b == null ? void 0 : b.sourceMapNode) != null && (f = new (c("WebBloksSourceMapNode"))(b.sourceMapNode,e),
        f = h(f));
        return new (d("WebBloksScript").WebBloksScript)(a,f)
    }
    function h(a) {
        var b = a == null ? void 0 : a.getSourceMapID()
          , d = a == null ? void 0 : a.getLoggingID()
          , e = a
          , f = null
          , g = [];
        while (e != null) {
            g.push(e.getTreePath());
            if (e instanceof c("WebBloksSourceMapRootNode")) {
                f = e.getPayloadPath();
                break
            }
            e = e.getParent()
        }
        e = g.toReversed().flat(1);
        return new (c("WebBloksSourceMapRootNode"))(new (c("WebBloksSourceMapNode"))(a,e),new (c("WebBloksSourceMapPayloadMetadata"))(f,b,d))
    }
    g.makeWebBloksExpression = a
}
), 98);
__d("WebBloksScriptString", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return a
    }
    function b(a) {
        return a
    }
    function c(a) {
        return typeof a === "string"
    }
    f.castWebBloksScriptStringFromString = a;
    f.castWebBloksScriptStringToString = b;
    f.isWebBloksScriptString = c
}
), 66);
__d("WebBloksModel", ["WebBloksConstants", "WebBloksErrors", "WebBloksExpressionParser", "WebBloksScript", "WebBloksScriptParser", "WebBloksScriptString", "WebBloksUpdateTraversal", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, c) {
            c === void 0 && (c = d("WebBloksUtils").getNextGlobalBloksClientId()),
            this.$isBloksModel = !0,
            this.clientId = c,
            this.styleId = a,
            this.$1 = b,
            this.uiMutableContainer = {}
        }
        var b = a.prototype;
        b.getId = function() {
            var a = this.$1.id;
            return a == null ? null : String(a)
        }
        ;
        b.get = function(a) {
            return this.$1[a]
        }
        ;
        b.set = function(a, b) {
            this.$1[a] = b
        }
        ;
        b.getSubNode = function(a) {
            a = this.get(a);
            return a
        }
        ;
        b.getExpression = function(a) {
            var b = this.get(a)
              , c = b;
            if (b == null)
                return b;
            if (b instanceof d("WebBloksScript").WebBloksScript)
                return b;
            d("WebBloksScriptString").isWebBloksScriptString(b) && (b = d("WebBloksScriptParser").parse(b));
            if (Array.isArray(b) || typeof b === "function") {
                b = d("WebBloksExpressionParser").makeWebBloksExpression(b, this, [this.styleId, a]);
                this.set(a, b);
                if (this.sourceModel && c === this.sourceModel.get(a)) {
                    (c = this.sourceModel) == null ? void 0 : c.set(a, b)
                }
                return b
            }
            return null
        }
        ;
        b.getSubNodes = function(a) {
            return (a = this.get(a)) != null ? a : d("WebBloksUtils").EMPTY_ARRAY
        }
        ;
        b.getChildren_DEPRECATED = function(a) {
            a === void 0 && (a = "children");
            a = this.getSubNodes(a);
            return a
        }
        ;
        b.getStyle = function(a) {
            var b = this.getSubNode(d("WebBloksConstants").BK_STYLE_ATTR);
            return h(b) && (b == null ? void 0 : b.styleId) === a ? b : null
        }
        ;
        b.getValues = function() {
            return this.$1
        }
        ;
        b.cloneValues = function() {
            var a = babelHelpers["extends"]({}, this.$1)
              , b = this.getSubNodes("children");
            Array.isArray(b) && b.length !== 0 && (a.children = b.slice());
            return a
        }
        ;
        b.makeCopy = function(b) {
            var c = new a(this.styleId,this.cloneValues(),this.clientId);
            b && Object.assign(c.$1, b);
            c.uiMutableContainer = this.uiMutableContainer;
            c.shadowParents = this.shadowParents;
            c.keyPath = this.keyPath;
            c.sourceModel = this.sourceModel;
            c.sourceMapNode = this.sourceMapNode;
            return c
        }
        ;
        b.makeBoundCopy = function() {
            var a = this.makeCopy();
            a.sourceModel = this;
            return a
        }
        ;
        b.makeCopyWithKeypath = function(a, b) {
            var c = this.makeCopy();
            c.clientId !== a && (c.uiMutableContainer = {});
            c.clientId = a;
            c.keyPath = b;
            return c
        }
        ;
        b.makeDeepCopyWithNewClientIds = function(b, c) {
            return d("WebBloksUpdateTraversal").runUpdateTraversal(this, {
                apply: function(c) {
                    return a.makeCopyWithNewClientId(c, b)
                },
                onUpdatesApplied: function(a) {}
            }, c)
        }
        ;
        a.makeCopyWithNewClientId = function(b, c) {
            var d = new a(b.styleId,b.cloneValues());
            d.shadowParents = b.shadowParents;
            d.keyPath = c;
            d.sourceMapNode = b.sourceMapNode;
            return d
        }
        ;
        b.traverse = function(a, b) {
            if (a(this))
                return !0;
            var c = b[this.styleId];
            if (c == null)
                return !1;
            var d = c.subnodes;
            c = c.plural_subnodes;
            if (d)
                for (var d = d, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var g;
                    if (e) {
                        if (f >= d.length)
                            break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done)
                            break;
                        g = f.value
                    }
                    g = g;
                    g = this.getSubNode(g);
                    if (h(g) && g.traverse(a, b))
                        return !0
                }
            if (c)
                for (g = c,
                f = Array.isArray(g),
                e = 0,
                g = f ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    if (f) {
                        if (e >= g.length)
                            break;
                        d = g[e++]
                    } else {
                        e = g.next();
                        if (e.done)
                            break;
                        d = e.value
                    }
                    c = d;
                    d = this.getSubNodes(c);
                    if (Array.isArray(d))
                        for (var c = d, d = Array.isArray(c), i = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                            var j;
                            if (d) {
                                if (i >= c.length)
                                    break;
                                j = c[i++]
                            } else {
                                i = c.next();
                                if (i.done)
                                    break;
                                j = i.value
                            }
                            j = j;
                            if (h(j) && j.traverse(a, b))
                                return !0
                        }
                }
            return !1
        }
        ;
        b.toJSON = function() {
            var a, b = Object.entries(this.$1).filter(function(a) {
                a = a[0];
                return a[0] !== "$"
            }).map(function(a) {
                var b = a[0];
                a = a[1];
                if (h(a))
                    return [b, a.toJSON()];
                else if (Array.isArray(a) && a[0] && h(a[0]))
                    return [b, a.map(function(a) {
                        return a.toJSON()
                    })];
                return [b, a]
            });
            return a = {},
            a[this.styleId] = Object.fromEntries(b),
            a
        }
        ;
        return a
    }();
    function h(a) {
        return a != null && (a == null ? void 0 : a.$isBloksModel) === !0
    }
    g.WebBloksModel = a;
    g.isWebBloksModel = h
}
), 98);
__d("WebBloksParseResult", [], (function(a, b, c, d, e, f) {
    a = function(a, b, c) {
        this.unboundModel = a,
        this.resources = b,
        this.loggingID = c
    }
    ;
    f["default"] = a
}
), 66);
__d("WebBloksPayloadParser", ["WebBloksErrors", "WebBloksModel", "WebBloksModelParser", "WebBloksParseResult", "WebBloksSourceMapNode", "WebBloksSourceMapPayloadMetadata", "WebBloksSourceMapRootNode", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
        var f, g;
        a = a == null ? void 0 : (a = a.layout) == null ? void 0 : a.bloks_payload;
        f = (f = a.error_attribution) == null ? void 0 : f.logging_id;
        g = (g = a.error_attribution) == null ? void 0 : g.source_map_id;
        if (a.action == null)
            throw new (d("WebBloksErrors").WebBloksError)("Invalid Bloks payload received from server. Action is expected but is missing:\n\n" + JSON.stringify(a));
        var h = new (d("WebBloksModel").WebBloksModel)("-1",{});
        h.sourceMapNode = new (c("WebBloksSourceMapRootNode"))(new (c("WebBloksSourceMapNode"))(e),new (c("WebBloksSourceMapPayloadMetadata"))(["action"],g,f));
        e = d("WebBloksModelParser").parseBloksTreeResources(a, h, b);
        return new (c("WebBloksParseResult"))(h,e,f)
    }
    function b(a, b, e) {
        var f, g;
        a = a == null ? void 0 : (a = a.layout) == null ? void 0 : a.bloks_payload;
        var h = d("WebBloksUtils").cast(a.tree);
        f = (f = a.error_attribution) == null ? void 0 : f.logging_id;
        g = (g = a.error_attribution) == null ? void 0 : g.source_map_id;
        if (h == null)
            throw new (d("WebBloksErrors").WebBloksError)("Invalid Bloks payload received from server. Tree is expected but is missing:\n\n" + JSON.stringify(a));
        h = d("WebBloksModelParser").parseBloksModelFromJSON(h, b, new (c("WebBloksSourceMapRootNode"))(new (c("WebBloksSourceMapNode"))(e),new (c("WebBloksSourceMapPayloadMetadata"))(["tree"],g,f)));
        e = d("WebBloksModelParser").parseBloksTreeResources(a, h, b);
        return new (c("WebBloksParseResult"))(h,e,f)
    }
    g.parseAction = a;
    g.parseTree = b
}
), 98);
__d("WebBloksScopedIds", ["WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    c = function() {
        function a() {
            this.scopedClientIdToClientIdMap = new Map()
        }
        var b = a.prototype;
        b.createScopedClientId = function(a, b) {
            return a + "/" + b
        }
        ;
        b.registerOrGetClientIdForScopedId = function(a, b) {
            a = this.createScopedClientId(a, b);
            b = this.scopedClientIdToClientIdMap.get(a);
            if (b !== void 0)
                return b;
            else {
                b = d("WebBloksUtils").getNextGlobalBloksClientId();
                this.scopedClientIdToClientIdMap.set(a, b);
                return b
            }
        }
        ;
        b.getScopedClientId = function(a, b) {
            return this.registerOrGetClientIdForScopedId(a.clientId, b)
        }
        ;
        b.copyModelWithKeyPath = function(a, b, c) {
            return a.makeCopyWithKeypath(this.getScopedClientId(a, c), b)
        }
        ;
        return a
    }();
    function a(a, b, c, d) {
        return i(b, h(a.slice(0, c), d))
    }
    function h(a, b) {
        b = b === "INTERNAL_VARIABLE" ? "/" : "|";
        var c = [];
        for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var f;
            if (d) {
                if (e >= a.length)
                    break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done)
                    break;
                f = e.value
            }
            f = f;
            c.push(b);
            c.push(f)
        }
        return c.join("")
    }
    function i(a, b) {
        return a + "#" + b
    }
    function b(a, b) {
        b === void 0 && (b = null);
        a = a != null ? a.slice() : [];
        a.push((b = b) != null ? b : d("WebBloksUtils").getNextGlobalBloksClientId());
        return a
    }
    g.ClientIdToScopedIdMapper = c;
    g.getScopedVariableIdAtDepth = a;
    g.buildKeypathBase = h;
    g.buildScopedVariableIdentifier = i;
    g.extendKeyPath = b
}
), 98);
__d("WebBloksTreeResources", ["WebBloksFunctionTableManager", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, c, d, e, f, g, h, i) {
            this.$1 = !0;
            this.variableDefinitions = (a = a) != null ? a : [];
            this.payloads = (a = b) != null ? a : new Map();
            this.dataPropsEntries = (b = c) != null ? b : [];
            this.componentQueries = (a = d) != null ? a : [];
            this.functionTable = e;
            this.ftDeclare = f;
            this.ftInclude = g;
            this.values = (c = i) != null ? c : [];
            this.templates = (b = h) != null ? b : new Map()
        }
        var b = a.prototype;
        b.setShouldCommitPublishStateUpdates = function(a) {
            a === void 0 && (a = !0),
            this.$1 = a
        }
        ;
        b.shouldCommitPublishStateUpdates = function() {
            return this.$1
        }
        ;
        b.clone = function() {
            return new a(this.variableDefinitions,this.payloads,this.dataPropsEntries,this.componentQueries,this.functionTable,this.ftDeclare,this.ftInclude,this.templates,this.values)
        }
        ;
        a.empty = function() {
            return new a()
        }
        ;
        return a
    }();
    b = function() {
        function a(a, b, c, e, f, g, h) {
            a === void 0 && (a = new Map()),
            b === void 0 && (b = new Map()),
            c === void 0 && (c = new Map()),
            e === void 0 && (e = d("WebBloksUtils").EMPTY_OBJECT),
            f === void 0 && (f = new (d("WebBloksFunctionTableManager").WebBloksFunctionTableManager)()),
            g === void 0 && (g = new Map()),
            h === void 0 && (h = new Map()),
            this.variableDefinitions = a,
            this.payloads = b,
            this.variables = c,
            this.parameters = e,
            this.functionTable = f,
            this.values = g,
            this.templates = h
        }
        var b = a.prototype;
        b.withUpdatedEntries = function(b, c) {
            return !b && !c ? this : new a((b = b) != null ? b : this.variableDefinitions,this.payloads,(b = c) != null ? b : this.variables,this.parameters,this.functionTable,this.values,this.templates)
        }
        ;
        b.withUpdatedParameters = function(b) {
            return !b || d("WebBloksUtils").isEmptyObject(b) && d("WebBloksUtils").isEmptyObject(this.parameters) ? this : new a(this.variableDefinitions,this.payloads,this.variables,b,this.functionTable,this.values,this.templates)
        }
        ;
        b.withVariableUpdates = function(b) {
            var c = new Map(this.variables);
            d("WebBloksUtils").putAll(c, b);
            return new a(this.variableDefinitions,this.payloads,c,this.parameters,this.functionTable,this.values,this.templates)
        }
        ;
        b.withPayloadUpdates = function(b) {
            if (b.size === 0)
                return this;
            var c = new Map(this.payloads);
            d("WebBloksUtils").putAll(c, b);
            return new a(this.variableDefinitions,c,this.variables,this.parameters,this.functionTable,this.values,this.templates)
        }
        ;
        b.withFunctionTableUpdates = function(b, c, e) {
            b = new (d("WebBloksFunctionTableManager").WebBloksFunctionTableManager)((b = b) != null ? b : d("WebBloksUtils").EMPTY_OBJECT);
            c != null && d("WebBloksFunctionTableManager").WebBloksFunctionTableManager.cacheFunctionTable(c, b);
            e != null && (b = b.combine(d("WebBloksUtils").nullthrows(d("WebBloksFunctionTableManager").WebBloksFunctionTableManager.getFunctionTableFromCache(e), "Shared bundle not found: " + e)));
            b = b.combine(this.functionTable);
            return new a(this.variableDefinitions,this.payloads,this.variables,this.parameters,b,this.values,this.templates)
        }
        ;
        b.withValueUpdates = function(b) {
            if (b.length === 0)
                return this;
            var c = new Map();
            b.forEach(function(a) {
                c.set(a.id, a)
            });
            return new a(this.variableDefinitions,this.payloads,this.variables,this.parameters,this.functionTable,c,this.templates)
        }
        ;
        b.withTemplateUpdates = function(b) {
            if (b.size === 0)
                return this;
            var c = new Map(this.templates);
            d("WebBloksUtils").putAll(c, b);
            return new a(this.variableDefinitions,this.payloads,this.variables,this.parameters,this.functionTable,this.values,c)
        }
        ;
        b.equalsTo = function(a) {
            return this.payloads === a.payloads && this.parameters === a.parameters && this.variableDefinitions === a.variableDefinitions && d("WebBloksUtils").shallowMapEqual(this.variables, a.variables) && this.functionTable.equalsTo(a.functionTable) && d("WebBloksUtils").shallowMapEqual(this.values, a.values) && d("WebBloksUtils").shallowMapEqual(this.templates, a.templates)
        }
        ;
        return a
    }();
    g.WebBloksTreeResources = a;
    g.WebBloksTreeResourcesState = b
}
), 98);
__d("WebBloksScopedComponentQueryDefinition", ["WebBloksErrors", "WebBloksLegacyTraverser", "WebBloksMutations", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    function a(a, b, c) {
        return b.map(function(b) {
            return h(a, b, c)
        })
    }
    function h(a, b, c) {
        var e = new Map()
          , f = Object.entries(b.targets);
        for (var g = 0; g < f.length; g++) {
            var h = f[g]
              , i = h[0];
            h = h[1];
            h = d("WebBloksLegacyTraverser").findComponent(a, new (d("WebBloksMutations").ServerIdTarget)(h), c);
            if (h != null) {
                h = {
                    serverId: d("WebBloksUtils").nullthrows(h.getId()),
                    clientId: h.clientId,
                    keyPath: (h = h.keyPath) != null ? h : []
                };
                e.set(i, h)
            } else
                throw new (d("WebBloksErrors").WebBloksError)("Failed to find async component container for " + b.id)
        }
        return {
            id: b.id,
            appIdExpression: b.app_id_expr,
            paramsExpression: b.params,
            clientParamsExpression: b.client_params,
            dependencies: b.dependencies,
            targets: e,
            cacheTTLExpression: b.cache_ttl_expr,
            isScoped: b.is_scoped
        }
    }
    function b(a, b, c) {
        var e = new Map();
        for (var f = (f = (f = b.targets) == null ? void 0 : f.entries()) != null ? f : [], g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var f, i;
            if (g) {
                if (h >= f.length)
                    break;
                i = f[h++]
            } else {
                h = f.next();
                if (h.done)
                    break;
                i = h.value
            }
            i = i;
            var j = i[0];
            i = i[1];
            i = d("WebBloksLegacyTraverser").findComponent(a, new (d("WebBloksMutations").ServerIdTarget)(i.serverId), c);
            if (i != null) {
                i = {
                    serverId: d("WebBloksUtils").nullthrows(i.getId()),
                    clientId: i.clientId,
                    keyPath: i.keyPath
                };
                e.set(j, i)
            } else
                throw new (d("WebBloksErrors").WebBloksError)("Failed to find async component container for " + b.id)
        }
        return babelHelpers["extends"]({}, b, {
            targets: e
        })
    }
    g.generateTreeScopedComponentQueryDefs = a;
    g.generateTreeScopedComponentQueryDefFromScopedDef = b
}
), 98);
__d("WebBloksMutations", ["WebBloksConstants", "WebBloksModel"], (function(a, b, c, d, e, f, g) {
    var h = function() {
        function a(a) {
            this.id = a
        }
        var b = a.prototype;
        b.targets = function(a) {
            return a.clientId === this.id
        }
        ;
        return a
    }();
    c = function() {
        function a(a) {
            this.id = a
        }
        var b = a.prototype;
        b.targets = function(a) {
            return a.getId() === this.id
        }
        ;
        return a
    }();
    e = function() {
        function a(a, b) {
            this.id = a,
            this.traversalKeys = b
        }
        var b = a.prototype;
        b.targets = function(a) {
            var b = a.getChildren_DEPRECATED();
            for (var b = b, c = Array.isArray(b), e = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var f;
                if (c) {
                    if (e >= b.length)
                        break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done)
                        break;
                    f = e.value
                }
                f = f;
                if (f.getId() === this.id)
                    return !0
            }
            f = this.traversalKeys[a.styleId];
            if (!f)
                return !1;
            e = f.subnodes;
            c = f.plural_subnodes;
            if (c) {
                for (b = c,
                f = Array.isArray(b),
                c = 0,
                b = f ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var g;
                    if (f) {
                        if (c >= b.length)
                            break;
                        g = b[c++]
                    } else {
                        c = b.next();
                        if (c.done)
                            break;
                        g = c.value
                    }
                    g = g;
                    for (var g = a.getChildren_DEPRECATED(g), h = Array.isArray(g), i = 0, g = h ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        var j;
                        if (h) {
                            if (i >= g.length)
                                break;
                            j = g[i++]
                        } else {
                            i = g.next();
                            if (i.done)
                                break;
                            j = i.value
                        }
                        j = j;
                        if ((j == null ? void 0 : j.getId()) === this.id)
                            return !0
                    }
                }
                if (e)
                    for (j = e,
                    i = Array.isArray(j),
                    h = 0,
                    j = i ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        if (i) {
                            if (h >= j.length)
                                break;
                            g = j[h++]
                        } else {
                            h = j.next();
                            if (h.done)
                                break;
                            g = h.value
                        }
                        c = g;
                        f = a.getSubNode(c);
                        if (f instanceof d("WebBloksModel").WebBloksModel && (f == null ? void 0 : f.getId()) === this.id)
                            return !0
                    }
            }
            return !1
        }
        ;
        return a
    }();
    function a(a, b, c, d) {
        a.enqueueUpdateOperation(new h(b.clientId), {
            update: function(a) {
                a.set(c, d)
            },
            shouldUpdate: function(a) {
                return a.get(c) !== d
            }
        })
    }
    function b(a, b, c, e) {
        typeof e !== "number" && j(a, "addChildToContainer expected number, got %s: %s", typeof e, e);
        c = c.styleId === d("WebBloksConstants").BK_INTERNAL_MERGE ? c.getChildren_DEPRECATED() : [c];
        c.forEach(function(c, d) {
            i(a, b, c, e >= 0 ? e + d : e)
        })
    }
    function i(a, b, c, d) {
        a.enqueueUpdateOperation(new h(b.clientId), {
            update: function(a) {
                var b = d === -1 ? a.getChildren_DEPRECATED().length : d;
                a.getChildren_DEPRECATED().splice(b, 0, c)
            }
        })
    }
    function j(a, b) {
        var c;
        for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
            e[f - 2] = arguments[f];
        (c = a.bloksContext.objectSet.environment.logger).warn.apply(c, [b].concat(e))
    }
    g.ClientIdTarget = h;
    g.ServerIdTarget = c;
    g.ChildServerIdTarget = e;
    g.updateProperty = a;
    g.addChildToContainer = b;
    g.warn = j
}
), 98);
__d("WebBloksUpdateTraversal", ["WebBloksConstants", "WebBloksModel"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
        var e = b.apply(a)
          , f = !!e.get(d("WebBloksConstants").ON_BIND)
          , g = c[e.styleId];
        if (g && g.subnodes) {
            for (var i = g.subnodes, j = Array.isArray(i), k = 0, i = j ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var l;
                if (j) {
                    if (k >= i.length)
                        break;
                    l = i[k++]
                } else {
                    k = i.next();
                    if (k.done)
                        break;
                    l = k.value
                }
                l = l;
                var m = e.getSubNode(l);
                if (m instanceof d("WebBloksModel").WebBloksModel) {
                    var n = h(m, b, c);
                    n !== m && (e === a && (e = a.makeCopy()),
                    e.set(l, n));
                    f = f || n.get(d("WebBloksConstants").DESCENDANT_HAS_BIND) !== !1
                }
            }
            if (g.plural_subnodes)
                for (m = g.plural_subnodes,
                l = Array.isArray(m),
                n = 0,
                m = l ? m : m[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    if (l) {
                        if (n >= m.length)
                            break;
                        k = m[n++]
                    } else {
                        n = m.next();
                        if (n.done)
                            break;
                        k = n.value
                    }
                    j = k;
                    i = e.getChildren_DEPRECATED(j);
                    g = i;
                    for (k = 0; k < i.length; k++) {
                        var o = i[k];
                        if (o) {
                            var p = h(o, b, c);
                            p !== o && (g === i && (g = i.slice()),
                            g[k] = p);
                            f = f || p.get(d("WebBloksConstants").DESCENDANT_HAS_BIND) !== !1
                        }
                    }
                    g !== i && (e === a && (e = a.makeCopy()),
                    e.set(j, g))
                }
        }
        e !== a && e.set(d("WebBloksConstants").DESCENDANT_HAS_BIND, f);
        b.onUpdatesApplied(e);
        return e
    }
    g.runUpdateTraversal = h
}
), 98);
__d("WebBloksModelParser", ["WebBloksConstants", "WebBloksModel", "WebBloksScopedComponentQueryDefinition", "WebBloksScriptParser", "WebBloksSourceMapNode", "WebBloksSourceMapPayloadMetadata", "WebBloksSourceMapRootNode", "WebBloksTreeResources", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    function h(a, b, e) {
        var f = d("WebBloksUtils").nullthrows(d("WebBloksUtils").getFirstKey(a), "not a valid bloksmodel")
          , g = babelHelpers["extends"]({}, a[f]);
        a = new (d("WebBloksModel").WebBloksModel)(f,g);
        a.sourceMapNode = e;
        var i = a.getExpression(d("WebBloksConstants").ON_BIND) != null;
        if (f === d("WebBloksConstants").BK_INTERNAL_SHADOW) {
            var j = g.child
              , k = babelHelpers.objectWithoutPropertiesLoose(g, ["child"]);
            k.id = String(k.id);
            j = h(d("WebBloksUtils").cast(j), b, new (c("WebBloksSourceMapRootNode"))(new (c("WebBloksSourceMapNode"))(),new (c("WebBloksSourceMapPayloadMetadata"))()));
            j.shadowParents ? j.shadowParents.unshift(k) : j.shadowParents = [k];
            i = i || j.get(d("WebBloksConstants").DESCENDANT_HAS_BIND);
            return j
        }
        k = b[f];
        if (k != null) {
            j = k.subnodes;
            k = k.plural_subnodes;
            if (j)
                for (var j = j, l = Array.isArray(j), m = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var n;
                    if (l) {
                        if (m >= j.length)
                            break;
                        n = j[m++]
                    } else {
                        m = j.next();
                        if (m.done)
                            break;
                        n = m.value
                    }
                    n = n;
                    if (g[n] != null) {
                        var o = h(g[n], b, new (c("WebBloksSourceMapNode"))(e,[f, n]));
                        g[n] = o;
                        i = i || o.get(d("WebBloksConstants").DESCENDANT_HAS_BIND)
                    }
                }
            if (k) {
                o = function() {
                    if (q) {
                        if (r >= p.length)
                            return "break";
                        n = p[r++]
                    } else {
                        r = p.next();
                        if (r.done)
                            return "break";
                        n = r.value
                    }
                    var a = n;
                    g[a] != null && (g[a] = g[a].map(function(g, j) {
                        g = h(g, b, new (c("WebBloksSourceMapNode"))(e,[f, a, String(j)]));
                        i = i || g.get(d("WebBloksConstants").DESCENDANT_HAS_BIND);
                        return g
                    }))
                }
                ;
                for (var p = k, q = Array.isArray(p), r = 0, p = q ? p : p[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    m = o();
                    if (m === "break")
                        break
                }
            }
        }
        g[d("WebBloksConstants").DESCENDANT_HAS_BIND] = i;
        return a
    }
    function a(a, b, c) {
        var e = a.component_queries;
        e = e === void 0 ? [] : e;
        var f = a.embedded_payloads;
        f = f === void 0 ? [] : f;
        var g = a.data;
        g = g === void 0 ? [] : g;
        var i = a.props;
        i = i === void 0 ? [] : i;
        var j = a.ft;
        j = j === void 0 ? {} : j;
        var k = a.values;
        k = k === void 0 ? [] : k;
        var l = a.templates;
        l = l === void 0 ? {} : l;
        var m = a.ft_declare;
        a = a.ft_include;
        return new (d("WebBloksTreeResources").WebBloksTreeResources)(g,new Map(f.map(function(a) {
            return [a.id, a]
        })),i,d("WebBloksScopedComponentQueryDefinition").generateTreeScopedComponentQueryDefs(b, e, c),j,m,a,new Map(Object.entries(l).map(function(a) {
            var e = a[0];
            a = a[1];
            return [e, h(d("WebBloksUtils").cast(a), c, b.sourceMapNode)]
        })),k.map(function(a) {
            return babelHelpers["extends"]({}, a, {
                expression: d("WebBloksScriptParser").parse(a.expression)
            })
        }))
    }
    g.parseBloksModelFromJSON = h;
    g.parseBloksTreeResources = a
}
), 98);
__d("WebBloksScriptDebuggingUtils", ["WebBloksAsyncActions", "WebBloksScriptPrinter", "WebDriverConfig"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d, e) {
        d = b == null ? void 0 : b.stackFrame;
        c("WebDriverConfig").isJestE2ETestRun && a.toastManager.enqueueSimpleToast(b.toString());
        a.environment.logger.scriptError(b)
    }
    var h = "com.bloks.www.bloks.error.report_to_sandbox";
    function b(a, b, c) {
        a && d("WebBloksAsyncActions").executeAsyncAction(a, h, {
            message: b,
            bloks_raw_stack_trace: c
        })["catch"](function() {
            return null
        })
    }
    function e(a) {
        a = a.slice();
        function b(a, c) {
            c === void 0 && (c = -1);
            c = c + 1;
            for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var f;
                if (d) {
                    if (e >= a.length)
                        break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done)
                        break;
                    f = e.value
                }
                f = f;
                Array.isArray(f) ? c = b(f, c) : f.lispyOffset = c
            }
            return c
        }
        b(a);
        return a
    }
    g.logScriptError = a;
    g.sendErrorToSandboxLogs = b;
    g.attachLispyOffsetsForWebBloksScriptNode = e
}
), 98);
__d("WebBloksScriptTokens", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        this.lispyOffset = (a = a) != null ? a : 0
    }
    ;
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            c = a.call(this, c) || this;
            c.type = "number";
            c.value = b;
            return c
        }
        return b
    }(a);
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            c = a.call(this, c) || this;
            c.type = "string";
            c.value = b;
            return c
        }
        return b
    }(a);
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            c = a.call(this, c) || this;
            c.type = "boolean";
            c.value = b;
            return c
        }
        return b
    }(a);
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            c = a.call(this, c) || this;
            c.type = "identifier";
            c.value = b;
            return c
        }
        return b
    }(a);
    f.WebBloksNumberToken = b;
    f.WebBloksStringToken = c;
    f.WebBloksBooleanToken = d;
    f.WebBloksIdentifierToken = e
}
), 66);
__d("WebBloksWhile", ["WebBloksBooleanUtils"], (function(a, b, c, d, e, f, g) {
    function a(a, b, c) {
        while (d("WebBloksBooleanUtils").isTrue(b()))
            c()
    }
    g["default"] = a
}
), 98);
__d("WebBloksScriptExecutor", ["Promise", "WebBloksErrors", "WebBloksScriptParser", "WebBloksScriptTokens", "WebBloksUtils", "WebBloksWhile"], (function(a, b, c, d, e, f, g) {
    var h;
    function i(a, b) {
        a = a.actions[b];
        if (a == null)
            throw new (d("WebBloksErrors").WebBloksUnknownActionError)(b);
        return a
    }
    var j = {
        "bk.action.core.FuncConst": function(a, b) {
            if (b.length !== 1)
                throw new (d("WebBloksErrors").WebBloksScriptError)("FuncConst supports only single args",a);
            var c = (a = a.splicesStack.at(-1)) != null ? a : [];
            return function(a) {
                try {
                    for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                        e[f - 1] = arguments[f];
                    a.callArgsStack.push(e);
                    a.splicesStack.push(c);
                    return m(a, b[0])
                } finally {
                    a.callArgsStack.pop(),
                    a.splicesStack.pop()
                }
            }
        },
        "bk.action.core.Coalesce": function(a, b) {
            for (var b = b, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                e = m(a, e);
                if (e != null)
                    return e
            }
            return null
        },
        "bk.action.core.If": function(a, b) {
            if (b.length !== 2 && b.length !== 3)
                throw new (d("WebBloksErrors").WebBloksScriptError)("If supports 2 or 3 args",a);
            var c = m(a, b[0]);
            if (c)
                return m(a, b[1]);
            else if (b.length === 3)
                return m(a, b[2]);
            else
                return null
        },
        "bk.action.core.Pattern": function(a, b) {
            if (b.length !== 2)
                throw new (d("WebBloksErrors").WebBloksScriptError)("Pattern supports only two args",a);
            a = m(a, b[0]);
            var c = function(a) {
                return m(a, n(a, b[1]))
            };
            return {
                "case": a,
                expression: c
            }
        },
        "bk.action.core.Default": function(a, b) {
            if (b.length !== 1)
                throw new (d("WebBloksErrors").WebBloksScriptError)("Default supports only one arg",a);
            return function(a) {
                return m(a, n(a, b[0]))
            }
        },
        "bk.action.core.While": function(a, b) {
            if (b.length !== 2)
                throw new (d("WebBloksErrors").WebBloksScriptError)("While supports only two arg",a);
            var e = function() {
                return m(a, n(a, b[0]))
            }
              , f = function() {
                return m(a, n(a, b[1]))
            };
            return c("WebBloksWhile")(a, e, f)
        },
        "bk.action.core.GetArg": function(a, b) {
            var c = a.callArgsStack;
            if (b.length !== 1)
                throw new (d("WebBloksErrors").WebBloksScriptError)("GetArg supports only single args",a);
            if (c.length === 0)
                throw new (d("WebBloksErrors").WebBloksScriptError)("GetArg received no callArgs",a);
            c = d("WebBloksUtils").peek(c);
            b = Number(b[0].value);
            b >= c.length && a.objectSet.environment.logger.mustfix("GetArg refers to a non existing argument: " + b + " out of " + c.length);
            return c[b]
        },
        "bk.action.core.SetArg": function(a, b) {
            var c = a.callArgsStack;
            if (b.length !== 2)
                throw new (d("WebBloksErrors").WebBloksScriptError)("SetArg supports only two args",a);
            if (c.length === 0)
                throw new (d("WebBloksErrors").WebBloksScriptError)("SetArg received no callArgs",a);
            c = d("WebBloksUtils").peek(c);
            var e = Number(b[0].value);
            c[e] = m(a, b[1]);
            return null
        },
        "bk.action.splice.Apply": function(a, b) {
            a.splicesStack.push(b.slice(1));
            try {
                return o(a, m(a, b[0]))
            } finally {
                a.splicesStack.pop()
            }
        },
        "bk.action.splice.Get": function(a, b) {
            b = b[0].value;
            b = d("WebBloksUtils").nullthrows(a.splicesStack.at(-1))[b];
            return m(a, b)
        }
    };
    function k(a, b) {
        var c = b[0];
        b = b.slice(1);
        if (Array.isArray(c) || !(c instanceof d("WebBloksScriptTokens").WebBloksIdentifierToken))
            throw new (d("WebBloksErrors").WebBloksScriptError)("First arg of calls must be a token",a);
        var e = c.value
          , f = a.getBaseSourceMapNode();
        f != null && a.setSourceMapNode(f.addToTreePath(String(c.lispyOffset)));
        f = j[e];
        if (f)
            return f(a, b);
        if (e[0] === "@")
            return j["bk.action.splice.Apply"](a, [[new (d("WebBloksScriptTokens").WebBloksIdentifierToken)("bk.action.bloks.GetScript"), new (d("WebBloksScriptTokens").WebBloksStringToken)(e.slice(1))]].concat(b));
        c = i(a, e);
        f = l(a, b);
        e = c.apply(void 0, [a].concat(f));
        return e
    }
    function l(a, b) {
        return b.map(function(b) {
            return m(a, b)
        })
    }
    function m(a, b) {
        if (Array.isArray(b))
            return k(a, b);
        if (b instanceof d("WebBloksScriptTokens").WebBloksIdentifierToken) {
            var c = b.value;
            if (c === "null")
                return null;
            if (c[0] === "&")
                return j["bk.action.splice.Get"](a, [new (d("WebBloksScriptTokens").WebBloksNumberToken)(parseInt(c.slice(1), 10))]);
            throw new (d("WebBloksErrors").WebBloksScriptError)('Unexpected identifier "' + c + '" in argument list')
        }
        return b.value
    }
    function n(a, b) {
        var c = b[0];
        b = b[1];
        if (c.value !== "bk.action.core.FuncConst")
            throw new (d("WebBloksErrors").WebBloksScriptError)("Expected FuncConst",a);
        return b
    }
    function o(a, b, c) {
        if (typeof b === "function") {
            var e;
            e = (e = c) != null ? e : [];
            return b.apply(void 0, [a].concat(e))
        } else {
            e = typeof b === "string" ? d("WebBloksScriptParser").parse(b) : d("WebBloksUtils").cast(b);
            try {
                a.callArgsStack.push((b = c) != null ? b : d("WebBloksUtils").EMPTY_ARRAY);
                return k(a, e)
            } finally {
                a.callArgsStack.pop()
            }
        }
    }
    function a(a, b, c) {
        return o(a, b, c)
    }
    g.execute = a
}
), 98);
__d("WebBloksScriptParser", ["WebBloksErrors", "WebBloksScriptDebuggingUtils", "WebBloksScriptString", "WebBloksScriptTokens"], (function(a, b, c, d, e, f, g) {
    var h = new (d("WebBloksScriptTokens").WebBloksBooleanToken)(!0)
      , i = new (d("WebBloksScriptTokens").WebBloksBooleanToken)(!1)
      , j = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function k(a) {
        switch (a) {
        case " ":
        case "\n":
        case "\r":
        case "\t":
        case ",":
            return !0;
        default:
            return !1
        }
    }
    function a(a) {
        var b = d("WebBloksScriptString").castWebBloksScriptStringToString(a);
        a = [];
        var c = [a]
          , e = 0;
        function f() {
            while (k(b[e]))
                e++
        }
        while (e < b.length) {
            f();
            var g = b[e];
            switch (g) {
            case "(":
                a = [];
                c.push(a);
                e++;
                break;
            case ")":
                g = c.pop();
                a = c[c.length - 1];
                if (!a)
                    throw new (d("WebBloksErrors").WebBloksScriptParseError)(e,"Unexpected ')'");
                a.push(g);
                e++;
                break;
            case '"':
                g = ++e;
                var h = !1;
                while (!0) {
                    var i = b.indexOf('"', e);
                    if (i === -1)
                        throw new (d("WebBloksErrors").WebBloksScriptParseError)(g,"Unterminated string");
                    var j = b.indexOf("\\", e);
                    if (i < j || j === -1) {
                        e = i;
                        break
                    }
                    e = j + 2;
                    h = !0
                }
                i = b.substring(g, e);
                a.push(new (d("WebBloksScriptTokens").WebBloksStringToken)(h ? l(g, i) : i));
                e++;
                break;
            default:
                j = e;
                while (!0) {
                    h = b[++e];
                    if (k(h) || h === ")" || h === "(" || h === void 0) {
                        a.push(m(b.substring(j, e)));
                        break
                    }
                }
            }
            if (c.length === 1)
                break
        }
        g = a[0];
        g = d("WebBloksScriptDebuggingUtils").attachLispyOffsetsForWebBloksScriptNode(g);
        return g
    }
    function l(a, b) {
        return JSON.parse('"' + b + '"')
    }
    function m(a) {
        if (a === "true")
            return h;
        else if (a === "false")
            return i;
        else if (j.test(a)) {
            var b = parseFloat(a);
            if (b.toString() === a)
                return new (d("WebBloksScriptTokens").WebBloksNumberToken)(b);
            else
                return new (d("WebBloksScriptTokens").WebBloksStringToken)(a)
        }
        return new (d("WebBloksScriptTokens").WebBloksIdentifierToken)(a)
    }
    g.parse = a
}
), 98);
__d("WebBloksScriptPrinter", ["WebBloksScriptParser"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        return typeof a === "string" && (a.startsWith("(") || a.startsWith(" (")) && a.endsWith(")")
    }
    function b(a) {
        if (typeof a === "function")
            return "<function>";
        a = Array.isArray(a) ? a : d("WebBloksScriptParser").parse(a);
        return h(0, a)
    }
    function h(a, b) {
        if (Array.isArray(b)) {
            var c = b.every(function(a) {
                return !Array.isArray(a)
            });
            if (c)
                return "(" + b.map(function(a) {
                    return h(0, a)
                }).join(", ") + ")";
            var d = "(" + String(b[0].value);
            b.slice(1).forEach(function(b) {
                d += "\n" + "".padEnd(a + 2) + h(a + 2, b)
            });
            d += "\n" + "".padEnd(a) + ")";
            return d
        }
        return typeof b === "object" && b != null ? b.type === "string" ? JSON.stringify(b.value) : String(b.value) : String(b)
    }
    g.looksLikeAScript = a;
    g.prettyPrint = b
}
), 98);
__d("WebBloksLayout", ["WebBloksCSSUtils", "WebBloksEnvironmentContext", "WebBloksUtils", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    var h;
    (h || d("react")).useMemo;
    function a(a) {
        var b = d("react-compiler-runtime").c(7), c = d("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl, e;
        b[0] !== a._style ? (e = d("WebBloksUtils").isStyle(a._style, "flex"),
        b[0] = a._style,
        b[1] = e) : e = b[1];
        e = e;
        var f;
        if (b[2] !== c || b[3] !== a._style || b[4] !== a.alpha || b[5] !== e) {
            f = {};
            a.alpha != null && (f.opacity = a.alpha);
            if (e) {
                var g = d("WebBloksUtils").nullthrows(a._style).getValues();
                g = Object.entries(g);
                for (var h = 0; h < g.length; h++) {
                    var j = g[h]
                      , k = j[0];
                    j = j[1];
                    if (i(k))
                        continue;
                    k = d("WebBloksCSSUtils").getRtlAwareCssAttr(d("WebBloksUtils").toCamel(k), c);
                    bb0: switch (k) {
                    case "grow":
                        f.flexGrow = String(j);
                        break bb0;
                    case "shrink":
                        f.flexShrink = String(j);
                        break bb0;
                    case "alignSelf":
                        f.alignSelf = d("WebBloksUtils").toHyphen(String(j));
                        break bb0;
                    case "justifyContent":
                        f.justifyContent = d("WebBloksUtils").toHyphen(String(j));
                        break bb0;
                    case "position_type":
                    case "positionType":
                        f.position = String(j);
                        break bb0;
                    case "bottom":
                    case "left":
                    case "right":
                    case "top":
                        f[k] = d("WebBloksUtils").toPx(String(j));
                        f.position = "absolute";
                        break bb0;
                    case "aspectRatio":
                        break bb0;
                    case "ntDebugMetadataV2":
                        break bb0;
                    case "width":
                    case "height":
                    case "minHeight":
                    case "maxHeight":
                    case "minWidth":
                    case "maxWidth":
                    case "marginTop":
                    case "marginRight":
                    case "marginBottom":
                    case "marginLeft":
                    case "paddingTop":
                    case "paddingRight":
                    case "paddingBottom":
                    case "paddingLeft":
                        f[k] = d("WebBloksUtils").toPx(d("WebBloksUtils").toHyphen(String(j)));
                        break bb0;
                    case "transform":
                        f[k] = String(j);
                        break bb0;
                    default:
                        f[k] = d("WebBloksUtils").toPx(d("WebBloksUtils").toHyphen(String(j)))
                    }
                }
            }
            k = d("WebBloksUtils").isStyle(a._style, "collection");
            if (k) {
                j = d("WebBloksUtils").nullthrows(a._style).getValues();
                g = Object.entries(j);
                for (h = 0; h < g.length; h++) {
                    k = g[h];
                    j = k[0];
                    k = k[1];
                    if (i(j))
                        continue;
                    j = d("WebBloksUtils").toCamel(j);
                    bb1: switch (j) {
                    case "isSticky":
                        k === !0 && (f.position = "sticky");
                        break bb1;
                    case "onAppear":
                    case "onDisappear":
                        break bb1;
                    case "height":
                        f.height = d("WebBloksUtils").toPx(String(k));
                        break bb1;
                    case "width":
                        f.width = d("WebBloksUtils").toPx(String(k));
                        break bb1;
                    case "ntDebugMetadataV2":
                        break bb1;
                    default:
                        f[j] = d("WebBloksUtils").toPx(d("WebBloksUtils").toHyphen(String(k)))
                    }
                }
            }
            d("WebBloksUtils").isStyle(a._style, "ig.style.SearchStyle") && (f.width = "100%");
            b[2] = c;
            b[3] = a._style;
            b[4] = a.alpha;
            b[5] = e;
            b[6] = f
        } else
            f = b[6];
        j = f;
        return j
    }
    function i(a) {
        return a[0] === "$" || a === "id" || a === "on_bind"
    }
    g["default"] = a
}
), 98);
__d("WebBloksStyle", ["WebBloksCSSUtils", "WebBloksLayout", "WebBloksWrapper", "react"], (function(a, b, c, d, e, f, g) {
    var h;
    h || (h = d("react"));
    var i = h
      , j = i.useEffect
      , k = i.useRef;
    function a(a, b, d) {
        d === void 0 && (d = !1);
        var e = a.getValues()
          , f = k(null);
        a.uiMutableContainer.domNode = f;
        j(function() {
            a.uiMutableContainer.domNode = f
        }, [a]);
        d = d === !0 ? {
            pointerEvents: "auto",
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent"
        } : void 0;
        e = babelHelpers["extends"]({}, c("WebBloksLayout")(e), d, b);
        d = c("WebBloksWrapper")(a, e, f);
        b = d.hasWrapper;
        var g = d.wrapper
          , h = d.wrapperProps;
        d = d.stylesFromExtensions;
        d && Object.assign(e, d);
        return {
            ref: f,
            style: b ? l : e,
            wrapper: g,
            wrapperProps: h
        }
    }
    var l = {
        height: "100%",
        width: "100%",
        pointerEvents: "inherit"
    };
    function b(a) {
        return {
            className: s.container,
            style: a
        }
    }
    var m;
    typeof m !== "number" && (m = 0);
    function n() {
        typeof m !== "number" && (m = 0);
        return ++m
    }
    function o(a, b) {
        if (typeof b === "object")
            return [["." + a, d("WebBloksCSSUtils").styleObjectToCSS(b)]];
        else
            return Object.entries(b("." + a)).map(function(a) {
                var b = a[0];
                a = a[1];
                return [b, d("WebBloksCSSUtils").styleObjectToCSS(a)]
            })
    }
    function e(a) {
        return Object.fromEntries(Object.entries(a).map(function(a) {
            var b = a[0];
            a = a[1];
            var c = "wbloks_" + n();
            o(c, a).forEach(function(a) {
                var b = a[0];
                a = a[1];
                return d("WebBloksCSSUtils").insertCssRule(b + " {\n" + a + "\n}")
            });
            return [b, c]
        }))
    }
    function f(a) {
        var b = "wbloks_" + n() + " ";
        d("WebBloksCSSUtils").insertCssRule("@keyframes " + b + " {\n" + Object.entries(a).map(function(a) {
            var b = a[0];
            a = a[1];
            return b + " {\n" + d("WebBloksCSSUtils").styleObjectToCSS(a) + "\n }"
        }).join("\n") + "\n}");
        return b
    }
    function p(b, c) {
        var a = {};
        d("WebBloksCSSUtils").insertCssRule("@supports " + q(b) + " {\n" + Object.entries(c).map(function(b) {
            var c = b[0];
            b = b[1];
            var d = "wbloks_" + n();
            a[c] = d;
            return o(d, b).map(function(a) {
                var b = a[0];
                a = a[1];
                return b + " {\n" + a + "\n}"
            }).join("\n")
        }).join("\n") + "}");
        return a
    }
    function q(a) {
        var b = a.negate === !0 ? "not " : "";
        return a.type === "selector" ? b + ("selector(" + a.selector + ")") : b + ("(" + a.key + ": " + a.value + ")")
    }
    function r() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
        return b.filter(Boolean).join(" ")
    }
    var s = e({
        container: {
            boxSizing: "border-box",
            display: "flex",
            flex: "0 1 auto",
            flexDirection: "row",
            pointerEvents: "auto",
            position: "relative",
            minHeight: 0,
            minWidth: 0
        }
    });
    g.useStyle = a;
    g.getStyleProps = b;
    g.createStyles = e;
    g.keyframes = f;
    g.createStylesIfSupported = p;
    g.classNames = r;
    g.WebBloksStyles = s
}
), 98);
__d("WebBloksTheme", ["WebBloksStyle", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useContext
      , k = e.useEffect;
    e.useMemo;
    var l = {
        light: "light",
        dark: "dark"
    };
    function m(a) {
        var b = document.documentElement;
        if (b == null)
            return;
        b.classList.remove(o, p);
        switch (a) {
        case "dark":
            b.classList.add(p);
            break;
        case "light":
            b.classList.add(o);
            break
        }
    }
    f = {
        getTheme: function() {
            return l.light
        }
    };
    var n = i.createContext(f);
    function a(a) {
        var b = d("react-compiler-runtime").c(8)
          , c = a.children;
        a = a.initialTheme;
        var e = (a = a) != null ? a : l.light, f;
        b[0] !== e ? (a = function() {
            m(e)
        }
        ,
        f = [e],
        b[0] = e,
        b[1] = a,
        b[2] = f) : (a = b[1],
        f = b[2]);
        k(a, f);
        b[3] !== e ? (a = {
            getTheme: function() {
                return e
            }
        },
        b[3] = e,
        b[4] = a) : a = b[4];
        f = a;
        a = f;
        b[5] !== c || b[6] !== a ? (f = i.jsx(n.Provider, {
            value: a,
            children: c
        }),
        b[5] = c,
        b[6] = a,
        b[7] = f) : f = b[7];
        return f
    }
    function b() {
        return j(n)
    }
    var o, p;
    e = {
        "error-or-destructive": ["rgb(237, 73, 86)", "rgb(237, 73, 86)"],
        "navbar-bg": ["#ffffff", "#000000"],
        "screen-wrapper-bg": ["#ffffff", "#000000"],
        separator: ["rgb(219, 219, 219)", "rgb(54, 54, 54)"],
        "primary-bg": ["#ffffff", "#000000"],
        "primary-text": ["rgb(38, 38, 38)", "rgb(250, 250, 250)"],
        "fds-gray-65": "#A4A7AB",
        "fds-white": "#FFFFFF",
        "fig-blue-tint-90": "#ecf0f7",
        "fig-blue-tint-10": "#3776ff",
        "switch-active": ["hsl(214, 89%, 52%)", "hsl(214, 100%, 59%)"],
        "media-inner-border": ["rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.05)"],
        divider: ["#CED0D4", "#3E4042"],
        "always-white": "#ffffff",
        "shadow-5": "rgba(0, 0, 0, 0.5)",
        "fds-animation-move-in": "cubic-bezier(0.17, 0.17, 0, 1)",
        "fds-animation-move-out": "cubic-bezier(0.17, 0.17, 0, 1)",
        "fds-duration-extra-short-in": "200ms",
        "fds-duration-extra-short-out": "150ms",
        "cds-close-handle": ["#748695", "#647685"],
        "cds-overlay-alpha-80": "rgba(28, 43, 51, 0.80)",
        "cds-surface-background": ["rgba(255, 255, 255)", "rgb(28, 43, 51)"]
    };
    f = c(e);
    function c(a) {
        var b = {}
          , c = {}
          , e = {};
        Object.entries(a).forEach(function(a) {
            var d = a[0];
            a = a[1];
            var f = "--wbloks-" + d;
            e[d] = "var(" + f + ")";
            b[f] = Array.isArray(a) ? a[0] : a;
            c[f] = Array.isArray(a) ? a[1] : a
        });
        a = d("WebBloksStyle").createStyles({
            lightTheme: b,
            darkTheme: c
        });
        o = a.lightTheme;
        p = a.darkTheme;
        return e
    }
    g.THEME = l;
    g.WebBloksThemeProvider = a;
    g.useTheme = b;
    g.WebBloksThemeVars = f
}
), 98);
__d("WebBloksSSRUtils", [], (function(a, b, c, d, e, f) {
    a = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    f.canUseDOM = a
}
), 66);
__d("WebBloksViewpointContext", ["react"], (function(a, b, c, d, e, f, g) {
    var h;
    a = (h || d("react")).createContext;
    b = a(null);
    c = b;
    g["default"] = c
}
), 98);
__d("WebBloksViewpoint", ["WebBloksViewpointContext", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    var h;
    b = h || d("react");
    b.useCallback;
    var i = b.useContext
      , j = b.useEffect
      , k = b.useRef;
    e = function(a) {
        this.element = null,
        this.percentVisible = null,
        this.state = null,
        Object.assign(this, a)
    }
    ;
    function l(a) {
        var b = d("react-compiler-runtime").c(6)
          , c = a.action
          , e = a.id;
        a = a.suppressWarnings;
        var f = m(e), g = m(e), h;
        b[0] !== c || b[1] !== e || b[2] !== g || b[3] !== f || b[4] !== a ? (h = function() {
            var a = f !== e
        }
        ,
        b[0] = c,
        b[1] = e,
        b[2] = g,
        b[3] = f,
        b[4] = a,
        b[5] = h) : h = b[5];
        j(h)
    }
    function m(a) {
        var b = k(null);
        j(function() {
            b.current = a
        });
        return b.current
    }
    function a(a) {
        var b = d("react-compiler-runtime").c(9)
          , e = i(c("WebBloksViewpointContext"))
          , f = a.action
          , g = a.id
          , h = a.untrackAfterFirstAppear
          , m = k(null);
        l(a);
        b[0] !== f || b[1] !== h || b[2] !== e ? (a = function(a) {
            f(a),
            a.state === "entered" && h === !0 && (e == null ? void 0 : e.untrack())
        }
        ,
        b[0] = f,
        b[1] = h,
        b[2] = e,
        b[3] = a) : a = b[3];
        var n = a, o;
        b[4] !== n || b[5] !== g || b[6] !== e ? (a = function() {
            var a = m.current;
            a && e && e.track(a, n, g)
        }
        ,
        o = [n, g, e],
        b[4] = n,
        b[5] = g,
        b[6] = e,
        b[7] = a,
        b[8] = o) : (a = b[7],
        o = b[8]);
        j(a, o);
        return m
    }
    g.ViewpointSnapshot = e;
    g.useViewpoint = a
}
), 98);
__d("WebBloksWrapper", ["WebBloksComponentContext", "WebBloksEnvironmentContext", "WebBloksSSRUtils", "WebBloksStyle", "WebBloksViewpoint", "react", "react-compiler-runtime"], (function(a, b, c, d, e, f, g) {
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useEffect
      , k = b.useLayoutEffect
      , l = b.useRef
      , m = function(a) {
        return a
    };
    function a(a, b, c) {
        var e = d("WebBloksEnvironmentContext").useWebBloksEnvironment().extensionHandlers
          , f = d("WebBloksComponentContext").useWebBloksContext()
          , g = a.getValues()
          , h = a.getStyle("flex")
          , k = h == null ? void 0 : h.get("aspect_ratio");
        h = null;
        var n = a.getStyle("collection")
          , q = (n == null ? void 0 : n.get("on_appear")) != null || (n == null ? void 0 : n.get("on_disappear")) != null
          , r = a.get("extensions")
          , s = l(a);
        s.current = a;
        j(function() {
            if (!r || r.length === 0)
                return;
            var b = [];
            for (var c = r, d = Array.isArray(c), g = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var h;
                if (d) {
                    if (g >= c.length)
                        break;
                    h = c[g++]
                } else {
                    g = c.next();
                    if (g.done)
                        break;
                    h = g.value
                }
                h = h;
                var a = e[h.styleId];
                a && a.onMount && b.push(a.onMount(h, s, f))
            }
            return function() {
                b.forEach(function(a) {
                    return a == null ? void 0 : a()
                })
            }
        }, []);
        n = k != null || q || !!(r && r.length > 0);
        var t = {
            "data-bloks-name": a.styleId,
            ref: c,
            id: a.get("html_id")
        };
        if (!n)
            return {
                hasWrapper: !1,
                wrapper: m,
                wrapperProps: t,
                stylesFromExtensions: h
            };
        var u = k != null;
        if (r)
            for (var n = r, v = Array.isArray(n), w = 0, n = v ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var x;
                if (v) {
                    if (w >= n.length)
                        break;
                    x = n[w++]
                } else {
                    w = n.next();
                    if (w.done)
                        break;
                    x = w.value
                }
                x = x;
                var y = e[x.styleId];
                y && ((y.hasLayoutWrapper == null ? void 0 : y.hasLayoutWrapper(x)) && (u = !0),
                y.getStyles && (h = babelHelpers["extends"]({}, h, y.getStyles(x))),
                Object.assign(t, y.getProps == null ? void 0 : y.getProps(x, a, f)))
            }
        y = function(f) {
            f = f;
            k != null && (f = i.jsx(o, {
                aspectRatio: k,
                children: f
            }));
            q && g._style != null && (f = i.jsx(p, {
                style: g._style,
                contextNode: a,
                elementRef: c,
                children: f
            }));
            if (r)
                for (var h = r, j = Array.isArray(h), l = 0, h = j ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var m;
                    if (j) {
                        if (l >= h.length)
                            break;
                        m = h[l++]
                    } else {
                        l = h.next();
                        if (l.done)
                            break;
                        m = l.value
                    }
                    m = m;
                    var n = e[m.styleId];
                    if (n) {
                        n = n.wrap;
                        n && (f = n(m, f, a, c))
                    }
                }
            return u ? i.jsx("div", {
                className: d("WebBloksStyle").WebBloksStyles.container,
                style: babelHelpers["extends"]({}, b, {
                    aspectRatio: k
                }),
                children: f
            }) : f
        }
        ;
        return {
            hasWrapper: u,
            wrapper: y,
            wrapperProps: t,
            stylesFromExtensions: h
        }
    }
    var n = d("WebBloksStyle").createStyles({
        aspectRatioContainer: {
            width: "100%",
            pointerEvents: "none",
            overflow: "hidden"
        },
        aspectRatioContent: {
            bottom: 0,
            left: 0,
            overflow: "hidden",
            position: "absolute",
            right: 0,
            top: 0,
            padding: "inherit"
        },
        aspectRatioSVG: {
            height: "100%",
            width: "100%",
            display: "flex"
        }
    });
    function o(a) {
        var b = d("react-compiler-runtime").c(7)
          , c = a.aspectRatio;
        a = a.children;
        var e;
        b[0] !== c ? (e = i.jsx("div", {
            "data-bloks-name": "bk.components.AspectRatio",
            className: n.aspectRatioContainer,
            style: {
                aspectRatio: c
            },
            children: i.jsx("svg", {
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                height: 1,
                width: c,
                className: n.aspectRatioSVG
            })
        }),
        b[0] = c,
        b[1] = e) : e = b[1];
        b[2] !== a ? (c = i.jsx("div", {
            "data-bloks-name": "bk.components.AspectRatio",
            className: n.aspectRatioContent,
            children: a
        }),
        b[2] = a,
        b[3] = c) : c = b[3];
        b[4] !== e || b[5] !== c ? (a = i.jsxs(i.Fragment, {
            children: [e, c]
        }),
        b[4] = e,
        b[5] = c,
        b[6] = a) : a = b[6];
        return a
    }
    function p(a) {
        var b = a.contextNode
          , c = a.children
          , e = a.style;
        a = a.elementRef;
        return !d("WebBloksSSRUtils").canUseDOM ? c : q({
            contextNode: b,
            children: c,
            style: e,
            elementRef: a
        })
    }
    function q(a) {
        var b = a.children
          , c = a.contextNode
          , e = a.elementRef
          , f = a.style;
        a = d("WebBloksComponentContext").useWebBloksContext();
        var g = a.executeCatch
          , h = a.bloksContext;
        function i(a) {
            var b = f == null ? void 0 : f.getExpression("on_appear")
              , d = f == null ? void 0 : f.getExpression("on_disappear");
            switch (a.state) {
            case "entered":
                b != null && g(c, b, [h]);
                break;
            case "exited":
                d != null && g(c, d, [h]);
                break
            }
        }
        var j = d("WebBloksViewpoint").useViewpoint({
            id: f.clientId.toString(),
            action: i
        });
        k(function() {
            j.current = e.current
        }, [e, j]);
        return b
    }
    q.displayName = q.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);
__d("WebBloksCSSUtils", ["WebBloksIsUnitTest", "WebBloksSSRUtils", "WebBloksUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = "";
    function a(a, b) {
        switch (a) {
        case "start":
            return b ? "right" : "left";
        case "end":
            return b ? "left" : "right";
        case "marginStart":
            return b ? "marginRight" : "marginLeft";
        case "marginEnd":
            return b ? "marginLeft" : "marginRight";
        case "paddingStart":
            return b ? "paddingRight" : "paddingLeft";
        case "paddingEnd":
            return b ? "paddingLeft" : "paddingRight"
        }
        return a
    }
    function b() {
        return i
    }
    function e(a) {
        var b;
        if (c("WebBloksIsUnitTest")() || a == null)
            return;
        if (!d("WebBloksSSRUtils").canUseDOM) {
            i += a;
            return
        }
        h || (h = j());
        b = d("WebBloksUtils").nullthrows((b = h) == null ? void 0 : b.sheet);
        try {
            b.insertRule(d("WebBloksUtils").nullthrows(a), b.cssRules.length)
        } catch (a) {}