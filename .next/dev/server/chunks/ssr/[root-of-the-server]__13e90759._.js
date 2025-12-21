module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/providers/SessionWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SessionWrapper({ children, session }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/SessionWrapper.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "axiosBaseQuery",
    ()=>axiosBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
// ================= AXIOS INSTANCES =================
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://vedu-demo.vtsitco.com/api")
});
const publicAxios = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    headers: {
        "Content-Type": "application/json"
    }
});
// ================= RESPONSE INTERCEPTOR =================
axiosInstance.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/login"
        });
    }
    return Promise.reject(error);
});
// ================= REQUEST INTERCEPTOR =================
axiosInstance.interceptors.request.use(async (config)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])();
    const appToken = ("TURBOPACK compile-time value", "UhqBUAP3T6Irguej2ogSdg==");
    const hasStudentToken = Boolean(session?.user?.StudentToken);
    config.headers = config.headers ?? {};
    config.headers["Content-Type"] = "application/json";
    config.headers["X-App-Token"] = hasStudentToken ? appToken : `Bearer ${appToken}`;
    if (hasStudentToken) {
        config.headers["X-Student-Token"] = session.user.StudentToken;
    }
    return config;
}, (error)=>Promise.reject(error));
const axiosBaseQuery = ()=>async ({ url, method, data, params, skipAuth })=>{
        try {
            // 👇 هنا الفرق الحقيقي
            const client = skipAuth ? publicAxios : axiosInstance;
            const result = await client({
                url,
                method,
                data,
                params
            });
            return {
                data: result.data
            };
        } catch (err) {
            const error = err;
            if (error.response?.data) {
                return {
                    error: error.response.data
                };
            }
            const fallbackError = {
                Status: false,
                Code: "",
                Message: error.message || "حدث خطأ غير متوقع",
                Data: null
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(fallbackError.Message);
            return {
                error: fallbackError
            };
        }
    };
}),
"[project]/src/features/auth/services/authApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi,
    "useSignInMutation",
    ()=>useSignInMutation,
    "useSignupMutation",
    ()=>useSignupMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "authApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    endpoints: (builder)=>({
            signup: builder.mutation({
                query: (credentials)=>({
                        url: "/platform/Account/SignUp",
                        method: "POST",
                        data: credentials
                    })
            }),
            SignIn: builder.mutation({
                query: (credentials)=>({
                        url: "/platform/Account/SignIn",
                        method: "POST",
                        data: credentials
                    })
            }),
            countries: builder.mutation({
                query: (credentials)=>({
                        url: "/platform/Account/SignUp",
                        method: "POST",
                        data: credentials
                    })
            })
        })
});
const { useSignupMutation, useSignInMutation } = authApi;
}),
"[project]/src/features/student/services/cartApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cartApi",
    ()=>cartApi,
    "useAddCourseToCartMutation",
    ()=>useAddCourseToCartMutation,
    "useDeleteCourseFromCartMutation",
    ()=>useDeleteCourseFromCartMutation,
    "useGetStudentCartQuery",
    ()=>useGetStudentCartQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const cartApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "cartApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    tagTypes: [
        "Cart"
    ],
    endpoints: (builder)=>({
            getStudentCart: builder.query({
                query: ()=>({
                        url: "/platform/StudentCart",
                        method: "GET"
                    }),
                providesTags: [
                    "Cart"
                ]
            }),
            addCourseToCart: builder.mutation({
                query: (body)=>({
                        url: "/platform/AddCourseToCart",
                        method: "POST",
                        data: body
                    }),
                invalidatesTags: [
                    "Cart"
                ]
            }),
            deleteCourseFromCart: builder.mutation({
                query: (id)=>({
                        url: "/platform/DeleteItemFromCart",
                        method: "POST",
                        data: {
                            Id: id
                        }
                    }),
                invalidatesTags: [
                    "Cart"
                ]
            })
        })
});
const { useGetStudentCartQuery, useAddCourseToCartMutation, useDeleteCourseFromCartMutation } = cartApi;
}),
"[project]/src/features/student/services/cartBooksApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cartBooksApi",
    ()=>cartBooksApi,
    "useAddBookToCartMutation",
    ()=>useAddBookToCartMutation,
    "useAddCourseToCartMutation",
    ()=>useAddCourseToCartMutation,
    "useDeleteBookFromCartMutation",
    ()=>useDeleteBookFromCartMutation,
    "useGetStudentCartBooksQuery",
    ()=>useGetStudentCartBooksQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const cartBooksApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "cartBooksApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    tagTypes: [
        "CartBooks"
    ],
    endpoints: (builder)=>({
            getStudentCartBooks: builder.query({
                query: ()=>({
                        url: "/platform/StudentBookCart",
                        method: "GET"
                    }),
                providesTags: [
                    "CartBooks"
                ]
            }),
            addBookToCart: builder.mutation({
                query: (body)=>({
                        url: "/platform/AddBookToCart",
                        method: "POST",
                        data: body
                    }),
                invalidatesTags: [
                    "CartBooks"
                ]
            }),
            addCourseToCart: builder.mutation({
                query: (body)=>({
                        url: "/platform/AddCourseToCart",
                        method: "POST",
                        data: body
                    }),
                invalidatesTags: [
                    "CartBooks"
                ]
            }),
            deleteBookFromCart: builder.mutation({
                query: (id)=>({
                        url: "/platform/DeleteItemFromBookCart",
                        method: "POST",
                        data: {
                            Id: id
                        }
                    }),
                invalidatesTags: [
                    "CartBooks"
                ]
            })
        })
});
const { useGetStudentCartBooksQuery, useAddCourseToCartMutation, useDeleteBookFromCartMutation, useAddBookToCartMutation } = cartBooksApi;
}),
"[project]/src/features/student/services/communicationApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "communicationApi",
    ()=>communicationApi,
    "useAddCourseToCartMutation",
    ()=>useAddCourseToCartMutation,
    "useDeleteCourseFromCartMutation",
    ()=>useDeleteCourseFromCartMutation,
    "useGetAdminDataQuery",
    ()=>useGetAdminDataQuery,
    "useGetRecievedMessagesQuery",
    ()=>useGetRecievedMessagesQuery,
    "useGetSentMessagesQuery",
    ()=>useGetSentMessagesQuery,
    "useSendMessagesMutation",
    ()=>useSendMessagesMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const communicationApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "communicationApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    tagTypes: [
        "Commucation"
    ],
    endpoints: (builder)=>({
            getAllMessages: builder.query({
                query: ({ UserRole, FromOrToUserId })=>({
                        url: "/platform/Communication/AllMessages",
                        method: "GET",
                        params: {
                            UserRole,
                            FromOrToUserId
                        }
                    })
            }),
            getSentMessages: builder.query({
                query: ({ UserRole, FromOrToUserId })=>({
                        url: "/platform/Communication/GetSentMessagesWeb",
                        method: "GET",
                        params: {
                            UserRole,
                            FromOrToUserId
                        }
                    })
            }),
            getRecievedMessages: builder.query({
                query: ({ UserRole, FromOrToUserId })=>({
                        url: "/platform/Communication/GetRecivedMessagesWeb",
                        method: "GET",
                        params: {
                            UserRole,
                            FromOrToUserId
                        }
                    })
            }),
            sendMessages: builder.mutation({
                query: ({ fromId, ToId, Title, Message })=>({
                        url: "/platform/Communication/SendMessage",
                        method: "POST",
                        data: {
                            fromId,
                            ToId,
                            Title,
                            Message,
                            ProblemType: 0
                        }
                    }),
                invalidatesTags: [
                    "Commucation"
                ]
            }),
            getAdminData: builder.query({
                query: ()=>({
                        url: "/platform/Communication/GetAdminData",
                        method: "GET"
                    }),
                providesTags: [
                    "Commucation"
                ]
            }),
            addCourseToCart: builder.mutation({
                query: (body)=>({
                        url: "/platform/AddCourseToCart",
                        method: "POST",
                        data: body
                    }),
                invalidatesTags: [
                    "Commucation"
                ]
            }),
            deleteCourseFromCart: builder.mutation({
                query: (id)=>({
                        url: "/platform/DeleteItemFromCart",
                        method: "POST",
                        data: {
                            Id: id
                        }
                    }),
                invalidatesTags: [
                    "Commucation"
                ]
            })
        })
});
const { useGetSentMessagesQuery, useGetRecievedMessagesQuery, useSendMessagesMutation, useGetAdminDataQuery, useAddCourseToCartMutation, useDeleteCourseFromCartMutation } = communicationApi;
}),
"[project]/src/features/student/services/lessonContentApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lessonContentApi",
    ()=>lessonContentApi,
    "useAddCommentMutation",
    ()=>useAddCommentMutation,
    "useDeleteCommentMutation",
    ()=>useDeleteCommentMutation,
    "useJoinMeetingMutation",
    ()=>useJoinMeetingMutation,
    "useLazyShowAudioQuery",
    ()=>useLazyShowAudioQuery,
    "useLazyShowPdfQuery",
    ()=>useLazyShowPdfQuery,
    "useLazyShowRichTextQuery",
    ()=>useLazyShowRichTextQuery,
    "useLazyShowVideoQuery",
    ()=>useLazyShowVideoQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const lessonContentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "lessonContentApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    endpoints: (builder)=>({
            addComment: builder.mutation({
                query: ({ Comment, ExecutionId, LessonId })=>({
                        url: `/platform/AddComment`,
                        method: "POSt",
                        data: {
                            Comment,
                            ExecutionId,
                            LessonId
                        }
                    })
            }),
            deleteComment: builder.mutation({
                query: ({ CommentId, Comment, ExecutionId, LessonId })=>({
                        url: `/platform/DeleteComment`,
                        method: "POSt",
                        data: {
                            CommentId,
                            Comment,
                            ExecutionId,
                            LessonId
                        }
                    })
            }),
            showVideo: builder.query({
                query: ({ Id, LessonId })=>({
                        url: `/platform/Show/VideoByUrl`,
                        method: "GET",
                        params: {
                            Id,
                            LessonId
                        }
                    })
            }),
            showPdf: builder.query({
                query: ({ Id, LessonId })=>({
                        url: `/platform/Show/PdfByUrl`,
                        method: "GET",
                        params: {
                            Id,
                            LessonId
                        }
                    })
            }),
            showRichText: builder.query({
                query: ({ Id, LessonId })=>({
                        url: `/platform/Show/RichTextByUrl`,
                        method: "GET",
                        params: {
                            Id,
                            LessonId
                        }
                    })
            }),
            showAudio: builder.query({
                query: ({ Id, LessonId })=>({
                        url: `/platform/Show/Sound2`,
                        method: "GET",
                        params: {
                            Id,
                            LessonId
                        }
                    })
            }),
            joinMeeting: builder.mutation({
                query: ()=>({
                        url: `/platform/Content/lessons/3fa85f64-5717-4562-b3fc-2c963f66afa6/join`,
                        method: "POST"
                    })
            })
        })
});
const { useJoinMeetingMutation, useAddCommentMutation, useDeleteCommentMutation, useLazyShowVideoQuery, useLazyShowPdfQuery, useLazyShowRichTextQuery, useLazyShowAudioQuery } = lessonContentApi;
}),
"[project]/src/features/student/services/paymentApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentApi",
    ()=>paymentApi,
    "useBuyCourseMutation",
    ()=>useBuyCourseMutation,
    "useCoursePaymentWithFawryMutation",
    ()=>useCoursePaymentWithFawryMutation,
    "useCreateInvoiceMutation",
    ()=>useCreateInvoiceMutation,
    "useFawryMutation",
    ()=>useFawryMutation,
    "useFawryPayMutation",
    ()=>useFawryPayMutation,
    "useStudentWalletMutation",
    ()=>useStudentWalletMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const paymentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "paymentApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    endpoints: (builder)=>({
            buyCourse: builder.mutation({
                query: (id)=>({
                        url: `/platform/BuyCourseNow`,
                        method: "POST",
                        data: {
                            Id: id
                        }
                    })
            }),
            fawryPay: builder.mutation({
                query: (id)=>({
                        url: `/platform/StudentCoursesPayment/FawryPay`,
                        method: "POST",
                        data: {
                            Id: id
                        }
                    })
            }),
            studentWallet: builder.mutation({
                query: (id)=>({
                        url: `/platform/StudentCoursesPayment/PayWithStudentWallet`,
                        method: "POST",
                        data: {
                            Id: id
                        }
                    })
            }),
            fawry: builder.mutation({
                query: (data)=>({
                        url: "https://atfawry.com/fawrypay-api/api/payments/init",
                        method: "POST",
                        skipAuth: true,
                        data
                    })
            }),
            CoursePaymentWithFawry: builder.mutation({
                query: (data)=>({
                        url: "/platform/StudentCoursesPayment/FawryPay",
                        method: "POST",
                        data: {
                            Id: data
                        }
                    })
            }),
            createInvoice: builder.mutation({
                query: ()=>({
                        url: "/platform/CompleteThePaymentProcess",
                        method: "POST"
                    })
            })
        })
});
const { useCreateInvoiceMutation, useCoursePaymentWithFawryMutation, useFawryMutation, useBuyCourseMutation, useFawryPayMutation, useStudentWalletMutation } = paymentApi;
}),
"[project]/src/features/student/services/studentApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "studentApi",
    ()=>studentApi,
    "useActivateCodeMutation",
    ()=>useActivateCodeMutation,
    "useGetAllCoursesQuery",
    ()=>useGetAllCoursesQuery,
    "useGetChapterDetailsQuery",
    ()=>useGetChapterDetailsQuery,
    "useGetCountriesQuery",
    ()=>useGetCountriesQuery,
    "useGetCourseDetailsQuery",
    ()=>useGetCourseDetailsQuery,
    "useGetProtectedVideoMutation",
    ()=>useGetProtectedVideoMutation,
    "useGetStudentChaptersQuery",
    ()=>useGetStudentChaptersQuery,
    "useGetStudentCoursesQuery",
    ()=>useGetStudentCoursesQuery,
    "useGetStudentExamsResutlsQuery",
    ()=>useGetStudentExamsResutlsQuery,
    "useGetStudentLessonsQuery",
    ()=>useGetStudentLessonsQuery,
    "useGetStudentPayementsQuery",
    ()=>useGetStudentPayementsQuery,
    "useGetStudentScheduleQuery",
    ()=>useGetStudentScheduleQuery,
    "useGetStudentSessionsQuery",
    ()=>useGetStudentSessionsQuery,
    "useGetStudentSubscriptionsQuery",
    ()=>useGetStudentSubscriptionsQuery,
    "useGetStudentWalletQuery",
    ()=>useGetStudentWalletQuery,
    "useReChargeBalanceWithCardMutation",
    ()=>useReChargeBalanceWithCardMutation,
    "useReChargeBalanceWithEWalletMutation",
    ()=>useReChargeBalanceWithEWalletMutation,
    "useReChargeBalanceWithFawryMutation",
    ()=>useReChargeBalanceWithFawryMutation,
    "useRequestRefundShippingMutation",
    ()=>useRequestRefundShippingMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const studentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "studentApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    tagTypes: [
        "StudentCourses",
        "StudentChapters",
        "AllCourses",
        "CourseDetails"
    ],
    endpoints: (builder)=>({
            getCountries: builder.query({
                query: ()=>({
                        url: "/platform/Account/Countries",
                        method: "GET"
                    })
            }),
            getStudentPayements: builder.query({
                query: ()=>({
                        url: "/platform/Studentpayments",
                        method: "GET"
                    })
            }),
            getStudentSubscriptions: builder.query({
                query: ()=>({
                        url: "/platform/StudentSubscriptions",
                        method: "GET"
                    })
            }),
            getStudentCourses: builder.query({
                query: ()=>({
                        url: "/platform/Content/StudentCourses",
                        method: "GET"
                    }),
                providesTags: [
                    "StudentCourses"
                ],
                keepUnusedDataFor: 120
            }),
            getStudentChapters: builder.query({
                query: ()=>({
                        url: "/platform/Content/StudentChapters",
                        method: "GET"
                    }),
                providesTags: [
                    "StudentChapters"
                ],
                keepUnusedDataFor: 120
            }),
            getAllCourses: builder.query({
                query: ()=>({
                        url: "/platform/AllCourses",
                        method: "GET"
                    }),
                providesTags: [
                    "AllCourses"
                ],
                keepUnusedDataFor: 120
            }),
            getCourseDetails: builder.query({
                query: (Id)=>({
                        url: `/platform/Content/StudentCourseDetails/${Id}`,
                        method: "GET"
                    }),
                providesTags: (result, error, id)=>[
                        {
                            type: "CourseDetails",
                            id
                        }
                    ],
                keepUnusedDataFor: 60
            }),
            getChapterDetails: builder.query({
                query: (Id)=>({
                        url: `/platform/Content/StudentChapterDetails/${Id}`,
                        method: "GET"
                    })
            }),
            getLessonDetails: builder.query({
                query: (Id)=>({
                        url: `/platform/Content/StudentLessonDetails/${Id}`,
                        method: "GET"
                    })
            }),
            getProtectedVideo: builder.mutation({
                query: ({ lessonId, executionId })=>({
                        url: `/Student/MyCourses/ShowProtectedVideo`,
                        method: "POST",
                        data: {
                            id: executionId,
                            lessonId: lessonId
                        }
                    })
            }),
            getStudentExamsResutls: builder.query({
                query: ()=>({
                        url: `/platform/StudentExamsResults`,
                        method: "GET"
                    })
            }),
            getStudentLessons: builder.query({
                query: ()=>({
                        url: `/platform/Content/StudentLessons`,
                        method: "GET"
                    })
            }),
            getStudentSessions: builder.query({
                query: ()=>({
                        url: `/platform/StudentSessions`,
                        method: "GET"
                    })
            }),
            activateCode: builder.mutation({
                query: (code)=>({
                        url: `/platform/Dashboard/ActivateCode`,
                        method: "POST",
                        data: {
                            Code: code
                        }
                    }),
                invalidatesTags: [
                    "StudentCourses",
                    "AllCourses"
                ]
            }),
            getStudentSchedule: builder.query({
                query: ({ Id, type, fromDate, toDate })=>({
                        url: `/platform/StudentScheduleWeb`,
                        method: "GET",
                        params: {
                            Id,
                            type,
                            fromDate,
                            toDate
                        }
                    })
            }),
            getStudentWallet: builder.query({
                query: ()=>({
                        url: `/platform/StudentWallet`,
                        method: "GET"
                    })
            }),
            reChargeBalanceWithFawry: builder.mutation({
                query: ({ phoneNumber, amount })=>({
                        url: `/platform/StudentWallet/FawryPay`,
                        method: "POST",
                        data: {
                            Mobile: phoneNumber,
                            amount
                        }
                    })
            }),
            reChargeBalanceWithEWallet: builder.mutation({
                query: ({ phoneNumber, amount })=>({
                        url: `/platform/StudentWallet/PaymobPaymentEWallet`,
                        method: "POST",
                        data: {
                            Mobile: phoneNumber,
                            amount
                        }
                    })
            }),
            reChargeBalanceWithCard: builder.mutation({
                query: ({ phoneNumber, amount })=>({
                        url: `/platform/StudentWallet/PaymobPaymentCard`,
                        method: "POST",
                        data: {
                            Mobile: phoneNumber,
                            amount
                        }
                    })
            }),
            requestRefundShipping: builder.mutation({
                query: ({ Phone, Message, Subject })=>({
                        url: `/platform/StudentWallet/RequestRefundShipping`,
                        method: "POST",
                        data: {
                            Phone,
                            Message,
                            Subject
                        }
                    })
            })
        })
});
const { useRequestRefundShippingMutation, useReChargeBalanceWithCardMutation, useReChargeBalanceWithEWalletMutation, useReChargeBalanceWithFawryMutation, useGetCountriesQuery, useGetChapterDetailsQuery, useGetStudentPayementsQuery, useGetStudentSubscriptionsQuery, useActivateCodeMutation, useGetStudentCoursesQuery, useGetStudentChaptersQuery, useGetAllCoursesQuery, useGetCourseDetailsQuery, useGetStudentExamsResutlsQuery, useGetStudentLessonsQuery, useGetStudentSessionsQuery, useGetStudentScheduleQuery, useGetStudentWalletQuery, useGetProtectedVideoMutation } = studentApi;
}),
"[project]/src/services/dashboardApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardApi",
    ()=>dashboardApi,
    "useGetDashboardDataQuery",
    ()=>useGetDashboardDataQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const dashboardApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "dashboardApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
    endpoints: (builder)=>({
            getDashboardData: builder.query({
                query: ()=>({
                        url: "/platform/Dashboard/AllData",
                        method: "GET"
                    })
            })
        })
});
const { useGetDashboardDataQuery } = dashboardApi;
}),
"[project]/src/redux/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/services/authApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/cartApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/cartBooksApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/communicationApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/lessonContentApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/paymentApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/studentApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/dashboardApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartBooksApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartBooksApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessonContentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessonContentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["communicationApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["communicationApi"].reducer,
        [walletApi.reducerPath]: walletApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessonContentApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymentApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["communicationApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartBooksApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartBooksApi"].middleware)
});
}),
"[project]/src/providers/ProviderWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ProviderWrapper.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const ProviderWrapper = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/ProviderWrapper.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProviderWrapper;
}),
"[project]/src/app/salesiq.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Salesiq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Salesiq({ widgetCode, domain }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!widgetCode) return;
        window.$zoho = window.$zoho || {};
        window.$zoho.salesiq = {
            widgetcode: widgetCode,
            values: {},
            ready: function() {}
        };
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "zsiqscript";
        script.defer = true;
        script.src = domain;
        document.body.appendChild(script);
    }, [
        widgetCode,
        domain
    ]);
    if (!widgetCode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: "red"
            },
            children: "Need to pass widget code"
        }, void 0, false, {
            fileName: "[project]/src/app/salesiq.js",
            lineNumber: 25,
            columnNumber: 12
        }, this);
    }
    return null;
}
}),
"[project]/src/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CircleCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as InfoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonXIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/octagon-x.js [app-ssr] (ecmascript) <export default as OctagonXIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlertIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as TriangleAlertIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        icons: {
            success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckIcon$3e$__["CircleCheckIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 21,
                columnNumber: 18
            }, void 0),
            info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__["InfoIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 22,
                columnNumber: 15
            }, void 0),
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlertIcon$3e$__["TriangleAlertIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 23,
                columnNumber: 18
            }, void 0),
            error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonXIcon$3e$__["OctagonXIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 24,
                columnNumber: 16
            }, void 0),
            loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
                className: "size-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 25,
                columnNumber: 18
            }, void 0)
        },
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
            "--border-radius": "var(--radius)"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/src/providers/ParallaxWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-scroll-parallax/dist/index.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function ParallaxWrapper({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/ParallaxWrapper.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = ParallaxWrapper;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13e90759._.js.map