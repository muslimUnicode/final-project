import "./AccordionItem.scss"
import { FC } from "react";
import ArrowDown from "../../assets/icon/ArrowDown.svg";
import ArrowUp from "../../assets/icon/ArrowUp.svg";

export interface PropsAccordeon {
  faq: {
    title: string;
    content: string;
  };
  onToggle: any;
  active: boolean;
}

const AccordionItem: FC<PropsAccordeon> = ({ faq, onToggle, active }) => {
  const { title, content } = faq;

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
        <button className="button" onClick={onToggle}>
            {title}
            <span className="control">
            {active ? <img src={ArrowUp} alt="" /> : <img src={ArrowDown} alt="" />}
            </span>
        </button>
        <div className={`answer_wrapper ${active ? "open" : ""}`}>
            <div className="content">{content}</div>
        </div>
    </li>
  );
};

export default AccordionItem;
