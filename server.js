const API = "https://echox-supportweb.onrender.com"; // 🔥 change this

async function load() {
    let res = await fetch(API + '/data');
    let data = await res.json();
    document.getElementById('announcement').innerText = data.announcement;
}

async function sendComplaint() {
    await fetch(API + '/complaint', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: name.value,
            text: complaint.value
        })
    });
    alert("Complaint sent 🚀");
}

async function sendReview() {
    await fetch(API + '/review', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            text: reviewText.value,
            stars: stars.value
        })
    });
    alert("Review submitted ⭐");
}

load();
