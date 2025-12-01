// "use client"
// import React, { useEffect, useState } from "react";
// import { Phone, Video, Search, MoreVertical, Paperclip, Smile, Mic, Download, Menu } from "lucide-react";
// import Script from "next/script";
// import { useGetAdminDataQuery, useGetRecievedMessagesQuery, useGetSentMessagesQuery, useSendMessagesMutation } from "@/features/student/services/communicationApi";
// import { ChatMessage } from "@/features/student/types/student.types";
// import { useSession } from "next-auth/react";
// import { BaseResponse } from "@/types/common.types";
// import { useToastMessage } from "@/hooks/useToastMessage";

// // Types
// interface Contact {
//   id: number;
//   name: string;
//   avatar: string;
//   lastMessage: string;
//   time: string;
//   unread?: number;
//   online?: boolean;
//   lastSeen?: string;
// }

// interface Message {
//   id: number;
//   text?: string;
//   time: string;
//   isOwn: boolean;
//   attachment?: {
//     type: "file";
//     name: string;
//     size: string;
//   };
//   createdTime: number;
// }

// interface MediaItem {
//   id: number;
//   type: "image" | "video";
//   url: string;
//   count?: number;
// }

// interface FileItem {
//   id: number;
//   name: string;
//   size: string;
//   date: string;
//   icon: string;
// }

// interface LinkItem {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
//   thumbnail: string;
//   date: string;
// }

// // Contacts Sidebar Component
// const ContactsSidebar: React.FC<{
//   contacts: Contact[];
//   activeContactId: number;
//   onSelectContact: (id: number) => void;
// }> = ({ contacts, activeContactId, onSelectContact }) => {
//   return (
//     <div className="w-80 bg-white border-r flex flex-col">
//       {/* Header */}
//       <div className="p-4 border-b">
//         <div className="flex items-center justify-between mb-4">
//           <button className="text-gray-600 hover:text-gray-900">
//             <Menu size={24} />
//           </button>
//           <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">
//             <Search size={16} className="inline mr-2" />
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Contacts List */}
//       <div className="flex-1 overflow-y-auto">
//         {contacts.map((contact) => (
//           <div key={contact.id} onClick={() => onSelectContact(contact.id)} className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition ${activeContactId === contact.id ? "bg-gray-100" : ""}`}>
//             <div className="relative flex-shrink-0">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
//               {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
//             </div>
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center justify-between mb-1">
//                 <h4 className="font-semibold text-gray-900 truncate">{contact.name}</h4>
//                 <span className="text-xs text-gray-500 flex-shrink-0">{contact.time}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
//                 {contact.unread && <span className="ml-2 flex-shrink-0 w-5 h-5 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center">{contact.unread}</span>}
//               </div>
//               {contact.lastSeen && <p className="text-xs text-gray-400 mt-1">Last seen {contact.lastSeen}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Chat Header Component
// const ChatHeader: React.FC<{ name: string; status: string }> = ({ name, status }) => {
//   return (
//     <div className="flex items-center justify-between p-4 bg-white border-b">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
//         <div>
//           <h2 className="font-semibold text-gray-900">{name}</h2>
//           <p className="text-xs text-green-600">{status}</p>
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <button className="text-gray-600 hover:text-gray-900">
//           <Phone size={20} />
//         </button>
//         <button className="text-gray-600 hover:text-gray-900">
//           <Video size={20} />
//         </button>
//         <button className="text-gray-600 hover:text-gray-900">
//           <Search size={20} />
//         </button>
//         <button className="text-gray-600 hover:text-gray-900">
//           <MoreVertical size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Message Bubble Component
// const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
//   return (
//     <div className={`flex ${message.isOwn ? "justify-end" : "justify-start"} mb-4`}>
//       <div className={`max-w-md ${message.isOwn ? "bg-teal-100" : "bg-gray-100"} rounded-2xl px-4 py-2.5`}>
//         {message.text && <p className="text-sm text-gray-800">{message.text}</p>}
//         {message.attachment && (
//           <div className="flex items-center gap-2 mt-1">
//             <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
//               <span className="text-xs text-white font-bold">CSV</span>
//             </div>
//             <div>
//               <p className="text-xs font-semibold text-gray-900">{message.attachment.name}</p>
//               <p className="text-xs text-gray-500">{message.attachment.size}</p>
//             </div>
//           </div>
//         )}
//         {/* {message.voiceNote && (
//           <div className="flex items-center gap-2">
//             <button className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500">
//               <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5"></div>
//             </button>
//             <div className="flex-1 h-8 flex items-center gap-0.5">
//               {[...Array(40)].map((_, i) => (
//                 <div key={i} className="w-0.5 bg-gray-400 rounded-full" style={{ height: `${Math.random() * 16 + 6}px` }}></div>
//               ))}
//             </div>
//             <span className="text-xs text-gray-600 font-medium">{message.voiceNote.duration}</span>
//           </div>
//         )} */}
//         <div className="flex items-center justify-end gap-1 mt-1">
//           {message.isOwn && message.status === "read" && <span className="text-xs text-teal-600 italic">Read</span>}
//           {message.isOwn && message.status === "delivered" && <span className="text-xs text-gray-600 italic">Delivered</span>}
//           <span className="text-xs text-gray-500 font-medium">{message.time}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Chat Messages Component
// const ChatMessages: React.FC<{ messages: Message[] }> = ({ messages }) => {
//   return (
//     <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
//       {messages?.map((message, index) => (
//         <MessageBubble key={index} message={message} />
//       ))}
//     </div>
//   );
// };

