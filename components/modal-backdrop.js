'use client';

import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
    const router = useRouterer()
    return (
        <div className="modal-backdrop" onClick={router.back} />
    )
}

export default ModalBackdrop