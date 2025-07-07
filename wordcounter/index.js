const textInput = document.getElementById('textInput');
const characterCount = document.getElementById('characterCount');
const wordCount = document.getElementById('wordCount');
const charNoSpaces = document.getElementById('charNoSpaces');
const paragraphCount = document.getElementById('paragraphCount');
const sentenceCount = document.getElementById('sentenceCount');
const readingTime = document.getElementById('readingTime');

function updateCounts() {
    const text = textInput.value;
    
    // Character count (including spaces)
    const charCount = text.length;
    characterCount.textContent = charCount;
    
    // Character count (excluding spaces)
    const charNoSpacesCount = text.replace(/\s/g, '').length;
    charNoSpaces.textContent = charNoSpacesCount;
    
    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCountNum = text.trim() === '' ? 0 : words.length;
    wordCount.textContent = wordCountNum;
    
    // Paragraph count
    const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0);
    const paragraphCountNum = text.trim() === '' ? 0 : paragraphs.length;
    paragraphCount.textContent = paragraphCountNum;
    
    // Sentence count
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCountNum = text.trim() === '' ? 0 : sentences.length;
    sentenceCount.textContent = sentenceCountNum;
    
    // Reading time (assuming 200 words per minute)
    const readingTimeMinutes = Math.ceil(wordCountNum / 200);
    readingTime.textContent = readingTimeMinutes;
}

function clearText() {
    textInput.value = '';
    updateCounts();
    textInput.focus();
}

// Update counts in real-time as user types
textInput.addEventListener('input', updateCounts);
textInput.addEventListener('paste', () => {
    setTimeout(updateCounts, 10);
});

// Initialize counts
updateCounts();

// Focus on textarea when page loads
textInput.focus();