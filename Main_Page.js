// Simulated chat data
const chats = [
    { id: 1, name: "John Doe", lastMessage: "Hi!" },
    { id: 2, name: "Jane Smith", lastMessage: "Hello!" },
    { id: 3, name: "Alice", lastMessage: "Good morning!" },
];

const chatList = document.getElementById("chat-list");
const messagesDiv = document.querySelector(".messages");
const messageInput = document.getElementById("message-input");
const sendMessageBtn = document.getElementById("send-message-btn");

// Populate chat list
function renderChats() {
    chatList.innerHTML = ""; // Clear existing chat list
    chats.forEach((chat) => {
        const li = document.createElement("li");
        li.textContent = `${chat.name}: ${chat.lastMessage}`;
        li.dataset.chatId = chat.id;
        chatList.appendChild(li);
    });
}

// Event listener for selecting a chat
chatList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const chatId = e.target.dataset.chatId;
        const selectedChat = chats.find((chat) => chat.id == chatId);

        // Update chat header and enable message input
        document.querySelector(".chat-header h3").textContent = `Chat with ${selectedChat.name}`;
        messagesDiv.innerHTML = `<p><strong>${selectedChat.name}:</strong> ${selectedChat.lastMessage}</p>`;
        messageInput.disabled = false;
        sendMessageBtn.disabled = false;

        messagesDiv.dataset.chatId = selectedChat.id;
    }
});

// Event listener for sending messages
sendMessageBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    const chatId = messagesDiv.dataset.chatId;

    if (message && chatId) {
        const selectedChat = chats.find((chat) => chat.id == chatId);
        messagesDiv.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        selectedChat.lastMessage = message;
        renderChats();
        messageInput.value = "";
    }
});

// Adding Event Listener to New Chat Button
document.getElementById("new-chat-btn").addEventListener("click", function () {
    openNewChatForm();
});

function openNewChatForm() {
    const formHTML = `
        <form id="newChatForm" class="new-chat-form">
            <label for="username">User Name:</label>
            <input type="text" id="username" name="username" required>
            <button type="submit">Add Chat</button>
        </form>
    `;
    document.body.insertAdjacentHTML("beforeend", formHTML);

    document.getElementById("newChatForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        addNewChat(username);
        closeNewChatForm();
    });
}

function addNewChat(username) {
    const newChat = { id: chats.length + 1, name: username, lastMessage: "" };
    chats.push(newChat);
    renderChats();
}

function closeNewChatForm() {
    document.getElementById("newChatForm").remove();
}

// Initialize chats
renderChats();

function openNewChatForm() {
    const backdropHTML = `<div class="new-chat-backdrop"></div>`;
    const formHTML = `
        <form id="newChatForm" class="new-chat-form">
            <label for="username">User Name:</label>
            <input type="text" id="username" name="username" placeholder="Enter user name" required>
            <button type="submit">Add Chat</button>
        </form>
    `;

    document.body.insertAdjacentHTML("beforeend", backdropHTML + formHTML);

    document.getElementById("newChatForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        if (username) {
            addNewChat(username);
            closeNewChatForm();
        }
    });

    // Close form when clicking on the backdrop
    document.querySelector(".new-chat-backdrop").addEventListener("click", closeNewChatForm);
}

function closeNewChatForm() {
    document.querySelector(".new-chat-backdrop")?.remove();
    document.getElementById("newChatForm")?.remove();
}

// Event listener for sending messages
sendMessageBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevent line break in input
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        messagesDiv.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        messageInput.value = ""; // Clear the input field after sending
    }
}

// Search chat functionality
document.getElementById("search-chat").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const chatItems = document.querySelectorAll("#chat-list li");

    chatItems.forEach((item) => {
        const chatName = item.textContent.toLowerCase();
        if (chatName.includes(searchText)) {
            item.style.display = ""; // Show matching items
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });
});
