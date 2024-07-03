import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";

interface ModalCompProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

const ModalComp = ({ isOpenModal, closeModal }: ModalCompProps) => {
  return (
    <div>
      <>
        <Dialog
          open={isOpenModal}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
        >
          <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/40"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4">
              <DialogPanel
                transition
                className="w-full max-w-xl rounded bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-2xl font-bold text-black "
                >
                  Cập nhật trạng thái
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-white/50">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
                <div className="mt-4">
                  {/* <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </Button> */}
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    </div>
  );
};

export default ModalComp;
