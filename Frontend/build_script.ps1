#Variables
$Directory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Frontend"
$sourceDirectory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Frontend\build\*"
$targetDirectory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Backend\target\classes\static"

#test

#Build the application and then copy it to the server's 
cd $Directory
npm run-script build
Copy-Item -Force -Recurse $sourceDirectory -Destination $targetDirectory
