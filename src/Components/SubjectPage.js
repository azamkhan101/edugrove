import React from "react";
import subjectData from "../Content/subjects.json";
import CategoryHeader from "./CategoryHeader";
import BooksTile from "./BooksTile";
import WebsiteTile from "./WebsiteTile";
import VideoTile from "./VideoTile";

function SubjectPage(props) {
  const id = props.match.params.id;

  return (
    <div className='subject-page'>
      <h1 className='subject-title'>
        <i class='fas fa-book-reader'></i> {subjectData.subjects[id - 1].name}
      </h1>
      <CategoryHeader category='Books' />
      {subjectData.subjects[id - 1].books.map((book) => (
        <BooksTile name={book.name} link={book.link} />
      ))}

      <CategoryHeader category='Videos' />
      {subjectData.subjects[id - 1].videos.map((video) => (
        <VideoTile name={video.name} link={video.link} />
      ))}
      <CategoryHeader category='Websites' />
      {subjectData.subjects[id - 1].websites.map((website) => (
        <WebsiteTile name={website.name} link={website.link} />
      ))}
    </div>
  );
}

export default SubjectPage;
