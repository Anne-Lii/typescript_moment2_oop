# Att göra lista i TypeScript OOP

En webbapplikation som är en Att göra lista. 
Användaren skriver in en uppgift som ska utföras och väljer prioritering 1 till 3. När uppgiften läggs till listan läggs prioritering 1 längst upp och prio 2 i mitten och prio 3 längst ner på listan.
Användaren kan markera uppgiften som klar och då dyker en grön bock upp framför uppgiften och texten blir överstruken. Man kan också ta bort en uppgift med Ta bort knappen. Vill man rensa hela listan finns en knapp längst ner för att Rensa listan.

## Index.html
Här har jag ett formulär med en texarea och en input för prioritet 1-3 samt en submit knapp. Efter det har jag gjort en UL lista där mina tasks ska skrivas in som <li> element. Längst ned en knapp för att rensa hela listan.

## Class.ts
I denna fil finns mitt interface och klassen ToDoList. 
I klassen finns alla krav med från uppgiftsbeskrivningen med alla metoder.

## main.ts
I denna fil finns resten av ts koden. Här hämtas element från HTML koden, sortering av prioritering, skapande av nya element och knappar,  utskrift till DOM samt eventlisteners för olika knapptryckningar.