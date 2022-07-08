package jweb.coding.LibraryWebsite.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import jweb.coding.LibraryWebsite.Models.FullBook;

public interface FullBookRepository extends JpaRepository<FullBook, Integer>{
	
	String baseQuery="select bookID,title,s.series_name,series_part,first_name,middle_name,last_name,p.publisher_name, \r\n"
			+ "    CONCAT(a.first_name, IF(a.middle_name IS NOT NULL, CONCAT(\" \", a.middle_name, \" \"), \" \"), a.last_name) AS author,\r\n"
			+ "    isbn,edition,copyright,g.genre_type,g.genre_name,format,pages, l.languageID, l.language_name, book.authorID, book.publisherID, book.seriesID, book.genreID, notes \r\n"
			+ "    from book join language l on book.languageID = l.languageID join publisher p on book.publisherID = p.publisherID join author a on book.authorID = a.authorID \r\n"
			+ "    join series s on book.seriesID = s.seriesID join genre g on book.genreID = g.genreID";
	
	
	@Procedure("GetAllBooks")
	List<FullBook> getAllBooks();
	
	@Query(nativeQuery=true, value=baseQuery+" where bookID=:bookID")
	Optional<FullBook> findBybookID(@Param("bookID") int bookID);
	
	@Query(nativeQuery=true, value= baseQuery+" order by bookID desc limit 10;")
	List<FullBook> getLastTen();
	
	@Procedure("SearchForBooks")
	List<FullBook> searchForBooks(String searchTerm);
	
}


