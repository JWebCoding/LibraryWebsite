package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Book;
import jweb.coding.LibraryWebsite.Models.Genre;

public interface BookRepository extends CrudRepository<Book, Integer>{
	List<Book> findAll();
	
	List<Book> findBybookID(int bookID);
	
}


