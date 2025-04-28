const form = document.querySelector("form");
const ul = document.querySelector("ul");
const pets = [];

class pet {
  constructor(_name, _oltherName, _species = [], _breed = []) {
    this.name = _name;
    this.oltherName = _oltherName;
    this.species = _species;
    this.breed = _breed;
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inPetName = document.getElementById("petName").value;
  const inOltherName = document.getElementById("oltherName").value;
  const inSpecies = document.getElementById("species").value;
  const inBreed = document.getElementById("breed").value;
  assNewPet(inPetName, inOltherName, inSpeciesn, inBreed);
  form.reset();
});
