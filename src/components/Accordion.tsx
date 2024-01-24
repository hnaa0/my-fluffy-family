import { useCallback, useState, useRef } from "react";
import styled from "styled-components";

interface ListProps {
  question: string;
  answer: string;
}

export default function Accordion(props: ListProps) {
  const { question, answer } = props;
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [triangle, setTriangle] = useState<number>(0);

  const hanldleAccordion = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
        // containerRef.current --> useRef 초기값으로 null을 담아뒀기 때문에 에러가 뜸. null 체크를 해줘야 해결이 된다.
      } else if (parentRef.current.clientHeight > 0 && containerRef.current) {
        parentRef.current.style.height = "0";
        containerRef.current.style.borderColor = `var(--color-orange-light)`;
      } else if (containerRef.current) {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        containerRef.current.style.borderColor = `var(--color-orange-dark)`;
      }
      setIsOpen(!isOpen);
      setTriangle(triangle === 180 ? -360 : 180);
    },
    [isOpen, triangle]
  );

  return (
    <FaqContainer ref={containerRef}>
      <FaqQuestion onClick={hanldleAccordion}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-question-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
        </svg>
        {question}
        <Triangle $triangle={triangle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </Triangle>
      </FaqQuestion>
      <FaqAnswerWrapper ref={parentRef}>
        <FaqAnswer ref={childRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-exclamation-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          {answer}
        </FaqAnswer>
      </FaqAnswerWrapper>
    </FaqContainer>
  );
}

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid var(--color-orange-light);
  border-radius: 16px;
`;

const FaqQuestion = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;

  height: 32px;
  margin: 0 32px 0 8px;

  .bi-question-circle-fill {
    fill: var(--color-gray-normal);
    margin-right: 8px;
  }
`;

const Triangle = styled.div<{ $triangle: number }>`
  margin-left: auto;
  transform: rotate(${(props) => `${props.$triangle}deg`});

  .bi-caret-up-fill {
    fill: var(--color-gray-light);
  }
`;

const FaqAnswerWrapper = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  svg {
    position: absolute;
    left: 8px;
    top: 12px;
    fill: var(--color-yellow-normal);
  }
`;

const FaqAnswer = styled.div`
  white-space: pre-wrap;
  padding: 20px 48px;
`;
