import { toast } from 'react-toastify'

export const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

export const showSuccessToast = (message) => {
  toast.success(message, {
    ...toastConfig,
    style: {
      background: '#3b82f6',
      color: '#ffffff',
      fontWeight: '600',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
    },
    progressStyle: {
      background: '#ffffff',
    },
    // Make close button visible with white color
    closeButton: ({ closeToast }) => (
      <button
        onClick={closeToast}
        style={{
          color: '#ffffff',
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          opacity: 0.8,
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
      >
        ✕
      </button>
    ),
  })
}

export const showErrorToast = (message) => {
  toast.error(message, {
    ...toastConfig,
    style: {
      background: '#ef4444',
      color: '#ffffff',
      fontWeight: '600',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
    },
    progressStyle: {
      background: '#ffffff',
    },
    // Make close button visible with white color
    closeButton: ({ closeToast }) => (
      <button
        onClick={closeToast}
        style={{
          color: '#ffffff',
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          opacity: 0.8,
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
      >
        ✕
      </button>
    ),
  })
}

export const showLoadingToast = (message) => {
  return toast.loading(message, {
    ...toastConfig,
    style: {
      background: '#1f2937',
      color: '#ffffff',
      fontWeight: '600',
      borderRadius: '12px',
    },
    // Make close button visible on loading toast too
    closeButton: ({ closeToast }) => (
      <button
        onClick={closeToast}
        style={{
          color: '#ffffff',
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          opacity: 0.8,
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
      >
        ✕
      </button>
    ),
  })
}
