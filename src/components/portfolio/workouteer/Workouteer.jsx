import React from "react";
import "./workouteer.css";
import workouteerIcon from "./assets/icon/app-icon.png";
import findWorkouts from "./assets/screenshots/find-workouts.jpg";
import chats from "./assets/screenshots/chats.jpg";
import workoutDetails from "./assets/screenshots/workout-details.jpg";
import pastWorkouts from "./assets/screenshots/past-workouts.jpg";
import apkUrl from "./assets/apk/Workouteer.apk";
import ProjectCard from "../ProjectCard";
import Carousel from "react-bootstrap/Carousel";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";
const Workouteer = () => {
  const isMobile = useCheckMobileScreen();
  console.log(isMobile);
  return (
    <div>
      <div className="project__header__links">
        <div className="project__header">
          <div className="project__image">
            <img src={workouteerIcon} alt="Workouteer icon" />
          </div>
          <div className="project__title">
            <h3>Workouteer: Social app for outdoor fitness enthusiasts</h3>
          </div>
        </div>

        <div className="project__links">
          <div>
            <a download href={apkUrl} className="btn btn-primary project__link">
              Download APK file!
            </a>
          </div>
          <div>
            <a className="btn" href="https://workouteer.co.il" target="_blank">
              {"Or check the Website version :)"}
            </a>
          </div>
        </div>
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
            title="Track your workouts history"
            subTitle="Workouteer helps you keep your exercise routine going"
            screenshotImage={pastWorkouts}
          />
          <ProjectCard
            title="Find your next workout partner"
            subTitle="Chat with people who share the same hobbies"
            screenshotImage={chats}
          />
        </div>
      ) : (
        <Carousel>
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
              src={pastWorkouts}
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
      )}
    </div>
  );
};

export default Workouteer;
