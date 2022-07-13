package jweb.coding.LibraryWebsite.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import jweb.coding.LibraryWebsite.Models.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{
	
}
