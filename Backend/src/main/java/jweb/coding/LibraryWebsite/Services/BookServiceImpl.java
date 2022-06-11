package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import jweb.coding.LibraryWebsite.Exceptions.BookNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.BooksNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.NoDataFoundException;
import jweb.coding.LibraryWebsite.Interfaces.BookService;
import jweb.coding.LibraryWebsite.Models.Book;
import jweb.coding.LibraryWebsite.Repsoitories.BookRepository;

@Service
public class BookServiceImpl implements BookService{
	@Autowired BookRepository bookRepository;
	@Override
	public void createBook(Book book) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateBook(int id, Book book) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteBook(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Book> getBooks() {
		return bookRepository.getAllBooks();
	}

	@Override
	public List<Book> getTenBooks() {
		return bookRepository.getLastTen();
	}

	@Override
	public List<Book> getSpecificBook(int id) {
		return bookRepository.findBybookID(id);
//				.orElseThrow(() -> new BookNotFoundException(id));
	}

	@Override
	public List<Book> searchForBook(String searchTerm) {
		return bookRepository.searchForBooks(searchTerm);
	}
	
}