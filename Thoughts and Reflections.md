There are six seperate tables

All combine to create a larger entity call "Book"
The parts of "Book" are as follows.
-bookID
-title
-series_name
-series_part
-firstName
-lastName
-publisher_name
-isbn
-edition
-copyright
-genre_name
-format
-pages
-language_name
-notes

~~The great question of the day is whether or not to implement a level of functionality on the website that is on par with the desktop application. 
If so then it may be better to create several smaller entitys with a complete set of all of the information from each table to allow for the entry of new 
books and then find a way to stitch them together to create the larger "Book" entity that will be needed. If the website has only basic functionality then 
only the larger "Book" entity will be needed.~~

~~After reflection, I belive using both options may be the better course. Use the larger entity/repository for filling in the book table that will be usable 
even when not logged in and then allow for a website that can be used to add new books to the database.~~

~~Maybe an entity for each of the tables and the smaller (less detailed) "Book" table and then a larger "super entity" for the full Book? The information is 
rather different considering that the former is largely composed of keys and the latter is actually able to be read by mere humans.~~

~~Should anything else be added though? ~~

~~The desktop's purpose is to facilitate more in-depth interaction with the database and the website was originally meant to be a useful companion piece that 
could be accessed anywhere.~~

As of right now (7/10/2022), the only thing that the website will be for is viewing books that are in the library's database and adding new records. Editing and deleting records is NOT a planned feature!