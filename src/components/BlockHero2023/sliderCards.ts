import {
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
    sliderImage6,
    sliderImage7,
    sliderImage8,
    sliderImage9,
    sliderImage10,
    event2023Pic1,
    event2023Pic2,
    event2023Pic3,
    event2023Pic4,
    event2023Pic5,
    event2023Pic6,
} from "../../assets";


export interface SliderCard {
    title: string;
    text: string;
    image: string;
}

export const sliderCards: SliderCard[] = [
    {
        title: 'TEDxAveLorne | September 2023',
        text: "Capturing the dynamic group of speakers, organizers, and participants",
        image: sliderImage1,
    },
    {
        title: 'TEDxAveLorne | September 2023',
        text: "Capturing the moments that made our event unforgettable",
        image: event2023Pic1,
    },
    {
        title: 'Alina Gutierrez Mejia',
        text: "Let Me Draw What I Mean",
        image: sliderImage2,
    },
    {
        title: 'Alina Gutierrez Mejia',
        text: "Let Me Draw What I Mean",
        image: sliderImage3,
    },
    {
        title: 'Flore Deshayes',
        text: "La pouvoir du silence dans nos interactions humaines",
        image: sliderImage4,
    },
    {
        title: 'Flore Deshayes',
        text: "La pouvoir du silence dans nos interactions humaines",
        image: sliderImage5,
    },
    {
        title: 'Kira Dolhan',
        text: "Personal strength is not always so personal",
        image: sliderImage6,
    },
    {
        title: 'Kira Dolhan',
        text: "Personal strength is not always so personal",
        image: sliderImage7,
    },
    {
        title: 'Leila Kosseim',
        text: "How can we make computers understand natural language?",
        image: sliderImage8,
    },
    {
        title: 'Peggy Bell',
        text: "Revolutionizing Mining: From Challenges to Empowerment",
        image: sliderImage9,
    },
    {
        title: 'Peggy Bell',
        text: "Revolutionizing Mining: From Challenges to Empowerment",
        image: sliderImage10,
    },
];
