package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import jweb.coding.LibraryWebsite.Exceptions.BookNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.BooksNotFoundException;
import jweb.coding.LibraryWebsite.Interfaces.FullBookService;
import jweb.coding.LibraryWebsite.Models.FullBook;
import jweb.coding.LibraryWebsite.Repositories.FullBookRepository;

@Service
public class FullBookServiceImpl implements FullBookService{
	@Autowired FullBookRepository fullBookRepository;
	
	@SuppressWarnings("finally")
	@Override
	public List<FullBook> getBooks() {
		List<FullBook> bookList=null;
		try {
			bookList= fullBookRepository.getAllBooks();
		} catch (Exception e) {
			printErrorMessage("getBooks",e);
		} finally {
			if(bookList.isEmpty()) {
				throw new BooksNotFoundException();
			} else {
				return bookList;
			}
		}
	}
	
	@SuppressWarnings("finally")
	@Override
	public List<FullBook> getTwentyBooks() {

		List<FullBook> bookList=null;
		try {
			bookList=fullBookRepository.getLastTwenty();
		} catch(Exception e) {
			printErrorMessage("getLastTwenty",e);
		} finally {
			if(bookList.isEmpty()) {
				throw new BooksNotFoundException();
			} else {
				return bookList;
			}
		}
	}
	
	@SuppressWarnings("finally")
	@Override
	public FullBook getSpecificBook(int id) {
		FullBook specificBook = null;
		try {
			specificBook=fullBookRepository.getSpecificBook(id);
		} catch(Exception e) {
			
		} finally {
			if(specificBook==null) {
				throw new BookNotFoundException(id);
			} else {
				return specificBook;
			}
		}		
	}

	@SuppressWarnings("finally")
	@Override
	public List<FullBook> searchForBook(String searchTerm) {

		List<FullBook> bookList=null;
		try {
			bookList=fullBookRepository.searchForBooks(searchTerm);
		} catch(Exception e) {
			printErrorMessage("searchForBooks",e);
		} finally {
			if(bookList.isEmpty()) {
				throw new BooksNotFoundException();
			} else {
				return bookList;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}
	
}