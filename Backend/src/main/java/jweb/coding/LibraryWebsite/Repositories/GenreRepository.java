package jweb.coding.LibraryWebsite.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import jweb.coding.LibraryWebsite.Models.Genre;

public interface GenreRepository extends JpaRepository<Genre, Integer>{
	List<Genre> findAll();
	
	List<Genre> findBygenreID(int genreID);
}
