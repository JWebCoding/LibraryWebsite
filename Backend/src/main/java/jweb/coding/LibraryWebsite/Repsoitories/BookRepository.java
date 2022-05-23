package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.mysql.cj.Session;

import jweb.coding.LibraryWebsite.Models.Book;

public interface BookRepository extends CrudRepository<Book, Integer>{
	List<Book> findAll();
	
	List<Book> findBybookID(int bookID);
	
	@Query(nativeQuery=true, value= "Select * from library.Book b where genreID = 8 order by b.bookID Desc Limit 0,10")
	List<Book> findLastTen();
	
}


