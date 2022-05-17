package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Author;

public interface AuthorRepository extends CrudRepository<Author, Integer>{
	List<Author> findAll();
	
	List<Author> findByauthorID(int authorID);
}
