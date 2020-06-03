import React, { useEffect, useState } from "react";
import {
  SubText,
  TextWrapper,
  IconWrapper,
  CaretTextWrapper,
  Spinner,
} from "../styles/index.styled";

import ChevronRight from "../assets/chevron-right.svg";

import {
  COMMIT_CREATE_EVENT,
  CREATE_EVENT,
  DELETE_EVENT,
  FORK_EVENT,
  GOLLUM_EVENT,
  ISSUES_EVENT,
  ISSUE_COMMENT_EVENT,
  MEMBER_EVENT,
  PUBLIC_EVENT,
  PULL_REQUEST_EVENT,
  PULL_REQUEST_REVIEW_COMMENT_EVENT,
  PUSH_EVENT,
  RELEASE_EVENT,
  SPONSORSHIP_EVENT,
  WATCH_EVENT,
} from "../constants/constants";

const renderGithubText = (x, i) => {
  let text = null;

  switch (x.type) {
    case COMMIT_CREATE_EVENT:
    case ISSUE_COMMENT_EVENT:
    case PULL_REQUEST_REVIEW_COMMENT_EVENT:
      text = x.action || "Commented";
      break;
    case WATCH_EVENT:
      text = x.action || "Carefully watched";
      break;
    case CREATE_EVENT:
      if (x?.payload?.ref_type === "branch") {
        text = "Created branch";
        break;
      }
      if (x?.payload?.ref_type === "repository") {
        text = "Created repository";
        break;
      }
      text = x.action || "Created";
      break;
    case DELETE_EVENT:
      text = x.action || "Deleted";
      break;
    case FORK_EVENT:
      text = x.action || "Forked";
      break;
    case GOLLUM_EVENT:
      text = x.action || "Published";
      break;
    case ISSUES_EVENT:
      text = x.action || "Issued";
      break;
    case MEMBER_EVENT:
      text = x.action || "Invited";
      break;
    case PUBLIC_EVENT:
      text = x.action || "Made Public";
      break;
    case PULL_REQUEST_EVENT:
      text = x.action || "Pulled";
      break;
    case PUSH_EVENT:
      text = x.action || "Pushed something to";
      break;
    case RELEASE_EVENT:
      text = x.action || "Released";
      break;
    case SPONSORSHIP_EVENT:
      text = x.action || "Sponsored";
      break;
    default:
      text = null;
  }

  const url = "https://github.com/" + x.repo.name;

  return (
    <TextWrapper key={i + x + "_key"}>
      <IconWrapper>
        <ChevronRight />
      </IconWrapper>
      <SubText>{text + " "}</SubText>
      <CaretTextWrapper href={url}>
        <SubText>{x.repo.name}</SubText>
      </CaretTextWrapper>
    </TextWrapper>
  );
};

const Activity = () => {
  const [activity, setActivity] = useState(0);
  useEffect(() => {
    fetch(`https://api.github.com/users/carrein/events`)
      .then((response) => response.json())
      .then((resultData) => {
        setActivity(resultData.slice(0, 4));
      });
  }, []);

  if (!activity) {
    return <Spinner />;
  }

  return <>{activity && activity.map((x, i) => renderGithubText(x, i))}</>;
};

export default Activity;
