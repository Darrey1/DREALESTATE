// src/components/ChatInterface.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Loader } from 'lucide-react';

const ChatInterface = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your AI assistant. How can I help you with lead management, property info, or scheduling today?", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate AI response
        setTimeout(() => {
            let response;
            const lowerInput = input.toLowerCase();

            if (lowerInput.includes('lead') || lowerInput.includes('prospect')) {
                response = "I can help you manage your leads! Would you like me to qualify a new lead, schedule a follow-up, or provide lead statistics?";
            } else if (lowerInput.includes('schedule') || lowerInput.includes('appointment')) {
                response = "I can set up an appointment for you. What date and time works for you, and who's the client?";
            } else if (lowerInput.includes('property') || lowerInput.includes('listing')) {
                response = "I can retrieve property information for you. Which property are you interested in or would you like to add a new listing?";
            } else {
                response = "I'm here to assist with lead management, scheduling, and property information. What specific area can I help you with today?";
            }

            const aiMessage = { id: messages.length + 2, text: response, sender: 'ai' };
            setMessages(prev => [...prev, aiMessage]);
            setIsLoading(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-medium">Drealestate Assistant</h3>
                <button onClick={onClose} className="text-white">
                    <X className="h-5 w-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`px-4 py-3 rounded-lg max-w-xs lg:max-w-md ${message.sender === 'user'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-800 border border-gray-200'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg flex items-center">
                            <Loader className="h-4 w-4 animate-spin mr-2" />
                            Thinking...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex items-center">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyUp={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows="2"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className={`ml-2 p-2 rounded-full ${!input.trim() || isLoading
                            ? 'bg-gray-300 text-gray-500'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        <Send className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;