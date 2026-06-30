import type { Anime } from "@tutkli/jikan-ts";
import { motion } from "motion/react";
import { Link } from "react-router";
import { StarIcon } from "@phosphor-icons/react";

type Props = {
  anime: Anime;
  index: number;
};

export function AnimeCardCompact({ anime, index }: Props) {
  const { title, score, genres, images, mal_id } = anime;
  const genre = genres?.[0]?.name;
  const imageUrl = images?.webp?.image_url ?? images?.jpg?.image_url;

  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
    >
      <Link to={`/anime/${mal_id}`} className="block group">
        <div className="rounded-lg overflow-hidden bg-card border border-border">
          <div className="aspect-3/4 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="p-2.5">
            <h3 className="text-sm font-semibold truncate">{title}</h3>
            <div className="flex items-center justify-between mt-1.5">
              {genre && (
                <span className="text-xs text-muted-foreground truncate max-w-[60%]">
                  {genre}
                </span>
              )}
              {score != null && (
                <span className="flex items-center gap-0.5 text-xs font-medium shrink-0">
                  <StarIcon
                    size={12}
                    weight="fill"
                    className="text-yellow-500"
                  />
                  {score}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
