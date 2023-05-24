import React from "react";
import "./workouteer.css";
import workouteerIcon from "./assets/icon/app-icon.png";
import findWorkouts from "./assets/screenshots/find-workouts.jpg";
import chats from "./assets/screenshots/chats.jpg";
import workoutDetails from "./assets/screenshots/workout-details.jpg";
import home from "./assets/screenshots/home.jpg";
import ProjectCard from "../ProjectCard";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import useCheckMobileScreen from "../../../../hooks/useCheckMobileScreen";
import { firestore } from "../../../../firebase.config";
import {
  updateDoc,
  doc,
  increment,
  Timestamp,
  arrayUnion,
} from "firebase/firestore";
const Workouteer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const googlePlayListener = async () => {
    const db = firestore;
    console.log("counting googlePlay click");
    await updateDoc(doc(db, "workouteerStats", "googlePlayClicks"), {
      counter: increment(1),
      downloads: arrayUnion(Timestamp.now()),
    });
  };
  const openWebsiteListener = async () => {
    const db = firestore;
    console.log("counting click");
    await updateDoc(doc(db, "workouteerStats", "websiteClicks"), {
      counter: increment(1),
      clicks: arrayUnion(Timestamp.now()),
    });
  };
  const caruselItem = (image) => {
    return (
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: window.innerHeight, width: "auto" }}
            className="rounded-lg"
            src={image}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
    );
  };
  return (
    <div>
      <div className="project__header__links">
        <div className="project__header">
          <div className="project__image">
            <img src={workouteerIcon} alt="Workouteer icon" />
          </div>
          <div className="project__title">
            <h3>
              <span>Workouteer</span>: Social app for outdoor fitness
              enthusiasts
            </h3>
          </div>
        </div>

        <div className="project__links">
          <div>
            <a
              href={
                "https://play.google.com/store/apps/details?id=com.charlap.workouteer"
              }
              onClick={googlePlayListener}
              className="btn btn-primary project__link"
              target="_blank"
            >
              Open on Google Play!
            </a>
          </div>
          <div>
            <a
              className="btn"
              href="https://workouteer.co.il"
              onClick={openWebsiteListener}
              target="_blank"
            >
              {"Or check the Website version :)"}
            </a>
          </div>
        </div>
      </div>
      <div className="project__description">
        <h5>
          {
            "An app that lets you schedule a workout, (biking, running etc), by choosing type, time and place, join other’s workouts or chat with new friends."
          }{" "}
          <span>
            The app is already hosted on a custom domain and is working on
            Android. try it out
          </span>
        </h5>
      </div>
      {!isMobile ? (
        <div className="screenshot__cards">
          <ProjectCard
            title="Detailed workouts documenting"
            subTitle="The exact location shared between your friends"
            screenshotImage={workoutDetails}
          />
          <ProjectCard
            title="Find workouts in your area"
            subTitle="Find workouts by city and distance from your current location"
            screenshotImage={findWorkouts}
          />
          <ProjectCard
            title="Whatever you're looking for"
            subTitle="Create, Find, Track and Join workouts"
            screenshotImage={home}
          />
          <ProjectCard
            title="Find your next workout partner"
            subTitle="Chat with people who share the same hobbies"
            screenshotImage={chats}
          />
        </div>
      ) : (
        <div>
          <h5 className="text-center">Scroll left/right</h5>
          <Carousel interval={4000}>
            {caruselItem(workoutDetails)}
            {caruselItem(findWorkouts)}
            {caruselItem(home)}
            {caruselItem(chats)}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Workouteer;
