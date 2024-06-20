import React from "react";
import { createAction } from "kbar";

export const initialActions = [
    // ------------------- About Us ---------------------
    {
        id: "tedAction",
        name: "TED",
        shortcut: ["h"],
        keywords: "ted tedx tedxavelorne",
        section: "AboutUs",
        perform: () => (window.location.href = "/"),
        //icon: // ClockIcon,
        subtitle: "Back to Ted Section.",
    },
    {
        id: "tedxAction",
        name: "TEDx",
        shortcut: ["h"],
        keywords: "ted tedx tedxavelorne",
        section: "AboutUs",
        perform: () => (window.location.href = "/"),
        //icon: // ClockIcon,
        subtitle: "Back to TEDx Section.",
    },
    {
        id: "tedxAvelorneAction",
        name: "TEDxAveLorne",
        shortcut: ["h"],
        keywords: "ted tedx tedxavelorne",
        section: "AboutUs",
        perform: () => (window.location.href = "/"),
        //icon: // ClockIcon,
        subtitle: "Back to TEDxAveLorne Section.",
    },

    // ------------------- Event -------------------
    {
        id: "dateAndTimeAction",
        name: "Date & Time",
        shortcut: ["a", "w"],
        keywords: "date time",
        section: "Event",
        subtitle: "Back to Date and Time section.",
        perform: () => (window.location.href = "/event"),
    },
    {
        id: "agendaAction",
        name: "Agenda",
        shortcut: ["a", "v"],
        keywords: "agenda",
        section: "Event",
        subtitle: "Back to Agenda section.",
        perform: () => (window.location.href = "/event"),
    },

    // ------------------- Team -------------------
    {
        id: "teamAction",
        name: "Team",
        shortcut: ["a", "i"],
        keywords: "team",
        section: "Team",
        subtitle: "Back to Team section.",
        perform: () => (window.location.href = "/team"),
    },

    // ------------------- Speakers -------------------
    {
        id: "speakersAction",
        name: "Speakers",
        shortcut: ["a", "i"],
        keywords: "speakers",
        section: "Speakers",
        subtitle: "Back to Speakers section.",
        perform: () => (window.location.href = "/speakers"),
    },

    // ------------------- Media -------------------
    {
        id: "mediaAction",
        name: "Media",
        shortcut: ["a", "i"],
        keywords: "media picture photo video",
        section: "Media",
        subtitle: "Back to Media section.",
        perform: () => (window.location.href = "/media"),
    },

    // ------------------- Join Us -------------------
    {
        id: "joinUsAction",
        name: "Join Us",
        shortcut: ["a", "i"],
        keywords: "joinus memebers speakers sponsors",
        section: "JoinUs",
        subtitle: "Back to Join Us section.",
        perform: () => (window.location.href = "/joinus"),
    },
    {
        id: "membersAction",
        name: "Join Us Members",
        shortcut: ["a", "i"],
        keywords: "joinus memebers speakers sponsors",
        section: "JoinUs",
        subtitle: "Back to Join Us Members section.",
        perform: () => (window.location.href = "/joinus/team"),
    },
    {
        id: "speakersAction",
        name: "Join Us Speakers",
        shortcut: ["a", "i"],
        keywords: "joinus memebers speakers sponsors",
        section: "JoinUs",
        subtitle: "Back to Join Us Speakers section.",
        perform: () => (window.location.href = "/joinus/speaker"),
    },
    {
        id: "sponsorsAction",
        name: "Join Us Sponsors",
        shortcut: ["a", "i"],
        keywords: "joinus memebers speakers sponsors",
        section: "JoinUs",
        subtitle: "Back to Join Us Sponsors section.",
        perform: () => (window.location.href = "/joinus/sponsor"),
    },

    createAction({
        name: "This repo on GitHub",
        shortcut: ["g", "h"],
        keywords: "github repo source code",
        section: "Links",
        perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
    }),
];
