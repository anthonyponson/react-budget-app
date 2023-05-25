import { useState } from 'react'

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleConfirm = () => {
    setIsOpen(false)
    onConfirm()
  }

  const handleCancel = () => {
    setIsOpen(false)
    onCancel()
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className='bg-white p-6 rounded-md shadow-md'>
        <p className='mb-4'>{message}</p>
        <div className='flex justify-end'>
          <button
            className='px-4 py-2 mr-2 bg-gray-500 text-white rounded'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded'
            onClick={handleConfirm}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPopup
