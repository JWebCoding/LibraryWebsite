package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jweb.coding.LibraryWebsite.Interfaces.GenreService;
import jweb.coding.LibraryWebsite.Models.Genre;
import jweb.coding.LibraryWebsite.Repsoitories.GenreRepository;

@Service
public class GenreServiceImpl implements GenreService{
	@Autowired GenreRepository genreRepository;
	@Override
	public void createGenre(Genre genre) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Genre> getGenres() {
		return genreRepository.findAll();
	}

}