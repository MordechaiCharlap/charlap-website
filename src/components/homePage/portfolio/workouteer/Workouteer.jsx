import React from "react";
import "./workouteer.css";
import workouteerIcon from "./assets/icon/app-icon.png";
import findWorkouts from "./assets/screenshots/find-workouts.jpg";
import chats from "./assets/screenshots/chats.jpg";
import workoutDetails from "./assets/screenshots/workout-details.jpg";
import home from "./assets/screenshots/home.jpg";
import apkUrl from "./assets/apk/Workouteer.apk";
import ProjectCard from "../ProjectCard";
import Carousel from "react-bootstrap/Carousel";
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
  const isMobile = useCheckMobileScreen();
  const downloadApkListener = async () => {
    const db = firestore;
    console.log("counting download");
    await updateDoc(doc(db, "workouteerStats", "apkDownloads"), {
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
              download
              href={apkUrl}
              onClick={downloadApkListener}
              className="btn btn-primary project__link"
            >
              Download APK file!
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
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-lg p-1"
                src={workoutDetails}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-lg p-1"
                src={findWorkouts}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-lg p-1"
                src={home}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-lg p-1"
                src={chats}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Workouteer;
