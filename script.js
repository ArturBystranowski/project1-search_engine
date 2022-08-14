const input = document.querySelector(".search");
const listItems = document.querySelectorAll("li");

const search = () => {
	listItems.forEach((element) => {
		if (
			!element.textContent
				.toLowerCase()
				.includes(input.value.toLowerCase())
		) {
			element.style.display = "none";
		} else {
			element.style.display = "block";
		}
	});
};

input.addEventListener("keyup", search);
