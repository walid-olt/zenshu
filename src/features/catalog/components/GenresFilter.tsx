import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useSafeParams from "../hooks/useSafeParams";
import { ANIME_GENRES } from "@/lib/constants/";

function GenresFilter() {
  const [params, setParams] = useSafeParams();

  const selectedGenres = new Set((params.genres ?? "").split(",").filter(Boolean));

  const toggleGenre = (genreId: number, checked: boolean) => {
    const id = String(genreId);

    setParams((prev) => {
      const nextGenres = new Set(
        (prev.genres ?? "").split(",").filter(Boolean),
      );

      if (checked) {
        nextGenres.add(id);
      } else {
        nextGenres.delete(id);
      }

      const genres = Array.from(nextGenres).join(",");

      return { genres: genres || undefined };
    });
  };

  return (
    <div className="grid grid-cols-2 overflow-auto">
      {ANIME_GENRES.map((genre) => {
        const checkboxId = `genre-${genre.mal_id}`;
        return (
          <div key={genre.mal_id} className="my-2 flex items-center gap-x-4">
            <Checkbox
              id={checkboxId}
              name={checkboxId}
              checked={selectedGenres.has(String(genre.mal_id))}
              onCheckedChange={(checked) =>
                toggleGenre(genre.mal_id, checked === true)
              }
            />
            <Label htmlFor={checkboxId}>{genre.name}</Label>
          </div>
        );
      })}
    </div>
  );
}

export default GenresFilter;
