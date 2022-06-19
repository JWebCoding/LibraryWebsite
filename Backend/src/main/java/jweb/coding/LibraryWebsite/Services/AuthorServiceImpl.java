package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jweb.coding.LibraryWebsite.Interfaces.AuthorService;
import jweb.coding.LibraryWebsite.Models.Author;
import jweb.coding.LibraryWebsite.Repsoitories.AuthorRepository;

@Service
public class AuthorServiceImpl implements AuthorService{
	@Autowired AuthorRepository authorRepository;
	@Override
	public void createAuthor(Author author) {
		// TODO Auto-generated method stub
		
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
