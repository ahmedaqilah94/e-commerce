import { useTranslation } from "react-i18next";

function ModalMessage({ isOpen, onClose, message }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray-900/70 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 text-center relative border border-gray-100"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 font-bold text-xl"
        >
          &times;
        </button>

        <p className="text-gray-600 text-sm mb-5">{message}</p>

        <button
          type="button"
          onClick={onClose}
          className="w-full bg-primary hover:bg-red-600 text-white font-medium py-2 rounded-md transition duration-200"
        >
          {t("Ok")}
        </button>
      </div>
    </div>
  );
}

export default ModalMessage;
