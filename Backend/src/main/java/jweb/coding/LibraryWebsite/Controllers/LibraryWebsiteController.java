package jweb.coding.LibraryWebsite.Controllers;
import jweb.coding.LibraryWebsite.Models.Author;
import jweb.coding.LibraryWebsite.Models.Book;
import jweb.coding.LibraryWebsite.Models.Genre;
import jweb.coding.LibraryWebsite.Models.Language;
import jweb.coding.LibraryWebsite.Repsoitories.AuthorRepository;
import jweb.coding.LibraryWebsite.Repsoitories.BookRepository;
import jweb.coding.LibraryWebsite.Repsoitories.GenreRepository;
import jweb.coding.LibraryWebsite.Repsoitories.LanguageRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


//@CrossOrigin(origins= "http://localhost:8081")
@Controller
//@RequestMapping(path="/books")
public class LibraryWebsiteController {
	@Autowired BookRepository bookRepository;
	@Autowired AuthorRepository authorRepository;
	@Autowired GenreRepository genreRepository;
	@Autowired LanguageRepository lrepo;
	
	@GetMapping(path="/books")
	  public @ResponseBody Iterable<Book> getAllBooks() {
	    // This returns a JSON or XML with the users
	    return bookRepository.findAll();
	  }
	
	@GetMapping(path="/books/{id}")
	public @ResponseBody List<Book> getSpecificBook(@PathVariable int id) {
		return bookRepository.findBybookID(id);
	}
	
	@GetMapping(path="/authors")
	  public @ResponseBody Iterable<Author> getAllAuthors() {
	    // This returns a JSON or XML with the users
	    return authorRepository.findAll();
	  }
	
	@GetMapping(path="/authors/{id}")
	public @ResponseBody List<Author> getSpecificAuthor(@PathVariable int id) {
		return authorRepository.findByauthorID(id);
	}
	
	@PostMapping(path="/languages")
	public void saveNewLanguage() throws Exception{
		Language newLanguage = new Language();
		newLanguage.setLanguage_name("Test");
		newLanguage.setLanguage_suffix("TS");
		lrepo.save(newLanguage);
		System.out.println("New Language Saved");
		
	}
}