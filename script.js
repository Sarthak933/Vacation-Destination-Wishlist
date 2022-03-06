(function(){
    "use strict";

    var detailsForm = document.getElementById("dest_det_form");

    detailsForm.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        var destLocation = event.target.elements["location"].value;
        var destDescription = event.target.elements["desc"].value;
        var destPhoto = event.target.elements["photo"].value;
        var destTime = event.target.elements["time"].value;
        var destPeople = event.target.elements["people"].value;
        var destThings = event.target.elements["things"].value;

        for (var i=0; i<detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        var destCard = createDestinationCard(destLocation, destDescription, destPhoto, destTime, destPeople, destThings);

        var wishlistContainer = document.getElementById("dest_container");
        if (wishlistContainer.children.length !== 0) {
            document.getElementById("title").innerHTML = "My Wish List!";
            document.getElementById("title").style.textTransform = "uppercase";
            document.getElementById("title").style.textAlign = "center";
            document.getElementById("title").style.fontSize = "30px";
        }

        document.getElementById("dest_container").appendChild(destCard);
    }

    function createDestinationCard(location, desc, photo, time, people, things) {
        var card = document.createElement("div");
        card.className = "card";

        var img = document.createElement("img");
        img.setAttribute("src", photo);
        img.setAttribute("alt", "Please provide a valid url");
        img.className = "card-image";
        card.appendChild(img);

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        if (desc.length !== 0) {
            var cardTitle = document.createElement("h1");
            cardTitle.innerText = location;
            cardTitle.className = "card-title";
            cardBody.appendChild(cardTitle);
        }
        
        var cardDesc = document.createElement("h4");
        cardDesc.innerText = desc;
        cardDesc.className = "card-desc";
        cardBody.appendChild(cardDesc);

        var cardTime = document.createElement("h4");
        cardTime.innerText = time;
        cardTime.className = "card-time";
        cardBody.appendChild(cardTime);

        var cardPeople = document.createElement("h4");
        cardPeople.innerText = people;
        cardPeople.className = "card-people";
        cardBody.appendChild(cardPeople);

        var cardThings = document.createElement("h4");
        cardThings.innerText = things;
        cardThings.className = "card-things";
        cardBody.appendChild(cardThings);

        var cardButtonContainer = document.createElement("div");
        cardButtonContainer.className = "card-button-container";

        var cardDltBtn = document.createElement("button");
        cardDltBtn.innerText = "Remove From Wishlist";
        cardDltBtn.className = "card-button";
        cardDltBtn.addEventListener("click", removeDest);
        cardButtonContainer.appendChild(cardDltBtn);

        cardBody.appendChild(cardButtonContainer);

        card.appendChild(cardBody);

        return card;
    }

    function removeDest(event) {
        var cardRemove = event.target.parentElement.parentElement.parentElement;
        cardRemove.remove();
    }

})();


