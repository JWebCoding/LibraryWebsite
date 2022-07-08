package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Interfaces.LanguageService;
import jweb.coding.LibraryWebsite.Models.Language;
import jweb.coding.LibraryWebsite.Repositories.LanguageRepository;

@Service
@Transactional
public class LanguageServiceImpl implements LanguageService{
	@Autowired LanguageRepository languageRepository;
	@Override
	public Language createLanguage(Language language) {
		return languageRepository.save(language);
	}

	@Override
	public List<Language> getLanguages() {
		return languageRepository.findAll();
	}

	@Override
	public List<Language> getSpecificLanguage(int id) {
		return languageRepository.findBylanguageID(id);
	}

}