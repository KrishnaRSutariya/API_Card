import { HashLoader } from "react-spinners";

const PreLoader = () => {
    return (
        <>
            <div id="preloading">
                <HashLoader
                    color="#282c34"
                    cssOverride={{}}
                    loading
                    size={50}
                    speedMultiplier={2}
                />
            </div>
        </>
    )
}

export default PreLoader;