// // Message Input Component
// const MessageInput: React.FC = () => {
//   const [message, setMessage] = useState("");
//   const [sendMessage] = useSendMessagesMutation();
//   const { data: adminData } = useGetAdminDataQuery();
//   const { data: session } = useSession();
//   const { error: toasError } = useToastMessage();
//   console.log(adminData?.Data?.Id);
//   const handleSendMessage = () => {
//     try {
//       const res = sendMessage({ fromId: String(session?.user?.UserId), Title: "Messanger OR Whatsapp", Message: message, ToId: String(adminData?.Data?.Id) }).unwrap();
//       console.log(res);
//     } catch (err) {
//       const error = err as BaseResponse<null>;
//       toasError(error?.Message || "حدث خطأ ");
//     }
//   };

//   return (
//     <div className="p-4 bg-white border-t">
//       <div className="flex items-center gap-3 mb-3">
//         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter to send, Shift + Enter to add new line" className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
//         <button onClick={handleSendMessage}>Send</button>
//         <button className="text-gray-500 hover:text-gray-700 p-2">
//           <Smile size={20} />
//         </button>
//         <button className="text-gray-500 hover:text-gray-700 p-2">
//           <Paperclip size={20} />
//         </button>
//         <button className="text-gray-500 hover:text-gray-700 p-2">
//           <Mic size={20} />
//         </button>
//       </div>
//       {/* <div className="flex items-center gap-3 text-gray-600">
//         <button className="font-bold text-sm hover:text-gray-900">B</button>
//         <button className="italic text-sm hover:text-gray-900">I</button>
//         <button className="underline text-sm hover:text-gray-900">U</button>
//         <button className="text-sm hover:text-gray-900">• • •</button>
//         <button className="text-sm hover:text-gray-900">1 2 3</button>
//       </div> */}
//     </div>
//   );
// };

// // User Info Sidebar Component
// const UserInfoSidebar: React.FC<{
//   name: string;
//   email: string;
//   phone: string;
//   media: MediaItem[];
//   files: FileItem[];
//   links: LinkItem[];
// }> = ({ name, email, phone, media, files, links }) => {
//   return (
//     <div className="w-80 bg-white border-l overflow-y-auto">
//       <div className="p-6 text-center border-b">
//         <h3 className="text-lg font-semibold mb-6 text-gray-900">Information</h3>
//         <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mb-4"></div>
//         <h4 className="font-semibold text-gray-900 text-lg">{name}</h4>
//         <p className="text-sm text-gray-500 mt-1">{email}</p>
//         <p className="text-sm text-gray-700 font-medium mt-2">{phone}</p>
//       </div>

//       {/* Media Section */}
//       <div className="px-6 py-4 border-b">
//         <div className="flex items-center justify-between mb-3">
//           <h5 className="font-semibold text-gray-900">Media</h5>
//           <button className="text-xs text-gray-500 hover:text-gray-700">Show More</button>
//         </div>
//         <div className="grid grid-cols-3 gap-2">
//           {media.map((item) => (
//             <div key={item.id} className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
//               {item.count && <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-bold">+{item.count}</div>}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Files Section */}
//       <div className="px-6 py-4 border-b">
//         <div className="flex items-center justify-between mb-3">
//           <h5 className="font-semibold text-gray-900">Files</h5>
//           <button className="text-xs text-gray-500 hover:text-gray-700">Show More</button>
//         </div>
//         <div className="space-y-3">
//           {files.map((file) => (
//             <div key={file.id} className="flex items-center justify-between group">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
//                   <span className="text-xs font-bold text-orange-600">{file.icon}</span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">{file.name}</p>
//                   <p className="text-xs text-gray-500">
//                     {file.size} · {file.date}
//                   </p>
//                 </div>
//               </div>
//               <button className="text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition">
//                 <Download size={18} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Links Section */}
//       <div className="px-6 py-4">
//         <div className="flex items-center justify-between mb-3">
//           <h5 className="font-semibold text-gray-900">Links</h5>
//           <button className="text-xs text-gray-500 hover:text-gray-700">Show More</button>
//         </div>
//         <div className="space-y-3">
//           {links.map((link) => (
//             <div key={link.id} className="flex items-start gap-3">
//               <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0"></div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-semibold text-gray-900 truncate">{link.title}</p>
//                 <p className="text-xs text-gray-500 truncate mt-0.5">{link.description}</p>
//                 <p className="text-xs text-blue-600 mt-1 truncate">{link.url}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// export default function ChatApp() {
//   const [activeContactId, setActiveContactId] = useState(2);

