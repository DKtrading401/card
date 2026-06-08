import { useParams } from "react-router-dom";
import { cards } from "../data/cards";

import {
  Phone,
  Smartphone,
  Mail,
  Globe,
  MapPin,
  Linkedin,
  MessageCircle,
  MessagesSquare
} from "lucide-react";

export default function BusinessCard() {

  const { slug } = useParams();

  const card = cards[slug];

  if (!card) {
    return (
      <div style={{ padding: "50px" }}>
        <h1>Card Not Found</h1>
      </div>
    );
  }

  return (

    <div className="card">

      <div className="side-bar">

        <div className="side-logo">
          <img
            src="/assets/logo-mark.svg"
            alt="DK Symbol"
          />
        </div>

      </div>

      <div className="content">

        <div className="brand">

          <div className="brand-logo">
            <img
              src="/assets/logo.svg"
              alt="DK Holding GmbH"
            />
          </div>

          <div className="brand-divider"></div>

          <div className="company">
            {card.company}
          </div>

        </div>

        {
          card.profile && (

            <div className="profile-photo">

              <img
                src={card.profile}
                alt={card.name}
              />

            </div>

          )
        }

        <h1 className="name">
          {card.name}
        </h1>

        <div className="title">
          {card.title}
        </div>

        <div className="title-line"></div>

        {/* Office */}

        <div className="section">

          <div className="contact-item">

            <div className="contact-head">

              <Phone
                className="contact-icon"
                strokeWidth={2.2}
              />

              <span className="divider"></span>

              <span className="contact-code">
                Office
              </span>

            </div>

            <div className="contact-value">
              <a href={`tel:${card.officeLink}`}>
                {card.office}
              </a>
            </div>

          </div>

          <div className="contact-item">

            <div className="contact-head">

              <Smartphone
                className="contact-icon"
                strokeWidth={2.2}
              />

              <span className="divider"></span>

              <span className="contact-code">
                Mobile
              </span>

            </div>

            <div className="contact-value">
              <a href={`tel:${card.mobileLink}`}>
                {card.mobile}
              </a>
            </div>

          </div>

        </div>

        {/* Email */}

        <div className="section">

          <div className="contact-item">

            <div className="contact-head">

              <Mail
                className="contact-icon"
                strokeWidth={2.2}
              />

              <span className="divider"></span>

              <span className="contact-code">
                Email
              </span>

            </div>

            <div className="contact-value">
              <a href={`mailto:${card.email}`}>
                {card.email}
              </a>
            </div>

          </div>

          <div className="contact-item">

            <div className="contact-head">

              <Globe
                className="contact-icon"
                strokeWidth={2.2}
              />

              <span className="divider"></span>

              <span className="contact-code">
                Website
              </span>

            </div>

            <div className="contact-value">
              <a
                href={card.website}
                target="_blank"
                rel="noreferrer"
              >
                {card.websiteText}
              </a>
            </div>

          </div>

        </div>

        {/* Address */}

        <div className="section">

          <div className="contact-item">

            <div className="contact-head">

              <MapPin
                className="contact-icon"
                strokeWidth={2.2}
              />

              <span className="divider"></span>

              <span className="contact-code">
                Address
              </span>

            </div>

            <div className="contact-value">

              <a
                href={card.map}
                target="_blank"
                rel="noreferrer"
              >
                {card.address[0]}
                <br />
                {card.address[1]}
              </a>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="footer">

          <div className="footer-top">

            <div className="qr">
              <img
                src={card.qr}
                alt="QR Code"
              />
            </div>

            <div className="connect">

              <h2>
                Connect with me
              </h2>

              <div className="social-links">

                {

                  card.linkedin && (

                    <a
                      href={card.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin size={22} />
                    </a>

                  )

                }

                {

                  card.whatsapp && (

                    <a
                      href={card.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={22} />
                    </a>

                  )

                }

                {

                  card.kakao && (

                    <a
                      href={card.kakao}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessagesSquare size={22} />
                    </a>

                  )

                }

              </div>

              <div className="save-wrap">

                <a
                  className="btn"
                  href={card.vcf}
                  download
                >
                  Save Contact
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}