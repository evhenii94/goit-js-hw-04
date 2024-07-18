function checkForSpam(message) {
	const lowerCaseMessage = message.toLowerCase();

	if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
		return true;
	} else {
		return false;
	}
}

// Приклади викликів функції для перевірки її роботи
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message.")); // true
console.log(checkForSpam("No spam here, just regular content.")); // true
console.log(checkForSpam("Regular news and updates")); // false

