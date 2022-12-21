# ChatWithMe
En real-time chat applikation fungerer ved at den kontinuerligt sender anmodninger til en server for at hente nye meddelelser. Når en bruger sender en meddelelse, bliver den sendt til serveren, som derefter distribuerer meddelelsen til alle de andre brugere i chatrummet. For at gøre det muligt for applikationen at være "real-time", skal den være i stand til at hente nye meddelelser fra serveren i et højt tempo, ofte med et interval på få hundrede millisekunder.

Implementeringen af ChatWithMe involvere brug af et såkaldt "web socket" - en type forbindelse mellem en webbrowser og en server, som gør det muligt for serveren at sende data til browseren uden at anmode om det. På denne måde kan chatmeddelelserne sendes fra serveren til browseren uden at skulle vente på, at browseren sender en anmodning om at modtage dem.

der anvendes både en server-side og en client-side komponent. Server-side komponenten håndterer anmodninger fra klienter, lagring af meddelelser og distribution af meddelelser til alle de relevante klienter. Client-side komponenten håndterer visning af meddelelserne på skærmen og indtastning af nye meddelelser fra brugeren.
