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
import Button from "react-bootstrap/Button";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";
const Workouteer = () => {
  const isMobile = useCheckMobileScreen();
  console.log(isMobile);
  return (
    <div>
      <Button as="a" variant="success">
        Button as link
      </Button>
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
              className="d-block w-100"
              src={workoutDetails}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={findWorkouts}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pastWorkouts}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={chats} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default Workouteer;
