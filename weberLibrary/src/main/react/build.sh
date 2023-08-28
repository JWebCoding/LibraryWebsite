#! /bin/bash
build_directory="build/*"
static_directory="../../../target/classes/static/"

mkdir -p $static_directory

yarn build

if cp -r $build_directory $static_directory ; then
    echo "Build files copied"
else
    echo "Failed to copy build files"
fi