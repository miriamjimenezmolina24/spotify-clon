import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", // Unique ID. Tells me what track is selected
    default: null, // By default is null value
});

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false, // If you are playing a song is true. By default false
});