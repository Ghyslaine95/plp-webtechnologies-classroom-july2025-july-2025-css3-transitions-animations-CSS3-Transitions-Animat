
// Part 2: JavaScript Functions
        
        // Function to reverse a string (with parameter and return value)
        function reverseString() {
            const input = document.getElementById('reverseInput').value;
            const resultElement = document.getElementById('reverseResult');
            
            // Using a function with clear input and output
            const reversed = reverseText(input);
            resultElement.textContent = reversed || 'Please enter some text';
        }
        
        // Reusable function with parameter and return value
        function reverseText(text) {
            return text.split('').reverse().join('');
        }
        
        // Function to multiply a number (demonstrating scope)
        function multiplyNumber() {
            const input = document.getElementById('numberInput').value;
            const resultElement = document.getElementById('multiplyResult');
            
            // Local variable with function scope
            const multiplier = 5;
            
            if (input === '' || isNaN(input)) {
                resultElement.textContent = 'Please enter a valid number';
                return;
            }
            
            // Using a function with parameter and return value
            const result = multiplyBy(parseFloat(input), multiplier);
            resultElement.textContent = `${input} × ${multiplier} = ${result}`;
        }
        
        // Function with parameters and return value
        function multiplyBy(number, multiplier) {
            return number * multiplier;
        }
        
        // Function to convert temperature (demonstrating different scopes)
        const conversionFactor = 5/9; // Global variable
        
        function convertTemperature() {
            const input = document.getElementById('tempInput').value;
            const resultElement = document.getElementById('tempResult');
            
            if (input === '' || isNaN(input)) {
                resultElement.textContent = 'Please enter a valid number';
                return;
            }
            
            // Using a function with parameter and return value
            const celsius = fahrenheitToCelsius(parseFloat(input));
            resultElement.textContent = `${input}°F = ${celsius.toFixed(2)}°C`;
        }
        
        // Function using global variable and parameter
        function fahrenheitToCelsius(fahrenheit) {
            // Using the global conversionFactor variable
            return (fahrenheit - 32) * conversionFactor;
        }
        
        // Part 3: Combining CSS Animations with JavaScript
        
        // Function to toggle animation class
        function toggleAnimation(elementId, animationClass) {
            const element = document.getElementById(elementId);
            element.classList.toggle(animationClass);
        }
        
        // Function to flip card
        function flipCard(cardId) {
            const card = document.getElementById(cardId);
            card.classList.toggle('flipped');
        }
        
        // Function to open modal
        function openModal() {
            const modal = document.getElementById('demoModal');
            modal.classList.add('active');
        }
        
        // Function to close modal
        function closeModal() {
            const modal = document.getElementById('demoModal');
            modal.classList.remove('active');
        }
        
        // Additional demonstration of function reuse
        // This function can be used to add animation to any element
        function animateElement(elementId, animationClass, duration) {
            const element = document.getElementById(elementId);
            
            // Add the animation class
            element.classList.add(animationClass);
            
            // Remove the animation class after specified duration
            setTimeout(() => {
                element.classList.remove(animationClass);
            }, duration);
        }