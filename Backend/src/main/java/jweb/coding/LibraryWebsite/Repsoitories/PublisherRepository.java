package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Publisher;

public interface PublisherRepository extends CrudRepository<Publisher, Integer>{
	List<Publisher> findAll();

}