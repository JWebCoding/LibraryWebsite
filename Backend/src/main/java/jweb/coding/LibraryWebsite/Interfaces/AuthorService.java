package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Author;

public interface AuthorService {
	public abstract Author createAuthor(Author author);
	public abstract List<Author> getSpecificAuthor(int id);
	public abstract List<Author> getAuthors();
}
