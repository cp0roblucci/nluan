const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const overlayDelete = $('.overlay-delete');

const modalDeleteFish = $('.modal-delete-fish');
const cancelDeleteFish = $('.cancel-delete-fish');

const listBtnDeleteFish = $$('.delete-fish');

const idFish = document.getElementById('idFish');

if(listBtnDeleteFish) {
  listBtnDeleteFish.forEach(btnDeleteFish => {
    btnDeleteFish.addEventListener('click', function() {
      overlayDelete.classList.remove('hidden');
      modalDeleteFish.classList.remove('hidden');
      const fishId = btnDeleteFish.dataset.id;

      if(idFish) {
        idFish.value = fishId;
      }
      console.log(idFish.value);
    })
  });
}

if(overlayDelete) {
  overlayDelete.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalDeleteFish.classList.add('hidden');
  })
}

if(cancelDeleteFish) {
  cancelDeleteFish.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalDeleteFish.classList.add('hidden');
  })
}



// ACCESSORIES
const modalDeleteAccessories = $('.modal-delete-accessories');
const cancelDeleteAccessories = $('.cancel-delete-accessories');

const listBtnDeleteAccessories = $$('.delete-accessories');

const idAccessories = document.getElementById('idAccessories');

if(listBtnDeleteAccessories) {
  listBtnDeleteAccessories.forEach(btnDeleteAccessories => {
    btnDeleteAccessories.addEventListener('click', function() {
      overlayDelete.classList.remove('hidden');
      modalDeleteAccessories.classList.remove('hidden');
      const accessoriesId = btnDeleteAccessories.dataset.id;

      if(idAccessories) {
        idAccessories.value = accessoriesId;
      }
      console.log(idAccessories.value);
    })
  });
}

if(overlayDelete) {
  overlayDelete.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalDeleteAccessories.classList.add('hidden');
  })
}

if(cancelDeleteAccessories) {
  cancelDeleteAccessories.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalDeleteAccessories.classList.add('hidden');
  })
}



// UPDATE PRICE
const modalUpdatePrice = $('.modal-update-price');
const cancelUpdatePrice = $('.cancel-update-price');

const listBtnUpdatePrice = $$('.update-price');

const titleSpecies = document.getElementById('title-species');
const titleSize = document.getElementById('title-size');

const newPrice = document.getElementById('new-price');


const inputUpdatePriceSpecies = document.getElementById('updatePriceSpecies');
const inputUpdatePriceSize = document.getElementById('updatePriceSize');

if(listBtnUpdatePrice) {
  listBtnUpdatePrice.forEach(btnUpdatePrice => {
    btnUpdatePrice.addEventListener('click', function() {
      overlayDelete.classList.remove('hidden');
      modalUpdatePrice.classList.remove('hidden');
      const UpdatePriceSpecies = btnUpdatePrice.dataset.species;
      const UpdatePriceSize = btnUpdatePrice.dataset.size;
      const oldPrice = btnUpdatePrice.dataset.price;

      newPrice.value = oldPrice;

      if(inputUpdatePriceSpecies && inputUpdatePriceSize) {
        inputUpdatePriceSpecies.value = UpdatePriceSpecies;
        inputUpdatePriceSize.value = UpdatePriceSize;
      }

      titleSpecies.innerHTML = UpdatePriceSpecies;
      titleSize.innerHTML = UpdatePriceSize;

    })
  });
}

if(overlayDelete) {
  overlayDelete.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalUpdatePrice.classList.add('hidden');
    newPrice.value = '';
  })
}

if(cancelUpdatePrice) {
  cancelUpdatePrice.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalUpdatePrice.classList.add('hidden');
    newPrice.value = '';
  })
}


const modalUpdateQuantity = $('.modal-update-quantity');
const cancelUpdateQuantity = $('.cancel-update-quantity');

const listBtnUpdateQuantity = $$('.update-quantity');

const productName = document.getElementById('product-name');
const productQuantity = document.getElementById('product-quantity');

const newQuantity = document.getElementById('new-quantity');


const idProduct = document.getElementById('idProduct');

if(listBtnUpdateQuantity) {
  listBtnUpdateQuantity.forEach(btnUpdateQuantity => {
    btnUpdateQuantity.addEventListener('click', function() {
      overlayDelete.classList.remove('hidden');
      modalUpdateQuantity.classList.remove('hidden');

      const fishName = btnUpdateQuantity.dataset.fish_name;
      const fishId = btnUpdateQuantity.dataset.fish_id;

      const accessoriesName = btnUpdateQuantity.dataset.accessories_name;
      const accessoriesId = btnUpdateQuantity.dataset.accessories_id;

      const quantity = btnUpdateQuantity.dataset.quantity;

      newQuantity.value = quantity;


      if (fishName && fishId) {
        productName.innerHTML = fishName;

        idProduct.value = fishId;
      } else {
        productName.innerHTML = accessoriesName;

        idProduct.value = accessoriesId;
      }

      console.log(idProduct.value);
    })
  });
}

if(overlayDelete) {
  overlayDelete.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalUpdateQuantity.classList.add('hidden');
    newQuantity.value = '';
  })
}

if(cancelUpdateQuantity) {
  cancelUpdateQuantity.addEventListener('click', function() {
    overlayDelete.classList.add('hidden');
    modalUpdateQuantity.classList.add('hidden');
    newQuantity.value = '';
  })
}
