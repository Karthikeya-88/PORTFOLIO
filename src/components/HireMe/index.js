import { MdEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";

const HireMe = () => {
  return (
    <div className="button-icons-container mt-4">
      <button type="button" className="button-icons">
        <a className="anchor-el" href="mailto:dkarthikeya888@gmail.com">
          <MdEmail />
        </a>
      </button>
      <button type="button" className="button-icons">
        <a
          className="anchor-el"
          href="http://www.linkedin.com/in/karthikeya-doosa-210a42244"
        >
          <BiLogoLinkedinSquare />
        </a>
      </button>
      <button type="button" className="button-icons">
        <a className="anchor-el" href="https://github.com/Karthikeya-88">
          <VscGithub />
        </a>
      </button>
    </div>
  );
};

export default HireMe;
