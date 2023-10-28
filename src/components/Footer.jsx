import { Link } from "react-router-dom";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default () => {
  return (
    <footer className="footer-content">
      <div>
        <Link to="/" className="flex-1">
          <p className="text-4xl text-primary mb-5">
            <b>HacktivNews</b>
          </p>
        </Link>
        <p>Jelajahi berita terupdate dengan kami</p>
      </div>
      <div>
        <span className="text-primary font-bold">Partner</span>
        <a
          className="link link-hover"
          href="https://www.hacktiv8.com/"
          target="_blank"
        >
          Hacktiv8
        </a>
        <a
          className="link link-hover"
          href="https://kampusmerdeka.kemdikbud.go.id/"
          target="_blank"
        >
          Kampus Merdeka
        </a>
      </div>

      <div>
        <span className="text-primary font-bold">Contact Us</span>
        <Contact
          name="Rezky Putra Kurniawan"
          linkIG=""
        />
        <Contact
          name="Lastri Rehalita Panjaitan"
          linkIG=""
        />
        <Contact
          name="Ikhdan Magfuron"
          linkIG=""
        />
        <Contact 
          name="Ikhmal Bayu Pamungkas"
          linkIG=""
        />
      </div>
    </footer>
  );
};

//* Component local

function Contact({ name, linkIG }) {
  return (
    <div className="flex justify-between w-56 align-middle">
      <p>{name}</p>
      <div className="flex">
        <a
          href={linkIG}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          <AiOutlineInstagram className="ml-3" size={20} />
        </a>
      </div>
    </div>
  );
}
