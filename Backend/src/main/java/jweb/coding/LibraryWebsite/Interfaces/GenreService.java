package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Genre;

public interface GenreService {
	public abstract void createGenre(Genre genre);
	public abstract List<Genre> getGenres();
}
