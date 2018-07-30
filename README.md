The solution is addressed to MSL, no other use has been scoped.
    
# Project development considerations

_Development time:_ 30h
_Stage:_ intermediary stage towards completion

**TODO:**
Responsiveness: add the medium break point (64rem) and changing back the small break (36rem), including the relevant styling exceptions for tables and iPads  
    Missing elements:   
        - search button on mobile version,  
        - styling "read more" button;  
    Carousel: add animation and scrolling effect;  
    Cross-browser/ cross-device test and updates.
    
**Solution:**  
The solution provides a simple HTML/CSS/JS layout developed considering the principles of template build of any MVC CMS. The JS library used in this occasion is RivetsJS, a light and quite easy to use binding library - http://rivetsjs.com/. 
The solution is optimised for an easy to implement templates in ASP.NET and TWIG CMS technologies (Symfony, Drupal, dJamgo, etc.). As it stands, the solution offers the possibility to add a translation solution just by adding a small language switch functionality and, of course, the translated content JSON files.
    
# Design and UX considerations
    
**SVG icon-ing suggestion:**   
Considering the website performance and providing an easy way to integrate icons, I have generated icon fonts for the 7 icons used in this project. https://icomoon.io/app/#/select
The difficulties I have encountered are the following: currently the stroke is not interpreted by the converter. Therefore I had to open each SVG file and convert the stroke into fills, then convert the icons. The icons are in different canvas size which has been reflected in the font generation results. The default icon size is different across every single icon font generated. I would suggest consistency which will increase the implementation speed considerably and an improved look and feel.
    
**Font family:**  
The title font family (Tahoma), provided as part of typografy, seems to be inconsistent with the fonts used in the designs. To be able to keep the look and feel as close as possible to the desing I have used a google font "Roboto" which allows also a lighter font-weight.
    
**UX question:**   
What is the corelation between the 2 small blocks from the middle column in the desktop design and the side text content (right)?
    
    
        

    
    