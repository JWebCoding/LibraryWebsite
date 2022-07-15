package jweb.coding.LibraryWebsite.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import jweb.coding.LibraryWebsite.Models.FullBook;

public interface FullBookRepository extends JpaRepository<FullBook, Integer>{
	
	@Procedure("GetAllBooks")
	List<FullBook> getAllBooks();
	
	@Procedure("GetSpecificBook")
	FullBook getSpecificBook(int bookID);
	
	@Procedure("GetLastTenBooks")
	List<FullBook> getLastTen();
	
	@Procedure("SearchForBooks")
	List<FullBook> searchForBooks(String searchTerm);
	
}


