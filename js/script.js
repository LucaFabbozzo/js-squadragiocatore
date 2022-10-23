//come poter creare un array multidimensionale e a lavorare nel dom con liste dinamiche

const data = [];

//prendiamo il bottone
document.querySelector('button').addEventListener('click', function() {
  // andiamo a prendere i valori dei due input con name team e player
  const team = document.querySelector('[name="team"]').value;
  const player = document.querySelector('[name="player"]').value;
  console.log(team, player);
  //adesso dobbiamo inserire il player all'interno di team pero' in un sottonodo di data.
  // controlliamo se esiste data di team, se non esiste dobbiamo dire che data di team è a sua volta un'array
  if (!data[team]) {
    data[team] = [];
    //adesso ci servono un po' di elementi html all'interno della pagina quindi ci servira una lista
    const list = document .createElement('ul');
    list.classList.add('list-group');
    //set attribute permette di aggiungere altre informazioni all'interno di un elemento, in questo caso va ad ignettare l'attributo data-team = "team"
    list.setAttribute('data-team', team);

    //creiamo un titolo, il titolo sara il nome della squadra
    const title = document .createElement('h2');
    title.classList.add('text-center');
    title.innerText = team;

    //ci serve anche un div dove andremo ad appendere sia il title sia la lista
    const div = document .createElement('h2');
    div.classList.add('mb-4');
    div.append(title);
    div.append(list);

    //dobbiamo aggiungere il div all'interno del main
    document.querySelector('main').append(div);
  }

  data[team].push(player)

  //andiamo a creare il nostro item che avra il valore di player
  const item = document.createElement('li');
  item.classList.add('list-group-item');
  item.innerText = player;

  //adesso dobbiamo appendere questo item all'interno della nostra lista che abbiamo creato
  document.querySelector('[data-team="' + team + '"]').append(item);
})