import * as THREE from 'three';
import {
  MdChurch,
  MdForest,
  MdHouse,
  MdMusicNote,
  MdPeople,
  MdQuestionMark,
  MdTrain,
} from 'react-icons/md';
import Place, { OrbitControlTarget } from '../entity/Place';

export type PlacesDatabase = {
  DEVESA: Place;
  EVENTS: Place;
  STATION: Place;
  CATHEDRAL: Place;
  GLOBAL: Place;
  GIRONAJS: Place;
  AUDITORIUM: Place;
};

const places: PlacesDatabase = {
  GLOBAL: new Place( //GLOBAL IS DEBUG
    'GLOBAL',
    'Global',
    MdQuestionMark,
    new OrbitControlTarget(new THREE.Vector3(0, 0, 0), 10),
    new THREE.Vector3(0, 0, 0),
    true,
    false,
    'Global',
    'Debug',
    '',
    null,
    null,
    null,
    ['', '']
  ),
  GIRONAJS: new Place(
    'GIRONAJS',
    'places.gironajs.navbar_name',
    MdHouse,
    new OrbitControlTarget(new THREE.Vector3(-2.63, 0.3, 3), 5),
    new THREE.Vector3(-2.63, 1, 3),
    false,
    false,
    'places.gironajs.title',
    'places.gironajs.subtitle',
    'places.gironajs.description_html',
    'https://goo.gl/maps/WJjMS189fTomSLwJ9',
    'https://gironajs.com/en',
    null,
    [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/159_Farinera_Teixidor%2C_c._Santa_Eug%C3%A8nia_42_%28Girona%29.jpg/1024px-159_Farinera_Teixidor%2C_c._Santa_Eug%C3%A8nia_42_%28Girona%29.jpg',
    ]
  ),
  CATHEDRAL: new Place(
    'CATHEDRAL',
    'places.cathedral.navbar_name',
    MdChurch,
    new OrbitControlTarget(new THREE.Vector3(5.66, 0.3, -3.58), 5),
    new THREE.Vector3(5.66, 1.5, -3.7),
    false,
    true,
    'places.cathedral.title',
    'places.cathedral.subtitle',
    'places.cathedral.description_html',
    'https://goo.gl/maps/8NeN5vRJenWTXaUbA',
    'https://www.catedraldegirona.cat/en/',
    'https://en.wikipedia.org/wiki/Girona_Cathedral',
    [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Girona_Cathedral_2020.jpg/800px-Girona_Cathedral_2020.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Girona_Cathedral_2020_-_nave.jpg/1280px-Girona_Cathedral_2020_-_nave.jpg',
    ]
  ),
  DEVESA: new Place(
    'DEVESA',
    'places.forest.navbar_name',
    MdForest,
    new OrbitControlTarget(new THREE.Vector3(-2, 0.3, -3.8), 5),
    new THREE.Vector3(-2, 0.9, -3.8),
    false,
    true,
    'places.forest.title',
    'places.forest.subtitle',
    'places.forest.description_html',
    'https://goo.gl/maps/TxHvcxuPkRSDxSMi7',
    'https://patrimoni.gencat.cat/en/collection/la-devesa-park',
    'https://es.wikipedia.org/wiki/Parque_de_la_Dehesa_de_Gerona',
    [
      'https://cdn-patrimoni.atmosfera.net/sites/default/files/styles/slideshows_fitxes/public/parc_devesa.jpg?itok=nG0ytzyL',
      'https://web.girona.cat/o/si?mh=600&i=/documents/368703/10719717/devesa_3%28mitjana%29.jpg/d7432d69-0042-35e0-be7b-33768c56a6e1?t=1622102055849',
    ]
  ),
  EVENTS: new Place(
    'EVENTS',
    'places.forest.navbar_name',
    MdPeople,
    new OrbitControlTarget(new THREE.Vector3(-6.21, 0.3, -0.84), 5),
    new THREE.Vector3(-6.21, 0.8, -0.84),
    false,
    true,
    'places.events.title',
    'places.events.subtitle',
    'places.events.description_html',
    'https://goo.gl/maps/pDDV9EwPcXqMhA2Q9',
    'https://firagirona.com/',
    null,
    [
      'https://firagirona.com/wp-content/uploads/2023/02/2018-FG-1024x682.jpg',
      'https://firagirona.com/wp-content/uploads/2023/02/2022-fira-Bxcat2-1024x682.jpg',
    ]
  ),
  AUDITORIUM: new Place(
    'AUDITORIUM',
    'places.auditorium.navbar_name',
    MdMusicNote,
    new OrbitControlTarget(new THREE.Vector3(-6.44, 0.3, -1.62), 5),
    new THREE.Vector3(-6.44, 0.8, -1.62),
    false,
    true,
    'places.auditorium.title',
    'places.auditorium.subtitle',
    'places.auditorium.description_html',
    'https://goo.gl/maps/pTtnrhkbGmspCTGm9',
    'https://gironacongressos.girona.cat/eng/index.php',
    null,
    [
      'https://auditori.girona.cat/img/foto_edifici.jpg',
      'https://auditori.girona.cat/img/foto_sala_montsalvatge.jpg',
    ]
  ),
  STATION: new Place(
    'STATION',
    'places.station.navbar_name',
    MdTrain,
    new OrbitControlTarget(new THREE.Vector3(-2.09, 0.3, 5.28), 5),
    new THREE.Vector3(-2.09, 1, 5.28),
    false,
    true,
    'places.station.title',
    'places.station.subtitle',
    'places.station.description_html',
    'https://goo.gl/maps/GBqdqaZzp7AYzXcS9',
    'https://www.adif.es/inicio',
    'https://en.wikipedia.org/wiki/Girona_railway_station',
    [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Girona_station_entrance.jpg/1280px-Girona_station_entrance.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Girona_-_Estaci%C3%B3n_de_ADIF_04.jpg/800px-Girona_-_Estaci%C3%B3n_de_ADIF_04.jpg',
    ]
  ),
};

const PlaceDAO = {
  getEnum: function (): PlacesDatabase {
    return places;
  },
  getAll: function (): Place[] {
    //in order;
    return [
      places.GLOBAL,
      places.GIRONAJS,
      places.STATION,
      places.CATHEDRAL,
      places.DEVESA,
      places.AUDITORIUM,
      places.EVENTS,
    ];
  },
  getFiltered: function (isDebug: boolean): Place[] {
    //in order
    return this.getAll().filter((item) => item.isDebug === isDebug);
  },
  getBillboarded: function (): Place[] {
    return this.getAll().filter((item) => !item.isDebug && item.showBillboard);
  },
};

export default PlaceDAO;
