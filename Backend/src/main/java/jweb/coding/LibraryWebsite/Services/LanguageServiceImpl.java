package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.LanguageNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.LanguagesNotFoundException;
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

	@SuppressWarnings("finally")
	@Override
	public List<Language> getLanguages() {
		
		List<Language> languageList=null;
		try {
			languageList=languageRepository.findAll();
		} catch (Exception e) {
			printErrorMessage("getLangauges",e);
		} finally {
			if(languageList.isEmpty()) {
				throw new LanguagesNotFoundException();
			} else {
				return languageList;
			}
		}
	}

	@SuppressWarnings("finally")
	@Override
	public List<Language> getSpecificLanguage(int id) {
		List<Language> languageList=null;
		try {
			languageList=languageRepository.findBylanguageID(id);
		} catch (Exception e) {
			printErrorMessage("getSpecificLanguage",e);
		} finally {
			if(languageList.isEmpty()) {
				throw new LanguageNotFoundException(id);
			} else {
				return languageList;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}
}