# Hoe dit te gebruiken?

In Visual Studio Code schrijf je de code Met Git zorg je er voor dat je de code
niet kwijt kan raken (dit heet een Source Control Management System (SCMS)) In
GitHub sla je de code online op zodat, mocht jouw PC afbranden, je code niet weg
is. Met GitHub Pages kan je "gratis" een website maken, dit moet dan wel een
single page applciation
([SPA](https://en.wikipedia.org/wiki/Single-page_application)) zijn, maar dat is
tegenwoordig toch altijd standaard.

1.  Download & Install
    [Visual Studio Code](https://code.visualstudio.com/Download)
2.  Download & Install Git (for [Windows](https://git-scm.com/download/win))
3.  Learn Git! https://git-scm.com/book/en/v1/Getting-Started
4.  Learn GitHub
    https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners
5.  Learn JavaScript, HTML, CSS
6.  Download mijn repository van GitHub
7.  Download & Install Python (de nieuwste, zorg dat Python in je PATH staat)

Maak een directory en clone mijn repo:

```
git clone https://github.com/ariagaming/temp
```

Nu moet je een web server vinden die je makkelijk in een directory op kan
starten. Ik gebruik Python:

```
python -m SimpleHTTPServer 8000
```

Zorg dat je in de directory staat van het project, deze heb je met het clonen
aangemaakt, hier kan je de server in starten.
