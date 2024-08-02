// src/components/WhatsAppButton.js
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import "./WhatsupButton.css";

const WhatsAppButton = () => {
  return (
    <div className="floating-whatsapp">
      <FloatingWhatsApp
        phoneNumber="+919880883454"
        accountName="Sachin Just Drive"
        avatar="./sachin_just_drive_Logo.png" // Optional
        statusMessage="Typically replies within 1 hour" // Optional
        chatMessage="Hello! How can I help you?" // Optional
        allowClickAway // Optional
        notification // Optional
        notificationDelay={60000} // Optional
      />
    </div>
  );
};

export default WhatsAppButton;
