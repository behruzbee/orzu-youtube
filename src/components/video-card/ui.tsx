import YouTube from "react-youtube";
import c from "./styles.module.scss";

type Props = {
  videoId: string;
  duration: string;
  title: string;
  subtitle: string;
  authorName: string;
  authorAvatar: string;
  onEnd?: () => void;
};

export const VideoCard = ({
  videoId,
  duration,
  title,
  subtitle,
  authorName,
  authorAvatar,
  onEnd,
}: Props) => {
  const opts = {
    width: "100%",
    height: "220",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <div className={c.card}>
      <div className={c.thumbnail}>
        <YouTube
          videoId={videoId}
          opts={opts}
          onEnd={onEnd ? () => onEnd() : undefined}
        />
        <span className={c.duration}>{duration}</span>
      </div>

      <div className={c.content}>
        <h3 className={c.title}>{title}</h3>
        <p className={c.subtitle}>{subtitle}</p>

        <div className={c.author}>
          <img src={authorAvatar} alt={authorName} className={c.avatar} />
          <span className={c.name}>{authorName}</span>
        </div>
      </div>
    </div>
  );
};
