package jweb.coding.LibraryWebsite.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Interfaces.BookService;
import jweb.coding.LibraryWebsite.Models.Book;
import jweb.coding.LibraryWebsite.Repositories.BookRepository;

@Service
@Transactional
public class BookServiceImpl implements BookService{
	
	@Autowired BookRepository bookRepository;
	
	@Override
	public Book createBook(Book book) {
//		Book savedBook=bookRepository.save(book);
		return bookRepository.save(book);
	}
}
	