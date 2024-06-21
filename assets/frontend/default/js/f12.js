(function() {
    const threshold = 160;
    const warningUrl = 'https://nvanchinhit.info.vn/'; // Thay đổi URL này thành URL của trang cảnh báo của bạn

    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    const redirectToWarning = function() {
        window.location.href = warningUrl;
    };

    const detectDevTools = function() {
        if (isMobileDevice) {
            return; // Bỏ qua kiểm tra DevTools trên thiết bị di động
        }

        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            redirectToWarning();
        }
    };

    // Kiểm tra DevTools ngay khi trang được tải
    detectDevTools();

    // Thiết lập kiểm tra định kỳ mỗi 0.5 giây
    setInterval(detectDevTools, 500);

    document.addEventListener('keydown', function(event) {
        // Chặn F12
        if (event.key === "F12") {
            event.preventDefault();
        }

        // Chặn Ctrl+Shift+I (DevTools)
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
        }

        // Chặn Ctrl+U (Xem nguồn trang)
        if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
            event.preventDefault();
        }

        // Chặn Ctrl+Shift+C hoặc Ctrl+Shift+J (DevTools)
        if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.key === 'J')) {
            event.preventDefault();
        }
    });

    // Chặn chuột phải
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // Chặn hành vi chọn và sao chép
    document.addEventListener('copy', function(event) {
        event.preventDefault();
    });

    document.addEventListener('selectstart', function(event) {
        event.preventDefault();
    });

    window.addEventListener('keyup', function(event) {
        // Chặn Ctrl+U (Xem nguồn trang)
        if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
            event.preventDefault();
        }
    });
})();
