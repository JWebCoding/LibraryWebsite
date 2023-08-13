#Variables
$FrontendDirectory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Frontend"
$BackendDirectory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Backend\target\classes"
$sourceDirectory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Frontend\build\*"
$targetDirectory = "C:\Users\Jweber\Documents\Programming_Projects\LibraryWebsite\Backend\target\classes\static"

# Build the application
Set-Location $FrontendDirectory
npm run-script build

# If the "static" folder exists in the backend then copy/paste the build files.
# Create the folder first if it doesn't.
if (Test-Path -Path $targetDirectory){
  Copy-Item -Force -Recurse $sourceDirectory -Destination $targetDirectory
} else {
  New-Item -Path $BackendDirectory -Name "static" -ItemType "directory"
  Copy-Item -Force -Recurse $sourceDirectory -Destination $targetDirectory
}