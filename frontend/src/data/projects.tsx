'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  SiDart, SiFlutter, SiJavascript, SiReact, SiVuedotjs,
  SiAngular, SiTypescript, SiAstro, SiFastapi, SiSupabase,
} from "react-icons/si";

import { CompetencyItem } from '@/types';

// Co-located here because it is used as the `description` value of
// `thesisProject`, which lives in this same file.
function ThesisDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <span>
      This research demonstrates that the architectural differences between LSTM and Informer influence how both models learn the volatile price movement patterns of NIKL.JK stock.
      {!isExpanded ? (
        <>
          <span className="text-[var(--color-text-muted)]">... </span>
          <button
            onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
            className="text-brand-400 font-semibold hover:underline cursor-pointer"
          >
            See more
          </button>
        </>
      ) : (
        <>
          {" "}The memory gate mechanism in LSTM consistently yields predictions close to actual values across all evaluation metrics, whereas Informer remains capable of capturing long-term trend directions albeit with varying levels of precision. Furthermore, Taguchi optimization confirms that the effectiveness of hyperparameter tuning depends on the distinct architectural characteristics of each model.
          <button
            onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
            className="ml-1 text-brand-400 font-semibold hover:underline cursor-pointer inline-block"
          >
            See less
          </button>
        </>
      )}
    </span>
  );
}

export const competencies: CompetencyItem[] = [
  {
    title: "Pawon App",
    description: "Develop Back-end Mobile Applications with Flutter, Dart & Supabase Integrated.",
    icons: [
      <SiFlutter key="flutter" style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiDart key="dart" style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiSupabase key="supabase" style={{ color: "#3ECF8E", fontSize: "1.5rem" }} />,
    ],
    images: ["/Iphone.jpg", "/Iphone2.jpg"],
    link: "",
  },
  {
    title: "Internship at Winnicode Garuda Teknologi",
    description: "Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40261",
    icons: [
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <SiJavascript key="js" style={{ color: "#E7F527", fontSize: "1.5rem" }} />,
    ],
    images: ["/HomeBerita.PNG", "/Homeberita2.PNG"],
    link: "",
    linkedin: "https://www.linkedin.com/company/winnicodegarudateknologi/posts/?feedView=all",
    certificateImage: "/sertifikatmagang.png",
    certificateDescription:
      "Fullstack Developer Winnicode Garuda Tech (Internship). · May 2025 - August 2025\n\nArchitectural Design and Implementation of a Web-Based News Portal System with Integrated News API Services.",
  },
  {
    title: "Deep Learning",
    description: "Brebes Regency temperature forecasting with Long Short-Term Memory model & GUI Tkinter.",
    icons: [
      <Image
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
      <img
        key="tensorflow"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
        alt="Tensorflow"
        style={{ width: "24px", height: "24px" }}
      />,
      <img
        key="keras"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
        alt="Keras"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/suhu.png", "/architecturelstm.png"],
    link: "",
  },
  {
    title: "Gerobar",
    description: "Digitalize Mid Micro Business Toasted Bread Gerobar.",
    icons: [
      <SiVuedotjs key="vue" style={{ color: "#3cb371", fontSize: "1.5rem" }} />,
    ],
    images: ["/Gerobar.png", "/banner.png"],
    link: "https://gerobar-umkm.vercel.app/",
    instagram: "https://www.instagram.com/gerobar_id/",
  },
  {
    title: "Bermalam Tour",
    description:
      "an Travelling web-based, Online Booking Destination website with framework Angular.js and Typescript library react for responsive ui",
    icons: [
      <SiAngular key="angular" style={{ color: "#DD0031", fontSize: "1.5rem" }} />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
    ],
    images: ["/LandingKeyin.png", "/manhattan.png"],
    link: "https://keyin-pariwisata.vercel.app/",
  },
  {
    title: "Software Testing on Education & Report System HSE",
    description: "Design Implementation and Software Quality Assurance",
    icons: [
      <img
        key="postman"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        alt="Postman"
        style={{ width: "24px", height: "24px" }}
      />,
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <Image
        key="jest"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="Jest"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/dashboardk3.png", "/workplace-safety-priority.jpg"],
    link: "",
  },
  {
    title: "Cakranegara supported by Hacktiv8",
    description: "Solve ur Business Equipment & Requirement with our AI Chatbot Integrated called 'Mas Cakra-bot'",
    icons: [
      <SiAstro key="astro" style={{ color: "#FF5D01", fontSize: "1.5rem" }} />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
    ],
    images: ["/excapillar.png", "/cakrabot.png"],
    link: "https://cakranegara-equipment.vercel.app/",
    certificateImage: "/Hacktiv8MajubarengAI.jpg",
    certificateDescription:
      "Maju Bareng AI by Hacktiv8. ·2026\n\nSuccessfully completed the Maju Bareng AI program by Hacktiv8, focusing on integrating Google Gemini AI and Studio for innovative business solutions like the Mas Cakra-bot.",
  },
  {
    title: "YOLOv8",
    description:
      "Computer Vision for Car Adaptive Collision Warning System with OpenCV and You Only Look Once (YOLO) ",
    icons: [
      <Image
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/defendercollision (compressed).mp4", "/workflow.png", "/Collision.png"],
    link: "https://github.com/Lutfiandraa/CollisionWarning-YOLO",
    category: "computer-vision",
    hideVisitButton: true,
  },
  {
    title: "Plotting Geothermal in Asia",
    description: "Modelling international data Geothermal with Random Forest for Plot Geothermal in Asia",
    icons: [
      <img
        loading="lazy"
        decoding="async"
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />,
      <img
        key="keras"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
        alt="Keras"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/AsiaGeothermal.png"],
    link: "",
    category: "data-science",
  },
  {
    title: "Naive RAG & LLM",
    description: "AI Agent for Oil Rig Indicator Analytics using Retrieval-Augmented Generation & Langflow",
    icons: [
      <img
        key="python"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />,
      <img
        key="langflow"
        loading="lazy"
        decoding="async"
        src="https://cdn.simpleicons.org/langflow/FFFFFF"
        alt="Langflow"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/AIAgentLLM.PNG"],
    link: "#",
    category: "data-science",
    certificateImage: "/IBMCompleted.png",
    certificateDescription:
      "IBM Skillbuild - AI Agent for Oil Rig Indicator Analytics using Retrieval-Augmented Generation & Langflow. · 2026\n\nImplementation of a Naive RAG & LLM system to create an AI Agent for advanced analytics in the Oil Rig industry.",
  },
  {
    title: "GeoSiaga",
    description: "Fullstack Dashboard web-based with models Random Forest & XGBoost for predict floods in Jakarta",
    icons: [
      <img
        key="docker"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker"
        style={{ width: "24px", height: "24px" }}
      />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <Image
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
      <SiFastapi key="fastapi" style={{ color: "#009688", fontSize: "1.5rem" }} />,
    ],
    images: ["/GeoSiagaMap.PNG", "/DashboardGeo.PNG"],
    link: "",
    category: "data-science",
  },
];

export const thesisProject: CompetencyItem = {
  title:
    "Comparison Performance of Long Short-Term Memory & Informer (Transformer-based) for Stock Prediction",
  description: <ThesisDescription />,
  icons: [
    <Image
      key="python"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      alt="Python"
      width={24}
      height={24}
      style={{ width: "24px", height: "24px" }}
    />,
  ],
  images: ["/StockPredDashboard.PNG"],
  posterImage: "/PosterTALutfiandra.png",
  link: "",
};
