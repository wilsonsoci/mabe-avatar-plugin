// index.js
const { findByProps } = vendetta.metro;
const { after } = vendetta.patcher;

const AvatarModule = findByProps("getAvatarURL", "getDisplayAvatarURL");
const TARGET_ID = "263029090540453899";
const CUSTOM_URL = "https://i.imgur.com/hHxK9dY.png";

let unpatch;

export default {
    onLoad: () => {
        unpatch = after("getAvatarURL", AvatarModule, (args, res) => {
            const userId = args[0]?.id || args[0];
            if (userId === TARGET_ID) return CUSTOM_URL;
            return res;
        });
    },
    onUnload: () => {
        if (unpatch) unpatch();
    }
};
