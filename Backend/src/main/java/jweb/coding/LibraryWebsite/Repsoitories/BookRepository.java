package jweb.coding.LibraryWebsite.Repsoitories;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import jweb.coding.LibraryWebsite.Models.Book;

public interface BookRepository extends CrudRepository<Book, Integer>{
	
	String baseQuery="select bookID,title,s.series_name,series_part,a.first_name,middle_name,last_name,p.publisher_name,isbn,edition,copyright,g.genre_type,g.genre_name,format,pages,l.language_name,notes from book join language l on book.languageID = l.languageID join publisher p on book.publisherID = p.publisherID join author a on book.authorID = a.authorID join series s on book.seriesID = s.seriesID join genre g on book.genreID = g.genreID";
//	@Procedure("Get_All_Books")
	@Query(nativeQuery=true, value= baseQuery)
	List<Book> getAllBooks();
	
	List<Book> findBybookID(int bookID);
	
	@Query(nativeQuery=true, value= baseQuery+" order by bookID desc limit 10;")
	List<Book> getLastTen();
	
	
	
}


