"use strict";
exports.__esModule = true;
var sections_1 = require("./sections");
var HOME_EMOTICON_LIST_1 = require("./HOME_EMOTICON_LIST");
var Home = function (_a) {
    return (React.createElement("main", { className: "relative flex h-screen w-screen items-center overflow-hidden lg:items-baseline lg:pt-40" },
        React.createElement("section", { className: "flex w-full flex-col items-center" },
            React.createElement("div", { className: "flex w-full flex-col gap-y-3 px-5 lg:w-[750px] lg:px-0" },
                React.createElement("h1", { className: "text-center text-[30px] font-extrabold lg:text-[40px]" },
                    "Add fun",
                    " ",
                    React.createElement("span", { className: "underline-dotted capitalize text-primary underline-offset-[5px]" }, "kaomoji"),
                    " ",
                    "to your messages with just a click for livelier chats!"),
                React.createElement("h2", { className: "text-center font-medium" },
                    React.createElement("span", { className: "font-bold capitalize text-primary" }, "Kaomoji (\u9854\u6587\u5B57)"),
                    " ",
                    "is a popular Japanese emoticon style crafted from characters and punctuation, conveying emotions in text and online communication.")),
            React.createElement(sections_1.HomeButton, null),
            React.createElement(sections_1.EmoticonGrid, { className: "mt-28 hidden px-32 lg:grid", data: HOME_EMOTICON_LIST_1["default"] }),
            React.createElement(sections_1.MobileEmoticonGrid, { className: "mt-16 block overflow-visible lg:hidden", data: HOME_EMOTICON_LIST_1["default"] })),
        React.createElement(sections_1.KaomjiKanji, null),
        React.createElement(sections_1.Watermark, null),
        React.createElement(sections_1.OrnamentEmoji, null)));
};
exports["default"] = Home;
