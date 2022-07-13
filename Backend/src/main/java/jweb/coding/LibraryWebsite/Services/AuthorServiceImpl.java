package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.AuthorNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.AuthorsNotFoundException;
import jweb.coding.LibraryWebsite.Interfaces.AuthorService;
import jweb.coding.LibraryWebsite.Models.Author;
import jweb.coding.LibraryWebsite.Repositories.AuthorRepository;

@Service
@Transactional
public class AuthorServiceImpl implements AuthorService{
	
	@Autowired AuthorRepository authorRepository;
	
	@Override
	public Author createAuthor(Author author) {

		return authorRepository.save(author);
	}

	@SuppressWarnings("finally")
	@Override
	public List<Author> getAuthors() {
		List<Author> authorList=null;
		try {
			authorList = authorRepository.findAll();
		} catch (Exception e) {
			printErrorMessage("getAuthors",e);
		} finally {
			if(authorList.isEmpty()) {
				throw new AuthorsNotFoundException();
			} else {
				return authorList;
			}
		}

	}

	@SuppressWarnings("finally")
	@Override
	public List<Author> getSpecificAuthor(int id) {
		List<Author> authorList=null;
		try {
			authorList=authorRepository.findByauthorID(id);
		} catch (Exception e) {
			printErrorMessage("getSpecificAuthor",e);
		} finally {
			if(authorList.isEmpty()) {
				throw new AuthorNotFoundException(id);
			} else {
				return authorList;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}
}
