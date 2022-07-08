package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;
import java.util.Optional;

import jweb.coding.LibraryWebsite.Models.Genre;

public interface GenreService {
	public abstract Genre createGenre(Genre genre);
	public abstract List<Genre> getSpecificGenre(int id);
	public abstract List<Genre> getGenres();
}
