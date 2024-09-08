async function openModal(modalId) {
    var modal = document.getElementById(modalId);
        modal.style.display = "block";


    // Delay the appearance of the modal-content
    var modalContent = modal.querySelector('.modal-content');
    modalContent.style.opacity = "0"; // Start with content invisible
    

     // Step 1: Fade to 0.3 opacity
     setTimeout(function() {
        modalContent.style.opacity = "0.3";
    }, 100); // Delay for 0.3 seconds

    // Step 2: Fade to 0.5 opacity
    setTimeout(function() {
        modalContent.style.opacity = "0.4";
    }, 200); // Delay for 0.5 seconds

    // Step 3: Fade to 0.5 opacity
    setTimeout(function() {
        modalContent.style.opacity = "0.5";
    }, 300); // Delay for 0.5 seconds

    
    // Step 4: Fade to 0.5 opacity
    setTimeout(function() {
        modalContent.style.opacity = "0.6";
    }, 400); // Delay for 0.5 seconds

    // Step 5: Fade to 0.5 opacity
    setTimeout(function() {
        modalContent.style.opacity = "0.7";
    }, 400); // Delay for 0.5 seconds

    // Step 6: Fade to 0.5 opacity
    setTimeout(function() {
        modalContent.style.opacity = "0.8";
    }, 500); // Delay for 0.5 seconds

    // Step 7: Fade to 0.5 opacity
    setTimeout(function() {
        modalContent.style.opacity = "0.9";
    }, 500); // Delay for 0.5 seconds

    // Step 8: Fade to full opacity and move to final position
    setTimeout(function() {
        modalContent.style.opacity = "1";
    }, 500); // Delay for 0.7 seconds
}

async function closeModal(event) {
    var modal = event.target.closest('.modal');
    modal.style.display = "none";
    event.stopPropagation();
}

// Function to add event listeners for opening modals
function addOpenModalListener(buttonId, modalId) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.onclick = async function () {
            await openModal(modalId);
        };
    }
}

// Add event listeners to open the modals
addOpenModalListener("openModalBtn1", "productModal1");
addOpenModalListener("openModalBtn1_1", "productModal1_1");
addOpenModalListener("openModalBtn1_2", "productModal1_2");
addOpenModalListener("openModalBtn1_3", "productModal1_3");
addOpenModalListener("openModalBtn2", "productModal2");
addOpenModalListener("openModalBtn2_1", "productModal2_1");
addOpenModalListener("openModalBtn2_2", "productModal2_2");
addOpenModalListener("openModalBtn2_3", "productModal2_3");
addOpenModalListener("openModalBtn3", "productModal3");
addOpenModalListener("openModalBtn3_1", "productModal3_1");
addOpenModalListener("openModalBtn3_2", "productModal3_2");
addOpenModalListener("openModalBtn3_3", "productModal3_3");
addOpenModalListener("openModalBtn4", "productModal4");
addOpenModalListener("openModalBtn4_1", "productModal4_1");
addOpenModalListener("openModalBtn4_2", "productModal4_2");
addOpenModalListener("openModalBtn4_3", "productModal4_3");
addOpenModalListener("openModalBtn5", "productModal5");
addOpenModalListener("openModalBtn5_1", "productModal5_1");
addOpenModalListener("openModalBtn5_2", "productModal5_2");
addOpenModalListener("openModalBtn5_3", "productModal5_3");
addOpenModalListener("openModalBtn6", "productModal6");
addOpenModalListener("openModalBtn6_1", "productModal6_1");
addOpenModalListener("openModalBtn6_2", "productModal6_2");
addOpenModalListener("openModalBtn6_3", "productModal6_3");



// Add event listeners to close the modals
var closeButtons = document.getElementsByClassName("closeBtn");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = async function (event) {
        await closeModal(event);
    };
}

// Close the modal if the user clicks outside of it
window.onclick = async function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}