function askAI() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer");

    if (question.trim() === "") {
        answer.innerHTML = "⚠️ অনুগ্রহ করে একটি প্রশ্ন লিখুন।";
        return;
    }

    let q = question.toLowerCase();

    if (q.includes("আগুন")) {
        answer.innerHTML = "🔥 শান্ত থাকুন, ৯৯৯-এ ফোন করুন এবং নিরাপদ স্থানে চলে যান।";
    } 
    else if (q.includes("কেটে গেছে")) {
        answer.innerHTML = "🩹 ক্ষতস্থান পরিষ্কার করুন, চাপ দিয়ে রক্ত বন্ধ করার চেষ্টা করুন এবং প্রয়োজনে চিকিৎসকের কাছে যান।";
    } 
    else if (q.includes("অজ্ঞান")) {
        answer.innerHTML = "🚑 ব্যক্তিকে নিরাপদ স্থানে শুইয়ে দিন এবং দ্রুত জরুরি সেবায় যোগাযোগ করুন।";
    } 
    else {
        answer.innerHTML = "🤖 এটি ডেমো সংস্করণ। পরে এখানে আসল AI যুক্ত করা হবে।";
    }
}
