import React from "react";

import BlanjaImg from "../assets/project/Blanja.png";
import PeworldImg from "../assets/project/PeworldLanding.png";
import RecipeImg from "../assets/project/Tech-Fun-home.png";
import RecipeMobileImg from "../assets/project/FoodRecipeMobile.png";

const TheProjects = [
  {
    title: "Blanja",
    decription: (
      <p>
        Blanja is an E-commerce website project that aims to provide an easy and
        convenient online shopping experience for users in Indonesia. The site
        offers a wide range of products, including fashion, beauty, electronics,
        food and beverages. <br />
        <br /> To use Blanja's services, users only need to create an account
        and enter their payment details. After that, users can browse products,
        add them to their shopping cart, and choose their preferred payment
        method. <br />
        <br /> With all the features and security provided, Blanja is expected
        to provide a safe, easy, and convenient online shopping experience for
        users across Indonesia.
      </p>
    ),
    image: BlanjaImg,
    type: "website",
    githubLink: "https://github.com/msuryasyahruli/blanja-web",
    projectLink: "https://blanja-market-web.vercel.app",
  },
  {
    title: "Peworld",
    decription: (
      <p>
        Peworld is a jobseeker website project that aims to assist Software
        Developers in finding jobs that match their skills.
        <br />
        <br /> On this website, job seekers can create a profile, upload their
        experience and portfolio. Peworld also offers a feature to connect job
        seekers with companies that are looking for candidates with the required
        skills.
        <br />
        <br />
        One of the outstanding features of Peworld is the ability to identify
        the skills and interests of job seekers based on their abilities. With
        this information, recruiters can directly connect through the hire
        feature.
      </p>
    ),
    image: PeworldImg,
    type: "website",
    githubLink: "https://github.com/msuryasyahruli/peworld-web",
    projectLink: "https://peworld-hirejob-web.vercel.app",
  },
  {
    title: "Mama Recipe (Team)",
    decription: (
      <p>
        Mama Recipe is a food recipe website project that aims to inspire users
        to cook and share their favorite recipes. The name Mama Recipe means
        "let's cook" in Indonesian. On this website, users can search for
        recipes, share their own recipes, and connect with other food
        enthusiasts. <br />
        <br />
        One of Mama Recipe's main features is its user-friendly search function.
        Users can search for recipes by food name. The website also provides
        detailed recipe instructions, ingredient lists, and video tutorials to
        assist users in the cooking process. <br />
        <br />
        Another unique feature of Mama Recipe is that users can create their own
        profiles, connect with other users, and share their favorite recipes.
        This allows users to learn from each other and explore new culinary
        ideas. <br />
        <br />
        To use the Mama Recipe website, users simply need to create an account
        and start searching or sharing recipes. The site is designed to be easy
        to use and accessible to all levels of culinary expertise
      </p>
    ),
    image: RecipeImg,
    type: "website",
    githubLink:
      "https://github.com/vineas/team-project_kelompok1_pijar_frontend",
    projectLink: "https://team-project-kelompok1-pijar-frontend.vercel.app",
  },
  {
    title: "Mama Recipe (Mobile App)",
    decription: (
      <p>
        Mama Recipe is a food recipe website project that aims to inspire users
        to cook and share their favorite recipes. The name Mama Recipe means
        "let's cook" in Indonesian. On this website, users can search for
        recipes, share their own recipes, and connect with other food
        enthusiasts. <br />
        <br />
        One of Mama Recipe's main features is its user-friendly search function.
        Users can search for recipes by food name. The website also provides
        detailed recipe instructions, ingredient lists, and video tutorials to
        assist users in the cooking process. <br />
        <br />
        Another unique feature of Mama Recipe is that users can create their own
        profiles, connect with other users, and share their favorite recipes.
        This allows users to learn from each other and explore new culinary
        ideas. <br />
        <br />
        To use the Mama Recipe website, users simply need to create an account
        and start searching or sharing recipes. The site is designed to be easy
        to use and accessible to all levels of culinary expertise
      </p>
    ),
    image: RecipeMobileImg,
    type: "mobile",
    githubLink: "https://github.com/msuryasyahruli/FE-Food-Recipe-app-v2",
    projectLink:
      "https://expo.dev/preview/update?message=Fix%20routes%20bug&updateRuntimeVersion=exposdk%3A48.0.0&createdAt=2025-03-01T17%3A10%3A25.915Z&slug=exp&projectId=fdad616c-cd02-44ab-8edb-0c800c3a81d8&group=6e9a29d3-fb17-49d0-b003-e4aba601ca00",
  },
];

export default TheProjects;
