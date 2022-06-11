package jweb.coding.LibraryWebsite.Repsoitories;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import jweb.coding.LibraryWebsite.Models.Book;

public interface BookRepository extends CrudRepository<Book, Integer>{
	
	String baseQuery="select bookID,title,s.series_name,series_part,a.first_name,middle_name,last_name,CONCAT(a.first_name, IF(a.middle_name IS NOT NULL, CONCAT(\" \", a.middle_name, \" \"), \" \"), a.last_name) AS author, p.publisher_name,isbn,edition,copyright,g.genre_type,g.genre_name,format,pages,l.language_name,notes from book join language l on book.languageID = l.languageID join publisher p on book.publisherID = p.publisherID join author a on book.authorID = a.authorID join series s on book.seriesID = s.seriesID join genre g on book.genreID = g.genreID";
	
	@Query(nativeQuery=true, value= baseQuery)
	List<Book> getAllBooks();
	
	@Query(nativeQuery=true, value=baseQuery+" where bookID=:bookID")
	List<Book> findBybookID(@Param("bookID") int bookID);
	
	@Query(nativeQuery=true, value= baseQuery+" order by bookID desc limit 10;")
	List<Book> getLastTen();
	
	@Procedure("SearchForBooks")
	List<Book> searchForBooks(String searchTerm);
	
}


