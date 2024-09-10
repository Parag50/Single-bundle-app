
---

# Single-Bundle-App

A simple web application using Parcel for bundling. This application has been configured to output a single JavaScript and CSS file along with optimized images. The project supports multiple pages and components with a clean build structure.

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Setup](#setup)
- [Build and Serve](#build-and-serve)
- [Image Handling](#image-handling)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Project Overview

This project is a basic web application structured to produce a single bundled JavaScript file, a single CSS file, and manage assets like images effectively. The project uses Parcel as a build tool, with React for component-based UI development.

## Folder Structure

The project folder structure is as follows:

```
|-- build/
|   |-- index.a783156c.js
|   |-- index.d0cb5712.css
|   |-- index.html
|   |-- index.runtime.115f9bd4.js
|   |-- assets/
|       |-- images/
|           |-- background.d4e3a050.jpg
|           |-- logo.b5f19ae2.png
|-- src/
|   |-- App.js
|   |-- index.html
|   |-- index.js
|   |-- styles.scss
|   |-- assets/
|       |-- images/
|           |-- background.jpg
|           |-- logo.png
|-- .gitignore
|-- package.json
|-- README.md
```

## Setup

### Prerequisites

- Node.js (v20.17.0 or later)
- npm (v10.8.3 or later)

### Installing Dependencies

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/Parag50/Single-bundle-app.git
cd Single-bundle-app
npm install
```

## Build and Serve

### Building the Project

To build the project and generate the production files:

```bash
npm run build
```

This will create a `build` directory with the following files:
- `index.<hash>.js` - Main JavaScript bundle.
- `index.<hash>.css` - Main CSS bundle.
- `index.html` - Main HTML file.
- `assets/images/` - Directory containing optimized images.

### Serving the Build

To serve the built project locally:

```bash
npm install -g serve
serve build
```

Alternatively, you can use other static file servers like `http-server`.

## Image Handling

Images are placed in the `assets/images` directory within the `build` folder. Ensure that image references in your HTML or CSS files use relative paths pointing to this directory:

```html
<img src="./assets/images/logo.b5f19ae2.png" alt="Logo">
```

## Troubleshooting

### Common Issues

- **Images Not Displaying**: Check that image paths in your HTML or CSS files correctly match the build directory structure. Use relative paths to reference images in the `assets/images` directory.

- **Build Errors**: Ensure all file paths are correct and match the structure in the `src` folder. Check for any misconfigurations in your `package.json` or `.parcelrc` files.

- **Runtime Files**: The `index.runtime.<hash>.js` files are used by Parcel to manage runtime dependencies and are generally required for proper functioning. These should not be removed unless you have specific reasons and configurations to handle runtime dependencies differently.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any sections as needed based on your project specifics or additional requirements!