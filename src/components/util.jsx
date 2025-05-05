import { toast } from "react-toastify";

let toastActive = false; // Tracks if a toast is currently active

export const handleSuccess = (msg, setButtonDisabled) => {
    if (toastActive) return;  // Prevent multiple toasts
    console.log(1212)
    toastActive = true;  // Mark toast as active
    setButtonDisabled(true);  // Disable button

    toast.success(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        onClose: () => {
            toastActive = false; // Reset when toast disappears
            setButtonDisabled(false);  // Re-enable button
        }
    });
};

export const handleError = (msg, setButtonDisabled) => {
    if (toastActive) return;
    console.log(123434)
    toastActive = true;
    setButtonDisabled(true);

    toast.error(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        onClose: () => {
            toastActive = false;
            setButtonDisabled(false);
        }
    });
};
