package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jweb.coding.LibraryWebsite.Interfaces.LanguageService;
import jweb.coding.LibraryWebsite.Models.Language;
import jweb.coding.LibraryWebsite.Repsoitories.LanguageRepository;

@Service
public class LanguageServiceImpl implements LanguageService{
	@Autowired LanguageRepository languageRepository;
	@Override
	public void createLanguage(Language language) {
		// TODO Auto-generated method stub
		
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