package jweb.coding.LibraryWebsite.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import jweb.coding.LibraryWebsite.Models.Language;

public interface LanguageRepository extends JpaRepository<Language, Integer>{
	List<Language> findAll();
	
	List<Language> findBylanguageID(int LangaugeID);
}
