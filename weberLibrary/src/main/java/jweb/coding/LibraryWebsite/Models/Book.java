package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
public class Book {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int bookID;
	
	@NotEmpty
	String title;
	String isbn;
	
	Integer series_part;
	Integer edition;
	int format;
	int pages;
	int authorID;
	int publisherID;
	int seriesID;
	int genreID;
	int languageID;
	int copyright;
	
	public Book() {
		
	}

	public int getBookID() {
		return bookID;
	}
	public String getTitle() {
		return title;
	}
	public String getIsbn() {
		return isbn;
	}
	public Integer getSeries_part() {
		return series_part;
	}
	public Integer getEdition() {
		return edition;
	}
	public int getFormat() {
		return format;
	}
	public int getPages() {
		return pages;
	}
	public int getAuthorID() {
		return authorID;
	}
	public int getPublisherID() {
		return publisherID;
	}
	public int getSeriesID() {
		return seriesID;
	}
	public int getGenreID() {
		return genreID;
	}
	public int getLanguageID() {
		return languageID;
	}
	public int getCopyright() {
		return copyright;
	}
}
