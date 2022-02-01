const str = "india is my country";

const obj = {};
str.split("").forEach((ele) => (obj[ele] = obj[ele] ? obj[ele] + 1 : 1));
