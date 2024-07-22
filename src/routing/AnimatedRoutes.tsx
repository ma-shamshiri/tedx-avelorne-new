import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from "./HomePage";
import Event2023Page from "./Event2023Page";
import JoinUsTeamPage from "./JoinUsTeamPage";
import JoinUsSponsorPage from "./JoinUsSponsorPage";
import JoinUsPage from "./JoinUsPage";
import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
import MediaPage from "./MediaPage";
import SaminMajidi from "../components/TeamMembers/SaminMajidi";
import FatemehTavanaei from "../components/TeamMembers/FatemehTavanaei";
import ReihanehGhoroghchian from "../components/TeamMembers/ReihanehGhoroghchian";
import FathimaNihathaLathiff from "../components/TeamMembers/FathimaNihathaLathiff";
import HamidrezaErmagan from "../components/TeamMembers/HamidrezaErmagan";
import BaharanNouriinanloo from "../components/TeamMembers/BaharanNouriinanloo";
import MelikaSeyedi from "../components/TeamMembers/MelikaSeyedi";
import MohammadZaid from "../components/TeamMembers/MohammadZaid";
import MinaTaraghi from "../components/TeamMembers/MinaTaraghi";
import MotaharehPourrahimi from "../components/TeamMembers/MotaharehPourrahimi";
import AryanaHaghjoo from "../components/TeamMembers/AryanaHaghjoo";
import PegahEinakchi from "../components/TeamMembers/PegahEinakchi";
import RoyanJafari from "../components/TeamMembers/RoyanJafari";
import EdwinMeriaux from "../components/TeamMembers/EdwinMeriaux";
import GezalNajafi from "../components/TeamMembers/GezalNajafi";
import AminShamshiri from "../components/TeamMembers/AminShamshiri";
import AndrewChurchil from "../components/Speakers/AndrewChurchil";
import MyraVirgil from "../components/Speakers/MyraVirgil";
import KiraDolhan from "../components/Speakers/KiraDolhan";
import FloreDeshayes from "../components/Speakers/FloreDeshayes";
import LeilaKosseim from "../components/Speakers/LeilaKosseim";
import JanetPerlman from "../components/Speakers/JanetPerlman";
import PeggyBell from "../components/Speakers/PeggyBell";
import AlinaGutierrezMejia from "../components/Speakers/AlinaGutierrezMejia";
import MohammaderfanMohit from "../components/TeamMembers/MohammaderfanMohit";
import ZahraAhmadi from "../components/TeamMembers/ZahraAhmadi";
import SpeakersPage from "./SpeakersPage";
import TeamPage from "./TeamPage";
import EventPage from "./EventPage";
import Event2024Page from "./Event2024Page";
import { BlockVideoGallery } from '../components/BlockVideoGallery';
import VideoGalleryPage from './VideoGalleryPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tedx-2023/" element={<Event2023Page />} />
        <Route path="/tedx-2024/" element={<Event2024Page />} />
        <Route path="/photos/" element={<MediaPage />} />
        <Route path="/videos/" element={<VideoGalleryPage />} />
        <Route path="/event/" element={<EventPage />} />
        <Route path="/joinus/" element={<JoinUsPage />} />
        <Route path="/joinus/team/" element={<JoinUsTeamPage />} />
        <Route path="/joinus/speaker/" element={<JoinUsSpeakerPage />} />
        <Route path="/joinus/sponsor/" element={<JoinUsSponsorPage />} />
        <Route path="/speakers/" element={<SpeakersPage />} />
        <Route path="/speakers/myra-virgil/" element={<MyraVirgil />} />
        <Route path="/speakers/kira-dolhan/" element={<KiraDolhan />} />
        <Route path="/speakers/flore-deshayes/" element={<FloreDeshayes />} />
        <Route path="/speakers/leila-kosseim/" element={<LeilaKosseim />} />
        <Route path="/speakers/janet-perlman/" element={<JanetPerlman />} />
        <Route path="/speakers/peggy-bell/" element={<PeggyBell />} />
        <Route path="/speakers/alina-gutierrez-mejia/" element={<AlinaGutierrezMejia />} />
        <Route path="/speakers/andrew-churchil/" element={<AndrewChurchil />} />
        <Route path="/team/" element={<TeamPage />} />
        <Route path="/team/samin-majidi/" element={<SaminMajidi />} />
        <Route path="/team/fatemeh-tavanaei/" element={<FatemehTavanaei />} />
        <Route path="/team/reihaneh-ghoroghchian/" element={<ReihanehGhoroghchian />} />
        <Route path="/team/mohammaderfan-mohit/" element={<MohammaderfanMohit />} />
        <Route path="/team/zahra-ahmadi/" element={<ZahraAhmadi />} />
        <Route path="/team/fathima-nihatha-lathiff/" element={<FathimaNihathaLathiff />} />
        <Route path="/team/hamidreza-ermagan/" element={<HamidrezaErmagan />} />
        <Route path="/team/baharan-nouriinanloo/" element={<BaharanNouriinanloo />} />
        <Route path="/team/melika-seyedi/" element={<MelikaSeyedi />} />
        <Route path="/team/mohammad-zaid/" element={<MohammadZaid />} />
        <Route path="/team/mina-taraghi/" element={<MinaTaraghi />} />
        <Route path="/team/motahareh-pourrahimi/" element={<MotaharehPourrahimi />} />
        <Route path="/team/aryana-haghjoo/" element={<AryanaHaghjoo />} />
        <Route path="/team/pegah-einakchi/" element={<PegahEinakchi />} />
        <Route path="/team/royan-jafari/" element={<RoyanJafari />} />
        <Route path="/team/edwin-meriaux/" element={<EdwinMeriaux />} />
        <Route path="/team/gezal-najafi/" element={<GezalNajafi />} />
        <Route path="/team/amin-shamshiri/" element={<AminShamshiri />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
