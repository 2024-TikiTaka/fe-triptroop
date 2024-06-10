const CustomDivider = ({ text }) => {
    return (
        <div className="position-relative my-5">
            <hr />
            <p className="small bg-white bg-mode position-absolute top-50 start-50 translate-middle px-2">
                {text}
            </p>
        </div>
    );
};

export default CustomDivider;