// Get the elements
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const keywordInput = document.getElementById('keywordInput');
const submitBtn = document.getElementById('submitBtn');

// Show the popup when the button is clicked
openPopupBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Check if the entered keyword is correct and open the corresponding page
submitBtn.addEventListener('click', function() {
  const keyword = keywordInput.value.trim();

  switch (keyword) {
    case 'ashish':
      window.open('https://www.instagram.com/p/ClNV_JJJIzdIlJWV3eh8S-5gWHHEfjQpYXxKZ40/', '_blank'); // Replace with the URL of the first page
      break;
    case 'harshita':
      window.open( 'https://www.instagram.com/p/CtCTjjDSgiey9RXZdPbmf4dh1nNmRPChGsA3KA0/','-blank');
      break;
    case 'rishika':
      window.open('https://www.instagram.com/p/Bv9pFGVH2P5gblcBqEze3U0m2PeJLWc0I7K2XE0/', '_blank'); 
      break;
    case 'yessha':
      window.open('https://www.instagram.com/p/CIfOLmtFWAtE-PuHC4t6t3kwAUGHBbylnPvHw80/', '_blank'); 
      break;
      case 'abhishek':
        window.open('https://www.instagram.com/p/Cm8QnuANRICWkdKwGszct1oauApR83N4XphP8Q0/', '_blank'); 
        break;
        case 'Utkarsh':
        window.open('https://www.instagram.com/p/Cl_959gyRX5oaNrR8j_YQc193eSfOVqgNGfVtA0/', '_blank'); 
        break;
    default:
      alert('Invalid keyword. Please try again.'); 
  }

  // Reset the input field and hide the popup
  keywordInput.value = '';
  popup.style.display = 'none';
});


// >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<

document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}