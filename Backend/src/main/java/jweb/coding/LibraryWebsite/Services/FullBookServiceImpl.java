package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;


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

	@Override
	public void updateBook(int id, FullBook book) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteBook(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<FullBook> getBooks() {
		
		List<FullBook> bookList= fullBookRepository.getAllBooks();
		
		if(bookList.isEmpty()) {
			throw new BooksNotFoundException();
		} else {
			return bookList;
		}
	}
	@SuppressWarnings("finally")
	@Override
	public List<FullBook> getTenBooks() {

		List<FullBook> bookList= fullBookRepository.getLastTen();
		try {
			bookList=fullBookRepository.getLastTen();
		} catch(Exception e) {
			printErrorMessage("getLastTen",e);
		} finally {
			if(bookList.isEmpty()) {
				throw new BooksNotFoundException();
			} else {
				return bookList;
			}
		}
	}

	@Override
	public Optional<FullBook> getSpecificBook(int id) {
		return Optional.of(fullBookRepository.findBybookID(id).orElseThrow(() -> new BookNotFoundException(id)));
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
	
	public boolean checkForEmptyList(List<FullBook> bookList) {
		if(bookList.isEmpty()) {
			throw new BooksNotFoundException();
		} else {
			return true;
		}
	}
	
}