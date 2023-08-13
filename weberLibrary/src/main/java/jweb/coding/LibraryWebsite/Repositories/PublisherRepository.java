package jweb.coding.LibraryWebsite.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import jweb.coding.LibraryWebsite.Models.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Integer>{
	List<Publisher> findAll();

	List<Publisher> findByPublisherID(int PublisherID);
}