const CustomDivider = ({ text, my = "my-5" }) => {
    return (
        <div className={"position-relative " + my}>
            <hr />
            <p className="small bg-white bg-mode position-absolute top-50 start-50 translate-middle px-2">
                {text}
            </p>
        </div>
    );
};

export default CustomDivider;