import React from "react";

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Industry Ready Certificate - MERN",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840048/Screenshot_1099_m8bbkf.png",
      alt: "IRC",
    },
    {
      id: 2,
      title: "ReactJS",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840467/Screenshot_1100_tb3izq.png",
      alt: "React",
    },
    {
      id: 3,
      title: "NodeJS",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840499/Screenshot_1103_pktdia.png",
      alt: "Node",
    },
    {
      id: 4,
      title: "Vanilla JavaScript",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840532/Screenshot_1104_ocewaj.png",
      alt: "Javascript",
    },
    {
      id: 5,
      title: "Dynamic Web Application",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1736395354/Screenshot_1113_zdqxtx.png",
      alt: "Dynamic web application",
    },
    {
      id: 6,
      title: "Developer Foundations",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1736395265/Screenshot_1112_bv7wda.png",
      alt: "Developer foundations",
    },
    {
      id: 7,
      title: "Programming with Python",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840562/Screenshot_1101_w9wwmb.png",
      alt: "Programming with Python",
    },
    {
      id: 8,
      title: "SQLite",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840597/Screenshot_1102_mwwqvt.png",
      alt: "Sql database",
    },
    {
      id: 9,
      title: "Responsive Web Design",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1739202289/Screenshot_1159_g9nela.png",
      alt: "Responsive web application",
    },
    {
      id: 10,
      title: "Static Web Application",
      imageUrl:
        "https://res.cloudinary.com/dnmyyqfhs/image/upload/v1739168961/Screenshot_1156_m4mwqc.png",
      alt: "Static web application",
    },
  ];

  return (
    <div className="cert-container">
      {certificates.map((cert) => (
        <div key={cert.id} className="cert-item">
          <img
            src={cert.imageUrl}
            alt={cert.alt}
            className="cert-images"
            title={cert.title}
          />
          <p className="cert-title">{cert.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
