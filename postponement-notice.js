<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KUMUN 2025 Postponement Notice</title>
    <style>
        /* Popup Overlay */
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(17, 24, 39, 0.85);
            backdrop-filter: blur(8px);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .popup-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        /* Popup Container */
        .popup-container {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 25px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
            max-width: 600px;
            width: 100%;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(59, 130, 246, 0.1);
            transform: scale(0.8) translateY(50px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .popup-overlay.active .popup-container {
            transform: scale(1) translateY(0);
        }

        /* Top gradient bar */
        .popup-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #14b8a6, #3b82f6, #8b5cf6);
            background-size: 300% 300%;
            animation: topGradientFlow 4s ease infinite;
        }

        @keyframes topGradientFlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        /* Close Button */
        .popup-close {
            position: absolute;
            top: 20px;
            right: 25px;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #6b7280;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10;
        }

        .popup-close:hover {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            transform: scale(1.1);
        }

        /* Popup Header */
        .popup-header {
            text-align: center;
            padding: 40px 40px 20px;
            position: relative;
        }

        .popup-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { 
                box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
                transform: scale(1);
            }
            50% { 
                box-shadow: 0 15px 40px rgba(245, 158, 11, 0.5);
                transform: scale(1.05);
            }
        }

        .popup-title {
            font-size: 2rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #111827, #3b82f6);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
        }

        .popup-subtitle {
            font-size: 1.1rem;
            color: #374151;
            font-weight: 500;
            opacity: 0.9;
        }

        /* Popup Content */
        .popup-content {
            padding: 0 40px 30px;
            text-align: left;
        }

        .notice-box {
            background: rgba(245, 158, 11, 0.05);
            padding: 25px;
            border-radius: 15px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            border-left: 5px solid #f59e0b;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }

        .notice-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.8s ease;
        }

        .notice-box:hover::before {
            left: 100%;
        }

        .notice-box h4 {
            color: #111827;
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .notice-box h4::before {
            content: '⚠️';
            font-size: 1.1rem;
        }

        .notice-box p {
            color: #374151;
            line-height: 1.7;
            margin-bottom: 15px;
            font-size: 1.05rem;
        }

        .notice-box p:last-child {
            margin-bottom: 0;
        }

        .notice-box strong {
            color: #111827;
            font-weight: 700;
        }

        /* Contact Information */
        .contact-info {
            background: rgba(59, 130, 246, 0.03);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(59, 130, 246, 0.1);
            margin-bottom: 30px;
        }

        .contact-info h5 {
            color: #111827;
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #111827, #3b82f6);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .contact-info p {
            color: #374151;
            margin-bottom: 8px;
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .contact-info p:last-child {
            margin-bottom: 0;
        }

        .contact-info a {
            color: #14b8a6;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .contact-info a:hover {
            color: #3b82f6;
        }

        /* Popup Footer */
        .popup-footer {
            padding: 0 40px 40px;
            text-align: center;
        }

        .popup-button {
            background: linear-gradient(to right, #14b8a6, #3b82f6);
            color: white;
            border: none;
            padding: 14px 32px;
            border-radius: 30px;
            font-size: 1.05rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
            position: relative;
            overflow: hidden;
        }

        .popup-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .popup-button:hover::before {
            left: 100%;
        }

        .popup-button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.6);
            background: linear-gradient(to right, #16a085, #2563eb);
        }

        .popup-button:active {
            transform: translateY(-1px) scale(0.98);
            transition: all 0.1s ease;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
            .popup-container {
                margin: 10px;
                border-radius: 20px;
            }

            .popup-header {
                padding: 30px 25px 15px;
            }

            .popup-content {
                padding: 0 25px 20px;
            }

            .popup-footer {
                padding: 0 25px 30px;
            }

            .popup-title {
                font-size: 1.6rem;
            }

            .popup-subtitle {
                font-size: 1rem;
            }

            .popup-icon {
                width: 65px;
                height: 65px;
                font-size: 2rem;
                margin-bottom: 20px;
            }

            .notice-box {
                padding: 20px;
            }

            .contact-info {
                padding: 15px;
            }

            .popup-button {
                padding: 12px 28px;
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Popup Notice -->
    <div class="popup-overlay" id="postponementPopup">
        <div class="popup-container">
            <button class="popup-close" id="closePopup" aria-label="Close Notice">&times;</button>
            
            <div class="popup-header">
                <div class="popup-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h2 class="popup-title">Important Notice</h2>
                <p class="popup-subtitle">KUMUN 2025 Program Update</p>
            </div>

            <div class="popup-content">
                <div class="notice-box">
                    <h4>Event Postponed</h4>
                    <p>Due to the <strong>ongoing situation in Nepal</strong> and in consideration of the safety and well-being of all participants, <strong>KUMUN 2025 has been postponed until further notice</strong>.</p>
                    <p>We are closely monitoring the situation and will announce the <strong>new dates</strong> as soon as it is safe and appropriate to proceed with the conference.</p>
                    <p>We sincerely apologize for any inconvenience this may cause and appreciate your understanding during this challenging time.</p>
                </div>

                <div class="contact-info">
                    <h5>Stay Updated</h5>
                    <p><strong>Email:</strong> <a href="mailto:kumun@ku.edu.np">kumun@ku.edu.np</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+9779862960111">+977-9862960111</a> (Ms. Samriddhi Neupane)</p>
                    <p><strong>Phone:</strong> <a href="tel:+9779869405146">+977-9869405146</a> (Mr. Mandip Paudel)</p>
                    <p>Follow our social media pages for regular updates on the new conference dates.</p>
                </div>
            </div>

            <div class="popup-footer">
                <button class="popup-button" id="acknowledgeButton">I Understand</button>
            </div>
        </div>
    </div>

    <script>
        // Popup functionality
        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('postponementPopup');
            const closeBtn = document.getElementById('closePopup');
            const acknowledgeBtn = document.getElementById('acknowledgeButton');
            
            // Show popup on page load
            setTimeout(() => {
                popup.classList.add('active');
            }, 500); // Small delay for better user experience
            
            // Close popup function
            function closePopup() {
                popup.classList.remove('active');
                // Store in sessionStorage to prevent showing again in same session
                sessionStorage.setItem('kumunNoticeShown', 'true');
            }
            
            // Event listeners
            closeBtn.addEventListener('click', closePopup);
            acknowledgeBtn.addEventListener('click', closePopup);
            
            // Close on overlay click
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    closePopup();
                }
            });
            
            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popup.classList.contains('active')) {
                    closePopup();
                }
            });
            
            // Check if notice was already shown in this session
            if (sessionStorage.getItem('kumunNoticeShown')) {
                popup.classList.remove('active');
            }
        });
    </script>
</body>
</html>