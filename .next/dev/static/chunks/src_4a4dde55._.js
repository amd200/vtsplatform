(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/providers/SessionWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
"use client";
;
;
function SessionWrapper({ children, session }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/SessionWrapper.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = SessionWrapper;
var _c;
__turbopack_context__.k.register(_c, "SessionWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "axiosBaseQuery",
    ()=>axiosBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
;
;
// ================= AXIOS INSTANCE =================
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://vedu-demo.vtsitco.com/api")
});
// ================= RESPONSE INTERCEPTOR =================
axiosInstance.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/login"
        });
    }
    return Promise.reject(error);
});
// ================= REQUEST INTERCEPTOR =================
axiosInstance.interceptors.request.use(async (config)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
    const appToken = ("TURBOPACK compile-time value", "UhqBUAP3T6Irguej2ogSdg==");
    const hasStudentToken = Boolean(session?.user?.StudentToken);
    // تأكد إن headers موجود
    config.headers = config.headers ?? {};
    // عدّل عليه مباشرة
    config.headers["Content-Type"] = "application/json";
    config.headers["X-App-Token"] = hasStudentToken ? appToken : `Bearer ${appToken}`;
    if (hasStudentToken) {
        config.headers["X-Student-Token"] = session.user.StudentToken;
    }
    return config;
}, (error)=>Promise.reject(error));
const axiosBaseQuery = ()=>async ({ url, method, data, params })=>{
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
                params,
                onUploadProgress: (progressEvent)=>{
                    if (progressEvent.total) {
                        const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                        console.log(`Upload Progress: ${percent}%`);
                    }
                }
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(fallbackError.Message);
            return {
                error: fallbackError
            };
        }
    };
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/auth/services/authApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi,
    "useSignInMutation",
    ()=>useSignInMutation,
    "useSignupMutation",
    ()=>useSignupMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "authApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/student/services/cartApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const cartApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "cartApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/student/services/cartBooksApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const cartBooksApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "cartBooksApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/student/services/communicationApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const communicationApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "communicationApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/student/services/lessonContentApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const lessonContentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "lessonContentApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/student/services/paymentApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentApi",
    ()=>paymentApi,
    "useBuyCourseMutation",
    ()=>useBuyCourseMutation,
    "useFawryPayMutation",
    ()=>useFawryPayMutation,
    "useStudentWalletMutation",
    ()=>useStudentWalletMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const paymentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "paymentApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
            })
        })
});
const { useBuyCourseMutation, useFawryPayMutation, useStudentWalletMutation } = paymentApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/student/services/studentApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "studentApi",
    ()=>studentApi,
    "useActivateCodeMutation",
    ()=>useActivateCodeMutation,
    "useGetAllCoursesQuery",
    ()=>useGetAllCoursesQuery,
    "useGetCountriesQuery",
    ()=>useGetCountriesQuery,
    "useGetCourseDetailsQuery",
    ()=>useGetCourseDetailsQuery,
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
    ()=>useGetStudentWalletQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const studentApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "studentApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
            })
        })
});
const { useGetCountriesQuery, useGetStudentPayementsQuery, useGetStudentSubscriptionsQuery, useActivateCodeMutation, useGetStudentCoursesQuery, useGetStudentChaptersQuery, useGetAllCoursesQuery, useGetCourseDetailsQuery, useGetStudentExamsResutlsQuery, useGetStudentLessonsQuery, useGetStudentSessionsQuery, useGetStudentScheduleQuery, useGetStudentWalletQuery } = studentApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/dashboardApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardApi",
    ()=>dashboardApi,
    "useGetDashboardDataQuery",
    ()=>useGetDashboardDataQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/axiosBaseQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const dashboardApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "dashboardApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$axiosBaseQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosBaseQuery"])(),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/services/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/cartApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/cartBooksApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/communicationApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/lessonContentApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/paymentApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/student/services/studentApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/dashboardApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartBooksApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartBooksApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonContentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonContentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["communicationApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["communicationApi"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$services$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$studentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studentApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$lessonContentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonContentApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$paymentApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$communicationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["communicationApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$student$2f$services$2f$cartBooksApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartBooksApi"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/ProviderWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ProviderWrapper.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const ProviderWrapper = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/ProviderWrapper.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProviderWrapper;
const __TURBOPACK__default__export__ = ProviderWrapper;
var _c;
__turbopack_context__.k.register(_c, "ProviderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/salesiq.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Salesiq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Salesiq({ widgetCode, domain }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Salesiq.useEffect": ()=>{
            if (!widgetCode) return;
            window.$zoho = window.$zoho || {};
            window.$zoho.salesiq = {
                widgetcode: widgetCode,
                values: {},
                ready: ({
                    "Salesiq.useEffect": function() {}
                })["Salesiq.useEffect"]
            };
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.id = "zsiqscript";
            script.defer = true;
            script.src = domain;
            document.body.appendChild(script);
        }
    }["Salesiq.useEffect"], [
        widgetCode,
        domain
    ]);
    if (!widgetCode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Salesiq, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Salesiq;
var _c;
__turbopack_context__.k.register(_c, "Salesiq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CircleCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as InfoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonXIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/octagon-x.js [app-client] (ecmascript) <export default as OctagonXIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlertIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlertIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        icons: {
            success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckIcon$3e$__["CircleCheckIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 21,
                columnNumber: 18
            }, void 0),
            info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoIcon$3e$__["InfoIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 22,
                columnNumber: 15
            }, void 0),
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlertIcon$3e$__["TriangleAlertIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 23,
                columnNumber: 18
            }, void 0),
            error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonXIcon$3e$__["OctagonXIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 24,
                columnNumber: 16
            }, void 0),
            loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
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
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/ParallaxWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-scroll-parallax/dist/index.mjs [app-client] (ecmascript) <locals>");
"use client";
;
;
function ParallaxWrapper({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/ParallaxWrapper.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ParallaxWrapper;
const __TURBOPACK__default__export__ = ParallaxWrapper;
var _c;
__turbopack_context__.k.register(_c, "ParallaxWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4a4dde55._.js.map