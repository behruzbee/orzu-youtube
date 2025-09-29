import { Header } from "../components/header";
import { VideoCard } from "../components/video-card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import c from "./styles.module.scss";


export const App = () => {
  const { t } = useTranslation();

  const videos = t("videos.cards", { returnObjects: true }) as {
    videoId: string;
    duration: string;
    title: string;
    subtitle: string;
    author: string;
  }[];

  return (
    <>
      <Header />
      <div className="container">
        <motion.h5
          className={c.videoCardsHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("videos.recent")}
        </motion.h5>

        <motion.div
          className={c.videoCards}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // плавное появление по очереди
              },
            },
          }}
        >
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <VideoCard
                videoId={video.videoId}
                duration={video.duration}
                title={video.title}
                subtitle={video.subtitle}
                authorName={video.author}
                authorAvatar="https://orzumed.uz/wp-content/uploads/2024/07/subtract.png"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
