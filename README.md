# NXB-Noi-Bo
# Logistic-Shop

# Code Style

# Stack 
  - HTML/CSS
  - Scss
  - Bootstrap 4
  - PugJs
  - GulpJs
  - Owl Carousel 2
  - select 2
  - Lazyload
  - Meaga menu: https://github.com/yuanqing/menu-aim

## PUG
extend includes/layout.pug

block pages
  // Your PUG/HTML Code

## Components
/component/menu
/component/book-box
/component/check-license
/component/new-feed
/component/menu-topic
/component/list-topic
/component/tabbar
/component/print-service
/component/go-to-top
/layout/footer

## SCSS
- The colors and variables declared in /assets/css/variables.scss
- Divide css by pages, each page will have its own style which will be divided into / assets / css / pages (saved in folders)
- The components save in /assets/css/components (Save in folder)
- Css build by main.scss. So, when adding scss file, import scss file in main file

# Run Project
- npm install
- npm install -g gulp
- npm install -g yarn
- yarn install
- gulp dev (development)
- open any pug file(ctrl + s) ->  auto render pug to html
- open file main.scss(ctrl + s) ->  auto render file main.css
- gulp build (build production)
