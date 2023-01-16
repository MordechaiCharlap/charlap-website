import React from "react";
import "./workouteer.css";
import workouteerIcon from "./assets/app-icon.png";
import createWorkout from "./assets/create-workout.jpg";
import findWorkouts from "./assets/find-workouts.jpg";
import ProjectCard from "../ProjectCard";
const Workouteer = () => {
  return (
    <div>
      <div className="project__header">
        <div className="project__image">
          <img src={workouteerIcon} alt="Workouteer icon" />
        </div>
        <div className="project__title">
          <h3>Workouteer: Social app for outdoor fitness enthusiasts</h3>
        </div>
        <div>
          <a href="https://google.com" className="btn btn-primary">
            Download APK file!
          </a>
        </div>
      </div>
      <div className="screenshot__cards">
        <ProjectCard
          title="Schedule a workout!"
          subTitle="Choose type, time and place"
          screenshotImage={createWorkout}
        />
        <ProjectCard
          title="Find workouts in your area!"
          subTitle="Find workouts by city and distance from your current location"
          screenshotImage={findWorkouts}
        />
        <ProjectCard
          title="Find your next workout partner!"
          subTitle="Chat with people who share the same hobbies"
          screenshotImage={findWorkouts}
        />
      </div>
    </div>
  );
};

export default Workouteer;
