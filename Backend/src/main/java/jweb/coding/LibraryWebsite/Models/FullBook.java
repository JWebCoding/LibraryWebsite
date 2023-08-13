package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
public class FullBook {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotEmpty
	int bookID;
	
	@NotEmpty
	String title;
	String isbn;
	
	Integer series_part;
	Integer edition;
	int format;
	int pages;
	int copyright;

	String series_name;
	String author_name;
	String publisher_name;
	String genre_name;
	
	int genre_type;

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

	public int getCopyright() {
		return copyright;
	}

	public String getSeries_name() {
		return series_name;
	}

	public String getAuthor_name() {
		return author_name;
	}

	public String getPublisher_name() {
		return publisher_name;
	}

	public String getGenre_name() {
		return genre_name;
	}

	public int getGenre_type() {
		return genre_type;
	}

}
