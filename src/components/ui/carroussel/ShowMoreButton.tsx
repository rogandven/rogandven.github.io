import { MdInfoOutline } from "react-icons/md";
import { DAISYUI_ROUNDED_BUTTON } from "../../../constants/daisyui.constants";
import { useState } from "react";

function ShowMoreButton(Props: any) {
    const id = Props?.id || 0;
    const [visible, setVisible] = useState(true);

    return (
        <div className={`tooltip tooltip-bottom tooltip-end text-base font-normal h-min absolute right-0 top-0 mr-4 mt-10 ${visible ? "" : "hidden"}`} data-tip={"Mostrar Más"}>
            <button className={`btn-info ${DAISYUI_ROUNDED_BUTTON} text-3xl absolute right-2 top-2 ${visible ? "" : "hidden"} -mr-4 -mt-10`} onClick={() => {
                try {
                    const element: any = document?.getElementById(`my_modal_${id}`);
                    element?.showModal();
                } catch(error) {
                    setVisible(false);
                }}} aria-haspopup="menu" aria-label="Mostrar Más">
                <MdInfoOutline className="overflow-visible" />
            </button>
        </div>
    );
}

export default ShowMoreButton;