<!-- PROJECT LOGO -->
<div align="right">
  <a href="https://github.com/calendso/calendso">
    <img src="https://user-images.githubusercontent.com/8019099/133430653-24422d2a-3c8d-4052-9ad6-0580597151ee.png" alt="Logo">
  </a>
  <a href="https://calendso.com">Website</a>
  ·
  <a href="https://github.com/calendso/docs/issues">Community Support</a>
</div>

# Product Documentation

The official product documentation, containing information and guides about using the product as well as support for self-hosted installations. This documentation site runs on [Docusaurus](https://docusaurus.io), so you may refer to their documentation should you need information on anything that isn't covered here.

## Prerequisites
- Git
- Node.js & npm
- Yarn

## Installation
Firstly, clone the repository using Git:
```console
git clone https://github.com/calendso/docs.git
```

Now, you can install the dependencies with yarn:
```console
yarn install
```

## Editing
To create, edit and delete documentation pages, you can simply create markdown (.md) files in the `docs/` folder. You can edit Markdown with any text editor, but VS Code and WebStorm have side-by-side previews so you can see your formatted content whilst writing markdown.

## Local Development

```console
docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing To The Documentation Site

***Note: A YouTube Step by Step Guide will be released soon!***

## Existing Page

1. From the Docs GitHub Repository, head to the folder called 'Docs' and open it.
2. From here you can view all current pages on the Documentation Site. Select the page you would like to contribute to.
3. You should now be able to view the page you have selected. Located at the top right of the page will be a pencil icon (referencing edit). Pressing this will bring you up a box to edit and make changes.
4. From here make the changes you wish to make.
5. At the bottom of the screen will be a 'Propose Changes' box, fill in all the relevant details such as title and description then press the green 'Propose Changes' button.
6. Your changes have been saved, to submit them for review, located on your screen, press the green 'Create Pull Request' button.
7. Fill in all the relevant details such as title and description and after finalize the submission.

You have now successfully edited and submitted changes to our documentation site.

## Creating a New Page

1. From the Docs GitHub Repository, head to the folder called 'Docs' and open it.
2. From here you can view all current pages on the Documentation Site. At the top of your screen press the 'New file' button.
3. You should now be able to view the page you have created. Remember when renaming the document to put .md at the end of the file name.
4. From here make the changes you wish to make. Such as creating a title, sub-title and description.
5. At the bottom of the screen will be a 'Propose Changes' box, fill in all the relevant details such as title and description then press the green 'Propose Changes' button.
6. Your changes have been saved, to submit them for review, located on your screen, press the greem 'Create Pull Request' button.
7. Fill in all the relevant details such as title and description and after finalize the submission.

You have now successfully created and submitted changes to our documentation site.
