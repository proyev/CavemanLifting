import { Exercise, User, Workout } from "./Utils/interface";

const BASE_URL = 'http://localhost:3001';

//TODO Move API Keys to the .env currently the app is not working without this file
//import ApiKey from './ApiKey';

//TODO check this function with the below fetch request. consolidate
async function mapRequest(path: string) {
  return fetch(path)
    .then(res => (res.status < 400 ? res : Promise.reject()))
    .then(res => (res.status !== 204 ? res.json() : res))
    .catch(err => {
      console.error('Map Request Error:', err);
    });
}
// TODO can potentially refactor to async functions
async function fetchRequest<T>(path: string, options?: any): Promise<T> {
  return fetch(BASE_URL + path, options)
    .then(res => (res.status < 400 ? res : Promise.reject()))
    .then(res => (res.status !== 204 ? res.json() : res))
    .catch(err => {
      console.error('Error: ', err);
    });
}

//TODO update to .env on the server and return it as part of the call
function getGeolocatedGyms(lat: number, lng: number) {
  return mapRequest(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?bbox=${(lng -= 0.05)}%2C${(lat -= 0.05)}%2C${(lng += 0.05)}%2C${(lat += 0.05)}&limit=10&proximity=${lng}%2C${lat}&access_token=pk.eyJ1IjoiemVuaWNlayIsImEiOiJja3c0b2JmdG0wNmg4MnZyaGN2dGJhcmJsIn0.pZGBDuB1Hj_9Rjow7q591Q`
  );
}

function getWorkouts(): Promise<Workout[]> {
  return fetchRequest('/dashboard');
}

function updateUser(id: string, body: User) {
  return fetchRequest<User>(`/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function postWorkout(body: Workout): Promise<Workout> {
  return fetchRequest<Workout>('/exercise', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

//what add Info was for -> check data types used for body to
function addInfo(body: any, id: string) {
  return fetchRequest('/addinfo/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function getUser<User>(id: string): Promise<User> {
  return fetchRequest('/user/' + id);
}

//does it fetch an array?
function getWorkoutInfo(): Promise<Exercise[]> {
  return fetchRequest<Exercise[]>('/workoutinfo');
}

const ApiService = {
  getGeolocatedGyms,
  getWorkouts,
  postWorkout,
  addInfo,
  getUser,
  getWorkoutInfo,
  updateUser,
};

export default ApiService;
