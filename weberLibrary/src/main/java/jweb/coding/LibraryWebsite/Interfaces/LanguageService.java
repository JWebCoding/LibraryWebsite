package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Language;

public interface LanguageService {
	public abstract Language createLanguage(Language language);
	public abstract List<Language> getSpecificLanguage(int id);
	public abstract List<Language> getLanguages();
}
