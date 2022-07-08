package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

	@Override
	public List<Genre> getGenres() {
		return genreRepository.findAll();
	}

	@Override
	public List<Genre> getSpecificGenre(int id) {
		return genreRepository.findBygenreID(id);
	}

}