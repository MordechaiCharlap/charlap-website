import React from "react";
import "./workouteer.css";
import workouteerIcon from "./assets/icon/app-icon.png";
import createWorkout from "./assets/screenshots/create-workout.jpg";
import findWorkouts from "./assets/screenshots/find-workouts.jpg";
import chats from "./assets/screenshots/chats.jpg";
import workoutDetails from "./assets/screenshots/workout-details.jpg";
import apkUrl from "./assets/apk/Workouteer.apk";
import ProjectCard from "../ProjectCard";
const Workouteer = () => {
  return (
    <div>
      <div className="project__header__links">
        <div className="project__header__container">
          <div className="project__image">
            <img src={workouteerIcon} alt="Workouteer icon" />
          </div>
          <div className="project__title">
            <h3>Workouteer: Social app for outdoor fitness enthusiasts</h3>
          </div>
        </div>

        <div className="project__links">
          <div>
            <a download href={apkUrl} className="btn btn-primary">
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
      <div className="screenshot__cards">
        <ProjectCard
          title="Schedule a workout"
          subTitle="Choose type, time and place"
          screenshotImage={createWorkout}
        />
        <ProjectCard
          title="Detailed workouts tracking"
          subTitle="Chat with people who share the same hobbies"
          screenshotImage={workoutDetails}
        />
        <ProjectCard
          title="Find workouts in your area"
          subTitle="Find workouts by city and distance from your current location"
          screenshotImage={findWorkouts}
        />
        <ProjectCard
          title="Find your next workout partner"
          subTitle="Chat with people who share the same hobbies"
          screenshotImage={chats}
        />
      </div>
    </div>
  );
};

export default Workouteer;
