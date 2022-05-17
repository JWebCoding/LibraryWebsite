package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Language;

public interface LanguageRepository extends CrudRepository<Language, Integer>{
	List<Language> findAll();
	
}
