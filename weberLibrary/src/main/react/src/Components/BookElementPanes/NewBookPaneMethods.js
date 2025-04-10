import libraryService from "../../services/library.service";

class NewBookPaneMethods {
    getAuthors = async () => {
        // Get data from server.
        const response = (await libraryService.getAllAuthors()).data;

        let authorsArray=[];

        // Iterate through response, combine the name elements and then
        // create a new array of the name and ID to be added to state.
        response.forEach(element => {
            // let fullName;
            //
            // if(element.middle_name === null){
            //   fullName = (element.first_name+" "+element.last_name);
            // } else {
            //   fullName = (element.first_name+" "+element.middle_name+" "+element.last_name);
            // }

            // Create temporay object of the Fullname and its
            // associated ID then push them to the larger array.
            let tempObject={ value: element.authorID, label:element.author_name};
            authorsArray.push(tempObject);
        });
        return authorsArray;
    }

    getGenres = async () => {
        const response = (await libraryService.getAllGenres()).data;
        let nonFictionGenresArray=[];
        let fictionGenresArray=[];

        // Iterate through the response and filter the genres into
        // seperate arrays based on their type.
        response.forEach(element => {
            let tempObject={ value: element.genreID, label: element.genre_name};
            if(element.genre_type === 1){
                nonFictionGenresArray.push(tempObject);
            }else {
                fictionGenresArray.push(tempObject);
            }
        });

        // Add the final arrays to their respective states
        return [nonFictionGenresArray, fictionGenresArray];
        // setNonFictionGenreNamesList(nonFictionGenresArray);
        // setFictionGenreNamesList(fictionGenresArray);

    }

    getLanguages = async () => {
        const response = (await libraryService.getAllLanguages()).data;
        let languagesArray=[];

        response.forEach(element => {
            let tempObject={ value: element.languageID, label: element.language_name,
            suffix: element.language_suffix};
            languagesArray.push(tempObject);
        });

        return languagesArray;
    }

    getPublishers = async () => {
        const response = (await libraryService.getAllPublishers()).data;
        let publishersArray=[];

        response.forEach(element => {
            let tempObject={ value: element.publisherID, label: element.publisher_name};
            publishersArray.push(tempObject);
        });

        return publishersArray;
    }

    getSeries = async () => {
        const response = (await libraryService.getAllSeries()).data;
        let seriesArray=[];

        response.forEach(element => {
            let tempObject={ value: element.seriesID, label: element.series_name};
            seriesArray.push(tempObject);
        });

        return seriesArray;
    }

}

export default new NewBookPaneMethods;