//   const contacts: Contact[] = [
//     {
//       id: 1,
//       name: "دعم المنصة",
//       avatar: "",
//       lastMessage: "عندي مشكلة في تفعيل الكود",
//       time: "1 mins ago",
//       unread: 1,
//       lastSeen: "1 minutes ago",
//     },
//     {
//       id: 2,
//       name: "محاضر",
//       avatar: "",
//       lastMessage: "Okey, I got it I will do it after sometime and let you know",
//       time: "Just Now",
//       online: true,
//     },
//   ];

//   const media: MediaItem[] = [
//     { id: 1, type: "image", url: "" },
//     { id: 2, type: "image", url: "" },
//     { id: 3, type: "image", url: "", count: 5 },
//   ];

//   const files: FileItem[] = [
//     { id: 1, name: "Logo Company", size: "2.1 MB", date: "Today", icon: "PDF" },
//     { id: 2, name: "New Customer Guide", size: "1.2 MB", date: "Feb 25, 2021", icon: "DOC" },
//     { id: 3, name: "Code Home Page", size: "0.5 MB", date: "Jan 30, 2021", icon: "PDF" },
//   ];

//   const links: LinkItem[] = [
//     {
//       id: 1,
//       title: "Social Web Components",
//       description: "11 Screens. Published on Dribbble with...",
//       url: "https://dribbble.com/shots/17163333",
//       thumbnail: "",
//       date: "",
//     },
//     {
//       id: 2,
//       title: "Freelancer Message Dashboard",
//       description: "A Freelancer dashboard where the...",
//       url: "",
//       thumbnail: "",
//       date: "",
//     },
//   ];

//   const activeContact = contacts.find((c) => c.id === activeContactId) || contacts[1];
//   const [sentMessages, setSentMessages] = useState<Message[]>([]);
//   const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);
//   const [allMessages, setAllMessages] = useState<Message[]>([]);
//   const { data: session } = useSession();
//   const { data: sendMessages } = useGetSentMessagesQuery({ UserRole: "SystemAdmin", FromOrToUserId: String(session?.user?.UserId) });
//   const { data: recievedMessages } = useGetRecievedMessagesQuery({ UserRole: "Student", FromOrToUserId: String(session?.user?.UserId) });

//   const mapToMessage = (msg: ChatMessage, isOwn: boolean): Message => ({
//     id: Number(msg.Id),
//     text: msg.Message,
//     createdTime: new Date(msg.CreatedOn).getTime(),
//     time: new Date(msg.CreatedOn).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     isOwn,
//   });

//   useEffect(() => {
//     const msgs = sendMessages?.Data ?? [];

//     if (msgs.length > 0) {
//       const mapped = msgs.map((m) => mapToMessage(m, true)); // ← isOwn = true
//       setSentMessages(mapped); // overwrite – no duplicates
//     }
//   }, [sendMessages]);

//   useEffect(() => {
//     const msgs = recievedMessages?.Data ?? [];

//     if (msgs.length > 0) {
//       const mapped = msgs.map((m) => mapToMessage(m, false)); // ← isOwn = false
//       setReceivedMessages(mapped);
//     }
//   }, [recievedMessages]);

//   useEffect(() => {
//     const all = [
//       ...sentMessages.map((m) => ({ ...m, isOwn: true })), // يمين
//       ...receivedMessages.map((m) => ({ ...m, isOwn: false })), // شمال
//     ];

//     all.sort((a, b) => a.createdTime - b.createdTime); // أقدم → أحدث

//     setAllMessages(all);

//       console.log("Sent =>", sendMessages);
//       console.log("Received =>", recievedMessages);
//   }, [sentMessages, receivedMessages]);
//   return (
//     <div className="flex h-screen bg-gray-100 ps-[80px]">
//       {/* Left Sidebar - Contacts */}
//       <ContactsSidebar contacts={contacts} activeContactId={activeContactId} onSelectContact={setActiveContactId} />

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col">
//         <ChatHeader name={activeContact.name} status={activeContact.online ? "● Online" : `Last seen ${activeContact.lastSeen}`} />
//         <ChatMessages messages={allMessages} />
//         <MessageInput />
//       </div>

//       {/* Right Sidebar - User Info */}
//       {/* <UserInfoSidebar
//         name="Jhonny Wilson"
//         email="Jhonny_wils255@gmail.com"
//         phone="+62 813-4545-210"
//         media={media}
//         files={files}
//         links={links}
//       /> */}
//       <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />

//       <Script src="/assets/js/jquery.signalR-2.4.3.min.js" strategy="beforeInteractive" />

//       <Script src="https://vedu-demo.vtsitco.com/signalr/hubs" strategy="beforeInteractive" />
//     </div>
//   );
// }

import React from "react";

function page() {
  return <div>page</div>;
}

export default page;
