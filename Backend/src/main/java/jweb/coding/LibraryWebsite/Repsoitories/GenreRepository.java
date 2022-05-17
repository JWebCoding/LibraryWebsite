package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Genre;

public interface GenreRepository extends CrudRepository<Genre, Integer>{
	List<Genre> findAll();
	
	List<Genre> findBygenreID(int genreID);
}
