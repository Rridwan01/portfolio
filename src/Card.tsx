import type { JSX } from "react";
import "./index.css";
import styled from "styled-components";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
}

const Card = ({
  title,
  description,
  image,
  tech,
  demoLink,
  githubLink,
}: CardProps): JSX.Element => {
  return (
    <StyledWrapper>
      <div className="card">
        {image && (
          <img
            src={image}
            alt={title}
            className="card__image object-cover w-full h-full"
          />
        )}
        <div className="card__content flex flex-col flex-grow">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <div className="card__tech flex flex-wrap gap-2 mt-3">
            {tech.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-sm text-[#9ca3af] bg-white/10 rounded"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="card__links flex gap-4 mt-4">
            <a
              href={demoLink}
              className="action transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href={githubLink}
              className="action transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    max-width: 450px;
    height: 300px;
    background-color: #f2f2f2;
    border-radius: 10px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: rgba(17, 24, 39, 1);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: rgba(156, 163, 175, 1);
    line-height: 1.4;
  }

  .action {
    border: none;
    outline: none;
    display: inline-block;
    border-radius: 0.25rem;
    background-color: rgba(167, 139, 250, 1);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: rgba(17, 24, 39, 1);
  }

  .action:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

export default Card;
