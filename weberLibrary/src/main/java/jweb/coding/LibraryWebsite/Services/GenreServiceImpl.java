package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.GenreNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.GenresNotFoundException;
import jweb.coding.LibraryWebsite.Interfaces.GenreService;
import jweb.coding.LibraryWebsite.Models.Genre;
import jweb.coding.LibraryWebsite.Repositories.GenreRepository;

@Service
@Transactional
public class GenreServiceImpl implements GenreService{
	@Autowired GenreRepository genreRepository;
	@Override
	public Genre createGenre(Genre genre) {
		return genreRepository.save(genre);
	}

	@SuppressWarnings("finally")
	@Override
	public List<Genre> getGenres() {
		
		List<Genre> genreList=null;
		try {
			genreList= genreRepository.findAll();
		} catch (Exception e) {
			printErrorMessage("getGenres",e);
		} finally {
			if(genreList.isEmpty()) {
				throw new GenresNotFoundException();
			} else {
				return genreList;
			}
		}
	}

	@SuppressWarnings("finally")
	@Override
	public List<Genre> getSpecificGenre(int id) {
		List<Genre> genreList=null;
		try {
			genreList= genreRepository.findBygenreID(id);
		} catch (Exception e) {
			printErrorMessage("getSpecificGenre",e);
		} finally {
			if(genreList.isEmpty()) {
				throw new GenreNotFoundException(id);
			} else {
				return genreList;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}

}