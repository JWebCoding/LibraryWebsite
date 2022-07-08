package jweb.coding.LibraryWebsite.Repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer>{
	List<Author> findAll();
	
	List<Author> findByauthorID(int authorID);
}
