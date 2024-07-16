import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import University from "../../models/University";
import "./DetailsPage.css";

const DetailsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [university, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    // Fetch university details from local storage based on the provided name
    const universitiesData = localStorage.getItem("universities");
    if (universitiesData) {
      const universities: University[] = JSON.parse(universitiesData);
      const foundUniversity = universities.find((uni) => uni.name === name);
      if (foundUniversity) {
        setUniversity(foundUniversity);
      }
    }
  }, [name]);

  return university ? (
    <div className="container details-container">
      <div className="details-card">
        <h2 className="details-title">{name}</h2>
        <p className="details-info">
          <strong>Name:</strong> {university.name}
        </p>
        <p className="details-info">
          <strong>Country:</strong> {university.country}
        </p>
        <p className="details-info">
          <strong>Domains:</strong>{" "}
          {university.domains && university?.domains.length > 0
            ? university?.domains[0]
            : ""}
        </p>
        <p className="details-info">
          <strong>Web Pages:</strong>{" "}
          {university.web_pages && university?.web_pages.length > 0 ? (
            <a
              className="details-link"
              href={university.web_pages[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {university.web_pages[0]}
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  ) : (
    <div>University not found</div>
  );
};

export default DetailsPage;