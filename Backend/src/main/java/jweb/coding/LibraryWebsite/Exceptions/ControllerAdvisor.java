package jweb.coding.LibraryWebsite.Exceptions;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import jweb.coding.LibraryWebsite.Models.Book;

@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(value = {AuthorNotFoundException.class})
	public ResponseEntity<Object> handleauthorNotFoundExcpetion(AuthorNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","Author not Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {BookNotFoundException.class})
	public ResponseEntity<Object> handleBookNotFoundExcpetion(BookNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","Book not Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {BooksNotFoundException.class})
	public ResponseEntity<Object> handleBooksNotFoundExcpetion(BooksNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","No Books Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(value = {GenreNotFoundException.class})
	public ResponseEntity<Object> handleGenreNotFoundExcpetion(GenreNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","Genre not Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {LanguageNotFoundException.class})
	public ResponseEntity<Object> handleLanguageNotFoundExcpetion(LanguageNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","Language not Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {PublisherNotFoundException.class})
	public ResponseEntity<Object> handlePublisherNotFoundExcpetion(PublisherNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","Publisher not Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {SeriesNotFoundException.class})
	public ResponseEntity<Object> handleSeriesNotFoundExcpetion(SeriesNotFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","Series not Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {NoDataFoundException.class})
	public ResponseEntity<Object> NoDataFoundException(NoDataFoundException ex, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("message","No data Found");
		
		return new ResponseEntity<>(errorMap, HttpStatus.NOT_FOUND);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid( MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> errorMap = new LinkedHashMap<>();
		errorMap.put("time",LocalDateTime.now());
		errorMap.put("status", status.value());
		
		List<String> errors=ex.getBindingResult().getFieldErrors().stream().map(x -> x.getDefaultMessage()).collect(Collectors.toList());
		errorMap.put("errors",errors);
		
		return new ResponseEntity<>(errorMap,HttpStatus.BAD_REQUEST);
	}
}