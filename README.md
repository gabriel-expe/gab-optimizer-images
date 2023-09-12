# gab-images-optimizer

**Version:** 1.0.2

**Author:** Gabriel Rubio

## Description

**gab-images-optimizer** is a versatile command-line utility for image optimization and conversion. It allows you to optimize one or more images in a specified folder using various options, including resizing, quality adjustment, output format selection, and specifying a destination folder for the optimized images. **It will maintain the same folder structure as the original.**

## Installation

To use **gab-images-optimizer**, you can install it globally using npm:

```bash
npm install -g gab-images-optimizer
```

## Usage

After installation, you can use the CLI with the following command:

```bash
gio compress route [options]
```

### Options

-   `-r, --resize <width>`: Resize images with a maximum width in pixels.
-   `-q, --quality <quality>`: Set the quality of the optimized images (default is 70).
-   `-f, --format <format>`: Specify the output format for the optimized images (e.g., png, jpg, webp).
-   `-d, --destination <path>`: Specify the destination path to create the new images folder (default is the current folder where the program is executed).

## Examples

1. Optimize images from actual route with default options, just add a point in the end:

```bash
gio compress .
```

2. Optimize images in a specific folder (`../test/folder_name/`) with default settings:

```bash
gio compress ../test/folder_name/
```

3. Optimize just one image, quality 70 and new format webp and saving where the command is being executed:

```bash
gio compress ../test/image_name.png/ -q 70 -f webp
```

4. Optimize images in the actual folder, sending all of them (folders and images) to a specific route with a rezise of 400px taking width as base:

```bash
gio compress ../test/folder_name/ --quality 60 --format jpg --resize 400 --destination ../../documents/new_folder/
```

or

```bash
gio compress ../test/folder_name/ -q 60 -f jpg -r 400 -d ../../documents/new_folder/
```
