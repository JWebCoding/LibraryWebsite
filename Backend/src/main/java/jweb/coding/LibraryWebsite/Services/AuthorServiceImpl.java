package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.BookNotFoundException;
import jweb.coding.LibraryWebsite.Interfaces.AuthorService;
import jweb.coding.LibraryWebsite.Models.Author;
import jweb.coding.LibraryWebsite.Models.Book;
import jweb.coding.LibraryWebsite.Repositories.AuthorRepository;

@Service
@Transactional
public class AuthorServiceImpl implements AuthorService{
	@Autowired AuthorRepository authorRepository;
	@Override
	public Author createAuthor(Author author) {
		return authorRepository.save(author);
	}

	@Override
	public List<Author> getAuthors() {
		return authorRepository.findAll();
	}

	@Override
	public List<Author> getSpecificAuthor(int id) {
		return authorRepository.findByauthorID(id);
		
	}
}
