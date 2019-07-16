o artiste 1
o artiste 2
o artiste 3
o artiste 4

<input type="radio" name="vote" value="3"> artiste 1<br>
<input type="radio" name="vote" value="4"> artiste 2<br>
<input type="radio" name="vote" value="7"> artiste 3 

getArtists pour recupere la liste des artists
    afficher tous les artistes en radio button (boucle ngFor)
    ecrire dans l attribut value l'id de l artiste
    <div *ngFor="let artist of artists">
     <input type="radio" name="vote" value="artist.id"> {{ artiste.firstname }} <br>
    </div>
    faire un boutton
    gerer le clic
    recuperer l'id de l'artiste selectionne
    appeler la route 

vote:
id (pk)
id_artist (FK)

1   3
2   3
3   2
4   2
5   6
6   6
7   6
8   9
10  1
