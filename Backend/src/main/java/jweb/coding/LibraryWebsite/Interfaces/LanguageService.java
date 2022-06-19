package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Language;

public interface LanguageService {
	public abstract void createLanguage(Language language);
	public abstract List<Language> getLanguages();
}
